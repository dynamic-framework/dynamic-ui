import { useEffect, useRef } from 'react';

import { destroy, enhance } from '../../src/vanilla';

/**
 * Renders a block of plain HTML and enhances it, exactly as a page would.
 *
 * The vanilla stories are the markup CONTRACT: what a Liquid template author
 * writes. Rendering it from a string rather than from JSX is deliberate — a
 * JSX version would quietly fix a missing attribute or a mis-nested element,
 * and those are precisely the mistakes the enhancement layer has to survive.
 *
 * The markup is also what Storybook shows as the source, so it can be copied
 * straight into a template.
 */
export default function Html({ markup }: { markup: string }) {
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
 * Every vanilla story goes through this. `stories/vanilla/source.spec.ts`
 * fails the build if one does not, because the symptom of forgetting is a
 * wall of entities that still looks like a code block.
 */
export function htmlStory(
  markup: string,
  extra: { parameters?: Record<string, unknown> } = {},
) {
  const { parameters, ...rest } = extra;
  return {
    ...rest,
    args: { markup },
    parameters: {
      ...parameters,
      docs: {
        ...(parameters?.docs as Record<string, unknown> | undefined),
        source: { code: markup, language: 'html' },
      },
    },
  };
}
