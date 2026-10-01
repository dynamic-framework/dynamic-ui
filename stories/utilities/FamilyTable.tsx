import { useMemo, useState } from 'react';

import Preview from './Preview';
import { families as allFamilies } from './manifest';
import type { Family } from './manifest';

/**
 * One topic's worth of utilities, searchable.
 *
 * The reference used to be a single page of all 22 families, which is the
 * right data and the wrong shape: you arrive looking for "how do I round a
 * corner", and 819 rows is not an answer. Each page now takes the families
 * that belong to one question.
 */

function Badges({ family }: { family: Family }) {
  const badges = [
    family.responsive && 'responsive',
    family.hover && 'hover:',
    family.dark && 'dark:',
  ].filter(Boolean);

  if (!badges.length) {
    return <span className="df-fs-body-xs df-text-subtle">no variants</span>;
  }
  return (
    <span className="df-flex df-gap-1">
      {badges.map((badge) => (
        <span key={badge} className="df-chip" data-size="sm" data-variant="outline">{badge}</span>
      ))}
    </span>
  );
}

const COLLAPSE_OVER = 40;

function Section({ family, filter }: { family: Family; filter: string }) {
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
      <div className="df-flex df-gap-3 df-items-center df-mb-3">
        <h3 className="df-m-0">{family.name}</h3>
        <span className="df-text-muted df-fs-body-xs">{`${matching.length}`}</span>
        <Badges family={family} />
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            {shown.map((rule) => (
              <tr key={rule.name}>
                <td style={{ padding: '0.4rem 0.75rem 0.4rem 0', verticalAlign: 'middle' }}>
                  <code>{`df-${rule.name}`}</code>
                </td>
                <td style={{ padding: '0.4rem 0.75rem', verticalAlign: 'middle' }}>
                  <Preview family={family} rule={rule} />
                </td>
                <td style={{ padding: '0.4rem 0', verticalAlign: 'middle' }}>
                  <code className="df-fs-body-xs df-text-muted">
                    {rule.decls.map(([prop, value]) => `${prop}: ${value}`).join('; ')}
                  </code>
                </td>
              </tr>
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

export default function FamilyTable({ names }: { names: string[] }) {
  const [filter, setFilter] = useState('');
  const families = names
    .map((name) => allFamilies.find((family) => family.name === name))
    .filter(Boolean);

  const total = families.reduce((n, family) => n + family.rules.length, 0);

  return (
    <div>
      <input
        type="search"
        className="df-input df-mb-6"
        placeholder={`Filter ${total} classes`}
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        style={{ maxWidth: '20rem' }}
      />
      {families.map((family) => (
        <Section key={family.name} family={family} filter={filter} />
      ))}
    </div>
  );
}
