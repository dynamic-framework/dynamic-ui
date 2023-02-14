import { Host, h, } from '@stencil/core';
export class MBadge {
  constructor() {
    this.theme = 'primary';
    this.text = '';
  }
  render() {
    return (h(Host, { class: "d-inline-block" }, h("span", { class: `badge ${this.text === '' ? 'badge-dot' : ''} bg-${this.theme}` }, this.text)));
  }
  static get is() { return "m-badge"; }
  static get originalStyleUrls() {
    return {
      "$": ["m-badge.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["m-badge.css"]
    };
  }
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
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The text of badge"
        },
        "attribute": "text",
        "reflect": false,
        "defaultValue": "''"
      }
    };
  }
}
