import { Host, h, } from '@stencil/core';
export class MSegmentControlItem {
  constructor() {
    this.changeHandler = (event) => {
      this.mChange.emit(event.target.value);
    };
    this.mId = undefined;
    this.name = undefined;
    this.label = undefined;
    this.value = undefined;
    this.isDisabled = undefined;
    this.isChecked = undefined;
    this.state = undefined;
  }
  render() {
    return (h(Host, null, h("input", { type: "radio", class: {
        'btn-check': true,
        [`${this.state}`]: !!this.state,
      }, name: this.name, id: this.mId, value: this.value, autocomplete: "off", onChange: this.changeHandler, disabled: this.isDisabled || this.state === 'disabled', checked: this.isChecked }), h("label", { class: "segment-control-item", htmlFor: this.mId }, this.label)));
  }
  static get is() { return "m-segment-control-item"; }
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
          "text": "Id of the radio"
        },
        "attribute": "m-id",
        "reflect": false
      },
      "name": {
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
          "text": "Name of the radio"
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
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Label of the radio"
        },
        "attribute": "label",
        "reflect": false
      },
      "value": {
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
          "text": "Value of the radio"
        },
        "attribute": "value",
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
          "text": "Is disabled"
        },
        "attribute": "is-disabled",
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
          "text": "Is checked"
        },
        "attribute": "is-checked",
        "reflect": false
      },
      "state": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "InputState",
          "resolved": "\"active\" | \"disabled\" | \"focus\" | \"hover\" | undefined",
          "references": {
            "InputState": {
              "location": "import",
              "path": "../../utils/component-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "State of the input"
        },
        "attribute": "state",
        "reflect": false
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
          "original": "string",
          "resolved": "string",
          "references": {}
        }
      }];
  }
}
