import type { ReactNode } from 'react';

/**
 * A worked example: the markup, and the markup running.
 *
 * Side by side on purpose. A class list you can read but not see tells you
 * nothing about whether it is the one you want, and a rendered box with no
 * source tells you nothing about how to get it.
 */
export default function Demo(
  {
    title, note, markup, children,
  }:
  { title: string; note?: ReactNode; markup: string; children: ReactNode },
) {
  return (
    <section className="df-mb-8">
      <h3 className="df-mb-1">{title}</h3>
      {note && <p className="df-text-muted df-fs-body-sm df-mb-3">{note}</p>}

      <div className="df-p-4 df-bg-surface df-rounded-control df-border-1 df-border-muted df-mb-2">
        {children}
      </div>

      <pre className="df-m-0" style={{ overflowX: 'auto' }}>
        <code>{markup}</code>
      </pre>
    </section>
  );
}
