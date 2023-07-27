import type { CSSProperties } from 'react';
import { ToastContainer, Slide, ToastPosition } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

type Props = {
  style?: CSSProperties & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    '--toastify-toast-width': any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [index: string]: any;
  },
  position?: ToastPosition;
};

export default function MToastContainer({
  style,
  position = 'top-right',
}: Props) {
  return (
    <ToastContainer
      toastClassName={() => 'shadow-none p-0 cursor-default'}
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
