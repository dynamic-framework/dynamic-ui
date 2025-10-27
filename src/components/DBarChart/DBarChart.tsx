import {
  BarChart, Bar, ResponsiveContainer, CartesianGrid, XAxis,
} from 'recharts';

type DBarChartProps = {
  data: { name: string; value: number }[];
  barColor?: string;
};

export default function DBarChart({
  data,
  barColor = '#0d6efd',
}: DBarChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 0, right: 0, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        {/* No XAxis, YAxis, CartesianGrid, Tooltip, Legend for minimalist design */}
        <Bar
          dataKey="value"
          fill={barColor}
          radius={[5, 5, 0, 0]} // Rounded top corners
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
