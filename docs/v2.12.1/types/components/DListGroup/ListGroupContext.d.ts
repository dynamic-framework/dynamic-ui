/// <reference types="react" />
/**
 * Element the enclosing `DListGroup` renders, so each `DListGroupItem` can
 * check that its own element is valid content for it. `undefined` outside a
 * `DListGroup`.
 */
declare const ListGroupContext: import("react").Context<"div" | "ol" | "ul" | undefined>;
export default ListGroupContext;
