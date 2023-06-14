import { h, Host, } from '@stencil/core';
export class MCoupon {
  constructor() {
    /**
     * Emit input and select values only when the button was clicked
     */
    this.clickHandler = () => {
      var _a, _b;
      this.mClick.emit({
        inputValue: (_a = this.htmlInput) === null || _a === void 0 ? void 0 : _a.value,
        selectValue: (_b = this.htmlSelect) === null || _b === void 0 ? void 0 : _b.value,
      });
    };
    this.mId = undefined;
    this.label = '';
    this.labelIcon = 'info-circle';
    this.labelIconFamilyClass = undefined;
    this.labelIconFamilyPrefix = undefined;
    this.iconStart = undefined;
    this.iconStartFamilyClass = undefined;
    this.iconStartFamilyPrefix = undefined;
    this.iconMiddle = undefined;
    this.iconMiddleFamilyClass = undefined;
    this.iconMiddleFamilyPrefix = undefined;
    this.iconEnd = undefined;
    this.iconEndFamilyClass = undefined;
    this.iconEndFamilyPrefix = undefined;
    this.hasSelect = false;
    this.isLoading = false;
    this.placeholder = '';
    this.type = 'text';
    this.buttonText = 'Apply';
    this.hint = undefined;
    this.hintIconStart = undefined;
    this.hintIconStartFamilyClass = undefined;
    this.hintIconStartFamilyPrefix = undefined;
    this.hintIconEnd = undefined;
    this.hintIconEndFamilyClass = undefined;
    this.hintIconEndFamilyPrefix = undefined;
    this.theme = undefined;
    this.layoutDirection = 'vertical';
  }
  generateHostClasses() {
    return {
      'form-control-layout form-control-layout-coupon': true,
      [`form-control-theme-${this.theme}`]: !!this.theme,
      'form-control-layout-horizontal': this.layoutDirection === 'horizontal',
    };
  }
  render() {
    return (h(Host, { class: this.generateHostClasses() }, this.label && (h("label", { htmlFor: this.mId }, this.label, this.labelIcon && (h("m-icon", { class: "form-control-icon", icon: this.labelIcon, familyClass: this.labelIconFamilyClass, familyPrefix: this.labelIconFamilyPrefix })))), h("div", { class: "form-control-input" }, h("div", { class: {
        'input-group': true,
        disabled: this.isLoading,
      } }, this.iconStart && (h("span", { class: "input-group-text", id: `${this.mId}-start` }, this.iconStart && (h("m-icon", { class: "form-control-icon", icon: this.iconStart, familyClass: this.iconStartFamilyClass, familyPrefix: this.iconStartFamilyPrefix })))), this.hasSelect && (h("select", {
      // eslint-disable-next-line no-return-assign
      ref: (el) => (this.htmlSelect = el), class: "form-select", disabled: this.isLoading
    }, h("slot", null))), h("input", {
      // eslint-disable-next-line no-return-assign
      ref: (el) => (this.htmlInput = el), id: this.mId, type: this.type, class: "form-control", placeholder: this.placeholder, "aria-label": this.label, "aria-describedby": `${this.mId}-add`, disabled: this.isLoading
    }), this.iconMiddle && (h("span", { class: "input-group-text", id: `${this.mId}-middle` }, h("m-icon", { class: "form-control-icon", icon: this.iconMiddle, familyClass: this.iconMiddleFamilyClass, familyPrefix: this.iconMiddleFamilyPrefix }))), !this.isLoading && (h("button", { class: {
        'btn fw-semibold text-uppercase small': true,
        [`btn-text-${this.theme}`]: !!this.theme,
      }, onClick: this.clickHandler }, this.buttonText)), (this.iconEnd && !this.isLoading) && (h("span", { class: "input-group-text", id: `${this.mId}-end` }, h("m-icon", { class: "form-control-icon icon-end", icon: this.iconEnd, familyClass: this.iconEndFamilyClass, familyPrefix: this.iconEndFamilyPrefix }))), this.isLoading && (h("div", { class: "input-group-text form-control-icon" }, h("span", { class: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true" }, h("span", { class: "visually-hidden" }, "Loading..."))))), this.hint && (h("m-hint", Object.assign({ text: this.hint, theme: this.theme === 'danger' || this.theme === 'tertiary' || this.theme === 'warning' ? this.theme : undefined }, (this.hintIconStart && ({
      iconStart: this.hintIconStart,
      iconStartFamilyClass: this.hintIconStartFamilyClass,
      iconStartFamilyPrefix: this.hintIconStartFamilyPrefix,
    })), (this.hintIconEnd && ({
      iconEnd: this.hintIconEnd,
      iconEndFamilyClass: this.hintIconEndFamilyClass,
      iconEndFamilyPrefix: this.hintIconEndFamilyPrefix,
    }))))))));
  }
  static get is() { return "m-coupon"; }
  static get originalStyleUrls() {
    return {
      "$": ["m-coupon.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["m-coupon.css"]
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
          "text": "Id for the input"
        },
        "attribute": "m-id",
        "reflect": false
      },
      "label": {
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
          "text": "Label for the input"
        },
        "attribute": "label",
        "reflect": false,
        "defaultValue": "''"
      },
      "labelIcon": {
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
          "text": "Icon for the label text"
        },
        "attribute": "label-icon",
        "reflect": false,
        "defaultValue": "'info-circle'"
      },
      "labelIconFamilyClass": {
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
          "text": "Icon label family class"
        },
        "attribute": "label-icon-family-class",
        "reflect": false
      },
      "labelIconFamilyPrefix": {
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
          "text": "Icon label family class"
        },
        "attribute": "label-icon-family-prefix",
        "reflect": false
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
          "text": "Icon of the left"
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
          "text": "Left icon family class"
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
          "text": "Left icon family class"
        },
        "attribute": "icon-start-family-prefix",
        "reflect": false
      },
      "iconMiddle": {
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
          "text": "Icon of the middle"
        },
        "attribute": "icon-middle",
        "reflect": false
      },
      "iconMiddleFamilyClass": {
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
          "text": "Middle icon family class"
        },
        "attribute": "icon-middle-family-class",
        "reflect": false
      },
      "iconMiddleFamilyPrefix": {
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
          "text": "Middle icon family class"
        },
        "attribute": "icon-middle-family-prefix",
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
          "text": "Icon of the end"
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
          "text": "Right icon family class"
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
          "text": "Right icon family class"
        },
        "attribute": "icon-end-family-prefix",
        "reflect": false
      },
      "hasSelect": {
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
          "text": "Has a select input"
        },
        "attribute": "has-select",
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
          "text": "Flag for loading state."
        },
        "attribute": "is-loading",
        "reflect": false,
        "defaultValue": "false"
      },
      "placeholder": {
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
          "text": "Placeholder for the input"
        },
        "attribute": "placeholder",
        "reflect": false,
        "defaultValue": "''"
      },
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "CouponInputType",
          "resolved": "\"number\" | \"text\"",
          "references": {
            "CouponInputType": {
              "location": "import",
              "path": "./m-coupon-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "* The type of the input"
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "'text'"
      },
      "buttonText": {
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
          "text": "Text for the coupon button"
        },
        "attribute": "button-text",
        "reflect": false,
        "defaultValue": "'Apply'"
      },
      "hint": {
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
          "text": "Hint for the m-coupon"
        },
        "attribute": "hint",
        "reflect": false
      },
      "hintIconStart": {
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
          "text": "Icon start for the hint text"
        },
        "attribute": "hint-icon-start",
        "reflect": false
      },
      "hintIconStartFamilyClass": {
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
          "text": "Hint left icon family class"
        },
        "attribute": "hint-icon-start-family-class",
        "reflect": false
      },
      "hintIconStartFamilyPrefix": {
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
          "text": "Hint left icon family class"
        },
        "attribute": "hint-icon-start-family-prefix",
        "reflect": false
      },
      "hintIconEnd": {
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
          "text": "Icon end for the hint text"
        },
        "attribute": "hint-icon-end",
        "reflect": false
      },
      "hintIconEndFamilyClass": {
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
          "text": "Hint right icon family class"
        },
        "attribute": "hint-icon-end-family-class",
        "reflect": false
      },
      "hintIconEndFamilyPrefix": {
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
          "text": "Hint right icon family class"
        },
        "attribute": "hint-icon-end-family-prefix",
        "reflect": false
      },
      "theme": {
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
          "text": "Theme for the m-cupon"
        },
        "attribute": "theme",
        "reflect": false
      },
      "layoutDirection": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "FormControlLayoutDirection",
          "resolved": "\"horizontal\" | \"vertical\"",
          "references": {
            "FormControlLayoutDirection": {
              "location": "import",
              "path": "../../utils/component-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Change the layout direction to put the label on top or left of input"
        },
        "attribute": "layout-direction",
        "reflect": false,
        "defaultValue": "'vertical'"
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
          "text": "Emitted when the button is clicked"
        },
        "complexType": {
          "original": "CouponEvent",
          "resolved": "{ inputValue: string | undefined; selectValue: string | undefined; }",
          "references": {
            "CouponEvent": {
              "location": "import",
              "path": "./m-coupon-interface"
            }
          }
        }
      }];
  }
}
