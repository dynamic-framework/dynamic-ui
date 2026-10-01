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
