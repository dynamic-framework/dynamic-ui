type Props = {
  strength: number;
  total: number;
};

const getStrengthModifier = (strength: number, total: number): string => {
  const percentage = total > 0 ? strength / total : 0;

  if (percentage === 0) return 'is-empty';
  if (percentage <= 0.25) return 'is-weak';
  if (percentage <= 0.5) return 'is-fair';
  if (percentage <= 0.75) return 'is-good';
  return 'is-strong';
};

export default function PasswordStrengthBar({ strength, total }: Props) {
  const percentage = total > 0 ? (strength / total) * 100 : 0;

  return (
    <div className="d-password-strength-bar">
      <div
        className={`d-password-strength-bar-fill ${getStrengthModifier(strength, total)}`}
        style={{
          width: `${percentage}%`,
        }}
      />
    </div>
  );
}
