'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be9a6731.js');
require('./store-22751436.js');
const componentConfig = require('./component-config-a8f1d95a.js');

const ALERT_TYPE_ICON = {
  warning: 'exclamation-circle',
  danger: 'exclamation-triangle',
  success: 'check-circle',
  info: 'info-circle',
  light: 'info-circle',
  dark: 'info-circle',
};

const DAlert = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.eventClose = index.createEvent(this, "eventClose", 7);
    this.clickHandler = () => {
      this.eventClose.emit();
    };
    this.type = 'light';
    this.icon = undefined;
    this.iconFamilyClass = undefined;
    this.iconFamilyPrefix = undefined;
    this.showIcon = false;
    this.showClose = undefined;
  }
  generateClasses() {
    return {
      [`alert alert-${this.type}`]: true,
      'fade show': !!this.showClose,
    };
  }
  getIcon() {
    return this.icon || ALERT_TYPE_ICON[this.type] || '';
  }
  generateStyleVariables() {
    return Object.assign(Object.assign({}, this.type === 'light' ? { [`--${componentConfig.PREFIX_BS}alert-component-icon-color`]: `var(--${componentConfig.PREFIX_BS}secondary)` } : {}), { [`--${componentConfig.PREFIX_BS}alert-component-separator-opacity`]: '0.3' });
  }
  render() {
    return (index.h("div", { class: this.generateClasses(), style: this.generateStyleVariables(), role: "alert" }, (this.showIcon || this.icon) && (index.h("d-icon", { class: "alert-icon", icon: this.getIcon(), familyClass: this.iconFamilyClass, familyPrefix: this.iconFamilyPrefix })), index.h("div", { class: "alert-text" }, index.h("slot", null)), this.showClose && (index.h("div", { class: "alert-separator" })), this.showClose && (index.h("button", { type: "button", class: "btn-close", "aria-label": "Close", onClick: this.clickHandler }, index.h("d-icon", { class: "alert-close-icon", icon: "x-lg", familyClass: this.iconFamilyClass, familyPrefix: this.iconFamilyPrefix })))));
  }
};

exports.d_alert = DAlert;

//# sourceMappingURL=d-alert.cjs.entry.js.map