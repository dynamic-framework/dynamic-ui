import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

/**
 * Every vanilla story must declare its own source.
 *
 * Storybook's viewer prints the story's JSX. For these stories that is
 * `<Html markup="…" />` with the whole document escaped into `&quot;` entities
 * — unreadable, and showing the React call rather than the HTML a template
 * author came for.
 *
 * The fix is `docs.source.code`, which `htmlStory()` sets. This checks that
 * nothing bypassed it, because the symptom of forgetting is not a blank space:
 * it is a wall of entities that still looks like a working code block, so it
 * survives review.
 *
 * Read as text rather than imported: importing a story module pulls Storybook's
 * types into the test build, and what is being checked is what the file SAYS —
 * which is where a new story would go wrong.
 */

/* The stories live next to the components they document, not next to this. */
const DIR = join(__dirname, '../../stories/vanilla');

const storyFiles = readdirSync(DIR).filter((file) => file.endsWith('.stories.tsx'));

/** `export const Name: Story = …` — the exports Storybook turns into stories. */
const STORY_EXPORT = /^export const (\w+)(?::\s*\w+(?:<[^>]*>)?)?\s*=\s*([\s\S]*?)(?=\n(?:export |\/\*\*|$))/gm;

describe('vanilla story sources', () => {
  it('should find the story files', () => {
    expect(storyFiles.length).toBeGreaterThan(0);
  });

  describe.each(storyFiles)('%s', (file) => {
    const source = readFileSync(join(DIR, file), 'utf8');

    it('should declare a source for every story', () => {
      const offenders = Array.from(source.matchAll(STORY_EXPORT))
        // `htmlStory()` sets it; anything else has to say so itself.
        .filter(([, , body]) => !body.includes('htmlStory(')
          && !body.includes('source(')
          && !body.includes('docs: { source'))
        .map(([, name]) => name);

      expect(offenders).toEqual([]);
    });

    /**
     * A story that renders markup must not set `args.markup` by hand: that
     * renders the HTML but leaves the viewer printing the JSX, which is the
     * exact bug this guard exists for.
     */
    it('should not set the markup arg outside the helper', () => {
      expect(source).not.toMatch(/args:\s*\{\s*markup/);
    });
  });
});
