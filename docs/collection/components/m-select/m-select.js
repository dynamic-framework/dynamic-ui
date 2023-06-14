import { Host, h, } from '@stencil/core';
export class MSelect {
  constructor() {
    this.changeHandler = (event) => {
      const { value } = event.target;
      this.mChange.emit(this.options.find((option) => this.valueExtractor(option).toString() === value));
    };
    this.blurHandler = (event) => {
      this.mBlur.emit(event);
    };
    this.mId = undefined;
    this.name = undefined;
    this.variant = 'prime';
    this.options = [];
    this.theme = undefined;
    this.label = undefined;
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
    this.hintIconStart = undefined;
    this.hintIconStartFamilyClass = undefined;
    this.hintIconStartFamilyPrefix = undefined;
    this.hintIconEnd = undefined;
    this.hintIconEndFamilyClass = undefined;
    this.hintIconEndFamilyPrefix = undefined;
    this.hint = undefined;
    this.selectedOption = undefined;
    this.layoutDirection = 'vertical';
    this.isDisabled = false;
    this.isLoading = false;
    this.valueExtractor = (item) => item === null || item === void 0 ? void 0 : item.value;
    this.labelExtractor = (item) => item === null || item === void 0 ? void 0 : item.label;
  }
  generateHostClasses() {
    return {
      'form-control-layout': true,
      'form-control-layout-horizontal': this.layoutDirection === 'horizontal',
      [`form-control-layout-${this.variant}`]: !!this.variant,
      'form-control-layout-pill': this.variant !== 'full',
      [`form-control-theme-${this.theme}`]: this.variant !== 'prime' && !!this.theme,
    };
  }
  render() {
    return (h(Host, { class: this.generateHostClasses() }, (this.label) && (h("label", { htmlFor: this.mId }, this.label, this.labelIcon && (h("m-icon", { class: "form-control-icon small", icon: this.labelIcon, familyClass: this.labelIconFamilyClass, familyPrefix: this.labelIconFamilyPrefix })))), h("div", { class: "form-control-input w-100" }, h("div", { class: {
        'input-group': true,
        disabled: this.isDisabled || this.isLoading,
      } }, this.iconStart && (h("span", { class: "input-group-text", id: `${this.mId}-start` }, h("m-icon", { class: "form-control-icon", icon: this.iconStart, familyClass: this.iconStartFamilyClass, familyPrefix: this.iconStartFamilyPrefix }))), h("select", { id: this.mId, name: this.name, class: {
        'form-select': true,
        'no-icons': !this.iconStart && !this.iconMiddle && !this.iconEnd,
        [`form-select-${this.theme}`]: this.variant !== 'prime' && !!this.theme,
        loading: this.isLoading,
      }, "aria-describedby": `${this.mId}-start`, disabled: this.isDisabled || this.isLoading, onChange: this.changeHandler, onBlur: this.blurHandler }, this.options.map((option) => (h("option", { value: this.valueExtractor(option), selected: this.selectedOption
        && this.valueExtractor(option) === this.valueExtractor(this.selectedOption) }, this.labelExtractor(option))))), (this.iconMiddle) && (h("span", { class: "input-group-text", id: `${this.mId}-middle` }, this.iconMiddle && (h("m-icon", { class: "form-control-icon", icon: this.iconMiddle, familyClass: this.iconMiddleFamilyClass, familyPrefix: this.iconMiddleFamilyPrefix })))), (this.iconEnd && !this.isLoading) && (h("span", { class: "input-group-text", id: `${this.mId}-end` }, this.iconEnd && (h("m-icon", { class: "form-control-icon", icon: this.iconEnd, familyClass: this.iconEndFamilyClass, familyPrefix: this.iconEndFamilyPrefix })))), this.isLoading && (h("div", { class: "input-group-text form-control-icon loading" }, h("span", { class: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true" }, h("span", { class: "visually-hidden" }, "Loading..."))))), (this.hint) && (h("div", { class: "d-flex gap-2 hint text-start" }, h("small", null, this.hintIconStart && (h("m-icon", { class: "form-control-icon", icon: this.hintIconStart, familyClass: this.hintIconStartFamilyClass, familyPrefix: this.hintIconStartFamilyPrefix })), this.hint, this.hintIconEnd && (h("m-icon", { class: "form-control-icon", icon: this.hintIconEnd, familyClass: this.hintIconEndFamilyClass, familyPrefix: this.hintIconEndFamilyPrefix }))))))));
  }
  static get is() { return "m-select"; }
  static get originalStyleUrls() {
    return {
      "$": ["m-select.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["m-select.css"]
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
          "text": "Id of the select"
        },
        "attribute": "m-id",
        "reflect": false
      },
      "name": {
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
          "text": "The name of the input"
        },
        "attribute": "name",
        "reflect": false
      },
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "SelectLayoutVariant",
          "resolved": "\"full\" | \"prime\" | \"transparent\" | undefined",
          "references": {
            "SelectLayoutVariant": {
              "location": "import",
              "path": "./m-select-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The variant of the select"
        },
        "attribute": "variant",
        "reflect": false,
        "defaultValue": "'prime'"
      },
      "options": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "Array<Record<string, unknown>>",
          "resolved": "Record<string, unknown>[]",
          "references": {
            "Array": {
              "location": "global"
            },
            "Record": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The select options"
        },
        "defaultValue": "[]"
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
          "text": "The theme of the select"
        },
        "attribute": "theme",
        "reflect": false
      },
      "label": {
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
          "text": "The label of the select in full variant"
        },
        "attribute": "label",
        "reflect": false
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
          "text": "The start icon for the select"
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
          "text": "The middle icon for the select"
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
          "text": "The end icon for the select"
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
          "text": "The hint icon for the select in full variant"
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
          "text": "The hint icon for the select in full variant"
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
          "text": "The hint of the select in full variant"
        },
        "attribute": "hint",
        "reflect": false
      },
      "selectedOption": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "Record<string, unknown>",
          "resolved": "undefined | { [x: string]: unknown; }",
          "references": {
            "Record": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The value selected of the component"
        }
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
          "text": "Change the layout direction to put the label on top or left of select"
        },
        "attribute": "layout-direction",
        "reflect": false,
        "defaultValue": "'vertical'"
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
          "text": "The select is disabled"
        },
        "attribute": "is-disabled",
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
      "valueExtractor": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "(item: any) => string | number",
          "resolved": "(item: any) => string | number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Callback to extract the value from the option"
        },
        "defaultValue": "(item) => item?.value"
      },
      "labelExtractor": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "(item: any) => string",
          "resolved": "(item: any) => string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Callback to extract the label from the option"
        },
        "defaultValue": "(item) => item?.label"
      }
    };
  }
  static get events() {
    return [{
        "method": "mChange",
        "name": "mChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the select value has changed"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "mBlur",
        "name": "mBlur",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when blur the input"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
}
