import type { ReactNode } from 'react';
import type { BaseProps, FamilyIconProps } from '../interface';
import { DBoxFileProps } from './useDBoxFile';
type Props = BaseProps & FamilyIconProps & DBoxFileProps & {
    icon?: string;
    children?: ReactNode | ((openFileDialog: () => void) => ReactNode);
};
export default function DBoxFile({ icon: iconProp, iconFamilyClass, iconFamilyPrefix, iconMaterialStyle, children, className, style, dataAttributes, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
