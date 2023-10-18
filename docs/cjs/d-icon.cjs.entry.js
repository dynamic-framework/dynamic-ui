'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be9a6731.js');
const store = require('./store-22751436.js');
const componentConfig = require('./component-config-a8f1d95a.js');

const DIcon = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.icon = undefined;
    this.theme = undefined;
    this.innerClass = undefined;
    this.size = '1.5rem';
    this.isLoading = false;
    this.loadingDuration = 1.8;
    this.hasCircle = false;
    this.circleSize = `calc(var(--${componentConfig.PREFIX_BS}icon-component-size) * 1)`;
    this.color = undefined;
    this.backgroundColor = undefined;
    this.familyClass = store.state.iconFamilyClass;
    this.familyPrefix = store.state.iconFamilyPrefix;
  }
  getColorStyle() {
    if (this.color) {
      return { [`--${componentConfig.PREFIX_BS}icon-component-color`]: this.color };
    }
    if (this.theme) {
      return { [`--${componentConfig.PREFIX_BS}icon-component-color`]: `var(--${componentConfig.PREFIX_BS}${this.theme})` };
    }
    return {};
  }
  getBackgroundStyle() {
    if (this.backgroundColor) {
      return { [`--${componentConfig.PREFIX_BS}icon-component-bg-color`]: this.backgroundColor };
    }
    if (this.hasCircle) {
      if (this.theme) {
        return { [`--${componentConfig.PREFIX_BS}icon-component-bg-color`]: `rgba(var(--${componentConfig.PREFIX_BS}${this.theme}-rgb), 0.1)` };
      }
      return { [`--${componentConfig.PREFIX_BS}icon-component-bg-color`]: `rgba(var(--${componentConfig.PREFIX_BS}body-color-rgb), 0.1)` };
    }
    return {};
  }
  getCircleSizeStyle() {
    if (this.hasCircle) {
      return { [`--${componentConfig.PREFIX_BS}icon-component-padding`]: this.circleSize };
    }
    return { [`--${componentConfig.PREFIX_BS}icon-component-padding`]: '0' };
  }
  generateStyleVariables() {
    return Object.assign(Object.assign(Object.assign({ [`--${componentConfig.PREFIX_BS}icon-component-size`]: this.size, [`--${componentConfig.PREFIX_BS}icon-component-loading-duration`]: `${this.loadingDuration}s` }, this.getColorStyle()), this.getBackgroundStyle()), this.getCircleSizeStyle());
  }
  generateClasses() {
    return {
      'd-icon': true,
      [`${this.innerClass}`]: !!this.innerClass,
      [this.familyClass || store.state.iconFamilyClass]: true,
      [`${this.familyPrefix || store.state.iconFamilyPrefix}${this.icon}`]: true,
      'd-icon-loading': this.isLoading,
    };
  }
  render() {
    return (index.h("i", { class: this.generateClasses(), style: this.generateStyleVariables() }));
  }
};

exports.d_icon = DIcon;

//# sourceMappingURL=d-icon.cjs.entry.js.map