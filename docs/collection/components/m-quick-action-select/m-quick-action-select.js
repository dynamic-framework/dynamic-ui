import { h, } from '@stencil/core';
export class MQuickActionSelect {
  constructor() {
    this.changeHandler = (event) => {
      this.mChange.emit(event.target.value);
    };
    this.mId = undefined;
    this.name = undefined;
    this.value = undefined;
    this.line1 = undefined;
    this.line2 = undefined;
    this.isSelected = undefined;
  }
  render() {
    return (h("label", { class: "m-quick-action-select", htmlFor: this.mId }, h("input", { id: this.mId, type: "radio", name: this.name, value: this.value, checked: this.isSelected, onChange: this.changeHandler }), h("span", { class: "m-quick-action-select-line1" }, this.line1), h("span", { class: "m-quick-action-select-line2" }, this.line2)));
  }
  static get is() { return "m-quick-action-select"; }
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
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Name of the input"
        },
        "attribute": "name",
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
          "text": "Input value"
        },
        "attribute": "value",
        "reflect": false
      },
      "line1": {
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
          "text": "Line 1 text"
        },
        "attribute": "line-1",
        "reflect": false
      },
      "line2": {
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
          "text": "Line 2 text"
        },
        "attribute": "line-2",
        "reflect": false
      },
      "isSelected": {
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
          "text": "Is selected"
        },
        "attribute": "is-selected",
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
          "text": "Emitted when the select value has changed"
        },
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        }
      }];
  }
}
//# sourceMappingURL=m-quick-action-select.js.map
