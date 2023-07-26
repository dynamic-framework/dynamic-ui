import { r as registerInstance, c as createEvent, h } from './index-a19c3827.js';
import { a as state } from './store-fc6c92fd.js';
import { P as PREFIX_BS } from './component-config-025f7932.js';

const MButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.mClick = createEvent(this, "mClick", 3);
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
    return (h("button", Object.assign({ class: this.generateClasses(), type: this.type, disabled: this.state === 'disabled' || this.isLoading || this.isDisabled }, this.value && { value: this.value }, { onClick: this.clickHandler }), this.iconStart && (h("m-icon", { icon: this.iconStart, familyClass: this.iconStartFamilyClass, familyPrefix: this.iconStartFamilyPrefix })), (this.text && !this.isLoading) && (h("span", null, this.text)), this.isLoading && (h("span", { class: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true" }, h("span", { class: "visually-hidden" }, "Loading..."))), (this.iconEnd) && (h("m-icon", { icon: this.iconEnd, familyClass: this.iconEndFamilyClass, familyPrefix: this.iconEndFamilyPrefix }))));
  }
};

const MIcon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.icon = undefined;
    this.theme = undefined;
    this.size = '1.5rem';
    this.isLoading = false;
    this.loadingDuration = 1.8;
    this.hasCircle = false;
    this.circleSize = `calc(var(--${PREFIX_BS}m-icon-component-size) * 1)`;
    this.color = undefined;
    this.backgroundColor = undefined;
    this.familyClass = state.iconFamilyClass;
    this.familyPrefix = state.iconFamilyPrefix;
  }
  getColorStyle() {
    if (this.color) {
      return { [`--${PREFIX_BS}m-icon-component-color`]: this.color };
    }
    if (this.theme) {
      return { [`--${PREFIX_BS}m-icon-component-color`]: `var(--${PREFIX_BS}${this.theme})` };
    }
    return {};
  }
  getBackgroundStyle() {
    if (this.backgroundColor) {
      return { [`--${PREFIX_BS}m-icon-component-bg-color`]: this.backgroundColor };
    }
    if (this.hasCircle) {
      if (this.theme) {
        return { [`--${PREFIX_BS}m-icon-component-bg-color`]: `rgba(var(--${PREFIX_BS}${this.theme}-rgb), 0.1)` };
      }
      return { [`--${PREFIX_BS}m-icon-component-bg-color`]: `rgba(var(--${PREFIX_BS}body-color-rgb), 0.1)` };
    }
    return {};
  }
  getCircleSizeStyle() {
    if (this.hasCircle) {
      return { [`--${PREFIX_BS}m-icon-component-padding`]: this.circleSize };
    }
    return { [`--${PREFIX_BS}m-icon-component-padding`]: '0' };
  }
  generateStyleVariables() {
    return Object.assign(Object.assign(Object.assign({ [`--${PREFIX_BS}m-icon-component-size`]: this.size, [`--${PREFIX_BS}m-icon-component-loading-duration`]: `${this.loadingDuration}s` }, this.getColorStyle()), this.getBackgroundStyle()), this.getCircleSizeStyle());
  }
  generateClasses() {
    return {
      'm-icon': true,
      [this.familyClass || state.iconFamilyClass]: true,
      [`${this.familyPrefix || state.iconFamilyPrefix}${this.icon}`]: true,
      'm-icon-loading': this.isLoading,
    };
  }
  render() {
    return (h("i", { class: this.generateClasses(), style: this.generateStyleVariables() }));
  }
};

export { MButton as m_button, MIcon as m_icon };

//# sourceMappingURL=m-button_2.entry.js.map