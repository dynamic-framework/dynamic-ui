import type { DIconBaseProps } from '../DIconBase';

import DIconBase from '../DIconBase';
import { useDContext } from '../../contexts';

type Props = DIconBaseProps;

/**
 * Thin wrapper over `DIconBase` that fills the icon-font configuration
 * (`familyClass`, `familyPrefix`, `materialStyle`) from `DContextProvider`
 * whenever the caller does not pass it explicitly.
 *
 * Name resolution itself — registry, then lucide-react, then the icon-font
 * family — lives in `DIconBase`, so both components behave identically.
 */
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
  } = useDContext();

  return (
    <DIconBase
      icon={icon}
      familyClass={propFamilyClass ?? familyClass}
      familyPrefix={propFamilyPrefix ?? familyPrefix}
      materialStyle={propMaterialStyle ?? materialStyle}
      {...props}
    />
  );
}
