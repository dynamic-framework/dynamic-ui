/* eslint-disable @typescript-eslint/no-explicit-any */
import { ToastContainer, Slide } from 'react-toastify';

import type { CSSProperties } from 'react';
import type { ToastContainerProps } from 'react-toastify';

import classNames from 'classnames';
import { BaseProps } from '../interface';

type Props = BaseProps
& Pick<ToastContainerProps,
| 'autoClose'
| 'closeOnClick'
| 'position'
| 'transition'
> & {
  stacked?: boolean;
  style?: CSSProperties & {
    '--toastify-toast-width': any;
    [index: string]: any;
  }
};

export default function DToastContainer(
  {
    style,
    className,
    closeOnClick,
    position = 'bottom-center',
    autoClose = false,
    stacked = false,
    transition = Slide,
  }: Props,
) {
  return (
    <ToastContainer
      toastClassName={() => classNames('shadow-none p-0 cursor-default', className)}
      position={position}
      autoClose={autoClose}
      closeOnClick={closeOnClick}
      transition={transition}
      closeButton={false}
      style={style}
      hideProgressBar
      stacked={stacked}
    />
  );
}
