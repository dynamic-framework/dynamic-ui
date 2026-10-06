import { jsx } from 'react/jsx-runtime';
import { Toaster } from 'react-hot-toast';

function DToastContainer({ containerClassName, position = 'bottom-center', reverseOrder = false, containerStyle, toastOptions, gutter = 8, }) {
    return (jsx(Toaster, { containerClassName: containerClassName, position: position, reverseOrder: reverseOrder, containerStyle: containerStyle, gutter: gutter, toastOptions: toastOptions }));
}

export { DToastContainer as default };
//# sourceMappingURL=DToastContainer.js.map
