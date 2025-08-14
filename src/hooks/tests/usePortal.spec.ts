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

  it('should remove previous portal with the same name', () => {
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
