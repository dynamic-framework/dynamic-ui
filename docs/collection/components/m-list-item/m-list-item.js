import { h, Host, Fragment, } from '@stencil/core';
const TAG_TYPE = {
  default: 'div',
  selectable: 'label',
  navegable: 'a',
};
export class MListItem {
  constructor() {
    this.clickHandler = () => {
      var _a;
      (_a = this.mCustomClick) === null || _a === void 0 ? void 0 : _a.emit();
    };
    this.theme = undefined;
    this.text = '';
    this.subtext = '';
    this.value = undefined;
    this.alternativeValue = undefined;
    this.isPill = false;
    this.icon = undefined;
    this.iconFamilyClass = undefined;
    this.iconFamilyPrefix = undefined;
    this.image = null;
    this.variant = undefined;
    this.selectableProps = undefined;
    this.themeValue = 'gray';
    this.customActionEndIcon = undefined;
    this.customActionClass = undefined;
    this.customActionEndIconFamilyClass = undefined;
    this.customActionEndIconFamilyPrefix = undefined;
    this.isLoading = undefined;
    this.navegableProps = undefined;
  }
  getTagType() {
    return this.variant ? TAG_TYPE[this.variant] : TAG_TYPE.default;
  }
  getTagAttributes() {
    var _a;
    switch (this.variant) {
      case 'selectable': {
        return { htmlFor: (_a = this.selectableProps) === null || _a === void 0 ? void 0 : _a.id };
      }
      case 'navegable': {
        return this.navegableProps;
      }
      default:
        return {};
    }
  }
  generateHostClasses() {
    return {
      'list-group-item': true,
      'list-group-item-variant': !!this.variant,
      [`list-group-item-${this.theme}`]: !!this.theme,
      'list-group-item-pill': this.isPill,
    };
  }
  render() {
    var _a, _b, _c, _d;
    const Tag = this.getTagType();
    if (this.variant) {
      return (h(Host, { class: this.generateHostClasses() }, h(Tag, Object.assign({ class: "gap-2" }, this.getTagAttributes()), this.variant === 'selectable' && (h("input", Object.assign({ class: "form-check-input", type: "radio" }, ((_a = this.selectableProps) === null || _a === void 0 ? void 0 : _a.id) && { id: this.selectableProps.id }, ((_b = this.selectableProps) === null || _b === void 0 ? void 0 : _b.name) && { name: this.selectableProps.name }, ((_c = this.selectableProps) === null || _c === void 0 ? void 0 : _c.value) && { value: this.selectableProps.value }, ((_d = this.selectableProps) === null || _d === void 0 ? void 0 : _d.checked) && { checked: this.selectableProps.checked }))), (this.icon || this.image) && (h("div", { class: {
          'list-group-item-picture-container d-inline-flex justify-content-center align-items-center overflow-hidden': true,
          'bg-tertiary': this.image === null,
        } }, this.icon && (h("m-icon", { class: "text-white fs-5", icon: this.icon, familyClass: this.iconFamilyClass, familyPrefix: this.iconFamilyPrefix })), this.image && (h("img", { class: "list-group-item-picture", src: this.image, alt: "" })))), h("div", { class: "d-flex flex-column flex-1" }, h("span", { class: "d-block fw-bold fs-6 text-dark lh-3" }, this.text), !!this.subtext && (h("small", { class: "d-block text-gray lh-3" }, this.subtext))), this.value !== undefined && (h("div", { class: "d-flex flex-column flex-grow-1 text-end" }, h("span", { class: `fw-bold lh-3 text-${this.themeValue}` }, this.value), this.alternativeValue !== undefined && (h("small", { class: "text-gray lh-3" }, this.alternativeValue)))), this.variant === 'navegable' && (h(Fragment, null, this.customActionEndIcon && (h("button", { class: `p-0 m-0 border-0 bg-transparent rounded-pill ${this.customActionClass}`, onClick: (event) => {
          event.stopPropagation();
          this.clickHandler();
        } }, h("m-icon", { class: "text-tertiary fs-5", icon: this.customActionEndIcon, isLoading: this.isLoading, familyClass: this.customActionEndIconFamilyClass, familyPrefix: this.customActionEndIconFamilyPrefix }))), h("m-icon", { class: "text-gray-light fs-5", icon: "chevron-right" }))))));
    }
    return (h(Host, { class: "list-group-item" }, h("span", { class: "gap-3" }, h("span", { class: "flex-grow-1 opacity-40" }, this.text), h("span", { class: "flex-shrink-1 text-end" }, this.value))));
  }
  static get is() { return "m-list-item"; }
  static get originalStyleUrls() {
    return {
      "$": ["m-list-item.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["m-list-item.css"]
    };
  }
  static get properties() {
    return {
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
          "text": "The theme to use."
        },
        "attribute": "theme",
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
          "text": "Main text of the list."
        },
        "attribute": "text",
        "reflect": false,
        "defaultValue": "''"
      },
      "subtext": {
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
          "text": "Subtext of the list."
        },
        "attribute": "subtext",
        "reflect": false,
        "defaultValue": "''"
      },
      "value": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "string | number",
          "resolved": "number | string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Value of the list"
        },
        "attribute": "value",
        "reflect": false
      },
      "alternativeValue": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "string | number",
          "resolved": "number | string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Alternative value"
        },
        "attribute": "alternative-value",
        "reflect": false
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
          "text": "Has borders rounded"
        },
        "attribute": "is-pill",
        "reflect": false,
        "defaultValue": "false"
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
          "text": "The icon to display"
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
          "text": "Icon family class"
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
          "text": "Icon family class"
        },
        "attribute": "icon-family-prefix",
        "reflect": false
      },
      "image": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | null",
          "resolved": "null | string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Url to replace the default icon image"
        },
        "attribute": "image",
        "reflect": false,
        "defaultValue": "null"
      },
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ListItemVariant",
          "resolved": "\"default\" | \"navegable\" | \"selectable\" | undefined",
          "references": {
            "ListItemVariant": {
              "location": "import",
              "path": "./m-list-item-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Variant for text item list or complete item list"
        },
        "attribute": "variant",
        "reflect": false
      },
      "selectableProps": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "SelectableProps",
          "resolved": "undefined | { id: string; name: string; value?: string | number | undefined; checked?: boolean | undefined; }",
          "references": {
            "SelectableProps": {
              "location": "import",
              "path": "./m-list-item-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Props for the list item selectable variant"
        }
      },
      "themeValue": {
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
          "text": "Theme to apply in the list value"
        },
        "attribute": "theme-value",
        "reflect": false,
        "defaultValue": "'gray'"
      },
      "customActionEndIcon": {
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
          "text": "End custom icon"
        },
        "attribute": "custom-action-end-icon",
        "reflect": false
      },
      "customActionClass": {
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
          "text": "Class for button custom action"
        },
        "attribute": "custom-action-class",
        "reflect": false
      },
      "customActionEndIconFamilyClass": {
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
          "text": "Family class for custom action icon"
        },
        "attribute": "custom-action-end-icon-family-class",
        "reflect": false
      },
      "customActionEndIconFamilyPrefix": {
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
          "text": "Family prefix for custom action icon"
        },
        "attribute": "custom-action-end-icon-family-prefix",
        "reflect": false
      },
      "isLoading": {
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
          "text": "Right custom icon clickable"
        },
        "attribute": "is-loading",
        "reflect": false
      },
      "navegableProps": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "NavegableProps",
          "resolved": "undefined | { href: string; target?: string | undefined; 'aria-current'?: string | undefined; }",
          "references": {
            "NavegableProps": {
              "location": "import",
              "path": "../../utils/component-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Props for the list item navegable variant"
        }
      }
    };
  }
  static get events() {
    return [{
        "method": "mCustomClick",
        "name": "mCustomClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the right custom icon has been clicked."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
}
