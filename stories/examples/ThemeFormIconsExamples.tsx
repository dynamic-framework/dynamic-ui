import { useEffect, useRef, useState } from 'react';

import {
  DInput,
  DInputCheck,
  DInputSelect,
  DInputSwitch,
} from '../../src';

/**
 * Banco de pruebas para el reporte de los iconos horneados en SCSS.
 *
 * El fondo de `.form-check-input:checked` es `var(--bs-primary)` y sigue al
 * theme. Los iconos que van encima se compilan a data URI con el color ya
 * resuelto, así que no lo siguen. Esta story pone los dos contextos uno al lado
 * del otro y mide lo que resuelve el navegador, para no discutir de memoria.
 */

export const ZONE = 'icon-debug';

/**
 * Un theme con el primary claro y con success y danger distintos de los de la
 * librería, que es el caso que pide la verificación del reporte. Se declara
 * como zona para poder tener el theme y los defaults en la misma pantalla.
 */
export const THEME_CSS = `
[data-bs-theme="${ZONE}"] {
  /* Roles. El wrapper acompaña al triplete: la librería declara
     --bs-X: rgb(var(--bs-X-rgb)) en :root, y allí se resolvería con el del raíz. */
  --bs-primary-rgb: 173, 216, 230;
  --bs-primary: rgb(var(--bs-primary-rgb));
  --bs-success-rgb: 11, 94, 65;
  --bs-success: rgb(var(--bs-success-rgb));
  --bs-danger-rgb: 124, 10, 2;
  --bs-danger: rgb(var(--bs-danger-rgb));

  /* Misma razón: estas tres se declaran en :root apuntando a un rol, así que
     sin redeclararlas la zona heredaría el valor ya resuelto del raíz y la
     caja del check seguiría siendo el azul por defecto. */
  --bs-form-check-checked-bg: var(--bs-primary);
  --bs-form-valid-border-color: var(--bs-success);
  --bs-form-invalid-border-color: var(--bs-danger);

  /* Y lo que el rediseño hace posible: el color del glifo es un color.
     #3d3d4a es lo que da la regla de Bootstrap (blanco, gray-700, negro; el
     primero que llega a 4.5:1) contra este primary claro, y rinde 6.99:1.
     Con el azul por defecto la misma regla devuelve blanco. */
  --bs-form-check-icon-color: #3d3d4a;
  --bs-form-switch-checked-knob-color: #3d3d4a;
  /* Gris cálido del theme, oscurecido hasta pasar el 3:1 que WCAG pide a un
     objeto gráfico sobre la pista blanca: rinde 4.12:1. El por defecto de la
     librería se queda en 2.38:1, y eso ya pasaba antes del rediseño. */
  --bs-form-switch-knob-color: #8c7a68;
  --bs-form-select-icon-color: #3d3d4a;
}
`;

// -- Medición ---------------------------------------------------------------

function toRgb(color: string): [number, number, number] | null {
  const hex = color.trim().replace(/^#/, '');
  if (/^[0-9a-fA-F]{3}$/.test(hex)) {
    return [0, 1, 2].map((i) => parseInt(hex[i] + hex[i], 16)) as [number, number, number];
  }
  if (/^[0-9a-fA-F]{6}$/.test(hex)) {
    return [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16)) as [number, number, number];
  }
  const match = color.match(/rgba?\(([^)]+)\)/);
  if (!match) return null;
  const parts = match[1].split(/[\s,/]+/).filter(Boolean).slice(0, 3).map(Number);
  return parts.length === 3 && parts.every((n) => !Number.isNaN(n))
    ? (parts as [number, number, number])
    : null;
}

