import type { AvatarSize, BaseProps } from '../interface';
type Props = BaseProps & {
    id?: string;
    size?: AvatarSize;
    image?: string;
    name?: string;
    useNameAsInitials?: boolean;
};
export default function DAvatar({ id, size, image, name: nameProp, useNameAsInitials, className, style, dataAttributes, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
