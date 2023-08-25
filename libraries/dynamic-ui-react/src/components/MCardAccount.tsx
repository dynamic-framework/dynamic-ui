/* eslint-disable react/jsx-props-no-spreading */
import classNames from 'classnames';
import { DButton, DIcon } from './proxies';
import MCard from './MCard';
import MCardBody from './MCardBody';

type Props = {
  className?: string;
  icon: string;
  theme: string;
  name: string;
  number: string;
  balance: string;
  balanceText: string;
  onClick: () => void;
  onClickText: string;
};
export default function MCardAccount({
  className,
  icon,
  theme,
  name,
  number,
  balance,
  balanceText,
  onClick,
  onClickText,
}: Props) {
  return (
    <MCard className={classNames(
      'm-card-account',
      className,
    )}
    >
      <MCardBody>
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
            <small className="text-gray">
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
            text={onClickText}
            variant="link"
            size="sm"
            theme="secondary"
            iconEnd="chevron-right"
            onEventClick={onClick}
          />
        </div>
      </MCardBody>
    </MCard>
  );
}
