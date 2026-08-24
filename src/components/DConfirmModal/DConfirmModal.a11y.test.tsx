/// <reference types="@testing-library/jest-dom" />

import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DConfirmModalUI from './DConfirmModalUI';
import type { ConfirmModalEntry } from './confirmModalStore';

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

const buildEntry = (overrides: Partial<ConfirmModalEntry> = {}): ConfirmModalEntry => ({
  id: 'confirm-modal',
  onConfirm: jest.fn(),
  onConfirmAction: jest.fn().mockResolvedValue(undefined),
  onCloseAction: jest.fn(),
  ...overrides,
});

describe('<DConfirmModalUI /> a11y', () => {
  it('should have no violations with default title and message', async () => {
    const { container } = render(
      <DConfirmModalUI entry={buildEntry()} />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with custom title, message, and colors', async () => {
    const { container } = render(
      <DConfirmModalUI
        entry={buildEntry({
          title: 'Delete item',
          message: 'This action cannot be undone.',
          confirmLabel: 'Delete',
          cancelLabel: 'Keep',
          confirmColor: 'danger',
        })}
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations in critical (confirmation code) mode', async () => {
    const { container } = render(
      <DConfirmModalUI
        entry={buildEntry({
          title: 'Critical action',
          message: 'Type the code to confirm.',
          critical: {
            code: '1234',
            codeLabel: 'Confirmation code',
            inputPlaceholder: 'Enter code',
          },
        })}
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
