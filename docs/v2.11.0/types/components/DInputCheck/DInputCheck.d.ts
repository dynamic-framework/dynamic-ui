import type { ChangeEvent, ComponentPropsWithoutRef, ReactNode } from 'react';
import type { BaseProps, InputCheckType } from '../interface';
type Props = ComponentPropsWithoutRef<'input'> & BaseProps & {
    id?: string;
    type: InputCheckType;
    name?: string;
    /**
     * The label of the control. Any node is accepted, so it can carry a link, an
     * info trigger or other markup — the terms-and-conditions pattern.
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
    ariaLabel?: string;
    /**
     * Checked state of the control.
     *
     * Passed together with `onChange` the control is fully controlled: when the
     * parent rejects a change the DOM snaps back to this value.
     *
     * Passed on its own it is taken as the starting value and the control keeps
     * toggling by itself — the historical behaviour. Prefer `defaultChecked` for
     * that, it says so out loud.
     */
    checked?: boolean;
    /** Starting checked state for uncontrolled usage. */
    defaultChecked?: boolean;
    inputClassName?: string;
    disabled?: boolean;
    invalid?: boolean;
    valid?: boolean;
    hint?: string;
    /** Only applies when `type` is `checkbox`; ignored for `radio`. */
    indeterminate?: boolean;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
export default function DInputCheck({ id: idProp, type, name, label, ariaLabel, checked, defaultChecked, disabled, invalid, valid, indeterminate, inputClassName, value, hint, onChange, className, style, dataAttributes, ...props }: Props): import("react").JSX.Element;
export {};
