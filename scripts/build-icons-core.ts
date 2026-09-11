/**
 * Writes dist/icons-core.json: the lucide-react icons Dynamic UI renders on its
 * own, so a consumer's build tooling can narrow lucide-react down without
 * breaking the library's internals.
 *
 * The list has a single source of truth, `src/icons/coreIcons.ts`; this script
 * only serialises it next to the versions it belongs to.
 *
 * Usage: npx tsx scripts/build-icons-core.ts
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { CORE_LUCIDE_ICONS } from '../src/icons/coreIcons';

/** Only the fields this script reads out of package.json. */
type PackageManifest = {
  version: string;
  dependencies: {
    'lucide-react': string;
  };
};

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outputPath = resolve(ROOT, 'dist/icons-core.json');

// Read rather than `import ... from '../package.json'`: a JSON module import
// needs an import attribute in Node ESM and its support varies with how the
// script is executed. The other generators in scripts/ read it the same way.
const packageJson: PackageManifest = JSON.parse(
  readFileSync(resolve(ROOT, 'package.json'), 'utf8'),
);

const payload = {
  dynamicUi: packageJson.version,
  lucideReact: packageJson.dependencies['lucide-react'],
  icons: [...CORE_LUCIDE_ICONS],
};

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');

// eslint-disable-next-line no-console
console.log(
  `Generated dist/icons-core.json (${payload.icons.length} icons, `
  + `dynamic-ui ${payload.dynamicUi}, lucide-react ${payload.lucideReact})`,
);
