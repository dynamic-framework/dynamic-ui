/// <reference types="react" />
type Props = {
    /** ID of the DOM element (portal node) to render the confirm modal into. */
    nodeId: string;
};
/**
 * Container that renders confirm modals into the specified portal node.
 *
 * Must be explicitly mounted by the user (typically as a sibling of app content
 * within `DContextProvider`). The container floats above the portal stack and
 * intercepts Escape key events to close the top confirm modal without affecting
 * underlying modals or overlays.
 *
 * @example
 * <DContextProvider>
 *   <App />
 *   <DConfirmModalContainer nodeId="d-portal" />
 * </DContextProvider>
 */
export default function DConfirmModalContainer({ nodeId }: Props): import("react").ReactPortal | null;
export {};
