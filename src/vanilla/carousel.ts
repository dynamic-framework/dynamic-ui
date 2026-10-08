import { define } from './registry';

import type { Behaviour, Teardown } from './registry';

/**
 * Carousel.
 *
 * ```html
 * <div class="df-carousel" data-df-carousel style="--df-carousel-per-page-md: 3">
 *   <div class="df-carousel-viewport" tabindex="0" role="group" aria-label="Slides">
 *     <div class="df-carousel-slide" role="group" aria-roledescription="slide">…</div>
 *   </div>
 *   <button class="df-carousel-arrow" data-direction="prev" aria-label="Previous slide">…</button>
 *   <button class="df-carousel-arrow" data-direction="next" aria-label="Next slide">…</button>
 * </div>
 * ```
 *
 * ## Controls somewhere else
 *
 * Name the carousel and name a container after it. Anything inside that
 * container with `.df-carousel-arrow` or `.df-carousel-page` drives it, with
 * the same disabling and the same dot tracking as if it sat inside:
 *
 * ```html
 * <div class="df-carousel" data-df-carousel="hero">
 *   <div class="df-carousel-viewport" id="hero-strip" tabindex="0" role="group">…</div>
 * </div>
 *
 * <div data-df-carousel-controls="hero">
 *   <button class="df-carousel-arrow" data-direction="prev" aria-controls="hero-strip">…</button>
 *   <button class="df-carousel-arrow" data-direction="next" aria-controls="hero-strip">…</button>
 * </div>
 * ```
 *
 * `aria-controls` is the author's job here, and it matters more than it does
 * inside the carousel: a button on the other side of the page has no
 * relationship to the strip it drives unless it says so.
 *
 * ## Most of it is not here
 *
 * The viewport is `overflow: auto` with `scroll-snap-type: inline mandatory`,
 * so dragging, momentum, the snap itself, keyboard arrows and a screen
 * reader's reading order all come from the browser. The markup above is a
 * working carousel with this script absent — which is the whole premise of
 * this layer, and in this component it is most of the component.
 *
 * What is left for JavaScript is the chrome: moving the scroll when an arrow
 * is pressed, disabling an arrow at the end, keeping the pagination dots in
 * step, and autoplay. Every one of those is DERIVED from scroll position
 * rather than tracked separately, the same way `useCarousel` does it — two
 * sources of truth for "which slide is showing" is how a carousel ends up
 * disagreeing with itself after a drag.
 *
 * ## What it deliberately does not do
 *
 * **Loop.** `DCarousel` implements it by cloning slides at both ends and
 * jumping the scroll when one settles. It is the most intricate part of the
 * React component and the one most likely to be wrong in a second
 * implementation, so this does not attempt it: a vanilla carousel runs from
 * the first slide to the last. `data-loop` on the markup does nothing, and
 * the story says so rather than leaving it to be discovered.
 */

/** Longer than a snap takes to settle; `scrollend` is not in every browser. */
const SCROLL_IDLE_MS = 120;

/** Names already reported, so a page of ten carousels warns once per name. */
const warnedNames = new Set<string>();

/**
 * Control containers whose name matches no carousel at all.
 *
 * This is the failure an id brings and an object does not, and it is already
 * on record elsewhere in this library: a typo produces buttons that look live
 * and do nothing, with no error anywhere. Checked from the CONTROLS' side
 * rather than the carousel's, because a carousel with no external controls is
 * the normal case and would otherwise warn on every page.
 */
function warnOrphanedControls(): void {
  const named = new Set(
    Array.from(document.querySelectorAll<HTMLElement>('[data-df-carousel]'))
      .map((element) => element.dataset.dfCarousel)
      .filter((value): value is string => Boolean(value)),
  );

  document.querySelectorAll<HTMLElement>('[data-df-carousel-controls]').forEach((host) => {
    const wanted = host.dataset.dfCarouselControls;
    if (!wanted || named.has(wanted) || warnedNames.has(wanted)) return;
    warnedNames.add(wanted);
    // eslint-disable-next-line no-console
    console.warn(
      `[dynamic] data-df-carousel-controls="${wanted}" matches no `
      + `[data-df-carousel="${wanted}"], so these controls are wired to nothing.`,
      host,
    );
  });
}

