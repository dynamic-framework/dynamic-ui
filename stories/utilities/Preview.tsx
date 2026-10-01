import type { Family, Rule } from './manifest';

/**
 * What a utility looks like, rather than what it is called.
 *
 * A reference that only lists names makes you load the page, apply the class
 * and look — which is the work the page exists to save. Each family that has a
 * visual result gets one, and the families that do not (display, flex,
 * alignment) say so instead of rendering an empty box.
 */
export default function Preview({ family, rule }: { family: Family; rule: Rule }) {
  const cls = `df-${rule.name}`;

  switch (family.name) {
    case 'text-colour':
      return <span className={cls}>Almost before we knew it</span>;

    case 'background':
      return (
        <span
          className={`${cls} df-rounded-control df-border-1 df-border-muted`}
          style={{ display: 'inline-block', inlineSize: '4.5rem', blockSize: '1.75rem' }}
        />
      );

    case 'border-colour':
      return (
        <span
          className={`${cls} df-rounded-control df-border-2`}
          style={{ display: 'inline-block', inlineSize: '4.5rem', blockSize: '1.75rem' }}
        />
      );

    case 'border-width':
      return (
        <span
          className={`${cls} df-rounded-control df-border-strong`}
          style={{ display: 'inline-block', inlineSize: '4.5rem', blockSize: '1.75rem' }}
        />
      );

    case 'radius':
      return (
        <span
          className={`${cls} df-bg-muted`}
          style={{ display: 'inline-block', inlineSize: '4.5rem', blockSize: '1.75rem' }}
        />
      );

    case 'shadow':
      return (
        <span
          className={`${cls} df-bg-raised df-rounded-control`}
          style={{ display: 'inline-block', inlineSize: '4.5rem', blockSize: '1.75rem' }}
        />
      );

    case 'opacity':
      return (
        <span
          className={`${cls} df-bg-inverse df-rounded-control`}
          style={{ display: 'inline-block', inlineSize: '4.5rem', blockSize: '1.75rem' }}
        />
      );

    case 'font-size':
    case 'font-weight':
    case 'line-height':
    case 'decoration':
      return <span className={cls}>Almost before we knew it</span>;

    /*
     * Spacing is shown as the box it produces, not as a word with space round
     * it: `m-4` and `p-4` are the same measurement applied to opposite sides,
     * and only an outline makes which one visible.
     */
    case 'margin':
    case 'padding':
    case 'gap':
      return (
        <span
          className={`${cls} df-bg-primary-subtle`}
          style={{ display: 'inline-block', outline: '1px dashed var(--df-border-strong)' }}
        >
          <span className="df-bg-raised" style={{ display: 'inline-block', inlineSize: '2rem', blockSize: '1rem' }} />
        </span>
      );

    default:
      return <span className="df-text-subtle df-fs-caption">no visual result on its own</span>;
  }
}
