import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { withCustomConfig } from 'react-docgen-typescript';
import type { ComponentDoc, FileParser, PropItem } from 'react-docgen-typescript';

/**
 * The components manifest (`features.componentsManifest`) always parses with
 * babel `react-docgen` and ignores `typescript.reactDocgen`. It can't resolve
 * props typed through `forwardRef` or mapped types (`Merge`, `Omit`, …), so
 * this completes each entry with react-docgen-typescript, the same parser
 * `scripts/generate-api.mjs` uses for `api.json`.
 */

export const propFilter = (prop: PropItem) => (
  prop.parent ? !/node_modules/.test(prop.parent.fileName) : true
);

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

let parser: FileParser | undefined;

function getParser() {
  parser ??= withCustomConfig(resolve(process.cwd(), 'tsconfig.json'), {
    shouldExtractLiteralValuesFromEnum: true,
    propFilter,
  });
  return parser;
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

  Object.values(components).forEach(({ reactDocgen }) => {
    if (!reactDocgen?.definedInFile || !existsSync(reactDocgen.definedInFile)) return;

    const doc = findDoc(getParser().parse(reactDocgen.definedInFile), reactDocgen.displayName);
    if (!doc) return;

    if (reactDocgen.actualName?.startsWith('Forwarded') && doc.displayName) {
      reactDocgen.actualName = doc.displayName;
    }

    const props = reactDocgen.props ?? {};
    Object.entries(doc.props).forEach(([name, prop]) => {
      // Fields babel already resolved win, so no component loses metadata.
      props[name] = { ...toDocgenProp(prop), ...props[name] };
      if (!props[name].description && prop.description) {
        props[name].description = prop.description;
      }
    });
    reactDocgen.props = props;
  });

  return manifests;
}
