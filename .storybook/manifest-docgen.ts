import { existsSync } from 'node:fs';
import type { ComponentDoc, PropItem } from 'react-docgen-typescript';

import { parseComponentFile, propFilter as sharedPropFilter } from '../scripts/component-docgen.mjs';

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

type Manifests = {
  components?: { components?: Record<string, ManifestComponent> };
};

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

  Object.values(components).forEach(({ reactDocgen }) => {
    if (!reactDocgen?.definedInFile || !existsSync(reactDocgen.definedInFile)) return;

    const file = reactDocgen.definedInFile;
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
