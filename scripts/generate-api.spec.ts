/**
 * Tests de generate-api.
 *
 * El script se ejercita por CLI y se lee el registry/api.json que escribe,
 * el mismo que genera `npm run build`.
 */

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(__dirname, '..');
const GENERATE = path.join(ROOT, 'scripts/generate-api.mjs');
const OUTPUT = path.join(ROOT, 'registry/api.json');

// El generador recorre todos los componentes con react-docgen-typescript.
jest.setTimeout(180000);

type Param = { name: string; required: boolean };

type ComponentProp = { type: string; required: boolean; defaultValue: unknown; description: string };

type Api = {
  components: Record<string, {
    props: Record<string, ComponentProp>;
    forwardedProps?: { target: string; type: string };
    types?: Record<string, { type: string; fields?: Record<string, { type: string }> }>;
  }>;
  contexts: Record<string, { props: Record<string, { description: string; required: boolean }> }>;
  hooks: Record<string, {
    signature: string;
    returns: Record<string, { parameters?: Param[] }>;
    returnType: string;
    types: Record<string, unknown>;
  }>;
};

function callParams(hook: string, fn: string) {
  return (api.hooks[hook].returns[fn].parameters ?? [])
    .map(({ name, required }) => ({ name, required }));
}

let api: Api;

beforeAll(() => {
  const generated = spawnSync('node', [GENERATE], { encoding: 'utf8' });
  if (generated.status !== 0) throw new Error(generated.stderr);
  api = JSON.parse(fs.readFileSync(OUTPUT, 'utf8'));
});

