import { LineChart, Line, ResponsiveContainer } from 'recharts';

type DMinimalLineChartProps = {
  data: { time: string; value: number }[];
  lineColor?: string;
};

export default function DMinimalLineChart({
  data,
  lineColor = '#2962FF',
}: DMinimalLineChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 0, right: 0, left: 0, bottom: 0,
        }}
      >
        {/* No XAxis, YAxis, CartesianGrid, Tooltip, Legend for minimalist design */}
        <Line
          type="monotone"
          dataKey="value"
          stroke={lineColor}
          strokeWidth={2}
          dot={false} // No dots on the line
          activeDot={false} // No active dot on hover
          isAnimationActive={false} // Disable animation for simplicity
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
