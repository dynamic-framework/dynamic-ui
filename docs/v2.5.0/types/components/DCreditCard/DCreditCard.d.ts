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
export default function DCreditCard({ brand, name, number, holderText, logoImage, isChipVisible, className, isVertical, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
