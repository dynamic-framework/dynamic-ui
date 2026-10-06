/// <reference types="react" />
import type { DIconBaseProps } from '../DIconBase';
type Props = DIconBaseProps;
/**
 * Thin wrapper over `DIconBase` that fills the icon-font configuration
 * (`familyClass`, `familyPrefix`, `materialStyle`) from `DContextProvider`
 * whenever the caller does not pass it explicitly.
 *
 * Name resolution itself — registry, then lucide-react, then the icon-font
 * family — lives in `DIconBase`, so both components behave identically.
 */
export default function DIcon({ icon, familyClass: propFamilyClass, familyPrefix: propFamilyPrefix, materialStyle: propMaterialStyle, ...props }: Props): import("react").JSX.Element;
export {};
