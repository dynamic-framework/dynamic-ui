import { h, Host, } from '@stencil/core';
export class MButton {
  constructor() {
    this.clickHandler = () => {
      this.mClick.emit();
    };
    this.theme = 'primary';
    this.variant = undefined;
    this.state = undefined;
    this.text = '';
    this.iconStart = undefined;
    this.iconStartFamilyClass = undefined;
    this.iconStartFamilyPrefix = undefined;
    this.iconEnd = undefined;
    this.iconEndFamilyClass = undefined;
    this.iconEndFamilyPrefix = undefined;
    this.value = '';
    this.type = 'button';
    this.isPill = false;
    this.isLoading = false;
  }
  generateClasses() {
    const variantClass = this.variant
      ? `btn-${this.variant}-${this.theme}`
      : `btn-${this.theme}`;
    return Object.assign(Object.assign({ btn: true, [variantClass]: true }, (this.state && this.state !== 'disabled') && { [this.state]: true }), { 'rounded-pill': this.isPill });
  }
  generateHostClasses() {
    return {
      'btn-box': true,
      focus: this.state === 'focus',
      'rounded-pill': this.isPill,
    };
  }
  render() {
    return (h(Host, { class: this.generateHostClasses() }, h("button", Object.assign({ class: this.generateClasses(), type: this.type, disabled: this.state === 'disabled' || this.isLoading }, this.value && { value: this.value }, { onClick: this.clickHandler }), this.iconStart && (h("m-icon", { class: "btn-icon btn-left-icon", icon: this.iconStart, familyClass: this.iconStartFamilyClass, familyPrefix: this.iconStartFamilyPrefix })), this.text && (h("span", null, this.text)), (this.iconEnd && !this.isLoading) && (h("m-icon", { class: "btn-icon btn-right-icon", icon: this.iconEnd, familyClass: this.iconEndFamilyClass, familyPrefix: this.iconEndFamilyPrefix })), this.isLoading && (h("span", { class: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true" }, h("span", { class: "visually-hidden" }, "Loading..."))))));
  }
  static get is() { return "m-button"; }
  static get originalStyleUrls() {
    return {
      "$": ["m-button.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["m-button.css"]
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
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ButtonVariant",
          "resolved": "\"ghost\" | \"outline\" | \"text\" | undefined",
          "references": {
            "ButtonVariant": {
              "location": "import",
              "path": "./m-button-interface"
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
          "text": "Flag to set the button as active."
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
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The value of the button."
        },
        "attribute": "value",
        "reflect": false,
        "defaultValue": "''"
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
              "path": "./m-button-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The type of the button."
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
          "text": "Flag for loading state and disable button."
        },
        "attribute": "is-loading",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get events() {
    return [{
        "method": "mClick",
        "name": "mClick",
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
