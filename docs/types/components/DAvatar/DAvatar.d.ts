import type { AvatarSize, BaseProps } from '../interface';
type Props = BaseProps & {
    id?: string;
    size?: AvatarSize;
    image?: string;
    title?: string;
};
export default function DAvatar({ id, size, image, title, className, style, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
