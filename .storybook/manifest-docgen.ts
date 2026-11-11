import { existsSync, readFileSync } from 'node:fs';
import { isAbsolute, relative, resolve } from 'node:path';
import type { ComponentDoc, PropItem } from 'react-docgen-typescript';
import ts from 'typescript';

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
  name?: string;
  path?: string;
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

function patternTitle(storyPath?: string): string {
  if (!storyPath) throw new Error('A pattern manifest entry has no story path');

  const source = readFileSync(resolve(ROOT, storyPath), 'utf8');
  const file = ts.createSourceFile(storyPath, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  // Read meta.title, not an unrelated `title` in the story's example data.
  const meta = file.statements
    .filter(ts.isVariableStatement)
    .flatMap((statement) => [...statement.declarationList.declarations])
    .find((declaration) => ts.isIdentifier(declaration.name) && declaration.name.text === 'meta');
  const initializer = meta?.initializer;
  const object = initializer && ts.isSatisfiesExpression(initializer) ? initializer.expression : initializer;
  const title = object && ts.isObjectLiteralExpression(object)
    ? object.properties.find((property) => ts.isPropertyAssignment(property)
      && property.name.getText(file) === 'title')
    : undefined;
  if (title && ts.isPropertyAssignment(title) && ts.isStringLiteral(title.initializer)) {
    return title.initializer.text;
  }
  throw new Error(`Pattern story ${storyPath} has no static meta title`);
}

export function enrichComponentsManifest<T extends Manifests>(manifests: T): T {
  const components = manifests.components?.components ?? {};
  const docsByFile = new Map<string, ComponentDoc[]>();

  Object.entries(components).forEach(([id, component]) => {
    if (id.startsWith('patterns-')) component.name = patternTitle(component.path);

    const { reactDocgen } = component;
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
