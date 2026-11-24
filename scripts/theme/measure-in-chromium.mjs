#!/usr/bin/env node
//
// measure-in-chromium — mide en un navegador real el par texto/fondo que un
// theme produce sobre un componente, para comprobar lo que el validador dice.
//
//   node scripts/theme/measure-in-chromium.mjs <theme.css> '<html>' [selector]
//
// Carga dist/css/dynamic-ui.css y encima el theme, monta el HTML y lee
// `getComputedStyle` del elemento (por defecto `#t`). Imprime color, fondo y
// el contraste WCAG entre los dos.
//
// No entra en `npm run test`: levantar Chromium es lento y frágil en CI. Es la
// herramienta con la que se obtiene el número que luego queda escrito en el
// comentario del caso, que es como el resto de la suite documenta lo que hace
// el navegador.

import fs from 'node:fs';
import process from 'node:process';

import { chromium } from 'playwright';

const [themePath, html, selector = '#t'] = process.argv.slice(2);
if (!themePath || !html) {
  process.stderr.write('Uso: measure-in-chromium.mjs <theme.css> \'<html>\' [selector]\n');
  process.exit(1);
}

const srgb = (c) => {
  const s = c / 255;
  return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
};
const luminance = ([r, g, b]) => 0.2126 * srgb(r) + 0.7152 * srgb(g) + 0.0722 * srgb(b);
const channels = (value) => value.match(/[\d.]+/g).slice(0, 3).map(Number);
const contrast = (a, b) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

async function main() {
  const library = fs.readFileSync('dist/css/dynamic-ui.css', 'utf8');
  const theme = fs.readFileSync(themePath, 'utf8');

  const browser = await chromium.launch();
  try {
    const page = await browser.newPage();
    await page.setContent(`<style>${library}\n${theme}</style>${html}`);
    const measured = await page.evaluate((target) => {
      const element = document.querySelector(target);
      if (!element) return null;
      const style = getComputedStyle(element);
      return { color: style.color, background: style.backgroundColor };
    }, selector);

    if (!measured) {
      process.stderr.write(`No hay ningún elemento que case con "${selector}".\n`);
      return 1;
    }

    // Un fondo transparente pinta lo que haya debajo; sin más contexto, el lienzo.
    const background = /^(transparent|rgba\(0, 0, 0, 0\))$/.test(measured.background)
      ? '255, 255, 255'
      : measured.background;

    process.stdout.write(
      `color            ${measured.color}\n`
      + `background-color ${measured.background}\n`
      + `contraste        ${contrast(channels(measured.color), channels(background)).toFixed(2)}:1\n`,
    );
    return 0;
  } finally {
    await browser.close();
  }
}

process.exit(await main());
