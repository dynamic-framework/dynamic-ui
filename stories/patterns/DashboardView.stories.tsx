/* eslint-disable no-plusplus */
import { Meta, StoryObj } from '@storybook/react-vite';
import {
  DocsContainer,
  DocsContainerProps,
} from '@storybook/addon-docs/blocks';

import { CSSProperties } from 'react';
import {
  DAvatar,
  DBadge,
  DBox,
  DButton,
  DIcon,
  DLayout,
  DProgress,
} from '../../src';
import DMinimalLineChart from './examples/charts/MinimalLineChart';
import DMultiLineChart from './examples/charts/MultiLineChart';
import DPieChart from './examples/charts/PieChart';
import DBarChart from './examples/charts/BarChart';
import DRadialBarChart from './examples/charts/RadialBarChart';

import DocsTemplate from './docs/Template.mdx';

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
      page: DocsTemplate,
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
    icon: 'DollarSign',
    color: 'text-primary',
    percentage: 5.2,
  },
  {
    id: 0,
    title: 'Breakdown',
    value: '$12,000',
    icon: 'DollarSign',
    color: 'text-primary',
    percentage: 5.2,
  },
  {
    id: 1,
    title: 'Branding',
    value: '$19,500',
    icon: 'UserRoundCheck',
    color: 'text-primary',
    percentage: 4.2,
  },
  {
    id: 1,
    title: 'Marketing',
    value: '$3,500',
    icon: 'DiamondPercent',
    color: 'text-danger',
    percentage: 2.2,
  },
];

const generateChartData = () => {
  const data: { time: string; value1: number; value2: number }[] = [];
  let value1 = 100;
  let value2 = 120;
  for (let i = 0; i < 30; i++) {
    data.push({
      time: `2023-01-${i + 1 < 10 ? `0${i + 1}` : i + 1}`,
      value1: value1 + Math.random() * 20 - 10,
      value2: value2 + Math.random() * 15 - 7,
    });
    value1 = data[i].value1;
    value2 = data[i].value2;
  }
  return data;
};

const generateTaskChartData = () => {
  const data: { time: string; value: number }[] = [];
  let value = Math.random() * 50 + 50; // Start between 50 and 100
  for (let i = 0; i < 10; i++) {
    data.push({
      time: `2023-01-${i + 1 < 10 ? `0${i + 1}` : i + 1}`,
      value: value + Math.random() * 10 - 5,
    });
    value = data[i].value;
  }
  return data;
};

const salesData = generateChartData();

const salesLineConfigs = [
  { dataKey: 'value1', color: '#0d6efd' },
  { dataKey: 'value2', color: '#198754' },
];

const tasks = [
  {
    id: 1,
    title: 'Project Alpha',
    description: 'Product Launch - My Projects',
    chartData: generateTaskChartData(),
    chartColor: '#0d6efd',
  },
  {
    id: 2,
    title: 'Project Beta',
    description: 'Marketing Campaign - New Initiatives',
    chartData: generateTaskChartData(),
    chartColor: '#198754',
  },
  {
    id: 3,
    title: 'Project Gamma',
    description: 'Website Redesign - Internal Tools',
    chartData: generateTaskChartData(),
    chartColor: '#ffc107',
  },
];

const teams = [
  {
    id: 1,
    name: 'Team Alpha',
    color: '#0d6efd',
    description: 'Product Launch - My Projects',
  },
  {
    id: 2,
    name: 'Team Beta',
    color: '#198754',
    description: 'Marketing Campaign - New Initiatives',
  },
  {
    id: 3,
    name: 'Team Gamma',
    color: '#ffc107',
    description: 'Website Redesign - Internal Tools',
  },
];

