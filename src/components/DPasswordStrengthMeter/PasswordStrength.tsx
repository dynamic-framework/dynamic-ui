type Props = {
  strength: number;
  total: number;
};

const getColorClass = (strength: number, total: number): string => {
  const percentage = total > 0 ? strength / total : 0;

  if (percentage === 0) return 'bg-gray-200';
  if (percentage <= 0.25) return 'bg-danger';
  if (percentage <= 0.5) return 'bg-warning';
  if (percentage <= 0.75) return 'bg-info';
  return 'bg-success';
};

export default function PasswordStrengthBar({ strength, total }: Props) {
  const percentage = total > 0 ? (strength / total) * 100 : 0;

  return (
    <div
      className="w-100 rounded-3 overflow-hidden bg-gray-100 mb-2"
      style={{ height: '8px' }}
    >
      <div
        className={`h-100 ${getColorClass(strength, total)}`}
        style={{
          width: `${percentage}%`,
          transition: 'width 0.3s ease-in-out',
        }}
      />
    </div>
  );
}
