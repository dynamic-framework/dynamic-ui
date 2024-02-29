import type { BaseProps } from '../interface';
type Props = BaseProps & {
    text?: string;
    dot?: boolean;
    soft?: boolean;
    theme?: string;
    id?: string;
};
export default function DBadge({ text, dot, soft, theme, id, className, style, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
