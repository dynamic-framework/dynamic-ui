'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7e8a8a10.js');

const MProgressBar = class {
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
    return (index.h("div", { class: "m-progress-bar progress" }, index.h("div", { class: this.generateClasses(), role: "progressbar", "aria-label": "Progress bar", style: { width: `${this.currentValue}%` }, "aria-valuenow": this.currentValue, "aria-valuemin": this.minValue, "aria-valuemax": this.maxValue }, !this.hideCurrentValue && this.formatProgress())));
  }
};

exports.m_progress_bar = MProgressBar;

//# sourceMappingURL=m-progress-bar.cjs.entry.js.map