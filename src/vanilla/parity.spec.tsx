/// <reference types="@testing-library/jest-dom" />

import { readFileSync } from 'fs';
import { join } from 'path';

import { render } from '@testing-library/react';

import DCollapse from '../components/DCollapse';
import DModal from '../components/DModal';
import DTabs from '../components/DTabs';

/**
 * The vanilla markup must contain everything React renders.
 *
 * The whole premise of the framework-free layer is that it enhances the SAME
 * DOM, so one stylesheet dresses both. Nothing enforced that, and it drifted
 * immediately: the vanilla collapse was missing the trigger's chevron and the
 * vanilla modal was missing `.df-overlay-dismiss` on its close button, so both
 * looked wrong next to their React counterparts.
 *
 * Two places write the same contract down — a React component and a story's
 * markup string — and the only way they stay in step is a test that reads both.
 *
 * ## The direction of the check
 *
 * React's classes must all appear in the vanilla markup, not the other way
 * round. The vanilla build legitimately adds things of its own — the
 * `data-df-*` attributes, and a `<dialog>` where React has a `<div>` — but it
 * may never leave out a class the stylesheet is written against.
 */

/** Every `df-` class in a tree, however the class attribute was spelled. */
function classesIn(markup: string): Set<string> {
  const found = new Set<string>();
  Array.from(markup.matchAll(/\bclass(?:Name)?="([^"]*)"/g)).forEach(([, list]) => {
    list.split(/\s+/)
      .filter((name) => name.startsWith('df-'))
      .forEach((name) => found.add(name));
  });
  return found;
}

function reactClasses(element: React.ReactElement): Set<string> {
  const { container } = render(element);
  return classesIn(container.innerHTML);
}

/**
 * The vanilla story file, read as text.
 *
 * Importing the story module would drag Storybook's types into the test build,
 * and reading the file is a better fit anyway: what is being checked is the
 * markup a template author copies out of the page, which is exactly the text
 * in this file.
 */
function storySource(file: string): string {
  return readFileSync(join(__dirname, '../../stories/vanilla', file), 'utf8');
}

/**
 * Classes React renders that the vanilla markup is right not to have.
 *
 * Each one is a decision, listed so it is visible rather than hidden in a
 * loosened comparison.
 */
const ALLOWED_ABSENT: Record<string, string[]> = {
  modal: [
    // React's close button is a `DButton`, which brings the base class with it.
    // The vanilla markup writes `df-button df-overlay-dismiss` itself, so both
    // are present — this entry exists only for the `df-icon` React's `DIcon`
    // adds inside it, which a template author supplies as their own glyph.
  ],
  collapse: [],
  tabs: [],
};

describe.each([
  ['tabs', () => reactClasses(
    <DTabs
      options={[{ tab: 'one', label: 'One' }, { tab: 'two', label: 'Two' }]}
      defaultSelected="one"
    >
      <p>First</p>
    </DTabs>,
  ), () => storySource('Tabs.stories.tsx')],

  ['collapse', () => reactClasses(
    <DCollapse Component={<span>Question</span>}>
      <p>Answer</p>
    </DCollapse>,
  ), () => storySource('Collapse.stories.tsx')],

  ['modal', () => reactClasses(
    <DModal name="m">
      <DModal.Header showCloseButton>Title</DModal.Header>
      <DModal.Body>Body</DModal.Body>
      <DModal.Footer>Footer</DModal.Footer>
    </DModal>,
  ), () => storySource('Modal.stories.tsx')],
])('%s markup parity', (name, getReact, getVanilla) => {
  it('should contain every class the React component renders', () => {
    const fromReact = getReact();
    const fromVanilla = classesIn(getVanilla());
    const allowed = new Set(ALLOWED_ABSENT[name] ?? []);

    const missing = [...fromReact]
      .filter((className) => !fromVanilla.has(className) && !allowed.has(className));

    expect(missing).toEqual([]);
  });
});
