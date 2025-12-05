/* eslint-disable jsx-a11y/label-has-associated-control */
import { Meta, StoryObj } from '@storybook/react-vite';
import { CSSProperties } from 'react';

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
  title: 'Patterns/Form Patterns',
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
    <DBox className="p-8" style={{ width: '800px' }}>
      <form>
        <fieldset>
          <legend className="fw-semibold">Personal Information</legend>
          <DInput className="mb-4" id="name" label="Full Name" placeholder="Enter your full name" />
          <DInput className="mb-4" id="email" type="email" label="Email" placeholder="Enter your email" />
          <DSelect
            className="mb-4"
            id="country"
            label="Country"
            options={[
              { label: 'Select a country', value: '' },
              { label: 'United States', value: 'us' },
              { label: 'Canada', value: 'ca' },
              { label: 'Mexico', value: 'mx' },
            ]}
          />
          <DInputSwitch className="mb-2" id="newsletter" label="Subscribe to newsletter" />
          <DInputCheck className="mb-4" id="terms" type="checkbox" label="I agree to the terms and conditions" />
          <DButton type="submit" text="Submit" />
        </fieldset>
      </form>
    </DBox>
  ),
};

export const horizontalForm: Story = {
  render: () => (
    <DBox className="p-8" style={{ width: '800px' }}>
      <form>
        <fieldset>
          <legend className="fw-semibold">Personal Information</legend>
          <div className="grid gap-3 mb-4">
            <label htmlFor="inputEmail3" className="g-col-sm-2 col-form-label">Email</label>
            <div className="g-col-sm-10">
              <DInput type="email" id="inputEmail3" />
            </div>
          </div>
          <div className="grid gap-3 mb-4">
            <label htmlFor="inputPassword3" className="g-col-sm-2 col-form-label">Password</label>
            <div className="g-col-sm-10">
              <DInputPassword />
            </div>
          </div>
          <hr />
          <div className="grid gap-3 mb-4">
            <label htmlFor="address" className="g-col-sm-2 col-form-label">Address</label>
            <div className="g-col-sm-10">
              <DInput id="address" />
            </div>
          </div>
          <div className="grid gap-3 mb-4">
            <label htmlFor="address" className="g-col-sm-2 col-form-label">Phone</label>
            <div className="g-col-sm-10">
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
    <DBox className="p-8" style={{ width: '800px' }}>
      <form>
        <fieldset>
          <legend className="fw-semibold">Personal Information</legend>
          <div className="grid gap-3">
            <div className="g-col-6">
              <DInput id="firstName" label="First Name" placeholder="Enter your first name" />
            </div>
            <div className="g-col-6">
              <DInput id="lastName" label="Last Name" placeholder="Enter your last name" />
            </div>
            <div className="g-col-6">
              <DInput id="email2" type="email" label="Email" placeholder="Enter your email" />
            </div>
            <div className="g-col-6">
              <DInput id="phone" type="tel" label="Phone" placeholder="Enter your phone number" />
            </div>
            <div className="g-col-6">
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
            <div className="g-col-6">
              <label className="form-label" htmlFor="gender">Gender</label>
              <div className="d-flex gap-2">
                <DInputCheck id="genderMale" type="radio" name="gender" label="Male" />
                <DInputCheck id="genderFemale" type="radio" name="gender" label="Female" />
                <DInputCheck id="genderOther" type="radio" name="gender" label="Other" />
              </div>
            </div>
            <div className="g-col-12">
              <DInputSwitch id="notifications" label="Enable notifications" />
              <DInputCheck id="terms2" type="checkbox" label="I agree to the terms and conditions" />
            </div>
            <div className="g-col-12">
              <DButton type="submit" className="me-2" text="Submit" />
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
    <DBox className="p-8" style={{ width: '800px' }}>
      <form>
        <fieldset className="border p-4 rounded mb-8">
          <legend className="float-none w-auto px-2">Personal Information</legend>
          <div className="grid gap-3">
            <div className="g-col-12 g-col-lg-6">
              <DInput id="fsFirstName" label="First Name" placeholder="John" />
            </div>
            <div className="g-col-12 g-col-lg-6">
              <DInput id="fsLastName" label="Last Name" placeholder="Doe" />
            </div>
            <div className="g-col-12">
              <DInput id="fsEmail" type="email" label="Email" placeholder="john.doe@example.com" />
            </div>
            <div className="g-col-12 g-col-lg-6">
              <DInput id="fsPhone" type="tel" label="Phone Number" placeholder="(123) 456-7890" />
            </div>
            <div className="g-col-12 g-col-lg-6">
              <DInput id="fsDateOfBirth" type="date" label="Date of Birth" />
            </div>
          </div>
        </fieldset>

        <fieldset className="col-12 border p-4 rounded mb-4">
          <legend className="float-none w-auto px-2">Address Information</legend>
          <div className="grid gap-3" style={{ '--bs-columns': '1' } as CSSProperties}>
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

        <div className="g-col-12 mt-8">
          <DButton type="submit" text="Save Information" className="me-2" />
          <DButton type="reset" variant="outline" text="Clear Form" />
        </div>
      </form>
    </DBox>
  ),
};

