import { h, } from '@stencil/core';
import { PREFIX_BS } from '../../utils';
export class DButton {
  constructor() {
    this.clickHandler = (event) => {
      if (this.isStopPropagationEnabled) {
        event.stopPropagation();
      }
      this.eventClick.emit();
    };
    this.theme = 'primary';
    this.size = undefined;
    this.variant = undefined;
    this.state = undefined;
    this.text = '';
    this.iconStart = undefined;
    this.iconStartFamilyClass = undefined;
    this.iconStartFamilyPrefix = undefined;
    this.iconEnd = undefined;
    this.iconEndFamilyClass = undefined;
    this.iconEndFamilyPrefix = undefined;
    this.value = undefined;
    this.type = 'button';
    this.isPill = false;
    this.isLoading = false;
    this.isDisabled = false;
    this.isStopPropagationEnabled = true;
  }
  generateStyleVariables() {
    if (this.isPill) {
      return { [`--${PREFIX_BS}btn-component-border-radius`]: `var(--${PREFIX_BS}border-radius-pill)` };
    }
    return {};
  }
  generateClasses() {
    const variantClass = this.variant
      ? `btn-${this.variant}-${this.theme}`
      : `btn-${this.theme}`;
    return Object.assign(Object.assign({ btn: true, [variantClass]: true, [`btn-${this.size}`]: !!this.size }, (this.state && this.state !== 'disabled') && { [this.state]: true }), { loading: this.isLoading });
  }
  render() {
    return (h("button", Object.assign({ class: this.generateClasses(), style: this.generateStyleVariables(), type: this.type, disabled: this.state === 'disabled' || this.isLoading || this.isDisabled }, this.value && { value: this.value }, { onClick: this.clickHandler }), this.iconStart && (h("d-icon", { icon: this.iconStart, familyClass: this.iconStartFamilyClass, familyPrefix: this.iconStartFamilyPrefix })), (this.text && !this.isLoading) && (h("span", null, this.text)), this.isLoading && (h("span", { class: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true" }, h("span", { class: "visually-hidden" }, "Loading..."))), (this.iconEnd) && (h("d-icon", { icon: this.iconEnd, familyClass: this.iconEndFamilyClass, familyPrefix: this.iconEndFamilyPrefix }))));
  }
  static get is() { return "d-button"; }
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
          "text": "Theme to use."
        },
        "attribute": "theme",
        "reflect": false,
        "defaultValue": "'primary'"
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ComponentSize",
          "resolved": "\"lg\" | \"sm\" | undefined",
          "references": {
            "ComponentSize": {
              "location": "import",
              "path": "../../utils/component-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The size"
        },
        "attribute": "size",
        "reflect": false
      },
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ButtonVariant",
          "resolved": "\"link\" | \"outline\" | undefined",
          "references": {
            "ButtonVariant": {
              "location": "import",
              "path": "./d-button-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The variant to use."
        },
        "attribute": "variant",
        "reflect": false
      },
      "state": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "InputState",
          "resolved": "\"active\" | \"disabled\" | \"focus-visible\" | \"hover\" | undefined",
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
          "text": "Change the state of the button"
        },
        "attribute": "state",
        "reflect": false
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
          "text": "The text to display."
        },
        "attribute": "text",
        "reflect": false,
        "defaultValue": "''"
      },
      "iconStart": {
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
          "text": "Icon left to display"
        },
        "attribute": "icon-start",
        "reflect": false
      },
      "iconStartFamilyClass": {
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
          "text": "Icon left family class"
        },
        "attribute": "icon-start-family-class",
        "reflect": false
      },
      "iconStartFamilyPrefix": {
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
          "text": "Icon left family prefix"
        },
        "attribute": "icon-start-family-prefix",
        "reflect": false
      },
      "iconEnd": {
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
          "text": "Icon right to display"
        },
        "attribute": "icon-end",
        "reflect": false
      },
      "iconEndFamilyClass": {
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
          "text": "Icon right family class"
        },
        "attribute": "icon-end-family-class",
        "reflect": false
      },
      "iconEndFamilyPrefix": {
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
          "text": "Icon right family prefix"
        },
        "attribute": "icon-end-family-prefix",
        "reflect": false
      },
      "value": {
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
          "text": "The html value of the button."
        },
        "attribute": "value",
        "reflect": false
      },
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ButtonType",
          "resolved": "\"button\" | \"reset\" | \"submit\"",
          "references": {
            "ButtonType": {
              "location": "import",
              "path": "./d-button-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The html type of the button."
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "'button'"
      },
      "isPill": {
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
          "text": "Flag to switch to pill button border radius."
        },
        "attribute": "is-pill",
        "reflect": false,
        "defaultValue": "false"
      },
      "isLoading": {
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
          "text": "Flag to loading state and disable button."
        },
        "attribute": "is-loading",
        "reflect": false,
        "defaultValue": "false"
      },
      "isDisabled": {
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
          "text": "Flag to disable the button, alias to state=\"disable\""
        },
        "attribute": "is-disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "isStopPropagationEnabled": {
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
          "text": "Flag to start or stop event propagation"
        },
        "attribute": "is-stop-propagation-enabled",
        "reflect": false,
        "defaultValue": "true"
      }
    };
  }
  static get events() {
    return [{
        "method": "eventClick",
        "name": "eventClick",
        "bubbles": false,
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
//# sourceMappingURL=d-button.js.map
