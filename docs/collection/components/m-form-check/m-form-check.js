import { Host, h, } from '@stencil/core';
export class MFormCheck {
  constructor() {
    this.changeHandler = (event) => {
      const { checked, value } = event.target;
      this.mChange.emit({
        isChecked: checked,
        value,
      });
    };
    this.type = undefined;
    this.name = undefined;
    this.label = undefined;
    this.isChecked = false;
    this.mId = undefined;
    this.isDisabled = false;
    this.state = undefined;
    this.isIndeterminate = undefined;
    this.value = undefined;
    this.isButton = false;
  }
  generateClasses() {
    return {
      'form-check-input': !this.isButton,
      [`form-check-input-${this.state}`]: !!this.state && !this.isButton,
      'form-check-box-input': this.isButton,
    };
  }
  render() {
    return (h(Host, { class: "form-check-box" }, this.label ? (h("div", { class: this.isButton ? '' : 'form-check' }, h("input", { onChange: (event) => this.changeHandler(event), class: this.generateClasses(), type: this.type, name: this.name, id: this.mId, value: this.value, checked: this.isChecked, disabled: this.isDisabled, indeterminate: this.isIndeterminate }), h("label", { class: this.isButton ? 'form-check-box-label' : 'form-check-label', htmlFor: this.mId }, this.label))) : (h("input", { onChange: (event) => this.changeHandler(event), class: this.generateClasses(), type: this.type, name: this.name, id: this.mId, value: this.value, checked: this.isChecked, disabled: this.isDisabled, indeterminate: this.isIndeterminate }))));
  }
  static get is() { return "m-form-check"; }
  static get originalStyleUrls() {
    return {
      "$": ["m-form-check.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["m-form-check.css"]
    };
  }
  static get properties() {
    return {
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "FormCheckType",
          "resolved": "\"checkbox\" | \"radio\"",
          "references": {
            "FormCheckType": {
              "location": "import",
              "path": "./m-form-check-interface"
            }
          }
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Set whether is a checkbox input or a radio input"
        },
        "attribute": "type",
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
          "text": "HTML Name to use within a form or JS reference"
        },
        "attribute": "name",
        "reflect": false
      },
      "label": {
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
          "text": "Text that will be displayed beside Check input or Radio input"
        },
        "attribute": "label",
        "reflect": false
      },
      "isChecked": {
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
          "text": "Set checkbox or radio button marked as selected or not"
        },
        "attribute": "is-checked",
        "reflect": false,
        "defaultValue": "false"
      },
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
          "text": "Form control identifier"
        },
        "attribute": "m-id",
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
          "text": "Set input as disabled"
        },
        "attribute": "is-disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "state": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "FormCheckState",
          "resolved": "\"error\" | \"indeterminate\" | \"loading\" | \"success\" | \"warning\" | undefined",
          "references": {
            "FormCheckState": {
              "location": "import",
              "path": "./m-form-check-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "State of checkbox or radio. The states could be:\nSuccess state\nError state\nWarning state\nLoading state"
        },
        "attribute": "state",
        "reflect": false
      },
      "isIndeterminate": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Set view of checkbox as indeterminated"
        },
        "attribute": "is-indeterminate",
        "reflect": false
      },
      "value": {
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
          "text": "A string representing the value of the checkbox or radio"
        },
        "attribute": "value",
        "reflect": false
      },
      "isButton": {
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
          "text": "Set checkbox as toggle button"
        },
        "attribute": "is-button",
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
          "text": "Emitted when the switch has changed"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
}
