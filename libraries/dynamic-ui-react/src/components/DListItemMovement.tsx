/* eslint-disable react/jsx-props-no-spreading */
import { ComponentProps, useMemo } from 'react';
import classNames from 'classnames';
import DListItem from './DListItem';
import { useFormatCurrency } from '../hooks';

type Props = Omit<ComponentProps<typeof DListItem>, 'children'> & {
  description: string;
  date: string;
  amount: number;
  classNameMovement?: string;
};

export default function DListItemMovement({
  description,
  date,
  amount,
  classNameMovement,
  ...props
}: Props) {
  const { format } = useFormatCurrency();
  const value = useMemo(() => {
    const valueFormatted = format(amount);
    if (amount > 0) {
      return {
        theme: 'text-success',
        valueFormatted,
      };
    }
    return {
      theme: 'text-danger',
      valueFormatted,
    };
  }, [format, amount]);

  return (
    <DListItem {...props}>
      <div className={classNames(
        'd-flex justify-content-between align-items-center p-3 gap-3',
        classNameMovement,
      )}
      >
        <div className="d-flex flex-column gap-1">
          <span className="fs-6">
            {description}
          </span>
          <span className="small text-gray-700">
            {date}
          </span>
        </div>
        <span className={classNames('fs-6', value.theme)}>
          {value.valueFormatted}
        </span>
      </div>
    </DListItem>
  );
}
