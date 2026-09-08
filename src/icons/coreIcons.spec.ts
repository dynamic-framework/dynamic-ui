import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import * as LucideIcons from 'lucide-react';

import { CORE_LUCIDE_ICONS } from './coreIcons';

/**
 * Guards the contract between `CORE_LUCIDE_ICONS` and the components.
 *
 * Every icon name a component decides on its own — a JSX literal, a prop
 * default, an object default — must be resolvable, and must appear in the
 * published core list. Otherwise a widget build that narrows lucide-react down
 * to the icons the widget references would silently break Dynamic UI's own
 * chevrons, close buttons and alert icons.
 */

const COMPONENTS_DIR = join(__dirname, '..', 'components');
const ICON_PROPS = ['icon', 'iconStart', 'iconEnd', 'labelIcon'] as const;
const PROP_NAMES = ICON_PROPS.join('|');

function sourceFiles(dir: string): Array<string> {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) return sourceFiles(full);
    if (!full.endsWith('.tsx') && !full.endsWith('.ts')) return [];
    if (full.endsWith('.spec.tsx') || full.endsWith('.spec.ts')) return [];
    if (full.endsWith('.a11y.test.tsx')) return [];
    return [full];
  });
}

/** Every `'…'` / `"…"` literal inside a chunk of source. */
function stringLiterals(chunk: string): Array<string> {
  return [...chunk.matchAll(/'([^'\\\n]*)'|"([^"\\\n]*)"/g)]
    .map((match) => match[1] ?? match[2])
    .filter((value): value is string => typeof value === 'string' && value.length > 0);
}

/** Reads a `{ … }` expression starting at `openIndex`, balancing braces. */
function braceExpression(source: string, openIndex: number): string {
  let depth = 0;
  for (let i = openIndex; i < source.length; i += 1) {
    if (source[i] === '{') depth += 1;
    if (source[i] === '}') {
      depth -= 1;
      if (depth === 0) return source.slice(openIndex + 1, i);
    }
  }
  return '';
}

type Usage = { name: string; file: string };

function iconUsages(file: string): Array<Usage> {
  const source = readFileSync(file, 'utf8');
  const matches = (pattern: RegExp) => [...source.matchAll(pattern)];

  const found = [
    // icon="Name" / iconStart="Name"
    ...matches(new RegExp(`\\b(?:${PROP_NAMES})="([^"]+)"`, 'g'))
      .map((match) => match[1]),
    // icon={ … 'Name' … } — ternaries, `||` defaults, spread objects
    ...matches(new RegExp(`\\b(?:${PROP_NAMES})=\\{`, 'g'))
      .flatMap((match) => stringLiterals(
        braceExpression(source, (match.index ?? 0) + match[0].length - 1),
      )),
    // Prop default in destructuring (`icon = 'Name'`) and object literal
    // default (`{ icon: 'Name' }`). Both anchored to the start of a line or to
    // an opening brace / comma, so a ternary such as
    // `typeof iconStart === 'string' ? iconStart : 'start icon'` is not
    // mistaken for a default.
    ...matches(new RegExp(`(?:^|[{,])\\s*(?:${PROP_NAMES})\\s*[=:]\\s*'([^']+)'`, 'gm'))
      .map((match) => match[1]),
  ];

  return found.map((name) => ({ name, file: file.slice(file.indexOf('src/')) }));
}

const usages = sourceFiles(COMPONENTS_DIR).flatMap(iconUsages);
const lucideExports = LucideIcons as unknown as Record<string, unknown>;
const coreIcons = new Set<string>(CORE_LUCIDE_ICONS);

describe('CORE_LUCIDE_ICONS', () => {
  it('finds icon names in the component sources', () => {
    // A scanner that silently matches nothing would make every other
    // assertion here vacuous.
    expect(usages.length).toBeGreaterThan(5);
  });

  it('only contains names lucide-react actually exports', () => {
    const missing = CORE_LUCIDE_ICONS.filter((name) => lucideExports[name] === undefined);

    expect(missing).toEqual([]);
  });

  it('has no duplicates', () => {
    expect([...new Set<string>(CORE_LUCIDE_ICONS)]).toHaveLength(CORE_LUCIDE_ICONS.length);
  });

  it('covers every icon name the components choose on their own', () => {
    const uncovered = usages
      .filter(({ name }) => !coreIcons.has(name))
      .map(({ name, file }) => `${name} (${file})`);

    expect([...new Set(uncovered)]).toEqual([]);
  });

  it('every icon name used by a component resolves in lucide-react', () => {
    const unresolvable = usages
      .filter(({ name }) => lucideExports[name] === undefined)
      .map(({ name, file }) => `${name} (${file})`);

    expect([...new Set(unresolvable)]).toEqual([]);
  });

  it('matches the iconMap defaults of DContextProvider', () => {
    const contextSource = readFileSync(
      join(__dirname, '..', 'contexts', 'DContext.tsx'),
      'utf8',
    );
    const defaultState = contextSource.slice(
      contextSource.indexOf('iconMap: {'),
      contextSource.indexOf('breakpoints: {'),
    );

    const mapNames = [...new Set(stringLiterals(defaultState))];
    expect(mapNames.length).toBeGreaterThan(0);

    const uncovered = mapNames.filter((name) => !coreIcons.has(name));
    expect(uncovered).toEqual([]);
  });
});
