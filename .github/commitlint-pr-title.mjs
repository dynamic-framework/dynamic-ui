// Config del check "PR title": la del repo sin defaultIgnores (aceptan `2.13.0`, `Merge …`).
import { readFileSync } from 'node:fs';

const base = JSON.parse(readFileSync(new URL('../.commitlintrc', import.meta.url), 'utf8'));

export default {
  ...base,
  defaultIgnores: false,
  // Título del botón "Revert" de GitHub.
  ignores: [(title) => /^Revert ".+"$/.test(title.trim())],
};
