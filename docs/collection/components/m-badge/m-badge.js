import { h, } from '@stencil/core';
export class MBadge {
  constructor() {
    this.theme = 'primary';
    this.text = undefined;
    this.isDot = false;
  }
  // eslint-disable-next-line @stencil/own-methods-must-be-private
  generateClasses() {
    return {
      'm-badge badge': true,
      'badge-dot': this.isDot,
      [`badge-${this.theme}`]: !!this.theme,
    };
  }
  render() {
    return (h("span", { class: this.generateClasses() }, h("span", null, this.text)));
  }
  static get is() { return "m-badge"; }
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
      "isDot": {
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
          "text": "Enable dot mode"
        },
        "attribute": "is-dot",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
}
//# sourceMappingURL=m-badge.js.map
