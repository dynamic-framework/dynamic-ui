import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import classNames from 'classnames';
import { motion, type Transition } from 'framer-motion';

import type { KeyboardEvent, PropsWithChildren, SyntheticEvent } from 'react';

import { PREFIX_BS } from '../config';
import DPortalStack from '../../contexts/portal/DPortalStack';
import { registerPortalStack } from '../../contexts/portal/portalStackRegistry';
import getKeyboardFocusableElements from '../../utils/getKeyboardFocusableElements';
import useModalDialog from '../../hooks/useModalDialog';
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
   * Accessible name for the dialog when it has no visible title. When set,
   * the dialog uses `aria-label` instead of `aria-labelledby`.
   */
  ariaLabel?: string;
  /**
   * Id of the element that names the dialog, for a title that does not live
   * inside `DModal.Header` — hidden in the body, for instance. Without it the
   * dialog looks for `${name}Label` in the header, which only works for a
   * title rendered there. `ariaLabel` takes precedence over this.
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
  const labelId = `${name}Label`;
  // Con el nombre ya declarado, el header no debe adjudicarse `${name}Label`:
  // si el título vive fuera y usa ese mismo id, habría dos elementos con él y
  // el navegador resolvería con el del header, que puede estar vacío.
  const headerOwnsLabel = !ariaLabel && !ariaLabelledby;

  // Foco inicial: el contenedor recibe el foco al montar, salvo que ya esté
  // dentro (un hijo con autoFocus).
  const dialogRef = useRef<HTMLDialogElement>(null);
  // Abre el panel con showModal() y lo cierra antes de desmontarlo, que es lo
  // que devuelve el foco al elemento que lo abrió.
  useModalDialog(dialogRef);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.contains(document.activeElement)) {
      dialog.focus();
    }
  }, []);

  const labelledBy = ariaLabel ? undefined : (ariaLabelledby || labelId);
  // Con el foco en el contenedor, Shift+Tab iría a lo que hay antes del
  // diálogo: el bucle de Tab de DPortalContext solo actúa desde el primer y el
  // último enfocable. Tab desde el contenedor ya va al primero. Sin
  // enfocables, ninguna de las dos teclas saca el foco del contenedor.
  const handleKeyDown = useCallback((event: KeyboardEvent<HTMLDialogElement>) => {
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

  /*
   * Escape lo sigue gobernando el portal, que respeta `staticBackdrop` y corre
   * la animación de salida antes de desmontar el panel. Sin este veto el
   * navegador cerraría el diálogo por su cuenta y el panel desaparecería de
   * golpe, sin animación y con el portal todavía apilándolo.
   */
  const handleCancel = useCallback((event: SyntheticEvent) => {
    event.preventDefault();
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
    <motion.dialog
      ref={dialogRef}
      className={classNames('modal portal show', className)}
      id={name}
      tabIndex={-1}
      onKeyDown={handleKeyDown}
      onCancel={handleCancel}
      aria-label={ariaLabel}
      aria-labelledby={labelledBy}
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
          <DModalLabelContext.Provider value={headerOwnsLabel ? labelId : undefined}>
            {children}
          </DModalLabelContext.Provider>
        </div>
      </div>
    </motion.dialog>
  );
}

export default Object.assign(DModal, {
  Header: DModalHeader,
  Body: DModalBody,
  Footer: DModalFooter,
});
