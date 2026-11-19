/**
 * Tests de validate-registry.
 *
 * El script se ejercita por CLI, como check-docs-manifest. El fixture
 * `develop-api.json` es el api.json de develop antes de #1290, reducido a sus
 * 3 hooks (sin componentes ni tipos): cumple el schema, pero le faltan los
 * demás exports `use*` del índice, así que el validador tiene que rechazarlo.
 */

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const ROOT = path.resolve(__dirname, '..');
const VALIDATE = path.join(ROOT, 'scripts/validate-registry.mjs');
const FIXTURE = path.join(ROOT, 'scripts/fixtures/validate-registry/develop-api.json');
// api.json de develop antes de #1282, #1283 y #1281, con 8 componentes y los
// 25 hooks (sin types).
const FIXTURE_B = path.join(ROOT, 'scripts/fixtures/validate-registry/develop-b-api.json');

// El validador arma un programa de TypeScript sobre src/index.ts.
jest.setTimeout(120000);

let workdir: string;
// Declaraciones emitidas desde src/. Van dentro del repo para que sus imports
// (`react`, `react-select`…) resuelvan contra su node_modules.
let typesDir: string;

beforeAll(() => {
  workdir = fs.mkdtempSync(path.join(os.tmpdir(), 'dynamic-registry-'));
  // registry/ no se versiona: el schema se genera antes de validar.
  spawnSync('node', [path.join(ROOT, 'scripts/generate-schema.mjs')], { stdio: 'ignore' });
  // El validador compara con las declaraciones del paquete. Se emiten aquí,
  // desde src/, para no depender de un `npm run build` previo ni de un
  // dist/types/ desactualizado.
  const cacheDir = path.join(ROOT, 'node_modules/.cache');
  fs.mkdirSync(cacheDir, { recursive: true });
  typesDir = fs.mkdtempSync(path.join(cacheDir, 'api-types-'));
  // tsc se invoca con Node: el shim .cmd de npx no se ejecuta sin shell en
  // Windows.
  const emitted = spawnSync(process.execPath, [
    require.resolve('typescript/bin/tsc'), '-p', path.join(ROOT, 'tsconfig.build.json'),
    '--emitDeclarationOnly', '--declarationDir', typesDir,
    '--outDir', path.join(workdir, 'js'),
  ], { encoding: 'utf8' });
  if (emitted.status !== 0) throw new Error(emitted.stdout + emitted.stderr);
});

afterAll(() => {
  fs.rmSync(workdir, { recursive: true, force: true });
  fs.rmSync(typesDir, { recursive: true, force: true });
});

type Run = { status: number; stdout: string; stderr: string };