describe('generate-api', () => {
  test('breakpoints de DContextProvider aparece deprecada', () => {
    const { breakpoints } = api.contexts.DContextProvider.props;
    expect(breakpoints.required).toBe(false);
    expect(breakpoints.description).toBe(
      '@deprecated No effect since 2.11.0: breakpoints are read from the --bs-breakpoint-* custom properties',
    );
  });

  test('las demás props de DContextProvider no se marcan deprecadas', () => {
    const { breakpoints, ...others } = api.contexts.DContextProvider.props;
    Object.values(others).forEach(({ description }) => {
      expect(description).not.toContain('@deprecated');
    });
  });

  test('un hook que no devuelve un objeto tiene returns vacío y returnType', () => {
    expect(api.hooks.useMediaBreakpointUpMd).toMatchObject({
      signature: 'useMediaBreakpointUpMd(useListener?: boolean) => boolean',
      returns: {},
      returnType: 'boolean',
    });
  });

  test('los parámetros opcionales de las funciones devueltas no son obligatorios', () => {
    expect(callParams('useScreenshotDownload', 'download')).toEqual([{ name: 'fileName', required: false }]);
    expect(callParams('useScreenshotWebShare', 'share')).toEqual([{ name: 'fileName', required: false }]);
    expect(callParams('useScreenshot', 'takeBlob')).toEqual([{ name: 'type', required: false }]);
    expect(callParams('useDToast', 'toast')).toEqual([
      { name: 'data', required: true },
      { name: 'toastProps', required: false },
    ]);
  });

  test('types incluye los tipos del proyecto que usan los parámetros', () => {
    expect(api.hooks.useOtp.types.UseOtpConfig).toMatchObject({
      type: 'object',
      fields: { action: { required: true } },
    });
    // Importado de DConfirmModal/types y reexportado desde useConfirmModal.tsx.
    expect(api.hooks.useConfirmModal.types.UseConfirmModalConfig).toMatchObject({
      type: 'object',
      fields: { onConfirm: { required: true } },
    });
  });

  test('la firma conserva las restricciones genéricas y types las define', () => {
    expect(api.hooks.useItemSelection.signature).toMatch(/^useItemSelection<T extends Identifiable>\(/);
    expect(api.hooks.useItemSelection.types.Identifiable).toMatchObject({
      type: 'object',
      fields: { id: { type: 'string | number', required: true } },
    });
  });

  // Tabla de #1282: forwardRef, Object.assign y destructuring en el cuerpo.
  test.each([
    ['DButton', { color: 'primary', variant: 'solid', loading: false }],
    ['DInput', {
      label: '', loading: false, invalid: false, valid: false, floatingLabel: false,
    }],
    ['DInputPhone', {
      label: '', loading: false, invalid: false, valid: false, floatingLabel: false, defaultCountry: 'cl',
    }],
    ['DInputCounter', { iconStartAriaLabel: 'decrease action', iconEndAriaLabel: 'increase action' }],
    ['DInputCurrency', { clamp: true }],
    ['DInputPassword', { iconEndAriaLabel: 'show/hide password' }],
    ['DInputRange', { filledValue: true }],
    ['DSkeleton', { ariaLabel: 'Loading...', direction: 'vertical' }],
    ['DTabs', { variant: 'underline' }],
    ['DSelect', { menuWithMaxContent: false, floatingLabel: false }],
    ['DOffcanvas', { openFrom: 'end' }],
    ['DToast', { role: 'alert' }],
    ['DListGroup', { as: 'ul' }],
    ['DBadge', { soft: false, color: 'primary' }],
  ])('%s recupera sus defaultValue', (component, defaults) => {
    Object.entries(defaults).forEach(([prop, value]) => {
      expect(api.components[component].props[prop].defaultValue).toBe(value);
    });
  });

  test('los componentes con defaults en el parámetro no cambian', () => {
    expect(api.components.DAlert.props.color.defaultValue).toBe('success');
    expect(api.components.DSkeletonCircle.props.size.defaultValue).toBe(40);
  });

  // #1283: props propias tapadas por un atributo HTML y atributos que el
  // componente desestructura.
  test('DButtonIcon conserva color, rel y onClick', () => {
    const { props } = api.components.DButtonIcon;
    // ComponentColor es `string`: el checker no conserva el nombre del alias.
    expect(props.color).toMatchObject({ type: 'string | undefined', defaultValue: 'primary' });
    expect(props).toHaveProperty('rel');
    expect(props).toHaveProperty('onClick');
  });

  test.each(['DButton', 'DInputCheck', 'DCarousel'])('%s conserva className y style', (component) => {
    expect(api.components[component].props).toHaveProperty('className');
    expect(api.components[component].props).toHaveProperty('style');
  });

  test('los atributos HTML desestructurados aparecen con su default', () => {
    expect(api.components.DButton.props.type.defaultValue).toBe('button');
    expect(api.components.DButton.props.disabled.defaultValue).toBe(false);
    expect(api.components.DInputRange.props.min.defaultValue).toBe('0');
    expect(api.components.DInputRange.props.max.defaultValue).toBe('100');
    expect(api.components.DInputSearch.props.placeholder.defaultValue).toBe('Search...');
    expect(api.components.DInputCurrency.props).toHaveProperty('onBlur');
  });

  test('forwardedProps indica el destino final de ...rest', () => {
    expect(api.components.DButtonIcon.forwardedProps).toEqual({
      target: 'button', type: 'ButtonHTMLAttributes<HTMLButtonElement>',
    });
    // DInputCounter → DInput → input: el componente intermedio no se registra.
    expect(api.components.DInputCounter.forwardedProps).toEqual({
      target: 'input', type: 'InputHTMLAttributes<HTMLInputElement>',
    });
    expect(api.components.DCarousel.forwardedProps).toEqual({ target: 'Splide', type: 'SplideProps' });
    expect(api.components.DDatePicker.forwardedProps?.target).toBe('DatePicker');
    expect(api.components.DAlert.forwardedProps).toBeUndefined();
    // Sin ...rest: reenvía las props enteras (`{...props}`).
    expect(api.components.DInputMask.forwardedProps?.target).toBe('InputMask');
  });

  test('los componentes sin ...rest no ganan atributos de @types/react', () => {
    Object.values(api.components)
      .filter(({ forwardedProps }) => !forwardedProps)
      .forEach(({ props }) => {
        ['tabIndex', 'onMouseEnter', 'onKeyDown'].forEach((attribute) => {
          expect(props).not.toHaveProperty(attribute);
        });
      });
  });

  test('children solo aparece en componentes que lo leen', () => {
    expect(api.components.DButton.props).toHaveProperty('children');
    expect(api.components.DOtp.props).not.toHaveProperty('children');
    expect(api.components.DDatePicker.props).not.toHaveProperty('children');
    // Lo desestructura para apartarlo y renderiza el emoji.
    expect(api.components.DSelectSingleValueEmoji.props).not.toHaveProperty('children');
  });

  // #1281: alias de tipo del proyecto.
  test('los alias de miembros literales se expanden en type', () => {
    ['DButton', 'DBadge'].forEach((component) => {
      const { type } = api.components[component].props.size;
      expect(type).toMatch(/^"sm" \| "lg" \|/);
      expect(type).not.toContain('ComponentSize');
    });
    expect(api.components.DSkeletonBlock.props.rounded.type).toBe(
      'boolean | 0 | 1 | 2 | 3 | 4 | 5 | "circle" | "pill" | undefined',
    );
    expect(api.components.DSkeletonBlock.props.width.type).toBe('string | number | undefined');
    expect(api.components.DSkeletonText.props.widths.type).toBe('(string | number)[] | undefined');
  });

  test('los alias de objeto se definen en types y type conserva el nombre', () => {
    const { DButton, DStepper, DBoxFile } = api.components;
    expect(DButton.props.iconStart.type).toContain('IconValue');
    expect(DButton.types?.IconValue.type).toBe('string | IconComponent');
    expect(DButton.types).toHaveProperty('IconComponent');
    expect(DStepper.types?.Step).toMatchObject({ type: 'object', fields: { label: { type: 'string' } } });
    expect(DBoxFile.types).toHaveProperty('RejectedFile');
  });

  test('los tipos de librerías quedan por su nombre en las definiciones', () => {
    expect(api.components.DCarousel.types?.BaseProps.fields?.style.type).toBe('CSSProperties');
  });

  // #1308: DErrorBoundary.tsx reexporta useErrorBoundary y getErrorMessage
  // de react-error-boundary.
  test('components solo enumera los componentes del proyecto', () => {
    expect(Object.keys(api.components).filter((name) => !/^[A-Z]/.test(name))).toEqual([]);
    expect(api.components).toHaveProperty('DErrorBoundary');
    expect(api.hooks).toHaveProperty('useErrorBoundary');
  });

  test('los componentes con forwardRef siguen en components', () => {
    ['DButton', 'DInput', 'DInputCounter', 'DInputSearch'].forEach((name) => {
      expect(api.components).toHaveProperty(name);
    });
  });
});
