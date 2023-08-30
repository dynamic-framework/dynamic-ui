import { h, } from '@stencil/core';
export class DInputCheck {
  constructor() {
    this.changeHandler = (event) => {
      const { checked, value } = event.target;
      this.eventChange.emit({
        isChecked: checked,
        value,
      });
    };
    this.type = undefined;
    this.name = undefined;
    this.label = undefined;
    this.isChecked = false;
    this.innerId = undefined;
    this.isDisabled = false;
    this.isIndeterminate = undefined;
    this.value = undefined;
  }
  render() {
    if (!this.label) {
      return (h("input", { onChange: this.changeHandler, class: "form-check-input", type: this.type, name: this.name, id: this.innerId, value: this.value, checked: this.isChecked, disabled: this.isDisabled, indeterminate: this.isIndeterminate }));
    }
    return (h("div", { class: "form-check" }, h("input", { onChange: this.changeHandler, class: "form-check-input", type: this.type, name: this.name, id: this.innerId, value: this.value, checked: this.isChecked, disabled: this.isDisabled, indeterminate: this.isIndeterminate }), h("label", { class: "form-check-label", htmlFor: this.innerId }, this.label)));
  }
  static get is() { return "d-input-check"; }
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
              "path": "./d-input-check-interface"
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
          "text": "Form control identifier"
        },
        "attribute": "inner-id",
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
      }
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
//# sourceMappingURL=d-input-check.js.map
