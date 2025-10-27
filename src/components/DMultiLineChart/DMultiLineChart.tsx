import {
  LineChart, Line, ResponsiveContainer, CartesianGrid,
} from 'recharts';

type DMultiLineChartProps = {
  data: unknown[]; // Array of objects, each with a time and multiple value keys
  lineConfigs: { dataKey: string; color: string }[];
};

export default function DMultiLineChart({
  data,
  lineConfigs,
}: DMultiLineChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 0, right: 0, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" horizontal vertical={false} />
        {lineConfigs.map((config, index) => (
          <Line
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            type="monotone"
            dataKey={config.dataKey}
            stroke={config.color}
            strokeWidth={2}
            dot={false}
            activeDot={false}
            isAnimationActive={false}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
