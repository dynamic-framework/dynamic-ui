import { CSSProperties } from 'react';
import { DefaultToastOptions, Toaster, ToastPosition } from 'react-hot-toast';

/**
 * Props for `DToastContainer`. This component must be placed once near the root
 * of your application (typically inside `DContextProvider`) so that toasts
 * dispatched via `useDToast` have a render target.
 */
export type DToastContainerProps = {
  /**
   * Additional CSS class applied to the portal container `<div>`.
   * Useful for scoping z-index or stacking context in your layout.
   */
  containerClassName?: string;
  /**
   * Default position for toasts that do not specify their own `position`.
   * @default 'bottom-center'
   */
  position?: ToastPosition;
  /**
   * When `true`, new toasts appear at the bottom of the stack instead of the top.
   * @default false
   */
  reverseOrder?: boolean;
  /**
   * Inline styles applied to the portal container `<div>`.
   */
  containerStyle?: CSSProperties;
  /**
   * Default options merged into every toast rendered inside this container.
   * Mirrors `DefaultToastOptions` from `react-hot-toast`.
   */
  toastOptions?: DefaultToastOptions;
  /**
   * Gap in pixels between stacked toasts.
   * @default 8
   */
  gutter?: number;
};

export default function DToastContainer(
  {
    containerClassName,
    position = 'bottom-center',
    reverseOrder = false,
    containerStyle,
    toastOptions,
    gutter = 8,
  }: DToastContainerProps,
) {
  return (
    <Toaster
      containerClassName={containerClassName}
      position={position}
      reverseOrder={reverseOrder}
      containerStyle={containerStyle}
      gutter={gutter}
      toastOptions={toastOptions}
    />
  );
}
