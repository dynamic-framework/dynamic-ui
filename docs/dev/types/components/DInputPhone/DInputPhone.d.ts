import type { ReactNode } from 'react';
import { CountryIso2, CountrySelectorProps, ParsedCountry } from 'react-international-phone';
import type { BaseProps, ComponentSize, EndIconProps, FamilyIconProps, LabelIconProps } from '../interface';
type OnChangeType = {
    phone: string;
    inputValue: string;
    country: ParsedCountry;
    isValid: boolean;
};
declare const ForwardedDInputPhone: import("react").ForwardRefExoticComponent<Omit<Omit<Omit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref">, "pattern" | "value" | "type" | "onChange" | "inputMode" | "onWheel">, "size" | "loading" | "label" | "invalid" | "value" | "onChange" | keyof BaseProps | keyof FamilyIconProps | keyof LabelIconProps | keyof EndIconProps | "hint" | "valid" | "floatingLabel" | "inputEnd" | "onIconEndClick" | "countrySelectorProps" | "filteredCountries" | "defaultCountry"> & BaseProps & FamilyIconProps & LabelIconProps & EndIconProps & {
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
