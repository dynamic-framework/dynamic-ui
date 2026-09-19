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
  const warn = jest.spyOn(console, 'warn');

  beforeEach(() => {
    warn.mockReset().mockImplementation(() => {});
  });

  afterAll(() => {
    warn.mockRestore();
  });

  it('should stay silent for a text label', async () => {
    const warnLabelUsage = await loadWarnLabelUsage();

    warnLabelUsage({
      component: 'DInput', label: 'Name', hasAccessibleName: false, accessibleNameProp: 'aria-label',
    });
    warnLabelUsage({
      component: 'DInput',
      label: 0,
      hasAccessibleName: false,
      accessibleNameProp: 'aria-label',
      floatingLabel: true,
    });

    expect(warn).not.toHaveBeenCalled();
  });

  it('should stay silent when the label is absent', async () => {
    const warnLabelUsage = await loadWarnLabelUsage();

    warnLabelUsage({
      component: 'DInput', label: undefined, hasAccessibleName: false, accessibleNameProp: 'aria-label',
    });
    warnLabelUsage({
      component: 'DInput', label: null, hasAccessibleName: false, accessibleNameProp: 'aria-label',
    });
    warnLabelUsage({
      component: 'DInput', label: '', hasAccessibleName: false, accessibleNameProp: 'aria-label',
    });

    expect(warn).not.toHaveBeenCalled();
  });

  // `label={condition && <span />}` collapses to false when the condition is
  // false, and the render paths drop it, so there is no label to warn about.
  it('should stay silent for a boolean label the render paths drop', async () => {
    const warnLabelUsage = await loadWarnLabelUsage();

    warnLabelUsage({
      component: 'DInput', label: false, hasAccessibleName: false, accessibleNameProp: 'aria-label',
    });
    warnLabelUsage({
      component: 'DInput',
      label: true,
      hasAccessibleName: false,
      accessibleNameProp: 'aria-label',
      floatingLabel: true,
    });

    expect(warn).not.toHaveBeenCalled();
  });

  it('should warn when a node label has no accessible name', async () => {
    const warnLabelUsage = await loadWarnLabelUsage();

    warnLabelUsage({
      component: 'DInput', label: <span>Name</span>, hasAccessibleName: false, accessibleNameProp: 'aria-label',
    });

    expect(warn).toHaveBeenCalledTimes(1);
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('DInput'));
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('aria-label'));
  });

  it('should stay silent when a node label has an accessible name', async () => {
    const warnLabelUsage = await loadWarnLabelUsage();

    warnLabelUsage({
      component: 'DInput', label: <span>Name</span>, hasAccessibleName: true, accessibleNameProp: 'aria-label',
    });

    expect(warn).not.toHaveBeenCalled();
  });

  it('should warn when a node label is combined with floatingLabel', async () => {
    const warnLabelUsage = await loadWarnLabelUsage();

    warnLabelUsage({
      component: 'DInput',
      label: <span>Name</span>,
      hasAccessibleName: true,
      accessibleNameProp: 'aria-label',
      floatingLabel: true,
    });

    expect(warn).toHaveBeenCalledTimes(1);
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('floatingLabel'));
  });

  it('should warn once per component and reason however many instances render', async () => {
    const warnLabelUsage = await loadWarnLabelUsage();

    warnLabelUsage({
      component: 'DInput', label: <span>A</span>, hasAccessibleName: false, accessibleNameProp: 'aria-label',
    });
    warnLabelUsage({
      component: 'DInput', label: <span>B</span>, hasAccessibleName: false, accessibleNameProp: 'aria-label',
    });
    warnLabelUsage({
      component: 'DSelect', label: <span>C</span>, hasAccessibleName: false, accessibleNameProp: 'aria-label',
    });

    expect(warn).toHaveBeenCalledTimes(2);
  });

  // The supported prop differs per component: those spreading the native input
  // attributes take `aria-label`, the rest reject it in favour of `ariaLabel`.
  // Naming the wrong one sends the developer to a prop their component refuses.
  it('should name the prop the component actually accepts', async () => {
    const warnLabelUsage = await loadWarnLabelUsage();

    warnLabelUsage({
      component: 'DInput',
      label: <span>Name</span>,
      hasAccessibleName: false,
      accessibleNameProp: 'aria-label',
    });
    warnLabelUsage({
      component: 'DInputSelect',
      label: <span>Name</span>,
      hasAccessibleName: false,
      accessibleNameProp: 'ariaLabel',
    });

    expect(warn).toHaveBeenNthCalledWith(1, expect.stringContaining('Pass aria-label with'));
    expect(warn).toHaveBeenNthCalledWith(2, expect.stringContaining('Pass ariaLabel with'));
  });
});
