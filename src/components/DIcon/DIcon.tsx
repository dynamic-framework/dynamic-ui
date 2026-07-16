import type { IconValue } from '../interface';
import type { DIconBaseProps } from '../DIconBase';

import DIconBase from '../DIconBase';
import { useDContext } from '../../contexts';

type Props = DIconBaseProps;

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
