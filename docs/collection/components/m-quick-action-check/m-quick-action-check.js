import { h, } from '@stencil/core';
export class MQuickActionCheck {
  constructor() {
    this.changeHandler = (event) => {
      event.stopPropagation();
      this.mChange.emit(event.target.value);
    };
    this.mId = undefined;
    this.name = undefined;
    this.value = undefined;
    this.line1 = undefined;
    this.line2 = undefined;
    this.line3 = undefined;
    this.isChecked = undefined;
  }
  render() {
    return (h("label", { class: "m-quick-action-check", htmlFor: this.mId }, h("m-input-check", { mId: this.mId, type: "radio", name: this.name, value: this.value, isChecked: this.isChecked, onMChange: this.changeHandler }), h("div", { class: "quick-action-check-detail" }, h("span", { class: "quick-action-check-line1" }, this.line1), h("span", { class: "quick-action-check-line2" }, this.line2)), h("span", { class: "quick-action-check-line3" }, this.line3)));
  }
  static get is() { return "m-quick-action-check"; }
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
      "line3": {
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
          "text": "Line 3 text"
        },
        "attribute": "line-3",
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
          "text": "Is selected"
        },
        "attribute": "is-checked",
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
//# sourceMappingURL=m-quick-action-check.js.map
