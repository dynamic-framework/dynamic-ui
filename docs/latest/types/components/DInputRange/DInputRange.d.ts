import type { ReactNode } from 'react';
import type { BaseProps } from '../interface';
declare const ForwardedDInputRange: import("react").ForwardRefExoticComponent<Omit<Omit<Omit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref">, "type">, "label" | "ariaLabel" | keyof BaseProps | "filledValue"> & BaseProps & {
    /**
     * The label of the control. Any node is accepted, so it can carry a link, an
     * info trigger or other markup.
     *
     * Text doubles as the control's accessible name. A richer label does not, so
     * pass `ariaLabel` alongside it; a development-only warning says so when it
     * is missing.
     */
    label?: ReactNode;
    /**
     * Accessible name of the control, needed when `label` is not plain text.
     * Without it the name becomes whatever the label subtree computes to, which
     * for a label carrying a link or an icon reads as the wrong name or as none.
     */
    ariaLabel?: string | undefined;
    filledValue?: boolean | undefined;
} & import("react").RefAttributes<HTMLInputElement>>;
export default ForwardedDInputRange;
