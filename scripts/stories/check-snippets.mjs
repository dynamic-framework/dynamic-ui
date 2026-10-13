/**
 * check-snippets.mjs — compiles the code shown under "Show code".
 *
 * A story whose point is a FUNCTION prop cannot document itself. Storybook's
 * dynamic source serialises the args, and a function serialises to `() => {}`
 * — so the stories that most need a snippet are exactly the ones that show an
 * empty one. The fix is to pin `parameters.docs.source.code`, and the cost of
 * pinning is that the snippet becomes a string: nothing compiles it, nothing
 * renames an identifier inside it, and it rots silently while the story beside
 * it keeps working.
 *
 * This extracts every pinned snippet, wraps it in a component, and runs the
 * story typechecker over the lot. A snippet that does not compile is a snippet
 * a reader cannot copy.
 *
 * Usage: node scripts/stories/check-snippets.mjs
 */

import { execFileSync } from 'child_process';
import {
  existsSync, mkdtempSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync,
} from 'fs';
import { join, relative, resolve, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const STORIES = resolve(ROOT, 'stories');
/*
 * The path and the URL kept apart on purpose: `existsSync` needs the path and
 * `import()` needs the URL, and passing the URL to `existsSync` returns false
 * — which left the export list EMPTY and every library name falling through
 * to a `declare const … : any`. The guard still passed; it just stopped
 * checking anything about the library it documents.
 */
const BUNDLE = resolve(ROOT, 'dist/index.js');
const BUNDLE_URL = pathToFileURL(BUNDLE).href;

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    if (entry.startsWith('.')) continue;
    const abs = join(dir, entry);
    if (statSync(abs).isDirectory()) walk(abs, out);
    else if (entry.endsWith('.stories.tsx')) out.push(abs);
  }
  return out;
}

