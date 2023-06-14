import { r as registerInstance, c as createEvent, h, H as Host } from './index-39190b44.js';
import { I as ICON_STATE } from './component-interface-66ff0580.js';

const mCounterCss = "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap\"); .form-control-layout-counter .form-control{display:flex;gap:0.5rem;align-items:center;justify-content:center}.form-control-layout-counter .form-control-spacer{display:block;min-width:12px;min-height:12px;background-color:transparent;border-radius:50rem}.form-control-layout-counter .form-control-counter{display:flex;gap:0.25rem;align-items:center;justify-content:center;width:100%;}.form-control-layout-counter .form-control-counter .form-control-counter-input{display:inline-block;flex-grow:1;height:24px;font-weight:700;text-align:center;border:0;outline:0}.form-control-layout-counter .form-control-counter .form-control-counter-input :focus,.form-control-layout-counter .form-control-counter .form-control-counter-input :focus-visible{outline:0}.form-control-layout-counter .form-control-counter .form-control-counter-input::-webkit-outer-spin-button,.form-control-layout-counter .form-control-counter .form-control-counter-input::-webkit-inner-spin-button{appearance:none;margin:0}.form-control-layout-counter .form-control-counter .form-control-counter-input[type=number]{appearance:textfield}.form-control-layout-counter .form-control-counter-btn{display:flex;align-items:center;justify-content:center;width:24px;height:24px;font-size:1.5rem;color:var(--bs-tertiary);background-color:rgba(var(--bs-tertiary-rgb), 0.1);border:0;border-radius:0.5rem}.form-control-layout-counter.form-control-theme-tertiary .form-control-counter-btn{color:var(--bs-tertiary);background:rgba(var(--bs-tertiary-rgb), 0.1)}.form-control-layout-counter.form-control-theme-tertiary .input-group{--bs-input-hover-border-color:var(--bs-tertiary-hover);--bs-input-border-color:var(--bs-tertiary)}.form-control-layout-counter.form-control-theme-warning .form-control-counter-btn{color:var(--bs-warning);background:rgba(var(--bs-warning-rgb), 0.1)}.form-control-layout-counter.form-control-theme-warning .input-group{--bs-input-hover-border-color:var(--bs-warning-hover);--bs-input-border-color:var(--bs-warning)}.form-control-layout-counter.form-control-theme-danger .form-control-counter-btn{color:var(--bs-danger);background:rgba(var(--bs-danger-rgb), 0.1)}.form-control-layout-counter.form-control-theme-danger .input-group{--bs-input-hover-border-color:var(--bs-danger-hover);--bs-input-border-color:var(--bs-danger)}.form-control-layout-counter.form-control-theme-success .form-control-icon.icon-state{font-size:1rem;color:var(--bs-success)}.form-control-layout-counter.form-control-theme-info .form-control-icon.icon-state{font-size:1rem;color:var(--bs-info)}.form-control-layout-counter.form-control-theme-warning .form-control-icon.icon-state{font-size:1rem;color:var(--bs-warning)}.form-control-layout-counter.form-control-theme-danger .form-control-icon.icon-state{font-size:1rem;color:var(--bs-danger)}.form-control-layout-counter-disabled .form-control-counter-btn{color:var(--bs-tertiary);background:rgba(var(--bs-tertiary-rgb), 0.1)}.form-control-layout-counter-disabled .input-group{--bs-input-hover-border-color:var(--bs-gray-light);--bs-input-border-color:var(--bs-gray-light)}.form-control-layout-counter-disabled .form-control-counter-btn,.form-control-layout-counter-disabled .form-control-counter-input{pointer-events:none}.form-control-layout-counter-disabled .form-control-counter-input{background-color:transparent}.form-control-layout-counter-disabled .form-control{background-color:var(--bs-light)}.form-control-layout-counter-disabled.form-control-theme-danger .form-control-counter-btn,.form-control-layout-counter-disabled.form-control-theme-warning .form-control-counter-btn,.form-control-layout-counter-disabled.form-control-theme-tertiary .form-control-counter-btn{color:var(--bs-tertiary);background:rgba(var(--bs-tertiary-rgb), 0.1)}.form-control-layout-counter-disabled.form-control-theme-danger .input-group,.form-control-layout-counter-disabled.form-control-theme-warning .input-group,.form-control-layout-counter-disabled.form-control-theme-tertiary .input-group{--bs-input-hover-border-color:var(--bs-gray-light);--bs-input-border-color:var(--bs-gray-light)}";

