import { h, } from '@stencil/core';
export class MShortcutToggle {
  constructor() {
    this.changeHandler = (event) => {
      this.mChange.emit(event.target.value);
    };
    this.mId = undefined;
    this.name = undefined;
    this.value = undefined;
    this.label = undefined;
    this.text = undefined;
    this.subtext = '';
    this.icon = undefined;
    this.iconFamilyClass = undefined;
    this.iconFamilyPrefix = undefined;
    this.isChecked = undefined;
    this.state = undefined;
    this.white = false;
  }
  render() {
    return (h("label", { class: {
        shortcut: true,
        [`${this.state}`]: !!this.state,
      }, htmlFor: this.mId }, h("input", { id: this.mId, type: "radio", name: this.name, value: this.value, checked: this.isChecked, onChange: this.changeHandler, disabled: this.state === 'disabled' }), ((this.text || this.label) && !this.icon) && (h("div", { class: this.white ? 'shortcut-toggle-white' : 'shortcut-toggle' }, this.label && (h("span", { class: "shortcut-label d-block" }, this.label)), this.text && (h("div", { class: "d-block small" }, h("span", { class: "shortcut-text" }, this.text, ' '), h("span", { class: "shortcut-subtext" }, this.subtext))))), this.icon && (h("div", { class: "shortcut-toggle" }, h("m-icon", { class: "shortcut-icon", icon: this.icon, familyClass: this.iconFamilyClass, familyPrefix: this.iconFamilyPrefix })))));
  }
  static get is() { return "m-shortcut-toggle"; }
  static get originalStyleUrls() {
    return {
      "$": ["m-shortcut-toggle.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["m-shortcut-toggle.css"]
    };
  }
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
          "text": "Id of the input"
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
          "text": "Shortcut label"
        },
        "attribute": "label",
        "reflect": false
      },
      "text": {
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
          "text": "Shortcut text"
        },
        "attribute": "text",
        "reflect": false
      },
      "subtext": {
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
          "text": "Shortcut text"
        },
        "attribute": "subtext",
        "reflect": false,
        "defaultValue": "''"
      },
      "icon": {
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
          "text": "Shortcut icon"
        },
        "attribute": "icon",
        "reflect": false
      },
      "iconFamilyClass": {
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
          "text": "Icon family class"
        },
        "attribute": "icon-family-class",
        "reflect": false
      },
      "iconFamilyPrefix": {
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
          "text": "Icon family class"
        },
        "attribute": "icon-family-prefix",
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
          "text": "Input and shortcut state"
        },
        "attribute": "state",
        "reflect": false
      },
      "white": {
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
          "text": "Theme"
        },
        "attribute": "white",
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
