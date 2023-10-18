import { r as registerInstance, h } from './index-a19c3827.js';
import { a as state } from './store-fc6c92fd.js';
import { P as PREFIX_BS } from './component-config-025f7932.js';

const DIcon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.icon = undefined;
    this.theme = undefined;
    this.innerClass = undefined;
    this.size = '1.5rem';
    this.isLoading = false;
    this.loadingDuration = 1.8;
    this.hasCircle = false;
    this.circleSize = `calc(var(--${PREFIX_BS}icon-component-size) * 1)`;
    this.color = undefined;
    this.backgroundColor = undefined;
    this.familyClass = state.iconFamilyClass;
    this.familyPrefix = state.iconFamilyPrefix;
  }
  getColorStyle() {
    if (this.color) {
      return { [`--${PREFIX_BS}icon-component-color`]: this.color };
    }
    if (this.theme) {
      return { [`--${PREFIX_BS}icon-component-color`]: `var(--${PREFIX_BS}${this.theme})` };
    }
    return {};
  }
  getBackgroundStyle() {
    if (this.backgroundColor) {
      return { [`--${PREFIX_BS}icon-component-bg-color`]: this.backgroundColor };
    }
    if (this.hasCircle) {
      if (this.theme) {
        return { [`--${PREFIX_BS}icon-component-bg-color`]: `rgba(var(--${PREFIX_BS}${this.theme}-rgb), 0.1)` };
      }
      return { [`--${PREFIX_BS}icon-component-bg-color`]: `rgba(var(--${PREFIX_BS}body-color-rgb), 0.1)` };
    }
    return {};
  }
  getCircleSizeStyle() {
    if (this.hasCircle) {
      return { [`--${PREFIX_BS}icon-component-padding`]: this.circleSize };
    }
    return { [`--${PREFIX_BS}icon-component-padding`]: '0' };
  }
  generateStyleVariables() {
    return Object.assign(Object.assign(Object.assign({ [`--${PREFIX_BS}icon-component-size`]: this.size, [`--${PREFIX_BS}icon-component-loading-duration`]: `${this.loadingDuration}s` }, this.getColorStyle()), this.getBackgroundStyle()), this.getCircleSizeStyle());
  }
  generateClasses() {
    return {
      'd-icon': true,
      [`${this.innerClass}`]: !!this.innerClass,
      [this.familyClass || state.iconFamilyClass]: true,
      [`${this.familyPrefix || state.iconFamilyPrefix}${this.icon}`]: true,
      'd-icon-loading': this.isLoading,
    };
  }
  render() {
    return (h("i", { class: this.generateClasses(), style: this.generateStyleVariables() }));
  }
};

export { DIcon as d_icon };

//# sourceMappingURL=d-icon.entry.js.map