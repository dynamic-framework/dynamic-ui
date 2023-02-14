import { h, Host, } from '@stencil/core';
export class MInput {
  constructor() {
    this.changeHandler = (event) => {
      this.mChange.emit(event.target.value);
    };
    this.blurHandler = (event) => {
      this.mBlur.emit(event);
    };
    this.mId = undefined;
    this.name = undefined;
    this.label = '';
    this.labelIcon = 'info-circle';
    this.labelIconFamilyClass = undefined;
    this.labelIconFamilyPrefix = undefined;
    this.placeholder = '';
    this.type = 'text';
    this.value = '';
    this.isDisabled = false;
    this.isLoading = false;
    this.iconStart = undefined;
    this.iconStartFamilyClass = undefined;
    this.iconStartFamilyPrefix = undefined;
    this.iconEnd = undefined;
    this.iconEndFamilyClass = undefined;
    this.iconEndFamilyPrefix = undefined;
    this.hint = undefined;
    this.hintIconStart = undefined;
    this.hintIconStartFamilyClass = undefined;
    this.hintIconStartFamilyPrefix = undefined;
    this.hintIconEnd = undefined;
    this.hintIconEndFamilyClass = undefined;
    this.hintIconEndFamilyPrefix = undefined;
    this.layoutDirection = 'vertical';
    this.isInvalid = false;
  }
  generateHostClasses() {
    return {
      'form-control-layout': true,
      'form-control-layout-horizontal': this.layoutDirection === 'horizontal',
    };
  }
  render() {
    return (h(Host, { class: this.generateHostClasses() }, this.label && (h("label", { htmlFor: this.mId }, this.label, this.labelIcon && (h("m-icon", { class: "form-control-icon", icon: this.labelIcon, familyClass: this.labelIconFamilyClass, familyPrefix: this.labelIconFamilyPrefix })))), h("div", { class: "form-control-input" }, h("div", { class: {
        'input-group': true,
        'has-validation': this.isInvalid,
        disabled: this.isDisabled || this.isLoading,
      } }, this.iconStart && (h("span", { class: "input-group-text", id: `${this.mId}-start` }, this.iconStart && (h("m-icon", { class: "form-control-icon", icon: this.iconStart, familyClass: this.iconStartFamilyClass, familyPrefix: this.iconStartFamilyPrefix })))), h("input", { id: this.mId, name: this.name, type: this.type, class: {
        'form-control': true,
        'is-invalid': this.isInvalid,
      }, placeholder: this.placeholder, "aria-label": this.label, disabled: this.isDisabled || this.isLoading, value: this.value, "aria-describedby": `${this.mId}-add`, onInput: this.changeHandler, onBlur: this.blurHandler }), (this.iconEnd && !this.isLoading) && (h("span", { class: "input-group-text", id: `${this.mId}-end` }, this.iconEnd && (h("m-icon", { class: "form-control-icon", icon: this.iconEnd, familyClass: this.iconEndFamilyClass, familyPrefix: this.iconEndFamilyPrefix })))), this.isLoading && (h("div", { class: "input-group-text form-control-icon" }, h("span", { class: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true" }, h("span", { class: "visually-hidden" }, "Loading..."))))), this.hint && (h("small", { class: "hint" }, this.hintIconStart && (h("m-icon", { class: "form-control-icon", icon: this.hintIconStart, familyClass: this.hintIconStartFamilyClass, familyPrefix: this.hintIconStartFamilyPrefix })), this.hint, this.hintIconEnd && (h("m-icon", { class: "form-control-icon", icon: this.hintIconEnd, familyClass: this.hintIconEndFamilyClass, familyPrefix: this.hintIconEndFamilyPrefix })))))));
  }
  static get is() { return "m-input"; }
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
          "text": "The id of the input"
        },
        "attribute": "m-id",
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
      "placeholder": {
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
          "text": "The placeholder text"
        },
        "attribute": "placeholder",
        "reflect": false,
        "defaultValue": "''"
      },
      "type": {
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
          "text": "The type of the input"
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "'text'"
      },
      "value": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "string | number",
          "resolved": "number | string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The value of the input"
        },
        "attribute": "value",
        "reflect": false,
        "defaultValue": "''"
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
          "text": "Icon to display on input left"
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
          "text": "Icon to display on input right"
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
          "text": "Hint to display, also used to display validity feedback"
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
          "text": "Icon to display on hint left"
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
          "text": "Icon to display on hint right"
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
      }
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
          "text": "Emitted when the input value has changed"
        },
        "complexType": {
          "original": "string | number",
          "resolved": "number | string",
          "references": {}
        }
      }, {
        "method": "mBlur",
        "name": "mBlur",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when blur the input"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
}
