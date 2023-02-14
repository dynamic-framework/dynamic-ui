import { h, } from '@stencil/core';
import { ICON_STATE } from '../../utils/component-interface';
export class MAlert {
  constructor() {
    this.clickHandler = () => {
      this.mClose.emit();
    };
    this.theme = 'warning';
    this.showIcon = false;
    this.showClose = undefined;
  }
  generateClasses() {
    return {
      [`alert alert-${this.theme}`]: true,
      'fade show': !!this.showClose,
    };
  }
  iconState() {
    return ICON_STATE[this.theme] || '';
  }
  render() {
    return (h("div", { class: this.generateClasses(), role: "alert" }, this.showIcon && (h("div", { class: "alert-icon small" }, h("m-icon", { icon: this.iconState() }))), h("div", { class: "alert-text flex-grow-1" }, h("slot", null)), this.showClose && (h("div", { class: "separator" })), this.showClose && (h("button", { type: "button", class: "btn-close fs-4", "aria-label": "Close", onClick: this.clickHandler }, h("m-icon", { icon: "x-lg" })))));
  }
  static get is() { return "m-alert"; }
  static get originalStyleUrls() {
    return {
      "$": ["m-alert.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["m-alert.css"]
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
          "text": "Theme for the alert"
        },
        "attribute": "theme",
        "reflect": false,
        "defaultValue": "'warning'"
      },
      "showIcon": {
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
          "text": "Show icon theme in the alert"
        },
        "attribute": "show-icon",
        "reflect": false,
        "defaultValue": "false"
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
          "text": "Show close button"
        },
        "attribute": "show-close",
        "reflect": false
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
          "text": "Emitted when the button has been clicked."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
}
