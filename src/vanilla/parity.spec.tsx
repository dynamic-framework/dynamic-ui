/// <reference types="@testing-library/jest-dom" />

import { readFileSync } from 'fs';
import { join } from 'path';

import { act, render } from '@testing-library/react';

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
import { DCalendar } from '../components/DCalendar';

import { enhance } from './registry';
import './calendar';

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

/**
 * The calendar, compared DOM to DOM rather than DOM to markup string.
 *
 * Every other case here reads a story's markup, because the vanilla build
 * ENHANCES markup a template author wrote. The calendar RENDERS, so there is
 * no string to read — and that turns out to be the better position to check
 * from: both sides can be mounted and the actual trees compared, instead of
 * trusting that a string in a story stayed in step with a component.
 *
 * The comparison is deliberately one-directional and structural. It is not
 * asking for identical HTML — React adds its own bookkeeping and the two will
 * never be byte-identical — it is asking that every class and every state
 * attribute the stylesheet is written against appears on both sides. That is
 * the premise of this whole layer: one stylesheet dresses both.
 */
describe('calendar markup parity', () => {
  /*
   * The CURRENT month, not a fixed one.
   *
   * A fixed month contains no "today", so `data-today` rendered on neither
   * side and the comparison passed with the attribute missing from both — a
   * renamed hook sailed straight through. A parity test can only compare what
   * is actually rendered, so the fixture has to make every hook render.
   */
  const MONTH = new Date();
  const iso = (date: Date) => [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, '0'),
    '01',
  ].join('-');

  /** The `df-` classes and `data-` state attributes in a tree. */
  function shapeOf(root: ParentNode): { classes: Set<string>; attributes: Set<string> } {
    const classes = new Set<string>();
    const attributes = new Set<string>();

    root.querySelectorAll('*').forEach((node) => {
      node.classList.forEach((name) => {
        if (name.startsWith('df-')) classes.add(name);
      });
      Array.from(node.attributes).forEach((attribute) => {
        /*
         * The NAME, not the value. `data-range="start"` and
         * `data-range="end"` are the same hook as far as the stylesheet is
         * concerned, and a parity test that compared values would fail on
         * which day happened to be hovered.
         */
        if (attribute.name.startsWith('data-') || attribute.name.startsWith('aria-')) {
          attributes.add(attribute.name);
        }
        if (attribute.name === 'role') attributes.add(`role=${attribute.value}`);
      });
    });

    return { classes, attributes };
  }

  function vanillaShape(attrs: string) {
    const host = document.createElement('div');
    host.innerHTML = `<div data-df-calendar data-month="${iso(MONTH)}" ${attrs}></div>`;
    document.body.append(host);
    enhance(host);
    /* Choosing a day is what makes the selection hooks render at all. */
    host.querySelectorAll<HTMLButtonElement>('.df-calendar-day')[10]?.click();
    const shape = shapeOf(host);
    host.remove();
    return shape;
  }

  function reactShape(element: React.ReactElement) {
    const { container } = render(element);
    act(() => {
      container.querySelectorAll<HTMLButtonElement>('.df-calendar-day')[10]?.click();
    });
    return shapeOf(container);
  }

  /**
   * Attributes React adds that the vanilla build is right not to have.
   *
   * Each is a decision, listed so it is visible rather than hidden in a
   * loosened comparison.
   */
  const ALLOWED = new Set([
    // `aria-live` sits on the title in both; React also marks the grid's own
    // wrapper for its live-region bookkeeping.
    'data-drawing',
  ]);

  it.each([
    ['a plain month', '', {}],
    ['a range', 'data-mode="range"', { mode: 'range' as const }],
    ['week numbers', 'data-week-numbers', { showWeekNumbers: true }],
    ['two months', 'data-months="2"', { numberOfMonths: 2 }],
  ])('should render the same shape for %s', (_name, attrs, props) => {
    const fromVanilla = vanillaShape(`data-locale="en-US" ${attrs}`);
    const fromReact = reactShape(
      <DCalendar defaultMonth={MONTH} locale="en-US" showNavigation {...props} />,
    );

    const missingClasses = [...fromReact.classes].filter((name) => !fromVanilla.classes.has(name));
    expect(missingClasses).toEqual([]);

    const missingAttributes = [...fromReact.attributes]
      .filter((name) => !fromVanilla.attributes.has(name) && !ALLOWED.has(name));
    expect(missingAttributes).toEqual([]);
  });

  /* The grid pattern specifically, because it is what a port drops first. */
  it('should give both sides the same grid semantics', () => {
    const fromVanilla = vanillaShape('data-locale="en-US"');
    const fromReact = reactShape(<DCalendar defaultMonth={MONTH} locale="en-US" />);

    ['role=grid', 'role=gridcell', 'aria-label'].forEach((hook) => {
      expect(fromReact.attributes.has(hook)).toBe(true);
      expect(fromVanilla.attributes.has(hook)).toBe(true);
    });
  });
});