/** `code: `…`` blocks, with the escapes a template literal needed undone. */
function snippetsIn(source) {
  return [...source.matchAll(/code: `([\s\S]*?)`,\n\s*\},/g)].map((match) => (
    match[1].replace(/\\`/g, '`').replace(/\\\$\{/g, '${')
  ));
}

/**
 * The JSX part, which is what has to compile.
 *
 * A pinned snippet usually carries explanatory comments after the markup.
 * Those are prose for a reader, not code to check, so the snippet runs to the
 * first line that is a comment at the outer level.
 */
function jsxOf(snippet) {
  const lines = snippet.split('\n');
  const cut = lines.findIndex((line) => line.trimStart().startsWith('//'));
  return (cut === -1 ? lines : lines.slice(0, cut)).join('\n').trimEnd();
}

/**
 * What a snippet can import, so the wrapper can resolve its names.
 *
 * Read off the BUILT bundle rather than hand-listed: the previous version
 * named five components, so a snippet mentioning any of the other ninety-eight
 * exports failed on a name the library does, in fact, export. Reading `dist`
 * means the list cannot drift from what consumers can actually import — and it
 * is the same reason `tokens:orphans` reads the built stylesheet.
 */
const LIBRARY_VALUES = new Set(
  existsSync(BUNDLE) ? Object.keys(await import(BUNDLE_URL)) : [],
);

/**
 * The TYPE-only exports, which the runtime bundle cannot report.
 *
 * `PortalProps` is a type and nothing else, so it is absent from
 * `Object.keys()` on the bundle — and declaring it as a local `any` turned a
 * resolvable name into "`PortalProps` is not generic" the moment a snippet
 * wrote `PortalProps<Payload>`. Read from the declaration file, which is the
 * only place a type export exists.
 */
const TYPES_DIR = resolve(ROOT, 'dist/types');

function declaredTypes(dir, out = new Set()) {
  if (!existsSync(dir)) return out;
  for (const entry of readdirSync(dir)) {
    const abs = join(dir, entry);
    if (statSync(abs).isDirectory()) declaredTypes(abs, out);
    else if (entry.endsWith('.d.ts')) {
      const source = readFileSync(abs, 'utf8');
      const pattern = /\bexport\s+(?:declare\s+)?(?:type|interface)\s+([A-Za-z_$][\w$]*)/g;
      for (const match of source.matchAll(pattern)) out.add(match[1]);
    }
  }
  return out;
}

/*
 * The whole tree, not just the barrel: the barrel is four `export *` lines, so
 * a type's only declaration is in the file that defines it.
 */
const LIBRARY_TYPES = declaredTypes(TYPES_DIR);

const LIBRARY_EXPORTS = new Set([...LIBRARY_VALUES, ...LIBRARY_TYPES]);

/**
 * Names that resolve without an import, so they are not "missing".
 *
 * Keywords as well as globals: `if (`, `return (` and `catch (` all look like
 * a call to a regex, and declaring `if` as a value is a syntax error rather
 * than a fix.
 */
const GLOBALS = new Set([
  'if', 'for', 'while', 'switch', 'catch', 'return', 'typeof', 'function',
  'await', 'new', 'do', 'else', 'in', 'of', 'instanceof', 'delete', 'void',
  /*
   * Declaration keywords too, now that a name followed by `[` counts: a
   * destructuring `const [a, b] = …` reads as an identifier called `const`,
   * and `declare const const: any` is a syntax error rather than a fix.
   */
  'const', 'let', 'var', 'export', 'import', 'default', 'case', 'throw',
  'yield', 'async', 'class', 'extends', 'super', 'this', 'try', 'finally',
  'console', 'parseInt', 'parseFloat', 'isNaN', 'setTimeout', 'clearTimeout',
  'setInterval', 'clearInterval', 'fetch', 'alert', 'confirm', 'require',
  'encodeURIComponent', 'decodeURIComponent', 'structuredClone', 'queueMicrotask',
  /* CSS functions, for the template-literal case the strip above cannot reach. */
  'var', 'calc', 'clamp', 'url', 'rgb', 'rgba', 'hsl', 'translate', 'minmax',
  /*
   * TypeScript's own types and the platform's. `Record` matches the
   * capitalised pattern and is not a library export, so it was declared as a
   * local `any` — which shadowed the real one and turned every
   * `Record<string, string[]>` in a snippet into "Type 'Record' is not
   * generic".
   */
  'Record', 'Partial', 'Required', 'Readonly', 'Pick', 'Omit', 'Exclude',
  'Extract', 'NonNullable', 'ReturnType', 'Parameters', 'Awaited',
  'Array', 'Promise', 'Map', 'Set', 'WeakMap', 'WeakSet', 'Date', 'RegExp',
  'Error', 'Object', 'String', 'Number', 'Boolean', 'Symbol', 'BigInt',
  'JSON', 'Math', 'Intl', 'File', 'FileList', 'Blob', 'FormData', 'URL',
  'Element', 'HTMLElement', 'HTMLInputElement', 'Event', 'MouseEvent',
  'KeyboardEvent', 'React', 'JSX', 'NodeJS',
]);

/** The React values a snippet is likely to reach for. */
const REACT_EXPORTS = new Set([
  'useState', 'useRef', 'useEffect', 'useMemo', 'useCallback', 'useId',
  'useReducer', 'useContext', 'Fragment', 'createContext', 'forwardRef',
]);

/**
 * React's TYPE exports, which need `import type` rather than `import`.
 *
 * `CSSProperties` is the one that matters: a `style` object carrying a custom
 * property does not satisfy `CSSProperties` on its own, so the honest snippet
 * casts — and a cast needs the type in scope.
 */
const REACT_TYPES = new Set([
  'CSSProperties', 'ReactNode', 'ReactElement', 'FC', 'PropsWithChildren',
  'ChangeEvent', 'FormEvent', 'FocusEvent', 'RefObject', 'Dispatch',
  'SetStateAction', 'ComponentProps', 'ComponentPropsWithoutRef',
]);

/**
 * The identifiers a snippet uses and does not declare.
 *
 * Components and hooks only — a capital letter or a `use` prefix — because
 * those are the two things a snippet references without defining. Anything it
 * declares itself is filtered out, so a `const hero = useDCarouselController()`
 * does not also get a `declare const hero`, which would be a redeclaration
 * error rather than a fix.
 */
function identifiersIn(source) {
  /*
   * Quoted strings are stripped first, because CSS lives in them: a
   * `style={{ background: 'var(--df-bg-muted)' }}` read as a call to a
   * function named `var`, and `declare const var: any` is a syntax error
   * rather than a fix. The same strip keeps words out of `aria-label` text.
   */
  const snippet = source.replace(/'[^'\n]*'|"[^"\n]*"/g, "''");

  /*
   * `type` and `interface` as well as the value keywords: a snippet that
   * writes `type CompositionTableProps = {…}` and then uses it was given a
   * `declare const` of the same name, which is a redeclaration error rather
   * than a fix.
   */
  const declared = new Set(
    [...snippet.matchAll(
      /\b(?:const|let|var|function|type|interface|class)\s+([A-Za-z_$][\w$]*)/g,
    )].map((match) => match[1]),
  );
  /* Destructured bindings too: `const { items } = props`. */
  for (const group of snippet.matchAll(/\b(?:const|let|var)\s*\{([^}]*)\}/g)) {
    for (const part of group[1].split(',')) {
      const name = part.split(':').pop().trim();
      if (name) declared.add(name);
    }
  }

  const names = new Set();
  for (const match of snippet.matchAll(/\b([A-Z][A-Za-z0-9_]*|use[A-Z][A-Za-z0-9_]*)\b/g)) {
    const name = match[1];
    if (!declared.has(name) && !GLOBALS.has(name)) names.add(name);
  }

  /*
   * Lowercase names too, but only where they are CALLED.
   *
   * A snippet's helpers are not all components: `getQueryString` is a library
   * export, `loanRisk` and `financeStatusColor` are the story's own. Scanning
   * every lowercase word would pull in attributes, keys and prose; scanning
   * call targets finds the functions and nothing else.
   */
  for (const match of snippet.matchAll(/\b([a-z][A-Za-z0-9_]*)\s*\(/g)) {
    const name = match[1];
    if (!declared.has(name) && !GLOBALS.has(name)) names.add(name);
  }

  /*
   * And lowercase names a property is read from: `items.map(…)` is how half
   * the documentation in this library introduces a fixture, and it is neither
   * capitalised nor called. A parameter that slips through gets a module-level
   * `declare const` the parameter then shadows, which is harmless — the cost
   * of missing one is a snippet that cannot compile, which is not.
   */
  for (const match of snippet.matchAll(/\b([a-z][A-Za-z0-9_]*)\s*[.[]/g)) {
    const name = match[1];
    if (!declared.has(name) && !GLOBALS.has(name)) names.add(name);
  }

  return [...names];
}

const found = [];
for (const file of walk(STORIES)) {
  const source = readFileSync(file, 'utf8');
  snippetsIn(source).forEach((snippet, index) => {
    const jsx = jsxOf(snippet);
    /*
     * Two shapes compile, and anything else is prose with syntax highlighting.
     *
     * `expression` is bare JSX, which wraps as a `return`. `body` is a
     * function body — the shape every hook snippet takes, since the point of
     * one is the `const x = useThing()` line above the markup. Leaving those
     * unchecked meant the snippets that most need pinning, because Storybook
     * serialises a function arg to `() => {}`, were exactly the ones nothing
     * compiled.
     */
    const text = jsx.trimStart();
    if (/^\s*(import|export)\b/m.test(jsx)) {
      /*
       * A whole module: some snippets show the imports and the exported
       * component, which is the right thing to show and cannot go inside a
       * function. Wrapping one in `return (` produced "an import declaration
       * can only be used at the top level" and "modifiers cannot appear here",
       * which says nothing about the snippet and everything about the wrapper.
       */
      found.push({ file: relative(ROOT, file), index, jsx, shape: 'module' });
    } else if (text.startsWith('<')) {
      found.push({ file: relative(ROOT, file), index, jsx, shape: 'expression' });
    } else if (/\breturn\b/.test(text)) {
      found.push({ file: relative(ROOT, file), index, jsx, shape: 'body' });
    }
  });
}

if (!found.length) {
  process.stdout.write('snippets: no JSX snippets pinned\n');
  process.exit(0);
}

/*
 * Written inside `stories/` rather than a temp dir: the story typechecker has
 * its own tsconfig covering this directory, and a file outside it would not be
 * checked at all — the guard would pass by not running.
 *
 * And NOT in a dot-prefixed directory, which is how it passed by not running
 * for the whole time it existed. TypeScript excludes files and directories
 * beginning with a dot from wildcard `include` matches, so
 * a `snippet0.tsx` under `stories/.snippetcheck-xxxx` was written, never
 * compiled, and reported as compiling. The leading dot was there to keep the
 * directory out of sight; the price was the guard doing nothing.
 *
 * Nothing else picks the directory up: Storybook globs `*.stories.tsx` and
 * these are `snippet*.tsx`, and the `finally` below removes it either way.
 */
const dir = mkdtempSync(join(STORIES, 'snippetcheck-'));
let failed = false;

try {
  found.forEach(({ jsx, shape }, i) => {
    const used = identifiersIn(jsx);
    const fromReact = used.filter((name) => REACT_EXPORTS.has(name));
    const reactTypes = used.filter((name) => REACT_TYPES.has(name));
    const libraryValues = used.filter((name) => LIBRARY_VALUES.has(name));
    const libraryTypes = used.filter(
      (name) => !LIBRARY_VALUES.has(name) && LIBRARY_TYPES.has(name),
    );

    /*
     * Everything else is the snippet author's own: a `ROWS` constant, a
     * `loanRisk` helper, a component from their app. Declared as `any` rather
     * than imported, because the snippet is documentation for THEIR code and
     * the guard's job is the shape of the JSX, not whether their fixtures
     * exist. Leaving them unresolved made every snippet fail on names nobody
     * ever claimed were importable.
     */
    const local = used.filter(
      (name) => !REACT_EXPORTS.has(name)
        && !REACT_TYPES.has(name)
        && !LIBRARY_EXPORTS.has(name),
    );

    if (shape === 'module') {
      /*
       * Minus what it already imports, or the prepended line is a duplicate
       * identifier — which reads as a broken snippet and is a broken wrapper.
       */
      const own = new Set(
        [...jsx.matchAll(/import\s+(?:type\s+)?\{([^}]*)\}/g)]
          .flatMap((match) => match[1].split(',').map((part) => part.trim().split(' ').pop())),
      );
      const react = fromReact.filter((name) => !own.has(name));
      const values = libraryValues.filter((name) => !own.has(name));
      const types = libraryTypes.filter((name) => !own.has(name));

      /*
       * Its own imports and exports stay, with the environment prepended.
       *
       * A module snippet lists the imports its POINT needs — `useState` for a
       * controlled example — and leaves the obvious ones to the reader, so
       * demanding completeness would be asking authors to pad documentation.
       * Prepending is legal: imports may appear in any order at the top level.
       */
      writeFileSync(join(dir, `snippet${i}.tsx`), [
        react.length ? `import { ${react.join(', ')} } from 'react';` : '',
        reactTypes.filter((name) => !own.has(name)).length
          ? `import type { ${reactTypes.filter((name) => !own.has(name)).join(', ')} } from 'react';`
          : '',
        values.length ? `import { ${values.join(', ')} } from '../../src';` : '',
        types.length ? `import type { ${types.join(', ')} } from '../../src';` : '',
        ...local.filter((name) => !own.has(name)).flatMap((name) => [
          `declare const ${name}: any;`,
          `declare type ${name} = any;`,
        ]),
        '',
        jsx,
        '',
      ].filter(Boolean).join('\n'));
      return;
    }

    const body = shape === 'body'
      ? [jsx]
      : ['  return (', jsx, '  );'];

    writeFileSync(join(dir, `snippet${i}.tsx`), [
      fromReact.length ? `import { ${fromReact.join(', ')} } from 'react';` : '',
      reactTypes.length ? `import type { ${reactTypes.join(', ')} } from 'react';` : '',
      libraryValues.length ? `import { ${libraryValues.join(', ')} } from '../../src';` : '',
      libraryTypes.length ? `import type { ${libraryTypes.join(', ')} } from '../../src';` : '',
      /*
       * A value AND a type, because a snippet uses its own names both ways:
       * `PortalProps` appears in a type position, and a value-only
       * declaration turns "cannot find name" into "refers to a value, but is
       * being used as a type". TypeScript keeps the two declaration spaces
       * apart, so declaring both is legal and neither shadows the other.
       */
      ...local.flatMap((name) => [
        `declare const ${name}: any;`,
        `declare type ${name} = any;`,
      ]),
      '',
      `export default function Snippet${i}() {`,
      ...body,
      '}',
      '',
    ].filter((line, index, lines) => line !== '' || lines[index - 1] !== '').join('\n'));
  });

  try {
    execFileSync('npm', ['run', 'typecheck:stories'], { cwd: ROOT, stdio: 'pipe' });
    process.stdout.write(`snippets: ${found.length} pinned snippet(s) compile\n`);
  } catch (error) {
    failed = true;
    const output = `${error.stdout ?? ''}${error.stderr ?? ''}`;
    process.stderr.write('\nA pinned "Show code" snippet does not compile:\n\n');
    process.stderr.write(
      output.split('\n').filter((line) => line.includes('snippet')).join('\n'),
    );
    process.stderr.write('\n\nEach snippet maps to a `code:` block, in order:\n');
    found.forEach(({ file, index }, i) => {
      process.stderr.write(`  snippet${i}  ->  ${file} (code block #${index + 1})\n`);
    });
  }
} finally {
  /*
   * `KEEP=1` leaves the generated files behind. A snippet error points at a
   * line in a file that no longer exists by the time you read the message,
   * and reconstructing the wrapper by hand is how the import resolution below
   * took three passes to get right.
   */
  if (!process.env.KEEP) rmSync(dir, { recursive: true, force: true });
}

process.exit(failed ? 1 : 0);
