import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DSkeleton from './DSkeleton';

function RowSkeleton() {
  return (
    <DSkeleton direction="horizontal" gap={8}>
      <DSkeleton.Circle size={40} />
      <DSkeleton.Block />
    </DSkeleton>
  );
}

describe('<DSkeleton />', () => {
  it('should render my component', () => {
    const { container } = render(
      <DSkeleton>
        <DSkeleton.Text lines={2} />
      </DSkeleton>,
    );
    expect(container).toMatchInlineSnapshot(`
<div>
  <div
    aria-busy="true"
    aria-live="polite"
    class="d-skeleton placeholder-glow"
    role="status"
  >
    <span
      class="visually-hidden"
    >
      Loading...
    </span>
    <div
      aria-hidden="true"
      class="d-skeleton-content"
    >
      <span
        aria-hidden="true"
        class="d-skeleton-text"
      >
        <span
          class="placeholder d-skeleton-item d-skeleton-line"
          style="width: 100%;"
        />
        <span
          class="placeholder d-skeleton-item d-skeleton-line"
          style="width: 60%;"
        />
      </span>
    </div>
  </div>
</div>
`);
  });

  it('exposes a busy status region with the default label', () => {
    render(<DSkeleton />);
    const status = screen.getByRole('status');
    expect(status).toHaveAttribute('aria-busy', 'true');
    expect(status).toHaveAttribute('aria-live', 'polite');
    expect(status).toHaveTextContent('Loading...');
  });

  it('announces a custom ariaLabel', () => {
    render(<DSkeleton ariaLabel="Cargando movimientos" />);
    expect(screen.getByRole('status')).toHaveTextContent('Cargando movimientos');
  });

  it('hides the skeleton shapes from assistive technology', () => {
    const { container } = render(
      <DSkeleton>
        <DSkeleton.Block />
      </DSkeleton>,
    );
    expect(container.querySelector('.d-skeleton-content')).toHaveAttribute('aria-hidden', 'true');
  });

  it.each([
    ['glow', '.d-skeleton.placeholder-glow'],
    ['wave', '.d-skeleton-content.placeholder-wave'],
  ] as const)('applies the %s animation', (animation, selector) => {
    const { container } = render(<DSkeleton animation={animation} />);
    expect(container.querySelector(selector)).toBeInTheDocument();
  });

  it('applies no animation class with animation="none"', () => {
    const { container } = render(<DSkeleton animation="none" />);
    expect(container.querySelector('.placeholder-glow, .placeholder-wave')).not.toBeInTheDocument();
  });

  it('sets color and gap as CSS variables', () => {
    render(<DSkeleton color="primary" gap={24} />);
    const status = screen.getByRole('status');
    expect(status.style.getPropertyValue('--bs-skeleton-bg')).toBe('var(--bs-primary)');
    expect(status.style.getPropertyValue('--bs-skeleton-gap')).toBe('24px');
  });

  it('forwards className, style and dataAttributes', () => {
    render(
      <DSkeleton
        className="custom"
        style={{ maxWidth: '20rem' }}
        dataAttributes={{ 'data-testid': 'skeleton' }}
      />,
    );
    const skeleton = screen.getByTestId('skeleton');
    expect(skeleton).toHaveClass('d-skeleton', 'custom');
    expect(skeleton).toHaveStyle({ maxWidth: '20rem' });
  });
});

describe('<DSkeleton /> as iterator', () => {
  it('renders children as-is when it does not iterate', () => {
    const { container } = render(
      <DSkeleton>
        <DSkeleton.Block />
      </DSkeleton>,
    );
    expect(container.querySelector('.d-skeleton-slot')).not.toBeInTheDocument();
  });

  it('repeats the children template once per item', () => {
    const { container } = render(
      <DSkeleton items={4}>
        <DSkeleton.Circle size={40} />
      </DSkeleton>,
    );
    expect(container.querySelectorAll('.d-skeleton-slot')).toHaveLength(4);
    expect(container.querySelectorAll('.d-skeleton-circle')).toHaveLength(4);
  });

  it('repeats an item component of its own once per item', () => {
    const { container } = render(
      <DSkeleton items={3}>
        <RowSkeleton />
      </DSkeleton>,
    );
    expect(container.querySelectorAll('.d-skeleton-slot')).toHaveLength(3);
    expect(container.querySelectorAll('.d-skeleton-circle')).toHaveLength(3);
  });

  it('calls a function child with the index', () => {
    const { container } = render(
      <DSkeleton items={3}>
        {(index) => <DSkeleton.Block width={(index + 1) * 10} />}
      </DSkeleton>,
    );
    expect(
      Array.from(container.querySelectorAll<HTMLElement>('.d-skeleton-block'))
        .map((block) => block.style.width),
    ).toEqual(['10px', '20px', '30px']);
  });

  it('renders a single item for a function child without items', () => {
    const { container } = render(
      <DSkeleton>
        {() => <DSkeleton.Block />}
      </DSkeleton>,
    );
    expect(container.querySelectorAll('.d-skeleton-slot')).toHaveLength(1);
  });

  it.each([0, -3])('renders nothing with items=%s', (items) => {
    const { container } = render(
      <DSkeleton items={items}>
        <DSkeleton.Block />
      </DSkeleton>,
    );
    expect(container.querySelector('.d-skeleton-slot')).not.toBeInTheDocument();
  });

  it('forwards itemClassName to every slot', () => {
    const { container } = render(
      <DSkeleton items={2} itemClassName="flex-grow-1">
        <DSkeleton.Block />
      </DSkeleton>,
    );
    container.querySelectorAll('.d-skeleton-slot').forEach((slot) => {
      expect(slot).toHaveClass('flex-grow-1');
    });
  });

  it.each([
    ['vertical', false],
    ['horizontal', true],
  ] as const)('lays the items out in %s', (direction, isHorizontal) => {
    const { container } = render(<DSkeleton direction={direction} items={2} />);
    const content = container.querySelector('.d-skeleton-content');
    expect(content?.classList.contains('d-skeleton-content-horizontal')).toBe(isHorizontal);
  });
});

