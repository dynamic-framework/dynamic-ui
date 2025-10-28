/* eslint-disable no-plusplus */
import { Meta, StoryObj } from '@storybook/react-vite';
import {
  DocsContainer,
  DocsContainerProps,
} from '@storybook/addon-docs/blocks';

import {
  DIcon, DButton, DProgress, DAvatar, DBadge,
} from '../../src';
import DBox from '../../src/components/DBox';
import DMinimalLineChart from '../../src/components/DMinimalLineChart/DMinimalLineChart';
import DMultiLineChart from '../../src/components/DMultiLineChart/DMultiLineChart';
import DPieChart from '../../src/components/DPieChart/DPieChart';
import DBarChart from '../../src/components/DBarChart/DBarChart';
import DRadialBarChart from '../../src/components/DRadialBarChart/DRadialBarChart';

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
  const data = [];
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
  const data = [];
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
          iconStart="RotateCw"
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
            <div className="d-flex justify-content-between align-items-center mb-8">
              <div className="mb-0 d-flex align-items-start gap-2 w-100">
                <DIcon hasCircle icon="TrendingUp" size=".75rem" />
                <div>
                  <h5>Sales Performance</h5>
                  <small className="text-muted">Last 30 days</small>
                </div>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <select className="form-select form-select-sm" style={{ minWidth: '150px' }}>
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
        </div>

        {/* Main Content - Right (smaller) column */}
        <div className="g-col-12 g-col-lg-4">
          <DBox className="mb-8 h-100">
            <h5 className="mb-4 d-flex align-items-center gap-2">
              <DIcon hasCircle icon="TrendingUp" size=".75rem" />
              Task Progress
            </h5>
            <div className="list-group list-group-flush">
              {tasks.map((task) => (
                <div key={task.id} className="list-group-item d-flex align-items-center">
                  <div>
                    <h6 className="mb-1">{task.title}</h6>
                    <small className="text-muted">{task.description}</small>
                  </div>
                  <div className="ms-auto" style={{ width: '100px', height: '30px' }}>
                    <DMinimalLineChart
                      data={task.chartData}
                      lineColor={task.chartColor}
                      height={30}
                    />
                  </div>
                </div>
              ))}
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
              <DIcon hasCircle icon="TrendingUp" size=".75rem" />
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
            <div className="d-flex">
              <h5 className="mb-4 d-flex align-items-center gap-2">
                <DIcon hasCircle icon="TrendingUp" size=".75rem" />
                User Retention Cohorts
              </h5>
              <div className="text-muted ms-auto">1 hour.</div>
            </div>
            <div className="grid gap-4 p-4">
              <div className="g-col-12 g-col-lg-6">
                <div className="d-flex align-items-center gap-2">
                  <h4 className="display-3 line-height-1">40%</h4>
                  <DIcon icon="TrendingUp" hasCircle size="1rem" color="success" />
                </div>
                <p>After 30 days</p>
                <small className="text-muted">Oct - Nov</small>
              </div>
              <div className="g-col-12 g-col-lg-6" style={{ height: '100px' }}>
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
        </div>
      </div>
    </div>
  ),
};

