import classNames from 'classnames';
import { useMemo } from 'react';

import type { BaseProps, ComponentColor } from '../interface';
import DIcon from '../DIcon';

import {
  useMediaBreakpointUpXs,
  useMediaBreakpointUpSm,
  useMediaBreakpointUpMd,
  useMediaBreakpointUpLg,
  useMediaBreakpointUpXl,
  useMediaBreakpointUpXxl,
} from '../../hooks/useMediaBreakpointUp';

const BREAKPOINT_ORDER = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const;
type Breakpoint = typeof BREAKPOINT_ORDER[number];
type ResponsiveSizeProps = Partial<Record<`size${Capitalize<Breakpoint>}`, 'sm' | 'md' | 'lg'>>;

type Props =
& BaseProps
& ResponsiveSizeProps
& {
  text?: string;
  soft?: boolean;
  size?: 'sm' | 'md' | 'lg';
  rounded?: boolean;
  color?: ComponentColor;
  id?: string;
  iconStart?: string;
  iconEnd?: string;
  iconMaterialStyle?: boolean;
  iconFamilyClass?: string;
  iconFamilyPrefix?: string;
};

export default function DBadge(props: Props) {
  const {
    text,
    soft = false,
    color = 'primary',
    id,
    rounded,
    className,
    size,
    style,
    iconStart,
    iconEnd,
    iconMaterialStyle,
    iconFamilyClass,
    iconFamilyPrefix,
    dataAttributes,
    ...responsiveSizes
  } = props;

  // Responsive size resolution using useMediaBreakpointUp
  let resolvedSize: 'sm' | 'md' | 'lg' | undefined = size;
  // Always call hooks in the same order
  const matchesXxl = useMediaBreakpointUpXxl(true);
  const matchesXl = useMediaBreakpointUpXl(true);
  const matchesLg = useMediaBreakpointUpLg(true);
  const matchesMd = useMediaBreakpointUpMd(true);
  const matchesSm = useMediaBreakpointUpSm(true);
  const matchesXs = useMediaBreakpointUpXs(true);

  if (Object.keys(responsiveSizes).length > 0) {
    const bpHooks = {
      xxl: matchesXxl,
      xl: matchesXl,
      lg: matchesLg,
      md: matchesMd,
      sm: matchesSm,
      xs: matchesXs,
    };
    // Recorrer breakpoints de mayor a menor, tomar el primer que coincida
    const matchedBp = BREAKPOINT_ORDER.find((bp) => {
      const prop = `size${bp.charAt(0).toUpperCase()}${bp.slice(1)}` as keyof typeof responsiveSizes;
      return responsiveSizes[prop] && bpHooks[bp];
    });

    if (matchedBp) {
      const prop = `size${matchedBp.charAt(0).toUpperCase()}${matchedBp.slice(1)}` as keyof typeof responsiveSizes;
      resolvedSize = responsiveSizes[prop];
    }
  }

  const generateClasses = useMemo(
    () => ({
      badge: true,
      [`badge-${color}`]: !!color && !soft,
      [`badge-soft-${color}`]: !!color && soft,
      'rounded-pill': !!rounded,
      [`badge-${resolvedSize}`]: !!resolvedSize,
    }),
    [rounded, soft, color, resolvedSize],
  );
  return (
    <span
      className={classNames(generateClasses, className)}
      style={style}
      {...id && { id }}
      {...dataAttributes}
    >
      {iconStart && (
        <DIcon
          icon={iconStart}
          familyClass={iconFamilyClass}
          familyPrefix={iconFamilyPrefix}
          materialStyle={iconMaterialStyle}
        />
      )}
      <span>{text}</span>
      {iconEnd && (
        <DIcon
          icon={iconEnd}
          familyClass={iconFamilyClass}
          familyPrefix={iconFamilyPrefix}
          materialStyle={iconMaterialStyle}
        />
      )}
    </span>
  );
}
