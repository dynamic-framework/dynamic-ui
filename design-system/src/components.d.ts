/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { AlertAction } from "./components/m-alert/m-alert-interface";
import { ButtonType, ButtonVariant } from "./components/m-button/m-button-interface";
import { InputState } from "./utils/component-interface";
import { FormCheckState, FormCheckType } from "./components/m-form-check/m-form-check-interface";
import { ListItemVariant, NavegableProps, SelectableProps } from "./components/m-list-item/m-list-item-interface";
export namespace Components {
    interface MAlert {
        /**
          * the action buttons
         */
        "actions": AlertAction[];
        /**
          * the body of alert render on top of the slot
         */
        "body": string;
        /**
          * The header text
         */
        "header": string;
        /**
          * The theme to use.
         */
        "theme": string;
    }
    interface MAlertAction {
        /**
          * The action to perform when the button is clicked.
         */
        "action": AlertAction;
    }
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
    interface MFormCheck {
        /**
          * Checkbox is checked
         */
        "checked": boolean;
        /**
          * Disabled state
         */
        "disabled": boolean;
        /**
          * If checkbox is indeterminated
         */
        "indeterminate"?: boolean;
        /**
          * The text to display in the switch.
         */
        "label": null;
        /**
          * Label identifier
         */
        "mId": string;
        /**
          * The text to display in the switch.
         */
        "name"?: string;
        /**
          * State of checkbox: Succeess, Error, Warning, Loading
         */
        "state"?: FormCheckState;
        /**
          * The text to display in the switch.
         */
        "type": FormCheckType;
    }
    interface MInput {
        /**
          * Flag to disable the input
         */
        "disabled": boolean;
        /**
          * The label text
         */
        "label": string;
        /**
          * The id of the input
         */
        "modId": string;
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
    interface MSwitch {
        /**
          * The text to display in the switch.
         */
        "label": string;
    }
    interface MText {
        /**
          * The theme to use
         */
        "theme": string;
    }
}
declare global {
    interface HTMLMAlertElement extends Components.MAlert, HTMLStencilElement {
    }
    var HTMLMAlertElement: {
        prototype: HTMLMAlertElement;
        new (): HTMLMAlertElement;
    };
    interface HTMLMAlertActionElement extends Components.MAlertAction, HTMLStencilElement {
    }
    var HTMLMAlertActionElement: {
        prototype: HTMLMAlertActionElement;
        new (): HTMLMAlertActionElement;
    };
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
    interface HTMLMFormCheckElement extends Components.MFormCheck, HTMLStencilElement {
    }
    var HTMLMFormCheckElement: {
        prototype: HTMLMFormCheckElement;
        new (): HTMLMFormCheckElement;
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
    interface HTMLMSwitchElement extends Components.MSwitch, HTMLStencilElement {
    }
    var HTMLMSwitchElement: {
        prototype: HTMLMSwitchElement;
        new (): HTMLMSwitchElement;
    };
    interface HTMLMTextElement extends Components.MText, HTMLStencilElement {
    }
    var HTMLMTextElement: {
        prototype: HTMLMTextElement;
        new (): HTMLMTextElement;
    };
    interface HTMLElementTagNameMap {
        "m-alert": HTMLMAlertElement;
        "m-alert-action": HTMLMAlertActionElement;
        "m-app": HTMLMAppElement;
        "m-badge": HTMLMBadgeElement;
        "m-button": HTMLMButtonElement;
        "m-card": HTMLMCardElement;
        "m-form-check": HTMLMFormCheckElement;
        "m-input": HTMLMInputElement;
        "m-list-item": HTMLMListItemElement;
        "m-switch": HTMLMSwitchElement;
        "m-text": HTMLMTextElement;
    }
}
declare namespace LocalJSX {
    interface MAlert {
        /**
          * the action buttons
         */
        "actions"?: AlertAction[];
        /**
          * the body of alert render on top of the slot
         */
        "body"?: string;
        /**
          * The header text
         */
        "header"?: string;
        /**
          * Emitted when the action button is clicked.
         */
        "onModActionClick"?: (event: CustomEvent<AlertAction>) => void;
        /**
          * The theme to use.
         */
        "theme"?: string;
    }
    interface MAlertAction {
        /**
          * The action to perform when the button is clicked.
         */
        "action": AlertAction;
        /**
          * Emitted when the action button is clicked.
         */
        "onModClick"?: (event: CustomEvent<AlertAction>) => void;
    }
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
          * Flag to switch to pill button border radius.
         */
        "isPill"?: boolean;
        /**
          * Emitted when the button has been clicked.
         */
        "onMButtonClick"?: (event: CustomEvent<any>) => void;
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
    interface MFormCheck {
        /**
          * Checkbox is checked
         */
        "checked"?: boolean;
        /**
          * Disabled state
         */
        "disabled"?: boolean;
        /**
          * If checkbox is indeterminated
         */
        "indeterminate"?: boolean;
        /**
          * The text to display in the switch.
         */
        "label"?: null;
        /**
          * Label identifier
         */
        "mId": string;
        /**
          * The text to display in the switch.
         */
        "name"?: string;
        /**
          * State of checkbox: Succeess, Error, Warning, Loading
         */
        "state"?: FormCheckState;
        /**
          * The text to display in the switch.
         */
        "type": FormCheckType;
    }
    interface MInput {
        /**
          * Flag to disable the input
         */
        "disabled"?: boolean;
        /**
          * The label text
         */
        "label"?: string;
        /**
          * The id of the input
         */
        "modId"?: string;
        /**
          * Emitted when the input value has changed
         */
        "onModChange"?: (event: CustomEvent<string>) => void;
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
    interface MSwitch {
        /**
          * The text to display in the switch.
         */
        "label"?: string;
    }
    interface MText {
        /**
          * The theme to use
         */
        "theme"?: string;
    }
    interface IntrinsicElements {
        "m-alert": MAlert;
        "m-alert-action": MAlertAction;
        "m-app": MApp;
        "m-badge": MBadge;
        "m-button": MButton;
        "m-card": MCard;
        "m-form-check": MFormCheck;
        "m-input": MInput;
        "m-list-item": MListItem;
        "m-switch": MSwitch;
        "m-text": MText;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "m-alert": LocalJSX.MAlert & JSXBase.HTMLAttributes<HTMLMAlertElement>;
            "m-alert-action": LocalJSX.MAlertAction & JSXBase.HTMLAttributes<HTMLMAlertActionElement>;
            "m-app": LocalJSX.MApp & JSXBase.HTMLAttributes<HTMLMAppElement>;
            "m-badge": LocalJSX.MBadge & JSXBase.HTMLAttributes<HTMLMBadgeElement>;
            "m-button": LocalJSX.MButton & JSXBase.HTMLAttributes<HTMLMButtonElement>;
            "m-card": LocalJSX.MCard & JSXBase.HTMLAttributes<HTMLMCardElement>;
            "m-form-check": LocalJSX.MFormCheck & JSXBase.HTMLAttributes<HTMLMFormCheckElement>;
            "m-input": LocalJSX.MInput & JSXBase.HTMLAttributes<HTMLMInputElement>;
            "m-list-item": LocalJSX.MListItem & JSXBase.HTMLAttributes<HTMLMListItemElement>;
            "m-switch": LocalJSX.MSwitch & JSXBase.HTMLAttributes<HTMLMSwitchElement>;
            "m-text": LocalJSX.MText & JSXBase.HTMLAttributes<HTMLMTextElement>;
        }
    }
}
