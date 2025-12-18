/* eslint-disable jsx-a11y/label-has-associated-control */
import { Meta, StoryObj } from '@storybook/react-vite';
import {
  DBox,
  DButton,
  DIcon,
  DInputCheck,
} from '../../src';

import './styles/custom.scss';
import DocsTemplate from './docs/Template.mdx';

const meta: Meta<typeof DBox> = {
  title: 'Patterns/Radio Button Patterns',
  component: DBox,
  parameters: {
    docs: {
      page: DocsTemplate,
      description: {
        component: 'Card-style radio buttons commonly used in industry (plans, shipping, payments). Selected items use bg-primary-50 and border-primary.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DBox>;

export const PlansSelection: Story = {
  render: () => (
    <DBox className="p-8" style={{ width: '800px' }}>
      <form>
        <fieldset>
          <legend className="fw-semibold">Choose a plan</legend>
          <div className="grid gap-3">
            <label className="radio-custom border rounded p-4 g-col-12 d-flex align-items-start gap-2">
              <DInputCheck type="radio" name="plan" ariaLabel="Basic" inputClassName="d-none" />
              <div className="form-check-label">
                <span className="fw-semibold d-flex align-items-center gap-2">
                  <DIcon icon="Home" size="1rem" color="primary" />
                  Basic
                </span>
                <small className="d-block mt-1 text-muted">Good for personal use. 10 projects.</small>
              </div>
              <span className="ms-auto fw-semibold">$9/mo</span>
            </label>

            <label className="radio-custom border rounded p-4 g-col-12 d-flex align-items-start gap-2">
              <DInputCheck type="radio" name="plan" ariaLabel="Pro" checked inputClassName="d-none" />
              <div className="form-check-label">
                <span className="fw-semibold d-flex align-items-center gap-2">
                  <DIcon icon="Zap" size="1rem" color="primary" />
                  Pro
                </span>
                <small className="d-block mt-1 text-muted">Teams and startups. Unlimited projects, priority support.</small>
              </div>
              <span className="ms-auto fw-semibold">$29/mo</span>
            </label>

            <label className="radio-custom border rounded p-4 g-col-12 d-flex align-items-start gap-2">
              <DInputCheck type="radio" name="plan" ariaLabel="Enterprise" inputClassName="d-none" />
              <div className="form-check-label">
                <span className="fw-semibold d-flex align-items-center gap-2">
                  <DIcon icon="Shield" size="1rem" color="primary" />
                  Enterprise
                </span>
                <small className="d-block mt-1 text-muted">SSO, advanced security, dedicated support.</small>
              </div>
              <span className="ms-auto fw-semibold">Contact sales</span>
            </label>
          </div>
          <div className="mt-4">
            <DButton type="submit" text="Continue" />
          </div>
        </fieldset>
      </form>
    </DBox>
  ),
};

export const ShippingMethods: Story = {
  render: () => (
    <DBox className="p-8" style={{ width: '800px' }}>
      <fieldset>
        <legend className="fw-semibold">Shipping method</legend>
        <div className="grid gap-3">
          <label className="radio-custom border rounded p-4 g-col-12 d-flex align-items-start gap-2">
            <DInputCheck type="radio" name="ship" ariaLabel="Standard" inputClassName="d-none" />
            <div className="form-check-label">
              <span className="fw-semibold d-flex align-items-center gap-2">
                <DIcon icon="Truck" size="1rem" />
                Standard
              </span>
              <small className="d-block mt-1 text-muted">3-5 business days</small>
            </div>
            <span className="ms-auto">Free</span>
          </label>
          <label className="radio-custom border rounded p-4 g-col-12 d-flex align-items-start gap-2">
            <DInputCheck type="radio" name="ship" ariaLabel="Express" checked inputClassName="d-none" />
            <div className="form-check-label">
              <span className="fw-semibold d-flex align-items-center gap-2">
                <DIcon icon="Lightning" size="1rem" className="text-primary" />
                Express
              </span>
              <small className="d-block mt-1 text-muted">1-2 business days</small>
            </div>
            <span className="ms-auto">$12.00</span>
          </label>
        </div>
      </fieldset>
    </DBox>
  ),
};

export const PaymentOptions: Story = {
  render: () => (
    <DBox className="p-8" style={{ width: '800px' }}>
      <fieldset>
        <legend className="fw-semibold">Payment</legend>
        <div className="grid gap-3">
          <label className="radio-custom border rounded p-4 g-col-12 d-flex align-items-start gap-2">
            <DInputCheck type="radio" name="pay" ariaLabel="Card" checked inputClassName="d-none" />
            <div className="form-check-label">
              <span className="fw-semibold d-flex align-items-center gap-2">
                <DIcon icon="CreditCard" size="1rem" className="text-muted" />
                Credit/Debit Card
              </span>
              <small className="d-block mt-1 text-muted">Visa, Mastercard, Amex</small>
            </div>
          </label>
          <label className="radio-custom border rounded p-4 g-col-12 d-flex align-items-start gap-2">
            <DInputCheck type="radio" name="pay" ariaLabel="Paypal" inputClassName="d-none" />
            <div className="form-check-label">
              <span className="fw-semibold d-flex align-items-center gap-2">
                <DIcon icon="Wallet" size="1rem" className="text-muted" />
                Digital Wallet
              </span>
              <small className="d-block mt-1 text-muted">Apple Pay, PayPal</small>
            </div>
          </label>
        </div>
      </fieldset>
    </DBox>
  ),
};

export const DisabledVariants: Story = {
  render: () => (
    <DBox className="p-8" style={{ width: '800px' }}>
      <fieldset>
        <legend className="fw-semibold">Disabled items examples</legend>
        <div className="grid gap-3">
          <label className="radio-custom border rounded p-4 g-col-12 d-flex align-items-start gap-2 cursor-pointer">
            <DInputCheck type="radio" name="disabledPlan" ariaLabel="Basic" inputClassName="d-none" disabled />
            <div className="form-check-label">
              <span className="fw-semibold d-flex align-items-center gap-2">
                <DIcon icon="Star" size="1rem" color="primary" />
                Basic (Disabled)
              </span>
              <small className="d-block mt-1 text-muted">Good for personal use. 10 projects.</small>
            </div>
            <span className="ms-auto fw-semibold">$9/mo</span>
          </label>

          <label className="radio-custom border rounded p-4 g-col-12 d-flex align-items-start gap-2 cursor-pointer">
            <DInputCheck type="radio" name="disabledPlan" ariaLabel="Pro" inputClassName="d-none" />
            <div className="form-check-label">
              <span className="fw-semibold d-flex align-items-center gap-2">
                <DIcon icon="Zap" size="1rem" className="text-primary" />
                Pro
              </span>
              <small className="d-block mt-1 text-muted">Teams and startups. Unlimited projects.</small>
            </div>
            <span className="ms-auto fw-semibold">$29/mo</span>
          </label>

          <label className="radio-custom border rounded p-4 g-col-12 d-flex align-items-start gap-2 cursor-pointer">
            <DInputCheck type="radio" name="disabledPlan" ariaLabel="Enterprise" inputClassName="d-none" disabled />
            <div className="form-check-label">
              <span className="fw-semibold d-flex align-items-center gap-2">
                <DIcon icon="Shield" size="1rem" className="text-muted" />
                Enterprise (Disabled)
              </span>
              <small className="d-block mt-1 text-muted">SSO, advanced security, dedicated support.</small>
            </div>
            <span className="ms-auto fw-semibold">Contact sales</span>
          </label>
        </div>

        <hr className="my-4" />

        <div className="grid gap-3">
          <label className="radio-custom border rounded p-4 g-col-12 d-flex align-items-start gap-2 cursor-pointer">
            <DInputCheck type="radio" name="disabledShip" ariaLabel="Standard" inputClassName="d-none" disabled />
            <div className="form-check-label">
              <span className="fw-semibold d-flex align-items-center gap-2">
                <DIcon icon="Truck" size="1rem" className="text-muted" />
                Standard (Disabled)
              </span>
              <small className="d-block mt-1 text-muted">3-5 business days</small>
            </div>
            <span className="ms-auto">Free</span>
          </label>
          <label className="radio-custom border rounded p-4 g-col-12 d-flex align-items-start gap-2 cursor-pointer">
            <DInputCheck type="radio" name="disabledShip" ariaLabel="Express" inputClassName="d-none" />
            <div className="form-check-label">
              <span className="fw-semibold d-flex align-items-center gap-2">
                <DIcon icon="Lightning" size="1rem" className="text-primary" />
                Express
              </span>
              <small className="d-block mt-1 text-muted">1-2 business days</small>
            </div>
            <span className="ms-auto">$12.00</span>
          </label>
        </div>

        <hr className="my-4" />

        <div className="grid gap-3">
          <label className="radio-custom border rounded p-4 g-col-12 d-flex align-items-start gap-2 cursor-pointer">
            <DInputCheck type="radio" name="disabledPay" ariaLabel="Card" inputClassName="d-none" />
            <div className="form-check-label">
              <span className="fw-semibold d-flex align-items-center gap-2">
                <DIcon icon="CreditCard" size="1rem" className="text-muted" />
                Credit/Debit Card
              </span>
              <small className="d-block mt-1 text-muted">Visa, Mastercard, Amex</small>
            </div>
          </label>
          <label className="radio-custom border rounded p-4 g-col-12 d-flex align-items-start gap-2 cursor-pointer">
            <DInputCheck type="radio" name="disabledPay" ariaLabel="Paypal" inputClassName="d-none" disabled />
            <div className="form-check-label">
              <span className="fw-semibold d-flex align-items-center gap-2">
                <DIcon icon="Wallet" size="1rem" className="text-muted" />
                Digital Wallet (Disabled)
              </span>
              <small className="d-block mt-1 text-muted">Apple Pay, PayPal</small>
            </div>
          </label>
        </div>
      </fieldset>
    </DBox>
  ),
};
