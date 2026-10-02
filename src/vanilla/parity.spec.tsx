/// <reference types="@testing-library/jest-dom" />

import { readFileSync } from 'fs';
import { join } from 'path';

import { render } from '@testing-library/react';

import DButton from '../components/DButton';
import DAlert from '../components/DAlert';
import DAvatar from '../components/DAvatar';
import DBadge from '../components/DBadge';
import DBoxFile from '../components/DBoxFile';
import DCard from '../components/DCard';
import DCarousel from '../components/DCarousel';
import DChip from '../components/DChip';
import DPaginator from '../components/DPaginator';
import DInput from '../components/DInput';
import DInputCheck from '../components/DInputCheck';
import DInputSelect from '../components/DInputSelect';
import DListGroup from '../components/DListGroup';
import DProgress from '../components/DProgress';
import DCollapse from '../components/DCollapse';
import DModal from '../components/DModal';
import DStepper from '../components/DStepper';
import DTabs from '../components/DTabs';
import DTimeline from '../components/DTimeline';

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
  button: [],
  form: [],
  status: [],
  dropzone: [
    // The React list renders a `DInput` per file so a name can be edited and
    // removed; the vanilla one writes a plain `<li>`, because a dropzone that
    // shipped a whole text field per file would be a different component.
    'df-field', 'df-input-group', 'df-input', 'df-input-group-addon',
  ],
  surface: [],
  list: [],
  carousel: [
    // The React build clones slides for `loop`; the vanilla one does not
    // implement looping at all, which the story states outright.
    'df-carousel-clone',
  ],
  timeline: [],
  stepper: [],
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

  /*
   * The presentational three.
   *
   * These have no behaviour at all — no `data-df-` attribute, no script — so
   * their vanilla stories are PURE documentation: a page of markup claiming to
   * be what React renders. Nothing else checks that claim, and a class the
   * stories forget is a component that silently looks wrong in a template
   * while looking right in Storybook's React pages.
   */
  ['button', () => reactClasses(
    <>
      <DButton text="Transfer" />
      <DButton text="Download" iconStart="download" />
      <DButton text="Saving" loading />
    </>,
  ), () => storySource('Button.stories.tsx')],

  ['carousel', () => reactClasses(
    <DCarousel perPage={{ xs: 1, md: 3 }} pagination arrows>
      <DCarousel.Slide><div>One</div></DCarousel.Slide>
      <DCarousel.Slide><div>Two</div></DCarousel.Slide>
    </DCarousel>,
  ), () => storySource('Carousel.stories.tsx')],

  /*
   * The form controls, which have no behaviour at all — a native input with
   * classes on it. Their story is pure markup documentation, and an omitted
   * class is a control that looks wrong in a template while looking right in
   * Storybook's React pages.
   */
  ['dropzone', () => reactClasses(
    <DBoxFile accept={{ 'image/*': ['.png'] }} />,
  ), () => storySource('Dropzone.stories.tsx')],

  ['status', () => reactClasses(
    <>
      <DBadge text="New" color="primary" />
      <DChip text="Filter" showClose onClose={() => {}} />
      <DAlert color="warning" icon="TriangleAlert">Expiring</DAlert>
    </>,
  ), () => storySource('Status.stories.tsx')],

  ['surface', () => reactClasses(
    <>
      <DCard>
        <DCard.Header>H</DCard.Header>
        <DCard.Body>B</DCard.Body>
        <DCard.Footer>F</DCard.Footer>
      </DCard>
      <DAvatar name="Ana Pérez" />
      <DPaginator total={10} current={3} onPageChange={() => {}} />
    </>,
  ), () => storySource('Surface.stories.tsx')],

  ['form', () => reactClasses(
    <>
      <DInput label="Amount" hint="h" invalid inputStart="$" inputEnd="USD" />
      <DInput label="Recipient" floatingLabel />
      <DInputCheck type="checkbox" label="Agree" />
      <DInputCheck type="radio" name="k" label="Savings" />
      <DInputSelect label="Currency" options={[{ label: 'USD', value: 'usd' }]} />
    </>,
  ), () => storySource('Form.stories.tsx')],

  ['list', () => reactClasses(
    <>
      <DListGroup>
        <DListGroup.Item>One</DListGroup.Item>
      </DListGroup>
      <DProgress currentValue={62} />
    </>,
  ), () => storySource('ListProgress.stories.tsx')],

  ['timeline', () => reactClasses(
    <DTimeline
      items={[
        {
          title: 'Order placed', description: 'We received your order.', time: '09:30', status: 'success',
        },
        { title: 'Delivered', time: 'Pending' },
      ]}
    />,
  ), () => storySource('Timeline.stories.tsx')],

  ['stepper', () => reactClasses(
    <DStepper
      options={[
        { label: 'Amount', value: 1 },
        { label: 'Review', value: 2, description: 'Check the details' },
        { label: 'Done', value: 3 },
      ]}
      currentStep={2}
    />,
  ), () => storySource('Stepper.stories.tsx')],

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
