import nearestOpenDialog from '../nearestOpenDialog';

/**
 * The lookup behind the top-layer fix.
 *
 * `showModal()` puts a panel in the browser's TOP LAYER, which paints above the
 * whole document whatever `z-index` says — so a floating element portalled to
 * `document.body` renders BEHIND the panel holding the control that opened it.
 * It is in the DOM, correctly positioned, and completely invisible.
 *
 * Portalling into the dialog puts the floating element in the top layer too.
 * This resolves which dialog that is, if any.
 */
describe('nearestOpenDialog', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  const mount = (html: string) => {
    document.body.innerHTML = html;
    return document.getElementById('control') as HTMLElement;
  };

  it('finds the open dialog above the element', () => {
    const control = mount('<dialog open id="panel"><div><button id="control"></button></div></dialog>');
    expect(nearestOpenDialog(control)?.id).toBe('panel');
  });

  it('finds the innermost one when dialogs are nested', () => {
    const control = mount(
      '<dialog open id="outer"><dialog open id="inner"><button id="control"></button></dialog></dialog>',
    );
    expect(nearestOpenDialog(control)?.id).toBe('inner');
  });

  /**
   * A closed dialog is not in the top layer and is not rendered at all —
   * portalling into one would hide the menu completely, which is a worse bug
   * than the one this fixes.
   */
  it('ignores a dialog that is closed', () => {
    const control = mount('<dialog id="panel"><button id="control"></button></dialog>');
    expect(nearestOpenDialog(control)).toBeUndefined();
  });

  it('returns undefined for a control on the page', () => {
    const control = mount('<div><button id="control"></button></div>');
    expect(nearestOpenDialog(control)).toBeUndefined();
  });

  /*
   * Called during render, so on the very first one the ref is still null — and
   * a test may hand it a detached node from an environment without `closest`.
   */
  it('tolerates nothing to look at', () => {
    expect(nearestOpenDialog(null)).toBeUndefined();
    expect(nearestOpenDialog(undefined)).toBeUndefined();
    expect(nearestOpenDialog({} as Element)).toBeUndefined();
  });
});
