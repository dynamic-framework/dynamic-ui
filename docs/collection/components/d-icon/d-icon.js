import { h, } from '@stencil/core';
import state from '../../utils/store';
import { PREFIX_BS } from '../../utils';
export class DIcon {
  constructor() {
    this.icon = undefined;
    this.theme = undefined;
    this.innerClass = undefined;
    this.size = '1.5rem';
    this.isLoading = false;
    this.loadingDuration = 1.8;
    this.hasCircle = false;
    this.circleSize = `calc(var(--${PREFIX_BS}icon-component-size) * 1)`;
    this.color = undefined;
    this.backgroundColor = undefined;
    this.familyClass = state.iconFamilyClass;
    this.familyPrefix = state.iconFamilyPrefix;
  }
  getColorStyle() {
    if (this.color) {
      return { [`--${PREFIX_BS}icon-component-color`]: this.color };
    }
    if (this.theme) {
      return { [`--${PREFIX_BS}icon-component-color`]: `var(--${PREFIX_BS}${this.theme})` };
    }
    return {};
  }
  getBackgroundStyle() {
    if (this.backgroundColor) {
      return { [`--${PREFIX_BS}icon-component-bg-color`]: this.backgroundColor };
    }
    if (this.hasCircle) {
      if (this.theme) {
        return { [`--${PREFIX_BS}icon-component-bg-color`]: `rgba(var(--${PREFIX_BS}${this.theme}-rgb), 0.1)` };
      }
      return { [`--${PREFIX_BS}icon-component-bg-color`]: `rgba(var(--${PREFIX_BS}body-color-rgb), 0.1)` };
    }
    return {};
  }
  getCircleSizeStyle() {
    if (this.hasCircle) {
      return { [`--${PREFIX_BS}icon-component-padding`]: this.circleSize };
    }
    return { [`--${PREFIX_BS}icon-component-padding`]: '0' };
  }
  generateStyleVariables() {
    return Object.assign(Object.assign(Object.assign({ [`--${PREFIX_BS}icon-component-size`]: this.size, [`--${PREFIX_BS}icon-component-loading-duration`]: `${this.loadingDuration}s` }, this.getColorStyle()), this.getBackgroundStyle()), this.getCircleSizeStyle());
  }
  generateClasses() {
    return {
      'd-icon': true,
      [`${this.innerClass}`]: !!this.innerClass,
      [this.familyClass || state.iconFamilyClass]: true,
      [`${this.familyPrefix || state.iconFamilyPrefix}${this.icon}`]: true,
      'd-icon-loading': this.isLoading,
    };
  }
  render() {
    return (h("i", { class: this.generateClasses(), style: this.generateStyleVariables() }));
  }
  static get is() { return "d-icon"; }
  static get properties() {
    return {
      "icon": {
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
          "text": "Name of icon to use (in kebab-case)"
        },
        "attribute": "icon",
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
          "text": "Theme of the icon"
        },
        "attribute": "theme",
        "reflect": false
      },
      "innerClass": {
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
          "text": "Icon class"
        },
        "attribute": "inner-class",
        "reflect": false
      },
      "size": {
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
          "text": "Size of the icon in css length unit"
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "'1.5rem'"
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
          "text": "Enable loading animation"
        },
        "attribute": "is-loading",
        "reflect": false,
        "defaultValue": "false"
      },
      "loadingDuration": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Loading animation duration, in seconds"
        },
        "attribute": "loading-duration",
        "reflect": false,
        "defaultValue": "1.8"
      },
      "hasCircle": {
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
          "text": "Add circle around the icon"
        },
        "attribute": "has-circle",
        "reflect": false,
        "defaultValue": "false"
      },
      "circleSize": {
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
          "text": "Circle size in css length unit"
        },
        "attribute": "circle-size",
        "reflect": false,
        "defaultValue": "`calc(var(--${PREFIX_BS}icon-component-size) * 1)`"
      },
      "color": {
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
          "text": "Icon color in css color unit or var"
        },
        "attribute": "color",
        "reflect": false
      },
      "backgroundColor": {
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
          "text": "Icon background color in css color unit or var"
        },
        "attribute": "background-color",
        "reflect": false
      },
      "familyClass": {
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
          "text": "Change the family class to use another icon suite"
        },
        "attribute": "family-class",
        "reflect": false,
        "defaultValue": "state.iconFamilyClass"
      },
      "familyPrefix": {
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
          "text": "Change the family prefix to use another icon suite"
        },
        "attribute": "family-prefix",
        "reflect": false,
        "defaultValue": "state.iconFamilyPrefix"
      }
    };
  }
}
//# sourceMappingURL=d-icon.js.map
