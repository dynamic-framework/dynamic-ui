import type {
  BaseProps,
  ComponentColor,
  IconValue,
} from '../interface';
import type { ResponsiveProp } from '../../hooks/useResponsiveProp';

import DIconBase from '../DIconBase';
import { useDContext } from '../../contexts';

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
  } = useDContext();

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
