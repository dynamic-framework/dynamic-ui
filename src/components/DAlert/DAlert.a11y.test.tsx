import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DAlert from './DAlert';

describe('<DAlert /> a11y', () => {
  it('has no violations with default color and icon', async () => {
    const { container } = render(<DAlert>Success message</DAlert>);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no violations with showClose', async () => {
    const { container } = render(
      <DAlert
        color="danger"
        showClose
        onClose={() => {}}
      >
        Alert content
      </DAlert>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no violations with material icons style enabled', async () => {
    const { container } = render(
      <DAlert
        showClose
        iconCloseMaterialStyle
        iconCloseFamilyPrefix=""
        iconCloseFamilyClass="material-symbols-outlined"
        iconClose="x"
        iconMaterialStyle
        iconFamilyPrefix=""
        iconFamilyClass="material-symbols-outlined"
        icon="heart"
      >
        Alert content
      </DAlert>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
