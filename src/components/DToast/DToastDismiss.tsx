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
 * id stop being threaded through: the hook used to close over the id
 * `react-hot-toast` handed its render function, so a custom toast could only
 * dismiss itself by importing the library and calling `toast.dismiss(id)`.
 *
 * Exported so a custom toast can use the same button as the default layout —
 * `toast(<MyToast />)` with a `<DToastDismiss />` in it closes correctly with
 * nothing passed in. It is the same `.d-close` markup the default layout has
 * always rendered, so `--#{$prefix}toast-close-color` still dresses it.
 */
export default function DToastDismiss({ icon, label = 'Close' }: Props) {
  const { dismiss } = useDToastContext();
  const { iconMap: { xLg } } = useDContext();

  return (
    <button
      type="button"
      className="d-close"
      aria-label={label}
      onClick={dismiss}
    >
      <DIcon icon={icon || xLg} />
    </button>
  );
}
