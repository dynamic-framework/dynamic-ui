import { h, } from '@stencil/core';
export class DQuickActionSwitch {
  constructor() {
    this.clickHandler = (event) => {
      event.stopPropagation();
      this.eventClick.emit(this.isChecked);
    };
    this.innerId = undefined;
    this.name = undefined;
    this.label = undefined;
    this.hint = undefined;
    this.isChecked = undefined;
    this.isDisabled = undefined;
  }
  render() {
    return (h("button", { class: "d-quick-action-switch", onClick: this.clickHandler }, h("div", { class: "d-quick-action-switch-content" }, h("d-input-switch", { innerId: this.innerId, name: this.name, isDisabled: this.isDisabled, isChecked: this.isChecked, isReadonly: true }), h("label", { class: "d-quick-action-switch-label", htmlFor: this.innerId }, this.label)), h("div", { class: "d-quick-action-switch-hint" }, this.hint)));
  }
  static get is() { return "d-quick-action-switch"; }
  static get properties() {
    return {
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
          "text": "The id of the input"
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
        "method": "eventClick",
        "name": "eventClick",
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
//# sourceMappingURL=d-quick-action-switch.js.map
