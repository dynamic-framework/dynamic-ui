import { h, } from '@stencil/core';
import { PREFIX_BS } from '../../utils';
export class MInputSelect {
  constructor() {
    this.changeHandler = (event) => {
      const { value } = event.target;
      this.mChange.emit(this.options.find((option) => this.valueExtractor(option).toString() === value));
    };
    this.blurHandler = (event) => {
      this.mBlur.emit(event);
    };
    this.iconStartClickHandler = (event) => {
      this.mIconStartClick.emit(event);
    };
    this.iconEndClickHandler = (event) => {
      this.mIconEndClick.emit(event);
    };
    this.mId = undefined;
    this.name = undefined;
    this.label = '';
    this.options = [];
    this.labelIcon = undefined;
    this.labelIconFamilyClass = undefined;
    this.labelIconFamilyPrefix = undefined;
    this.isDisabled = false;
    this.isLoading = false;
    this.iconFamilyClass = undefined;
    this.iconFamilyPrefix = undefined;
    this.iconStart = undefined;
    this.iconStartFamilyClass = undefined;
    this.iconStartFamilyPrefix = undefined;
    this.iconEnd = undefined;
    this.iconEndFamilyClass = undefined;
    this.iconEndFamilyPrefix = undefined;
    this.hint = undefined;
    this.selectedOption = undefined;
    this.valueExtractor = (item) => item === null || item === void 0 ? void 0 : item.value;
    this.labelExtractor = (item) => item === null || item === void 0 ? void 0 : item.label;
  }
  render() {
    return (h("div", { class: "m-input" }, (this.label) && (h("label", { htmlFor: this.mId }, this.label, this.labelIcon && (h("m-icon", { class: "m-input-icon", icon: this.labelIcon, size: `var(--${PREFIX_BS}m-input-label-font-size)`, familyClass: this.labelIconFamilyClass, familyPrefix: this.labelIconFamilyPrefix })))), h("div", { class: "m-input-control" }, h("div", { class: {
        'input-group': true,
        disabled: this.isDisabled || this.isLoading,
      } }, this.iconStart && (h("button", { type: "button", class: "input-group-text", id: `${this.mId}Start`, onClick: this.iconStartClickHandler, disabled: this.isDisabled || this.isLoading }, this.iconStart && (h("m-icon", { class: "m-input-icon", icon: this.iconStart, familyClass: this.iconStartFamilyClass, familyPrefix: this.iconStartFamilyPrefix })))), h("select", { id: this.mId, name: this.name, class: { 'form-select': true }, "aria-label": this.label, disabled: this.isDisabled || this.isLoading, "aria-describedby": `${this.mId}Add ${this.mId}Hint`, onChange: this.changeHandler, onBlur: this.blurHandler }, this.options.map((option) => (h("option", { value: this.valueExtractor(option), selected: this.selectedOption
        && this.valueExtractor(option) === this.valueExtractor(this.selectedOption) }, this.labelExtractor(option))))), (this.iconEnd && !this.isLoading) && (h("button", { type: "button", class: "input-group-text", id: `${this.mId}End`, onClick: this.iconEndClickHandler, disabled: this.isDisabled || this.isLoading }, this.iconEnd && (h("m-icon", { class: "m-input-icon", icon: this.iconEnd, familyClass: this.iconEndFamilyClass, familyPrefix: this.iconEndFamilyPrefix })))), this.isLoading && (h("div", { class: "input-group-text form-control-icon loading" }, h("span", { class: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true" }, h("span", { class: "visually-hidden" }, "Loading..."))))), this.hint && (h("div", { class: "form-text", id: `${this.mId}Hint` }, this.hint)))));
  }
  static get is() { return "m-input-select"; }
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
          "text": "The id of the input"
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
          "text": "The label text"
        },
        "attribute": "label",
        "reflect": false,
        "defaultValue": "''"
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
      "labelIcon": {
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
          "text": "Icon for the label text"
        },
        "attribute": "label-icon",
        "reflect": false
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
          "text": "Icon label family prefix"
        },
        "attribute": "label-icon-family-prefix",
        "reflect": false
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
          "text": "Flag to disable the input"
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
          "text": "Hint to display"
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
      }, {
        "method": "mIconStartClick",
        "name": "mIconStartClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when click on the left icon"
        },
        "complexType": {
          "original": "MouseEvent",
          "resolved": "MouseEvent",
          "references": {
            "MouseEvent": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "mIconEndClick",
        "name": "mIconEndClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when click on the right icon"
        },
        "complexType": {
          "original": "MouseEvent",
          "resolved": "MouseEvent",
          "references": {
            "MouseEvent": {
              "location": "global"
            }
          }
        }
      }];
  }
}
//# sourceMappingURL=m-input-select.js.map
