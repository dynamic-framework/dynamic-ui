import type { ReactNode } from 'react';
import { CountryIso2, CountrySelectorProps, ParsedCountry } from 'react-international-phone';
import type { BaseProps, ComponentSize, EndIconProps, FamilyIconProps } from '../interface';
type OnChangeType = {
    phone: string;
    inputValue: string;
    country: ParsedCountry;
    isValid: boolean;
};
declare const ForwardedDInputPhone: import("react").ForwardRefExoticComponent<Omit<Omit<Omit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref">, "pattern" | "inputMode" | "onChange" | "onWheel" | "value" | "type">, "label" | "onChange" | "invalid" | "value" | "size" | "floatingLabel" | keyof BaseProps | keyof FamilyIconProps | keyof EndIconProps | "loading" | "hint" | "valid" | "inputEnd" | "onIconEndClick" | "countrySelectorProps" | "filteredCountries" | "defaultCountry"> & BaseProps & FamilyIconProps & EndIconProps & {
    value?: string | undefined;
    /**
     * The label of the control. Any node is accepted, so it can carry a link, an
     * info trigger or other markup.
     *
     * Text doubles as the control's accessible name. A richer label does not, so
     * pass `aria-label` alongside it; a development-only warning says so when it
     * is missing. A rich label also does not fit `floatingLabel`, whose layout
     * animates a single line of text.
     */
    label?: ReactNode;
    loading?: boolean | undefined;
    hint?: string | undefined;
    size?: ComponentSize | undefined;
    invalid?: boolean | undefined;
    valid?: boolean | undefined;
    floatingLabel?: boolean | undefined;
    inputEnd?: ReactNode;
    onChange?: ((value: OnChangeType) => void) | undefined;
    onIconEndClick?: ((value?: string) => void) | undefined;
    countrySelectorProps?: Omit<CountrySelectorProps, "disabled" | "onSelect" | "selectedCountry" | "countries"> | undefined;
    filteredCountries?: CountryIso2[] | undefined;
    defaultCountry?: CountryIso2 | undefined;
} & import("react").RefAttributes<HTMLInputElement>>;
export default ForwardedDInputPhone;
