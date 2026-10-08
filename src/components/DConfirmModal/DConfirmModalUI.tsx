import {
  useState,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import DModal from '../DModal';
import DButton from '../DButton';
import DInput from '../DInput';
import useExitTransition from '../../hooks/useExitTransition';
import type { ConfirmModalEntry } from './confirmModalStore';

type Props = {
  entry: ConfirmModalEntry;
};

export default function DConfirmModalUI({ entry }: Props) {
  const {
    title = 'Are you sure you want to proceed?',
    message = 'Please confirm if you want to continue with this action.',
    confirmLabel = 'Confirm',
    cancelLabel = 'Cancel',
    confirmColor = 'primary',
    critical,
    onConfirmAction,
    onCloseAction,
    onRemoveAction,
  } = entry;

  const [confirmationCode, setConfirmationCode] = useState('');
  const [internalLoading, setInternalLoading] = useState(false);
  const isMountedRef = useRef(true);

  /**
   * The element, so this component can ask it to close.
   *
   * Dropping the store entry — which is what every path used to do — unmounts
   * the `<dialog>`, and an element removed from the document stops
   * transitioning. So the modal snapped out of existence while `.confirm-modal`
   * had a perfectly good exit declared on it. `framer-motion` used to hold the
   * element open through its own exit; with the animation in CSS, the element
   * has to be allowed to finish.
   */
  const dialogRef = useRef<HTMLDialogElement>(null);
  const afterExit = useExitTransition();

  /**
   * Which answer the user gave, read when the element reports it has closed.
   *
   * Both answers end at the same `close` event, and only one of them should
   * fire the consumer's `onClose`. A ref rather than state: it is read inside an
   * event handler and must not cause a render of its own.
   */
  const outcomeRef = useRef<'dismiss' | 'confirm'>('dismiss');

  useEffect(
    () => {
      const cleanup = () => {
        isMountedRef.current = false;
      };
      return cleanup;
    },
    [],
  );

  /** Starts the exit. The `close` event below finishes it. */
  const handleClose = useCallback(() => {
    outcomeRef.current = 'dismiss';
    const dialog = dialogRef.current;

    if (dialog?.open) {
      dialog.close();
      return;
    }

    /* No element to animate — report and drop in one go. */
    onCloseAction();
    onRemoveAction();
  }, [onCloseAction, onRemoveAction]);

  /**
   * The element has closed. Report the answer now, drop the entry when the
   * transition is over.
   *
   * `onCloseAction` fires immediately rather than after the animation — a
   * consumer waiting to know the user said no should not wait on a transition.
   */
  const handleClosed = useCallback(() => {
    if (outcomeRef.current === 'dismiss') {
      onCloseAction();
    }
    afterExit(dialogRef.current, onRemoveAction);
  }, [afterExit, onCloseAction, onRemoveAction]);

  const isConfirmDisabled = Boolean(
    internalLoading
    || (critical && confirmationCode !== critical.code),
  );

  const handleConfirmClick = useCallback(() => {
    setInternalLoading(true);
    onConfirmAction()
      .then(() => {
        /*
         * Succeeded: close the element and let the exit run. The entry is
         * dropped from `handleClosed`, not here — doing it here is what removed
         * the animation in the first place.
         */
        outcomeRef.current = 'confirm';
        const dialog = dialogRef.current;
        if (dialog?.open) {
          dialog.close();
        } else {
          onRemoveAction();
        }
      })
      .catch(() => undefined)
      .finally(() => {
        // Only update state if the component is still mounted.
        // A successful confirm starts the exit, which unmounts this component.
        if (isMountedRef.current) {
          setInternalLoading(false);
        }
      });
  }, [onConfirmAction, onRemoveAction]);

  return (
    <DModal
      name={entry.id}
      dialogRef={dialogRef}
      size="lg"
      className={`confirm-modal ${critical ? 'critical-modal' : ''}`}
      /*
       * Escape and the click outside, in one line.
       *
       * The panel is a `<dialog>`: it closes ITSELF for both, and fires `close`
       * afterwards. Without forwarding that to the store, the entry stayed in
       * the list with its dialog already shut — a confirm modal that could never
       * be reopened. The container used to cover Escape with a capture-phase
       * listener of its own and the outside click with a scrim div; both are
       * gone, and this is what replaced them.
       */
      onClose={handleClosed}
    >
      <DModal.Header onClose={handleClose} showCloseButton>
        <h5 className="fw-bold">{title}</h5>
      </DModal.Header>

      <DModal.Body className="d-confirm-modal-body">
        <p className="d-confirm-modal-message">{message}</p>

        {critical && (
          <DInput
            type="text"
            label={critical.codeLabel || 'Confirmation code'}
            placeholder={critical.inputPlaceholder}
            value={confirmationCode}
            onChange={(value) => setConfirmationCode(value)}
            className="d-confirm-modal-field"
            autoFocus
          />
        )}
      </DModal.Body>

      <DModal.Footer>
        <DButton
          text={cancelLabel}
          variant="outline"
          color="secondary"
          onClick={handleClose}
          disabled={internalLoading}
        />
        <DButton
          text={confirmLabel}
          color={confirmColor}
          onClick={handleConfirmClick}
          disabled={isConfirmDisabled}
          loading={internalLoading}
        />
      </DModal.Footer>
    </DModal>
  );
}
