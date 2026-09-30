/* eslint-disable jsx-a11y/label-has-associated-control */
import { Meta, StoryObj } from '@storybook/react-vite';

import {
  DBox,
  DButton,
  DIcon,
  DInput,
  DInputCheck,
  DInputPassword,
  DInputSwitch,
  DSelect,
} from '../../src';
import './styles/custom.scss';

import DocsTemplate from './docs/Template.mdx';

const meta: Meta<typeof DBox> = {
  title: 'Patterns/Form',
  component: DBox,
  parameters: {
    docs: {
      page: DocsTemplate,
      description: {
        component: 'Examples of form patterns using `DBox` and Bootstrap grid classes.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DBox>;

export const OneColumn: Story = {
  render: () => (
    <DBox className="df-p-8" style={{ width: '800px' }}>
      <form>
        <fieldset>
          <legend className="df-fw-semibold">Personal Information</legend>
          <DInput className="df-mb-4" id="name" label="Full Name" placeholder="Enter your full name" />
          <DInput className="df-mb-4" id="email" type="email" label="Email" placeholder="Enter your email" />
          <DSelect
            className="df-mb-4"
            id="country"
            label="Country"
            options={[
              { label: 'Select a country', value: '' },
              { label: 'United States', value: 'us' },
              { label: 'Canada', value: 'ca' },
              { label: 'Mexico', value: 'mx' },
            ]}
          />
          <DInputSwitch className="df-mb-2" id="newsletter" label="Subscribe to newsletter" />
          <DInputCheck className="df-mb-4" id="terms" type="checkbox" label="I agree to the terms and conditions" />
          <DButton type="submit" text="Submit" />
        </fieldset>
      </form>
    </DBox>
  ),
};

export const horizontalForm: Story = {
  render: () => (
    <DBox className="df-p-8" style={{ width: '800px' }}>
      <form>
        <fieldset>
          <legend className="df-fw-semibold">Personal Information</legend>
          <div className="df-grid df-grid-cols-12 df-gap-3 df-mb-4">
            <label htmlFor="inputEmail3" className="df-sm:col-span-2 df-label">Email</label>
            <div className="df-sm:col-span-10">
              <DInput type="email" id="inputEmail3" />
            </div>
          </div>
          <div className="df-grid df-grid-cols-12 df-gap-3 df-mb-4">
            <label htmlFor="inputPassword3" className="df-sm:col-span-2 df-label">Password</label>
            <div className="df-sm:col-span-10">
              <DInputPassword />
            </div>
          </div>
          <hr />
          <div className="df-grid df-grid-cols-12 df-gap-3 df-mb-4">
            <label htmlFor="address" className="df-sm:col-span-2 df-label">Address</label>
            <div className="df-sm:col-span-10">
              <DInput id="address" />
            </div>
          </div>
          <div className="df-grid df-grid-cols-12 df-gap-3 df-mb-4">
            <label htmlFor="address" className="df-sm:col-span-2 df-label">Phone</label>
            <div className="df-sm:col-span-10">
              <DInput id="phone" />
            </div>
          </div>
          <DButton type="submit" text="Sign in" />
        </fieldset>
      </form>
    </DBox>
  ),
};

export const TwoColumns: Story = {
  render: () => (
    <DBox className="df-p-8" style={{ width: '800px' }}>
      <form>
        <fieldset>
          <legend className="df-fw-semibold">Personal Information</legend>
          <div className="df-grid df-grid-cols-12 df-gap-3">
            <div className="df-col-span-6">
              <DInput id="firstName" label="First Name" placeholder="Enter your first name" />
            </div>
            <div className="df-col-span-6">
              <DInput id="lastName" label="Last Name" placeholder="Enter your last name" />
            </div>
            <div className="df-col-span-6">
              <DInput id="email2" type="email" label="Email" placeholder="Enter your email" />
            </div>
            <div className="df-col-span-6">
              <DInput id="phone" type="tel" label="Phone" placeholder="Enter your phone number" />
            </div>
            <div className="df-col-span-6">
              <DSelect
                id="country2"
                label="Country"
                options={[
                  { label: 'Select a country', value: '' },
                  { label: 'United States', value: 'us' },
                  { label: 'Canada', value: 'ca' },
                  { label: 'Mexico', value: 'mx' },
                ]}
              />
            </div>
            <div className="df-col-span-6">
              <label className="df-label" htmlFor="gender">Gender</label>
              <div className="df-flex df-gap-2">
                <DInputCheck id="genderMale" type="radio" name="gender" label="Male" />
                <DInputCheck id="genderFemale" type="radio" name="gender" label="Female" />
                <DInputCheck id="genderOther" type="radio" name="gender" label="Other" />
              </div>
            </div>
            <div className="df-col-span-12">
              <DInputSwitch id="notifications" label="Enable notifications" />
              <DInputCheck id="terms2" type="checkbox" label="I agree to the terms and conditions" />
            </div>
            <div className="df-col-span-12">
              <DButton type="submit" className="df-me-2" text="Submit" />
              <DButton type="reset" variant="outline" text="Reset" />
            </div>
          </div>
        </fieldset>
      </form>
    </DBox>
  ),
};

export const FieldsetForm: Story = {
  render: () => (
    <DBox className="df-p-8" style={{ width: '800px' }}>
      <form>
        <fieldset className="df-border-1 df-p-4 df-rounded-control df-mb-8">
          <legend className="df-float-none df-w-auto df-px-2">Personal Information</legend>
          <div className="df-grid df-grid-cols-12 df-gap-3">
            <div className="df-col-span-12 df-lg:col-span-6">
              <DInput id="fsFirstName" label="First Name" placeholder="John" />
            </div>
            <div className="df-col-span-12 df-lg:col-span-6">
              <DInput id="fsLastName" label="Last Name" placeholder="Doe" />
            </div>
            <div className="df-col-span-12">
              <DInput id="fsEmail" type="email" label="Email" placeholder="john.doe@example.com" />
            </div>
            <div className="df-col-span-12 df-lg:col-span-6">
              <DInput id="fsPhone" type="tel" label="Phone Number" placeholder="(123) 456-7890" />
            </div>
            <div className="df-col-span-12 df-lg:col-span-6">
              <DInput id="fsDateOfBirth" type="date" label="Date of Birth" />
            </div>
          </div>
        </fieldset>

        <fieldset className="df-col-span-full df-border-1 df-p-4 df-rounded-control df-mb-4">
          <legend className="df-float-none df-w-auto df-px-2">Address Information</legend>
          <div className="df-grid df-grid-cols-1 df-gap-3">
            <DInput id="fsAddress1" label="Address Line 1" placeholder="123 Main St" />
            <DInput id="fsAddress2" label="Address Line 2" placeholder="Apartment, suite, unit, etc. (Optional)" />
            <DInput id="fsCity" label="City" placeholder="Anytown" />
            <DInput id="fsState" label="State/Province" placeholder="State" />
            <DInput id="fsZip" label="Zip/Postal Code" placeholder="12345" />
            <DSelect
              id="fsCountry"
              label="Country"
              options={[
                { label: 'Select a country', value: '' },
                { label: 'United States', value: 'us' },
                { label: 'Canada', value: 'ca' },
                { label: 'Mexico', value: 'mx' },
              ]}
            />
          </div>
        </fieldset>

        <div className="df-col-span-12 df-mt-8">
          <DButton type="submit" text="Save Information" className="df-me-2" />
          <DButton type="reset" variant="outline" text="Clear Form" />
        </div>
      </form>
    </DBox>
  ),
};

export const FieldsetForm2: Story = {
  render: () => (
    <DBox className="df-p-8" style={{ width: '800px' }}>
      <form>
        <fieldset className="df-mb-8">
          <legend className="df-flex df-fw-semibold">
            <DIcon icon="User" size="1rem" className="df-me-2 df-text-muted" />
            Personal Information
          </legend>
          <div className="df-grid df-grid-cols-12 df-gap-3">
            <div className="df-col-span-12 df-lg:col-span-6">
              <DInput id="fsFirstName" label="First Name" placeholder="John" />
            </div>
            <div className="df-col-span-12 df-lg:col-span-6">
              <DInput id="fsLastName" label="Last Name" placeholder="Doe" />
            </div>
            <div className="df-col-span-12">
              <DInput id="fsEmail" type="email" label="Email" placeholder="john.doe@example.com" />
            </div>
            <div className="df-col-span-12 df-lg:col-span-6">
              <DInput id="fsPhone" type="tel" label="Phone Number" placeholder="(123) 456-7890" />
            </div>
            <div className="df-col-span-12 df-lg:col-span-6">
              <DInput id="fsDateOfBirth" type="date" label="Date of Birth" />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend className="df-flex df-fw-semibold">
            <DIcon icon="Map" size="1rem" className="df-me-2 df-text-muted" />
            Address Information
          </legend>
          <div className="df-grid df-grid-cols-1 df-gap-3">
            <DInput id="fsAddress1" label="Address Line 1" placeholder="123 Main St" />
            <DInput id="fsAddress2" label="Address Line 2" placeholder="Apartment, suite, unit, etc. (Optional)" />
            <DInput id="fsCity" label="City" placeholder="Anytown" />
            <DInput id="fsState" label="State/Province" placeholder="State" />
            <DInput id="fsZip" label="Zip/Postal Code" placeholder="12345" />
            <DSelect
              id="fsCountry"
              label="Country"
              options={[
                { label: 'Select a country', value: '' },
                { label: 'United States', value: 'us' },
                { label: 'Canada', value: 'ca' },
                { label: 'Mexico', value: 'mx' },
              ]}
            />
          </div>
        </fieldset>

        <div className="df-col-span-12 df-mt-8">
          <DButton type="submit" text="Save Information" className="df-me-2" />
          <DButton type="reset" variant="outline" text="Clear Form" />
        </div>
      </form>
    </DBox>
  ),
};

export const FormWithCover: Story = {
  render: () => (
    <DBox style={{ width: '800px' }} className="df-grid df-grid-cols-12 df-gap-2 df-p-0 df-overflow-hidden">
      <div className="df-hidden df-col-span-4 df-lg:block">
        <div className="df-bg-primary df-text-on-emphasis df-h-full df-relative">
          <div className="df-bottom-0 df-end-0 df-p-8 df-text-end df-absolute">
            <h5>Welcome Back</h5>
            <p className="df-mb-0 df-opacity-50">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
      <form className="df-p-8 df-col-span-12 df-lg:col-span-8">
        <fieldset className="df-mb-8">
          <legend className="df-flex df-fw-semibold">
            <DIcon icon="User" size="1rem" className="df-me-2 df-text-muted" />
            Personal Information
          </legend>
          <div className="df-grid df-grid-cols-12 df-gap-3">
            <div className="df-col-span-12 df-lg:col-span-6">
              <DInput id="fsFirstName" label="First Name" placeholder="John" />
            </div>
            <div className="df-col-span-12 df-lg:col-span-6">
              <DInput id="fsLastName" label="Last Name" placeholder="Doe" />
            </div>
            <div className="df-col-span-12">
              <DInput id="fsEmail" type="email" label="Email" placeholder="john.doe@example.com" />
            </div>
            <div className="df-col-span-12 df-lg:col-span-6">
              <DInput id="fsPhone" type="tel" label="Phone Number" placeholder="(123) 456-7890" />
            </div>
            <div className="df-col-span-12 df-lg:col-span-6">
              <DInput id="fsDateOfBirth" type="date" label="Date of Birth" />
            </div>
          </div>
        </fieldset>
        <div className="df-col-span-12 df-mt-8">
          <DButton type="submit" text="Save Information" className="df-me-2" />
          <DButton type="reset" variant="outline" text="Clear Form" />
        </div>
      </form>
    </DBox>
  ),
};

export const FormWithCoverResponsive: Story = {
  render: () => (
    <DBox className="df-grid df-grid-cols-12 df-gap-2 df-p-0 df-overflow-hidden">
      <div className="df-col-span-12 df-md:col-span-4">
        <div className="df-bg-primary df-text-on-emphasis df-h-full df-relative">
          <div className="df-bottom-0 df-end-0 df-p-8 df-text-end df-lg:absolute">
            <h5>Welcome Back</h5>
            <p className="df-mb-0 df-opacity-50">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
      <form className="df-p-8 df-col-span-12 df-lg:col-span-8">
        <fieldset className="df-mb-8">
          <legend className="df-flex df-fw-semibold">
            <DIcon icon="User" size="1rem" className="df-me-2 df-text-muted" />
            Personal Information
          </legend>
          <div className="df-grid df-grid-cols-12 df-gap-3">
            <div className="df-col-span-12 df-lg:col-span-6">
              <DInput id="fsFirstName" label="First Name" placeholder="John" />
            </div>
            <div className="df-col-span-12 df-lg:col-span-6">
              <DInput id="fsLastName" label="Last Name" placeholder="Doe" />
            </div>
            <div className="df-col-span-12">
              <DInput id="fsEmail" type="email" label="Email" placeholder="john.doe@example.com" />
            </div>
            <div className="df-col-span-12 df-lg:col-span-6">
              <DInput id="fsPhone" type="tel" label="Phone Number" placeholder="(123) 456-7890" />
            </div>
            <div className="df-col-span-12 df-lg:col-span-6">
              <DInput id="fsDateOfBirth" type="date" label="Date of Birth" />
            </div>
          </div>
        </fieldset>
        <div className="df-col-span-12 df-mt-8">
          <DButton type="submit" text="Save Information" className="df-me-2" />
          <DButton type="reset" variant="outline" text="Clear Form" />
        </div>
      </form>
    </DBox>
  ),
};

export const CustomRadios: Story = {
  render: () => (
    <DBox className="df-grid df-grid-cols-12 df-gap-2 df-p-0 df-overflow-hidden">
      <div className="df-col-span-12 df-md:col-span-4">
        <div
          className="df-bg-primary df-text-on-emphasis df-h-full df-relative"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2340)',
            backgroundSize: 'cover',
          }}
        >
          <div className="df-bottom-0 df-end-0 df-p-8 df-text-end df-lg:absolute">
            <h5>Welcome Back</h5>
            <p className="df-mb-0 df-opacity-50">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
      <form className="df-p-8 df-col-span-12 df-lg:col-span-8">
        <fieldset className="df-mb-8">
          <legend className="df-flex df-fw-semibold">
            <DIcon icon="User" size="1rem" className="df-me-2 df-text-muted" />
            Personal Information
          </legend>
          <div className="df-grid df-grid-cols-12 df-gap-3">
            <div className="df-col-span-12 df-lg:col-span-6">
              <DInput id="fsFirstName" label="First Name" placeholder="John" />
            </div>
            <div className="df-col-span-12 df-lg:col-span-6">
              <DInput id="fsLastName" label="Last Name" placeholder="Doe" />
            </div>
            <div className="df-col-span-12">
              <DInput id="fsEmail" type="email" label="Email" placeholder="john.doe@example.com" />
            </div>
            <div className="df-col-span-12 df-lg:col-span-6">
              <DInput id="fsPhone" type="tel" label="Phone Number" placeholder="(123) 456-7890" />
            </div>
            <div className="df-col-span-12 df-lg:col-span-6">
              <DInput id="fsDateOfBirth" type="date" label="Date of Birth" />
            </div>
          </div>
        </fieldset>
        <fieldset className="df-mb-8">
          <legend className="df-flex df-fw-semibold">
            <DIcon icon="Map" size="1rem" className="df-me-2 df-text-muted" />
            Locations
          </legend>
          <div className="df-grid df-grid-cols-12 df-gap-3">
            <label className="radio-custom df-border-1 df-p-4 df-rounded-control df-col-span-12 df-lg:col-span-6 df-items-start df-gap-2">
              <DInputCheck type="radio" name="location" checked />
              <div className="df-choice-label">
                <span className="df-fw-semibold">Home</span>
                <small className="df-block df-mt-1 df-text-muted df-flex df-gap-2">
                  <DIcon size="1rem" icon="Map" />
                  123 Main Street, New York, NY 10001
                </small>
              </div>
            </label>
            <label className="radio-custom df-border-1 df-p-4 df-rounded-control df-col-span-12 df-lg:col-span-6 df-items-start df-gap-2">
              <DInputCheck type="radio" name="location" />
              <div className="df-choice-label">
                <span className="df-fw-semibold">Work</span>
                <small className="df-block df-mt-1 df-text-muted df-flex df-gap-2">
                  <DIcon size="1rem" icon="Map" />
                  123 Main Street, New York, NY 10001
                </small>
              </div>
            </label>
          </div>
        </fieldset>
        <div className="df-col-span-12 df-mt-8">
          <DButton type="submit" text="Save Information" className="df-me-2" />
          <DButton type="reset" variant="outline" text="Clear Form" />
        </div>
      </form>
    </DBox>
  ),
};
