/// <reference types="react" />
import type { BaseProps, ComponentColor, ComponentSize } from '../interface';
import { ResponsiveProp } from '../../hooks/useResponsiveProp';
type Props = BaseProps & {
    text?: string;
    soft?: boolean;
    size?: ComponentSize | ResponsiveProp<ComponentSize>;
    rounded?: boolean;
    color?: ComponentColor;
    id?: string;
    iconStart?: string;
    iconEnd?: string;
    iconMaterialStyle?: boolean;
    iconFamilyClass?: string;
    iconFamilyPrefix?: string;
};
export default function DBadge(props: Props): import("react").JSX.Element;
export {};
