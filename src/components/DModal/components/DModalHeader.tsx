import { type PropsWithChildren, useContext, useMemo } from 'react';

import classNames from 'classnames';
import DIcon from '../../DIcon';

import type { BaseProps, FamilyIconProps } from '../../interface';
import { useDContext } from '../../../contexts';
import DModalLabelContext from './DModalLabelContext';
import useDialogLabelSlot, { LABEL_SLOT_ATTRIBUTE } from '../../internal/useDialogLabelSlot';

type Props =
& BaseProps
& FamilyIconProps
& PropsWithChildren<{
  showCloseButton?: boolean;
  icon?: string;
  iconMaterialStyle?: boolean;
  /**
   * @deprecated Use `iconMaterialStyle` instead. It will be removed in a future major version.
   */
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
    iconMaterialStyle,
    materialStyle: materialStyleProp,
  }: Props,
) {
  const {
    icon: {
      familyClass,
      familyPrefix,
      materialStyle,
    },
    iconMap: {
      xLg,
    },
  } = useDContext();
  const icon = useMemo(() => iconProp || xLg, [iconProp, xLg]);

  // El contenedor de children adopta el id del título salvo que el consumidor
  // ya lo haya puesto en cualquier punto del diálogo: el título puede vivir
  // fuera del header.
  const labelId = useContext(DModalLabelContext);
  const [titleRef, labelOnSlot] = useDialogLabelSlot(labelId, '.modal');

  return (
    <>
      <div
        className={classNames('modal-header', className)}
        style={style}
      >
        <div
          ref={titleRef}
          id={labelOnSlot ? labelId : undefined}
          {...{ [LABEL_SLOT_ATTRIBUTE]: '' }}
        >
          {children}
        </div>
        {showCloseButton && (
          <button
            type="button"
            className="d-close"
            aria-label="Close"
            onClick={onClose}
          >
            <DIcon
              icon={icon}
              familyClass={iconFamilyClass ?? familyClass}
              familyPrefix={iconFamilyPrefix ?? familyPrefix}
              materialStyle={iconMaterialStyle ?? materialStyleProp ?? materialStyle}
            />
          </button>
        )}
      </div>
      <div className="d-modal-separator" />
    </>
  );
}