export const Dashboard2: Story = {
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
          iconStart="RotateCw"
          variant="link"
        />
      </div>

      <div className="grid gap-4 mb-4 p-0 bg-transparent shadow-none">
        {SUMMARY.map(({
          id, percentage, value,
        }) => (
          <DBox
            key={id}
            className="g-col-12 g-col-md-6 g-col-lg-3 p-8 text-center"
          >
            <div style={{ height: 100 }}>
              <DRadialBarChart value={percentage} color="var(--bs-primary-500)" />
            </div>
            <h4 className="mb-0">{value}</h4>
            <small className="text-muted m-0">Last 30 days</small>
          </DBox>
        ))}
      </div>

      <div className="grid gap-4 mb-4">
        {/* Main Content - Left (larger) column */}
        <div className="g-col-12 g-col-lg-8">
          <DBox className="mb-8 h-100">
            <div className="d-flex justify-content-between align-items-center mb-8">
              <div className="mb-0 d-flex align-items-start gap-2 w-100">
                <DIcon hasCircle icon="TrendingUp" size=".75rem" />
                <div>
                  <h5>Sales Performance</h5>
                  <small className="text-muted">Last 30 days</small>
                </div>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <select className="form-select form-select-sm" style={{ minWidth: '150px' }}>
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
        </div>

        {/* Main Content - Right (smaller) column */}
        <div className="g-col-12 g-col-lg-4">
          <DBox className="mb-8 h-100">
            <div className="d-flex">
              <h5 className="mb-4 d-flex align-items-center gap-2">
                <DIcon hasCircle icon="Users" size=".75rem" />
                Task Progress
              </h5>
              <div className="text-muted ms-auto">1 hour.</div>
            </div>
            <div className="list-group list-group-flush">
              {tasks.map((task) => (
                <div key={task.id} className="list-group-item d-flex align-items-center">
                  <div>
                    <h6 className="mb-1">{task.title}</h6>
                    <small className="text-muted">{task.description}</small>
                  </div>
                  <div className="ms-auto" style={{ width: '100px', height: '30px' }}>
                    <DMinimalLineChart
                      data={task.chartData}
                      lineColor={task.chartColor}
                      height={30}
                    />
                  </div>
                </div>
              ))}
            </div>
          </DBox>
        </div>
      </div>

      {/* content end */}

      <div className="grid gap-4">
        {/* Main Content - Left (larger) column */}
        <div className="g-col-12 g-col-lg-4">
          <DBox className="mb-8 h-100">
            <h5 className="mb-4 d-flex align-items-center gap-2">
              <DIcon hasCircle icon="TrendingUp" size=".75rem" />
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
        <div className="g-col-12 g-col-lg-4">
          <DBox className="mb-8 h-100">
            <div className="d-flex">
              <h5 className="mb-4 d-flex align-items-center gap-2">
                <DIcon hasCircle icon="Users" size=".75rem" />
                Teams
              </h5>
            </div>
            <div className="list-group list-group-flush">
              {teams.map((team) => (
                <div key={team.id} className="list-group-item d-flex align-items-center">
                  <div>
                    <h6 className="mb-1">{team.name}</h6>
                    <small className="text-muted">{team.description}</small>
                  </div>
                  <div className="ms-auto">
                    <div className="d-avatar-group">
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
        </div>

        <DBox
          className="p-8 g-col-12 g-col-lg-4 text-white overflow-hidden"
          style={{
            background: '#21457f',
          }}
        >
          <small className="text-uppercase">Newspapper</small>
          <h4 className="mb-4">Gets news on your phone</h4>
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
      </div>
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
          iconStart="RotateCw"
          variant="link"
        />
      </div>

      <div className="grid gap-2 mb-4 p-0 bg-transparent shadow-none">
        {SUMMARY.map(({
          id, title, value, percentage, icon, color,
        }) => (
          <div
            key={id}
            className="g-col-12 g-col-md-6 g-col-lg-3 p-8 bg-primary-50 rounded-3"
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
      </div>

      <div className="grid gap-4 mb-4">
        {/* Main Content - Left (larger) column */}
        <div className="g-col-12 g-col-lg-8">
          <DBox className="mb-8 h-100">
            <div className="d-flex justify-content-between gap-8 align-items-center mb-8">
              <div className="flex-1">
                <p className="text-muted mb-0">Total portfolio</p>
                <h3 className="display-6 mb-0">$123,456</h3>
                <p className="text-muted mb-0">
                  You gained
                  <strong>$40.000 last 6 months</strong>
                  . Thats the best results in last 2 years
                </p>
              </div>
              <ul
                className="nav nav-pills nav-fill gap-1 p-1 small bg-primary-50 rounded-5"
                id="pillNav2"
                role="tablist"
                style={{ '--bs-nav-link-color': 'var(--bs-gray-500)', '--bs-nav-pills-link-active-color': '#fff', '--bs-nav-pills-link-active-bg': 'var(--bs-primary)' }}
              >
                <li className="nav-item" role="presentation">
                  <button className="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">24h</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">7d</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">6m</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">1y</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Max</button>
                </li>
              </ul>
            </div>
            <div style={{ height: '200px' }}>
              <DMultiLineChart data={salesData} lineConfigs={salesLineConfigs} />
            </div>
            <div className="d-flex justify-content-end align-items-center mt-8">
              <DBadge color="success" text="Increase 10%" iconStart="ArrowUp" />
            </div>
          </DBox>
        </div>

        {/* Main Content - Right (smaller) column */}
        <div className="g-col-12 g-col-lg-4">
          <DBox className="mb-8 p-8 h-100">
            <div className="d-flex">
              <h5 className="mb-4 d-flex align-items-center gap-2">
                <DIcon hasCircle icon="BarChart3" size=".75rem" />
                Return on investment
              </h5>
              <div className="text-muted ms-auto">Last 6m.</div>
            </div>
            <h3 className="display-6 mb-0">$123,456</h3>
            <p className="text-muted mb-8">Oct 2024 - Apr 2025</p>
            <div style={{ height: '200px' }}>
              <DBarChart data={taskProgressData} barColor="#0d6efd" />
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
              <DIcon hasCircle icon="TrendingUp" size=".75rem" />
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
            <div className="d-flex">
              <h5 className="mb-4 d-flex align-items-center gap-2">
                <DIcon hasCircle icon="TrendingUp" size=".75rem" />
                User Retention Cohorts
              </h5>
              <div className="text-muted ms-auto">1 hour.</div>
            </div>
            <div className="grid gap-4 p-4">
              <div className="g-col-12 g-col-lg-6">
                <div className="d-flex align-items-center gap-2">
                  <h4 className="display-3 line-height-1">40%</h4>
                  <DIcon icon="TrendingUp" hasCircle size="1rem" color="success" />
                </div>
                <p>After 30 days</p>
                <small className="text-muted">Oct - Nov</small>
              </div>
              <div className="g-col-12 g-col-lg-6" style={{ height: '100px' }}>
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
        </div>
      </div>

      <div className="grid gap-4 mt-4">
        <div className="g-col-12 g-col-lg-4">
          <DBox className="h-100">
            <h5 className="mb-3">Quick Stats</h5>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span>Revenue</span>
              <span className="fw-bold">+15%</span>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span>New Customers</span>
              <span className="fw-bold">+250</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span>Support Tickets</span>
              <span className="fw-bold">5 Open</span>
            </div>
          </DBox>
        </div>
        <div className="g-col-12 g-col-lg-4">
          <DBox className="h-100">
            <h5 className="mb-3">Recent Notifications</h5>
            <ul className="list-unstyled mb-0">
              <li className="d-flex align-items-center mb-2">
                <DIcon hasCircle color="info" icon="Bell" size="1rem" className="me-2" />
                <span>New feature deployed!</span>
                <small className="ms-auto text-muted">5 min ago</small>
              </li>
              <li className="d-flex align-items-center mb-2">
                <DIcon hasCircle color="info" size="1rem" icon="AlertTriangle" className=" me-2" />
                <span>Server overload warning.</span>
                <small className="ms-auto text-muted">1 hour ago</small>
              </li>
              <li className="d-flex align-items-center">
                <DIcon hasCircle size="1rem" color="info" icon="CircleCheck" className="me-2" />
                <span>Report generated successfully.</span>
                <small className="ms-auto text-muted">Yesterday</small>
              </li>
            </ul>
          </DBox>
        </div>
        <div className="g-col-12 g-col-lg-4">
          <DBox className="h-100">
            <h5 className="mb-3">Team Activity</h5>
            <ul className="list-unstyled mb-0">
              <li className="d-flex align-items-center mb-2">
                <DAvatar image="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80" name="JS" size="sm" className="me-2" />
                <div>
                  <p className="mb-0">John Doe completed task #123.</p>
                  <small className="text-muted">2 hours ago</small>
                </div>
              </li>
              <li className="d-flex align-items-center mb-2">
                <DAvatar image="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80" name="JS" size="sm" className="me-2" />
                <div>
                  <p className="mb-0">John Doe completed task #123.</p>
                  <small className="text-muted">2 hours ago</small>
                </div>
              </li>
              <li className="d-flex align-items-center mb-2">
                <DAvatar image="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80" name="JS" size="sm" className="me-2" />
                <div>
                  <p className="mb-0">John Doe completed task #123.</p>
                  <small className="text-muted">2 hours ago</small>
                </div>
              </li>
            </ul>
          </DBox>
        </div>
      </div>
    </div>
  ),
};
