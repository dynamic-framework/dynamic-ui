import { Meta, StoryObj } from '@storybook/react-vite';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import type { CSSProperties, KeyboardEvent } from 'react';

import { DInput } from '../../src';

const meta = {
  title: 'Patterns/Input Effects',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Prueba de concepto de efectos sobre \`DInput\`. Ninguno necesita cambios en la
librería: son composiciones alrededor del componente.

El hilo común es **adelantarle trabajo al usuario sin quitarle el control**: la
sugerencia se ve, pero no se escribe sola; el formato se insinúa, pero no
bloquea; la validación espera a que termine de escribir en vez de corregirle
mientras teclea.
        `,
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// ---------------------------------------------------------------------------
// useGhostInput — todo el pegamento del efecto, en un sitio
// ---------------------------------------------------------------------------

type GhostInputOptions = {
  value: string;
  /** Qué falta por escribir. Cadena vacía si no hay nada que sugerir. */
  suggest: (value: string) => string;
  /** Si se pasa, `Tab` y `→` aceptan la sugerencia. Sin él, el fantasma solo informa. */
  onAccept?: (value: string) => void;
};

/**
 * No se puede dar color a un trozo del `value` de un `<input>`: es texto plano.
 * El truco es una capa encima que repite lo escrito en transparente y pinta
 * detrás el resto en gris, de modo que el fantasma caiga justo donde seguiría
 * el cursor.
 *
 * Todo lo delicado vive aquí y se copia una sola vez:
 *
 * - La capa se mide **contra el contenedor**, no con `inset: 0` ni con
 *   `offsetTop`. El contenedor envuelve también la etiqueta, y el
 *   `offsetParent` del input es el `.input-group` de Bootstrap: por cualquiera
 *   de las dos vías el fantasma sale desplazado.
 * - Se vuelve a medir con cada cambio de contenido y con un `ResizeObserver`
 *   sobre los dos elementos: la etiqueta empuja el input después del primer
 *   layout, y el input no cambia de tamaño al hacerlo.
 * - Se copia el interlineado del input; forzar `normal` apoya el fantasma en
 *   otra línea base.
 * - Se sigue el `scrollLeft` del input: con un valor más largo que la caja, el
 *   input desplaza su contenido y el fantasma tiene que acompañarlo.
 *
 * Devuelve la capa ya montada en vez de props sueltas: su estructura —un span
 * invisible con lo escrito y otro gris con el resto— es parte de lo que es
 * fácil equivocar, y así el uso queda en tres líneas.
 */
function useGhostInput({ value, suggest, onAccept }: GhostInputOptions) {
  const inputRef = useRef<HTMLInputElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<CSSProperties>();
  const [scrollLeft, setScrollLeft] = useState(0);

  const ghost = useMemo(() => suggest(value), [suggest, value]);

  useLayoutEffect(() => {
    const input = inputRef.current;
    const box = boxRef.current;
    if (!input || !box) return undefined;

    const measure = () => {
      const computed = getComputedStyle(input);
      const here = box.getBoundingClientRect();
      const there = input.getBoundingClientRect();
      setStyle({
        position: 'absolute',
        top: there.top - here.top,
        left: there.left - here.left,
        width: there.width,
        height: there.height,
        font: computed.font,
        lineHeight: computed.lineHeight,
        letterSpacing: computed.letterSpacing,
        padding: computed.padding,
        borderWidth: computed.borderWidth,
        borderStyle: 'solid',
        borderColor: 'transparent',
        borderRadius: computed.borderRadius,
      });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(input);
    observer.observe(box);
    const sync = () => setScrollLeft(input.scrollLeft);
    input.addEventListener('scroll', sync);
    return () => {
      observer.disconnect();
      input.removeEventListener('scroll', sync);
    };
  }, [value, ghost]);

  const onKeyDown = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    const pending = suggest(input.value);
    if (!onAccept || !pending) return;
    const atEnd = input.selectionStart === input.value.length
      && input.selectionEnd === input.value.length;

    // `Tab` es la tecla que espera quien viene de Gmail, pero también es la de
    // tabular: solo se intercepta cuando hay sugerencia, para no secuestrar la
    // navegación del resto del formulario.
    if (event.key === 'Tab' || (event.key === 'ArrowRight' && atEnd)) {
      event.preventDefault();
      onAccept(input.value + pending);
    }
  }, [onAccept, suggest]);

  return {
    /** Al contenedor que envuelve al campo. */
    boxProps: { ref: boxRef, className: 'position-relative' },
    /** Al `DInput`. `type="text"` a propósito: en `type="email"` el navegador
     *  devuelve `selectionStart` nulo y `→` no podría saber si está al final. */
    inputProps: {
      ref: inputRef,
      type: 'text' as const,
      ...onAccept && { onKeyDown },
    },
    /** La capa, lista para renderizar después del campo. */
    ghostLayer: ghost ? (
      <div
        aria-hidden="true"
        data-ghost="true"
        className="overflow-hidden text-nowrap"
        style={{ ...style, boxSizing: 'border-box', pointerEvents: 'none' }}
      >
        <span style={{ transform: `translateX(${-scrollLeft}px)`, whiteSpace: 'pre' }}>
          <span style={{ visibility: 'hidden' }}>{value}</span>
          <span className="text-body-tertiary">{ghost}</span>
        </span>
      </div>
    ) : null,
    /** El valor completo que se sugiere, o null. Para anunciarlo. */
    suggestion: ghost ? value + ghost : null,
  };
}

