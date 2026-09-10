import { jsxs, jsx } from 'react/jsx-runtime';
import classNames from 'classnames';

const DEFAULT_IMAGE = 'https://cdn.modyo.cloud/uploads/06b434f7-b943-4f54-9543-84a904e189aa/original/Visa_Logo_1_.png';
const CHIP_IMAGE = 'https://cdn.modyo.cloud/uploads/4660ad00-e5d8-477e-8919-52b53d0a26fb/original/chip-debit-svgrepo-com_1_.png';
const BRAND_LOGOS = {
    visa: DEFAULT_IMAGE,
    mastercard: 'https://cdn.modyo.cloud/uploads/f686b9aa-65ab-4369-9db3-89ceece84f29/original/mastercard.png',
};
function DCreditCard({ brand = 'visa', name, number, holderText = 'Card Holder', logoImage, isChipVisible = true, className, isVertical = false, }) {
    return (jsxs("div", { className: classNames('d-credit-card', isVertical && 'is-vertical', className), children: [jsxs("div", { className: "d-credit-card-header", children: [jsx("img", { src: logoImage || BRAND_LOGOS[brand] || DEFAULT_IMAGE, alt: brand, className: "d-credit-card-logo", width: 100 }), isChipVisible && (jsx("div", { className: "d-credit-card-chip", children: jsx("img", { src: CHIP_IMAGE, alt: "chip", width: 30, className: "d-credit-card-chip-image" }) }))] }), jsxs("div", { className: "d-credit-card-details", children: [jsx("div", { className: "d-credit-card-number", children: number }), jsx("small", { className: "d-credit-card-holder-text", children: holderText }), jsx("span", { className: "d-credit-card-name", children: name })] })] }));
}

export { DCreditCard as default };
//# sourceMappingURL=DCreditCard.js.map
