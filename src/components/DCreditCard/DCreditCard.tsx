import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

type Props = {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'debit' | 'credit' | 'mastercard';
  isChipVisible?: boolean;
  nameOnCard?: string;
  cardNumber?: string;
  isVertical?: boolean;
};

const TYPE = {
  debit: '"https://modyo.modyo.me:3000/uploads/ded84d0e-4895-4465-9dcb-06d8b50fdaa9/original/Visa_Logo.png"',
  credit: '"https://modyo.modyo.me:3000/uploads/ded84d0e-4895-4465-9dcb-06d8b50fdaa9/original/Visa_Logo.png"',
  mastercard: '"https://modyo.modyo.me:3000/uploads/ded84d0e-4895-4465-9dcb-06d8b50fdaa9/original/Visa_Logo.png"',
};

export default function CardBlock(
  {
    size = 'md',
    type = 'credit',
    nameOnCard,
    cardNumber,
    isChipVisible = true,
    className,
    isVertical = false,
  }: Props,
) {
  const { t } = useTranslation();

  return (
    <div
      className={classNames(
        'd-credit-card overflow-hidden text-white',
        'position-relative rounded-3 flex-column',
        'd-none d-lg-flex',
        size === 'sm' ? 'p-2 d-card-sm' : 'p-8',
        isVertical && 'is-vertical flex-row',
        className,
      )}
    >
      <div className="d-credit-card-header justify-content-between">
        <img
          src={TYPE[type]}
          alt={type}
          className="debit"
          width={100}
          style={{
            width: '25%',
          }}
        />
        {isChipVisible && (
          <div className="chip p-2 rounded-2">
            <img
              src="https://modyo.modyo.me:3000/uploads/f72098b8-750e-46e3-bce5-96464483e74e/original/chip-debit-svgrepo-com.png"
              alt="chip"
              width={30}
            />
          </div>
        )}
      </div>

      <div className="d-credit-card-details mt-auto d-none d-sm-block">
        <div className="d-credit-card-number font-monospace d-none d-sm-block mb-4">
          {cardNumber}
        </div>
        <small className="d-block opacity-50">{t('cardHolder')}</small>
        <span className="name">{nameOnCard}</span>
      </div>
    </div>
  );
}
