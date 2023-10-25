import { ToastContainer, Slide } from 'react-toastify';

import type { CSSProperties } from 'react';
import type { ToastPosition } from 'react-toastify';

import classNames from 'classnames';
import { BaseProps } from '../interface';

type Props = BaseProps & {
  style?: CSSProperties & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    '--toastify-toast-width': any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [index: string]: any;
  },
  position?: ToastPosition;
};

export default function DToastContainer(
  {
    style,
    position = 'top-right',
    className,
  }: Props,
) {
  return (
    <ToastContainer
      toastClassName={() => classNames('shadow-none p-0 cursor-default', className)}
      position={position}
      autoClose={false}
      hideProgressBar
      closeOnClick={false}
      closeButton={false}
      transition={Slide}
      style={style}
    />
  );
}
