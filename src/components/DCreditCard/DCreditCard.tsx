import classNames from 'classnames';

type Props = {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  cardBrand?: string;
  isChipVisible?: boolean;
  nameOnCard?: string;
  cardNumber?: string;
  cardHolderText?: string;
  isVertical?: boolean;
  logoImage?: string;
};

const DEFAULT_IMAGE = 'https://cdn.modyo.cloud/uploads/06b434f7-b943-4f54-9543-84a904e189aa/original/Visa_Logo_1_.png';
const CHIP_IMAGE = 'https://cdn.modyo.cloud/uploads/4660ad00-e5d8-477e-8919-52b53d0a26fb/original/chip-debit-svgrepo-com_1_.png';

const SIZE = {
  sm: 'd-card-sm',
  md: 'd-card-md',
  lg: 'd-card-lg',
};

export default function DCreditCard(
  {
    size = 'md',
    cardBrand = 'visa',
    nameOnCard,
    cardNumber,
    cardHolderText = 'Card Holder',
    logoImage,
    isChipVisible = true,
    className,
    isVertical = false,
  }: Props,
) {
  return (
    <div
      className={classNames(
        'd-credit-card overflow-hidden text-white',
        'position-relative rounded-3',
        'd-none d-lg-flex',
        SIZE[size],
        isVertical && 'is-vertical',
        className,
      )}
    >
      <div className="d-credit-card-header">
        <img
          src={logoImage || DEFAULT_IMAGE}
          alt={cardBrand}
          className="d-credit-card-logo"
          width={100}
        />
        {isChipVisible && (
          <div className="d-credit-card-chip p-2 rounded-2">
            <img
              src={CHIP_IMAGE}
              alt="chip"
              width={30}
              className="d-credit-card-chip-image"
            />
          </div>
        )}
      </div>

      <div className="d-credit-card-details mt-auto d-none d-sm-block">
        <div className="d-credit-card-number d-none d-sm-block mb-4">
          {cardNumber}
        </div>
        <small className="d-block opacity-50">
          {cardHolderText}
        </small>
        <span className="name">{nameOnCard}</span>
      </div>
    </div>
  );
}
