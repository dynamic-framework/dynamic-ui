/**
 * generate-props.mjs
 *
 * Genera docs/props.json con los props de todos los componentes Dynamic UI.
 * Reutiliza la misma configuración de react-docgen-typescript que usa Storybook.
 *
 * Prerequisito: npm run build:storybook debe haber corrido antes (necesita docs/)
 * Uso: node scripts/generate-props.mjs
 */

import { writeFileSync, existsSync, readdirSync } from 'fs';
import { resolve, dirname, basename } from 'path';
import { fileURLToPath } from 'url';
import * as docgen from 'react-docgen-typescript';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// --- Validación ---
const OUTPUT_DIR = resolve(ROOT, 'docs');
if (!existsSync(OUTPUT_DIR)) {
  console.error('❌ docs/ not found. Run `npm run build:storybook` first.');
  process.exit(1);
}

const TSCONFIG_PATH = resolve(ROOT, 'tsconfig.json');
if (!existsSync(TSCONFIG_PATH)) {
  console.error('❌ tsconfig.json not found at project root.');
  process.exit(1);
}

// --- Encontrar componentes fuente ---
// Patrón: src/components/D*/D*.tsx (cada componente en su carpeta)
const COMPONENTS_DIR = resolve(ROOT, 'src/components');

const componentFiles = readdirSync(COMPONENTS_DIR, { withFileTypes: true })
  .filter(entry => entry.isDirectory() && entry.name.startsWith('D'))
  .sort((a, b) => a.name.localeCompare(b.name))
  .map(entry => {
    // Archivo principal del componente: D{Name}/D{Name}.tsx
    const mainFile = resolve(COMPONENTS_DIR, entry.name, `${entry.name}.tsx`);
    return existsSync(mainFile) ? mainFile : null;
  })
  .filter(Boolean);

if (componentFiles.length === 0) {
  console.error('❌ No component files found in src/components/D*/D*.tsx');
  process.exit(1);
}

console.log(`📦 Parsing props for ${componentFiles.length} components...`);

// --- Parser con misma config que .storybook/main.ts ---
const parser = docgen.withCustomConfig(TSCONFIG_PATH, {
  shouldExtractLiteralValuesFromEnum: true,
  // Misma propFilter que .storybook/main.ts:
  propFilter: (prop) => {
    if (prop.parent) {
      return !/node_modules/.test(prop.parent.fileName);
    }
    return true;
  },
});

// --- Parsear ---
const results = {};
let failed = 0;

for (const filePath of componentFiles) {
  try {
    const docs = parser.parse(filePath);

    for (const doc of docs) {
      if (!doc.displayName) continue;

      if (results[doc.displayName]) {
        console.warn(`  ⚠️  Duplicate displayName: ${doc.displayName} (from ${basename(filePath, '.tsx')}, already seen) — overwriting`);
      }

      results[doc.displayName] = {
        description: doc.description ?? '',
        props: Object.fromEntries(
          Object.entries(doc.props).map(([name, prop]) => [
            name,
            {
              type: prop.type?.name === 'enum' && Array.isArray(prop.type?.value)
                ? prop.type.value.map(v => v.value).join(' | ')
                : prop.type?.name ?? 'unknown',
              required: prop.required,
              defaultValue: prop.defaultValue?.value ?? null,
              description: prop.description ?? '',
            }
          ])
        ),
      };
    }
  } catch (err) {
    const componentName = basename(filePath, '.tsx');
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.warn(`  ⚠️  Failed: ${componentName} — ${errorMessage}`);
    failed++;
  }
}

// --- Output ---
const OUTPUT_PATH = resolve(OUTPUT_DIR, 'props.json');
writeFileSync(OUTPUT_PATH, JSON.stringify(results, null, 2));

const sizeKB = (Buffer.byteLength(JSON.stringify(results)) / 1024).toFixed(1);
const uniqueComponents = Object.keys(results).length;
console.log(`\n✅ Generated docs/props.json`);
console.log(`   Components: ${uniqueComponents} exported (from ${componentFiles.length} source files), ${failed} failed`);
console.log(`   Size: ${sizeKB} KB`);
if (failed > 0) {
  console.log(`\n⚠️  ${failed} components failed — check warnings above`);
}
