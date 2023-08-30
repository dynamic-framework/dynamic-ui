'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be9a6731.js');
require('./store-22751436.js');
const componentConfig = require('./component-config-a8f1d95a.js');

const DButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.eventClick = index.createEvent(this, "eventClick", 3);
    this.clickHandler = (event) => {
      if (this.isStopPropagationEnabled) {
        event.stopPropagation();
      }
      this.eventClick.emit();
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
    this.isStopPropagationEnabled = true;
  }
  generateStyleVariables() {
    if (this.isPill) {
      return { [`--${componentConfig.PREFIX_BS}btn-component-border-radius`]: `var(--${componentConfig.PREFIX_BS}border-radius-pill)` };
    }
    return {};
  }
  generateClasses() {
    const variantClass = this.variant
      ? `btn-${this.variant}-${this.theme}`
      : `btn-${this.theme}`;
    return Object.assign(Object.assign({ btn: true, [variantClass]: true, [`btn-${this.size}`]: !!this.size }, (this.state && this.state !== 'disabled') && { [this.state]: true }), { loading: this.isLoading });
  }
  render() {
    return (index.h("button", Object.assign({ class: this.generateClasses(), style: this.generateStyleVariables(), type: this.type, disabled: this.state === 'disabled' || this.isLoading || this.isDisabled }, this.value && { value: this.value }, { onClick: this.clickHandler }), this.iconStart && (index.h("d-icon", { icon: this.iconStart, familyClass: this.iconStartFamilyClass, familyPrefix: this.iconStartFamilyPrefix })), (this.text && !this.isLoading) && (index.h("span", null, this.text)), this.isLoading && (index.h("span", { class: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true" }, index.h("span", { class: "visually-hidden" }, "Loading..."))), (this.iconEnd) && (index.h("d-icon", { icon: this.iconEnd, familyClass: this.iconEndFamilyClass, familyPrefix: this.iconEndFamilyPrefix }))));
  }
};

exports.d_button = DButton;

//# sourceMappingURL=d-button.cjs.entry.js.map