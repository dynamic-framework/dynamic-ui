import { h, } from '@stencil/core';
import { PREFIX_BS } from '../../utils';
import { ALERT_TYPE_ICON } from './m-alert-interface';
export class MAlert {
  constructor() {
    this.clickHandler = () => {
      this.mClose.emit();
    };
    this.type = 'light';
    this.icon = undefined;
    this.iconFamilyClass = undefined;
    this.iconFamilyPrefix = undefined;
    this.showIcon = false;
    this.showClose = undefined;
  }
  generateClasses() {
    return {
      [`m-alert alert alert-${this.type}`]: true,
      'fade show': !!this.showClose,
    };
  }
  getIcon() {
    return this.icon || ALERT_TYPE_ICON[this.type] || '';
  }
  generateStyleVariables() {
    return Object.assign(Object.assign({}, this.type === 'light' ? { [`--${PREFIX_BS}m-alert-component-icon-color`]: `var(--${PREFIX_BS}secondary)` } : {}), { [`--${PREFIX_BS}m-alert-component-separator-opacity`]: '0.3' });
  }
  render() {
    return (h("div", { class: this.generateClasses(), style: this.generateStyleVariables(), role: "alert" }, (this.showIcon || this.icon) && (h("m-icon", { class: "m-alert-icon", icon: this.getIcon(), familyClass: this.iconFamilyClass, familyPrefix: this.iconFamilyPrefix })), h("div", { class: "m-alert-text" }, h("slot", null)), this.showClose && (h("div", { class: "m-alert-separator" })), this.showClose && (h("button", { type: "button", class: "btn-close", "aria-label": "Close", onClick: this.clickHandler }, h("m-icon", { class: "m-alert-close-icon", icon: "x-lg", familyClass: this.iconFamilyClass, familyPrefix: this.iconFamilyPrefix })))));
  }
  static get is() { return "m-alert"; }
  static get properties() {
    return {
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "AlertType",
          "resolved": "\"danger\" | \"dark\" | \"info\" | \"light\" | \"success\" | \"warning\"",
          "references": {
            "AlertType": {
              "location": "import",
              "path": "./m-alert-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Alert type"
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "'light'"
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
          "text": "Alert icon"
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
          "text": "Right icon family class"
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
          "text": "Right icon family class"
        },
        "attribute": "icon-family-prefix",
        "reflect": false
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
          "text": "Show alert icon"
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
//# sourceMappingURL=m-alert.js.map
