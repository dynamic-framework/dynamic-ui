import classNames from 'classnames';

import DCard from '../DCard';
import DIcon from '../DIcon';
import DButton from '../DButton';

type Props = {
  className?: string;
  icon: string;
  theme: string;
  name: string;
  number: string;
  balance: string;
  balanceText: string;
  onClick: () => void;
  actionText: string;
};

export default function DCardAccount(
  {
    className,
    icon,
    theme,
    name,
    number,
    balance,
    balanceText,
    onClick,
    actionText,
  }: Props,
) {
  return (
    <DCard className={classNames(
      'd-card-account',
      className,
    )}
    >
      <DCard.Body>
        <div className="d-flex gap-3 align-items-center">
          <DIcon
            icon={icon}
            hasCircle
            theme={theme}
            size="1.5rem"
          />
          <div className="d-block flex-grow-1">
            <p className="text-gray-700">
              {name}
            </p>
            <small className="text-gray-500">
              {number}
            </small>
          </div>
        </div>
        <div className="d-block">
          <p className="fw-bold fs-6 text-body">
            {balance}
          </p>
          <small className="text-gray-700">
            {balanceText}
          </small>
        </div>
        <div className="d-flex justify-content-end">
          <DButton
            text={actionText}
            variant="link"
            size="sm"
            theme="secondary"
            iconEnd="chevron-right"
            onClick={onClick}
          />
        </div>
      </DCard.Body>
    </DCard>
  );
}
