import { useEffect, useRef } from 'react';

import { destroy, enhance } from '../../src/vanilla';

/**
 * The two lines that make any of this work.
 *
 * Every vanilla story prints them above its markup. A template author who
 * copies only the HTML gets a page where the component renders, does nothing,
 * and reports nothing — the markup is meaningful before the script runs, which
 * is the point of the layer and also why the omission is silent.
 *
 * One constant so the URL is stated once. NOTE: `.github/workflows/cdn.yml`
 * publishes `dist/css/` and `dist/vanilla/` only under `assets/<semver>/`;
 * nothing creates the `assets/3/` major alias this points at.
 */
export const SETUP = `<!-- Once per page, in your layout -->
<link rel="stylesheet" href="https://cdn.dynamicframework.dev/assets/3/css/dynamic.min.css">
<script type="module" src="https://cdn.dynamicframework.dev/assets/3/vanilla/dynamic.min.js"></script>`;

/** A fixed frame, so a story that grows does not shove the page around. */
export type Frame = { width?: string; height?: string };

/**
 * Renders a block of plain HTML and enhances it, exactly as a page would.
 *
 * The vanilla stories are the markup CONTRACT: what a Liquid template author
 * writes. Rendering it from a string rather than from JSX is deliberate — a
 * JSX version would quietly fix a missing attribute or a mis-nested element,
 * and those are precisely the mistakes the enhancement layer has to survive.
 */
export default function Html({ markup, frame }: { markup: string; frame?: Frame }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = ref.current;
    if (!host) return undefined;

    /*
     * A clean slate first, every run.
     *
     * The effect is not guaranteed to run once. React 19 double-invokes it
     * under StrictMode, a docs page can mount a story more than once, and a
     * markup change reruns it outright. The cleanup below calls `destroy`,
     * which removes the vanilla behaviours and knows nothing about a script
     * or the listeners it added — so a second run found the already
     * re-created script still in the DOM, re-created it again, and one button
     * fired two toasts.
     *
     * Rewriting the host from `markup` makes the run idempotent: the previous
     * run's listeners go with the nodes they were attached to.
     */
    host.innerHTML = markup;

    /*
     * Inline `<script>` has to be re-created to run.
     *
     * A script inserted through `innerHTML` is parsed and then deliberately
     * NOT executed — the HTML spec says so, to stop a string of markup from
     * running code by accident. Cloning each one into a fresh element and
     * swapping it in is the sanctioned way to opt back in.
     *
     * Without this, any vanilla example whose point is the JavaScript — a
     * button that fires a toast, a handler on a custom event — could only be
     * DESCRIBED, and the story had to render React buttons beside a code
     * block that did not match them. The markup and the thing on screen are
     * the same object now.
     *
     * The scripts here are authored in this repository, not supplied by a
     * user, and they are scoped to elements inside the host — so when
     * Storybook discards it, the listeners go with it.
     */
    host.querySelectorAll('script').forEach((old) => {
      const script = document.createElement('script');
      Array.from(old.attributes).forEach((a) => script.setAttribute(a.name, a.value));
      script.textContent = old.textContent;
      old.replaceWith(script);
    });

    enhance(host);
    // Torn down on unmount: Storybook swaps stories in place, and a behaviour
    // left attached to a discarded node is a listener nobody can remove.
    return () => destroy(host);
  }, [markup]);

  return (
    <div
      ref={ref}
      style={frame}
      // The markup is authored in this repository, not supplied by a user.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}

/**
 * Builds a vanilla story from its markup.
 *
 * Storybook's source viewer shows the story's JSX, which here is
 * `<Html markup="…" />` with the whole HTML escaped into `&quot;` entities —
 * unreadable, and showing the wrong thing entirely. A template author wants
 * the HTML, not the React call that renders it in a documentation page.
 *
 * So the markup is handed over twice: once as the arg that renders it, and
 * once as `docs.source.code`, which is what the viewer prints. `language:
 * 'html'` is what gets it highlighted as markup rather than as JSX.
 *
 * The printed source is the COMPLETE snippet — `SETUP` and then the markup —
 * because a half-snippet that looks complete is worse than no snippet.
 *
 * `frame` is presentation only and deliberately never reaches the source: the
 * React stories sit each component in a fixed box so the canvas does not
 * reflow when one expands, and these should look the same, but a width the
 * documentation page needs is not a width the component needs.
 *
 * Every vanilla story goes through this. `src/vanilla/storySource.spec.ts`
 * fails the build if one does not, because the symptom of forgetting is a
 * wall of entities that still looks like a code block.
 */
export function htmlStory(
  markup: string,
  extra: { parameters?: Record<string, unknown>; frame?: Frame } = {},
) {
  const { parameters, frame, ...rest } = extra;
  return {
    ...rest,
    args: { markup, ...frame && { frame } },
    parameters: {
      ...parameters,
      docs: {
        ...(parameters?.docs as Record<string, unknown> | undefined),
        source: { code: `${SETUP}\n\n${markup}`, language: 'html' },
      },
    },
  };
}
