import { h, } from '@stencil/core';
export class MQuickActionSwitch {
  constructor() {
    this.clickHandler = (event) => {
      event.stopPropagation();
      this.mClick.emit(this.isChecked);
    };
    this.mId = undefined;
    this.name = undefined;
    this.label = undefined;
    this.hint = undefined;
    this.isChecked = undefined;
    this.isDisabled = undefined;
  }
  render() {
    return (h("button", { class: "m-quick-action-switch", onClick: this.clickHandler }, h("div", { class: "m-quick-action-switch-content" }, h("m-input-switch", { mId: this.mId, name: this.name, isDisabled: this.isDisabled, isChecked: this.isChecked, isReadonly: true }), h("label", { class: "m-quick-action-switch-label", htmlFor: this.mId }, this.label)), h("div", { class: "m-quick-action-switch-hint" }, this.hint)));
  }
  static get is() { return "m-quick-action-switch"; }
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
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The label text"
        },
        "attribute": "label",
        "reflect": false
      },
      "hint": {
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
          "text": "Hint to display"
        },
        "attribute": "hint",
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
      }
    };
  }
  static get events() {
    return [{
        "method": "mClick",
        "name": "mClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the select value has changed"
        },
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        }
      }];
  }
}
//# sourceMappingURL=m-quick-action-switch.js.map
