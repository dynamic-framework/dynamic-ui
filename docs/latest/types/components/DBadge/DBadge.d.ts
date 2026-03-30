import type { BaseProps, ComponentColor } from '../interface';
import { ResponsiveProp } from '../../hooks/useResponsiveProp';
type Props = BaseProps & {
    text?: string;
    soft?: boolean;
    size?: string | ResponsiveProp;
    rounded?: boolean;
    color?: ComponentColor;
    id?: string;
    iconStart?: string;
    iconEnd?: string;
    iconMaterialStyle?: boolean;
    iconFamilyClass?: string;
    iconFamilyPrefix?: string;
};
export default function DBadge(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
