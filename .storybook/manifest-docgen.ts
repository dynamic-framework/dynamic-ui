import { existsSync, readFileSync } from 'node:fs';
import { isAbsolute, relative, resolve } from 'node:path';
import type { ComponentDoc, PropItem } from 'react-docgen-typescript';
import { loadCsf } from 'storybook/internal/csf-tools';

import { parseComponentFile, propFilter as sharedPropFilter } from '../scripts/component-docgen.mjs';
import { ROOT } from '../scripts/public-hooks.mjs';

/**
 * El manifest de componentes (`features.componentsManifest`) siempre parsea
 * con `react-docgen` de babel e ignora `typescript.reactDocgen`. No resuelve
 * las props tipadas a través de `forwardRef` ni de tipos mapeados (`Merge`,
 * `Omit`…), así que aquí se completa cada entrada con
 * `scripts/component-docgen.mjs`, el mismo módulo que usa
 * `scripts/generate-api.mjs` para `api.json`: los dos artefactos aplican el
 * mismo filtro y recuperan los mismos defaults.
 */

export const propFilter: (prop: PropItem) => boolean = sharedPropFilter;

type DocgenTsType = {
  name: string;
  raw?: string;
  elements?: Array<{ name: string; value: string }>;
};

type DocgenProp = {
  required?: boolean;
  description?: string;
  tsType?: DocgenTsType;
  defaultValue?: { value: string; computed: boolean };
};

type ManifestComponent = {
  reactDocgen?: {
    displayName?: string;
    actualName?: string;
    definedInFile?: string;
    props?: Record<string, DocgenProp>;
  };
};

type ManifestEntry = ManifestComponent & {
  name?: string;
  path?: string;
};

type Manifests = {
  components?: { components?: Record<string, ManifestEntry> };
};

/**
 * Las stories de patrones declaran un `component` de relleno —casi siempre
 * `DBox`, que solo envuelve el diseño— porque `satisfies Meta<typeof X>` pide
 * uno. Storybook saca de ahí el `name` de la entrada, así que 14 patrones se
 * publicaban como `DBox` y otros chocaban con la entrada del componente que
 * documentan. El nombre sale del título del meta, que es lo que identifica al
 * patrón; `reactDocgen` no se toca, porque sigue describiendo al componente
 * que Storybook parseó.
 */
export const PATTERNS_TITLE_PREFIX = 'Patterns/';

export function patternNameFromStory(storyPath: string): string | undefined {
  const file = resolve(ROOT, storyPath);
  if (!existsSync(file)) return undefined;

  let title: string | undefined;
  try {
    title = loadCsf(readFileSync(file, 'utf8'), {
      fileName: file,
      makeTitle: (userTitle?: string) => userTitle ?? '',
    }).parse().meta?.title;
  } catch {
    // Un archivo que el parser de CSF no entiende conserva su nombre: el
    // manifest se publica igual y el test de nombres lo delata.
    return undefined;
  }

  if (!title?.startsWith(PATTERNS_TITLE_PREFIX)) return undefined;
  return title.slice(PATTERNS_TITLE_PREFIX.length) || undefined;
}

function toTsType({ type }: PropItem): DocgenTsType {
  if (type.name === 'enum' && Array.isArray(type.value)) {
    return {
      name: 'union',
      raw: type.raw,
      elements: (type.value as Array<{ value: string }>)
        .map(({ value }) => ({ name: 'literal', value })),
    };
  }
  return type.raw ? { name: type.name, raw: type.raw } : { name: type.name };
}

function toDocgenProp(prop: PropItem): DocgenProp {
  return {
    required: prop.required,
    tsType: toTsType(prop),
    ...(prop.description && { description: prop.description }),
    ...(prop.defaultValue != null && {
      defaultValue: { value: String(prop.defaultValue.value), computed: false },
    }),
  };
}

function findDoc(docs: ComponentDoc[], displayName?: string) {
  return docs.find((doc) => doc.displayName === displayName) ?? (docs.length === 1 ? docs[0] : undefined);
}

export function enrichComponentsManifest<T extends Manifests>(manifests: T): T {
  const components = manifests.components?.components ?? {};
  const docsByFile = new Map<string, ComponentDoc[]>();

  Object.values(components).forEach((entry) => {
    if (!entry.path) return;
    const name = patternNameFromStory(entry.path);
    if (name) entry.name = name;
  });

  Object.values(components).forEach(({ reactDocgen }) => {
    if (!reactDocgen?.definedInFile) return;

    const file = reactDocgen.definedInFile;
    // Babel da la ruta absoluta de la máquina que construye; se publica
    // relativa a la raíz del repo, como `sourcePath` en api.json.
    if (isAbsolute(file)) reactDocgen.definedInFile = relative(ROOT, file);
    if (!existsSync(file)) return;

    let docs = docsByFile.get(file);
    if (!docs) {
      docs = parseComponentFile(file) as ComponentDoc[];
      docsByFile.set(file, docs);
    }

    const doc = findDoc(docs, reactDocgen.displayName);
    if (!doc) return;

    if (reactDocgen.actualName?.startsWith('Forwarded') && doc.displayName) {
      reactDocgen.actualName = doc.displayName;
    }

    // Las props de babel que el filtro descarta no se conservan: components.json
    // tiene que listar las mismas props que api.json.
    const props = Object.fromEntries(
      Object.entries(reactDocgen.props ?? {}).filter(([name]) => doc.props[name]),
    );
    Object.entries(doc.props).forEach(([name, prop]) => {
      // Lo que babel ya resolvió prevalece, para que ningún componente pierda metadatos.
      props[name] = { ...toDocgenProp(prop), ...props[name] };
      if (!props[name].description && prop.description) {
        props[name].description = prop.description;
      }
    });
    reactDocgen.props = props;
  });

  return manifests;
}
