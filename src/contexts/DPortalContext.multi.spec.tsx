import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import DModal from '../components/DModal';
import { DContextProvider } from './DContext';
import { useDPortalContext, type PortalProps } from './DPortalContext';

jest.mock('../components/DIcon', () => ({ __esModule: true, default: () => null }));

/**
 * Several providers on one `portalName`.
 *
 * Not an exotic setup: a Storybook docs page mounts one provider per story, and
 * they all take the default name. They share the mount node — `usePortal`
 * reuses it rather than replacing it — and each appends its own wrapper inside.
 *
 * Which means nothing may find "the panel on top" by searching that node. Both
 * handlers used to, with a CSS selector and with a tag sweep, and both could
 * land on a neighbour's element. They go through a ref to this provider's own
 * wrapper now, which cannot be ambiguous about whose panel is whose.
 */

type Payloads = { panel: { tag: string } };

function Opener({ tag }: { tag: string }) {
  const { openPortal, closePortal, stack } = useDPortalContext<Payloads>();
  return (
    <>
      <button type="button" onClick={() => openPortal('panel', { tag })}>{`open ${tag}`}</button>
      <button type="button" onClick={() => closePortal()}>{`close ${tag}`}</button>
      <span data-testid={`depth-${tag}`}>{stack.length}</span>
    </>
  );
}

const tick = async () => {
  await act(async () => { await new Promise((resolve) => { setTimeout(resolve, 0); }); });
};

describe('two providers sharing a portal node', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  /**
   * A panel that is NOT a `<dialog>`, which is the only kind the portal's own
   * Escape handling runs for — a native one closes itself.
   */
  function PlainPanel({ payload }: PortalProps<Payloads['panel']>) {
    return <div className="portal">{`panel ${payload.tag}`}</div>;
  }

  function PlainStory({ tag }: { tag: string }) {
    return (
      <DContextProvider availablePortals={{ panel: PlainPanel }}>
        <Opener tag={tag} />
      </DContextProvider>
    );
  }

  /**
   * The first provider having ANY child in its wrapper is enough to break this.
   *
   * The handler used to read `#d-portal > div > *:last-child`, and
   * `querySelector` takes the first match in document order — so it answered
   * with the first wrapper that had children, whoever owned it. Here that is the
   * scrim provider A latched on its way out, and Escape for B then found a
   * `.backdrop` with no panel after it and did nothing at all.
   */
  it('routes Escape to the provider that owns the open panel', async () => {
    render(
      <>
        <PlainStory tag="a" />
        <PlainStory tag="b" />
      </>,
    );

    // A opens and closes once, which latches its scrim.
    act(() => { screen.getByText('open a').click(); });
    await tick();
    act(() => { screen.getByText('close a').click(); });
    await tick();
    expect(screen.getByTestId('depth-a')).toHaveTextContent('0');

    act(() => { screen.getByText('open b').click(); });
    await tick();
    expect(screen.getByTestId('depth-b')).toHaveTextContent('1');

    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    });

    expect(screen.getByTestId('depth-b')).toHaveTextContent('0');
  });

  function DialogPanel({ name, payload }: PortalProps<Payloads['panel']>) {
    return (
      <DModal name={name}>
        <DModal.Body>{`panel ${payload.tag}`}</DModal.Body>
      </DModal>
    );
  }

  function DialogStory({ tag }: { tag: string }) {
    return (
      <DContextProvider availablePortals={{ panel: DialogPanel }}>
        <Opener tag={tag} />
      </DContextProvider>
    );
  }

  /**
   * `closePortal` resolves the top entry's `<dialog>` by id, and an id is only
   * unique per provider: both of these register the key `panel`, so both panels
   * carry `id="panel"`. Swept across the shared node, the first one wins — and
   * closing B shut A instead.
   */
  it('closes its own dialog when a neighbour has one under the same name', () => {
    render(
      <>
        <DialogStory tag="a" />
        <DialogStory tag="b" />
      </>,
    );

    act(() => { screen.getByText('open a').click(); });
    act(() => { screen.getByText('open b').click(); });
    expect(screen.getByTestId('depth-a')).toHaveTextContent('1');
    expect(screen.getByTestId('depth-b')).toHaveTextContent('1');

    act(() => { screen.getByText('close b').click(); });

    expect(screen.getByTestId('depth-b')).toHaveTextContent('0');
    expect(screen.getByTestId('depth-a')).toHaveTextContent('1');
  });
});
