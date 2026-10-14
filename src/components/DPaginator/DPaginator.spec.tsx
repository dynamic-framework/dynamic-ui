/// <reference types="@testing-library/jest-dom" />

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DPaginator from '.';
import DIcon from '../DIcon';

/**
 * The page numbers on screen, in order, gaps included.
 *
 * Queried from the DOM and not by role: the gaps are `aria-hidden`, so
 * `getAllByRole('listitem')` correctly does not return them — which is the
 * behaviour a separate test asserts, and exactly the wrong tool for reading
 * back what is rendered.
 */
function visible() {
  const nav = screen.getByRole('navigation');
  return [...nav.querySelectorAll('li')].map((item) => item.textContent ?? '');
}

describe('<DPaginator />', () => {
  describe('Structure and accessibility', () => {
    it('should render a named landmark, because a page often has two', () => {
      render(<DPaginator total={5} />);
      expect(screen.getByRole('navigation', { name: 'Pagination' })).toBeInTheDocument();
    });

    it('should mark the current page with aria-current rather than a class', () => {
      render(<DPaginator total={5} current={3} />);

      const current = screen.getByRole('button', { name: 'Page 3' });
      expect(current).toHaveAttribute('aria-current', 'page');
      expect(screen.getByRole('button', { name: 'Go to page 2' })).not.toHaveAttribute('aria-current');
    });

    /**
     * "Go to page 4" and not "4": a screen reader reading a row of bare digits
     * gives no clue what pressing one does.
     */
    it('should label every page button with what pressing it does', () => {
      render(<DPaginator total={3} current={1} />);
      expect(screen.getByRole('button', { name: 'Go to page 2' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Page 1' })).toBeInTheDocument();
    });

    it('should hide the gap from assistive technology', () => {
      const { container } = render(<DPaginator total={50} current={25} />);
      const gap = container.querySelector('[data-ellipsis]');

      expect(gap).toHaveAttribute('aria-hidden', 'true');
      expect(gap).toHaveTextContent('…');
    });

    /** A control for one page controls nothing. */
    it('should render nothing when there is only one page', () => {
      const { container } = render(<DPaginator total={1} />);
      expect(container).toBeEmptyDOMElement();
    });
  });

  describe('Paging', () => {
    it('should report the page that was pressed', async () => {
      const user = userEvent.setup();
      const onPageChange = jest.fn();
      render(<DPaginator total={10} current={1} onPageChange={onPageChange} />);

      await user.click(screen.getByRole('button', { name: 'Go to page 3' }));
      expect(onPageChange).toHaveBeenCalledWith(3);
    });

    it('should step with the arrows', async () => {
      const user = userEvent.setup();
      const onPageChange = jest.fn();
      render(<DPaginator total={10} current={5} onPageChange={onPageChange} />);

      await user.click(screen.getByRole('button', { name: 'Next page' }));
      expect(onPageChange).toHaveBeenCalledWith(6);

      await user.click(screen.getByRole('button', { name: 'Previous page' }));
      expect(onPageChange).toHaveBeenCalledWith(4);
    });

    it('should disable the arrow that has nowhere to go', () => {
      const { rerender } = render(<DPaginator total={10} current={1} />);
      expect(screen.getByRole('button', { name: 'Previous page' })).toBeDisabled();
      expect(screen.getByRole('button', { name: 'Next page' })).toBeEnabled();

      rerender(<DPaginator total={10} current={10} />);
      expect(screen.getByRole('button', { name: 'Previous page' })).toBeEnabled();
      expect(screen.getByRole('button', { name: 'Next page' })).toBeDisabled();
    });

    it('should not report a change for the page already shown', async () => {
      const user = userEvent.setup();
      const onPageChange = jest.fn();
      render(<DPaginator total={10} current={4} onPageChange={onPageChange} />);

      await user.click(screen.getByRole('button', { name: 'Page 4' }));
      expect(onPageChange).not.toHaveBeenCalled();
    });

    it('should clamp a current page outside the list', () => {
      render(<DPaginator total={5} current={99} />);
      expect(screen.getByRole('button', { name: 'Page 5' })).toHaveAttribute('aria-current', 'page');
    });

    it('should render no arrows when asked not to', () => {
      render(<DPaginator total={10} arrows={false} />);
      expect(screen.queryByRole('button', { name: 'Next page' })).not.toBeInTheDocument();
    });
  });

  describe('Windowing', () => {
    it('should show every page for a short list', () => {
      render(<DPaginator total={5} current={1} arrows={false} />);
      expect(visible()).toEqual(['1', '2', '3', '4', '5']);
    });

    it('should pin the ends and gap the middle for a long one', () => {
      render(<DPaginator total={20} current={10} arrows={false} />);
      expect(visible()).toEqual(['1', '…', '9', '10', '11', '…', '20']);
    });

    it('should take siblings to widen or narrow the window', () => {
      const { rerender } = render(
        <DPaginator total={20} current={10} siblings={0} arrows={false} />,
      );
      expect(visible()).toEqual(['1', '…', '10', '…', '20']);

      rerender(<DPaginator total={20} current={10} siblings={2} arrows={false} />);
      expect(visible()).toEqual(['1', '…', '8', '9', '10', '11', '12', '…', '20']);
    });

    it('should take boundaries to pin more pages at each end', () => {
      render(<DPaginator total={40} current={20} boundaries={2} arrows={false} />);
      expect(visible()).toEqual(['1', '2', '…', '19', '20', '21', '…', '39', '40']);
    });

    /**
     * `matchMedia` is stubbed to match nothing in this environment, so no tier
     * resolves and the fallback applies. What is being asserted is that an
     * object is ACCEPTED where a number is — the tier arithmetic itself belongs
     * to `useResponsiveProp` and is tested there.
     */
    it('should accept a responsive siblings object', () => {
      render(<DPaginator total={20} current={10} siblings={{ xs: 0, md: 2 }} arrows={false} />);
      expect(screen.getByRole('button', { name: 'Page 10' })).toBeInTheDocument();
    });
  });

  describe('Links', () => {
    /**
     * A paginator over real URLs should be links: a link opens in a new tab,
     * is followed by a crawler, and works with JavaScript off. None of that is
     * true of a button.
     */
    it('should render anchors when given an href builder', () => {
      render(<DPaginator total={5} current={1} pageHref={(page) => `/results?page=${page}`} />);

      const link = screen.getByRole('link', { name: 'Go to page 2' });
      expect(link).toHaveAttribute('href', '/results?page=2');
    });

    it('should page in place on a plain click rather than following the link', async () => {
      const user = userEvent.setup();
      const onPageChange = jest.fn();
      render(
        <DPaginator
          total={5}
          current={1}
          pageHref={(page) => `/results?page=${page}`}
          onPageChange={onPageChange}
        />,
      );

      await user.click(screen.getByRole('link', { name: 'Go to page 2' }));
      expect(onPageChange).toHaveBeenCalledWith(2);
    });

    /** A modified click is the browser's: open in a tab, a window, download. */
    it('should leave a modified click alone', async () => {
      const user = userEvent.setup();
      const onPageChange = jest.fn();
      render(
        <DPaginator
          total={5}
          current={1}
          pageHref={(page) => `/p/${page}`}
          onPageChange={onPageChange}
        />,
      );

      await user.keyboard('{Meta>}');
      await user.click(screen.getByRole('link', { name: 'Go to page 2' }));
      await user.keyboard('{/Meta}');
      expect(onPageChange).not.toHaveBeenCalled();
    });
  });

  describe('Appearance', () => {
    /*
     * `pagination-sm` rather than a `data-size`: those are the hooks
     * `base/_pagination.scss` already reads, and Bootstrap's own pagination
     * uses them too.
     */
    it('should carry the size as a Bootstrap modifier class', () => {
      const { container } = render(<DPaginator total={5} size="sm" />);
      expect(container.querySelector('.pagination')).toHaveClass('pagination-sm');
    });

    it('should mark the arrows so the stylesheet can size them differently', () => {
      const { container } = render(<DPaginator total={5} />);
      expect(container.querySelectorAll('[data-nav]')).toHaveLength(2);
    });

    it('should take custom arrow icons', () => {
      const { container } = render(
        <DPaginator
          total={5}
          iconArrowLeft={{ icon: 'ArrowLeft', color: 'success' }}
          iconArrowRight={{ icon: 'ArrowRight', color: 'danger' }}
        />,
      );

      const [prev, next] = [...container.querySelectorAll('[data-nav]')];
      expect(prev.querySelector('.d-icon.d-icon-color-success')).toBeInTheDocument();
      expect(next.querySelector('.d-icon.d-icon-color-danger')).toBeInTheDocument();
    });
  });

  describe('i18n', () => {
    it('should take overrides for every label it renders', () => {
      render(
        <DPaginator
          total={5}
          current={2}
          i18n={{
            label: 'Paginación',
            previous: 'Anterior',
            next: 'Siguiente',
            goToPage: 'Ir a la página',
            currentPage: 'Página',
          }}
        />,
      );

      expect(screen.getByRole('navigation', { name: 'Paginación' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Anterior' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Ir a la página 3' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Página 2' })).toBeInTheDocument();
    });
  });
});

/**
 * The item carries no document flow margin.
 *
 * `base/typography.css` gives every `li + li` a `margin-block-start`, which is
 * right for a CMS body and wrong for a control that lays itself out with
 * `gap`. The containers all reset their own margins and not one reset the
 * ITEM, so every adjacent page button carried a stray block margin on top of
 * the gap — in a horizontal flex, a margin that answers to nothing.
 *
 * Asserted on the class rather than on a computed style: jsdom applies no
 * stylesheet, so what can be checked here is that the hook the reset is
 * written against is actually on the element.
 */
describe('<DPaginator /> markup contract', () => {
  /**
   * Bootstrap's class names, on purpose.
   *
   * The `react-responsive-pagination` wrapper emitted `.pagination`,
   * `.page-item` and `.page-link`, and both this library's
   * `base/_pagination.scss` and whatever a consumer wrote are keyed off them.
   * Changing the engine must not change the hooks they style against.
   */
  it('should put the Bootstrap hooks on every item', () => {
    render(<DPaginator total={20} current={3} onPageChange={() => {}} />);

    const items = document.querySelectorAll('.pagination > li');
    expect(items.length).toBeGreaterThan(3);
    items.forEach((item) => expect(item).toHaveClass('page-item'));
    document.querySelectorAll('.pagination > li > *').forEach((link) => {
      expect(link).toHaveClass('page-link');
    });
  });

  it('should mark the current page with .active as well as aria-current', () => {
    render(<DPaginator total={9} current={4} onPageChange={() => {}} />);

    const current = document.querySelector('.page-item.active');
    expect(current).toBeInTheDocument();
    expect(current?.querySelector('[aria-current="page"]')).toHaveTextContent('4');
  });

  it('should mark a spent arrow with .disabled as well as the attribute', () => {
    render(<DPaginator total={9} current={1} onPageChange={() => {}} />);

    const prev = document.querySelector('[data-nav]');
    expect(prev).toHaveClass('page-item-arrow', 'disabled');
    expect(prev?.querySelector('button')).toBeDisabled();
  });
});

/**
 * `prevContent` / `nextContent`: an arrow that is not an icon.
 *
 * The default arrow is a `DIcon` — `aria-hidden`, sized from the icon scale,
 * named by `i18n`. None of that suits a word, so text pushed through
 * `iconArrowLeft` came out unreadable to a screen reader and with an accessible
 * name that disagreed with what was on screen.
 */
describe('<DPaginator /> arrow content', () => {
  const prev = () => document.querySelector('[data-direction="prev"]') as HTMLElement;

  it('renders the content directly, with no icon wrapper', () => {
    render(<DPaginator total={5} current={3} prevContent="Anterior" />);

    expect(prev()).toHaveTextContent('Anterior');
    expect(prev().querySelector('.d-icon')).not.toBeInTheDocument();
  });

  /**
   * The contract. An `aria-label` overrides visible text, so a button labelled
   * "Previous page" while reading "Anterior" fails WCAG 2.5.3 — the accessible
   * name has to contain the visible one. With content, the content is the name.
   */
  it('drops the aria-label so the content becomes the accessible name', () => {
    render(<DPaginator total={5} current={3} prevContent="Anterior" />);

    expect(prev()).not.toHaveAttribute('aria-label');
    expect(screen.getByRole('button', { name: 'Anterior' })).toBe(prev());
  });

  it('keeps the label when there is no content, because an icon cannot be the name', () => {
    render(<DPaginator total={5} current={3} />);

    expect(prev()).toHaveAttribute('aria-label', 'Previous page');
    expect(prev().querySelector('.d-icon')).toBeInTheDocument();
  });

  /** Text beside a glyph: the glyph stays hidden, the word is the name. */
  it('supports an icon and a word together', () => {
    render(
      <DPaginator
        total={5}
        current={3}
        prevContent={(
          <>
            <DIcon icon="ArrowLeft" />
            <span>Anterior</span>
          </>
        )}
      />,
    );

    expect(prev().querySelector('.d-icon')).toHaveAttribute('aria-hidden', 'true');
    expect(screen.getByRole('button', { name: 'Anterior' })).toBe(prev());
  });

  /** A visually hidden word names an arrow whose content is only a glyph. */
  it('can be named by visually hidden text', () => {
    render(
      <DPaginator
        total={5}
        current={3}
        prevContent={(
          <>
            <DIcon icon="ArrowLeft" />
            <span className="visually-hidden">Anterior</span>
          </>
        )}
      />,
    );

    expect(screen.getByRole('button', { name: 'Anterior' })).toBe(prev());
  });

  it('still disables the arrow at the end of the run', () => {
    render(<DPaginator total={5} current={1} prevContent="Anterior" />);

    expect(prev()).toBeDisabled();
    expect(prev().closest('li')).toHaveClass('disabled');
  });

  it('ignores the icon override when content is given', () => {
    render(
      <DPaginator total={5} current={3} prevContent="Anterior" iconArrowLeft={{ icon: 'ArrowLeft' }} />,
    );

    expect(prev().querySelector('.d-icon')).not.toBeInTheDocument();
  });
});
