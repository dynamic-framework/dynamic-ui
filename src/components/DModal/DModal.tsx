import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
} from 'react';
import classNames from 'classnames';
import { motion, type Transition } from 'framer-motion';

import type { KeyboardEvent, PropsWithChildren } from 'react';

import { PREFIX_BS } from '../config';
import DPortalStack from '../../contexts/portal/DPortalStack';
import { registerPortalStack } from '../../contexts/portal/portalStackRegistry';
import getKeyboardFocusableElements from '../../utils/getKeyboardFocusableElements';
import warnDialogName from '../../utils/warnDialogName';
import DModalHeader from './components/DModalHeader';
import DModalLabelContext from './components/DModalLabelContext';
import DModalBody from './components/DModalBody';
import DModalFooter from './components/DModalFooter';

import type { BaseProps, ModalFullScreenFrom, ModalSize } from '../interface';

type Props = BaseProps & PropsWithChildren<{
  name:string;
  staticBackdrop?: boolean;
  scrollable?: boolean;
  centered?: boolean;
  fullScreen?: boolean;
  fullScreenFrom?: ModalFullScreenFrom;
  size?: ModalSize;
  transition?: Transition;
  /**
   * Accessible name for the dialog when it has no title anywhere. When set,
   * the dialog uses `aria-label` and ignores every title.
   */
  ariaLabel?: string;
  /**
   * Id of the element that names the dialog, for a title that lives outside
   * `Header` — hidden in the body, for instance. Takes precedence over a title
   * in `Header`; `ariaLabel` takes precedence over both.
   */
  ariaLabelledby?: string;
}>;

const defaultTransition: Transition = {
  ease: 'easeInOut',
  duration: 0.3,
};

// Los portales que se renderizan con DContextProvider solo animan su salida
// cuando este módulo forma parte del bundle.
registerPortalStack(DPortalStack);

function DModal(
  {
    name,
    className,
    style,
    staticBackdrop,
    scrollable,
    centered,
    fullScreen,
    fullScreenFrom,
    size,
    transition,
    children,
    dataAttributes,
    ariaLabel,
    ariaLabelledby,
  }: Props,
) {
  // Id propio del contenedor del título del header. `useId` lo hace único, así
  // que no puede chocar con ningún id del consumidor.
  const headerLabelId = useId();
  // Precedencia: `ariaLabel` manda sobre todo; si no, un título declarado con
  // `ariaLabelledby`; si no, el título del header.
  const labelledById = ariaLabel ? undefined : (ariaLabelledby ?? headerLabelId);

  // Foco inicial: el contenedor recibe el foco al montar, salvo que ya esté
  // dentro (un hijo con autoFocus).
  const dialogRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.contains(document.activeElement)) {
      dialog.focus();
    }
  }, []);

  // Un diálogo sin nombre accesible se anuncia sin decir qué es. El componente
  // no puede inventarlo, así que se avisa al desarrollador. El contenedor del
  // título lleva su id desde el primer render, sin estado de por medio, así
  // que aquí el DOM ya está asentado.
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      warnDialogName({
        component: 'DModal',
        name,
        labelledBy: labelledById,
        hasAriaLabelledby: !!ariaLabelledby,
      });
    }
  }, [ariaLabelledby, labelledById, name]);

  // Con el foco en el contenedor, Shift+Tab iría a lo que hay antes del
  // diálogo: el bucle de Tab de DPortalContext solo actúa desde el primer y el
  // último enfocable. Tab desde el contenedor ya va al primero. Sin
  // enfocables, ninguna de las dos teclas saca el foco del contenedor.
  const handleKeyDown = useCallback((event: KeyboardEvent<HTMLDivElement>) => {
    const dialog = dialogRef.current;
    if (event.key !== 'Tab' || !dialog || document.activeElement !== dialog) {
      return;
    }
    const focusableElements = getKeyboardFocusableElements(dialog);
    if (focusableElements.length === 0) {
      event.preventDefault();
      return;
    }
    if (event.shiftKey) {
      event.preventDefault();
      focusableElements[focusableElements.length - 1].focus();
    }
  }, []);

  const fullScreenClass = useMemo(() => {
    if (fullScreen) {
      if (fullScreenFrom) {
        return `modal-fullscreen-${fullScreenFrom}-down`;
      }
      return 'modal-fullscreen';
    }
    return '';
  }, [fullScreenFrom, fullScreen]);

  const generateModalDialogClasses = useMemo(() => ({
    'modal-dialog': true,
    'modal-dialog-centered': !!centered,
    'modal-dialog-scrollable': !!scrollable,
    [fullScreenClass]: !!fullScreen,
    ...size && { [`modal-${size}`]: true },
  }), [fullScreenClass, centered, fullScreen, scrollable, size]);

  return (
    <motion.div
      ref={dialogRef}
      className={classNames('modal portal show', className)}
      id={name}
      tabIndex={-1}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      aria-labelledby={labelledById}
      aria-hidden="false"
      style={style}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        ...(transition ?? defaultTransition),
        delay: 0.15,
      }}
      {...staticBackdrop && ({
        [`data-${PREFIX_BS}backdrop`]: 'static',
        [`data-${PREFIX_BS}keyboard`]: 'false',
      })}
      {...dataAttributes}
    >
      <div className={classNames(generateModalDialogClasses)}>
        <div className="modal-content">
          <DModalLabelContext.Provider value={headerLabelId}>
            {children}
          </DModalLabelContext.Provider>
        </div>
      </div>
    </motion.div>
  );
}

export default Object.assign(DModal, {
  Header: DModalHeader,
  Body: DModalBody,
  Footer: DModalFooter,
});
