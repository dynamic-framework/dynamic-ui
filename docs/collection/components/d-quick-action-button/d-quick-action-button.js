import { h, } from '@stencil/core';
import { PREFIX_BS } from '../../utils';
export class DQuickActionButton {
  constructor() {
    this.globalClickHandler = () => {
      if (this.actionLinkText) {
        return;
      }
      this.eventClick.emit();
    };
    this.actionLinkClickHandler = (event) => {
      event.stopPropagation();
      if (!this.actionLinkText) {
        return;
      }
      this.eventClick.emit();
    };
    this.secondActionLinkClickHandler = (event) => {
      event.stopPropagation();
      this.eventClickSecondary.emit();
    };
    this.line1 = undefined;
    this.line2 = undefined;
    this.actionLinkText = undefined;
    this.actionLinkTheme = 'secondary';
    this.actionIcon = undefined;
    this.secondaryActionIcon = undefined;
    this.actionIconFamilyClass = undefined;
    this.actionIconFamilyPrefix = undefined;
    this.representativeImage = undefined;
    this.representativeIcon = undefined;
    this.representativeIconTheme = 'secondary';
    this.representativeIconHasCircle = false;
    this.representativeIconFamilyClass = undefined;
    this.representativeIconFamilyPrefix = undefined;
  }
  getTag() {
    return this.actionLinkText ? 'div' : 'button';
  }
  render() {
    const Tag = this.getTag();
    return (h(Tag, Object.assign({ class: "d-quick-action-button" }, !this.actionLinkText && { onClick: this.globalClickHandler }), this.representativeIcon && (h("d-icon", { class: "d-quick-action-button-representative-icon", size: (this.representativeIconHasCircle
        ? `var(--${PREFIX_BS}quick-action-button-representative-icon-size)`
        : `var(--${PREFIX_BS}quick-action-button-representative-image-size)`), icon: this.representativeIcon, hasCircle: this.representativeIconHasCircle, theme: this.representativeIconTheme, familyClass: this.representativeIconFamilyClass, familyPrefix: this.representativeIconFamilyPrefix })), this.representativeImage && (h("img", { class: "d-quick-action-button-representative-image", src: this.representativeImage, alt: "" })), h("div", { class: "d-quick-action-button-content" }, h("div", { class: "d-quick-action-button-text" }, h("span", { class: "d-quick-action-button-line1" }, this.line1), h("small", { class: "d-quick-action-button-line2" }, this.line2))), this.secondaryActionIcon && (h("d-button", { class: "d-quick-action-button-secondary-action-link", type: "button", variant: "link", iconStart: this.secondaryActionIcon, iconStartFamilyClass: this.actionIconFamilyClass, iconStartFamilyPrefix: this.actionIconFamilyPrefix, theme: this.actionLinkTheme, onEventClick: this.secondActionLinkClickHandler })), (this.actionLinkText && !this.actionIcon) && (h("d-button", { class: "d-quick-action-button-action-link", type: "button", variant: "link", theme: this.actionLinkTheme, text: this.actionLinkText, onEventClick: this.actionLinkClickHandler })), (this.actionIcon && !this.actionLinkText) && (h("d-icon", { class: "d-quick-action-button-action-icon", icon: this.actionIcon, size: `var(--${PREFIX_BS}quick-action-button-action-icon-size)`, familyClass: this.actionIconFamilyClass, familyPrefix: this.actionIconFamilyPrefix }))));
  }
  static get is() { return "d-quick-action-button"; }
  static get properties() {
    return {
      "line1": {
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
          "text": "The title"
        },
        "attribute": "line-1",
        "reflect": false
      },
      "line2": {
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
          "text": "The subtitle"
        },
        "attribute": "line-2",
        "reflect": false
      },
      "actionLinkText": {
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
          "text": "Action link text, displayed when the icon is not set"
        },
        "attribute": "action-link-text",
        "reflect": false
      },
      "actionLinkTheme": {
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
          "text": "Action link theme"
        },
        "attribute": "action-link-theme",
        "reflect": false,
        "defaultValue": "'secondary'"
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
          "text": "The icon to indicate the action"
        },
        "attribute": "action-icon",
        "reflect": false
      },
      "secondaryActionIcon": {
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
          "text": "Second action icon"
        },
        "attribute": "secondary-action-icon",
        "reflect": false
      },
      "actionIconFamilyClass": {
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
        "attribute": "action-icon-family-class",
        "reflect": false
      },
      "actionIconFamilyPrefix": {
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
        "attribute": "action-icon-family-prefix",
        "reflect": false
      },
      "representativeImage": {
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
          "text": "Representative image"
        },
        "attribute": "representative-image",
        "reflect": false
      },
      "representativeIcon": {
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
          "text": "Representative icon, displayed when the representativeImage is not set"
        },
        "attribute": "representative-icon",
        "reflect": false
      },
      "representativeIconTheme": {
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
          "text": "Representative icon theme"
        },
        "attribute": "representative-icon-theme",
        "reflect": false,
        "defaultValue": "'secondary'"
      },
      "representativeIconHasCircle": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean | undefined",
          "resolved": "boolean | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Representative icon circle"
        },
        "attribute": "representative-icon-has-circle",
        "reflect": false,
        "defaultValue": "false"
      },
      "representativeIconFamilyClass": {
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
        "attribute": "representative-icon-family-class",
        "reflect": false
      },
      "representativeIconFamilyPrefix": {
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
        "attribute": "representative-icon-family-prefix",
        "reflect": false
      }
    };
  }
  static get events() {
    return [{
        "method": "eventClick",
        "name": "eventClick",
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
      }, {
        "method": "eventClickSecondary",
        "name": "eventClickSecondary",
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
//# sourceMappingURL=d-quick-action-button.js.map
