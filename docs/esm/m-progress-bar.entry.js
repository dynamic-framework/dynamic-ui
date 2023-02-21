import { r as registerInstance, h, H as Host } from './index-39190b44.js';

const mProgressBarCss = "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap\"); :host{display:block}.m-progress-bar{display:flex;flex-direction:row;gap:0.5rem;align-items:center;width:100%}.m-progress-bar .progress{width:100%}.m-progress-bar .progress.dark-mode{--bs-progress-bar-bg:#fff;--bs-progress-bg:rgba(255, 255, 255, 0.5)}.m-progress-bar .progress.dark-mode+.progress-text{color:#fff}.m-progress-bar .progress-bar{border-radius:50rem}.m-progress-bar .progress-text{min-width:4ch;max-width:4ch;font-size:0.813rem;font-weight:700;color:#4848b7}";

const MProgressBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
      'm-progress-bar': true,
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
};
MProgressBar.style = mProgressBarCss;

export { MProgressBar as m_progress_bar };
