/// <reference types="@testing-library/jest-dom" />

import {
  render,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DModal from '.';
import { DContextProvider } from '../../contexts/DContext';

jest.mock('../../contexts', () => ({
  useDContext: () => ({
    iconMap: {
      xLg: 'x-lg-icon',
    },
    icon: {
      familyClass: 'bi',
      familyPrefix: 'bi',
    },
  }),
}));

// Matches the DS default Bootstrap breakpoints, so `DContextProvider`'s
// `useLayoutEffect` (which reads `--df-breakpoint-*` CSS variables) resolves
// the same breakpoints used in a real browser.
jest.mock('../../utils/getCssVariable', () => ({
  __esModule: true,
  default: (name: string) => {
    if (name.includes('xxl')) return '1400px';
    if (name.includes('xl')) return '1200px';
    if (name.includes('lg')) return '992px';
    if (name.includes('md')) return '768px';
    if (name.includes('sm')) return '576px';
    if (name.includes('xs')) return '0px';
    return '';
  },
}));

const BREAKPOINTS_WIDTH: Record<string, number> = {
  xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400,
};

// Simulates a real viewport width against `(min-width: <n>px)` media queries,
// so `useMediaBreakpointUp`/`useResponsiveProp` resolve the same way they
// would in a real browser at that width.
let currentViewportWidth = 0;

beforeAll(() => {
  window.matchMedia = jest.fn((query: string) => {
    const match = /min-width:\s*(\d+)px/.exec(query);
    const breakpointPx = match ? Number(match[1]) : 0;
    return {
      matches: currentViewportWidth >= breakpointPx,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    } as unknown as MediaQueryList;
  });
});

beforeEach(() => {
  currentViewportWidth = 0;
});

describe('<DModal />', () => {
  describe('Rendering and Props', () => {
    it('should render with header, body, and footer', () => {
      const { container } = render(
        <DModal name="myModal">
          <DModal.Header>Test Header</DModal.Header>
          <DModal.Body>Test Body</DModal.Body>
          <DModal.Footer>Test Footer</DModal.Footer>
        </DModal>,
      );

      expect(container).toMatchInlineSnapshot(`
<div>
  <dialog
    aria-labelledby="myModalLabel"
    class="df-overlay"
    data-placement="center"
    id="myModal"
    open=""
  >
    <div
      class="df-overlay-header"
    >
      <div
        id="myModalLabel"
      >
        Test Header
      </div>
    </div>
    <hr
      class="df-overlay-separator"
    />
    <div
      class="df-overlay-body"
    >
      Test Body
    </div>
    <hr
      class="df-overlay-separator"
    />
    <div
      class="df-overlay-footer"
    >
      Test Footer
    </div>
  </dialog>
</div>
`);
    });

    /**
     * `centered` is gone because it was never a choice.
     *
     * It emitted `data-centered`, which no rule in the stylesheet matched —
     * and it could not have mattered: `[data-placement="center"]` pins all
     * four edges with `auto` margins, so a centred modal is centred by
     * definition. The prop promised an option that did not exist.
     */
    it('should render a large centred modal', () => {
      const { container } = render(<DModal name="test" placement="center" size="lg" />);

      const dialog = container.querySelector('.df-overlay');
      expect(dialog).toHaveAttribute('data-placement', 'center');
      expect(dialog).toHaveAttribute('data-size', 'lg');
      expect(dialog).not.toHaveAttribute('data-centered');
    });

    it('should render with a static backdrop', () => {
      const { container } = render(<DModal name="test" staticBackdrop />);

      const modal = container.querySelector('.df-overlay');
      expect(modal).toHaveAttribute('data-static-backdrop');
    });

    it('should render a fullscreen modal', () => {
      const { container } = render(<DModal name="test" placement="fill" />);

      const dialog = container.querySelector('.df-overlay');
      expect(dialog).toHaveAttribute('data-placement', 'fill');
    });

    /**
     * What `fullScreenFrom` was for, now that it works.
     *
     * The old prop emitted its value as `data-fullscreen="md"` and the
     * stylesheet only ever matched `[data-fullscreen]` with no value — so a
     * modal told to go fullscreen below `md` went fullscreen at every width,
     * and this test passed anyway because it asserted the attribute rather
     * than the behaviour. A responsive `placement` is the same request made
     * through the mechanism every other responsive prop already uses.
     */
    it('should be fullscreen on a phone and centred above it', () => {
      currentViewportWidth = BREAKPOINTS_WIDTH.xs;
      const { container, rerender } = render(
        <DContextProvider>
          <DModal name="test" placement={{ xs: 'fill', md: 'center' }} />
        </DContextProvider>,
      );
      expect(container.querySelector('.df-overlay')).toHaveAttribute('data-placement', 'fill');

      currentViewportWidth = BREAKPOINTS_WIDTH.lg;
      rerender(
        <DContextProvider>
          <DModal name="test" placement={{ xs: 'fill', md: 'center' }} />
        </DContextProvider>,
      );
      expect(container.querySelector('.df-overlay')).toHaveAttribute('data-placement', 'center');
    });

    /* --- the unified geometry model ---------------------------------- */

    /**
     * `placement` is the whole geometry contract now.
     *
     * It replaced five attributes that said one thing between them, two of
     * which no rule ever matched (`data-centered`, `data-scrollable`) and one
     * whose value was ignored (`data-fullscreen="md"`). Splitting one question
     * across five answers is what let three of them rot unnoticed.
     */
    it('should default to a centred dialog', () => {
      const { container } = render(<DModal name="test" />);
      expect(container.firstChild).toHaveAttribute('data-placement', 'center');
    });

    it('should resolve a responsive placement from the current breakpoint', () => {
      currentViewportWidth = BREAKPOINTS_WIDTH.lg;
      const { container } = render(
        <DContextProvider>
          <DModal name="test" placement={{ xs: 'bottom', md: 'end', lg: 'top' }} />
        </DContextProvider>,
      );
      expect(container.firstChild).toHaveAttribute('data-placement', 'top');
    });

    it('should fall back to center when no breakpoint in the placement matches', () => {
      currentViewportWidth = BREAKPOINTS_WIDTH.xs;
      const { container } = render(
        <DContextProvider>
          <DModal name="test" placement={{ md: 'top', lg: 'start' }} />
        </DContextProvider>,
      );
      expect(container.firstChild).toHaveAttribute('data-placement', 'center');
    });

    /**
     * One named scale for every placement.
     *
     * A drawer could not take a named size and a modal could not take a free
     * length — an arbitrary split, and `OverlaySize` was missing `md` while the
     * token and the CSS rule for it both existed, so one of the four rungs was
     * unreachable from TypeScript.
     */
    it('should take a named size at any placement', () => {
      const { container: drawer } = render(<DModal name="a" placement="end" size="md" />);
      expect(drawer.firstChild).toHaveAttribute('data-size', 'md');

      const { container: dialog } = render(<DModal name="b" placement="center" size="md" />);
      expect(dialog.firstChild).toHaveAttribute('data-size', 'md');
    });

    it('should inject --df-overlay-size-inline from width', () => {
      const { container } = render(<DModal name="test" placement="end" width="320px" />);
      expect(container.firstChild).toHaveStyle({ '--df-overlay-size-inline': '320px' });
    });

    it('should inject --df-overlay-size-block from height', () => {
      const { container } = render(<DModal name="test" placement="top" height="50vh" />);
      expect(container.firstChild).toHaveStyle({ '--df-overlay-size-block': '50vh' });
    });

    it('should resolve a responsive width from the current breakpoint', () => {
      currentViewportWidth = BREAKPOINTS_WIDTH.md;
      const { container } = render(
        <DContextProvider>
          <DModal name="test" placement="end" width={{ xs: '100%', md: '320px' }} />
        </DContextProvider>,
      );
      expect(container.firstChild).toHaveStyle({ '--df-overlay-size-inline': '320px' });
    });

    /**
     * The case a single size slot got wrong.
     *
     * A panel that is a bottom sheet on a phone and a side drawer on a desktop
     * legitimately carries both props. With one `--df-overlay-size` the
     * component picked `width ?? height` once, so at `xs` the bottom sheet was
     * given the WIDTH as its height. Both are written now and the stylesheet
     * reads whichever matches the placement it is already applying.
     */
    it('should carry both axes when the placement is responsive', () => {
      currentViewportWidth = BREAKPOINTS_WIDTH.xs;
      const { container } = render(
        <DContextProvider>
          <DModal
            name="test"
            placement={{ xs: 'bottom', md: 'end' }}
            width="420px"
            height="60vh"
          />
        </DContextProvider>,
      );
      expect(container.firstChild).toHaveAttribute('data-placement', 'bottom');
      expect(container.firstChild).toHaveStyle({ '--df-overlay-size-block': '60vh' });
      expect(container.firstChild).toHaveStyle({ '--df-overlay-size-inline': '420px' });
    });

    it('should set neither axis when width and height are not given', () => {
      const { container } = render(<DModal name="test" placement="end" />);
      expect(container.firstChild).not.toHaveStyle({ '--df-overlay-size-inline': '420px' });
    });
  });

  describe('<DModal.Header />', () => {
    it('should render a close button and call onClose when clicked', async () => {
      const user = userEvent.setup();
      const handleClose = jest.fn();
      render(
        <DModal.Header showCloseButton onClose={handleClose}>
          Header
        </DModal.Header>,
      );

      const closeButton = screen.getByRole('button', { name: /Close/i });
      expect(closeButton).toBeInTheDocument();

      await user.click(closeButton);
      expect(handleClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('<DModal.Body />', () => {
    it('should render children correctly', () => {
      render(<DModal.Body>Modal Body Content</DModal.Body>);
      expect(screen.getByText('Modal Body Content')).toBeInTheDocument();
    });
  });

  describe('<DModal.Footer />', () => {
    it('should apply an action placement class', () => {
      const { container } = render(
        <DModal.Footer actionPlacement="end">
          Footer Content
        </DModal.Footer>,
      );

      const footer = container.querySelector('.df-overlay-footer');
      expect(footer).toHaveAttribute('data-align', 'end');
    });
  });
});

/**
 * The animation is CSS, and configurable at three scopes.
 *
 * There is deliberately no `duration` prop. A prop would mean JavaScript
 * owning a value CSS applies — the component would have to write an inline
 * style, which is exactly what removing `framer-motion` got rid of. And a
 * design system with a duration prop per component is a design system with
 * twenty ways to be inconsistent.
 *
 * What there is instead, from narrowest to widest:
 *
 *   one panel     style={{ '--df-overlay-duration-enter': '400ms' }}
 *   every panel   .my-app { --df-overlay-duration-enter: 400ms }
 *   the system    tokens/primitives/motion.json → duration.normal
 *
 * jsdom applies no stylesheet, so what is checked here is that the handle
 * reaches the element the rule is written against.
 */
describe('<DModal /> motion', () => {
  it('should let one panel override its timing', () => {
    render(
      <DModal
        name="m"
        style={{ '--df-overlay-duration-exit': '800ms' } as React.CSSProperties}
      >
        <DModal.Body>x</DModal.Body>
      </DModal>,
    );

    expect(document.querySelector('dialog'))
      .toHaveStyle({ '--df-overlay-duration-exit': '800ms' });
  });

  /* The variable has to land on the `<dialog>` itself, because that is the
     element the transition is declared on — set on a wrapper it would never
     be read. */
  it('should put the handle on the element the rule reads', () => {
    render(
      <DModal name="m" style={{ '--df-overlay-easing-exit': 'linear' } as React.CSSProperties}>
        <DModal.Body>x</DModal.Body>
      </DModal>,
    );

    const dialog = document.querySelector('dialog')!;
    expect(dialog.getAttribute('style')).toContain('--df-overlay-easing-exit');
  });
});
