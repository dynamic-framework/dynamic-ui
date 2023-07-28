/* eslint-disable react/jsx-props-no-spreading */
import { ComponentProps, useMemo } from 'react';
import classNames from 'classnames';
import MListItem from './MListItem';
import { useFormatCurrency } from '../hooks';

type Props = Omit<ComponentProps<typeof MListItem>, ''> & {
  line1: string;
  line2: string;
  line3: number;
  classNameMovement?: string;
};

export default function MListItemMovement({
  line1,
  line2,
  line3,
  classNameMovement,
  ...props
}: Props) {
  const { format } = useFormatCurrency();
  const value = useMemo(() => {
    const valueFormatted = format(line3);
    if (line3 > 0) {
      return {
        theme: 'text-success',
        valueFormatted,
      };
    }
    return {
      theme: 'text-danger',
      valueFormatted,
    };
  }, [format, line3]);

  return (
    <MListItem {...props}>
      <div className={classNames(
        'm-list-item-movement',
        'd-flex justify-content-between align-items-center p-3 gap-3',
        classNameMovement,
      )}
      >
        <div className="d-flex flex-column gap-1">
          <span className="h6">
            {line1}
          </span>
          <span className="sp text-gray-700">
            {line2}
          </span>
        </div>
        <span className={classNames('h6', value.theme)}>
          {value.valueFormatted}
        </span>
      </div>
    </MListItem>
  );
}
