/* eslint-disable no-console -- the subject of these tests is console.warn */
/**
 * Each test re-imports the module because it dedupes warnings in a module-level
 * set, so a warning already reported would stay silent on the next call.
 */
async function loadWarnLabelUsage() {
  jest.resetModules();
  const { default: warnLabelUsage } = await import('../warnLabelUsage');
  return warnLabelUsage;
}

describe('warnLabelUsage', () => {
  const warn = jest.fn();
  const originalWarn = console.warn;

  beforeEach(() => {
    warn.mockClear();
    console.warn = warn;
  });

  afterEach(() => {
    console.warn = originalWarn;
  });

  it('should stay silent for a text label', async () => {
    const warnLabelUsage = await loadWarnLabelUsage();

    warnLabelUsage({ component: 'DInput', label: 'Name', hasAccessibleName: false });
    warnLabelUsage({
      component: 'DInput',
      label: 0,
      hasAccessibleName: false,
      floatingLabel: true,
    });

    expect(warn).not.toHaveBeenCalled();
  });

  it('should stay silent when the label is absent', async () => {
    const warnLabelUsage = await loadWarnLabelUsage();

    warnLabelUsage({ component: 'DInput', label: undefined, hasAccessibleName: false });
    warnLabelUsage({ component: 'DInput', label: null, hasAccessibleName: false });

    expect(warn).not.toHaveBeenCalled();
  });

  it('should warn when a node label has no accessible name', async () => {
    const warnLabelUsage = await loadWarnLabelUsage();

    warnLabelUsage({ component: 'DInput', label: <span>Name</span>, hasAccessibleName: false });

    expect(warn).toHaveBeenCalledTimes(1);
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('DInput'));
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('aria-label'));
  });

  it('should stay silent when a node label has an accessible name', async () => {
    const warnLabelUsage = await loadWarnLabelUsage();

    warnLabelUsage({ component: 'DInput', label: <span>Name</span>, hasAccessibleName: true });

    expect(warn).not.toHaveBeenCalled();
  });

  it('should warn when a node label is combined with floatingLabel', async () => {
    const warnLabelUsage = await loadWarnLabelUsage();

    warnLabelUsage({
      component: 'DInput',
      label: <span>Name</span>,
      hasAccessibleName: true,
      floatingLabel: true,
    });

    expect(warn).toHaveBeenCalledTimes(1);
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('floatingLabel'));
  });

  it('should warn once per component and reason however many instances render', async () => {
    const warnLabelUsage = await loadWarnLabelUsage();

    warnLabelUsage({ component: 'DInput', label: <span>A</span>, hasAccessibleName: false });
    warnLabelUsage({ component: 'DInput', label: <span>B</span>, hasAccessibleName: false });
    warnLabelUsage({ component: 'DSelect', label: <span>C</span>, hasAccessibleName: false });

    expect(warn).toHaveBeenCalledTimes(2);
  });
});
