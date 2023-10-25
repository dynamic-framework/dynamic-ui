import useFormatCurrency from '../../hooks/useFormatCurrency';

import type { BaseProps } from '../interface';

type Props =
& BaseProps
& {
  value: number;
  className?: string;
};

export default function DCurrencyText(
  {
    value,
    className,
    style,
  }: Props,
) {
  const { values: [valueFormatted] } = useFormatCurrency(value);
  return (
    <span className={className} style={style}>
      {valueFormatted}
    </span>
  );
}
