/* eslint-disable jsx-a11y/label-has-associated-control */
import { Meta, StoryObj } from '@storybook/react-vite';
import { DocsContainer, DocsContainerProps } from '@storybook/addon-docs/blocks'; // ADD
import DBox from '../../src/components/DBox';
import './custom.scss';
import {
  DBadge, DButton, DButtonIcon, DIcon, DInput,
  DInputCheck, DInputSwitch, DListGroup, DSelect,
  DListGroupItem,
} from '../../src';

// ADD
function CustomDocs(props: DocsContainerProps) {
  return (
    <>
      <style>
        {`
          .sbdocs-content {
            max-width: unset;
          }
        `}
      </style>
      <DocsContainer {...props} />
    </>
  );
}

const meta: Meta<typeof DBox> = {
  title: 'Patterns/Master Detail Patterns',
  component: DBox,
  parameters: {
    layout: 'fullscreen',
    docs: {
      container: CustomDocs,
      description: {
        component: 'Examples of master detail patterns using Bootstrap grid classes.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DBox>;

export const Basic: Story = {
  render: () => (
    <div className="p-8">
      <div className="border rounded-2 overflow-hidden grid gap-0">
        <div className="g-col-12 g-col-lg-8 bg-white p-8">
          <div className="mb-8">
            <h3 className="mb-0">User Details</h3>
            <p className="text-muted mb-0">Please fill out the form below to create your account.</p>
          </div>
          <form className="grid gap-4">
            <div className="g-col-12 g-col-lg-6">
              <DInput id="firstName" label="First Name" placeholder="Enter your first name" />
            </div>
            <div className="g-col-12 g-col-lg-6">
              <DInput id="lastName" label="Last Name" placeholder="Enter your last name" />
            </div>
            <div className="g-col-12 g-col-lg-6">
              <DInput id="email2" type="email" label="Email" placeholder="Enter your email" />
            </div>
            <div className="g-col-12 g-col-lg-6">
              <DInput id="phone" type="tel" label="Phone" placeholder="Enter your phone number" />
            </div>
            <div className="g-col-12 g-col-lg-6">
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
            <div className="g-col-12 g-col-lg-6">
              <label className="form-label" htmlFor="gender">Gender</label>
              <div>
                <DInputCheck id="genderMale" type="radio" name="gender" label="Male" inline />
                <DInputCheck id="genderFemale" type="radio" name="gender" label="Female" inline />
                <DInputCheck id="genderOther" type="radio" name="gender" label="Other" inline />
              </div>
            </div>
            <div className="g-col-12">
              <DInputSwitch id="notifications" label="Enable notifications" />
            </div>
            <div className="g-col-12">
              <DButton type="submit" className="me-2" text="Submit" />
              <DButton type="reset" variant="outline" text="Reset" />
            </div>
          </form>
        </div>
        <div className="g-col-12 g-col-lg-4 border-start border-opacity-25">
          <div className="p-8">
            <h5 className="fw-semibold mb-4">Details</h5>
            <div className="list-group list-group-flush">
              <div className="list-group-item px-0">
                <div className="d-flex justify-content-between">
                  <div>
                    <DIcon icon="person" size="1rem" className="me-2 text-muted" />
                    Personal Information
                  </div>
                  <div>
                    <DIcon icon="pencil" size="1rem" className="text-muted" />
                  </div>
                </div>
              </div>
              <div className="list-group-item px-0">
                <div className="d-flex justify-content-between">
                  <div>
                    <DIcon icon="person" size="1rem" className="me-2 text-muted" />
                    Personal Information
                  </div>
                  <div>
                    <DIcon icon="pencil" size="1rem" className="text-muted" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="p-8">
            <h5 className="mb-4 fw-semibold">Info alert</h5>
            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ultricies turpis. Mauris commodo, est vitae tempus laoreet, justo augue scelerisque massa, vel commodo dui orci eu turpis</p>
            <DButton variant="outline" size="sm" text="Send to review" color="primary" />
          </div>
          <hr />
          <div className="p-8">
            <div className="d-flex justify-content-between mb-4">
              <h5 className="fw-semibold">Status</h5>
              <DBadge soft size="sm" color="warning" text="Pending" />
            </div>
            <DBox className="d-flex align-items-center">
              <DIcon icon="file-earmark" size="1rem" className="me-2 text-muted" />
              <span>Doc-name.pdf</span>
              <DButtonIcon variant="link" icon="download" size="sm" className="ms-auto" />
            </DBox>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Menu: Story = {
  render: () => (
    <div className="p-8">
      <div className="border rounded-2 overflow-hidden grid gap-0">
        <div className="g-col-12 g-col-lg-4 border-end border-opacity-25">
          <div>
            <DListGroup className="list-group-white">
              <DListGroupItem iconEnd="chevron-right" as="button" active>
                <div>Home request issue #1</div>
                <small className="text-muted fw-normal">Text lorem ipsum</small>
              </DListGroupItem>
              <DListGroupItem iconEnd="chevron-right" as="button">
                <div>Home request issue #2</div>
                <small className="text-muted fw-normal">Text lorem ipsum</small>
              </DListGroupItem>
              <DListGroupItem iconEnd="chevron-right" as="button">
                <div>Home request issue #3</div>
                <small className="text-muted fw-normal">Text lorem ipsum</small>
              </DListGroupItem>
              <DListGroupItem iconEnd="chevron-right" as="button">
                <div>Home request issue #4</div>
                <small className="text-muted fw-normal">Text lorem ipsum</small>
              </DListGroupItem>
            </DListGroup>
          </div>
          <div className="p-8">
            <h5 className="fw-semibold mb-4">Details</h5>
            <div className="list-group list-group-flush">
              <div className="list-group-item px-0">
                <div className="d-flex justify-content-between">
                  <div>
                    <DIcon icon="person" size="1rem" className="me-2 text-muted" />
                    Personal Information
                  </div>
                  <div>
                    <DIcon icon="pencil" size="1rem" className="text-muted" />
                  </div>
                </div>
              </div>
              <div className="list-group-item px-0">
                <div className="d-flex justify-content-between">
                  <div>
                    <DIcon icon="person" size="1rem" className="me-2 text-muted" />
                    Personal Information
                  </div>
                  <div>
                    <DIcon icon="pencil" size="1rem" className="text-muted" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="g-col-12 g-col-lg-8 bg-white p-8">
          <div className="mb-8">
            <h3 className="mb-0">User Details</h3>
            <p className="text-muted mb-0">Please fill out the form below to create your account.</p>
          </div>
          <form className="grid gap-4">
            <div className="g-col-12 g-col-lg-6">
              <DInput id="firstName" label="First Name" placeholder="Enter your first name" />
            </div>
            <div className="g-col-12 g-col-lg-6">
              <DInput id="lastName" label="Last Name" placeholder="Enter your last name" />
            </div>
            <div className="g-col-12 g-col-lg-6">
              <DInput id="email2" type="email" label="Email" placeholder="Enter your email" />
            </div>
            <div className="g-col-12 g-col-lg-6">
              <DInput id="phone" type="tel" label="Phone" placeholder="Enter your phone number" />
            </div>
            <div className="g-col-12 g-col-lg-6">
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
            <div className="g-col-12 g-col-lg-6">
              <label className="form-label" htmlFor="gender">Gender</label>
              <div>
                <DInputCheck id="genderMale" type="radio" name="gender" label="Male" inline />
                <DInputCheck id="genderFemale" type="radio" name="gender" label="Female" inline />
                <DInputCheck id="genderOther" type="radio" name="gender" label="Other" inline />
              </div>
            </div>
            <div className="g-col-12">
              <DInputSwitch id="notifications" label="Enable notifications" />
            </div>
            <div className="g-col-12">
              <DButton type="submit" className="me-2" text="Submit" />
              <DButton type="reset" variant="outline" text="Reset" />
            </div>
          </form>
        </div>
      </div>
    </div>
  ),
};
