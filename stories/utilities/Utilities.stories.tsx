import { useMemo, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import Preview from './Preview';
import {
  breakpoints, families, patternOf, totalRules,
} from './manifest';
import type { Family } from './manifest';

/**
 * The utility reference, built from the stylesheet's own source table.
 *
 * Everything here — the family list, the class names, the declarations, which
 * families take `hover:`, `dark:` or a breakpoint prefix — is read from
 * `dist/css/utilities.manifest.json`, which `build-utilities.mjs` writes from
 * the same `GROUPS` it emits the CSS from. There is no second list to keep in
 * step.
 */

function Badges({ family }: { family: Family }) {
  const badges = [
    family.responsive && 'responsive',
    family.hover && 'hover:',
    family.dark && 'dark:',
  ].filter(Boolean);

  if (!badges.length) return null;
  return (
    <span className="df-flex df-gap-1">
      {badges.map((badge) => (
        <span key={badge} className="df-chip" data-size="sm" data-variant="outline">{badge}</span>
      ))}
    </span>
  );
}

function RuleRow({ family, rule }: { family: Family; rule: typeof family.rules[number] }) {
  return (
    <tr>
      <td style={{ padding: '0.5rem 0.75rem', verticalAlign: 'middle' }}>
        <code>{`df-${rule.name}`}</code>
      </td>
      <td style={{ padding: '0.5rem 0.75rem', verticalAlign: 'middle' }}>
        <Preview family={family} rule={rule} />
      </td>
      <td style={{ padding: '0.5rem 0.75rem', verticalAlign: 'middle' }}>
        <code className="df-fs-caption df-text-muted">
          {rule.decls.map(([prop, value]) => `${prop}: ${value}`).join('; ')}
        </code>
      </td>
    </tr>
  );
}

/** Families big enough that listing every class is noise rather than help. */
const COLLAPSE_OVER = 40;

function FamilySection({ family, filter }: { family: Family; filter: string }) {
  const [expanded, setExpanded] = useState(false);

  const matching = useMemo(
    () => family.rules.filter((rule) => `df-${rule.name}`.includes(filter)),
    [family, filter],
  );

  if (!matching.length) return null;

  const big = matching.length > COLLAPSE_OVER && !filter;
  const shown = big && !expanded ? matching.slice(0, 12) : matching;

  return (
    <section className="df-mb-8">
      <div className="df-flex df-gap-3 df-items-center df-mb-2">
        <h3 className="df-m-0">{family.name}</h3>
        <span className="df-text-muted df-fs-caption">{`${matching.length} classes`}</span>
        <Badges family={family} />
      </div>

      <p className="df-text-muted df-fs-body-sm df-mb-3">
        <code>{patternOf(family).slice(0, 6).join('  ·  ')}</code>
      </p>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            {shown.map((rule) => (
              <RuleRow key={rule.name} family={family} rule={rule} />
            ))}
          </tbody>
        </table>
      </div>

      {big && (
        <button
          type="button"
          className="df-button df-mt-2"
          data-variant="link"
          data-color="primary"
          data-size="sm"
          onClick={() => setExpanded((v) => !v)}
        >
          <span className="df-button-label">
            {expanded ? 'Show fewer' : `Show all ${matching.length}`}
          </span>
        </button>
      )}
    </section>
  );
}

function Reference() {
  const [filter, setFilter] = useState('');

  return (
    <div className="df-p-6">
      <p className="df-text-muted df-mb-4">
        {`${totalRules} utilities across ${families.length} families, plus `}
        <code>hover:</code>
        {', '}
        <code>dark:</code>
        {' and '}
        <code>{breakpoints.map((b) => `${b.name}:`).join(' ')}</code>
        {' variants where the family supports them.'}
      </p>

      <input
        type="search"
        className="df-input df-mb-6"
        placeholder="Filter — try bg-, rounded, px-"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        style={{ maxWidth: '22rem' }}
      />

      {families.map((family) => (
        <FamilySection key={family.name} family={family} filter={filter} />
      ))}
    </div>
  );
}

const meta: Meta = {
  title: 'Design System/Utilities/All classes',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Every utility class in the library, in one searchable list.

This is the fallback for when you do not know which family a class belongs to.
If you do, the topic pages — **Layout**, **Spacing**, **Typography**,
**Colors**, **Borders & Effects** — are the same classes with worked examples
beside them.

A family's badges say which variants it takes. A family with no \`dark:\` badge
has no \`df-dark:\` classes, and writing one produces nothing and reports
nothing.
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

/** Searchable, grouped by family. */
export const All: Story = { render: () => <Reference /> };
