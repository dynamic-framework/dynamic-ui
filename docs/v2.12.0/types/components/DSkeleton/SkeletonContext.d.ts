/// <reference types="react" />
/**
 * `true` when a `DSkeleton` is rendered inside another one. Nested skeletons
 * only lay out their items: the outermost one owns the `role="status"` region
 * and the label announced by assistive technology, so composing skeletons made
 * of skeletons never duplicates the announcement.
 */
declare const SkeletonContext: import("react").Context<boolean>;
export default SkeletonContext;
