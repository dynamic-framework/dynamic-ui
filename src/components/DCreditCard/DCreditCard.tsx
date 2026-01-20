import classNames from 'classnames';

type CardBrand = 'visa' | 'mastercard';

type Props = {
  className?: string;
  brand?: CardBrand;
  isChipVisible?: boolean;
  name?: string;
  number?: string;
  holderText?: string;
  isVertical?: boolean;
  logoImage?: string;
};

const DEFAULT_IMAGE = 'https://cdn.modyo.cloud/uploads/06b434f7-b943-4f54-9543-84a904e189aa/original/Visa_Logo_1_.png';
const CHIP_IMAGE = 'https://cdn.modyo.cloud/uploads/4660ad00-e5d8-477e-8919-52b53d0a26fb/original/chip-debit-svgrepo-com_1_.png';
const BRAND_LOGOS: Record<CardBrand, string> = {
  visa: DEFAULT_IMAGE,
  mastercard: 'https://cdn.modyo.cloud/uploads/f686b9aa-65ab-4369-9db3-89ceece84f29/original/mastercard.png',
};

export default function DCreditCard(
  {
    brand = 'visa',
    name,
    number,
    holderText = 'Card Holder',
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
        'd-flex',
        isVertical && 'is-vertical',
        className,
      )}
    >
      <div className="d-credit-card-header">
        <img
          src={logoImage || BRAND_LOGOS[brand] || DEFAULT_IMAGE}
          alt={brand}
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
          {number}
        </div>
        <small className="d-block opacity-50">
          {holderText}
        </small>
        <span className="name">{name}</span>
      </div>
    </div>
  );
}
