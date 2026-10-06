/// <reference types="@testing-library/jest-dom" />

import { render, screen } from '@testing-library/react';

import DToast from './DToast';

/**
 * The toast's own markup, which is now ONLY markup.
 *
 * It used to carry `role="alert" aria-live="assertive" aria-atomic="true"`,
 * and these tests asserted all three. They were wrong, in a way that passed:
 * a live region inserted at the same moment as its content is frequently not
 * announced at all, because the technology has to be watching the element
 * before the change happens. The announcement came and went depending on
 * timing — it worked in a test and not on a page.
 *
 * `DToastRegion` owns the announcement now: one region per corner, rendered
 * for the container's lifetime and empty until something arrives. So what is
 * left here is a box.
 */
describe('<DToast />', () => {
  const toast = () => document.querySelector('.df-toast');

  it('should render its children', () => {
    render(<DToast>Mensaje de prueba</DToast>);
    expect(screen.getByText('Mensaje de prueba')).toBeInTheDocument();
  });

  it('should carry the base class', () => {
    render(<DToast>Contenido</DToast>);
    expect(toast()).toHaveClass('df-toast');
  });

  it('should keep a custom class alongside it', () => {
    render(<DToast className="extra-clase">Contenido</DToast>);
    expect(toast()).toHaveClass('df-toast', 'extra-clase');
  });

  it('should apply custom styles', () => {
    render(<DToast style={{ backgroundColor: 'red' }}>Contenido</DToast>);
    expect(toast()).toHaveStyle('background-color: rgb(255, 0, 0)');
  });

  it('should pass data attributes through', () => {
    render(<DToast dataAttributes={{ 'data-testid': 'mi-toast' }}>Contenido</DToast>);
    expect(screen.getByTestId('mi-toast')).toBeInTheDocument();
  });

  /*
   * The announcement belongs to the region, so this element must not claim it.
   * A `DToast` placed in a page by hand is then not announced — correctly:
   * static markup is not an event.
   */
  it('should not be a live region of its own', () => {
    render(<DToast>Contenido</DToast>);

    expect(toast()).not.toHaveAttribute('aria-live');
    expect(toast()).not.toHaveAttribute('role');
    expect(toast()).not.toHaveAttribute('aria-atomic');
  });
});