const MCounter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.mInput = createEvent(this, "mInput", 7);
    this.mClick = createEvent(this, "mClick", 7);
    this.validStates = Object.keys(ICON_STATE).filter((k) => !['light', 'info'].includes(k));
    this.inputHandler = (event) => {
      const newValue = event.target.value;
      this.internalValue = Number(newValue);
      this.mInput.emit(newValue);
    };
    this.clickHandler = (action) => {
      const currentValue = this.internalValue;
      if (action) {
        const temp = Number(currentValue) + 1;
        this.internalValue = temp <= this.maxValue ? temp : this.maxValue;
      }
      else {
        const temp = Number(currentValue) - 1;
        this.internalValue = temp >= this.minValue ? temp : this.minValue;
      }
      this.mClick.emit(this.internalValue);
    };
    this.mId = undefined;
    this.label = undefined;
    this.labelIcon = 'info-circle';
    this.labelIconFamilyClass = undefined;
    this.labelIconFamilyPrefix = undefined;
    this.hint = undefined;
    this.hintIconStart = undefined;
    this.hintIconStartFamilyClass = undefined;
    this.hintIconStartFamilyPrefix = undefined;
    this.hintIconEnd = undefined;
    this.hintIconEndFamilyClass = undefined;
    this.hintIconEndFamilyPrefix = undefined;
    this.theme = undefined;
    this.minValue = undefined;
    this.maxValue = undefined;
    this.value = undefined;
    this.variant = 'default';
    this.layoutDirection = 'vertical';
    this.isDisabled = false;
    this.isLoading = false;
    this.state = undefined;
    this.internalValue = 0;
  }
  generateHostClasses() {
    return {
      'form-control-layout form-control-layout-counter': true,
      [`form-control-theme-${this.state}`]: !!this.state,
      [`form-control-layout-counter-${this.variant}`]: !!this.variant,
      'form-control-layout-horizontal': this.layoutDirection === 'horizontal',
      'form-control-layout-counter-disabled': this.isDisabled || this.isLoading,
    };
  }
  getTheme(theme) {
    return this.validStates.includes(theme) ? theme : undefined;
  }
  watchThemeHandler(newValue) {
    this.state = this.validStates.includes(newValue) ? newValue : undefined;
  }
  watchValidValueHandler() {
    if (this.internalValue >= this.minValue && this.internalValue <= this.maxValue) {
      this.state = this.theme ? this.getTheme(this.theme) : undefined;
    }
    else {
      this.state = 'danger';
    }
  }
  watchValueHandler() {
    this.internalValue = this.value;
  }
  connectedCallback() {
    this.state = this.theme ? this.getTheme(this.theme) : undefined;
    this.internalValue = this.value;
  }
  render() {
    return (h(Host, { class: this.generateHostClasses() }, this.label && (h("label", { htmlFor: this.mId }, this.label, this.labelIcon && (h("m-icon", { class: "form-control-icon", icon: this.labelIcon, familyClass: this.labelIconFamilyClass, familyPrefix: this.labelIconFamilyPrefix })))), h("div", { class: "form-control-input" }, h("div", { class: "input-group" }, h("div", { class: "form-control" }, h("div", { class: "form-control-spacer" }), h("div", { class: "form-control-counter" }, h("button", { class: "form-control-counter-btn", onClick: () => this.clickHandler(false), disabled: this.isDisabled }, h("m-icon", { icon: "dash" })), h("input", { class: "form-control-counter-input", type: "number", id: this.mId, min: this.minValue, max: this.maxValue, value: this.internalValue, onInput: this.inputHandler, disabled: this.isDisabled }), h("button", { class: "form-control-counter-btn", onClick: () => this.clickHandler(true), disabled: this.isDisabled }, h("m-icon", { icon: "plus" }))), (!this.state && !this.isLoading) && (h("div", { class: "form-control-spacer" })), (this.state && !this.isLoading) && (h("m-icon", { class: "form-control-icon icon-state", icon: ICON_STATE[this.state] })), this.isLoading && (h("div", { class: "form-control-icon" }, h("span", { class: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true" }, h("span", { class: "visually-hidden" }, "Loading...")))))), this.hint && (h("m-hint", Object.assign({ text: this.hint, theme: this.state ? this.getTheme(this.state) : undefined }, (this.hintIconStart && ({
      iconStart: this.hintIconStart,
      iconStartFamilyClass: this.hintIconStartFamilyClass,
      iconStartFamilyPrefix: this.hintIconStartFamilyPrefix,
    })), (this.hintIconEnd && ({
      iconEnd: this.hintIconEnd,
      iconEndFamilyClass: this.hintIconEndFamilyClass,
      iconEndFamilyPrefix: this.hintIconEndFamilyPrefix,
    }))))))));
  }
  static get watchers() { return {
    "theme": ["watchThemeHandler"],
    "internalValue": ["watchValidValueHandler"],
    "value": ["watchValueHandler"]
  }; }
};
MCounter.style = mCounterCss;

export { MCounter as m_counter };
