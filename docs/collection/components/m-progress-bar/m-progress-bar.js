import { Host, h, } from '@stencil/core';
export class MProgressBar {
  constructor() {
    this.currentValue = undefined;
    this.minValue = 0;
    this.maxValue = 100;
    this.classNameContainer = undefined;
    this.classNameProgress = undefined;
    this.classNameBar = undefined;
    this.enableStripedAnimation = false;
    this.enableDarkMode = false;
  }
  formatProgress() {
    return `${this.currentValue}%`;
  }
  generateHostClasses() {
    return {
      'progress-box': true,
      [`${this.classNameContainer}`]: !!this.classNameContainer,
    };
  }
  generateContainerClasses() {
    return {
      progress: true,
      'dark-mode': this.enableDarkMode,
    };
  }
  generateClasses() {
    return {
      'progress-bar': true,
      [`${this.classNameBar}`]: !!this.classNameBar,
      'progress-bar-striped progress-bar-animated': this.enableStripedAnimation,
    };
  }
  render() {
    return (h(Host, { class: this.generateHostClasses() }, h("div", { class: this.generateContainerClasses() }, h("div", { class: this.generateClasses(), role: "progressbar", "aria-label": "Progress bar", style: { width: `${this.currentValue}%` }, "aria-valuenow": this.currentValue, "aria-valuemin": this.minValue, "aria-valuemax": this.maxValue })), h("span", { class: "progress-text" }, this.formatProgress())));
  }
  static get is() { return "m-progress-bar"; }
  static get originalStyleUrls() {
    return {
      "$": ["m-progress-bar.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["m-progress-bar.css"]
    };
  }
  static get properties() {
    return {
      "currentValue": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Current progress-bar value"
        },
        "attribute": "current-value",
        "reflect": false
      },
      "minValue": {
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
          "text": "Minimum value of the bar"
        },
        "attribute": "min-value",
        "reflect": false,
        "defaultValue": "0"
      },
      "maxValue": {
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
          "text": "Maximum value of the bar"
        },
        "attribute": "max-value",
        "reflect": false,
        "defaultValue": "100"
      },
      "classNameContainer": {
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
          "text": "Additional classes for component container"
        },
        "attribute": "class-name-container",
        "reflect": false
      },
      "classNameProgress": {
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
          "text": "Additional classes for progress container"
        },
        "attribute": "class-name-progress",
        "reflect": false
      },
      "classNameBar": {
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
          "text": "Additional classes for progress bar"
        },
        "attribute": "class-name-bar",
        "reflect": false
      },
      "enableStripedAnimation": {
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
          "text": "Enable striped animation"
        },
        "attribute": "enable-striped-animation",
        "reflect": false,
        "defaultValue": "false"
      },
      "enableDarkMode": {
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
          "text": "Enable dark mode"
        },
        "attribute": "enable-dark-mode",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
}
