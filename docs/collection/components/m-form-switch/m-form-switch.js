/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Host, h, } from '@stencil/core';
export class MFormSwitch {
  constructor() {
    this.changeHandler = (event) => {
      const value = event.target.checked;
      this.internalIsChecked = value;
      this.mChange.emit(value);
    };
    this.label = undefined;
    this.labelOn = 'On';
    this.labelOff = 'Off';
    this.mId = undefined;
    this.isChecked = undefined;
    this.isDisabled = false;
    this.internalIsChecked = undefined;
  }
  watchIsCheckedHandler(newValue) {
    this.internalIsChecked = newValue;
  }
  connectedCallback() {
    this.internalIsChecked = this.isChecked;
  }
  render() {
    return (h(Host, { class: "form-switch-box" }, h("div", { class: "form-check form-switch form-check-reverse", onClick: (e) => e.stopPropagation() }, h("label", { class: "form-switch-box-label", htmlFor: this.mId }, h("div", { class: "d-flex gap-3 justify-content-between align-items-center flex-grow-1" }, h("span", { class: "form-check-label" }, this.label), h("span", { class: "form-check-label fw-bold" }, this.internalIsChecked ? this.labelOn : this.labelOff)), h("input", { id: this.mId, onChange: (event) => this.changeHandler(event), class: "form-check-input form-check-switch", type: "checkbox", role: "switch", checked: this.internalIsChecked, disabled: this.isDisabled })))));
  }
  static get is() { return "m-form-switch"; }
  static get originalStyleUrls() {
    return {
      "$": ["m-form-switch.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["m-form-switch.css"]
    };
  }
  static get properties() {
    return {
      "label": {
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
          "text": "The text to display in the switch."
        },
        "attribute": "label",
        "reflect": false
      },
      "labelOn": {
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
          "text": "The text to display when the switch is on."
        },
        "attribute": "label-on",
        "reflect": false,
        "defaultValue": "'On'"
      },
      "labelOff": {
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
          "text": "The text to display when the switch is off."
        },
        "attribute": "label-off",
        "reflect": false,
        "defaultValue": "'Off'"
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
          "text": "Id"
        },
        "attribute": "m-id",
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
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        }
      }];
  }
  static get watchers() {
    return [{
        "propName": "isChecked",
        "methodName": "watchIsCheckedHandler"
      }];
  }
}
