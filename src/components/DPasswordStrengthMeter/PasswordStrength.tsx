import type { CSSProperties } from 'react';

import { PREFIX } from '../config';

type Props = {
  strength: number;
  total: number;
};

/** The five strength tiers. The mapping to a colour lives in the stylesheet. */
type Level = 'none' | 'weak' | 'fair' | 'good' | 'strong';

function levelFor(strength: number, total: number): Level {
  const ratio = total > 0 ? strength / total : 0;
  if (ratio === 0) return 'none';
  if (ratio <= 0.25) return 'weak';
  if (ratio <= 0.5) return 'fair';
  if (ratio <= 0.75) return 'good';
  return 'strong';
}

/**
 * 2.x picked one of five `bg-*` utility classes here and carried the layout in
 * `w-100 rounded-3 overflow-hidden bg-gray-100 mb-2` plus an inline
 * `transition` string. Those palette utilities do not exist in 3.x by design,
 * so the tier is an attribute and the stylesheet owns the rest.
 */
export default function PasswordStrengthBar({ strength, total }: Props) {
  const percentage = total > 0 ? (strength / total) * 100 : 0;

  return (
    <div className="df-password-strength-bar">
      <div
        className="df-password-strength-fill"
        data-level={levelFor(strength, total)}
        style={{ [`--${PREFIX}password-strength-value`]: `${percentage}%` } as CSSProperties}
        role="progressbar"
        aria-label="Password strength"
        aria-valuenow={strength}
        aria-valuemin={0}
        aria-valuemax={total}
      />
    </div>
  );
}
