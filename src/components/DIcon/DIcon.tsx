import { useContext } from 'react';
import type {
  BaseProps,
  ComponentColor,
  IconComponent,
  IconValue,
} from '../interface';
import type { ResponsiveProp } from '../../hooks/useResponsiveProp';

import DIconBase from '../DIconBase';
import { DContext } from '../../contexts/DContext';

type Props = BaseProps & {
  icon: IconValue;
  color?: ComponentColor;
  size?: string | ResponsiveProp;
  useListenerSize?: boolean;
  hasCircle?: boolean;
  materialStyle?: boolean;
  familyClass?: string;
  familyPrefix?: string;
  strokeWidth?: number;
};

type IconContextValue = {
  icon: {
    familyClass: string;
    familyPrefix: string;
    materialStyle: boolean;
  };
  iconRegistry?: Record<string, IconComponent>;
};

export default function DIcon(
  {
    icon,
    familyClass: propFamilyClass,
    familyPrefix: propFamilyPrefix,
    materialStyle: propMaterialStyle,
    ...props
  }: Props,
) {
  const {
    icon: {
      familyClass,
      familyPrefix,
      materialStyle,
    },
    iconRegistry,
  } = useContext(DContext) as IconContextValue;

  const registryIcon: IconValue | undefined = typeof icon === 'string'
    ? iconRegistry?.[icon]
    : undefined;

  const resolvedIcon: IconValue = registryIcon || icon;

  return (
    <DIconBase
      icon={resolvedIcon}
      familyClass={propFamilyClass ?? familyClass}
      familyPrefix={propFamilyPrefix ?? familyPrefix}
      materialStyle={propMaterialStyle ?? materialStyle}
      {...props}
    />
  );
}
