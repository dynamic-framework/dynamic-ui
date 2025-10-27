import {
  RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis,
} from 'recharts';

type DRadialBarChartProps = {
  value: number; // Percentage value (0-100)
  color?: string;
};

export default function DRadialBarChart({
  value,
  color = '#0d6efd',
}: DRadialBarChartProps) {
  const data = [{
    name: 'Progress',
    value,
    fill: color,
  }];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        innerRadius="70%"
        outerRadius="90%"
        data={data}
        startAngle={90}
        endAngle={-270}
        margin={{
          top: 0, right: 0, left: 0, bottom: 0,
        }}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={0}
          tick={false}
        />
        <RadialBar />
        {/* Display the value in the center */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="h5"
          fill="#343a40"
        >
          {`${value}%`}
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  );
}