function run(file: string): Run {
  const spawned = spawnSync('node', [VALIDATE, file], {
    encoding: 'utf8',
    env: { ...process.env, API_TYPES_DIR: typesDir },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  return { status: spawned.status ?? -1, stdout: spawned.stdout, stderr: spawned.stderr };
}

function missingHooks(stderr: string): string[] {
  return [...stderr.matchAll(/^ {2}- (use\w+)$/gm)].map(([, name]) => name);
}

/** Nombres listados bajo una cabecera del informe del validador. */
function listedUnder(stderr: string, header: string): string[] {
  const block = stderr.split(header)[1]?.split(/\n(?! {2}- )/)[0] ?? '';
  return [...block.matchAll(/^ {2}- (.+)$/gm)].map(([, line]) => line);
}

const MISSING_EXPORTS = 'exports D* del índice sin entrada en components ni en contexts';

/** Entrada mínima de components: sin sourcePath, no se compara con el código. */
function stubComponent(props: Record<string, unknown> = {}) {
  return { description: '', props };
}

function stubProp(type: string, required: boolean) {
  return {
    type, required, defaultValue: null, description: '',
  };
}

/** Fixture con todos los hooks y una entrada mínima por export D*. */
function completeApi() {
  const api = JSON.parse(fs.readFileSync(FIXTURE, 'utf8'));
  const { stderr } = run(FIXTURE);
  missingHooks(stderr).forEach((name) => {
    api.hooks[name] = stubHook(name);
  });
  listedUnder(stderr, MISSING_EXPORTS).forEach((name) => {
    api.components[name] = stubComponent();
  });
  return api;
}

function stubHook(name: string) {
  return {
    name,
    source: 'src/index.ts',
    kind: 'hook',
    description: '',
    requires: [],
    signature: `${name}() => void`,
    parameters: [],
    returns: {},
    returnType: 'void',
    types: {},
  };
}

describe('validate-registry', () => {
  test('el api.json de develop falla por los hooks sin entrada', () => {
    const result = run(FIXTURE);
    expect(result.status).toBe(1);
    expect(result.stderr).not.toContain('no cumple el schema');
    expect(result.stderr).toMatch(/^\d+ hooks sin entrada en hooks/);

    const missing = missingHooks(result.stderr);
    expect(missing).toEqual(expect.arrayContaining([
      'useMediaBreakpointUpXs',
      'useOtp',
      'useErrorBoundary',
      'useTabContext',
    ]));
    expect(missing).not.toContain('useDToast');
  });

  test('pasa cuando todos los exports use* y D* tienen entrada', () => {
    const api = completeApi();
    const file = path.join(workdir, 'api.json');
    fs.writeFileSync(file, JSON.stringify(api));

    const result = run(file);
    expect(result.stderr).toBe('');
    expect(result.status).toBe(0);
  });

  test('sigue validando el schema', () => {
    const api = JSON.parse(fs.readFileSync(FIXTURE, 'utf8'));
    api.hooks.useDToast.returnType = 42;
    const file = path.join(workdir, 'api-invalid.json');
    fs.writeFileSync(file, JSON.stringify(api));

    const result = run(file);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('no cumple el schema');
    expect(result.stderr).toContain('/hooks/useDToast/returnType');
  });

  test('el api.json de develop falla por los defaults que no llegan a defaultValue (#1282)', () => {
    const result = run(FIXTURE_B);
    expect(result.status).toBe(1);
    expect(result.stderr).not.toContain('no cumple el schema');
    expect(result.stderr).not.toContain('hooks sin entrada');
    expect(result.stderr).toContain('defaults declarados en el código que no llegan a defaultValue');
    [
      'DButton.variant: "solid" en el código, null en api.json',
      'DBadge.color: "primary" en el código, null en api.json',
      'DSkeleton.ariaLabel: "Loading..." en el código, null en api.json',
      'DInputRange.filledValue: true en el código, null en api.json',
    ].forEach((line) => expect(result.stderr).toContain(line));
  });

  test('el api.json de develop falla por las props propias y desestructuradas que faltan (#1283)', () => {
    const result = run(FIXTURE_B);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('props propias o desestructuradas por el componente que faltan en api.json');
    [
      'DButtonIcon.color',
      'DButton.className',
      'DButton.type',
      'DInputCheck.style',
      'DCarousel.className',
      'DInputRange.min',
      'DInputRange.max',
    ].forEach((prop) => expect(result.stderr).toContain(`  - ${prop}\n`));
  });

  test('falla si api.json lista un atributo de node_modules que el componente no maneja (#1283)', () => {
    const api = JSON.parse(fs.readFileSync(FIXTURE_B, 'utf8'));
    api.components.DBadge.props.tabIndex = {
      type: 'number | undefined', required: false, defaultValue: null, description: '',
    };
    const file = path.join(workdir, 'api-extra-prop.json');
    fs.writeFileSync(file, JSON.stringify(api));

    const result = run(file);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('props en api.json que el filtro descarta');
    expect(result.stderr).toContain('  - DBadge.tabIndex\n');
  });

  test('el api.json de develop falla por los alias de tipo sin definición (#1281)', () => {
    const result = run(FIXTURE_B);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('alias de tipo del proyecto sin definición en el componente');
    [
      'DButton: ComponentSize',
      'DBadge: ComponentSize',
      'DSkeletonBlock: SkeletonRounded',
      'DButton: IconValue',
      'DCarousel: BaseProps',
    ].forEach((line) => expect(result.stderr).toContain(`  - ${line}\n`));
  });

  // Parten del fixture versionado: el resto de su contenido no valida, así que
  // se comprueba la línea concreta y no el código de salida.
  test('una descripción que nombra un alias no cuenta como referencia (#1281)', () => {
    const api = JSON.parse(fs.readFileSync(FIXTURE_B, 'utf8'));
    api.components = { DButton: api.components.DButton };
    api.components.DButton.props.size.type = '"sm" | "lg" | undefined';
    api.components.DButton.props.size.description = 'Accepts a ComponentSize.';
    const file = path.join(workdir, 'api-description.json');
    fs.writeFileSync(file, JSON.stringify(api));

    expect(run(file).stderr).not.toContain('  - DButton: ComponentSize\n');
  });

  test('un alias del proyecto que solo aparece dentro de types también se exige (#1281)', () => {
    const api = JSON.parse(fs.readFileSync(FIXTURE_B, 'utf8'));
    api.components = { DButton: api.components.DButton };
    api.components.DButton.types = { IconValue: { description: '', type: 'string | ValidationMessages' } };
    const file = path.join(workdir, 'api-nested-alias.json');
    fs.writeFileSync(file, JSON.stringify(api));

    expect(run(file).stderr).toContain('  - DButton: ValidationMessages\n');
  });

  // api.json de develop tras #1307: el checker califica con import("<ruta>")
  // los tipos de @types/react que no están en el ámbito del archivo.
  test('falla si una cadena contiene una ruta absoluta de la máquina de build', () => {
    const api = completeApi();
    const react = 'import("/home/runner/work/dynamic-ui/dynamic-ui/node_modules/@types/react/index")';
    api.hooks.useDToast.returnType = `${react}.ComponentClass<SVGProps<SVGSVGElement>, any> | ${react}.FunctionComponent<SVGProps<SVGSVGElement>>`;
    api.hooks.useDToast.description = 'Definido en /Users/dev/dynamic-ui/src/hooks/useDToast.tsx; ver https://example.com/home/docs.';
    const file = path.join(workdir, 'api-absolute-paths.json');
    fs.writeFileSync(file, JSON.stringify(api));

    const result = run(file);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('2 cadenas con una ruta absoluta de la máquina de build');
    expect(result.stderr).toContain('  - $.hooks.useDToast.returnType: "import(\\"/home/runner/');
    expect(result.stderr).toContain('  - $.hooks.useDToast.description: ');

    api.hooks.useDToast.returnType = 'ComponentClass<SVGProps<SVGSVGElement>, any> | FunctionComponent<SVGProps<SVGSVGElement>>';
    api.hooks.useDToast.description = 'Definido en src/hooks/useDToast.tsx; ver https://example.com/home/docs.';
    fs.writeFileSync(file, JSON.stringify(api));
    const fixed = run(file);
    expect(fixed.stderr).toBe('');
    expect(fixed.status).toBe(0);
  });

  // api.json de develop antes de #1308: DErrorBoundary.tsx reexporta
  // useErrorBoundary y getErrorMessage de react-error-boundary.
  test('falla si components incluye exports que no son componentes (#1308)', () => {
    const api = JSON.parse(fs.readFileSync(FIXTURE_B, 'utf8'));
    const sourcePath = 'src/components/DErrorBoundary/DErrorBoundary.tsx';
    api.components = {
      DButton: api.components.DButton,
      useErrorBoundary: { description: '', sourcePath, props: {} },
      getErrorMessage: { description: '', sourcePath, props: {} },
    };
    const file = path.join(workdir, 'api-lowercase.json');
    fs.writeFileSync(file, JSON.stringify(api));

    const result = run(file);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('2 claves de components que no empiezan por mayúscula');
    expect(result.stderr).toContain('  - useErrorBoundary\n');
    expect(result.stderr).toContain('  - getErrorMessage\n');
  });
  // #1341 y #1306: comparación con los tipos publicados en dist/types/.
  describe('contra dist/types', () => {
    function write(name: string, api: unknown) {
      const file = path.join(workdir, name);
      fs.writeFileSync(file, JSON.stringify(api));
      return run(file);
    }

    test('el api.json de develop sin entradas de componentes lista los exports D* que faltan', () => {
      const missing = listedUnder(run(FIXTURE).stderr, MISSING_EXPORTS);
      expect(missing).toEqual(expect.arrayContaining(['DConfirmModalContainer', 'DSelect', 'DToast']));
      // Exclusión explícita: es el objeto de createContext.
      expect(missing).not.toContain('DContext');
      // Los subcomponentes que no se exportan sueltos no se exigen.
      expect(missing).not.toContain('DSelectOptionCheck');
      expect(missing).not.toContain('DToastHeader');
    });

    test('pasa con subcomponentes con accessor real y required como en el .d.ts', () => {
      const api = completeApi();
      api.components.DInputSelect = stubComponent({ options: stubProp('T[]', true) });
      api.components.DInputCheck = stubComponent({
        type: stubProp('"checkbox" | "radio"', true),
        checked: stubProp('boolean | undefined', false),
      });
      api.components.DConfirmModalContainer = stubComponent({ nodeId: stubProp('string', true) });
      api.components.DSelectOptionCheck = { ...stubComponent(), parent: 'DSelect', accessor: 'DSelect.OptionCheck' };
      api.components.DToastHeader = { ...stubComponent(), parent: 'DToast', accessor: 'DToast.Header' };
      api.components.DCardHeader = { ...stubComponent(), parent: 'DCard', accessor: 'DCard.Header' };

      const result = write('api-types-ok.json', api);
      expect(result.stderr).toBe('');
      expect(result.status).toBe(0);
    });

    test('falla con los casos de 2.12.1 (#1341, #1306)', () => {
      const api = completeApi();
      delete api.components.DConfirmModalContainer;
      api.components.DInputSelect = stubComponent({ options: stubProp('T[]', false) });
      api.components.DInputCheck = stubComponent({
        type: stubProp('"number" | "button" | "checkbox" | "radio" | ... 6 more ... | undefined', false),
      });

      const { status, stderr } = write('api-types-2.12.1.json', api);
      expect(status).toBe(1);
      expect(listedUnder(stderr, MISSING_EXPORTS)).toEqual(['DConfirmModalContainer']);
      expect(listedUnder(stderr, 'props cuyo required difiere de su opcionalidad en dist/types')).toEqual([
        'DInputCheck.type: obligatoria en el .d.ts, required: false en api.json',
        'DInputSelect.options: obligatoria en el .d.ts, required: false en api.json',
      ]);
      expect(listedUnder(stderr, 'tipos truncados con "... N more ..."')).toEqual([
        '$.components.DInputCheck.props.type.type',
      ]);
    });

    test('falla si una entrada que no es export no lleva parent y accessor', () => {
      const api = completeApi();
      api.components.DSelectOptionCheck = stubComponent();
      api.components.DToastBody = { ...stubComponent(), parent: 'DToast' };

      const { status, stderr } = write('api-types-orphan.json', api);
      expect(status).toBe(1);
      expect(listedUnder(stderr, 'entradas de components que no son exports del índice y no llevan parent y accessor'))
        .toEqual(['DSelectOptionCheck', 'DToastBody']);
    });

    test('falla si un accessor no resuelve a un miembro del padre', () => {
      const api = completeApi();
      api.components.DToastHeader = { ...stubComponent(), parent: 'DToast', accessor: 'DToast.Head' };
      api.components.DSelectOptionCheck = { ...stubComponent(), parent: 'DCard', accessor: 'DSelect.OptionCheck' };
      // Un export con accessor también se comprueba.
      api.components.DCardHeader = { ...stubComponent(), parent: 'DCard', accessor: 'DCard.Title' };

      const { status, stderr } = write('api-types-accessor.json', api);
      expect(status).toBe(1);
      expect(listedUnder(stderr, 'accessors que no resuelven a un miembro del padre en dist/types')).toEqual([
        'DCardHeader: DCard.Title (parent DCard)',
        'DToastHeader: DToast.Head (parent DToast)',
        'DSelectOptionCheck: DSelect.OptionCheck (parent DCard)',
      ]);
    });

    test('falla si una prop no existe en el tipo de las props', () => {
      const api = completeApi();
      api.components.DButton = stubComponent({ colour: stubProp('string', false) });

      const { status, stderr } = write('api-types-unknown-prop.json', api);
      expect(status).toBe(1);
      expect(listedUnder(stderr, 'props cuyo required no se puede comprobar contra dist/types'))
        .toEqual(['DButton.colour: no existe en el tipo de las props']);
    });

    test('falla si returnType o signature de un hook están truncados', () => {
      const api = completeApi();
      api.hooks.useDToast.returnType = '{ a: string; ... 3 more ...; z: number; }';
      api.hooks.useDToast.signature = 'useDToast() => { a: string; ... 3 more ...; z: number; }';
      api.hooks.useDToast.returns = {};

      const { status, stderr } = write('api-types-truncated-return.json', api);
      expect(status).toBe(1);
      expect(listedUnder(stderr, 'tipos truncados con "... N more ..."')).toEqual([
        '$.hooks.useDToast.signature',
        '$.hooks.useDToast.returnType',
      ]);
    });

    test('falla si un type de hooks está truncado', () => {
      const api = completeApi();
      api.hooks.useDToast.returnType = 'string';
      api.hooks.useDToast.returns = { toast: { type: '{ a: string; ... 3 more ...; z: number; }' } };

      const { stderr } = write('api-types-truncated-hook.json', api);
      expect(listedUnder(stderr, 'tipos truncados con "... N more ..."'))
        .toEqual(['$.hooks.useDToast.returns.toast.type']);
    });
  });
});
