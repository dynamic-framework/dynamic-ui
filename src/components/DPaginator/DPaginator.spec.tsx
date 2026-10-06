/// <reference types="@testing-library/jest-dom" />

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DPaginator from '.';

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
    it('should carry the size as an attribute', () => {
      const { container } = render(<DPaginator total={5} size="sm" />);
      expect(container.querySelector('.df-pagination')).toHaveAttribute('data-size', 'sm');
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
      expect(prev.querySelector('.df-icon[data-color="success"]')).toBeInTheDocument();
      expect(next.querySelector('.df-icon[data-color="danger"]')).toBeInTheDocument();
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
 * written against is actually on the element. `css:flow` checks the other
 * half — that a rule decides it.
 */
describe('<DPaginator /> flow margins', () => {
  it('should put the reset hook on every item', () => {
    render(<DPaginator total={20} current={3} onPageChange={() => {}} />);

    const items = document.querySelectorAll('.df-pagination > li');
    expect(items.length).toBeGreaterThan(3);
    items.forEach((item) => expect(item).toHaveClass('df-pagination-item'));
  });
});
