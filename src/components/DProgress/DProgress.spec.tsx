import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DProgress from './DProgress';

describe('<DProgress />', () => {
  it('should render my component', () => {
    const progress = { currentValue: 33 };
    const { container } = render(
      <DProgress {...progress} />,
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="progress"
        >
          <div
            aria-label="Progress bar"
            aria-valuemax="100"
            aria-valuemin="0"
            aria-valuenow="33"
            class="progress-bar"
            role="progressbar"
            style="width: 33%;"
          >
            33%
          </div>
        </div>
      </div>
    `);
  });

  it('renders with default minValue and maxValue (0 to 100)', () => {
    render(
      <DProgress currentValue={50} />,
    );
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuemin', '0');
    expect(progressBar).toHaveAttribute('aria-valuemax', '100');
    expect(progressBar).toHaveAttribute('aria-valuenow', '50');
    expect(progressBar).toHaveStyle('width: 50%');
    expect(progressBar).toHaveTextContent('50%');
  });

  it('renders with custom minValue and maxValue', () => {
    render(
      <DProgress
        currentValue={25}
        minValue={0}
        maxValue={50}
      />,
    );
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuemin', '0');
    expect(progressBar).toHaveAttribute('aria-valuemax', '50');
    expect(progressBar).toHaveAttribute('aria-valuenow', '25');
    expect(progressBar).toHaveStyle('width: 50%');
    expect(progressBar).toHaveTextContent('50%');
  });

  it('hides current value text when hideCurrentValue is true', () => {
    render(<DProgress currentValue={80} hideCurrentValue />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).not.toHaveTextContent('80%');
  });

  it('adds striped animation classes when enabled', () => {
    render(
      <DProgress
        currentValue={30}
        enableStripedAnimation
      />,
    );
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveClass('progress-bar-striped');
    expect(progressBar).toHaveClass('progress-bar-animated');
  });

  it('supports custom className on outer container', () => {
    render(
      <DProgress
        currentValue={10}
        className="my-progress"
      />,
    );
    expect(screen.getByRole('progressbar').parentElement).toHaveClass('progress', 'my-progress');
  });

  it('applies custom inline styles to outer container', () => {
    render(
      <DProgress
        currentValue={40}
        style={{ backgroundColor: 'blue' }}
      />,
    );
    const progressBar = screen.getByRole('progressbar');
    const progressContainer = progressBar.parentElement;

    expect(progressContainer).toHaveStyle('background-color: blue');
    expect(progressBar).toHaveStyle('width: 40%');
  });

  it('renders with data attributes when provided', () => {
    render(<DProgress currentValue={60} dataAttributes={{ 'data-testid': 'progress-container' }} />);
    const progressContainer = screen.getByTestId('progress-container');
    const progressBar = progressContainer.querySelector('[role="progressbar"]');

    expect(progressContainer).toBeInTheDocument();
    expect(progressBar).toBeInTheDocument();
  });
});
