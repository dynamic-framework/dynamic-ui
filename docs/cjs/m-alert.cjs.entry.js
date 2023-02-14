'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-aa298dc0.js');
const componentInterface = require('./component-interface-4d347a6d.js');

const mAlertCss = "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap\"); .alert{--bs-alert-bg:transparent;--bs-alert-padding-x:1.5rem;--bs-alert-padding-y:1rem;--bs-alert-margin-bottom:1rem;--bs-alert-color:inherit;--bs-alert-border-color:transparent;--bs-alert-border:1px solid var(--bs-alert-border-color);--bs-alert-border-radius:1rem;position:relative;padding:var(--bs-alert-padding-y) var(--bs-alert-padding-x);margin-bottom:var(--bs-alert-margin-bottom);color:var(--bs-alert-color);background-color:var(--bs-alert-bg);border:var(--bs-alert-border);border-radius:var(--bs-alert-border-radius)}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:4.5rem}.alert-dismissible .btn-close{position:absolute;top:0;right:0;z-index:2;padding:1.25rem 1.5rem}.alert-primary{--bs-alert-color:#8a003b;--bs-alert-bg:#facce0;--bs-alert-border-color:#f8b3d0}.alert-primary .alert-link{color:#6e002f}.alert-secondary{--bs-alert-color:#31315b;--bs-alert-bg:#dcdcea;--bs-alert-border-color:#cbcbe0}.alert-secondary .alert-link{color:#272749}.alert-tertiary{--bs-alert-color:#2b2b6e;--bs-alert-bg:#dadaf1;--bs-alert-border-color:#c8c8e9}.alert-tertiary .alert-link{color:#222258}.alert-success{--bs-alert-color:#3e7423;--bs-alert-bg:#e1f3d8;--bs-alert-border-color:#d1edc4}.alert-success .alert-link{color:#325d1c}.alert-info{--bs-alert-color:#2b4882;--bs-alert-bg:#dae4f7;--bs-alert-border-color:#c8d7f4}.alert-info .alert-link{color:#223a68}.alert-warning{--bs-alert-color:#8a6124;--bs-alert-bg:#faecd8;--bs-alert-border-color:#f8e3c5}.alert-warning .alert-link{color:#6e4e1d}.alert-danger{--bs-alert-color:#934141;--bs-alert-bg:#fde2e2;--bs-alert-border-color:#fcd3d3}.alert-danger .alert-link{color:#763434}.alert-light{--bs-alert-color:#636364;--bs-alert-bg:#fefefe;--bs-alert-border-color:#fdfdfe}.alert-light .alert-link{color:#4f4f50}.alert-dark{--bs-alert-color:#110f19;--bs-alert-bg:#d2d1d4;--bs-alert-border-color:#bbbabf}.alert-dark .alert-link{color:#0e0c14}.alert-primary{--bs-alert-bg:var(--bs-primary);--bs-alert-color:var(--bs-white);--bs-alert-icon-bg:var(--bs-white);--bs-alert-icon-color:var(--bs-alert-bg);--bs-alert-separator:var(--bs-white);--bs-btn-close-color:var(--bs-white)}.alert-secondary{--bs-alert-bg:var(--bs-secondary);--bs-alert-color:var(--bs-white);--bs-alert-icon-bg:var(--bs-white);--bs-alert-icon-color:var(--bs-alert-bg);--bs-alert-separator:var(--bs-white);--bs-btn-close-color:var(--bs-white)}.alert-tertiary{--bs-alert-bg:var(--bs-tertiary);--bs-alert-color:var(--bs-white);--bs-alert-icon-bg:var(--bs-white);--bs-alert-icon-color:var(--bs-alert-bg);--bs-alert-separator:var(--bs-white);--bs-btn-close-color:var(--bs-white)}.alert-success{--bs-alert-bg:var(--bs-success);--bs-alert-color:var(--bs-white);--bs-alert-icon-bg:var(--bs-white);--bs-alert-icon-color:var(--bs-alert-bg);--bs-alert-separator:var(--bs-white);--bs-btn-close-color:var(--bs-white)}.alert-info{--bs-alert-bg:var(--bs-info);--bs-alert-color:var(--bs-white);--bs-alert-icon-bg:var(--bs-white);--bs-alert-icon-color:var(--bs-alert-bg);--bs-alert-separator:var(--bs-white);--bs-btn-close-color:var(--bs-white)}.alert-warning{--bs-alert-bg:var(--bs-warning);--bs-alert-color:var(--bs-white);--bs-alert-icon-bg:var(--bs-white);--bs-alert-icon-color:var(--bs-alert-bg);--bs-alert-separator:var(--bs-white);--bs-btn-close-color:var(--bs-white)}.alert-danger{--bs-alert-bg:var(--bs-danger);--bs-alert-color:var(--bs-white);--bs-alert-icon-bg:var(--bs-white);--bs-alert-icon-color:var(--bs-alert-bg);--bs-alert-separator:var(--bs-white);--bs-btn-close-color:var(--bs-white)}.alert-dark{--bs-alert-bg:var(--bs-dark);--bs-alert-color:var(--bs-white);--bs-alert-icon-bg:var(--bs-white);--bs-alert-icon-color:var(--bs-alert-bg);--bs-alert-separator:var(--bs-white);--bs-btn-close-color:var(--bs-white)}.alert-light{--bs-alert-bg:var(--bs-light);--bs-alert-color:var(--bs-gray);--bs-alert-icon-bg:var(--bs-alert-color);--bs-alert-icon-color:var(--bs-white);--bs-alert-separator:var(--bs-gray);--bs-btn-close-color:var(--bs-dark);--bs-close-focus-shadow:rgba(var(--bs-dark-rgb), .3)}.alert{--bs-alert-border:0;--bs-alert-gap:1rem;display:flex;gap:var(--bs-alert-gap);align-items:center;justify-content:center}.alert .btn-close{color:var(--bs-alert-color);background:none}.alert .separator{width:1px;height:36px;background:var(--bs-alert-separator);opacity:0.3}.alert .alert-icon{display:flex;align-items:center;justify-content:center;min-width:25px;min-height:25px;color:var(--bs-alert-icon-color);vertical-align:middle;background-color:var(--bs-alert-icon-bg);border:0;border-radius:50rem}.alert .alert-text{--bs-alert-font-size:1rem;--bs-alert-line-height:24px;font-size:var(--bs-alert-font-size);line-height:var(--bs-alert-line-height)}";

const MAlert = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.mClose = index.createEvent(this, "mClose", 7);
    this.clickHandler = () => {
      this.mClose.emit();
    };
    this.theme = 'warning';
    this.showIcon = false;
    this.showClose = undefined;
  }
  generateClasses() {
    return {
      [`alert alert-${this.theme}`]: true,
      'fade show': !!this.showClose,
    };
  }
  iconState() {
    return componentInterface.ICON_STATE[this.theme] || '';
  }
  render() {
    return (index.h("div", { class: this.generateClasses(), role: "alert" }, this.showIcon && (index.h("div", { class: "alert-icon small" }, index.h("m-icon", { icon: this.iconState() }))), index.h("div", { class: "alert-text flex-grow-1" }, index.h("slot", null)), this.showClose && (index.h("div", { class: "separator" })), this.showClose && (index.h("button", { type: "button", class: "btn-close fs-4", "aria-label": "Close", onClick: this.clickHandler }, index.h("m-icon", { icon: "x-lg" })))));
  }
};
MAlert.style = mAlertCss;

exports.m_alert = MAlert;
