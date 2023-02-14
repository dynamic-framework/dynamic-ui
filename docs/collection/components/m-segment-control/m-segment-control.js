/* eslint-disable jsx-a11y/label-has-associated-control */
import { h, } from '@stencil/core';
export class MSegmentControl {
  constructor() {
    this.description = undefined;
  }
  render() {
    return (h("div", Object.assign({ class: "segment-control", role: "group" }, this.description && ({ 'aria-label': this.description })), h("slot", null)));
  }
  static get is() { return "m-segment-control"; }
  static get originalStyleUrls() {
    return {
      "$": ["m-segment-control.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["m-segment-control.css"]
    };
  }
  static get properties() {
    return {
      "description": {
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
          "text": "Aria label to describe the segment control"
        },
        "attribute": "description",
        "reflect": false
      }
    };
  }
}
