import { Host, h, } from '@stencil/core';
export class MPin {
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
    this.labelIcon = 'info-circle';
    this.labelIconFamilyClass = undefined;
    this.labelIconFamilyPrefix = undefined;
    this.iconStart = undefined;
    this.iconStartFamilyClass = undefined;
    this.iconStartFamilyPrefix = undefined;
    this.iconEnd = undefined;
    this.iconEndFamilyClass = undefined;
    this.iconEndFamilyPrefix = undefined;
    this.isLoading = false;
    this.characters = 4;
    this.isSecret = false;
    this.isDisabled = false;
    this.mInputMode = 'text';
    this.type = 'text';
    this.placeholder = '•';
    this.theme = undefined;
    this.hint = undefined;
    this.hintIconStart = undefined;
    this.hintIconStartFamilyClass = undefined;
    this.hintIconStartFamilyPrefix = undefined;
    this.hintIconEnd = undefined;
    this.hintIconEndFamilyClass = undefined;
    this.hintIconEndFamilyPrefix = undefined;
    this.internalTheme = undefined;
    this.pattern = undefined;
  }
  watchThemeHandler(newValue) {
    this.internalTheme = newValue;
  }
  watchMTypeHandler(newValue) {
    this.pattern = newValue === 'number' ? '[0-9]+' : '^[a-zA-Z0-9]+$';
  }
  generateHostClasses() {
    return {
      'form-control-layout form-control-layout-pin': true,
      [`form-control-theme-${this.internalTheme}`]: !!this.internalTheme,
    };
  }
  connectedCallback() {
    this.internalTheme = this.theme;
    this.pattern = this.type === 'number' ? '[0-9]+' : '^[a-zA-Z0-9]+$';
  }
  render() {
    return (h(Host, { class: this.generateHostClasses() }, this.label && (h("label", { htmlFor: "pin-index-0" }, this.label, this.labelIcon && (h("m-icon", { class: "form-control-icon", icon: this.labelIcon, familyClass: this.labelIconFamilyClass, familyPrefix: this.labelIconFamilyPrefix })))), h("form", { id: this.mId, class: "form-control-input", onInput: this.formChange, onSubmit: this.preventDefaultEvents }, this.iconStart && (h("span", { class: "input-group-text", id: `${this.mId}-start` }, this.iconStart && (h("m-icon", { class: "form-control-icon", icon: this.iconStart, familyClass: this.iconStartFamilyClass, familyPrefix: this.iconStartFamilyPrefix })))), Array.from({ length: this.characters }).map((_, index) => (h("input", Object.assign({ class: "pin-item", type: this.isSecret ? 'password' : this.type, inputMode: this.mInputMode, id: `pin-index-${index}`, name: `pin-${index}`, maxLength: 1, onInput: this.nextInput, onKeyDown: this.prevInput, onFocus: this.focusInput, onWheel: this.wheelInput, onClick: this.preventDefaultEvents, autocomplete: "off", placeholder: this.placeholder, disabled: this.isDisabled || this.isLoading, required: true }, this.type === 'number' && ({
      min: 0,
      max: 9,
    }))))), (this.iconEnd && !this.isLoading) && (h("span", { class: "input-group-text", id: `${this.mId}-end` }, h("m-icon", { class: "form-control-icon icon-end", icon: this.iconEnd, familyClass: this.iconEndFamilyClass, familyPrefix: this.iconEndFamilyPrefix }))), this.isLoading && (h("div", { class: "input-group-text form-control-icon" }, h("span", { class: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true" }, h("span", { class: "visually-hidden" }, "Loading..."))))), this.hint && (h("m-hint", Object.assign({ text: this.hint, theme: this.theme === 'danger' || this.theme === 'tertiary' || this.theme === 'warning' ? this.theme : undefined }, (this.hintIconStart && ({
      iconStart: this.hintIconStart,
      iconStartFamilyClass: this.hintIconStartFamilyClass,
      iconStartFamilyPrefix: this.hintIconStartFamilyPrefix,
    })), (this.hintIconEnd && ({
      iconEnd: this.hintIconEnd,
      iconEndFamilyClass: this.hintIconEndFamilyClass,
      iconEndFamilyPrefix: this.hintIconEndFamilyPrefix,
    })))))));
  }
  static get is() { return "m-pin"; }
  static get originalStyleUrls() {
    return {
      "$": ["m-pin.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["m-pin.css"]
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
          "text": "Icon of the left"
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
          "text": "Icon of the end"
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
          "text": "Disable the inputs"
        },
        "attribute": "is-disabled",
        "reflect": false,
        "defaultValue": "false"
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
              "path": "./m-pin-interface"
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
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "PinInputType",
          "resolved": "\"number\" | \"tel\" | \"text\"",
          "references": {
            "PinInputType": {
              "location": "import",
              "path": "./m-pin-interface"
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
          "text": "Theme for inputs"
        },
        "attribute": "theme",
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
          "text": "Hint for the m-coupon"
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
      }
    };
  }
  static get states() {
    return {
      "internalTheme": {},
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
        "propName": "theme",
        "methodName": "watchThemeHandler"
      }, {
        "propName": "type",
        "methodName": "watchMTypeHandler"
      }];
  }
}