export const FieldsetForm2: Story = {
  render: () => (
    <DBox className="p-8" style={{ width: '800px' }}>
      <form>
        <fieldset className="mb-8">
          <legend className="d-flex fw-bold">
            <DIcon icon="User" size="1rem" className="me-2 text-muted" />
            Personal Information
          </legend>
          <div className="grid gap-3">
            <div className="g-col-12 g-col-lg-6">
              <DInput id="fsFirstName" label="First Name" placeholder="John" />
            </div>
            <div className="g-col-12 g-col-lg-6">
              <DInput id="fsLastName" label="Last Name" placeholder="Doe" />
            </div>
            <div className="g-col-12">
              <DInput id="fsEmail" type="email" label="Email" placeholder="john.doe@example.com" />
            </div>
            <div className="g-col-12 g-col-lg-6">
              <DInput id="fsPhone" type="tel" label="Phone Number" placeholder="(123) 456-7890" />
            </div>
            <div className="g-col-12 g-col-lg-6">
              <DInput id="fsDateOfBirth" type="date" label="Date of Birth" />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend className="d-flex fw-bold">
            <DIcon icon="Map" size="1rem" className="me-2 text-muted" />
            Address Information
          </legend>
          <div className="grid gap-3" style={{ '--bs-columns': '1' } as CSSProperties}>
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

        <div className="g-col-12 mt-8">
          <DButton type="submit" text="Save Information" className="me-2" />
          <DButton type="reset" variant="outline" text="Clear Form" />
        </div>
      </form>
    </DBox>
  ),
};

export const FormWithCover: Story = {
  render: () => (
    <DBox style={{ width: '800px' }} className="grid gap-2 p-0 overflow-hidden">
      <div className="d-none g-col-4 d-lg-block">
        <div className="bg-primary text-white h-100 position-relative">
          <div className="bottom-0 end-0 p-8 text-end position-absolute">
            <h5>Welcome Back</h5>
            <p className="mb-0 opacity-50">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
      <form className="p-8 g-col-12 g-col-lg-8">
        <fieldset className="mb-8">
          <legend className="d-flex fw-bold">
            <DIcon icon="User" size="1rem" className="me-2 text-muted" />
            Personal Information
          </legend>
          <div className="grid gap-3">
            <div className="g-col-12 g-col-lg-6">
              <DInput id="fsFirstName" label="First Name" placeholder="John" />
            </div>
            <div className="g-col-12 g-col-lg-6">
              <DInput id="fsLastName" label="Last Name" placeholder="Doe" />
            </div>
            <div className="g-col-12">
              <DInput id="fsEmail" type="email" label="Email" placeholder="john.doe@example.com" />
            </div>
            <div className="g-col-12 g-col-lg-6">
              <DInput id="fsPhone" type="tel" label="Phone Number" placeholder="(123) 456-7890" />
            </div>
            <div className="g-col-12 g-col-lg-6">
              <DInput id="fsDateOfBirth" type="date" label="Date of Birth" />
            </div>
          </div>
        </fieldset>
        <div className="g-col-12 mt-8">
          <DButton type="submit" text="Save Information" className="me-2" />
          <DButton type="reset" variant="outline" text="Clear Form" />
        </div>
      </form>
    </DBox>
  ),
};

