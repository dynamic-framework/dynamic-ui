/* eslint-disable jsx-a11y/label-has-associated-control */
import { Meta, StoryObj } from '@storybook/react-vite';
import DBox from '../../src/components/DBox';
import {
  DButton, DInput, DInputCheck, DInputSwitch, DSelect,
} from '../../src';

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
