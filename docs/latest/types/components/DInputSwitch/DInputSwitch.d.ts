import type { ReactNode } from 'react';
import type { BaseProps } from '../interface';
type Props = BaseProps & {
    id?: string;
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
    ariaLabel?: string;
    name?: string;
    /**
     * Checked state of the switch.
     *
     * Passed together with `onChange` the switch is fully controlled: when the
     * parent rejects a change the switch snaps back to this value.
     *
     * Passed on its own it is taken as the starting value and the switch keeps
     * toggling by itself — the historical behaviour. Prefer `defaultChecked` for
     * that, it says so out loud.
     */
    checked?: boolean;
    /** Starting checked state for uncontrolled usage. */
    defaultChecked?: boolean;
    disabled?: boolean;
    inputClassName?: string;
    invalid?: boolean;
    valid?: boolean;
    hint?: string;
    readonly?: boolean;
    onChange?: (isChecked: boolean) => void;
};
export default function DInputSwitch({ id: idProp, label, ariaLabel, name, checked, defaultChecked, disabled, invalid, valid, hint, readonly, className, style, dataAttributes, inputClassName, onChange, }: Props): import("react").JSX.Element;
export {};