export const FormWithCoverResponsive: Story = {
  render: () => (
    <DBox className="grid gap-2 p-0 overflow-hidden">
      <div className="g-col-12 g-col-md-4">
        <div className="bg-primary text-white h-100 position-relative">
          <div className="bottom-0 end-0 p-8 text-end position-lg-absolute">
            <h5>Welcome Back</h5>
            <p className="mb-0 opacity-50">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
      <form className="p-8 g-col-12 g-col-lg-8">
        <fieldset className="mb-8">
          <legend className="d-flex fw-bold">
            <DIcon icon="User" size="1rem" className="me-2 text-muted" />
            Personal Information
          </legend>
          <div className="grid gap-3">
            <div className="g-col-12 g-col-lg-6">
              <DInput id="fsFirstName" label="First Name" placeholder="John" />
            </div>
            <div className="g-col-12 g-col-lg-6">
              <DInput id="fsLastName" label="Last Name" placeholder="Doe" />
            </div>
            <div className="g-col-12">
              <DInput id="fsEmail" type="email" label="Email" placeholder="john.doe@example.com" />
            </div>
            <div className="g-col-12 g-col-lg-6">
              <DInput id="fsPhone" type="tel" label="Phone Number" placeholder="(123) 456-7890" />
            </div>
            <div className="g-col-12 g-col-lg-6">
              <DInput id="fsDateOfBirth" type="date" label="Date of Birth" />
            </div>
          </div>
        </fieldset>
        <div className="g-col-12 mt-8">
          <DButton type="submit" text="Save Information" className="me-2" />
          <DButton type="reset" variant="outline" text="Clear Form" />
        </div>
      </form>
    </DBox>
  ),
};

export const CustomRadios: Story = {
  render: () => (
    <DBox className="grid gap-2 p-0 overflow-hidden">
      <div className="g-col-12 g-col-md-4">
        <div
          className="bg-primary text-white h-100 position-relative"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2340)',
            backgroundSize: 'cover',
          }}
        >
          <div className="bottom-0 end-0 p-8 text-end position-lg-absolute">
            <h5>Welcome Back</h5>
            <p className="mb-0 opacity-50">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
      <form className="p-8 g-col-12 g-col-lg-8">
        <fieldset className="mb-8">
          <legend className="d-flex fw-bold">
            <DIcon icon="User" size="1rem" className="me-2 text-muted" />
            Personal Information
          </legend>
          <div className="grid gap-3">
            <div className="g-col-12 g-col-lg-6">
              <DInput id="fsFirstName" label="First Name" placeholder="John" />
            </div>
            <div className="g-col-12 g-col-lg-6">
              <DInput id="fsLastName" label="Last Name" placeholder="Doe" />
            </div>
            <div className="g-col-12">
              <DInput id="fsEmail" type="email" label="Email" placeholder="john.doe@example.com" />
            </div>
            <div className="g-col-12 g-col-lg-6">
              <DInput id="fsPhone" type="tel" label="Phone Number" placeholder="(123) 456-7890" />
            </div>
            <div className="g-col-12 g-col-lg-6">
              <DInput id="fsDateOfBirth" type="date" label="Date of Birth" />
            </div>
          </div>
        </fieldset>
        <fieldset className="mb-8">
          <legend className="d-flex fw-bold">
            <DIcon icon="Map" size="1rem" className="me-2 text-muted" />
            Locations
          </legend>
          <div className="grid gap-3">
            <label className="radio-custom border p-4 rounded g-col-12 g-col-lg-6 align-items-start gap-2">
              <DInputCheck type="radio" name="location" checked />
              <div className="form-check-label">
                <span className="fw-semibold">Home</span>
                <small className="d-block mt-1 text-muted d-flex gap-2">
                  <DIcon size="1rem" icon="Map" />
                  123 Main Street, New York, NY 10001
                </small>
              </div>
            </label>
            <label className="radio-custom border p-4 rounded g-col-12 g-col-lg-6 align-items-start gap-2">
              <DInputCheck type="radio" name="location" />
              <div className="form-check-label">
                <span className="fw-semibold">Work</span>
                <small className="d-block mt-1 text-muted d-flex gap-2">
                  <DIcon size="1rem" icon="Map" />
                  123 Main Street, New York, NY 10001
                </small>
              </div>
            </label>
          </div>
        </fieldset>
        <div className="g-col-12 mt-8">
          <DButton type="submit" text="Save Information" className="me-2" />
          <DButton type="reset" variant="outline" text="Clear Form" />
        </div>
      </form>
    </DBox>
  ),
};
