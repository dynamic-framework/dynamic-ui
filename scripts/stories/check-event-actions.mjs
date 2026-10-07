/**
 * check-event-actions.mjs — no raw DOM event may be handed to the actions addon.
 *
 * `argTypes: { onFocus: { action: 'onFocus' } }` reads like a free log line.
 * Storybook's `action()` recognises a React synthetic event and, before
 * emitting it, clones it with `getOwnPropertyDescriptors`, calls `persist()`,
 * and serialises the clone over the channel at `maxDepth: 5 + depth` — 15 by
 * default. `view` is replaced with an empty object; `target`, `currentTarget`
 * and `nativeEvent` are left pointing at live DOM, so the walk descends into
 * the neighbourhood of the node that fired. It runs synchronously inside the
 * handler, so the browser cannot paint until it returns.
 *
 * That cost is invisible in review and grows with the page: `DInputPhone` took
 * about half a second to look focused, because the node that fired sits beside
 * a `<select>` with 217 `<option>` children. `onWheel` was worse still — one
 * scroll gesture fires it repeatedly, paying the walk each time.
 *
 * `stories/config/domEventAction.ts` logs the same event as a flat object with
 * no DOM reference in it. This fails the build if a story goes back to wiring
 * the event itself.
 *
 * Usage: node scripts/stories/check-event-actions.mjs
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, relative, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const STORIES = resolve(ROOT, 'stories');

/*
 * Props whose handler receives a DOM event.
 *
 * Deliberately a list and not a `^on` pattern: `onChange` on our own inputs
 * hands over a plain object we built, and `onPageChange` hands over a number.
 * Those are the actions worth keeping, so a pattern that caught them would be
 * telling authors to stop logging the useful ones.
 */
const RAW_EVENT_PROPS = [
  'onFocus', 'onBlur', 'onClick', 'onWheel', 'onScroll', 'onInput', 'onPaste',
  'onKeyDown', 'onKeyUp', 'onKeyPress', 'onMouseEnter', 'onMouseLeave',
  'onMouseDown', 'onMouseUp', 'onMouseMove', 'onPointerDown', 'onPointerUp',
  'onPointerMove', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onDrag',
  'onDragStart', 'onDragOver', 'onDrop',
];

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    if (entry.startsWith('.')) continue;
    const abs = join(dir, entry);
    if (statSync(abs).isDirectory()) walk(abs, out);
    else if (entry.endsWith('.stories.tsx')) out.push(abs);
  }
  return out;
}

const failures = [];

for (const file of walk(STORIES)) {
  const lines = readFileSync(file, 'utf8').split('\n');

  lines.forEach((line, index) => {
    const declared = line.match(/^\s*(on[A-Z]\w*):\s*\{\s*$/);
    if (!declared || !RAW_EVENT_PROPS.includes(declared[1])) return;

    /*
     * Look only as far as the entry's own closing brace, so an `action:`
     * belonging to the NEXT argType is not blamed on this one.
     */
    for (let i = index + 1; i < lines.length; i += 1) {
      if (/^\s*\},?\s*$/.test(lines[i])) break;
      if (/^\s*action:/.test(lines[i])) {
        failures.push({
          file: relative(ROOT, file), line: i + 1, prop: declared[1],
        });
        break;
      }
    }
  });
}

if (failures.length) {
  console.error('check-event-actions: a raw DOM event is being logged as an action.\n');
  for (const { file, line, prop } of failures) {
    console.error(`  ${file}:${line}  ${prop}`);
  }
  console.error(`
Drop the \`action:\` from the argType and log it as data instead:

  import domEventAction from '../config/domEventAction';

  args: {
    onFocus: domEventAction('onFocus'),
  },

The addon clones and serialises a synthetic event fifteen levels deep,
synchronously, before the browser can paint — see the header of
scripts/stories/check-event-actions.mjs.`);
  process.exit(1);
}

console.log('check-event-actions: no raw DOM event is logged as an action');
