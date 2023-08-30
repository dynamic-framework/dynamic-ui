import { r as registerInstance, c as createEvent, h } from './index-a19c3827.js';
import './store-fc6c92fd.js';
import { P as PREFIX_BS } from './component-config-025f7932.js';

const DButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.eventClick = createEvent(this, "eventClick", 3);
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
      return { [`--${PREFIX_BS}btn-component-border-radius`]: `var(--${PREFIX_BS}border-radius-pill)` };
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
    return (h("button", Object.assign({ class: this.generateClasses(), style: this.generateStyleVariables(), type: this.type, disabled: this.state === 'disabled' || this.isLoading || this.isDisabled }, this.value && { value: this.value }, { onClick: this.clickHandler }), this.iconStart && (h("d-icon", { icon: this.iconStart, familyClass: this.iconStartFamilyClass, familyPrefix: this.iconStartFamilyPrefix })), (this.text && !this.isLoading) && (h("span", null, this.text)), this.isLoading && (h("span", { class: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true" }, h("span", { class: "visually-hidden" }, "Loading..."))), (this.iconEnd) && (h("d-icon", { icon: this.iconEnd, familyClass: this.iconEndFamilyClass, familyPrefix: this.iconEndFamilyPrefix }))));
  }
};

export { DButton as d_button };

//# sourceMappingURL=d-button.entry.js.map