// ---------------------------------------------------------------------------
// 1. Ghost: dominio de email
// ---------------------------------------------------------------------------

const DOMAINS = ['gmail.com', 'hotmail.com', 'outlook.com', 'modyo.com', 'icloud.com'];

/** Lo único que cambia de una aplicación a otra: qué se sugiere. */
function suggestDomain(value: string): string {
  if (value === '' || value.includes(' ')) return '';
  const [local, domain = null] = value.split('@');
  if (local === '') return '';
  if (domain === null) return `@${DOMAINS[0]}`;
  if (value.indexOf('@') !== value.lastIndexOf('@')) return '';
  const match = DOMAINS.find((d) => d.startsWith(domain) && d !== domain);
  return match ? match.slice(domain.length) : '';
}

function GhostEmailField() {
  const [value, setValue] = useState('');
  const {
    boxProps, inputProps, ghostLayer, suggestion,
  } = useGhostInput({ value, suggest: suggestDomain, onAccept: setValue });

  return (
    <div style={{ maxWidth: 360 }}>
      <div {...boxProps}>
        <DInput
          id="ghost-email"
          label="Correo electrónico"
          placeholder="tu.nombre"
          value={value}
          onChange={setValue}
          inputMode="email"
          autoComplete="email"
          spellCheck={false}
          aria-describedby="ghost-email-suggestion"
          {...inputProps}
        />
        {ghostLayer}
      </div>
      {/* El fantasma va aria-hidden; la sugerencia se anuncia aquí, fuera del valor. */}
      <p id="ghost-email-suggestion" className="form-text" role="status">
        {suggestion
          ? `Sugerencia: ${suggestion}. Pulsa Tab o flecha derecha para aceptarla.`
          : 'Escribe tu nombre y te proponemos el dominio.'}
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 2. Ghost: esqueleto de formato
// ---------------------------------------------------------------------------

const CARD_MASK = '0000 0000 0000 0000';

/** Deja solo dígitos y los reparte en grupos de cuatro. */
function formatCard(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, 16);
  return digits.replace(/(.{4})/g, '$1 ').trim();
}

/** Aquí el fantasma solo informa: no se acepta, se escribe. */
const suggestMask = (value: string) => CARD_MASK.slice(value.length);

function GhostFormatField() {
  const [value, setValue] = useState('');
  const { boxProps, inputProps, ghostLayer } = useGhostInput({ value, suggest: suggestMask });

  return (
    <div style={{ maxWidth: 360 }}>
      <div {...boxProps}>
        <DInput
          id="ghost-card"
          label="Número de tarjeta"
          value={value}
          onChange={(next) => setValue(formatCard(next))}
          inputMode="numeric"
          autoComplete="cc-number"
          aria-describedby="ghost-card-hint"
          {...inputProps}
        />
        {ghostLayer}
      </div>
      <p id="ghost-card-hint" className="form-text">
        {value.replace(/\D/g, '').length}
        /16 dígitos
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 3. Afijo que aparece al enfocar
// ---------------------------------------------------------------------------

/**
 * El `https://` ocupa sitio y ruido visual cuando el campo está vacío y en
 * reposo. Aparece al enfocar o al haber contenido, que es cuando significa
 * algo. La transición respeta `prefers-reduced-motion` vía la utilidad de
 * Bootstrap, y el afijo es decorativo: el campo ya dice qué se espera.
 */
function AffixOnFocusField() {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);
  const visible = focused || value !== '';

  return (
    <div style={{ maxWidth: 360 }}>
      <DInput
        id="affix-url"
        label="Sitio web"
        placeholder="mi-empresa.cl"
        value={value}
        onChange={setValue}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        inputMode="url"
        inputStart={(
          <span
            aria-hidden="true"
            className="text-body-tertiary"
            style={{
              opacity: visible ? 1 : 0,
              transition: 'opacity .15s ease-in-out',
            }}
          >
            https://
          </span>
        )}
      />
      <p className="form-text">El prefijo aparece al enfocar; no forma parte del valor.</p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 4. Validación que se asienta
// ---------------------------------------------------------------------------

type Settle = 'idle' | 'checking' | 'valid' | 'invalid';

/**
 * Validar en cada tecla castiga a quien aún no ha terminado: el campo se pone
 * rojo mientras escribe algo correcto. Aquí espera a que haga una pausa, y solo
 * entonces se asienta en válido o inválido.
 */
function SettlingValidationField() {
  const [value, setValue] = useState('');
  const [state, setState] = useState<Settle>('idle');

  useEffect(() => {
    if (value === '') {
      setState('idle');
      return undefined;
    }
    setState('checking');
    const id = setTimeout(() => {
      setState(/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(value) ? 'valid' : 'invalid');
    }, 600);
    return () => clearTimeout(id);
  }, [value]);

  const hint = {
    idle: 'Validamos cuando dejes de escribir.',
    checking: 'Comprobando…',
    valid: 'Dirección válida.',
    invalid: 'Revisa la dirección: falta el dominio o la arroba.',
  }[state];

  return (
    <div style={{ maxWidth: 360 }}>
      <DInput
        id="settle-email"
        type="email"
        label="Correo de contacto"
        placeholder="nombre@empresa.cl"
        value={value}
        onChange={setValue}
        // Sin `loading`: `DInput` traduce esa prop a `disabled`, así que el
        // campo se deshabilitaría en mitad de la escritura, perdería el foco y
        // se tragaría las teclas siguientes. La actividad se cuenta en el hint.
        valid={state === 'valid'}
        invalid={state === 'invalid'}
        hint={hint}
        autoComplete="off"
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// 5. Fuerza de contraseña
// ---------------------------------------------------------------------------

const RULES = [
  { label: '8 caracteres', test: (v: string) => v.length >= 8 },
  { label: 'una mayúscula', test: (v: string) => /[A-Z]/.test(v) },
  { label: 'un número', test: (v: string) => /\d/.test(v) },
  { label: 'un símbolo', test: (v: string) => /[^\w\s]/.test(v) },
];

/**
 * La barra crece con cada regla cumplida y cada requisito se tacha en cuanto
 * se cumple, así que el progreso se ve sin tener que enviar el formulario.
 * La lista es la fuente de verdad: la barra es el resumen visual, y va
 * `aria-hidden` para no leer dos veces lo mismo.
 */
function PasswordStrengthField() {
  const [value, setValue] = useState('');
  const passed = RULES.filter(({ test }) => test(value));
  const ratio = value === '' ? 0 : passed.length / RULES.length;
  const tone = ['bg-danger', 'bg-warning', 'bg-warning', 'bg-success'][passed.length - 1] ?? 'bg-danger';

  return (
    <div style={{ maxWidth: 360 }}>
      <DInput
        id="strength-password"
        label="Contraseña"
        type="password"
        value={value}
        onChange={setValue}
        autoComplete="new-password"
        aria-describedby="strength-rules"
      />
      <div
        aria-hidden="true"
        className="progress mt-2"
        style={{ height: 4, transition: 'opacity .15s ease-in-out', opacity: value ? 1 : 0 }}
      >
        <div
          className={`progress-bar ${tone}`}
          style={{ width: `${ratio * 100}%`, transition: 'width .2s ease-in-out' }}
        />
      </div>
      <ul id="strength-rules" className="form-text list-unstyled mb-0 mt-2">
        {RULES.map(({ label, test }) => (
          <li key={label} className={test(value) ? 'text-success' : undefined}>
            {test(value) ? '✓' : '○'}
            {' '}
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Stories
// ---------------------------------------------------------------------------

function Section({ title, description, children }: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-5">
      <h5 className="mb-1">{title}</h5>
      <p className="text-muted" style={{ maxWidth: 520 }}>{description}</p>
      {children}
    </section>
  );
}

export const GhostEmail: Story = {
  name: 'Ghost: dominio de email',
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `
// 1. El pegamento, una vez. Mide la capa contra el contenedor, la remide
//    cuando cambia el contenido o el tamaño, sigue el scroll del input y
//    monta la estructura del fantasma.
function useGhostInput({ value, suggest, onAccept }) {
  const inputRef = useRef(null);
  const boxRef = useRef(null);
  const [style, setStyle] = useState();
  const [scrollLeft, setScrollLeft] = useState(0);
  const ghost = useMemo(() => suggest(value), [suggest, value]);

  useLayoutEffect(() => {
    const input = inputRef.current;
    const box = boxRef.current;
    if (!input || !box) return undefined;

    const measure = () => {
      const computed = getComputedStyle(input);
      const here = box.getBoundingClientRect();
      const there = input.getBoundingClientRect();
      setStyle({
        position: 'absolute',
        top: there.top - here.top,
        left: there.left - here.left,
        width: there.width,
        height: there.height,
        font: computed.font,
        lineHeight: computed.lineHeight,
        letterSpacing: computed.letterSpacing,
        padding: computed.padding,
        borderWidth: computed.borderWidth,
        borderStyle: 'solid',
        borderColor: 'transparent',
        borderRadius: computed.borderRadius,
      });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(input);
    observer.observe(box);
    const sync = () => setScrollLeft(input.scrollLeft);
    input.addEventListener('scroll', sync);
    return () => {
      observer.disconnect();
      input.removeEventListener('scroll', sync);
    };
  }, [value, ghost]);

  const onKeyDown = useCallback((event) => {
    const input = event.currentTarget;
    const pending = suggest(input.value);
    if (!onAccept || !pending) return;
    const atEnd = input.selectionStart === input.value.length
      && input.selectionEnd === input.value.length;
    if (event.key === 'Tab' || (event.key === 'ArrowRight' && atEnd)) {
      event.preventDefault();
      onAccept(input.value + pending);
    }
  }, [onAccept, suggest]);

  return {
    boxProps: { ref: boxRef, className: 'position-relative' },
    // \`type="text"\` a propósito: en \`type="email"\` el navegador devuelve
    // \`selectionStart\` nulo y la flecha no sabría si está al final.
    inputProps: { ref: inputRef, type: 'text', ...onAccept && { onKeyDown } },
    ghostLayer: ghost ? (
      <div
        aria-hidden="true"
        className="overflow-hidden text-nowrap"
        style={{ ...style, boxSizing: 'border-box', pointerEvents: 'none' }}
      >
        <span style={{ transform: \`translateX(\${-scrollLeft}px)\`, whiteSpace: 'pre' }}>
          <span style={{ visibility: 'hidden' }}>{value}</span>
          <span className="text-body-tertiary">{ghost}</span>
        </span>
      </div>
    ) : null,
    suggestion: ghost ? value + ghost : null,
  };
}

// 2. Lo único tuyo: qué se sugiere.
const DOMAINS = ['gmail.com', 'hotmail.com', 'outlook.com', 'modyo.com', 'icloud.com'];

function suggestDomain(value) {
  if (value === '' || value.includes(' ')) return '';
  const [local, domain = null] = value.split('@');
  if (local === '') return '';
  if (domain === null) return \`@\${DOMAINS[0]}\`;
  if (value.indexOf('@') !== value.lastIndexOf('@')) return '';
  const match = DOMAINS.find((d) => d.startsWith(domain) && d !== domain);
  return match ? match.slice(domain.length) : '';
}

// 3. El uso.
function CampoCorreo() {
  const [value, setValue] = useState('');
  const { boxProps, inputProps, ghostLayer, suggestion } = useGhostInput({
    value, suggest: suggestDomain, onAccept: setValue,
  });

  return (
    <>
      <div {...boxProps}>
        <DInput
          id="correo"
          label="Correo electrónico"
          value={value}
          onChange={setValue}
          inputMode="email"
          aria-describedby="correo-sugerencia"
          {...inputProps}
        />
        {ghostLayer}
      </div>
      {/* El fantasma va aria-hidden: la sugerencia se anuncia aquí. */}
      <p id="correo-sugerencia" className="form-text" role="status">
        {suggestion ? \`Sugerencia: \${suggestion}. Pulsa Tab o flecha derecha.\` : ''}
      </p>
    </>
  );
}
`,
      },
    },
  },

  render: () => (
    <Section
      title="El dominio se propone solo"
      description="Escribe tu nombre: el dominio aparece en gris detrás del cursor. Tab o flecha derecha lo aceptan; seguir escribiendo lo ignora. Al teclear la arroba, la sugerencia se acota a los dominios que empiezan igual."
    >
      <GhostEmailField />
    </Section>
  ),
};

export const GhostFormat: Story = {
  name: 'Ghost: esqueleto de formato',
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `
// 1. El pegamento, una vez. Mide la capa contra el contenedor, la remide
//    cuando cambia el contenido o el tamaño, sigue el scroll del input y
//    monta la estructura del fantasma.
function useGhostInput({ value, suggest, onAccept }) {
  const inputRef = useRef(null);
  const boxRef = useRef(null);
  const [style, setStyle] = useState();
  const [scrollLeft, setScrollLeft] = useState(0);
  const ghost = useMemo(() => suggest(value), [suggest, value]);

  useLayoutEffect(() => {
    const input = inputRef.current;
    const box = boxRef.current;
    if (!input || !box) return undefined;

    const measure = () => {
      const computed = getComputedStyle(input);
      const here = box.getBoundingClientRect();
      const there = input.getBoundingClientRect();
      setStyle({
        position: 'absolute',
        top: there.top - here.top,
        left: there.left - here.left,
        width: there.width,
        height: there.height,
        font: computed.font,
        lineHeight: computed.lineHeight,
        letterSpacing: computed.letterSpacing,
        padding: computed.padding,
        borderWidth: computed.borderWidth,
        borderStyle: 'solid',
        borderColor: 'transparent',
        borderRadius: computed.borderRadius,
      });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(input);
    observer.observe(box);
    const sync = () => setScrollLeft(input.scrollLeft);
    input.addEventListener('scroll', sync);
    return () => {
      observer.disconnect();
      input.removeEventListener('scroll', sync);
    };
  }, [value, ghost]);

  const onKeyDown = useCallback((event) => {
    const input = event.currentTarget;
    const pending = suggest(input.value);
    if (!onAccept || !pending) return;
    const atEnd = input.selectionStart === input.value.length
      && input.selectionEnd === input.value.length;
    if (event.key === 'Tab' || (event.key === 'ArrowRight' && atEnd)) {
      event.preventDefault();
      onAccept(input.value + pending);
    }
  }, [onAccept, suggest]);

  return {
    boxProps: { ref: boxRef, className: 'position-relative' },
    // \`type="text"\` a propósito: en \`type="email"\` el navegador devuelve
    // \`selectionStart\` nulo y la flecha no sabría si está al final.
    inputProps: { ref: inputRef, type: 'text', ...onAccept && { onKeyDown } },
    ghostLayer: ghost ? (
      <div
        aria-hidden="true"
        className="overflow-hidden text-nowrap"
        style={{ ...style, boxSizing: 'border-box', pointerEvents: 'none' }}
      >
        <span style={{ transform: \`translateX(\${-scrollLeft}px)\`, whiteSpace: 'pre' }}>
          <span style={{ visibility: 'hidden' }}>{value}</span>
          <span className="text-body-tertiary">{ghost}</span>
        </span>
      </div>
    ) : null,
    suggestion: ghost ? value + ghost : null,
  };
}

// 2. Lo único tuyo: aquí el fantasma solo informa, no se acepta.
const CARD_MASK = '0000 0000 0000 0000';
const suggestMask = (value) => CARD_MASK.slice(value.length);

const formatCard = (raw) => raw.replace(/\\D/g, '').slice(0, 16)
  .replace(/(.{4})/g, '$1 ').trim();

// 3. El uso. Sin \`onAccept\`, no se enganchan teclas.
function CampoTarjeta() {
  const [value, setValue] = useState('');
  const { boxProps, inputProps, ghostLayer } = useGhostInput({ value, suggest: suggestMask });

  return (
    <div {...boxProps}>
      <DInput
        id="tarjeta"
        label="Número de tarjeta"
        value={value}
        onChange={(next) => setValue(formatCard(next))}
        inputMode="numeric"
        {...inputProps}
      />
      {ghostLayer}
    </div>
  );
}
`,
      },
    },
  },

  render: () => (
    <Section
      title="El formato se queda delante"
      description="En vez de un placeholder que desaparece al primer carácter, el resto del formato sigue visible. Se ve cuánto falta sin contar dígitos, y los espacios se ponen solos."
    >
      <GhostFormatField />
    </Section>
  ),
};

export const Affix: Story = {
  name: 'Afijo que aparece al enfocar',
  render: () => (
    <Section
      title="El prefijo aparece cuando significa algo"
      description="Un https:// permanente es ruido en un campo vacío. Aparece al enfocar o al haber contenido, y desaparece al salir si el campo quedó vacío."
    >
      <AffixOnFocusField />
    </Section>
  ),
};

export const Settling: Story = {
  name: 'Validación que se asienta',
  render: () => (
    <Section
      title="Esperar a que termine de escribir"
      description="Validar en cada tecla pinta de rojo un correo que aún se está escribiendo. Aquí la validación espera una pausa: mientras tanto muestra actividad, y solo al parar se asienta."
    >
      <SettlingValidationField />
    </Section>
  ),
};

export const PasswordStrength: Story = {
  name: 'Fuerza de contraseña',
  render: () => (
    <Section
      title="El progreso se ve mientras se escribe"
      description="Cada requisito se tacha en cuanto se cumple y la barra resume el avance. La lista es la fuente de verdad; la barra va aria-hidden para no repetir lo mismo al lector de pantalla."
    >
      <PasswordStrengthField />
    </Section>
  ),
};

export const Todos: Story = {
  name: 'Todos los efectos',
  render: () => (
    <div className="d-flex flex-column">
      <GhostEmailField />
      <hr className="my-4" />
      <GhostFormatField />
      <hr className="my-4" />
      <AffixOnFocusField />
      <hr className="my-4" />
      <SettlingValidationField />
      <hr className="my-4" />
      <PasswordStrengthField />
    </div>
  ),
};
