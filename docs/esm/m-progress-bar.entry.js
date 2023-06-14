import { r as registerInstance, h } from './index-c7f2daf2.js';

const MProgressBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};

export { MProgressBar as m_progress_bar };

//# sourceMappingURL=m-progress-bar.entry.js.map