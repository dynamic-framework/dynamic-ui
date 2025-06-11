/// <reference types="@testing-library/jest-dom" />

import { render, screen } from '@testing-library/react';
import DIcon from './DIcon';

describe('<DIcon />', () => {
  it('should render my component', () => {
    const icon = { icon: 'heart' };

    const { container } = render(
      <DIcon {...icon} />,
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <i
          class="d-icon bi bi-heart"
          style="--bs-icon-component-loading-duration: 1.8s; --bs-icon-component-padding: 0;"
        />
      </div>
    `);
  });

  it('should use values from context when props are not provided', () => {
    render(
      <DIcon
        icon="home"
        dataAttributes={{ 'data-testid': 'icon' }}
      />,
    );

    const icon = screen.getByTestId('icon');
    expect(icon).toHaveClass('d-icon', 'bi', 'bi-home');
  });

  it('should override context values with props', () => {
    const { container } = render(
      <DIcon
        icon="settings"
        familyClass="custom-family-class"
        familyPrefix="cfc-"
        materialStyle={false}
      />,
    );
    const icon = container.querySelector('.d-icon');
    expect(icon).toHaveClass('custom-family-class', 'cfc-settings');
  });

  it('should override context values with props and use material style', () => {
    const { container } = render(
      <DIcon
        icon="settings"
        familyClass="custom-family-class"
        familyPrefix=""
        materialStyle
      />,
    );
    const icon = container.querySelector('.d-icon');
    expect(icon).toHaveClass('custom-family-class');
    expect(icon).toHaveTextContent('settings');
  });
});
