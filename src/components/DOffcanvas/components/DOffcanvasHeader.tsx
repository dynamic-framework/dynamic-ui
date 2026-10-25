import {
  type PropsWithChildren,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import classNames from 'classnames';
import DIcon from '../../DIcon';

import type { BaseProps, FamilyIconProps } from '../../interface';
import { useDContext } from '../../../contexts';
import DOffcanvasLabelContext from './DOffcanvasLabelContext';

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

export default function DOffcanvasHeader(
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

  // El contenedor de children toma el id del título salvo que el consumidor ya
  // lo haya puesto en un descendiente; así no hay ids duplicados.
  const labelId = useContext(DOffcanvasLabelContext);
  const titleRef = useRef<HTMLDivElement>(null);
  const [labelOnWrapper, setLabelOnWrapper] = useState(false);
  useLayoutEffect(() => {
    const descendants = Array.from(titleRef.current?.querySelectorAll('[id]') ?? []);
    setLabelOnWrapper(!!labelId && !descendants.some((element) => element.id === labelId));
  }, [labelId, children]);

  return (
    <>
      <div
        className={classNames('offcanvas-header', className)}
        style={style}
      >
        <div
          ref={titleRef}
          id={labelOnWrapper ? labelId : undefined}
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
      <div className="d-offcanvas-separator" />
    </>
  );
}
