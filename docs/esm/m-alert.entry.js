import { r as registerInstance, c as createEvent, h } from './index-a19c3827.js';
import './store-fc6c92fd.js';
import { P as PREFIX_BS } from './component-config-025f7932.js';

const ALERT_TYPE_ICON = {
  warning: 'exclamation-circle',
  danger: 'exclamation-triangle',
  success: 'check-circle',
  info: 'info-circle',
  light: 'info-circle',
  dark: 'info-circle',
};

const MAlert = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.mClose = createEvent(this, "mClose", 7);
    this.clickHandler = () => {
      this.mClose.emit();
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
      [`m-alert alert alert-${this.type}`]: true,
      'fade show': !!this.showClose,
    };
  }
  getIcon() {
    return this.icon || ALERT_TYPE_ICON[this.type] || '';
  }
  generateStyleVariables() {
    return Object.assign(Object.assign({}, this.type === 'light' ? { [`--${PREFIX_BS}m-alert-component-icon-color`]: `var(--${PREFIX_BS}secondary)` } : {}), { [`--${PREFIX_BS}m-alert-component-separator-opacity`]: '0.3' });
  }
  render() {
    return (h("div", { class: this.generateClasses(), style: this.generateStyleVariables(), role: "alert" }, (this.showIcon || this.icon) && (h("m-icon", { class: "m-alert-icon", icon: this.getIcon(), familyClass: this.iconFamilyClass, familyPrefix: this.iconFamilyPrefix })), h("div", { class: "m-alert-text" }, h("slot", null)), this.showClose && (h("div", { class: "m-alert-separator" })), this.showClose && (h("button", { type: "button", class: "btn-close", "aria-label": "Close", onClick: this.clickHandler }, h("m-icon", { class: "m-alert-close-icon", icon: "x-lg", familyClass: this.iconFamilyClass, familyPrefix: this.iconFamilyPrefix })))));
  }
};

export { MAlert as m_alert };

//# sourceMappingURL=m-alert.entry.js.map