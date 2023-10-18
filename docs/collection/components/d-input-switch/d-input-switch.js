import { h, } from '@stencil/core';
export class DInputSwitch {
  constructor() {
    this.changeHandler = (event) => {
      const value = event.target.checked;
      this.internalIsChecked = value;
      this.eventChange.emit(value);
    };
    this.label = undefined;
    this.innerId = undefined;
    this.name = undefined;
    this.isChecked = undefined;
    this.isDisabled = undefined;
    this.isReadonly = undefined;
    this.internalIsChecked = undefined;
  }
  watchIsCheckedHandler(newValue) {
    this.internalIsChecked = newValue;
  }
  connectedCallback() {
    this.internalIsChecked = this.isChecked;
    if (this.isReadonly) {
      this.el.onclick = () => false;
    }
  }
  render() {
    return (h("div", { class: "form-check form-switch" }, h("input", { id: this.innerId, name: this.name, onChange: this.changeHandler, class: "form-check-input", type: "checkbox", role: "switch", checked: this.internalIsChecked, disabled: this.isDisabled }), !!this.label && (h("label", { class: "form-check-label", htmlFor: this.innerId }, this.label))));
  }
  static get is() { return "d-input-switch"; }
  static get properties() {
    return {
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
          "text": "The text to display in the switch."
        },
        "attribute": "label",
        "reflect": false
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
          "text": "Id"
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
          "text": "Id"
        },
        "attribute": "name",
        "reflect": false
      },
      "isChecked": {
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
          "text": "Flag to change the check state"
        },
        "attribute": "is-checked",
        "reflect": false
      },
      "isDisabled": {
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
          "text": "Flag to disable the input"
        },
        "attribute": "is-disabled",
        "reflect": false
      },
      "isReadonly": {
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
          "text": "Flag to disable the onMChange event"
        },
        "attribute": "is-readonly",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "internalIsChecked": {}
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
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "isChecked",
        "methodName": "watchIsCheckedHandler"
      }];
  }
}
//# sourceMappingURL=d-input-switch.js.map
