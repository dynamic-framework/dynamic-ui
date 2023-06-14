import { h, } from '@stencil/core';
export class MProgressBar {
  constructor() {
    this.currentValue = undefined;
    this.minValue = 0;
    this.maxValue = 100;
    this.hideCurrentValue = false;
    this.enableStripedAnimation = false;
  }
  formatProgress() {
    return `${this.currentValue}%`;
  }
  generateClasses() {
    return {
      'progress-bar': true,
      'progress-bar-striped progress-bar-animated': this.enableStripedAnimation,
    };
  }
  render() {
    return (h("div", { class: "m-progress-bar progress" }, h("div", { class: this.generateClasses(), role: "progressbar", "aria-label": "Progress bar", style: { width: `${this.currentValue}%` }, "aria-valuenow": this.currentValue, "aria-valuemin": this.minValue, "aria-valuemax": this.maxValue }, !this.hideCurrentValue && this.formatProgress())));
  }
  static get is() { return "m-progress-bar"; }
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
          "text": "Current progress value"
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
      "hideCurrentValue": {
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
          "text": "Hide current value"
        },
        "attribute": "hide-current-value",
        "reflect": false,
        "defaultValue": "false"
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
      }
    };
  }
}
//# sourceMappingURL=m-progress-bar.js.map