describe('<DSkeleton /> nested', () => {
  it('keeps a single status region', () => {
    render(
      <DSkeleton items={3} ariaLabel="Loading transactions">
        <RowSkeleton />
      </DSkeleton>,
    );
    expect(screen.getAllByRole('status')).toHaveLength(1);
    expect(screen.getByRole('status')).toHaveTextContent('Loading transactions');
  });

  it('does not repeat the visually hidden label', () => {
    const { container } = render(
      <DSkeleton items={3}>
        <RowSkeleton />
      </DSkeleton>,
    );
    expect(container.querySelectorAll('.visually-hidden')).toHaveLength(1);
  });

  it('lays out the nested skeleton without the root class', () => {
    const { container } = render(
      <DSkeleton>
        <RowSkeleton />
      </DSkeleton>,
    );
    expect(container.querySelectorAll('.d-skeleton')).toHaveLength(1);
    expect(container.querySelectorAll('.d-skeleton-content-horizontal')).toHaveLength(1);
  });

  it('inherits the animation of the outermost skeleton', () => {
    const { container } = render(
      <DSkeleton animation="wave">
        <RowSkeleton />
      </DSkeleton>,
    );
    expect(container.querySelector('.placeholder-glow')).not.toBeInTheDocument();
    expect(container.querySelectorAll('.placeholder-wave')).toHaveLength(1);
  });

  it('allows the nested skeleton to set its own animation', () => {
    const { container } = render(
      <DSkeleton animation="none">
        <DSkeleton animation="wave">
          <DSkeleton.Block />
        </DSkeleton>
      </DSkeleton>,
    );
    expect(container.querySelector('.d-skeleton-content.placeholder-wave')).toBeInTheDocument();
  });

  it('applies gap and color of the nested skeleton only', () => {
    const { container } = render(
      <DSkeleton gap={32}>
        <RowSkeleton />
      </DSkeleton>,
    );
    const nested = container.querySelector<HTMLElement>('.d-skeleton-content-horizontal');
    expect(nested?.style.getPropertyValue('--bs-skeleton-gap')).toBe('8px');
    expect(screen.getByRole('status').style.getPropertyValue('--bs-skeleton-gap')).toBe('32px');
  });
});

describe('<DSkeleton.Text />', () => {
  const getLines = (container: HTMLElement) => Array.from(container.querySelectorAll<HTMLElement>('.d-skeleton-line'));

  it('renders three lines by default with a shorter last line', () => {
    const { container } = render(<DSkeleton.Text />);
    expect(getLines(container).map((line) => line.style.width)).toEqual(['100%', '100%', '60%']);
  });

  it('renders a single full-width line', () => {
    const { container } = render(<DSkeleton.Text lines={1} />);
    expect(getLines(container).map((line) => line.style.width)).toEqual(['100%']);
  });

  it('cycles widths and converts numbers to pixels', () => {
    const { container } = render(<DSkeleton.Text lines={3} widths={['80%', 120]} />);
    expect(getLines(container).map((line) => line.style.width)).toEqual(['80%', '120px', '80%']);
  });

  it('applies size and rounded classes to each line', () => {
    const { container } = render(<DSkeleton.Text lines={2} size="lg" rounded="pill" />);
    getLines(container).forEach((line) => {
      expect(line).toHaveClass('placeholder', 'placeholder-lg', 'rounded-pill');
    });
  });
});

describe('<DSkeleton.Block />', () => {
  it('renders full width and 1em high by default', () => {
    const { container } = render(<DSkeleton.Block />);
    const block = container.querySelector('.d-skeleton-block');
    expect(block).toHaveStyle({ width: '100%', height: '1em' });
    expect(block).toHaveAttribute('aria-hidden', 'true');
  });

  it.each([
    [true, 'rounded'],
    [false, 'rounded-0'],
    [3, 'rounded-3'],
    ['pill', 'rounded-pill'],
  ] as const)('maps rounded=%s to %s', (rounded, expected) => {
    const { container } = render(<DSkeleton.Block rounded={rounded} />);
    expect(container.querySelector('.d-skeleton-block')).toHaveClass(expected);
  });

  it('converts numeric dimensions to pixels', () => {
    const { container } = render(<DSkeleton.Block width={200} height={120} />);
    expect(container.querySelector('.d-skeleton-block')).toHaveStyle({ width: '200px', height: '120px' });
  });
});

describe('<DSkeleton.Circle />', () => {
  it('renders a 40px circle by default', () => {
    const { container } = render(<DSkeleton.Circle />);
    const circle = container.querySelector('.d-skeleton-circle');
    expect(circle).toHaveClass('rounded-circle');
    expect(circle).toHaveStyle({ width: '40px', height: '40px' });
  });

  it('accepts a string size', () => {
    const { container } = render(<DSkeleton.Circle size="3rem" />);
    expect(container.querySelector('.d-skeleton-circle')).toHaveStyle({ width: '3rem', height: '3rem' });
  });
});
