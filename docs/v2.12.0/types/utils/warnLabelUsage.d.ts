import type { ReactNode } from 'react';
type WarnLabelUsageOptions = {
    /** Component name, used to key the warning and to address the developer. */
    component: string;
    /** The `label` prop as received. */
    label: ReactNode;
    /** Whether an explicit accessible name reaches the control. */
    hasAccessibleName: boolean;
    /**
     * The prop this component actually accepts for the accessible name, so the
     * advice is usable: components that spread the native input attributes take
     * `aria-label`, the rest expose the camelCase `ariaLabel` and reject the
     * native one at compile time.
     */
    accessibleNameProp: 'aria-label' | 'ariaLabel';
    /** Whether the component is rendering in Bootstrap's floating-label layout. */
    floatingLabel?: boolean;
};
/**
 * Warns, only outside production builds, about the two ways a non-text `label`
 * goes wrong.
 *
 * A text label doubles as the control's accessible name. A `ReactNode` one does
 * not: the name becomes whatever the subtree happens to compute to, which for a
 * label carrying a link or an icon trigger reads as the wrong thing or as
 * nothing at all — so an explicit name is needed. Which prop carries it differs
 * per component, hence `accessibleNameProp`: naming the wrong one would send
 * the developer to a prop their component rejects.
 *
 * `form-floating` is the second case: it animates a single line of text between
 * the placeholder and the label position, so a node with its own height or its
 * own interactive children breaks the layout rather than the semantics.
 *
 * Labels the render paths drop are skipped through the same `hasLabelContent`
 * they use, so `label={condition && <span />}` with a false condition warns
 * about nothing: there is no label on the page to name.
 *
 * The `process.env.NODE_ENV` guard belongs at the call site — that is what
 * bundlers constant-fold, dropping this module from a consumer's production
 * bundle.
 */
export default function warnLabelUsage({ component, label, hasAccessibleName, accessibleNameProp, floatingLabel, }: WarnLabelUsageOptions): void;
export {};
