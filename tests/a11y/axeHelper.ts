import { configureAxe } from 'jest-axe';

/**
 * Shared axe-core instance for component accessibility tests.
 *
 * These tests run in jsdom, which has no real rendering/painting engine,
 * so rules that depend on actually painted styles (color contrast and
 * related "cat.color" checks) cannot be reliably evaluated and would
 * require a real browser (see @axe-core/playwright / axe-playwright for
 * those checks). jest-axe already disables the "cat.color" rules by
 * default for this reason; we keep it explicit here for clarity and to
 * make sure it doesn't silently change with a future dependency bump.
 */
const axe = configureAxe({
  rules: {
    'color-contrast': { enabled: false },
    'color-contrast-enhanced': { enabled: false },
  },
});

export default axe;
