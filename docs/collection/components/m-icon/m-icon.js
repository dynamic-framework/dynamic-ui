import { h, } from '@stencil/core';
import state from '../../utils/store';
import { prefixBS } from '../../utils/component-interface';
export class MIcon {
  constructor() {
    this.icon = undefined;
    this.theme = undefined;
    this.size = 'inherit';
    this.isLoading = false;
    this.duration = 1.8;
    this.color = undefined;
    this.backgroundColor = undefined;
    this.familyClass = state.iconFamilyClass;
    this.familyPrefix = state.iconFamilyPrefix;
  }
  generateClasses() {
    return {
      'm-icon': true,
      [this.familyClass]: true,
      [`${this.familyPrefix}${this.icon}`]: true,
      [`m-icon-${this.theme}`]: !!this.theme,
      'm-icon-loading': this.isLoading,
    };
  }
  render() {
    return (h("i", { class: this.generateClasses(), style: Object.assign(Object.assign({ [`--${prefixBS}m-icon-font-size`]: this.size, [`--${prefixBS}m-icon-animation-duration`]: `${this.duration}s` }, this.color && { [`--${prefixBS}m-icon-color`]: this.color }), this.backgroundColor && { [`--${prefixBS}m-icon-bg-color`]: this.backgroundColor }) }));
  }
  static get is() { return "m-icon"; }
  static get originalStyleUrls() {
    return {
      "$": ["m-icon.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["m-icon.css"]
    };
  }
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
          "text": "Font size of the icon"
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "'inherit'"
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
          "text": "Is loading"
        },
        "attribute": "is-loading",
        "reflect": false,
        "defaultValue": "false"
      },
      "duration": {
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
          "text": "Loading animation duration"
        },
        "attribute": "duration",
        "reflect": false,
        "defaultValue": "1.8"
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
          "text": "To set css color"
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
          "text": "To set background color"
        },
        "attribute": "background-color",
        "reflect": false
      },
      "familyClass": {
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
          "text": "Family class"
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
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Family prefix"
        },
        "attribute": "family-prefix",
        "reflect": false,
        "defaultValue": "state.iconFamilyPrefix"
      }
    };
  }
}
