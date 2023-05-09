import { h, Host, } from '@stencil/core';
import currency from 'currency.js';
export class MCurrencyBase {
  constructor() {
    /**
     * Emit input and select values when the values change
     */
    this.changeHandler = () => {
      var _a;
      this.mChange.emit({
        amount: (this.htmlInput && this.htmlInput.value)
          ? parseFloat(this.htmlInput.value)
          : undefined,
        currency: (_a = this.htmlSelect) === null || _a === void 0 ? void 0 : _a.value,
      });
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.onBlurEvent = (event) => {
      if (!Number.isNaN(event.target.valueAsNumber)) {
        this.internalValue = event.target.valueAsNumber;
      }
      else {
        this.internalValue = undefined;
      }
      this.htmlInput.setAttribute('type', 'text');
      this.htmlInput.value = this.internalValue !== undefined
        ? currency(this.internalValue, this.currencyOptions).format()
        : '';
    };
    this.onFocusEvent = () => {
      this.htmlInput.setAttribute('type', 'number');
      if (this.internalValue !== undefined) {
        this.htmlInput.value = `${this.internalValue}`;
      }
    };
    this.onWheelEvent = () => {
      this.htmlInput.blur();
    };
    this.mId = undefined;
    this.label = '';
    this.labelIcon = 'info-circle';
    this.labelIconFamilyClass = undefined;
    this.labelIconFamilyPrefix = undefined;
    this.iconStart = undefined;
    this.iconStartFamilyClass = undefined;
    this.iconStartFamilyPrefix = undefined;
    this.iconMiddle = undefined;
    this.iconMiddleFamilyClass = undefined;
    this.iconMiddleFamilyPrefix = undefined;
    this.iconEnd = undefined;
    this.iconEndFamilyClass = undefined;
    this.iconEndFamilyPrefix = undefined;
    this.selectOptions = [];
    this.valueExtractor = (item) => item === null || item === void 0 ? void 0 : item.value;
    this.labelExtractor = (item) => item === null || item === void 0 ? void 0 : item.label;
    this.placeholder = '';
    this.value = undefined;
    this.minValue = undefined;
    this.maxValue = undefined;
    this.hint = undefined;
    this.hintIconStart = undefined;
    this.hintIconStartFamilyClass = undefined;
    this.hintIconStartFamilyPrefix = undefined;
    this.hintIconEnd = undefined;
    this.hintIconEndFamilyClass = undefined;
    this.hintIconEndFamilyPrefix = undefined;
    this.theme = undefined;
    this.variant = undefined;
    this.currencyOptions = undefined;
    this.layoutDirection = 'vertical';
    this.isDisabled = false;
    this.isLoading = false;
    this.internalTheme = undefined;
    this.internalValue = undefined;
  }
  watchValueHandler(newValue) {
    if (!this.isValid(newValue)) {
      this.internalTheme = 'danger';
      return;
    }
    this.internalTheme = this.theme;
  }
  watchThemeHandler(newValue) {
    this.internalTheme = newValue;
  }
  isValid(value) {
    if (value === undefined) {
      return true;
    }
    if (this.htmlInput.getAttribute('type') === 'number') {
      return ((this.minValue !== undefined ? value >= this.minValue : true)
        && (this.maxValue !== undefined ? value <= this.maxValue : true));
    }
    return true;
  }
  generateHostClasses() {
    return {
      'form-control-layout form-control-layout-currency': true,
      [`form-control-theme-${this.internalTheme}`]: !!this.internalTheme,
      [`form-control-layout-currency-${this.variant}`]: !!this.variant,
      'form-control-layout-horizontal': this.layoutDirection === 'horizontal',
    };
  }
  connectedCallback() {
    this.internalTheme = this.theme;
    this.internalValue = this.value;
  }
  componentDidLoad() {
    this.htmlInput.setAttribute('type', 'text');
    if (this.internalValue !== undefined && !Number.isNaN(this.internalValue)) {
      this.htmlInput.value = currency(this.internalValue, this.currencyOptions).format();
    }
    else {
      this.htmlInput.value = '';
    }
  }
  render() {
    return (h(Host, { class: this.generateHostClasses() }, this.label && (h("label", { htmlFor: this.mId }, this.label, h("m-icon", { class: "form-control-icon", icon: this.labelIcon, familyClass: this.labelIconFamilyClass, familyPrefix: this.labelIconFamilyPrefix }))), h("div", { class: "form-control-input" }, h("div", { class: {
        'input-group': true,
        disabled: this.isDisabled || this.isLoading,
      } }, this.iconStart && (h("span", { class: "input-group-text", id: `${this.mId}-start` }, h("m-icon", { class: "form-control-icon", icon: this.iconStart, familyClass: this.iconStartFamilyClass, familyPrefix: this.iconStartFamilyPrefix }))), this.selectOptions.length > 0 && (h("select", {
      // eslint-disable-next-line no-return-assign
      ref: (el) => (this.htmlSelect = el), class: "form-select", disabled: this.isDisabled || this.isLoading, onInput: this.changeHandler
    }, this.selectOptions.map((opt) => (h("option", { value: this.valueExtractor(opt) }, this.labelExtractor(opt)))))), h("input", {
      // eslint-disable-next-line no-return-assign
      ref: (el) => (this.htmlInput = el), id: this.mId, type: "number", disabled: this.isDisabled || this.isLoading, min: this.minValue, max: this.maxValue, class: "form-control", value: this.value, placeholder: this.placeholder
        ? this.placeholder
        : currency(0, this.currencyOptions).format(), "aria-label": this.label, "aria-describedby": `${this.mId}-add`, onInput: this.changeHandler, onBlur: this.onBlurEvent, onFocus: this.onFocusEvent, onWheel: this.onWheelEvent
    }), this.iconMiddle && (h("span", { class: "input-group-text", id: `${this.mId}-middle` }, h("m-icon", { class: "form-control-icon", icon: this.iconMiddle, familyClass: this.iconMiddleFamilyClass, familyPrefix: this.iconMiddleFamilyPrefix }))), (this.iconEnd && !this.isLoading) && (h("span", { class: "input-group-text", id: `${this.mId}-end` }, h("m-icon", { class: "form-control-icon", icon: this.iconEnd, familyClass: this.iconEndFamilyClass, familyPrefix: this.iconEndFamilyPrefix }))), this.isLoading && (h("div", { class: "form-control-icon" }, h("span", { class: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true" }, h("span", { class: "visually-hidden" }, "Loading..."))))), this.hint && (h("m-hint", Object.assign({ text: this.hint }, (this.hintIconStart && ({
      iconStart: this.hintIconStart,
      iconStartFamilyClass: this.hintIconStartFamilyClass,
      iconStartFamilyPrefix: this.hintIconStartFamilyPrefix,
    })), (this.hintIconEnd && ({
      iconEnd: this.hintIconEnd,
      iconEndFamilyClass: this.hintIconEndFamilyClass,
      iconEndFamilyPrefix: this.hintIconEndFamilyPrefix,
    }))))))));
  }
  static get is() { return "m-currency-base"; }
  static get originalStyleUrls() {
    return {
      "$": ["m-currency-base.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["m-currency-base.css"]
    };
  }
  static get properties() {
    return {
      "mId": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Id for the input"
        },
        "attribute": "m-id",
        "reflect": false
      },
      "label": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Label for the input"
        },
        "attribute": "label",
        "reflect": false,
        "defaultValue": "''"
      },
      "labelIcon": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Icon for the label text"
        },
        "attribute": "label-icon",
        "reflect": false,
        "defaultValue": "'info-circle'"
      },
      "labelIconFamilyClass": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Icon label family class"
        },
        "attribute": "label-icon-family-class",
        "reflect": false
      },
      "labelIconFamilyPrefix": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Icon label family class"
        },
        "attribute": "label-icon-family-prefix",
        "reflect": false
      },
      "iconStart": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Icon for the left"
        },
        "attribute": "icon-start",
        "reflect": false
      },
      "iconStartFamilyClass": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Left icon family class"
        },
        "attribute": "icon-start-family-class",
        "reflect": false
      },
      "iconStartFamilyPrefix": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Left icon family class"
        },
        "attribute": "icon-start-family-prefix",
        "reflect": false
      },
      "iconMiddle": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Icon for the middle"
        },
        "attribute": "icon-middle",
        "reflect": false
      },
      "iconMiddleFamilyClass": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Middle icon family class"
        },
        "attribute": "icon-middle-family-class",
        "reflect": false
      },
      "iconMiddleFamilyPrefix": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Middle icon family class"
        },
        "attribute": "icon-middle-family-prefix",
        "reflect": false
      },
      "iconEnd": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Icon for the end"
        },
        "attribute": "icon-end",
        "reflect": false
      },
      "iconEndFamilyClass": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Right icon family class"
        },
        "attribute": "icon-end-family-class",
        "reflect": false
      },
      "iconEndFamilyPrefix": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Right icon family class"
        },
        "attribute": "icon-end-family-prefix",
        "reflect": false
      },
      "selectOptions": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "Array<any>",
          "resolved": "any[]",
          "references": {
            "Array": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Select options"
        },
        "defaultValue": "[]"
      },
      "valueExtractor": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "(item: any) => string | number",
          "resolved": "(item: any) => string | number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Callback to extract the value from the option"
        },
        "defaultValue": "(item) => item?.value"
      },
      "labelExtractor": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "(item: any) => string",
          "resolved": "(item: any) => string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Callback to extract the label from the option"
        },
        "defaultValue": "(item) => item?.label"
      },
      "placeholder": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Placeholder for the input"
        },
        "attribute": "placeholder",
        "reflect": false,
        "defaultValue": "''"
      },
      "value": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "* The value of the input"
        },
        "attribute": "value",
        "reflect": false
      },
      "minValue": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "* The min value of the input"
        },
        "attribute": "min-value",
        "reflect": false
      },
      "maxValue": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "* The max value of the input"
        },
        "attribute": "max-value",
        "reflect": false
      },
      "hint": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Hint text for the m-currency-base"
        },
        "attribute": "hint",
        "reflect": false
      },
      "hintIconStart": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Icon start for the hint text"
        },
        "attribute": "hint-icon-start",
        "reflect": false
      },
      "hintIconStartFamilyClass": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Hint left icon family class"
        },
        "attribute": "hint-icon-start-family-class",
        "reflect": false
      },
      "hintIconStartFamilyPrefix": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Hint left icon family class"
        },
        "attribute": "hint-icon-start-family-prefix",
        "reflect": false
      },
      "hintIconEnd": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Icon end for the hint text"
        },
        "attribute": "hint-icon-end",
        "reflect": false
      },
      "hintIconEndFamilyClass": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Hint right icon family class"
        },
        "attribute": "hint-icon-end-family-class",
        "reflect": false
      },
      "hintIconEndFamilyPrefix": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Hint right icon family class"
        },
        "attribute": "hint-icon-end-family-prefix",
        "reflect": false
      },
      "theme": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Theme for the m-currency-base"
        },
        "attribute": "theme",
        "reflect": false
      },
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "CurrencyVariant",
          "resolved": "\"prime\" | undefined",
          "references": {
            "CurrencyVariant": {
              "location": "import",
              "path": "./m-currency-base-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Variant for the m-currency-base"
        },
        "attribute": "variant",
        "reflect": false
      },
      "currencyOptions": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "Options",
          "resolved": "Options",
          "references": {
            "Options": {
              "location": "import",
              "path": "currency.js"
            }
          }
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Options for the m-currency-base"
        }
      },
      "layoutDirection": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "FormControlLayoutDirection",
          "resolved": "\"horizontal\" | \"vertical\"",
          "references": {
            "FormControlLayoutDirection": {
              "location": "import",
              "path": "../../utils/component-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Change the layout direction to put the label on top or left of input"
        },
        "attribute": "layout-direction",
        "reflect": false,
        "defaultValue": "'vertical'"
      },
      "isDisabled": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The input is disabled"
        },
        "attribute": "is-disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "isLoading": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Flag for loading state."
        },
        "attribute": "is-loading",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "internalTheme": {},
      "internalValue": {}
    };
  }
  static get events() {
    return [{
        "method": "mChange",
        "name": "mChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the inputs change"
        },
        "complexType": {
          "original": "CurrencyEvent",
          "resolved": "{ amount: number | undefined; currency: string | undefined; }",
          "references": {
            "CurrencyEvent": {
              "location": "import",
              "path": "./m-currency-base-interface"
            }
          }
        }
      }];
  }
  static get watchers() {
    return [{
        "propName": "value",
        "methodName": "watchValueHandler"
      }, {
        "propName": "theme",
        "methodName": "watchThemeHandler"
      }];
  }
}
