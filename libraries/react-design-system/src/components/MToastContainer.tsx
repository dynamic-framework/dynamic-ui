import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MToastContainer() {
  return (
    <ToastContainer
      position="bottom-center"
      autoClose={false}
      hideProgressBar
      closeOnClick={false}
      closeButton={false}
      transition={Zoom}
    />
  );
}