/**
 * The control containers that name this carousel.
 *
 * The React side connects external controls with an object from
 * `useDCarouselController`, because passing one is what a component tree makes
 * easy and a string id there fails silently on a typo. Here there is no
 * closure to pass and the DOM IS the registry, so an id is the right answer
 * rather than the lazy one — with both of its failure modes answered rather
 * than left to be discovered.
 */
function collectExternal(root: HTMLElement, name: string | undefined): HTMLElement[] {
  warnOrphanedControls();
  if (!name) return [];

  const duplicates = document.querySelectorAll(`[data-df-carousel="${name}"]`);
  if (duplicates.length > 1 && !warnedNames.has(`dup:${name}`)) {
    warnedNames.add(`dup:${name}`);
    // eslint-disable-next-line no-console
    console.warn(
      `[dynamic] ${duplicates.length} carousels share data-df-carousel="${name}". `
      + 'Controls naming it will drive all of them — give each one its own name.',
      root,
    );
  }

  return Array.from(
    document.querySelectorAll<HTMLElement>(`[data-df-carousel-controls="${name}"]`),
  );
}

function mount(root: HTMLElement): Teardown {
  const viewport = root.querySelector<HTMLElement>('.df-carousel-viewport');
  if (!viewport) {
    // eslint-disable-next-line no-console
    console.warn('[dynamic] data-df-carousel needs a .df-carousel-viewport', root);
    return () => {};
  }

  /* Narrowed once. TypeScript keeps `HTMLElement | null` inside the closures
     below even though the guard above returned, so every use would need a
     `!`. */
  const view: HTMLElement = viewport;

  /*
   * Controls inside the carousel, plus any marked as belonging to it.
   *
   * The React side connects external controls with an object from
   * `useDCarouselController`, because passing one is what a component tree
   * makes easy and a string id there fails silently on a typo. Here there is
   * no closure to pass and the DOM IS the registry, so an id is the right
   * answer rather than the lazy one:
   *
   * ```html
   * <div class="df-carousel" data-df-carousel="hero">…</div>
   *
   * <div data-df-carousel-controls="hero">
   *   <button class="df-carousel-arrow" data-direction="prev">…</button>
   * </div>
   * ```
   *
   * The failure modes an id brings are answered below rather than left to be
   * discovered: a name nothing claims, and a name two carousels claim.
   */
  const name = root.dataset.dfCarousel;
  const external = collectExternal(root, name);

  const arrows = [
    ...Array.from(root.querySelectorAll<HTMLButtonElement>('.df-carousel-arrow')),
    ...external.flatMap((host) => (
      Array.from(host.querySelectorAll<HTMLButtonElement>('.df-carousel-arrow'))
    )),
  ];
  const dots = [
    ...Array.from(root.querySelectorAll<HTMLButtonElement>('.df-carousel-page')),
    ...external.flatMap((host) => (
      Array.from(host.querySelectorAll<HTMLButtonElement>('.df-carousel-page'))
    )),
  ];
  const slides = () => Array.from(view.querySelectorAll<HTMLElement>('.df-carousel-slide'));

  /**
   * How many slides a page is, read back from the stylesheet.
   *
   * The responsive tiers are media queries on `--df-carousel-per-page`, so the
   * browser has already resolved which one applies. Recomputing it here from
   * `window.innerWidth` would be a second implementation of the breakpoints
   * that could disagree with the first.
   */
  const perPage = () => {
    const raw = getComputedStyle(root).getPropertyValue('--df-carousel-per-page');
    const n = parseInt(raw, 10);
    return Number.isFinite(n) && n > 0 ? n : 1;
  };

  const rtl = () => getComputedStyle(view).direction === 'rtl';

  /** Everything below is derived from this, never from a counter. */
  function activeIndex(): number {
    const all = slides();
    if (!all.length) return 0;

    const box = view.getBoundingClientRect();
    const edge = rtl() ? box.right : box.left;

    let best = 0;
    let bestDistance = Infinity;
    all.forEach((slide, index) => {
      const rect = slide.getBoundingClientRect();
      const distance = Math.abs((rtl() ? rect.right : rect.left) - edge);
      if (distance < bestDistance) { bestDistance = distance; best = index; }
    });
    return best;
  }

  function sync() {
    const index = activeIndex();
    const all = slides();
    const atStart = view.scrollLeft <= 1;
    const atEnd = Math.abs(view.scrollLeft) + view.clientWidth >= view.scrollWidth - 1;

    all.forEach((slide, i) => slide.toggleAttribute('data-active', i === index));

    arrows.forEach((arrow) => {
      const prev = arrow.getAttribute('data-direction') === 'prev';
      // eslint-disable-next-line no-param-reassign
      arrow.disabled = prev ? atStart : atEnd;
    });

    dots.forEach((dot, i) => {
      const selected = i === index;
      dot.setAttribute('aria-selected', String(selected));
      dot.setAttribute('tabindex', selected ? '0' : '-1');
    });

    root.dispatchEvent(new CustomEvent('df:carousel:change', {
      bubbles: true,
      detail: { index, perPage: perPage() },
    }));
  }

  function scrollToSlide(index: number) {
    const all = slides();
    const target = all[Math.max(0, Math.min(index, all.length - 1))];
    if (!target) return;

    const box = view.getBoundingClientRect();
    const rect = target.getBoundingClientRect();
    const delta = rtl() ? rect.right - box.right : rect.left - box.left;
    view.scrollBy({ left: delta, behavior: 'smooth' });
  }

  const move = (direction: 1 | -1) => scrollToSlide(activeIndex() + direction * perPage());

  const onArrow = (event: Event) => {
    const button = (event.currentTarget as HTMLElement);
    move(button.getAttribute('data-direction') === 'prev' ? -1 : 1);
  };
  arrows.forEach((arrow) => arrow.addEventListener('click', onArrow));

  const onDot = (event: Event) => {
    scrollToSlide(dots.indexOf(event.currentTarget as HTMLButtonElement));
  };
  dots.forEach((dot) => dot.addEventListener('click', onDot));

  let idle: number | undefined;
  const onScroll = () => {
    window.clearTimeout(idle);
    idle = window.setTimeout(sync, SCROLL_IDLE_MS);
  };
  view.addEventListener('scroll', onScroll, { passive: true });

  /* --- autoplay ----------------------------------------------------- */

  const interval = Number(root.getAttribute('data-autoplay')) || 0;
  let timer: number | undefined;

  /*
   * `paused` is a decision and `suspended` is a circumstance, and they are
   * separate because one boolean for both is a bug: a hover handler that
   * writes the same flag the pause button reads makes the button report
   * "already stopped" the moment it takes focus, so pressing it resumes.
   */
  let paused = false;
  let suspended = false;

  function tick() {
    const all = slides();
    const last = Math.max(0, all.length - perPage());
    scrollToSlide(activeIndex() >= last ? 0 : activeIndex() + perPage());
  }

  function updateTimer() {
    window.clearInterval(timer);
    if (interval > 0 && !paused && !suspended) {
      timer = window.setInterval(tick, interval);
    }
  }

  const suspend = () => { suspended = true; updateTimer(); };
  const resume = () => { suspended = false; updateTimer(); };
  const onVisibility = () => { suspended = document.hidden; updateTimer(); };

  const toggle = root.querySelector<HTMLButtonElement>('.df-carousel-autoplay');
  const onToggle = () => {
    paused = !paused;
    toggle?.setAttribute('aria-pressed', String(paused));
    updateTimer();
  };

  if (interval > 0) {
    root.addEventListener('mouseenter', suspend);
    root.addEventListener('mouseleave', resume);
    root.addEventListener('focusin', suspend);
    root.addEventListener('focusout', resume);
    document.addEventListener('visibilitychange', onVisibility);
    toggle?.addEventListener('click', onToggle);
    updateTimer();
  }

  /* Settle the initial state from the markup, the way tabs and collapse do. */
  sync();

  return () => {
    window.clearTimeout(idle);
    window.clearInterval(timer);
    view.removeEventListener('scroll', onScroll);
    arrows.forEach((arrow) => arrow.removeEventListener('click', onArrow));
    dots.forEach((dot) => dot.removeEventListener('click', onDot));
    root.removeEventListener('mouseenter', suspend);
    root.removeEventListener('mouseleave', resume);
    root.removeEventListener('focusin', suspend);
    root.removeEventListener('focusout', resume);
    document.removeEventListener('visibilitychange', onVisibility);
    toggle?.removeEventListener('click', onToggle);
  };
}

/** Exported as well as registered — see the note in `tabs.ts`. */
export const carousel: Behaviour = {
  name: 'carousel',
  selector: '[data-df-carousel]',
  mount,
};

define(carousel);
