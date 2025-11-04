import type { ReactNode } from 'react';
import { CountryIso2, CountrySelectorProps, ParsedCountry } from 'react-international-phone';
import type { BaseProps, ComponentSize, EndIconProps, FamilyIconProps } from '../interface';
type OnChangeType = {
    phone: string;
    inputValue: string;
    country: ParsedCountry;
    isValid: boolean;
};
declare const ForwardedDInputPhone: import("react").ForwardRefExoticComponent<Omit<Omit<Omit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref">, "type" | "onChange" | "onWheel" | "pattern" | "value" | "inputMode">, "size" | "onChange" | "label" | "invalid" | "value" | keyof BaseProps | keyof FamilyIconProps | keyof EndIconProps | "loading" | "hint" | "valid" | "floatingLabel" | "inputEnd" | "onIconEndClick" | "countrySelectorProps" | "filteredCountries" | "defaultCountry"> & BaseProps & FamilyIconProps & EndIconProps & {
    value?: string | undefined;
    label?: string | undefined;
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
