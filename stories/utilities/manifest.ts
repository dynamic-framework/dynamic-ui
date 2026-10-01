/**
 * The utility surface, read from the build rather than written out.
 *
 * `scripts/css/build-utilities.mjs` emits `dist/css/utilities.manifest.json`
 * from the same `GROUPS` table it emits the stylesheet from, so this reference
 * cannot list a class the build did not produce or miss one it did.
 *
 * A hand-written list of 819 class names is wrong within a week, and both ways
 * of being wrong are quiet: an undocumented utility is invisible to the person
 * who needed it, and a documented-but-removed one is a class a template author
 * writes and gets nothing from.
 */
import data from '../../dist/css/utilities.manifest.json';

export type Rule = { name: string; decls: [string, string][] };
export type Family = {
  name: string;
  responsive: boolean;
  hover: boolean;
  dark: boolean;
  rules: Rule[];
};

export const breakpoints = data.breakpoints as { name: string; min: number }[];
export const families = data.groups as Family[];

export const totalRules = families.reduce((n, f) => n + f.rules.length, 0);

/** The distinct shapes a family's class names take, e.g. `m-N`, `mx-N`. */
export function patternOf(family: Family): string[] {
  const seen: string[] = [];
  family.rules.forEach((rule) => {
    const shape = rule.name.replace(/\d+$/, 'N');
    if (!seen.includes(shape)) seen.push(shape);
  });
  return seen;
}
