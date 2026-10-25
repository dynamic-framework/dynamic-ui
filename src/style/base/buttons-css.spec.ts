/**
 * Comprueba en el CSS compilado (dist/css/dynamic-ui.css) los defectos de
 * botones de #1275. Necesita `npm run build:scss` antes; en CI lo hace
 * `npm run build`.
 */

import fs from 'node:fs';
import path from 'node:path';

const CSS_PATH = path.resolve(__dirname, '../../../dist/css/dynamic-ui.css');

/** Cuerpo de la primera regla cuyo selector es exactamente `selector`. */
function ruleBody(css: string, selector: string): string {
  const start = css.indexOf(`\n${selector} {\n`);
  if (start === -1) {
    throw new Error(`No se encontró la regla ${selector}`);
  }
  const open = css.indexOf('{', start);
  return css.slice(open + 1, css.indexOf('\n}', open));
}

describe('CSS compilado de botones (#1275)', () => {
  let css: string;

  beforeAll(() => {
    if (!fs.existsSync(CSS_PATH)) {
      throw new Error(`Falta ${CSS_PATH}: ejecuta npm run build:scss`);
    }
    css = fs.readFileSync(CSS_PATH, 'utf8');
  });

  it('no usa btn-box-shadow como valor literal', () => {
    expect(css).not.toMatch(/:\s*btn-box-shadow\s*;/);
  });

  it('no tiene el guion U+2013 en ningún nombre de variable', () => {
    expect(css).not.toMatch(/--[\w-]*\u2013/);
  });

  it('.btn aplica --bs-btn-text-decoration en reposo y en hover', () => {
    expect(ruleBody(css, '.btn')).toMatch(/\btext-decoration: var\(--bs-btn-text-decoration\);/);
    expect(ruleBody(css, '.btn.hover, .btn:hover')).toMatch(/\btext-decoration: var\(--bs-btn-text-decoration\);/);
  });

  it('el hover de los btn-link-* no tiene un fondo fijo', () => {
    expect(css).not.toMatch(/\[class\*=["']?btn-link-["']?\]\.hover, \[class\*=["']?btn-link-["']?\]:hover/);
    expect(css).not.toMatch(/background: rgba\(0, 0, 0, 0\.03\)/);
  });

  it('el token de hover de btn-link-primary vale negro al 3 % en :root', () => {
    expect(ruleBody(css, ':root,\n[data-bs-theme=dynamic]')).toContain(
      '--bs-btn-link-primary-hover-bg: rgba(var(--bs-black-rgb), 0.03);',
    );
  });
});
