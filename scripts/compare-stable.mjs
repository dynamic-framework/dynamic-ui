/**
 * Compara dos versiones semver estables (`MAJOR.MINOR.PATCH`).
 *
 * Los metadatos de build (`+...`) no cuentan para la precedencia semver y se
 * quitan antes de comparar; si no, el parche sería NaN y la comparación,
 * siempre falsa. Lo usan generate-manifest.mjs y css-diff.mjs.
 *
 * @returns negativo si a < b, 0 si son iguales, positivo si a > b.
 */
export function compareStable(a, b) {
  const pa = a.split('+')[0].split('.').map(Number);
  const pb = b.split('+')[0].split('.').map(Number);
  for (let i = 0; i < 3; i += 1) {
    if (pa[i] !== pb[i]) return pa[i] - pb[i];
  }
  return 0;
}
