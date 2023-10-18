import { h, } from '@stencil/core';
import { PREFIX_BS } from '../../utils';
import { ALERT_TYPE_ICON } from './d-alert-interface';
export class DAlert {
  constructor() {
    this.clickHandler = () => {
      this.eventClose.emit();
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
      [`alert alert-${this.type}`]: true,
      'fade show': !!this.showClose,
    };
  }
  getIcon() {
    return this.icon || ALERT_TYPE_ICON[this.type] || '';
  }
  generateStyleVariables() {
    return Object.assign(Object.assign({}, this.type === 'light' ? { [`--${PREFIX_BS}alert-component-icon-color`]: `var(--${PREFIX_BS}secondary)` } : {}), { [`--${PREFIX_BS}alert-component-separator-opacity`]: '0.3' });
  }
  render() {
    return (h("div", { class: this.generateClasses(), style: this.generateStyleVariables(), role: "alert" }, (this.showIcon || this.icon) && (h("d-icon", { class: "alert-icon", icon: this.getIcon(), familyClass: this.iconFamilyClass, familyPrefix: this.iconFamilyPrefix })), h("div", { class: "alert-text" }, h("slot", null)), this.showClose && (h("div", { class: "alert-separator" })), this.showClose && (h("button", { type: "button", class: "btn-close", "aria-label": "Close", onClick: this.clickHandler }, h("d-icon", { class: "alert-close-icon", icon: "x-lg", familyClass: this.iconFamilyClass, familyPrefix: this.iconFamilyPrefix })))));
  }
  static get is() { return "d-alert"; }
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
              "path": "./d-alert-interface"
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
        "method": "eventClose",
        "name": "eventClose",
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
//# sourceMappingURL=d-alert.js.map
