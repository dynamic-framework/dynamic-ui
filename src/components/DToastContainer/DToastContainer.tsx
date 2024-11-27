import { Toaster, ToasterProps } from 'react-hot-toast';

export default function DToastContainer(
  {
    containerClassName,
    position = 'bottom-center',
    reverseOrder = false,
    containerStyle,
    toastOptions,
    gutter,
  }: ToasterProps,
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