/** Contraste WCAG, para ver cuánto se pierde el icono sobre su fondo. */
function contrast(a: string, b: string): number | null {
  const [rgbA, rgbB] = [toRgb(a), toRgb(b)];
  if (!rgbA || !rgbB) return null;
  const lum = (rgb: [number, number, number]) => {
    const [r, g, bl] = rgb.map((channel) => {
      const c = channel / 255;
      return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * bl;
  };
  const [la, lb] = [lum(rgbA), lum(rgbB)];
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

type Probe = {
  label: string;
  /** Dónde vive el color del icono ahora: un elemento, no un data URI. */
  selector: string;
  /** El pseudo-elemento que lleva el glifo, cuando lo hay. */
  pseudo?: string;
  /** La variable que un theme cambia para moverlo. */
  variable: string;
  /** Contra qué se lee: lo que el icono tiene debajo. */
  backdrop?: string;
};

/**
 * Después del rediseño, el color de cada icono es el `background-color` de un
 * elemento. Se mide ese color directamente: ya no hay que extraerlo de dentro
 * de una `url()`.
 */
const PROBES: Probe[] = [
  {
    label: 'check (checkbox marcado)',
    selector: '[data-probe="checkbox"] .form-check-control',
    pseudo: '::before',
    variable: '--bs-form-check-icon-color',
    backdrop: '[data-probe="checkbox"] .form-check-control',
  },
  {
    label: 'punto del radio marcado',
    selector: '[data-probe="radio"] .form-check-control',
    pseudo: '::before',
    variable: '--bs-form-check-icon-color',
    backdrop: '[data-probe="radio"] .form-check-control',
  },
  {
    label: 'barra del indeterminado',
    selector: '[data-probe="indeterminate"] .form-check-control',
    pseudo: '::before',
    variable: '--bs-form-check-icon-color',
    backdrop: '[data-probe="indeterminate"] .form-check-control',
  },
  {
    label: 'perilla del switch en reposo',
    selector: '[data-probe="switch"] .form-check-control',
    pseudo: '::before',
    variable: '--bs-form-switch-knob-color',
    backdrop: '[data-probe="switch"] .form-check-control',
  },
  {
    label: 'perilla del switch marcado',
    selector: '[data-probe="switch-checked"] .form-check-control',
    pseudo: '::before',
    variable: '--bs-form-switch-checked-knob-color',
    backdrop: '[data-probe="switch-checked"] .form-check-control',
  },
  {
    label: 'perilla del switch válido',
    selector: '[data-probe="switch-valid"] .form-check-control',
    pseudo: '::before',
    variable: '--bs-form-valid-border-color',
    backdrop: '[data-probe="switch-valid"] .form-check-control',
  },
  {
    label: 'perilla del switch inválido',
    selector: '[data-probe="switch-invalid"] .form-check-control',
    pseudo: '::before',
    variable: '--bs-form-invalid-border-color',
    backdrop: '[data-probe="switch-invalid"] .form-check-control',
  },
  {
    label: 'flecha del select',
    selector: '[data-probe="select"] .form-select-icon',
    variable: '--bs-form-select-icon-color',
    backdrop: '[data-probe="select"] .form-select',
  },
  {
    label: 'icono de feedback válido',
    selector: '[data-probe="input-valid"] .form-feedback-icon-valid',
    variable: '--bs-form-valid-border-color',
    backdrop: '[data-probe="input-valid"] .form-control',
  },
  {
    label: 'icono de feedback inválido',
    selector: '[data-probe="input-invalid"] .form-feedback-icon-invalid',
    variable: '--bs-form-invalid-border-color',
    backdrop: '[data-probe="input-invalid"] .form-control',
  },
];

type Row = {
  label: string;
  variable: string;
  /** Color real del icono, leído del elemento. */
  color: string | null;
  backdrop: string;
  ratio: number | null;
};

const sameColor = (a: string | null, b: string | null) => {
  const [ra, rb] = [a ? toRgb(a) : null, b ? toRgb(b) : null];
  return Boolean(ra && rb && ra.every((channel, i) => channel === rb[i]));
};

function measure(root: HTMLElement | null): Row[] {
  if (!root) return [];
  return PROBES.map((probe) => {
    const node = root.querySelector(probe.selector);
    const color = node
      ? getComputedStyle(node, probe.pseudo ?? null).backgroundColor
      : '';
    const under = probe.backdrop ? root.querySelector(probe.backdrop) : null;
    const backdrop = under ? getComputedStyle(under).backgroundColor : '';
    return {
      label: probe.label,
      variable: probe.variable,
      color: color || null,
      backdrop,
      ratio: color && backdrop ? contrast(color, backdrop) : null,
    };
  });
}

// -- Banco de controles -----------------------------------------------------

/** Celda con la muestra del color y su valor. Es `td` para que la tabla no
 * acabe con celdas cuyo único hijo es un componente, que el linter de
 * accesibilidad confunde con un control sin etiqueta. */
function SwatchCell({ color }: { color: string }) {
  if (!color) return <td className="text-muted">—</td>;
  return (
    <td>
      <span
        aria-hidden="true"
        className="d-inline-block border rounded align-middle me-2"
        style={{ width: 14, height: 14, backgroundColor: color }}
      />
      <code className="align-middle">{color}</code>
    </td>
  );
}

function Controls({ idPrefix }: { idPrefix: string }) {
  const indeterminateRef = useRef<HTMLDivElement>(null);

  // `indeterminate` no es un atributo: solo existe como propiedad del DOM.
  useEffect(() => {
    const input = indeterminateRef.current?.querySelector('input');
    if (input) input.indeterminate = true;
  }, []);

  return (
    <div className="d-flex flex-column gap-3">
      <div data-probe="checkbox">
        <DInputCheck id={`${idPrefix}-checkbox`} type="checkbox" label="Checkbox marcado" defaultChecked />
      </div>
      <div data-probe="radio">
        <DInputCheck id={`${idPrefix}-radio`} type="radio" name={`${idPrefix}-group`} label="Radio marcado" defaultChecked />
      </div>
      <div data-probe="radio-empty">
        <DInputCheck id={`${idPrefix}-radio-empty`} type="radio" name={`${idPrefix}-group`} label="Radio sin marcar" />
      </div>
      <div data-probe="indeterminate" ref={indeterminateRef}>
        <DInputCheck id={`${idPrefix}-indeterminate`} type="checkbox" label="Checkbox indeterminado" indeterminate />
      </div>
      <div data-probe="switch">
        <DInputSwitch id={`${idPrefix}-switch`} label="Switch en reposo" />
      </div>
      <div data-probe="switch-checked">
        <DInputSwitch id={`${idPrefix}-switch-checked`} label="Switch marcado" defaultChecked />
      </div>
      <div data-probe="switch-valid">
        <DInputSwitch id={`${idPrefix}-switch-valid`} label="Switch válido" valid />
      </div>
      <div data-probe="switch-invalid">
        <DInputSwitch id={`${idPrefix}-switch-invalid`} label="Switch inválido" invalid />
      </div>
      <div data-probe="select">
        <DInputSelect id={`${idPrefix}-select`} label="Select" options={[{ value: '1', label: 'Opción' }]} />
      </div>
      <div data-probe="input-valid">
        <DInput id={`${idPrefix}-input-valid`} label="Input válido" valid value="ok" onChange={() => {}} />
      </div>
      <div data-probe="input-invalid">
        <DInput id={`${idPrefix}-input-invalid`} label="Input inválido" invalid value="mal" onChange={() => {}} />
      </div>
      <p className="form-text mb-0">
        El foco del switch no se puede forzar desde aquí: tabula hasta
        {' '}
        <strong>Switch en reposo</strong>
        {' '}
        para ver la perilla de foco.
      </p>
    </div>
  );
}

// -- Story ------------------------------------------------------------------

export function ThemeFormIcons() {
  const defaultsRef = useRef<HTMLDivElement>(null);
  const themedRef = useRef<HTMLDivElement>(null);
  const [rows, setRows] = useState<{ defaults: Row[]; themed: Row[] }>({
    defaults: [],
    themed: [],
  });

  useEffect(() => {
    // Un frame de margen: el CSS del theme se inyecta en el mismo render.
    const id = requestAnimationFrame(() => {
      setRows({
        defaults: measure(defaultsRef.current),
        themed: measure(themedRef.current),
      });
    });
    return () => cancelAnimationFrame(id);
  }, []);

  // Cuántos iconos cambian de color entre los dos contextos: la medida directa
  // de que el theme sí los alcanza.
  const moved = rows.themed.length === 0 ? null : rows.themed.filter(
    (row, index) => !sameColor(row.color, rows.defaults[index]?.color ?? null),
  ).length;

  return (
    <>
      {/* eslint-disable-next-line react/no-danger */}
      <style dangerouslySetInnerHTML={{ __html: THEME_CSS }} />

      <div className="d-flex flex-column gap-4">
        <div>
          <h4 className="mb-1">POC: iconos de formulario themeables</h4>
          <p className="text-muted mb-0">
            El glifo del check, la perilla del switch, la flecha del select y
            los iconos de validación ya no son un SVG con el color horneado:
            cada uno es un elemento cuyo color es una variable CSS. La columna
            derecha va dentro de
            {' '}
            <code>
              [data-bs-theme=
              {`"${ZONE}"`}
              ]
            </code>
            , y ese theme
            {' '}
            <strong>solo declara colores</strong>
            : no genera ni una
            {' '}
            <code>url()</code>
            .
          </p>
        </div>

        <div className="row g-4">
          <div className="col-12 col-lg-6">
            <h5 className="mb-3">Sin theme</h5>
            <div ref={defaultsRef}>
              <Controls idPrefix="defaults" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <h5 className="mb-3">Con theme</h5>
            <div ref={themedRef} data-bs-theme={ZONE}>
              <Controls idPrefix="themed" />
            </div>
          </div>
        </div>

        <div>
          <h5 className="mb-1">Lo que resuelve el navegador</h5>
          <p className="text-muted">
            Cada color es ahora el
            {' '}
            <code>background-color</code>
            {' '}
            de un elemento, no un valor dentro de una
            {' '}
            <code>url()</code>
            , así que se lee directamente. El theme de la derecha solo declara
            colores: no genera ni un SVG.
          </p>
          <div className="table-responsive">
            <table className="table table-sm align-middle">
              <thead>
                <tr>
                  <th scope="col">Icono</th>
                  <th scope="col">Color sin theme</th>
                  <th scope="col">Color con theme</th>
                  <th scope="col">Contraste con theme</th>
                  <th scope="col">¿Lo alcanza?</th>
                </tr>
              </thead>
              <tbody>
                {rows.themed.map((row, index) => {
                  const { ratio } = row;
                  const low = ratio !== null && ratio < 3;
                  const follows = !sameColor(row.color, rows.defaults[index]?.color ?? null);
                  return (
                    <tr key={row.label}>
                      <th scope="row" className="fw-normal">
                        {row.label}
                        <br />
                        <code className="small text-muted">{row.variable}</code>
                      </th>
                      <SwatchCell color={rows.defaults[index]?.color ?? ''} />
                      <SwatchCell color={row.color ?? ''} />
                      <td className={low ? 'text-danger fw-bold' : undefined}>
                        {ratio ? `${ratio.toFixed(2)}:1` : '—'}
                        {low ? ' ✗' : ''}
                      </td>
                      <td className={follows ? 'text-success fw-bold' : 'text-muted'}>
                        {follows ? '✓ sigue al theme' : 'sin cambio'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="form-text">
            {moved !== null && (
              <>
                <strong>
                  {`El theme alcanza ${moved} de ${rows.themed.length} iconos declarando solo colores.`}
                </strong>
                {' '}
              </>
            )}
            Antes ninguno: el color vivía horneado dentro de un data URI de SVG,
            que no puede leer una custom property.
          </p>
        </div>
      </div>
    </>
  );
}
