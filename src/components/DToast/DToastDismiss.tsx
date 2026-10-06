import DIcon from '../DIcon';
import { useDContext } from '../../contexts';
import { useDToastContext } from './DToastContext';

type Props = {
  /** Overrides the close glyph from the context's icon map. */
  icon?: string;
  /** Accessible name, for a page that is not in English. */
  label?: string;
};

/**
 * The button that closes the toast it is inside.
 *
 * Reads the toast from context rather than taking an id, which is what let the
 * id stop being threaded through: the hook had to mint one before building the
 * content so the handler could close over it, and before that it showed the
 * toast twice to learn its own id.
 *
 * Exported so a custom toast can use the same button as the default layout —
 * `toast(<MyToast />)` with a `<DToastDismiss />` in it closes correctly with
 * nothing passed in.
 */
export default function DToastDismiss({ icon, label = 'Close' }: Props) {
  const { dismiss } = useDToastContext();
  const { iconMap: { xLg } } = useDContext();

  return (
    <button
      type="button"
      className="df-button df-toast-dismiss"
      data-variant="link"
      data-color="neutral"
      data-size="sm"
      data-icon-only=""
      aria-label={label}
      onClick={dismiss}
    >
      <DIcon icon={icon || xLg} />
    </button>
  );
}
