'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be9a6731.js');
const store = require('./store-22751436.js');
const componentConfig = require('./component-config-a8f1d95a.js');

const MButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.mClick = index.createEvent(this, "mClick", 3);
    this.clickHandler = (event) => {
      event.stopPropagation();
      this.mClick.emit();
    };
    this.theme = 'primary';
    this.size = undefined;
    this.variant = undefined;
    this.state = undefined;
    this.text = '';
    this.iconStart = undefined;
    this.iconStartFamilyClass = undefined;
    this.iconStartFamilyPrefix = undefined;
    this.iconEnd = undefined;
    this.iconEndFamilyClass = undefined;
    this.iconEndFamilyPrefix = undefined;
    this.value = undefined;
    this.type = 'button';
    this.isPill = false;
    this.isLoading = false;
    this.isDisabled = false;
  }
  generateClasses() {
    const variantClass = this.variant
      ? `btn-${this.variant}-${this.theme}`
      : `btn-${this.theme}`;
    return Object.assign(Object.assign({ btn: true, 'm-button': true, [variantClass]: true, [`btn-${this.size}`]: !!this.size }, (this.state && this.state !== 'disabled') && { [this.state]: true }), { loading: this.isLoading, 'rounded-pill': this.isPill });
  }
  render() {
    return (index.h("button", Object.assign({ class: this.generateClasses(), type: this.type, disabled: this.state === 'disabled' || this.isLoading || this.isDisabled }, this.value && { value: this.value }, { onClick: this.clickHandler }), this.iconStart && (index.h("m-icon", { icon: this.iconStart, familyClass: this.iconStartFamilyClass, familyPrefix: this.iconStartFamilyPrefix })), (this.text && !this.isLoading) && (index.h("span", null, this.text)), this.isLoading && (index.h("span", { class: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true" }, index.h("span", { class: "visually-hidden" }, "Loading..."))), (this.iconEnd) && (index.h("m-icon", { icon: this.iconEnd, familyClass: this.iconEndFamilyClass, familyPrefix: this.iconEndFamilyPrefix }))));
  }
};

const MIcon = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.icon = undefined;
    this.theme = undefined;
    this.innerClass = undefined;
    this.size = '1.5rem';
    this.isLoading = false;
    this.loadingDuration = 1.8;
    this.hasCircle = false;
    this.circleSize = `calc(var(--${componentConfig.PREFIX_BS}m-icon-component-size) * 1)`;
    this.color = undefined;
    this.backgroundColor = undefined;
    this.familyClass = store.state.iconFamilyClass;
    this.familyPrefix = store.state.iconFamilyPrefix;
  }
  getColorStyle() {
    if (this.color) {
      return { [`--${componentConfig.PREFIX_BS}m-icon-component-color`]: this.color };
    }
    if (this.theme) {
      return { [`--${componentConfig.PREFIX_BS}m-icon-component-color`]: `var(--${componentConfig.PREFIX_BS}${this.theme})` };
    }
    return {};
  }
  getBackgroundStyle() {
    if (this.backgroundColor) {
      return { [`--${componentConfig.PREFIX_BS}m-icon-component-bg-color`]: this.backgroundColor };
    }
    if (this.hasCircle) {
      if (this.theme) {
        return { [`--${componentConfig.PREFIX_BS}m-icon-component-bg-color`]: `rgba(var(--${componentConfig.PREFIX_BS}${this.theme}-rgb), 0.1)` };
      }
      return { [`--${componentConfig.PREFIX_BS}m-icon-component-bg-color`]: `rgba(var(--${componentConfig.PREFIX_BS}body-color-rgb), 0.1)` };
    }
    return {};
  }
  getCircleSizeStyle() {
    if (this.hasCircle) {
      return { [`--${componentConfig.PREFIX_BS}m-icon-component-padding`]: this.circleSize };
    }
    return { [`--${componentConfig.PREFIX_BS}m-icon-component-padding`]: '0' };
  }
  generateStyleVariables() {
    return Object.assign(Object.assign(Object.assign({ [`--${componentConfig.PREFIX_BS}m-icon-component-size`]: this.size, [`--${componentConfig.PREFIX_BS}m-icon-component-loading-duration`]: `${this.loadingDuration}s` }, this.getColorStyle()), this.getBackgroundStyle()), this.getCircleSizeStyle());
  }
  generateClasses() {
    return {
      'm-icon': true,
      [`${this.innerClass}`]: !!this.innerClass,
      [this.familyClass || store.state.iconFamilyClass]: true,
      [`${this.familyPrefix || store.state.iconFamilyPrefix}${this.icon}`]: true,
      'm-icon-loading': this.isLoading,
    };
  }
  render() {
    return (index.h("i", { class: this.generateClasses(), style: this.generateStyleVariables() }));
  }
};

exports.m_button = MButton;
exports.m_icon = MIcon;

//# sourceMappingURL=m-button_2.cjs.entry.js.map