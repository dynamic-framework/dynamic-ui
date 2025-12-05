import {
  PieChart, Pie, Cell, ResponsiveContainer,
} from 'recharts';

type DPieChartProps = {
  data: { name: string; value: number; color: string }[];
};

export default function DPieChart({
  data,
}: DPieChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart margin={{
        top: 0, right: 0, left: 0, bottom: 0,
      }}
      >
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          nameKey="name"
          paddingAngle={5} // Gap between slices
          cornerRadius={5} // Rounded corners
          labelLine={false} // No lines connecting to labels
          label={false} // No labels on slices
        >
          {data.map((entry, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
