/* eslint-disable jsx-a11y/label-has-associated-control */
import { Meta, StoryObj } from '@storybook/react-vite';
import {
  DInput, DSelect, DInputCheck, DInputSwitch, DButton,
} from '../../src';
import DBox from '../../src/components/DBox';

const meta: Meta<typeof DBox> = {
  title: 'Patterns/Form Patterns',
  component: DBox,
  parameters: {
    docs: {
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
      <form className="grid gap-4" style={{ '--bs-columns': '1' }}>
        <div className="col-12">
          <DInput id="name" label="Full Name" placeholder="Enter your full name" />
        </div>
        <div className="col-12">
          <DInput id="email" type="email" label="Email" placeholder="Enter your email" />
        </div>
        <div className="col-12">
          <DSelect
            id="country"
            label="Country"
            options={[
              { label: 'Select a country', value: '' },
              { label: 'United States', value: 'us' },
              { label: 'Canada', value: 'ca' },
              { label: 'Mexico', value: 'mx' },
            ]}
          />
        </div>
        <div className="col-12">
          <DInputSwitch id="newsletter" label="Subscribe to newsletter" />
        </div>
        <div className="col-12">
          <DInputCheck id="terms" type="checkbox" label="I agree to the terms and conditions" />
        </div>
        <div className="col-12">
          <DButton type="submit" text="Submit" />
        </div>
      </form>
    </DBox>
  ),
};

export const TwoColumns: Story = {
  render: () => (
    <DBox className="p-8" style={{ width: '800px' }}>
      <form className="grid gap-4" style={{ '--bs-columns': '2' }}>
        <div>
          <DInput id="firstName" label="First Name" placeholder="Enter your first name" />
        </div>
        <div>
          <DInput id="lastName" label="Last Name" placeholder="Enter your last name" />
        </div>
        <div>
          <DInput id="email2" type="email" label="Email" placeholder="Enter your email" />
        </div>
        <div>
          <DInput id="phone" type="tel" label="Phone" placeholder="Enter your phone number" />
        </div>
        <div className="col-12">
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
        <div className="col-12">
          <label className="form-label" htmlFor="gender">Gender</label>
          <div>
            <DInputCheck id="genderMale" type="radio" name="gender" label="Male" inline />
            <DInputCheck id="genderFemale" type="radio" name="gender" label="Female" inline />
            <DInputCheck id="genderOther" type="radio" name="gender" label="Other" inline />
          </div>
        </div>
        <div className="col-12">
          <DInputSwitch id="notifications" label="Enable notifications" />
        </div>
        <div className="col-12">
          <DInputCheck id="terms2" type="checkbox" label="I agree to the terms and conditions" />
        </div>
        <div className="col-12">
          <DButton type="submit" className="me-2" text="Submit" />
          <DButton type="reset" variant="outline" text="Reset" />
        </div>
      </form>
    </DBox>
  ),
};

export const FieldsetForm: Story = {
  render: () => (
    <DBox className="p-8" style={{ width: '800px' }}>
      <form>
        <fieldset className="border p-4 rounded mb-4">
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
          <div className="grid gap-3" style={{ '--bs-columns': '1' }}>
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

        <fieldset className="border p-4 rounded">
          <legend className="float-none w-auto px-2">Preferences</legend>
          <div className="grid gap-3" style={{ '--bs-columns': '1' }}>
            <div className="g-col-12">
              <DInputSwitch id="fsEmailNotifications" label="Receive email notifications" />
            </div>
            <div className="g-col-12">
              <label className="form-label">Preferred Contact Method</label>
              <div>
                <DInputCheck id="fsContactEmail" type="radio" name="contactMethod" label="Email" inline />
                <DInputCheck id="fsContactPhone" type="radio" name="contactMethod" label="Phone" inline />
                <DInputCheck id="fsContactMail" type="radio" name="contactMethod" label="Mail" inline />
              </div>
            </div>
            <div className="g-col-12">
              <DInputCheck id="fsAgreeToTerms" type="checkbox" label="I agree to the privacy policy" />
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
