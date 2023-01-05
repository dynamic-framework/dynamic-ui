import useFormatCurrency from '../hooks/useFormatCurrency';

type Props = {
  value: number;
  className: string;
};

export default function MCurrencyText(
  {
    value,
    className,
  }: Props,
) {
  const { values: [valueFormatted] } = useFormatCurrency(value);
  return (
    <span className={className}>
      {valueFormatted}
    </span>
  );
}
