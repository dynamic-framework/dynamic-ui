import type { ComponentProps } from 'react';

import DIconBase from '../DIconBase';
import { useDContext } from '../../contexts';

type Props = ComponentProps<typeof DIconBase>;

export default function DIcon(
  {
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
  } = useDContext();
  return (
    <DIconBase
      familyClass={propFamilyClass || familyClass}
      familyPrefix={propFamilyPrefix || familyPrefix}
      materialStyle={propMaterialStyle || materialStyle}
      {...props}
    />
  );
}
