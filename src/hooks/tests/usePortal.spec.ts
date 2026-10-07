import { renderHook } from '@testing-library/react';
import usePortal from '../usePortal';

describe('usePortal', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('should create a portal element with the given name', () => {
    const { result } = renderHook(() => usePortal('my-portal'));
    const portal = document.getElementById('my-portal');

    expect(portal).not.toBeNull();
    expect(portal?.className).toBe('d-portal');
    expect(result.current.created).toBe(true);
  });

  /**
   * Two providers on one `portalName` share the node; they must not fight over
   * it.
   *
   * This used to replace the node, which detached whatever the first provider
   * had rendered into it. `createPortal` keeps its own children inside the
   * container, so sharing one is fine — destroying it was not.
   */
  it('should reuse an existing portal node rather than replacing it', () => {
    const first = renderHook(() => usePortal('shared-portal'));
    const node = document.getElementById('shared-portal');
    expect(node).not.toBeNull();

    const second = renderHook(() => usePortal('shared-portal'));

    expect(document.getElementById('shared-portal')).toBe(node);
    expect(node?.isConnected).toBe(true);
    expect(first.result.current.created).toBe(true);
    expect(second.result.current.created).toBe(true);
    expect(document.querySelectorAll('#shared-portal')).toHaveLength(1);
  });

  it('should adopt a node the consumer put in the document themselves', () => {
    const div = document.createElement('div');
    div.id = 'old-portal';
    document.body.appendChild(div);
    expect(document.getElementById('old-portal')).not.toBeNull();

    renderHook(() => usePortal('old-portal'));
    expect(document.getElementById('old-portal')).not.toBeNull();
    expect(document.getElementById('old-portal')?.className).toBe('d-portal');
  });

  it('should update portal when portalName changes', () => {
    const { rerender } = renderHook(({ name }) => usePortal(name), { initialProps: { name: 'first-portal' } });
    expect(document.getElementById('first-portal')).not.toBeNull();

    rerender({ name: 'second-portal' });
    expect(document.getElementById('second-portal')).not.toBeNull();
    expect(document.getElementById('first-portal')).not.toBeNull();
  });
});
