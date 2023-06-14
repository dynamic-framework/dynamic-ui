import { h, } from '@stencil/core';
import { PREFIX_BS } from '../../utils';
export class MInputPin {
  constructor() {
    // eslint-disable-next-line class-methods-use-this
    this.nextInput = (e) => {
      var _a;
      const input = e.target;
      const regex = new RegExp(this.pattern);
      if (!regex.test(input.value)) {
        input.value = '';
      }
      if (input.value !== '') {
        if (input.nextSibling) {
          (_a = input.nextSibling) === null || _a === void 0 ? void 0 : _a.focus();
        }
        else {
          input.blur();
        }
      }
    };
    // eslint-disable-next-line class-methods-use-this
    this.prevInput = (e) => {
      var _a;
      if (e.key === 'Backspace') {
        const { value } = e.currentTarget;
        const input = e.target;
        if (input.previousSibling && value === '') {
          (_a = input.previousSibling) === null || _a === void 0 ? void 0 : _a.focus();
        }
        else {
          input.blur();
          input.focus();
        }
      }
    };
    // eslint-disable-next-line class-methods-use-this
    this.focusInput = (e) => {
      const input = e.target;
      input.value = '';
      this.mChange.emit('');
    };
    // eslint-disable-next-line class-methods-use-this
    this.wheelInput = (e) => {
      const input = e.target;
      // prevent change the value with the scroll
      input.blur();
    };
    this.formChange = (e) => {
      const form = e.currentTarget;
      const formData = new FormData(form);
      const values = Array.from(formData.values()).join('');
      this.mChange.emit(values);
    };
    // eslint-disable-next-line class-methods-use-this
    this.preventDefaultEvents = (e) => {
      e.preventDefault();
    };
    this.mId = undefined;
    this.label = '';
    this.labelIcon = undefined;
    this.labelIconFamilyClass = undefined;
    this.labelIconFamilyPrefix = undefined;
    this.placeholder = '•';
    this.type = 'text';
    this.isDisabled = false;
    this.isReadOnly = false;
    this.isLoading = false;
    this.isSecret = false;
    this.iconFamilyClass = undefined;
    this.iconFamilyPrefix = undefined;
    this.characters = 4;
    this.mInputMode = 'text';
    this.hint = undefined;
    this.isInvalid = false;
    this.isValid = false;
    this.pattern = undefined;
  }
  watchMTypeHandler(newValue) {
    this.pattern = newValue === 'number' ? '[0-9]+' : '^[a-zA-Z0-9]+$';
  }
  connectedCallback() {
    this.pattern = this.type === 'number' ? '[0-9]+' : '^[a-zA-Z0-9]+$';
  }
  render() {
    return (h("div", { class: "m-input-pin" }, this.label && (h("label", { htmlFor: "pinIndex0" }, this.label, this.labelIcon && (h("m-icon", { class: "m-input-pin-icon", icon: this.labelIcon, size: `var(--${PREFIX_BS}m-input-label-font-size)`, familyClass: this.labelIconFamilyClass, familyPrefix: this.labelIconFamilyPrefix })))), h("form", { id: this.mId, class: "m-input-pin-controls", onInput: this.formChange, onSubmit: this.preventDefaultEvents }, Array.from({ length: this.characters }).map((_, index) => (h("input", Object.assign({ class: {
        'form-control': true,
        'is-invalid': this.isInvalid,
        'is-valid': this.isValid,
      }, type: this.isSecret ? 'password' : this.type, "aria-describedby": `${this.mId}State`, inputMode: this.mInputMode, id: `pinIndex${index}`, name: `pin-${index}`, maxLength: 1, onInput: this.nextInput, onKeyDown: this.prevInput, onFocus: this.focusInput, onWheel: this.wheelInput, onClick: this.preventDefaultEvents, autocomplete: "off", placeholder: this.placeholder, disabled: this.isDisabled || this.isLoading, required: true }, this.type === 'number' && ({
      min: 0,
      max: 9,
    }))))), ((this.isInvalid || this.isValid) && !this.isLoading) && (h("span", { class: "input-group-text", id: `${this.mId}State` }, h("m-icon", { class: "m-input-pin-validation-icon", icon: this.isInvalid ? 'exclamation-circle' : 'check', familyClass: this.iconFamilyClass, familyPrefix: this.iconFamilyPrefix }))), this.isLoading && (h("div", { class: "input-group-text m-input-pin-icon" }, h("span", { class: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true" }, h("span", { class: "visually-hidden" }, "Loading..."))))), this.hint && (h("div", { class: "form-text", id: `${this.mId}Hint` }, this.hint))));
  }
  static get is() { return "m-input-pin"; }
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
          "text": "Icon label family prefix"
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
          "text": "Placeholder of the inputs"
        },
        "attribute": "placeholder",
        "reflect": false,
        "defaultValue": "'\u2022'"
      },
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "PinInputType",
          "resolved": "\"number\" | \"tel\" | \"text\"",
          "references": {
            "PinInputType": {
              "location": "import",
              "path": "./m-input-pin-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Type of the inputs"
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "'text'"
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
          "text": "Flag to disable the input"
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
      "isSecret": {
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
          "text": "Hide the characters"
        },
        "attribute": "is-secret",
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
      "characters": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Number of characters of the pin"
        },
        "attribute": "characters",
        "reflect": false,
        "defaultValue": "4"
      },
      "mInputMode": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "PinInputMode",
          "resolved": "\"numeric\" | \"tel\" | \"text\"",
          "references": {
            "PinInputMode": {
              "location": "import",
              "path": "./m-input-pin-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Keyboard style"
        },
        "attribute": "m-input-mode",
        "reflect": false,
        "defaultValue": "'text'"
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
          "text": "Hint for the m-coupon"
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
      }
    };
  }
  static get states() {
    return {
      "pattern": {}
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
          "text": "Emitted when the inputs had changed"
        },
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        }
      }];
  }
  static get watchers() {
    return [{
        "propName": "type",
        "methodName": "watchMTypeHandler"
      }];
  }
}
//# sourceMappingURL=m-input-pin.js.map
