import classNames from 'classnames';
import { motion, type Transition, type Variants } from 'framer-motion';

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  type KeyboardEvent,
  type PropsWithChildren,
} from 'react';

import { PREFIX_BS } from '../config';
import DPortalStack from '../../contexts/portal/DPortalStack';
import { registerPortalStack } from '../../contexts/portal/portalStackRegistry';
import getKeyboardFocusableElements from '../../utils/getKeyboardFocusableElements';
import warnDialogName from '../../utils/warnDialogName';

import { useResponsiveProp, ResponsiveProp } from '../../hooks/useResponsiveProp';

import DOffcanvasHeader from './components/DOffcanvasHeader';
import DOffcanvasLabelContext from './components/DOffcanvasLabelContext';
import DOffcanvasBody from './components/DOffcanvasBody';
import DOffcanvasFooter from './components/DOffcanvasFooter';

import type { BaseProps, OffcanvasPositionToggleFrom } from '../interface';

type OffcanvasResponsivePlacement = Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl', OffcanvasPositionToggleFrom>>;

type Props = BaseProps & PropsWithChildren<{
  name: string;
  staticBackdrop?: boolean;
  scrollable?: boolean;
  openFrom?: OffcanvasPositionToggleFrom | OffcanvasResponsivePlacement;
  /**
   * Overrides the offcanvas size on the `start`/`end` placements (defaults to `400px`).
   * Accepts any CSS length (e.g. `'320px'`, `'50vw'`, `'100%'`) or a `ResponsiveProp` object.
   */
  width?: string | ResponsiveProp;
  /**
   * Overrides the offcanvas size on the `top`/`bottom` placements (defaults to `100%`).
   * Accepts any CSS length (e.g. `'50vh'`, `'320px'`) or a `ResponsiveProp` object.
   */
  height?: string | ResponsiveProp;
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

const variants: Variants = {
  hidden: (openFrom: OffcanvasPositionToggleFrom) => {
    const properties: {
      x?: string;
      y?: string;
    } = {};
    if (openFrom === 'start') {
      properties.x = '-100%';
    }
    if (openFrom === 'end') {
      properties.x = '100%';
    }
    if (openFrom === 'top') {
      properties.y = '-100%';
    }
    if (openFrom === 'bottom') {
      properties.y = '100%';
    }
    return properties;
  },
  visible: {
    x: 0,
    y: 0,
  },
};

const defaultTransition: Transition = {
  ease: 'easeInOut',
  duration: 0.3,
};

// Los portales que se renderizan con DContextProvider solo animan su salida
// cuando este módulo forma parte del bundle.
registerPortalStack(DPortalStack);

function DOffcanvas(
  {
    name,
    className,
    style,
    staticBackdrop,
    scrollable,
    openFrom = 'end',
    width,
    height,
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
        component: 'DOffcanvas',
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

  // Solo se suscribe a los cambios de breakpoint cuando llega un objeto
  // responsive, para no crear suscripciones de matchMedia innecesarias en el
  // caso habitual de valores string.
  const hasResponsiveProp = typeof openFrom === 'object'
    || typeof width === 'object'
    || typeof height === 'object';
  const { responsivePropValue } = useResponsiveProp(hasResponsiveProp);
  const resolvedOpenFrom = useMemo((): OffcanvasPositionToggleFrom => {
    if (typeof openFrom === 'string') return openFrom;
    return (responsivePropValue(openFrom) as OffcanvasPositionToggleFrom | undefined) ?? 'end';
  }, [responsivePropValue, openFrom]);
  const resolvedWidth = useMemo(() => {
    if (!width) return undefined;
    if (typeof width === 'string') return width;
    return responsivePropValue(width);
  }, [responsivePropValue, width]);
  const resolvedHeight = useMemo(() => {
    if (!height) return undefined;
    if (typeof height === 'string') return height;
    return responsivePropValue(height);
  }, [responsivePropValue, height]);

  return (
    <motion.div
      ref={dialogRef}
      className={classNames(
        'offcanvas portal show',
        {
          [`offcanvas-${resolvedOpenFrom}`]: resolvedOpenFrom,
        },
        className,
      )}
      style={{
        ...style,
        transition: 'none',
        ...(resolvedWidth && { [`--${PREFIX_BS}offcanvas-width`]: resolvedWidth }),
        ...(resolvedHeight && { [`--${PREFIX_BS}offcanvas-height`]: resolvedHeight }),
      }}
      id={name}
      tabIndex={-1}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      aria-labelledby={labelledById}
      aria-hidden="false"
      custom={resolvedOpenFrom}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{
        ...(transition ?? defaultTransition),
        delay: 0.15,
      }}
      {...staticBackdrop && ({
        [`data-${PREFIX_BS}backdrop`]: 'static',
        [`data-${PREFIX_BS}keyboard`]: 'false',
      })}
      {...scrollable && ({
        [`data-${PREFIX_BS}scroll`]: 'true',
        [`data-${PREFIX_BS}keyboard`]: 'false',
      })}
      {...dataAttributes}
    >
      <DOffcanvasLabelContext.Provider value={headerLabelId}>
        {children}
      </DOffcanvasLabelContext.Provider>
    </motion.div>
  );
}

export default Object.assign(DOffcanvas, {
  Header: DOffcanvasHeader,
  Body: DOffcanvasBody,
  Footer: DOffcanvasFooter,
});
