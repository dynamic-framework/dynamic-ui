/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ButtonType, ButtonVariant } from "./components/m-button/m-button-interface";
import { FormControlLayoutDirection, InputState, NavegableProps } from "./utils/component-interface";
import { CouponEvent, CouponInputType } from "./components/m-coupon/m-coupon-interface";
import { CurrencyEvent, CurrencyVariant } from "./components/m-currency/m-currency-interface";
import { FormCheckState, FormCheckType } from "./components/m-form-check/m-form-check-interface";
import { ListItemVariant, SelectableProps } from "./components/m-list-item/m-list-item-interface";
import { NavVariant } from "./components/m-nav/m-nav-interface";
import { NavLinkVariant, OptionProps } from "./components/m-nav-link/m-nav-link-interface";
import { QuickActionState, QuickActionVariant } from "./components/m-quick-action/m-quick-action-interface";
import { FormControlLayoutVariant } from "./components/m-select/m-select-interface";
export namespace Components {
    interface MApp {
    }
    interface MBadge {
        /**
          * The text of badge
         */
        "text": string;
        /**
          * The theme to use.
         */
        "theme": string;
    }
    interface MButton {
        /**
          * Icon left to display
         */
        "iconLeft"?: string;
        /**
          * Icon right to display
         */
        "iconRight"?: string;
        /**
          * Flag to switch to pill button border radius.
         */
        "isPill": boolean;
        /**
          * Flag to set the button as active.
         */
        "state"?: InputState;
        /**
          * The text to display.
         */
        "text": string;
        /**
          * The theme to use.
         */
        "theme": string;
        /**
          * The type of the button.
         */
        "type": ButtonType;
        /**
          * The value of the button.
         */
        "value": string;
        /**
          * The variant to use.
         */
        "variant"?: ButtonVariant;
    }
    interface MCard {
        /**
          * The header text
         */
        "header"?: string;
        /**
          * The theme to use
         */
        "theme": string;
    }
    interface MCoupon {
        /**
          * Has a select input
         */
        "hasSelect": boolean;
        /**
          * Hint for the m-cupon
         */
        "hint"?: string;
        /**
          * Icon end for the hint text
         */
        "hintIconEnd"?: string;
        /**
          * Icon start for the hint text
         */
        "hintIconStart"?: string;
        /**
          * Icon of the end
         */
        "iconEnd"?: string;
        /**
          * Icon for the label text
         */
        "iconLabel"?: string;
        /**
          * Icon of the middle
         */
        "iconMiddle"?: string;
        /**
          * Icon of the left
         */
        "iconStart"?: string;
        /**
          * Label for the input
         */
        "label": string;
        /**
          * Change the layout direction to put the label on top or left of input
         */
        "layoutDirection": FormControlLayoutDirection;
        /**
          * Id for the input
         */
        "mId": string;
        /**
          * Placeholder for the input
         */
        "placeholder"?: string;
        /**
          * Text for the button
         */
        "textButton"?: string;
        /**
          * Theme for the m-cupon
         */
        "theme"?: string | undefined;
        /**
          * * The type of the input
         */
        "type": CouponInputType;
    }
    interface MCurrency {
        /**
          * Has a select input
         */
        "hasSelect": boolean;
        /**
          * Hint text for the m-currency
         */
        "hint"?: string;
        /**
          * Icon end for the hint text
         */
        "hintIconEnd"?: string;
        /**
          * Icon start for the hint text
         */
        "hintIconStart"?: string;
        /**
          * Icon for the end
         */
        "iconEnd"?: string;
        /**
          * Icon for the label text
         */
        "iconLabel": string;
        /**
          * Icon for the middle
         */
        "iconMiddle"?: string;
        /**
          * Icon for the left
         */
        "iconStart"?: string;
        /**
          * Label for the input
         */
        "label": string;
        /**
          * Change the layout direction to put the label on top or left of input
         */
        "layoutDirection": FormControlLayoutDirection;
        /**
          * Id for the input
         */
        "mId": string;
        /**
          * * The max value of the input
         */
        "maxValue"?: number;
        /**
          * * The min value of the input
         */
        "minValue"?: number;
        /**
          * Placeholder for the input
         */
        "placeholder"?: string;
        /**
          * Theme for the m-currency
         */
        "theme"?: string | undefined;
        /**
          * * The type of the input
         */
        "type": string;
        /**
          * * The value of the input
         */
        "value"?: number;
        /**
          * Variant for the m-currency
         */
        "variant"?: CurrencyVariant;
    }
    interface MFormCheck {
        /**
          * Set checkbox or radio button marked as selected or not
         */
        "checked": boolean;
        /**
          * Set input as disabled
         */
        "disabled": boolean;
        /**
          * Set view of checkbox as indeterminated
         */
        "indeterminate"?: boolean;
        /**
          * Text that will be displayed beside Check input or Radio input
         */
        "label"?: string;
        /**
          * Form control identifier
         */
        "mId": string;
        /**
          * HTML Name to use within a form or JS reference
         */
        "name"?: string;
        /**
          * State of checkbox or radio. The states could be: Success state Error state Warning state Loading state
         */
        "state"?: FormCheckState;
        /**
          * Set whether is a checkbox input or a radio input
         */
        "type": FormCheckType;
        /**
          * A string representing the value of the checkbox or radio
         */
        "value"?: string;
    }
    interface MFormSwitch {
        /**
          * Flag to change the check state
         */
        "isChecked": boolean;
        /**
          * Flag to disable the input
         */
        "isDisabled": boolean;
        /**
          * The text to display in the switch.
         */
        "label": string;
        /**
          * The text to display when the switch is off.
         */
        "labelOff": string;
        /**
          * The text to display when the switch is on.
         */
        "labelOn": string;
        /**
          * Id
         */
        "mId": string;
    }
    interface MIcon {
        /**
          * Loading animation duration
         */
        "duration": number;
        /**
          * Name of icon to use (in kebab-case)
         */
        "icon": string;
        /**
          * Is loading
         */
        "isLoading": boolean;
        /**
          * Font size of the icon
         */
        "size"?: string;
        /**
          * Theme of the icon
         */
        "theme"?: string;
    }
    interface MInput {
        /**
          * Hint to display, also used to display validity feedback
         */
        "hint"?: string;
        /**
          * Icon to display on hint right
         */
        "hintIconEnd"?: string;
        /**
          * Icon to display on hint left
         */
        "hintIconStart"?: string;
        /**
          * Icon to display on input right
         */
        "iconEnd"?: string;
        /**
          * Icon to display on input left
         */
        "iconStart"?: string;
        /**
          * Flag to disable the input
         */
        "isDisabled": boolean;
        /**
          * The label text
         */
        "label": string;
        /**
          * Icon to display on label right
         */
        "labelIcon"?: string;
        /**
          * Change the layout direction to put the label on top or left of input
         */
        "layoutDirection": FormControlLayoutDirection;
        /**
          * The id of the input
         */
        "mId": string;
        /**
          * The placeholder text
         */
        "placeholder": string;
        /**
          * The type of the input
         */
        "type": string;
        /**
          * The value of the input
         */
        "value": string;
    }
    interface MListItem {
        /**
          * Alternative value
         */
        "alternativeValue"?: string | number;
        /**
          * The icon to display
         */
        "icon"?: string;
        /**
          * Url to replace the default icon image
         */
        "image": string | null;
        /**
          * Has borders rounded
         */
        "isPill": boolean;
        /**
          * Props for the list item navegable variant
         */
        "navegableProps"?: NavegableProps;
        /**
          * Props for the list item selectable variant
         */
        "selectableProps"?: SelectableProps;
        /**
          * Subtext of the list.
         */
        "subtext": string;
        /**
          * Main text of the list.
         */
        "text": string;
        /**
          * The theme to use.
         */
        "theme"?: string;
        /**
          * Value of the list
         */
        "value"?: string | number;
        /**
          * Variant for text item list or complete item list
         */
        "variant"?: ListItemVariant;
    }
    interface MNav {
        /**
          * Is aria orientation vertical
         */
        "isAriaVertical": boolean;
        /**
          * Variant of nav
         */
        "variant"?: NavVariant;
    }
    interface MNavContent {
    }
    interface MNavItem {
    }
    interface MNavLink {
        /**
          * The icon to display
         */
        "icon"?: string;
        /**
          * Is active nav link
         */
        "isActive": boolean;
        /**
          * Is disabled nav link
         */
        "isDisabled": boolean;
        /**
          * Props for the nav link navegable variant
         */
        "navegableProps"?: NavegableProps;
        /**
          * Props for the nav link option variant
         */
        "optionProps"?: OptionProps;
        /**
          * Text of nav link
         */
        "text": string;
        /**
          * Variant of nav link
         */
        "variant": NavLinkVariant;
    }
    interface MNavPane {
        /**
          * Is the current active nav-pane
         */
        "isActive": boolean;
        /**
          * Id of the nav-pane
         */
        "mId": string;
        /**
          * Tab Index of the nav-pane
         */
        "mTabindex"?: number;
        /**
          * Role of the nav-pane
         */
        "role": string;
    }
    interface MQuickAction {
        /**
          * The action icon for the quick action
         */
        "actionIcon"?: string;
        /**
          * The action word for the quick action
         */
        "actionWord"?: string;
        /**
          * The extra info of the quick action
         */
        "extraInfo"?: string;
        /**
          * The icon of the quick action
         */
        "icon"?: string;
        /**
          * The image of the quick action
         */
        "image"?: string;
        /**
          * The state of the quick action
         */
        "state"?: QuickActionState;
        /**
          * The subtext of the quick action
         */
        "subtext"?: string;
        /**
          * The main text of the quick action
         */
        "text": string;
        /**
          * The variant of the quick action
         */
        "variant"?: QuickActionVariant;
    }
    interface MSearch {
        /**
          * Hint to display, also used to display validity feedback
         */
        "hint"?: string;
        /**
          * Icon to display on hint right
         */
        "hintIconEnd"?: string;
        /**
          * Icon to display on hint left
         */
        "hintIconStart"?: string;
        /**
          * Icon to display on input right
         */
        "iconEnd"?: string;
        /**
          * Flag to disable the input
         */
        "isDisabled": boolean;
        /**
          * Flag to read only the input
         */
        "isReadOnly": boolean;
        /**
          * The label text
         */
        "label": string;
        /**
          * Icon to display on label right
         */
        "labelIcon"?: string;
        /**
          * Change the layout direction to put the label on top or left of input
         */
        "layoutDirection": FormControlLayoutDirection;
        /**
          * The id of the input
         */
        "mId": string;
        /**
          * The placeholder text
         */
        "placeholder": string;
        /**
          * Theme to use for the search
         */
        "theme"?: string;
        /**
          * The type of the input
         */
        "type": string;
        /**
          * The value of the input
         */
        "value": string;
        /**
          * Variant to use for the search
         */
        "variant"?: string;
    }
    interface MSelect {
        /**
          * The hint of the select in full variant
         */
        "hint"?: string;
        /**
          * The hint icon for the select in full variant
         */
        "hintIcon"?: string;
        /**
          * The end icon for the select
         */
        "iconEnd"?: string;
        /**
          * The middle icon for the select
         */
        "iconMiddle"?: string;
        /**
          * The start icon for the select
         */
        "iconStart"?: string;
        /**
          * The label of the select in full variant
         */
        "label"?: string;
        /**
          * Change the layout direction to put the label on top or left of select
         */
        "layoutDirection": FormControlLayoutDirection;
        /**
          * Id of the select
         */
        "mId": string;
        /**
          * The theme of the select
         */
        "theme": string;
        /**
          * The variant of the select
         */
        "variant": FormControlLayoutVariant;
    }
    interface MText {
        /**
          * The theme to use
         */
        "theme": string;
    }
}
export interface MButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMButtonElement;
}
export interface MCouponCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMCouponElement;
}
export interface MCurrencyCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMCurrencyElement;
}
export interface MFormSwitchCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMFormSwitchElement;
}
export interface MInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMInputElement;
}
export interface MQuickActionCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMQuickActionElement;
}
export interface MSearchCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMSearchElement;
}
export interface MSelectCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMSelectElement;
}
declare global {
    interface HTMLMAppElement extends Components.MApp, HTMLStencilElement {
    }
    var HTMLMAppElement: {
        prototype: HTMLMAppElement;
        new (): HTMLMAppElement;
    };
    interface HTMLMBadgeElement extends Components.MBadge, HTMLStencilElement {
    }
    var HTMLMBadgeElement: {
        prototype: HTMLMBadgeElement;
        new (): HTMLMBadgeElement;
    };
    interface HTMLMButtonElement extends Components.MButton, HTMLStencilElement {
    }
    var HTMLMButtonElement: {
        prototype: HTMLMButtonElement;
        new (): HTMLMButtonElement;
    };
    interface HTMLMCardElement extends Components.MCard, HTMLStencilElement {
    }
    var HTMLMCardElement: {
        prototype: HTMLMCardElement;
        new (): HTMLMCardElement;
    };
    interface HTMLMCouponElement extends Components.MCoupon, HTMLStencilElement {
    }
    var HTMLMCouponElement: {
        prototype: HTMLMCouponElement;
        new (): HTMLMCouponElement;
    };
    interface HTMLMCurrencyElement extends Components.MCurrency, HTMLStencilElement {
    }
    var HTMLMCurrencyElement: {
        prototype: HTMLMCurrencyElement;
        new (): HTMLMCurrencyElement;
    };
    interface HTMLMFormCheckElement extends Components.MFormCheck, HTMLStencilElement {
    }
    var HTMLMFormCheckElement: {
        prototype: HTMLMFormCheckElement;
        new (): HTMLMFormCheckElement;
    };
    interface HTMLMFormSwitchElement extends Components.MFormSwitch, HTMLStencilElement {
    }
    var HTMLMFormSwitchElement: {
        prototype: HTMLMFormSwitchElement;
        new (): HTMLMFormSwitchElement;
    };
    interface HTMLMIconElement extends Components.MIcon, HTMLStencilElement {
    }
    var HTMLMIconElement: {
        prototype: HTMLMIconElement;
        new (): HTMLMIconElement;
    };
    interface HTMLMInputElement extends Components.MInput, HTMLStencilElement {
    }
    var HTMLMInputElement: {
        prototype: HTMLMInputElement;
        new (): HTMLMInputElement;
    };
    interface HTMLMListItemElement extends Components.MListItem, HTMLStencilElement {
    }
    var HTMLMListItemElement: {
        prototype: HTMLMListItemElement;
        new (): HTMLMListItemElement;
    };
    interface HTMLMNavElement extends Components.MNav, HTMLStencilElement {
    }
    var HTMLMNavElement: {
        prototype: HTMLMNavElement;
        new (): HTMLMNavElement;
    };
    interface HTMLMNavContentElement extends Components.MNavContent, HTMLStencilElement {
    }
    var HTMLMNavContentElement: {
        prototype: HTMLMNavContentElement;
        new (): HTMLMNavContentElement;
    };
    interface HTMLMNavItemElement extends Components.MNavItem, HTMLStencilElement {
    }
    var HTMLMNavItemElement: {
        prototype: HTMLMNavItemElement;
        new (): HTMLMNavItemElement;
    };
    interface HTMLMNavLinkElement extends Components.MNavLink, HTMLStencilElement {
    }
    var HTMLMNavLinkElement: {
        prototype: HTMLMNavLinkElement;
        new (): HTMLMNavLinkElement;
    };
    interface HTMLMNavPaneElement extends Components.MNavPane, HTMLStencilElement {
    }
    var HTMLMNavPaneElement: {
        prototype: HTMLMNavPaneElement;
        new (): HTMLMNavPaneElement;
    };
    interface HTMLMQuickActionElement extends Components.MQuickAction, HTMLStencilElement {
    }
    var HTMLMQuickActionElement: {
        prototype: HTMLMQuickActionElement;
        new (): HTMLMQuickActionElement;
    };
    interface HTMLMSearchElement extends Components.MSearch, HTMLStencilElement {
    }
    var HTMLMSearchElement: {
        prototype: HTMLMSearchElement;
        new (): HTMLMSearchElement;
    };
    interface HTMLMSelectElement extends Components.MSelect, HTMLStencilElement {
    }
    var HTMLMSelectElement: {
        prototype: HTMLMSelectElement;
        new (): HTMLMSelectElement;
    };
    interface HTMLMTextElement extends Components.MText, HTMLStencilElement {
    }
    var HTMLMTextElement: {
        prototype: HTMLMTextElement;
        new (): HTMLMTextElement;
    };
    interface HTMLElementTagNameMap {
        "m-app": HTMLMAppElement;
        "m-badge": HTMLMBadgeElement;
        "m-button": HTMLMButtonElement;
        "m-card": HTMLMCardElement;
        "m-coupon": HTMLMCouponElement;
        "m-currency": HTMLMCurrencyElement;
        "m-form-check": HTMLMFormCheckElement;
        "m-form-switch": HTMLMFormSwitchElement;
        "m-icon": HTMLMIconElement;
        "m-input": HTMLMInputElement;
        "m-list-item": HTMLMListItemElement;
        "m-nav": HTMLMNavElement;
        "m-nav-content": HTMLMNavContentElement;
        "m-nav-item": HTMLMNavItemElement;
        "m-nav-link": HTMLMNavLinkElement;
        "m-nav-pane": HTMLMNavPaneElement;
        "m-quick-action": HTMLMQuickActionElement;
        "m-search": HTMLMSearchElement;
        "m-select": HTMLMSelectElement;
        "m-text": HTMLMTextElement;
    }
}
declare namespace LocalJSX {
    interface MApp {
    }
    interface MBadge {
        /**
          * The text of badge
         */
        "text"?: string;
        /**
          * The theme to use.
         */
        "theme"?: string;
    }
    interface MButton {
        /**
          * Icon left to display
         */
        "iconLeft"?: string;
        /**
          * Icon right to display
         */
        "iconRight"?: string;
        /**
          * Flag to switch to pill button border radius.
         */
        "isPill"?: boolean;
        /**
          * Emitted when the button has been clicked.
         */
        "onMClick"?: (event: MButtonCustomEvent<any>) => void;
        /**
          * Flag to set the button as active.
         */
        "state"?: InputState;
        /**
          * The text to display.
         */
        "text"?: string;
        /**
          * The theme to use.
         */
        "theme"?: string;
        /**
          * The type of the button.
         */
        "type"?: ButtonType;
        /**
          * The value of the button.
         */
        "value"?: string;
        /**
          * The variant to use.
         */
        "variant"?: ButtonVariant;
    }
    interface MCard {
        /**
          * The header text
         */
        "header"?: string;
        /**
          * The theme to use
         */
        "theme"?: string;
    }
    interface MCoupon {
        /**
          * Has a select input
         */
        "hasSelect"?: boolean;
        /**
          * Hint for the m-cupon
         */
        "hint"?: string;
        /**
          * Icon end for the hint text
         */
        "hintIconEnd"?: string;
        /**
          * Icon start for the hint text
         */
        "hintIconStart"?: string;
        /**
          * Icon of the end
         */
        "iconEnd"?: string;
        /**
          * Icon for the label text
         */
        "iconLabel"?: string;
        /**
          * Icon of the middle
         */
        "iconMiddle"?: string;
        /**
          * Icon of the left
         */
        "iconStart"?: string;
        /**
          * Label for the input
         */
        "label"?: string;
        /**
          * Change the layout direction to put the label on top or left of input
         */
        "layoutDirection"?: FormControlLayoutDirection;
        /**
          * Id for the input
         */
        "mId": string;
        /**
          * Emitted when the button is clicked
         */
        "onMClick"?: (event: MCouponCustomEvent<CouponEvent>) => void;
        /**
          * Placeholder for the input
         */
        "placeholder"?: string;
        /**
          * Text for the button
         */
        "textButton"?: string;
        /**
          * Theme for the m-cupon
         */
        "theme"?: string | undefined;
        /**
          * * The type of the input
         */
        "type"?: CouponInputType;
    }
    interface MCurrency {
        /**
          * Has a select input
         */
        "hasSelect"?: boolean;
        /**
          * Hint text for the m-currency
         */
        "hint"?: string;
        /**
          * Icon end for the hint text
         */
        "hintIconEnd"?: string;
        /**
          * Icon start for the hint text
         */
        "hintIconStart"?: string;
        /**
          * Icon for the end
         */
        "iconEnd"?: string;
        /**
          * Icon for the label text
         */
        "iconLabel"?: string;
        /**
          * Icon for the middle
         */
        "iconMiddle"?: string;
        /**
          * Icon for the left
         */
        "iconStart"?: string;
        /**
          * Label for the input
         */
        "label"?: string;
        /**
          * Change the layout direction to put the label on top or left of input
         */
        "layoutDirection"?: FormControlLayoutDirection;
        /**
          * Id for the input
         */
        "mId": string;
        /**
          * * The max value of the input
         */
        "maxValue"?: number;
        /**
          * * The min value of the input
         */
        "minValue"?: number;
        /**
          * Emitted when the inputs change
         */
        "onMChange"?: (event: MCurrencyCustomEvent<CurrencyEvent>) => void;
        /**
          * Placeholder for the input
         */
        "placeholder"?: string;
        /**
          * Theme for the m-currency
         */
        "theme"?: string | undefined;
        /**
          * * The type of the input
         */
        "type"?: string;
        /**
          * * The value of the input
         */
        "value"?: number;
        /**
          * Variant for the m-currency
         */
        "variant"?: CurrencyVariant;
    }
    interface MFormCheck {
        /**
          * Set checkbox or radio button marked as selected or not
         */
        "checked"?: boolean;
        /**
          * Set input as disabled
         */
        "disabled"?: boolean;
        /**
          * Set view of checkbox as indeterminated
         */
        "indeterminate"?: boolean;
        /**
          * Text that will be displayed beside Check input or Radio input
         */
        "label"?: string;
        /**
          * Form control identifier
         */
        "mId": string;
        /**
          * HTML Name to use within a form or JS reference
         */
        "name"?: string;
        /**
          * State of checkbox or radio. The states could be: Success state Error state Warning state Loading state
         */
        "state"?: FormCheckState;
        /**
          * Set whether is a checkbox input or a radio input
         */
        "type": FormCheckType;
        /**
          * A string representing the value of the checkbox or radio
         */
        "value"?: string;
    }
    interface MFormSwitch {
        /**
          * Flag to change the check state
         */
        "isChecked"?: boolean;
        /**
          * Flag to disable the input
         */
        "isDisabled"?: boolean;
        /**
          * The text to display in the switch.
         */
        "label": string;
        /**
          * The text to display when the switch is off.
         */
        "labelOff"?: string;
        /**
          * The text to display when the switch is on.
         */
        "labelOn"?: string;
        /**
          * Id
         */
        "mId": string;
        /**
          * Emitted when the switch has changed
         */
        "onMChange"?: (event: MFormSwitchCustomEvent<boolean>) => void;
    }
    interface MIcon {
        /**
          * Loading animation duration
         */
        "duration"?: number;
        /**
          * Name of icon to use (in kebab-case)
         */
        "icon": string;
        /**
          * Is loading
         */
        "isLoading"?: boolean;
        /**
          * Font size of the icon
         */
        "size"?: string;
        /**
          * Theme of the icon
         */
        "theme"?: string;
    }
    interface MInput {
        /**
          * Hint to display, also used to display validity feedback
         */
        "hint"?: string;
        /**
          * Icon to display on hint right
         */
        "hintIconEnd"?: string;
        /**
          * Icon to display on hint left
         */
        "hintIconStart"?: string;
        /**
          * Icon to display on input right
         */
        "iconEnd"?: string;
        /**
          * Icon to display on input left
         */
        "iconStart"?: string;
        /**
          * Flag to disable the input
         */
        "isDisabled"?: boolean;
        /**
          * The label text
         */
        "label"?: string;
        /**
          * Icon to display on label right
         */
        "labelIcon"?: string;
        /**
          * Change the layout direction to put the label on top or left of input
         */
        "layoutDirection"?: FormControlLayoutDirection;
        /**
          * The id of the input
         */
        "mId": string;
        /**
          * Emitted when the input value has changed
         */
        "onMChange"?: (event: MInputCustomEvent<string>) => void;
        /**
          * The placeholder text
         */
        "placeholder"?: string;
        /**
          * The type of the input
         */
        "type"?: string;
        /**
          * The value of the input
         */
        "value"?: string;
    }
    interface MListItem {
        /**
          * Alternative value
         */
        "alternativeValue"?: string | number;
        /**
          * The icon to display
         */
        "icon"?: string;
        /**
          * Url to replace the default icon image
         */
        "image"?: string | null;
        /**
          * Has borders rounded
         */
        "isPill"?: boolean;
        /**
          * Props for the list item navegable variant
         */
        "navegableProps"?: NavegableProps;
        /**
          * Props for the list item selectable variant
         */
        "selectableProps"?: SelectableProps;
        /**
          * Subtext of the list.
         */
        "subtext"?: string;
        /**
          * Main text of the list.
         */
        "text"?: string;
        /**
          * The theme to use.
         */
        "theme"?: string;
        /**
          * Value of the list
         */
        "value"?: string | number;
        /**
          * Variant for text item list or complete item list
         */
        "variant"?: ListItemVariant;
    }
    interface MNav {
        /**
          * Is aria orientation vertical
         */
        "isAriaVertical"?: boolean;
        /**
          * Variant of nav
         */
        "variant"?: NavVariant;
    }
    interface MNavContent {
    }
    interface MNavItem {
    }
    interface MNavLink {
        /**
          * The icon to display
         */
        "icon"?: string;
        /**
          * Is active nav link
         */
        "isActive"?: boolean;
        /**
          * Is disabled nav link
         */
        "isDisabled"?: boolean;
        /**
          * Props for the nav link navegable variant
         */
        "navegableProps"?: NavegableProps;
        /**
          * Props for the nav link option variant
         */
        "optionProps"?: OptionProps;
        /**
          * Text of nav link
         */
        "text": string;
        /**
          * Variant of nav link
         */
        "variant"?: NavLinkVariant;
    }
    interface MNavPane {
        /**
          * Is the current active nav-pane
         */
        "isActive"?: boolean;
        /**
          * Id of the nav-pane
         */
        "mId": string;
        /**
          * Tab Index of the nav-pane
         */
        "mTabindex"?: number;
        /**
          * Role of the nav-pane
         */
        "role"?: string;
    }
    interface MQuickAction {
        /**
          * The action icon for the quick action
         */
        "actionIcon"?: string;
        /**
          * The action word for the quick action
         */
        "actionWord"?: string;
        /**
          * The extra info of the quick action
         */
        "extraInfo"?: string;
        /**
          * The icon of the quick action
         */
        "icon"?: string;
        /**
          * The image of the quick action
         */
        "image"?: string;
        /**
          * Emitted when the input value has changed
         */
        "onMClick"?: (event: MQuickActionCustomEvent<any>) => void;
        /**
          * The state of the quick action
         */
        "state"?: QuickActionState;
        /**
          * The subtext of the quick action
         */
        "subtext"?: string;
        /**
          * The main text of the quick action
         */
        "text": string;
        /**
          * The variant of the quick action
         */
        "variant"?: QuickActionVariant;
    }
    interface MSearch {
        /**
          * Hint to display, also used to display validity feedback
         */
        "hint"?: string;
        /**
          * Icon to display on hint right
         */
        "hintIconEnd"?: string;
        /**
          * Icon to display on hint left
         */
        "hintIconStart"?: string;
        /**
          * Icon to display on input right
         */
        "iconEnd"?: string;
        /**
          * Flag to disable the input
         */
        "isDisabled"?: boolean;
        /**
          * Flag to read only the input
         */
        "isReadOnly"?: boolean;
        /**
          * The label text
         */
        "label"?: string;
        /**
          * Icon to display on label right
         */
        "labelIcon"?: string;
        /**
          * Change the layout direction to put the label on top or left of input
         */
        "layoutDirection"?: FormControlLayoutDirection;
        /**
          * The id of the input
         */
        "mId": string;
        /**
          * Emitted when the input value has changed
         */
        "onMChange"?: (event: MSearchCustomEvent<string>) => void;
        /**
          * Emitted when the button is clicked
         */
        "onMClick"?: (event: MSearchCustomEvent<string>) => void;
        /**
          * The placeholder text
         */
        "placeholder"?: string;
        /**
          * Theme to use for the search
         */
        "theme"?: string;
        /**
          * The type of the input
         */
        "type"?: string;
        /**
          * The value of the input
         */
        "value"?: string;
        /**
          * Variant to use for the search
         */
        "variant"?: string;
    }
    interface MSelect {
        /**
          * The hint of the select in full variant
         */
        "hint"?: string;
        /**
          * The hint icon for the select in full variant
         */
        "hintIcon"?: string;
        /**
          * The end icon for the select
         */
        "iconEnd"?: string;
        /**
          * The middle icon for the select
         */
        "iconMiddle"?: string;
        /**
          * The start icon for the select
         */
        "iconStart"?: string;
        /**
          * The label of the select in full variant
         */
        "label"?: string;
        /**
          * Change the layout direction to put the label on top or left of select
         */
        "layoutDirection"?: FormControlLayoutDirection;
        /**
          * Id of the select
         */
        "mId": string;
        /**
          * Emitted when the select value has changed
         */
        "onMChange"?: (event: MSelectCustomEvent<string>) => void;
        /**
          * The theme of the select
         */
        "theme"?: string;
        /**
          * The variant of the select
         */
        "variant"?: FormControlLayoutVariant;
    }
    interface MText {
        /**
          * The theme to use
         */
        "theme"?: string;
    }
    interface IntrinsicElements {
        "m-app": MApp;
        "m-badge": MBadge;
        "m-button": MButton;
        "m-card": MCard;
        "m-coupon": MCoupon;
        "m-currency": MCurrency;
        "m-form-check": MFormCheck;
        "m-form-switch": MFormSwitch;
        "m-icon": MIcon;
        "m-input": MInput;
        "m-list-item": MListItem;
        "m-nav": MNav;
        "m-nav-content": MNavContent;
        "m-nav-item": MNavItem;
        "m-nav-link": MNavLink;
        "m-nav-pane": MNavPane;
        "m-quick-action": MQuickAction;
        "m-search": MSearch;
        "m-select": MSelect;
        "m-text": MText;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "m-app": LocalJSX.MApp & JSXBase.HTMLAttributes<HTMLMAppElement>;
            "m-badge": LocalJSX.MBadge & JSXBase.HTMLAttributes<HTMLMBadgeElement>;
            "m-button": LocalJSX.MButton & JSXBase.HTMLAttributes<HTMLMButtonElement>;
            "m-card": LocalJSX.MCard & JSXBase.HTMLAttributes<HTMLMCardElement>;
            "m-coupon": LocalJSX.MCoupon & JSXBase.HTMLAttributes<HTMLMCouponElement>;
            "m-currency": LocalJSX.MCurrency & JSXBase.HTMLAttributes<HTMLMCurrencyElement>;
            "m-form-check": LocalJSX.MFormCheck & JSXBase.HTMLAttributes<HTMLMFormCheckElement>;
            "m-form-switch": LocalJSX.MFormSwitch & JSXBase.HTMLAttributes<HTMLMFormSwitchElement>;
            "m-icon": LocalJSX.MIcon & JSXBase.HTMLAttributes<HTMLMIconElement>;
            "m-input": LocalJSX.MInput & JSXBase.HTMLAttributes<HTMLMInputElement>;
            "m-list-item": LocalJSX.MListItem & JSXBase.HTMLAttributes<HTMLMListItemElement>;
            "m-nav": LocalJSX.MNav & JSXBase.HTMLAttributes<HTMLMNavElement>;
            "m-nav-content": LocalJSX.MNavContent & JSXBase.HTMLAttributes<HTMLMNavContentElement>;
            "m-nav-item": LocalJSX.MNavItem & JSXBase.HTMLAttributes<HTMLMNavItemElement>;
            "m-nav-link": LocalJSX.MNavLink & JSXBase.HTMLAttributes<HTMLMNavLinkElement>;
            "m-nav-pane": LocalJSX.MNavPane & JSXBase.HTMLAttributes<HTMLMNavPaneElement>;
            "m-quick-action": LocalJSX.MQuickAction & JSXBase.HTMLAttributes<HTMLMQuickActionElement>;
            "m-search": LocalJSX.MSearch & JSXBase.HTMLAttributes<HTMLMSearchElement>;
            "m-select": LocalJSX.MSelect & JSXBase.HTMLAttributes<HTMLMSelectElement>;
            "m-text": LocalJSX.MText & JSXBase.HTMLAttributes<HTMLMTextElement>;
        }
    }
}
