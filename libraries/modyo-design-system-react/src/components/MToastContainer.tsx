import type { CSSProperties } from 'react';
import { ToastContainer, Zoom } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

type Props = {
  style?: CSSProperties & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    '--toastify-toast-width': any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [index: string]: any;
  }
};

export default function MToastContainer({ style }: Props) {
  return (
    <ToastContainer
      position="bottom-center"
      autoClose={false}
      hideProgressBar
      closeOnClick={false}
      closeButton={false}
      transition={Zoom}
      style={style}
    />
  );
}
