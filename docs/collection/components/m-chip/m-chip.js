import { h, } from '@stencil/core';
export class MChip {
  constructor() {
    this.closeHandler = () => {
      this.mClose.emit();
    };
    this.theme = 'primary';
    this.text = undefined;
    this.icon = undefined;
    this.iconFamilyClass = undefined;
    this.iconFamilyPrefix = undefined;
    this.showClose = false;
  }
  // eslint-disable-next-line @stencil/own-methods-must-be-private
  generateClasses() {
    return {
      'm-chip': true,
      [`m-chip-${this.theme}`]: !!this.theme,
    };
  }
  render() {
    return (h("span", { class: this.generateClasses() }, this.icon && (h("div", { class: "m-badge-icon-container" }, h("m-icon", { icon: this.icon, familyClass: this.iconFamilyClass, familyPrefix: this.iconFamilyPrefix }))), h("span", null, this.text), this.showClose && (h("button", { type: "button", class: "m-badge-icon-container", onClick: this.closeHandler }, h("m-icon", { icon: "x-lg" })))));
  }
  static get is() { return "m-chip"; }
  static get properties() {
    return {
      "theme": {
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
          "text": "The theme to use."
        },
        "attribute": "theme",
        "reflect": false,
        "defaultValue": "'primary'"
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
          "text": "The text of badge"
        },
        "attribute": "text",
        "reflect": false
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
          "text": "Name of icon to use (in kebab-case)"
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
          "text": "Change the family class to use another icon suite"
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
          "text": "Change the family prefix to use another icon suite"
        },
        "attribute": "icon-family-prefix",
        "reflect": false
      },
      "showClose": {
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
          "text": "Show close icon"
        },
        "attribute": "show-close",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get events() {
    return [{
        "method": "mClose",
        "name": "mClose",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the close button has been clicked."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
}
//# sourceMappingURL=m-chip.js.map
