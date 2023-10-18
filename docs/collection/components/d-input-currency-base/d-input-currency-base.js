import { h, } from '@stencil/core';
import currency from 'currency.js';
import { PREFIX_BS } from '../../utils';
export class DInputCurrencyBase {
  constructor() {
    /**
     * Emit input and select values when the values change
     */
    this.changeHandler = (event) => {
      event.stopPropagation();
      this.internalValueAsNumber = (event.detail !== '' && typeof event.detail === 'string')
        ? parseFloat(event.detail)
        : undefined;
      this.internalValueAsFormat = this.internalValueAsNumber !== undefined
        ? currency(this.internalValueAsNumber, Object.assign(Object.assign({}, this.currencyOptions), { symbol: '' })).format()
        : '';
      this.eventChange.emit(this.internalValueAsNumber);
    };
    this.blurHandler = (event) => {
      event.stopPropagation();
      this.internalType = 'text';
      this.internalValueAsFormat = this.internalValueAsNumber !== undefined
        ? currency(this.internalValueAsNumber, Object.assign(Object.assign({}, this.currencyOptions), { symbol: '' })).format()
        : '';
      this.eventBlur.emit(this.internalValueAsNumber);
    };
    this.focusHandler = (event) => {
      event.stopPropagation();
      this.internalType = 'number';
      this.internalValueAsFormat = this.internalValueAsNumber !== undefined
        ? currency(this.internalValueAsNumber, Object.assign(Object.assign({}, this.currencyOptions), { symbol: '' })).format()
        : '';
      this.eventFocus.emit(this.internalValueAsNumber);
    };
    this.wheelHandler = (event) => {
      var _a;
      event.stopPropagation();
      (_a = this.htmlInput) === null || _a === void 0 ? void 0 : _a.innerBlur();
    };
    this.innerId = undefined;
    this.name = undefined;
    this.label = '';
    this.labelIcon = undefined;
    this.labelIconFamilyClass = undefined;
    this.labelIconFamilyPrefix = undefined;
    this.placeholder = '';
    this.value = undefined;
    this.isDisabled = false;
    this.isReadOnly = false;
    this.isLoading = false;
    this.iconFamilyClass = undefined;
    this.iconFamilyPrefix = undefined;
    this.iconStart = undefined;
    this.iconStartFamilyClass = undefined;
    this.iconStartFamilyPrefix = undefined;
    this.iconEnd = undefined;
    this.iconEndFamilyClass = undefined;
    this.iconEndFamilyPrefix = undefined;
    this.hint = undefined;
    this.isInvalid = false;
    this.isValid = false;
    this.minValue = undefined;
    this.maxValue = undefined;
    this.currencyOptions = undefined;
    this.currencyCode = undefined;
    this.internalValueAsNumber = undefined;
    this.internalValueAsFormat = undefined;
    this.internalType = 'text';
    this.internalIsInvalid = false;
  }
  watchValueHandler(newValue) {
    this.internalIsInvalid = !this.isValidValue(newValue);
  }
  isValidValue(value) {
    if (value === undefined) {
      return true;
    }
    if (this.internalType === 'number') {
      return ((this.minValue !== undefined ? value >= this.minValue : true)
        && (this.maxValue !== undefined ? value <= this.maxValue : true));
    }
    return true;
  }
  valueAsType() {
    if (this.internalType === 'number') {
      return this.internalValueAsNumber;
    }
    return this.internalValueAsFormat;
  }
  connectedCallback() {
    this.internalValueAsNumber = this.value;
  }
  componentDidLoad() {
    this.internalType = 'text';
    this.internalValueAsFormat = (this.internalValueAsNumber !== undefined)
      ? currency(this.internalValueAsNumber, Object.assign(Object.assign({}, this.currencyOptions), { symbol: '' })).format()
      : '';
  }
  // eslint-disable-next-line class-methods-use-this
  generateStyleVariables() {
    return {
      [`--${PREFIX_BS}input-currency-component-symbol-color`]: `var(--${PREFIX_BS}secondary)`,
      [`--${PREFIX_BS}input-currency-symbol-color`]: `var(--${PREFIX_BS}input-currency-component-symbol-color)`,
    };
  }
  // eslint-disable-next-line class-methods-use-this
  generateSymbolStyleVariables() {
    return { color: `var(--${PREFIX_BS}m-input-currency-symbol-color)` };
  }
  render() {
    return (h("d-input", { ref: (el) => (this.htmlInput = el), style: this.generateStyleVariables(), innerId: this.innerId, name: this.name, label: this.label, labelIcon: this.labelIcon, labelIconFamilyClass: this.labelIconFamilyClass, labelIconFamilyPrefix: this.labelIconFamilyPrefix, placeholder: this.placeholder, value: this.valueAsType(), iconStart: this.iconStart, iconStartFamilyClass: this.iconStartFamilyClass, iconStartFamilyPrefix: this.iconStartFamilyPrefix, iconEnd: this.iconEnd, iconEndFamilyClass: this.iconEndFamilyClass, iconEndFamilyPrefix: this.iconEndFamilyPrefix, isDisabled: this.isDisabled, isReadOnly: this.isReadOnly, isLoading: this.isLoading, hint: this.hint, isInvalid: this.isInvalid, isValid: this.isValid, type: this.internalType, innerInputMode: "decimal", pattern: "^[0-9]", onEventChange: this.changeHandler, onEventBlur: this.blurHandler, onEventFocus: this.focusHandler, onEventWheel: this.wheelHandler }, h("span", { slot: "input-start", style: this.generateSymbolStyleVariables() }, this.currencyCode || this.currencyOptions.symbol)));
  }
  static get is() { return "d-input-currency-base"; }
  static get properties() {
    return {
      "innerId": {
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
          "text": "The id of the input"
        },
        "attribute": "inner-id",
        "reflect": false
      },
      "name": {
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
          "text": "The name of the input"
        },
        "attribute": "name",
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
          "text": "The label text"
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
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Icon for the label text"
        },
        "attribute": "label-icon",
        "reflect": false
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
          "text": "The value of the input"
        },
        "attribute": "value",
        "reflect": false
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
      "isReadOnly": {
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
          "text": "Flag to read only the input"
        },
        "attribute": "is-read-only",
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
      },
      "iconFamilyClass": {
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
        "attribute": "icon-family-class",
        "reflect": false
      },
      "iconFamilyPrefix": {
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
        "attribute": "icon-family-prefix",
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
          "text": "Hint to display"
        },
        "attribute": "hint",
        "reflect": false
      },
      "isInvalid": {
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
          "text": "Add is-invalid class"
        },
        "attribute": "is-invalid",
        "reflect": false,
        "defaultValue": "false"
      },
      "isValid": {
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
          "text": "Add is-valid class"
        },
        "attribute": "is-valid",
        "reflect": false,
        "defaultValue": "false"
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
          "text": "Options for the d-input-currency-base"
        }
      },
      "currencyCode": {
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
          "text": "Currency code"
        },
        "attribute": "currency-code",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "internalValueAsNumber": {},
      "internalValueAsFormat": {},
      "internalType": {},
      "internalIsInvalid": {}
    };
  }
  static get events() {
    return [{
        "method": "eventChange",
        "name": "eventChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the inputs change"
        },
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        }
      }, {
        "method": "eventBlur",
        "name": "eventBlur",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the inputs bur"
        },
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        }
      }, {
        "method": "eventFocus",
        "name": "eventFocus",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the inputs focus"
        },
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        }
      }];
  }
  static get watchers() {
    return [{
        "propName": "value",
        "methodName": "watchValueHandler"
      }];
  }
}
//# sourceMappingURL=d-input-currency-base.js.map
