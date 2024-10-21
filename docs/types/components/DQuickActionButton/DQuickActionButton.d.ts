import type { BaseProps } from '../interface';
type Props = BaseProps & {
    line1: string;
    line2: string;
    actionLinkText?: string;
    actionLinkTheme?: string;
    actionIcon?: string;
    secondaryActionIcon?: string;
    secondaryActionAriaLabel?: string;
    actionIconFamilyClass?: string;
    actionIconFamilyPrefix?: string;
    representativeImage?: string;
    representativeIcon?: string;
    representativeIconTheme?: string;
    representativeIconHasCircle?: boolean;
    representativeIconFamilyClass?: string;
    representativeIconFamilyPrefix?: string;
    onClick?: () => void;
    onClickSecondary?: () => void;
};
/**
 * @deprecated
 */
export default function DQuickActionButton({ line1, line2, className, actionLinkText, actionLinkTheme, actionIcon, secondaryActionIcon, secondaryActionAriaLabel, actionIconFamilyClass, actionIconFamilyPrefix, representativeImage, representativeIcon, representativeIconTheme, representativeIconHasCircle, representativeIconFamilyClass, representativeIconFamilyPrefix, onClick, onClickSecondary, style, dataAttributes, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