export const Dashboard: Story = {
  decorators: [
    (Story) => (
      <div className="df-p-8">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div className="df-bg-primary-subtle df-p-8">
      <div className="df-flex df-justify-between df-items-end df-mb-8">
        <div>
          <h2 className="df-mb-0 df-fw-normal df-h4">
            Good morning,
            {' '}
            <strong>John</strong>
          </h2>
          <p className="df-text-muted df-mb-0">Today is May 12, 2023</p>
        </div>
        <DButton
          text="Refresh Data"
          iconStart="RotateCw"
          variant="link"
        />
      </div>

      <DBox className="df-grid df-grid-cols-12 df-gap-0 df-mb-4 df-p-0">
        {SUMMARY.map(({
          id, title, value, percentage, icon, color,
        }, index) => (
          <div
            key={id}
            className={`g-col-12 g-col-md-6 g-col-lg-3 p-8 ${
              SUMMARY.length - 1 !== index ? 'border-end' : ''
            }`}
          >
            <div className="df-flex df-gap-2 df-items-center df-mb-2">
              <DIcon className="df-text-subtle" icon={icon} size="1rem" />
              <span className="df-text-muted">{title}</span>
            </div>
            <div className="df-flex df-justify-between df-items-center">
              <div>
                <div className="df-fs-heading-4 df-fw-semibold">{value}</div>
              </div>
              <p className={`${color} mb-0`}>
                {percentage}
                %
              </p>
            </div>
          </div>
        ))}
      </DBox>

      <DLayout className="df-mb-4" gap={4}>
        {/* Main Content - Left (larger) column */}
        <DLayout.Pane cols="12" colsLg={8}>
          <DBox className="df-mb-8 df-h-full">
            <div className="df-flex df-justify-between df-items-center df-mb-8">
              <div className="df-mb-0 df-flex df-items-start df-gap-2 df-w-full">
                <DIcon hasCircle icon="TrendingUp" size=".75rem" />
                <div>
                  <h5>Sales Performance</h5>
                  <small className="df-text-muted">Last 30 days</small>
                </div>
              </div>
              <div className="df-flex df-gap-2 df-items-center">
                <select className="df-select" data-size="sm" style={{ minWidth: '150px' }}>
                  <option>Today</option>
                  <option>This Month</option>
                  <option>This Year</option>
                </select>
                <DButton style={{ whiteSpace: 'nowrap' }} size="sm" variant="outline" text="View Report" />
              </div>
            </div>
            <div style={{ height: '200px' }}>
              <DMultiLineChart data={salesData} lineConfigs={salesLineConfigs} />
            </div>
          </DBox>
        </DLayout.Pane>

        {/* Main Content - Right (smaller) column */}
        <DLayout.Pane cols="12" colsLg={4}>
          <DBox className="df-mb-8 df-h-full">
            <h5 className="df-mb-4 df-flex df-items-center df-gap-2">
              <DIcon hasCircle icon="TrendingUp" size=".75rem" />
              Task Progress
            </h5>
            <div className="df-list" data-flush>
              {tasks.map((task) => (
                <div key={task.id} className="df-list-item df-flex df-items-center">
                  <div>
                    <h6 className="df-mb-1">{task.title}</h6>
                    <small className="df-text-muted">{task.description}</small>
                  </div>
                  <div className="df-ms-auto" style={{ width: '100px', height: '30px' }}>
                    <DMinimalLineChart
                      data={task.chartData}
                      lineColor={task.chartColor}
                    />
                  </div>
                </div>
              ))}
            </div>
          </DBox>
        </DLayout.Pane>
      </DLayout>

      {/* content end */}

      <DLayout gap={4}>
        {/* Main Content - Left (larger) column */}
        <DLayout.Pane cols="12" colsLg={6}>
          <DBox className="df-mb-8 df-h-full">
            <h5 className="df-mb-4 df-flex df-items-center df-gap-2">
              <DIcon hasCircle icon="TrendingUp" size=".75rem" />
              Top Projects Performance
            </h5>
            {/* Placeholder for a chart or more detailed sales data */}
            <table className="df-table">
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
                  <td className="df-align-middle">
                    <DProgress currentValue={75} hideCurrentValue height={5} />
                  </td>
                  <td>232</td>
                </tr>
                <tr>
                  <td>Project Alpha</td>
                  <td className="df-align-middle">
                    <DProgress currentValue={75} hideCurrentValue height={5} />
                  </td>
                  <td>222</td>
                </tr>
                <tr>
                  <td>Project Alpha</td>
                  <td className="df-align-middle">
                    <DProgress currentValue={75} hideCurrentValue height={5} />
                  </td>
                  <td>222</td>
                </tr>
              </tbody>
            </table>
          </DBox>
        </DLayout.Pane>

        {/* Main Content - Right (smaller) column */}
        <DLayout.Pane cols="12" colsLg={6}>
          <DBox className="df-mb-8 df-h-full">
            <div className="df-flex">
              <h5 className="df-mb-4 df-flex df-items-center df-gap-2">
                <DIcon hasCircle icon="TrendingUp" size=".75rem" />
                User Retention Cohorts
              </h5>
              <div className="df-text-muted df-ms-auto">1 hour.</div>
            </div>
            <div className="df-grid df-grid-cols-12 df-gap-4 df-p-4">
              <div className="df-col-span-12 df-lg:col-span-6">
                <div className="df-flex df-items-center df-gap-2">
                  <h4 className="df-display-3 df-lh-tight">40%</h4>
                  <DIcon icon="TrendingUp" hasCircle size="1rem" color="success" />
                </div>
                <p>After 30 days</p>
                <small className="df-text-muted">Oct - Nov</small>
              </div>
              <div className="df-col-span-12 df-lg:col-span-6" style={{ height: '100px' }}>
                <div style={{ height: '200px' }}>
                  <DPieChart data={[
                    { name: 'Category A', value: 400, color: '#e35d6a' },
                    { name: 'Category B', value: 300, color: '#a370f7' },
                    { name: 'Category C', value: 300, color: '#3dd5f3' },
                    { name: 'Category D', value: 200, color: '#8c68cd' },
                  ]}
                  />
                </div>
              </div>
            </div>
          </DBox>
        </DLayout.Pane>
      </DLayout>
    </div>
  ),
};

export const Dashboard2: Story = {
  decorators: [
    (Story) => (
      <div className="df-p-8">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div className="df-bg-primary-subtle df-p-8">
      <div className="df-flex df-justify-between df-items-end df-mb-8">
        <div>
          <h2 className="df-mb-0 df-fw-normal df-h4">
            Good morning,
            {' '}
            <strong>John</strong>
          </h2>
          <p className="df-text-muted df-mb-0">Today is May 12, 2023</p>
        </div>
        <DButton
          text="Refresh Data"
          iconStart="RotateCw"
          variant="link"
        />
      </div>

      <DLayout gap={4} className="df-mb-4">
        {SUMMARY.map(({
          id, percentage, value,
        }) => (
          <DBox
            key={id}
            className="df-col-span-12 df-md:col-span-6 df-lg:col-span-3 df-p-8 df-text-center"
          >
            <div style={{ height: 100 }}>
              <DRadialBarChart value={percentage} color="var(--df-role-primary-base)" />
            </div>
            <div className="df-fs-heading-4 df-fw-semibold">{value}</div>
            <small className="df-text-muted df-m-0">Last 30 days</small>
          </DBox>
        ))}
      </DLayout>

      <DLayout gap={4} className="df-mb-4">
        {/* Main Content - Left (larger) column */}
        <DLayout.Pane cols="8">
          <DBox className="df-mb-8 df-h-full">
            <div className="df-flex df-justify-between df-items-center df-mb-8">
              <div className="df-mb-0 df-flex df-items-start df-gap-2 df-w-full">
                <DIcon hasCircle icon="TrendingUp" size=".75rem" />
                <div>
                  <h5>Sales Performance</h5>
                  <small className="df-text-muted">Last 30 days</small>
                </div>
              </div>
              <div className="df-flex df-gap-2 df-items-center">
                <select className="df-select" data-size="sm" style={{ minWidth: '150px' }}>
                  <option>Today</option>
                  <option>This Month</option>
                  <option>This Year</option>
                </select>
                <DButton style={{ whiteSpace: 'nowrap' }} size="sm" variant="outline" text="View Report" />
              </div>
            </div>
            <div style={{ height: '200px' }}>
              <DMultiLineChart data={salesData} lineConfigs={salesLineConfigs} />
            </div>
          </DBox>
        </DLayout.Pane>

        {/* Main Content - Right (smaller) column */}
        <DLayout.Pane cols="4">
          <DBox className="df-mb-8 df-h-full">
            <div className="df-flex">
              <h5 className="df-mb-4 df-flex df-items-center df-gap-2">
                <DIcon hasCircle icon="Users" size=".75rem" />
                Task Progress
              </h5>
              <div className="df-text-muted df-ms-auto">1 hour.</div>
            </div>
            <div className="df-list" data-flush>
              {tasks.map((task) => (
                <div key={task.id} className="df-list-item df-flex df-items-center">
                  <div>
                    <h6 className="df-mb-1">{task.title}</h6>
                    <small className="df-text-muted">{task.description}</small>
                  </div>
                  <div className="df-ms-auto" style={{ width: '100px', height: '30px' }}>
                    <DMinimalLineChart
                      data={task.chartData}
                      lineColor={task.chartColor}
                    />
                  </div>
                </div>
              ))}
            </div>
          </DBox>
        </DLayout.Pane>
      </DLayout>

      {/* content end */}

      <DLayout gap={4} className="df-mb-4">
        {/* Main Content - Left (larger) column */}
        <DLayout.Pane cols="4">
          <DBox className="df-mb-8 df-h-full">
            <h5 className="df-mb-4 df-flex df-items-center df-gap-2">
              <DIcon hasCircle icon="TrendingUp" size=".75rem" />
              Top Projects Performance
            </h5>
            {/* Placeholder for a chart or more detailed sales data */}
            <table className="df-table">
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
                  <td className="df-align-middle">
                    <DProgress currentValue={75} hideCurrentValue height={5} />
                  </td>
                  <td>232</td>
                </tr>
                <tr>
                  <td>Project Alpha</td>
                  <td className="df-align-middle">
                    <DProgress currentValue={75} hideCurrentValue height={5} />
                  </td>
                  <td>222</td>
                </tr>
                <tr>
                  <td>Project Alpha</td>
                  <td className="df-align-middle">
                    <DProgress currentValue={75} hideCurrentValue height={5} />
                  </td>
                  <td>222</td>
                </tr>
              </tbody>
            </table>
          </DBox>
        </DLayout.Pane>

        {/* Main Content - Right (smaller) column */}
        <DLayout.Pane cols="4">
          <DBox className="df-mb-8 df-h-full">
            <div className="df-flex">
              <h5 className="df-mb-4 df-flex df-items-center df-gap-2">
                <DIcon hasCircle icon="Users" size=".75rem" />
                Teams
              </h5>
            </div>
            <div className="df-list" data-flush>
              {teams.map((team) => (
                <div key={team.id} className="df-list-item df-flex df-items-center">
                  <div>
                    <h6 className="df-mb-1">{team.name}</h6>
                    <small className="df-text-muted">{team.description}</small>
                  </div>
                  <div className="df-ms-auto">
                    <div className="df-avatar-group">
                      <DAvatar
                        name="AB"
                        image="https://www.sarahdeanephotography.co.uk/wp-content/uploads/2021/01/MENS-GROOMING-FOR-PHOTO-SHOOT-IN-STUDIO-FOR-ONLINE-PROFILES-AND-PORTRAITURE-IN-NEWCASTLE-7.jpg"
                        size="sm"
                        useNameAsInitials
                      />
                      <DAvatar
                        name="AB"
                        image="https://www.anthropics.com/portraitpro/img/page-images/homepage/v22/what-can-it-do-2A.jpg"
                        size="sm"
                        useNameAsInitials
                      />
                      <DAvatar
                        name="AB"
                        image="https://cdn.modyo.cloud/uploads/03a6970d-e917-4597-8c9f-bae052a214ab/original/Avatars_1_.png"
                        size="sm"
                        useNameAsInitials
                      />
                      <DAvatar
                        name="AB"
                        image="https://us.images.westend61.de/0001485597pw/medium-shot-portrait-of-young-beautiful-woman-wearing-a-beige-dress-posing-in-a-field-full-of-flowers-and-surrounded-by-trees-she-is-with-her-hand-in-her-face-ADSF17772.jpg"
                        size="sm"
                        useNameAsInitials
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </DBox>
        </DLayout.Pane>

        <DLayout.Pane cols="4">
          <DBox
            className="df-p-8 df-col-span-12 df-lg:col-span-4 df-text-on-emphasis df-overflow-hidden"
            style={{
              background: '#21457f',
            }}
          >
            <small className="df-text-uppercase">Newspapper</small>
            <h4 className="df-mb-4">Gets news on your phone</h4>
            <p className="">Priceless and optimal sign</p>
            <DButton text="Subscribe" color="light" />
            <div>
              <img
                alt="placeholder"
                style={{
                  marginTop: '-3rem',
                  marginBottom: '-2rem',
                  marginRight: '-2rem',
                  float: 'right',
                  width: '100%',
                  display: 'block',
                }}
                src="https://img.freepik.com/free-vector/hand-drawn-w-colours-illustration_23-2149852395.jpg?t=st=1761342724~exp=1761346324~hmac=7ae6cc17547356bb03c37c5ff6039be6514e0c8feb50c975486113aa4b40e9ef&w=2000"
              />
            </div>
          </DBox>
        </DLayout.Pane>

      </DLayout>
    </div>
  ),
};

const taskProgressData = [
  { name: 'Alpha', value: 75 },
  { name: 'Beta', value: 40 },
  { name: 'Gamma', value: 90 },
  { name: 'Delta', value: 60 },
  { name: 'Gamma', value: 90 },
  { name: 'Delta', value: 60 },
];

export const Dashboard3: Story = {
  decorators: [
    (Story) => (
      <div className="df-p-8">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <>
      <div className="df-flex df-justify-between df-items-end df-mb-8">
        <div>
          <h2 className="df-mb-0 df-fw-normal df-h4">
            Good morning,
            {' '}
            <strong>John</strong>
          </h2>
          <p className="df-text-muted df-mb-0">Today is May 12, 2023</p>
        </div>
        <DButton
          text="Refresh Data"
          iconStart="RotateCw"
          variant="link"
        />
      </div>

      <DLayout gap={4} className="df-mb-4">
        {SUMMARY.map(({
          id, title, value, percentage, icon, color,
        }) => (
          <DLayout.Pane
            key={id}
            cols={12}
            colsLg={3}
            colsMd={6}
            className="df-p-8 df-bg-primary-subtle df-rounded-control"
          >
            <div className="df-flex df-gap-2 df-items-center df-mb-2">
              <DIcon hasCircle color="primary" icon={icon} size="1rem" />
              <span className="df-text-muted">{title}</span>
            </div>
            <div className="df-flex df-justify-between df-items-center">
              <div className="df-fs-heading-4 df-fw-semibold">{value}</div>
              <p className={`${color} mb-0`}>
                {percentage}
                %
              </p>
            </div>
          </DLayout.Pane>
        ))}
      </DLayout>

      <DLayout gap={4} className="df-mb-4">
        {/* Main Content - Left (larger) column */}
        <DLayout.Pane cols={12} colsLg={8}>
          <DBox className="df-mb-8 df-h-full">
            <div className="df-flex df-justify-between df-gap-8 df-items-center df-mb-8">
              <div className="df-flex-1">
                <p className="df-text-muted df-mb-0">Total portfolio</p>
                <h3 className="df-display-6 df-mb-0">$123,456</h3>
                <p className="df-text-muted df-mb-0">
                  You gained
                  <strong>$40.000 last 6 months</strong>
                  . Thats the best results in last 2 years
                </p>
              </div>
              <ul
                className="df-tablist df-gap-1 df-p-1 df-fs-body-sm df-bg-primary-subtle df-rounded-surface"
                data-fill
                data-style="pills"
                id="pillNav2"
                role="tablist"
                style={{ '--df-tabs-tab-fg': 'var(--df-color-neutral-500)', '--df-tabs-tab-active-fg': '#fff', '--df-tabs-tab-active-bg': 'var(--df-role-primary-base)' } as CSSProperties}
              >
                <li className="df-tab-item" role="presentation">
                  <button className="df-tab active df-rounded-surface" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">24h</button>
                </li>
                <li className="df-tab-item" role="presentation">
                  <button className="df-tab df-rounded-surface" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">7d</button>
                </li>
                <li className="df-tab-item" role="presentation">
                  <button className="df-tab df-rounded-surface" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">6m</button>
                </li>
                <li className="df-tab-item" role="presentation">
                  <button className="df-tab df-rounded-surface" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">1y</button>
                </li>
                <li className="df-tab-item" role="presentation">
                  <button className="df-tab df-rounded-surface" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Max</button>
                </li>
              </ul>
            </div>
            <div style={{ height: '200px' }}>
              <DMultiLineChart data={salesData} lineConfigs={salesLineConfigs} />
            </div>
            <div className="df-flex df-justify-end df-items-center df-mt-8">
              <DBadge color="success" text="Increase 10%" iconStart="ArrowUp" />
            </div>
          </DBox>
        </DLayout.Pane>

        {/* Main Content - Right (smaller) column */}
        <DLayout.Pane cols={12} colsLg={4}>
          <DBox className="df-mb-8 df-p-8 df-h-full">
            <div className="df-flex">
              <h5 className="df-mb-4 df-flex df-items-center df-gap-2">
                <DIcon hasCircle icon="BarChart3" size=".75rem" />
                Return on investment
              </h5>
              <div className="df-text-muted df-ms-auto">Last 6m.</div>
            </div>
            <h3 className="df-display-6 df-mb-0">$123,456</h3>
            <p className="df-text-muted df-mb-8">Oct 2024 - Apr 2025</p>
            <div style={{ height: '200px' }}>
              <DBarChart data={taskProgressData} barColor="#0d6efd" />
            </div>
          </DBox>
        </DLayout.Pane>
      </DLayout>

      {/* content end */}

      <DLayout gap={4} className="df-mb-4">
        {/* Main Content - Left (larger) column */}
        <DLayout.Pane cols={12} colsLg={6}>
          <DBox className="df-mb-8 df-h-full">
            <h5 className="df-mb-4 df-flex df-items-center df-gap-2">
              <DIcon hasCircle icon="TrendingUp" size=".75rem" />
              Top Projects Performance
            </h5>
            {/* Placeholder for a chart or more detailed sales data */}
            <table className="df-table">
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
                  <td className="df-align-middle">
                    <DProgress currentValue={75} hideCurrentValue height={5} />
                  </td>
                  <td>232</td>
                </tr>
                <tr>
                  <td>Project Alpha</td>
                  <td className="df-align-middle">
                    <DProgress currentValue={75} hideCurrentValue height={5} />
                  </td>
                  <td>222</td>
                </tr>
                <tr>
                  <td>Project Alpha</td>
                  <td className="df-align-middle">
                    <DProgress currentValue={75} hideCurrentValue height={5} />
                  </td>
                  <td>222</td>
                </tr>
              </tbody>
            </table>
          </DBox>
        </DLayout.Pane>

        {/* Main Content - Right (smaller) column */}
        <DLayout.Pane cols={12} colsLg={6}>
          <DBox className="df-mb-8 df-h-full">
            <div className="df-flex">
              <h5 className="df-mb-4 df-flex df-items-center df-gap-2">
                <DIcon hasCircle icon="TrendingUp" size=".75rem" />
                User Retention Cohorts
              </h5>
              <div className="df-text-muted df-ms-auto">1 hour.</div>
            </div>
            <div className="df-grid df-grid-cols-12 df-gap-4 df-p-4">
              <div className="df-col-span-12 df-lg:col-span-6">
                <div className="df-flex df-items-center df-gap-2">
                  <h4 className="df-display-3 df-lh-tight">40%</h4>
                  <DIcon icon="TrendingUp" hasCircle size="1rem" color="success" />
                </div>
                <p>After 30 days</p>
                <small className="df-text-muted">Oct - Nov</small>
              </div>
              <div className="df-col-span-12 df-lg:col-span-6" style={{ height: '100px' }}>
                <div style={{ height: '200px' }}>
                  <DPieChart data={[
                    { name: 'Category A', value: 400, color: '#e35d6a' },
                    { name: 'Category B', value: 300, color: '#a370f7' },
                    { name: 'Category C', value: 300, color: '#3dd5f3' },
                    { name: 'Category D', value: 200, color: '#8c68cd' },
                  ]}
                  />
                </div>
              </div>
            </div>
          </DBox>
        </DLayout.Pane>
      </DLayout>

      <DLayout gap={4}>
        <DLayout.Pane cols={12} colsLg={4}>
          <DBox className="df-h-full">
            <h5 className="df-mb-3">Quick Stats</h5>
            <div className="df-flex df-justify-between df-items-center df-mb-2">
              <span>Revenue</span>
              <span className="df-fw-semibold">+15%</span>
            </div>
            <div className="df-flex df-justify-between df-items-center df-mb-2">
              <span>New Customers</span>
              <span className="df-fw-semibold">+250</span>
            </div>
            <div className="df-flex df-justify-between df-items-center">
              <span>Support Tickets</span>
              <span className="df-fw-semibold">5 Open</span>
            </div>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols={12} colsLg={4}>
          <DBox className="df-h-full">
            <h5 className="df-mb-3">Recent Notifications</h5>
            <ul className="df-list-unstyled df-mb-0">
              <li className="df-flex df-items-center df-mb-2">
                <DIcon hasCircle color="info" icon="Bell" size="1rem" className="df-me-2" />
                <span>New feature deployed!</span>
                <small className="df-ms-auto df-text-muted">5 min ago</small>
              </li>
              <li className="df-flex df-items-center df-mb-2">
                <DIcon hasCircle color="info" size="1rem" icon="AlertTriangle" className=" df-me-2" />
                <span>Server overload warning.</span>
                <small className="df-ms-auto df-text-muted">1 hour ago</small>
              </li>
              <li className="df-flex df-items-center">
                <DIcon hasCircle size="1rem" color="info" icon="CircleCheck" className="df-me-2" />
                <span>Report generated successfully.</span>
                <small className="df-ms-auto df-text-muted">Yesterday</small>
              </li>
            </ul>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols={12} colsLg={4}>
          <DBox className="df-h-full">
            <h5 className="df-mb-3">Team Activity</h5>
            <ul className="df-list-unstyled df-mb-0">
              <li className="df-flex df-items-center df-mb-2">
                <DAvatar image="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80" name="JS" size="sm" className="df-me-2" />
                <div>
                  <p className="df-mb-0">John Doe completed task #123.</p>
                  <small className="df-text-muted">2 hours ago</small>
                </div>
              </li>
              <li className="df-flex df-items-center df-mb-2">
                <DAvatar image="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80" name="JS" size="sm" className="df-me-2" />
                <div>
                  <p className="df-mb-0">John Doe completed task #123.</p>
                  <small className="df-text-muted">2 hours ago</small>
                </div>
              </li>
              <li className="df-flex df-items-center df-mb-2">
                <DAvatar image="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80" name="JS" size="sm" className="df-me-2" />
                <div>
                  <p className="df-mb-0">John Doe completed task #123.</p>
                  <small className="df-text-muted">2 hours ago</small>
                </div>
              </li>
            </ul>
          </DBox>
        </DLayout.Pane>
      </DLayout>
    </>
  ),
};
