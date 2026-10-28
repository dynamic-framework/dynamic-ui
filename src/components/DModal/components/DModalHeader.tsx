import { type PropsWithChildren, useContext, useMemo } from 'react';

import classNames from 'classnames';
import DIcon from '../../DIcon';

import type { BaseProps, FamilyIconProps } from '../../interface';
import { useDContext } from '../../../contexts';
import DModalLabelContext from './DModalLabelContext';

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

  // El contenedor del título lleva el id al que DModal apunta con
  // `aria-labelledby`. Lo genera DModal con `useId`: es único, así que se pone
  // siempre, sin mirar el resto del DOM.
  const labelId = useContext(DModalLabelContext);

  return (
    <>
      <div
        className={classNames('modal-header', className)}
        style={style}
      >
        <div id={labelId}>
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
