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
  // lo haya puesto en cualquier punto del offcanvas: el título puede vivir
  // fuera del header. Así no hay ids duplicados. El observer cubre los títulos
  // que añaden o quitan ese id por su propio estado.
  const labelId = useContext(DOffcanvasLabelContext);
  const titleRef = useRef<HTMLDivElement>(null);
  const [labelOnWrapper, setLabelOnWrapper] = useState(false);
  useLayoutEffect(() => {
    const title = titleRef.current;
    // El offcanvas ya está en el DOM cuando corre este efecto, pero su ref aún
    // no está asignada: se busca la raíz desde el propio header.
    const dialog = title?.closest('.offcanvas');
    if (!labelId || !title || !dialog) {
      setLabelOnWrapper(false);
      return undefined;
    }
    const update = () => {
      // El propio contenedor se excluye: si no, al tomar el id lo encontraría
      // y se lo quitaría de inmediato, entrando en bucle.
      const owners = Array.from(dialog.querySelectorAll(`[id="${labelId}"]`))
        .filter((element) => element !== title);
      setLabelOnWrapper(owners.length === 0);
    };
    update();
    const observer = new MutationObserver(update);
    observer.observe(dialog, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ['id'],
    });
    return () => observer.disconnect();
  }, [labelId]);

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
