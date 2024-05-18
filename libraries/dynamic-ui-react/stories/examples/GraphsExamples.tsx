import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Pie,
  PieChart,
  Cell,
  BarChart,
  Bar,
} from 'recharts';

import type { PieLabelRenderProps } from 'recharts';

const LINE_CHART_DATA = [
  { date: 'Mar 23', conservative: 100, tech: 100 },
  { date: 'Apr 23', conservative: 101, tech: 115 },
  { date: 'May 23', conservative: 101, tech: 130 },
  { date: 'Jun 23', conservative: 102, tech: 125 },
  { date: 'Jul 23', conservative: 102, tech: 140 },
  { date: 'Aug 23', conservative: 102, tech: 135 },
  { date: 'Sep 23', conservative: 103, tech: 150 },
  { date: 'Oct 23', conservative: 103, tech: 145 },
  { date: 'Nov 23', conservative: 103, tech: 155 },
  { date: 'Dec 23', conservative: 104, tech: 160 },
  { date: 'Jan 24', conservative: 104, tech: 165 },
  { date: 'Feb 24', conservative: 104, tech: 170 },
  { date: 'Mar 24', conservative: 105, tech: 180 },
];

export function ExampleLineChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={LINE_CHART_DATA}>
        <CartesianGrid strokeDasharray="4 " vertical={false} />
        <XAxis dataKey="date" />
        <YAxis domain={[100, 'dataMax + 20']} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="conservative"
          stroke="var(--bs-primary)"
          activeDot={{ r: 8, stroke: 'var(--bs-primary-100)', strokeWidth: 2 }}
          dot={false}
          name="Conservative Differentiated Oct24"
        />
        <Line
          type="monotone"
          dataKey="tech"
          stroke="var(--bs-secondary)"
          activeDot={{ r: 8, stroke: 'var(--bs-secondary-100)', strokeWidth: 2 }}
          dot={false}
          name="Technological"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

const PIE_CHART_COLORS = [
  'var(--bs-primary)',
  'var(--bs-primary-300)',
  'var(--bs-primary-100)',
  'var(--bs-primary-600)',
];
const PIE_CHART_DATA = [
  { id: 1, name: 'Group A', value: 6500 },
  { id: 2, name: 'Group B', value: 1200 },
  { id: 3, name: 'Group C', value: 10200 },
  { id: 4, name: 'Group D', value: 2100 },
];

const total = PIE_CHART_DATA.reduce(
  (value, item) => value + item.value,
  0,
);

const renderCustomizedLabel = ({ cx, cy }: PieLabelRenderProps) => (
  <text
    x={cx}
    y={cy}
    fill="var(--bs-gray-900)"
    textAnchor="middle"
    dominantBaseline="central"
    className="fs-3"
  >
    {`$${total.toLocaleString()}`}
  </text>
);

export function ExamplePieChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={PIE_CHART_DATA}
          cx="50%"
          cy="50%"
          innerRadius={76}
          dataKey="value"
          label={renderCustomizedLabel}
          labelLine={false}
        >
          {PIE_CHART_DATA.map((entry, index) => (
            <Cell key={entry.id} fill={PIE_CHART_COLORS[index % PIE_CHART_COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

const BAR_CHART_DATA = [
  { name: 'Jan 23', value: 50000 },
  { name: 'Mar 23', value: 75000 },
  { name: 'May 23', value: 100000 },
  { name: 'Jul 23', value: 80000 },
  { name: 'Sep 23', value: 70000 },
  { name: 'Nov 23', value: 60000 },
];

export function ExampleBarChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={BAR_CHART_DATA} barCategoryGap="25%">
        <CartesianGrid strokeDasharray="4 " vertical={false} />
        <XAxis dataKey="name" />
        <YAxis
          domain={[0, 'dataMax + 10000']}
          tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
        />
        <Tooltip
          formatter={(value: number) => `$${value.toLocaleString()}`}
          cursor={{ fill: 'var(--bs-secondary-100)' }}
        />
        <Bar dataKey="value" fill="var(--bs-secondary)" />
      </BarChart>
    </ResponsiveContainer>
  );
}

const PROGRESSIVE_BAR_CHART_DATA = [
  {
    id: 1,
    name: 'Item A',
    value: 22500,
    down: 0,
    color: 'var(--bs-blue)',
  },
  {
    id: 2,
    name: 'Item B',
    value: 1000,
    down: 21500,
    color: 'var(--bs-orange)',
  },
  {
    id: 3,
    name: 'Item C',
    value: 2000,
    down: 19500,
    color: 'var(--bs-orange)',
  },
  {
    id: 4,
    name: 'Item D',
    value: 3000,
    down: 16500,
    color: 'var(--bs-orange)',
  },
  {
    id: 5,
    name: 'Item E',
    value: 16500,
    down: 0,
    color: 'var(--bs-green)',
  },
  {
    id: 6,
    name: 'Item F',
    value: 1000,
    down: 16500,
    color: 'var(--bs-blue)',
  },
  {
    id: 7,
    name: 'Item G',
    value: 8000,
    down: 16500,
    color: 'var(--bs-blue)',
  },
  {
    id: 8,
    name: 'Item H',
    value: 24500,
    down: 0,
    color: 'var(--bs-green)',
  },
];

export function ExampleProgressiveBarChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={PROGRESSIVE_BAR_CHART_DATA}
      >
        <CartesianGrid strokeDasharray="4 " vertical={false} />
        <XAxis dataKey="name" />
        <YAxis
          domain={[0, 'dataMax + 10000']}
        />
        <Tooltip
          formatter={(value: number) => `$${value.toLocaleString()}`}
          cursor={{ fill: 'var(--bs-gray-100)' }}
        />
        <Bar dataKey="down" stackId="a" fill="transparent" />
        <Bar dataKey="value" stackId="a">
          {PROGRESSIVE_BAR_CHART_DATA.map((entry) => (
            <Cell key={entry.id} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
