import { type PropsWithChildren, useMemo } from 'react';

import classNames from 'classnames';
import DIcon from '../../DIcon';

import { useOverlayLabelId } from '../../DOverlayContext';
import type { BaseProps, FamilyIconProps } from '../../interface';
import { useDContext } from '../../../contexts';

type Props =
& BaseProps
& FamilyIconProps
& PropsWithChildren<{
  showCloseButton?: boolean;
  icon?: string;
  materialStyle?: boolean;
  onClose?: () => void;
}>;

export default function DModalHeader(
  {
    showCloseButton,
    onClose,
    children,
    className,
    style,
    iconFamilyClass,
    iconFamilyPrefix,
    icon: iconProp,
    materialStyle = false,
  }: Props,
) {
  const {
    iconMap: {
      xLg,
    },
  } = useDContext();
  const icon = useMemo(() => iconProp || xLg, [iconProp, xLg]);

  /*
   * The id the panel's `aria-labelledby` points at.
   *
   * It lives here because this is where the title is, and it comes from a
   * context because the panel is the thing that owns the id — passing it down
   * by hand would put the burden on every call site, which is how the
   * reference came to dangle in the first place.
   */
  const labelId = useOverlayLabelId();
  return (
    <>
      <div
        className={classNames('df-overlay-header', className)}
        style={style}
      >
        <div id={labelId}>
          {children}
        </div>
        {showCloseButton && (
          <button
            type="button"
            className="df-button df-overlay-dismiss"
            data-variant="link"
            data-color="neutral"
            data-size="sm"
            data-icon-only=""
            aria-label="Close"
            onClick={onClose}
          >
            <DIcon
              icon={icon}
              familyClass={iconFamilyClass}
              familyPrefix={iconFamilyPrefix}
              materialStyle={materialStyle}
            />
          </button>
        )}
      </div>
      <hr className="df-overlay-separator" />
    </>
  );
}
