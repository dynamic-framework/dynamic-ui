import { h, Host, } from '@stencil/core';
export class MQuickAction {
  constructor() {
    this.clickHandler = () => {
      this.mClick.emit();
    };
    this.text = undefined;
    this.subtext = undefined;
    this.extraInfo = undefined;
    this.icon = 'heart-fill';
    this.iconFamilyClass = undefined;
    this.iconFamilyPrefix = undefined;
    this.image = undefined;
    this.variant = 'extended';
    this.actionWord = undefined;
    this.actionIcon = 'chevron-right';
    this.state = undefined;
  }
  generateHostClasses() {
    return {
      'quick-action-host': true,
      focus: this.state === 'focus',
      disabled: this.state === 'disabled',
    };
  }
  generateButtonClasses() {
    return {
      'quick-action': true,
      [`quick-action-variant-${this.variant}`]: !!this.variant,
      [`quick-action-state-${this.state}`]: !!this.state,
    };
  }
  render() {
    return (h(Host, { class: this.generateHostClasses() }, h("button", { class: this.generateButtonClasses(), onClick: this.clickHandler, disabled: this.state === 'disabled' }, h("div", { class: "quick-action-picture" }, (this.icon && !this.image) && (h("m-icon", { class: "quick-action-icon", icon: this.icon })), this.image && (h("img", { class: "quick-action-img", src: this.image, alt: "Quick action" }))), h("div", { class: "quick-action-content" }, h("div", { class: "quick-action-text" }, h("span", { class: "quick-action-title" }, this.text), this.subtext && (h("small", { class: "quick-action-subtitle" }, this.subtext, this.extraInfo && (` - ${this.extraInfo}`)))), (this.actionIcon && !this.actionWord) && (h("m-icon", { size: "1.125rem", class: "quick-action-link", icon: this.actionIcon, familyClass: this.iconFamilyClass, familyPrefix: this.iconFamilyPrefix })), this.actionWord && (h("small", { class: "quick-action-link" }, this.actionWord))))));
  }
  static get is() { return "m-quick-action"; }
  static get originalStyleUrls() {
    return {
      "$": ["m-quick-action.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["m-quick-action.css"]
    };
  }
  static get properties() {
    return {
      "text": {
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
          "text": "The main text of the quick action"
        },
        "attribute": "text",
        "reflect": false
      },
      "subtext": {
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
          "text": "The subtext of the quick action"
        },
        "attribute": "subtext",
        "reflect": false
      },
      "extraInfo": {
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
          "text": "The extra info of the quick action"
        },
        "attribute": "extra-info",
        "reflect": false
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
          "text": "The icon of the quick action"
        },
        "attribute": "icon",
        "reflect": false,
        "defaultValue": "'heart-fill'"
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
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The image of the quick action"
        },
        "attribute": "image",
        "reflect": false
      },
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "QuickActionVariant",
          "resolved": "\"compact\" | \"extended\" | undefined",
          "references": {
            "QuickActionVariant": {
              "location": "import",
              "path": "./m-quick-action-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The variant of the quick action"
        },
        "attribute": "variant",
        "reflect": false,
        "defaultValue": "'extended'"
      },
      "actionWord": {
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
          "text": "The action word for the quick action"
        },
        "attribute": "action-word",
        "reflect": false
      },
      "actionIcon": {
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
          "text": "The action icon for the quick action"
        },
        "attribute": "action-icon",
        "reflect": false,
        "defaultValue": "'chevron-right'"
      },
      "state": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "QuickActionState",
          "resolved": "\"disabled\" | \"focus\" | \"hover\" | undefined",
          "references": {
            "QuickActionState": {
              "location": "import",
              "path": "./m-quick-action-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The state of the quick action"
        },
        "attribute": "state",
        "reflect": false
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
          "text": "Emitted when the input value has changed"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
}
