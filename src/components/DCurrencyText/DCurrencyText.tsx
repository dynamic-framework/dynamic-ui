import useFormatCurrency from '../../hooks/useFormatCurrency';

import type { BaseProps } from '../interface';

type Props = BaseProps & {
  value: number;
};

export default function DCurrencyText(
  {
    value,
    className,
    style,
    dataAttributes,
  }: Props,
) {
  const { values: [valueFormatted] } = useFormatCurrency(value);
  return (
    <span
      className={className}
      style={style}
      {...dataAttributes}
    >
      {valueFormatted}
    </span>
  );
}
