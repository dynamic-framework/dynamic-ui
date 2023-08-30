'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be9a6731.js');

const DProgress = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h("div", { class: "progress" }, index.h("div", { class: this.generateClasses(), role: "progressbar", "aria-label": "Progress bar", style: { width: `${this.currentValue}%` }, "aria-valuenow": this.currentValue, "aria-valuemin": this.minValue, "aria-valuemax": this.maxValue }, !this.hideCurrentValue && this.formatProgress())));
  }
};

exports.d_progress = DProgress;

//# sourceMappingURL=d-progress.cjs.entry.js.map