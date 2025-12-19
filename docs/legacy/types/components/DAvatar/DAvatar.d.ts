import type { AvatarSize, BaseProps } from '../interface';
type Props = BaseProps & {
    id?: string;
    size?: AvatarSize;
    image?: string;
    name?: string;
    useNameAsInitials?: boolean;
    theme?: string;
    variant?: 'light' | 'dark';
};
export default function DAvatar({ id, size, image, name: nameProp, useNameAsInitials, theme, variant, className, style, dataAttributes, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
