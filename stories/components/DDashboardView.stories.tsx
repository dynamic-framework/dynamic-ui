import { Meta, StoryObj } from '@storybook/react-vite';
import {
  DocsContainer,
  DocsContainerProps,
} from '@storybook/addon-docs/blocks';

import { DIcon, DButton, DProgress } from '../../src';
import DBox from '../../src/components/DBox';

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
  title: 'Patterns/Dashboard View',
  component: DBox,
  parameters: {
    layout: 'fullscreen',
    docs: {
      container: CustomDocs,
      description: {
        component:
          'A dashboard-like view demonstrating the use of various components and Bootstrap grid utilities for a clean and modern layout.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DBox>;

const SUMMARY = [
  {
    id: 0,
    title: 'Total Sales',
    value: '$12,000',
    icon: 'currency-dollar',
    color: 'text-primary',
    percentage: 5.2,
  },
  {
    id: 0,
    title: 'Breakdown',
    value: '$12,000',
    icon: 'signpost-2',
    color: 'text-primary',
    percentage: 5.2,
  },
  {
    id: 1,
    title: 'Branding',
    value: '$19,500',
    icon: 'person-plus',
    color: 'text-primary',
    percentage: 4.2,
  },
  {
    id: 1,
    title: 'Marketing',
    value: '$3,500',
    icon: 'person-plus',
    color: 'text-danger',
    percentage: 2.2,
  },
];

export const Dashboard: Story = {
  render: () => (
    <div className="p-8">
      <div className="d-flex justify-content-between align-items-end mb-8">
        <div>
          <h2 className="mb-0 fw-normal h4">
            Good morning,
            {' '}
            <strong>John</strong>
          </h2>
          <p className="text-muted mb-0">Today is May 12, 2023</p>
        </div>
        <DButton
          text="Refresh Data"
          iconStart="arrow-clockwise"
          variant="link"
        />
      </div>

      <DBox className="grid gap-0 mb-4 p-0">
        {SUMMARY.map(({
          id, title, value, percentage, icon, color,
        }, index) => (
          <div
            key={id}
            className={`g-col-12 g-col-md-6 g-col-lg-3 p-8 ${
              SUMMARY.length - 1 !== index ? 'border-end' : ''
            }`}
          >
            <div className="d-flex gap-2 align-items-center mb-2">
              <DIcon className="text-gray-400" icon={icon} size="1rem" />
              <span className="text-muted">{title}</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h4 className="mb-0">{value}</h4>
              </div>
              <p className={`${color} mb-0`}>
                {percentage}
                %
              </p>
            </div>
          </div>
        ))}
      </DBox>

      <div className="grid gap-4 mb-4">
        {/* Main Content - Left (larger) column */}
        <div className="g-col-12 g-col-lg-8">
          <DBox className="mb-8 h-100">
            <h5 className="mb-4 d-flex align-items-center gap-2">
              <DIcon hasCircle icon="graph-up" size=".75rem" />
              Sales Performance
            </h5>
            {/* Placeholder for a chart or more detailed sales data */}
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: '200px', border: '1px dashed #ccc' }}
            >
              <p className="text-muted">Chart Placeholder</p>
            </div>
          </DBox>
        </div>

        {/* Main Content - Right (smaller) column */}
        <div className="g-col-12 g-col-lg-4">
          <DBox className="mb-8 h-100">
            <h5 className="mb-4 d-flex align-items-center gap-2">
              <DIcon hasCircle icon="graph-up" size=".75rem" />
              Task Progress
            </h5>
            <div className="list-group list-group-flush">
              <div className="list-group-item d-flex">
                <div>
                  <h6 className="mb-1">Project Alpha</h6>
                  <small className="text-muted">
                    Product Launch - My Projects
                  </small>
                </div>
                <div
                  className="ms-auto d-flex gap-3 align-items-center"
                  style={{ width: '100px' }}
                >
                  <DProgress
                    currentValue={75}
                    hideCurrentValue
                    height={5}
                    className="flex-grow-1"
                  />
                  <small className="text-muted">75%</small>
                </div>
              </div>
              <div className="list-group-item d-flex">
                <div>
                  <h6 className="mb-1">Project Alpha</h6>
                  <small className="text-muted">
                    Product Launch - My Projects
                  </small>
                </div>
                <div
                  className="ms-auto d-flex gap-3 align-items-center"
                  style={{ width: '100px' }}
                >
                  <DProgress
                    currentValue={75}
                    hideCurrentValue
                    height={5}
                    className="flex-grow-1"
                  />
                  <small className="text-muted">75%</small>
                </div>
              </div>
              <div className="list-group-item d-flex">
                <div>
                  <h6 className="mb-1">Project Alpha</h6>
                  <small className="text-muted">
                    Product Launch - My Projects
                  </small>
                </div>
                <div
                  className="ms-auto d-flex gap-3 align-items-center"
                  style={{ width: '100px' }}
                >
                  <DProgress
                    currentValue={75}
                    hideCurrentValue
                    height={5}
                    className="flex-grow-1"
                  />
                  <small className="text-muted">75%</small>
                </div>
              </div>
            </div>
          </DBox>
        </div>
      </div>

      {/* content end */}

      <div className="grid gap-4">
        {/* Main Content - Left (larger) column */}
        <div className="g-col-12 g-col-lg-6">
          <DBox className="mb-8 h-100">
            <h5 className="mb-4 d-flex align-items-center gap-2">
              <DIcon hasCircle icon="graph-up" size=".75rem" />
              Top Projects Performance
            </h5>
            {/* Placeholder for a chart or more detailed sales data */}
            <table className="table">
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Progress</th>
                  <th>Ticket</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Project Alpha</td>
                  <td className="align-middle">
                    <DProgress currentValue={75} hideCurrentValue height={5} />
                  </td>
                  <td>232</td>
                </tr>
                <tr>
                  <td>Project Alpha</td>
                  <td className="align-middle">
                    <DProgress currentValue={75} hideCurrentValue height={5} />
                  </td>
                  <td>222</td>
                </tr>
                <tr>
                  <td>Project Alpha</td>
                  <td className="align-middle">
                    <DProgress currentValue={75} hideCurrentValue height={5} />
                  </td>
                  <td>222</td>
                </tr>
              </tbody>
            </table>
          </DBox>
        </div>

        {/* Main Content - Right (smaller) column */}
        <div className="g-col-12 g-col-lg-6">
          <DBox className="mb-8 h-100">
            <h5 className="mb-4 d-flex align-items-center gap-2">
              <DIcon hasCircle icon="graph-up" size=".75rem" />
              Task Progress
            </h5>
          </DBox>
        </div>
      </div>
    </div>
  ),
};
