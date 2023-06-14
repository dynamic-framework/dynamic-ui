import { r as registerInstance, c as createEvent, h, H as Host } from './index-39190b44.js';
import { c as currency_min } from './currency.min-03df623a.js';

const mCurrencyBaseCss = "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap\"); .form-control-layout-currency .form-select{--bs-form-select-bg-size:12px;flex:none;width:max-content;padding-right:12px}.form-control-layout-currency .form-select,.form-control-layout-currency .form-control{border-width:0;outline-width:0;box-shadow:none}.form-control-layout-currency .form-control::-webkit-inner-spin-button,.form-control-layout-currency .form-control::-webkit-outer-spin-button{appearance:none;margin:0}.form-control-layout-currency .form-control-icon{display:flex;align-items:center;justify-content:center}.form-control-layout-currency .input-group.disabled,.form-control-layout-currency .form-control:disabled,.form-control-layout-currency .form-select:disabled{background-color:var(--bs-light)}.form-control-layout-currency .input-group.disabled{border-color:var(--bs-gray-light)}.form-control-layout-currency .input-group.disabled:hover{box-shadow:none}.form-control-layout-currency.form-control-layout-currency-prime{--bs-input-group-bg:transparent;--bs-input-group-border-radius:0}.form-control-layout-currency.form-control-layout-currency-prime .form-select,.form-control-layout-currency.form-control-layout-currency-prime .form-control:focus{background-color:var(--bs-input-group-bg)}.form-control-layout-currency.form-control-layout-currency-prime .form-control{padding-top:calc((56px - (3rem + 2px)) / 2);padding-bottom:calc((56px - (3rem + 2px)) / 2);font-size:2rem;line-height:3rem;text-align:center}.form-control-layout-currency.form-control-layout-currency-prime .form-control-input{display:flex;flex-direction:column;align-items:center;justify-content:center}.form-control-layout-currency.form-control-layout-currency-prime .input-group{border-top-color:transparent;border-right-color:transparent;border-bottom-color:var(--bs-input-border-color);border-left-color:transparent}.form-control-layout-currency.form-control-layout-currency-prime .input-group:focus-within,.form-control-layout-currency.form-control-layout-currency-prime .input-group:focus{border-color:var(--bs-input-border-color);--bs-input-group-bg:var(--bs-white);--bs-input-group-border-radius:0.5rem}.form-control-layout-currency.form-control-layout-currency-prime .input-group:hover{box-shadow:none}.form-control-layout-currency.form-control-theme-primary label,.form-control-layout-currency.form-control-theme-primary .input-group-text,.form-control-layout-currency.form-control-theme-primary .input-group-icon,.form-control-layout-currency.form-control-theme-primary .hint{color:var(--bs-primary)}.form-control-layout-currency.form-control-theme-primary .input-group{--bs-input-border-color:var(--bs-primary)}.form-control-layout-currency:hover.form-control-theme-primary .input-group-text,.form-control-layout-currency:hover.form-control-theme-primary .input-group-icon,.form-control-layout-currency.hover.form-control-theme-primary .input-group-text,.form-control-layout-currency.hover.form-control-theme-primary .input-group-icon{color:var(--bs-primary-hover)}.form-control-layout-currency:hover.form-control-theme-primary .input-group,.form-control-layout-currency.hover.form-control-theme-primary .input-group{--bs-input-hover-border-color:var(--bs-primary-hover);--bs-input-border-color:var(--bs-primary-hover)}.form-control-layout-currency:hover.form-control-theme-primary:not(.form-control-layout-currency-prime) .input-group:not(.disabled),.form-control-layout-currency.hover.form-control-theme-primary:not(.form-control-layout-currency-prime) .input-group:not(.disabled){box-shadow:0 0 0 1px var(--bs-primary-hover)}.form-control-layout-currency.form-control-theme-secondary label,.form-control-layout-currency.form-control-theme-secondary .input-group-text,.form-control-layout-currency.form-control-theme-secondary .input-group-icon,.form-control-layout-currency.form-control-theme-secondary .hint{color:var(--bs-secondary)}.form-control-layout-currency.form-control-theme-secondary .input-group{--bs-input-border-color:var(--bs-secondary)}.form-control-layout-currency:hover.form-control-theme-secondary .input-group-text,.form-control-layout-currency:hover.form-control-theme-secondary .input-group-icon,.form-control-layout-currency.hover.form-control-theme-secondary .input-group-text,.form-control-layout-currency.hover.form-control-theme-secondary .input-group-icon{color:var(--bs-secondary-hover)}.form-control-layout-currency:hover.form-control-theme-secondary .input-group,.form-control-layout-currency.hover.form-control-theme-secondary .input-group{--bs-input-hover-border-color:var(--bs-secondary-hover);--bs-input-border-color:var(--bs-secondary-hover)}.form-control-layout-currency:hover.form-control-theme-secondary:not(.form-control-layout-currency-prime) .input-group:not(.disabled),.form-control-layout-currency.hover.form-control-theme-secondary:not(.form-control-layout-currency-prime) .input-group:not(.disabled){box-shadow:0 0 0 1px var(--bs-secondary-hover)}.form-control-layout-currency.form-control-theme-tertiary label,.form-control-layout-currency.form-control-theme-tertiary .input-group-text,.form-control-layout-currency.form-control-theme-tertiary .input-group-icon,.form-control-layout-currency.form-control-theme-tertiary .hint{color:var(--bs-tertiary)}.form-control-layout-currency.form-control-theme-tertiary .input-group{--bs-input-border-color:var(--bs-tertiary)}.form-control-layout-currency:hover.form-control-theme-tertiary .input-group-text,.form-control-layout-currency:hover.form-control-theme-tertiary .input-group-icon,.form-control-layout-currency.hover.form-control-theme-tertiary .input-group-text,.form-control-layout-currency.hover.form-control-theme-tertiary .input-group-icon{color:var(--bs-tertiary-hover)}.form-control-layout-currency:hover.form-control-theme-tertiary .input-group,.form-control-layout-currency.hover.form-control-theme-tertiary .input-group{--bs-input-hover-border-color:var(--bs-tertiary-hover);--bs-input-border-color:var(--bs-tertiary-hover)}.form-control-layout-currency:hover.form-control-theme-tertiary:not(.form-control-layout-currency-prime) .input-group:not(.disabled),.form-control-layout-currency.hover.form-control-theme-tertiary:not(.form-control-layout-currency-prime) .input-group:not(.disabled){box-shadow:0 0 0 1px var(--bs-tertiary-hover)}.form-control-layout-currency.form-control-theme-success label,.form-control-layout-currency.form-control-theme-success .input-group-text,.form-control-layout-currency.form-control-theme-success .input-group-icon,.form-control-layout-currency.form-control-theme-success .hint{color:var(--bs-success)}.form-control-layout-currency.form-control-theme-success .input-group{--bs-input-border-color:var(--bs-success)}.form-control-layout-currency:hover.form-control-theme-success .input-group-text,.form-control-layout-currency:hover.form-control-theme-success .input-group-icon,.form-control-layout-currency.hover.form-control-theme-success .input-group-text,.form-control-layout-currency.hover.form-control-theme-success .input-group-icon{color:var(--bs-success-hover)}.form-control-layout-currency:hover.form-control-theme-success .input-group,.form-control-layout-currency.hover.form-control-theme-success .input-group{--bs-input-hover-border-color:var(--bs-success-hover);--bs-input-border-color:var(--bs-success-hover)}.form-control-layout-currency:hover.form-control-theme-success:not(.form-control-layout-currency-prime) .input-group:not(.disabled),.form-control-layout-currency.hover.form-control-theme-success:not(.form-control-layout-currency-prime) .input-group:not(.disabled){box-shadow:0 0 0 1px var(--bs-success-hover)}.form-control-layout-currency.form-control-theme-info label,.form-control-layout-currency.form-control-theme-info .input-group-text,.form-control-layout-currency.form-control-theme-info .input-group-icon,.form-control-layout-currency.form-control-theme-info .hint{color:var(--bs-info)}.form-control-layout-currency.form-control-theme-info .input-group{--bs-input-border-color:var(--bs-info)}.form-control-layout-currency:hover.form-control-theme-info .input-group-text,.form-control-layout-currency:hover.form-control-theme-info .input-group-icon,.form-control-layout-currency.hover.form-control-theme-info .input-group-text,.form-control-layout-currency.hover.form-control-theme-info .input-group-icon{color:var(--bs-info-hover)}.form-control-layout-currency:hover.form-control-theme-info .input-group,.form-control-layout-currency.hover.form-control-theme-info .input-group{--bs-input-hover-border-color:var(--bs-info-hover);--bs-input-border-color:var(--bs-info-hover)}.form-control-layout-currency:hover.form-control-theme-info:not(.form-control-layout-currency-prime) .input-group:not(.disabled),.form-control-layout-currency.hover.form-control-theme-info:not(.form-control-layout-currency-prime) .input-group:not(.disabled){box-shadow:0 0 0 1px var(--bs-info-hover)}.form-control-layout-currency.form-control-theme-warning label,.form-control-layout-currency.form-control-theme-warning .input-group-text,.form-control-layout-currency.form-control-theme-warning .input-group-icon,.form-control-layout-currency.form-control-theme-warning .hint{color:var(--bs-warning)}.form-control-layout-currency.form-control-theme-warning .input-group{--bs-input-border-color:var(--bs-warning)}.form-control-layout-currency:hover.form-control-theme-warning .input-group-text,.form-control-layout-currency:hover.form-control-theme-warning .input-group-icon,.form-control-layout-currency.hover.form-control-theme-warning .input-group-text,.form-control-layout-currency.hover.form-control-theme-warning .input-group-icon{color:var(--bs-warning-hover)}.form-control-layout-currency:hover.form-control-theme-warning .input-group,.form-control-layout-currency.hover.form-control-theme-warning .input-group{--bs-input-hover-border-color:var(--bs-warning-hover);--bs-input-border-color:var(--bs-warning-hover)}.form-control-layout-currency:hover.form-control-theme-warning:not(.form-control-layout-currency-prime) .input-group:not(.disabled),.form-control-layout-currency.hover.form-control-theme-warning:not(.form-control-layout-currency-prime) .input-group:not(.disabled){box-shadow:0 0 0 1px var(--bs-warning-hover)}.form-control-layout-currency.form-control-theme-danger label,.form-control-layout-currency.form-control-theme-danger .input-group-text,.form-control-layout-currency.form-control-theme-danger .input-group-icon,.form-control-layout-currency.form-control-theme-danger .hint{color:var(--bs-danger)}.form-control-layout-currency.form-control-theme-danger .input-group{--bs-input-border-color:var(--bs-danger)}.form-control-layout-currency:hover.form-control-theme-danger .input-group-text,.form-control-layout-currency:hover.form-control-theme-danger .input-group-icon,.form-control-layout-currency.hover.form-control-theme-danger .input-group-text,.form-control-layout-currency.hover.form-control-theme-danger .input-group-icon{color:var(--bs-danger-hover)}.form-control-layout-currency:hover.form-control-theme-danger .input-group,.form-control-layout-currency.hover.form-control-theme-danger .input-group{--bs-input-hover-border-color:var(--bs-danger-hover);--bs-input-border-color:var(--bs-danger-hover)}.form-control-layout-currency:hover.form-control-theme-danger:not(.form-control-layout-currency-prime) .input-group:not(.disabled),.form-control-layout-currency.hover.form-control-theme-danger:not(.form-control-layout-currency-prime) .input-group:not(.disabled){box-shadow:0 0 0 1px var(--bs-danger-hover)}";

const MCurrencyBase = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.mChange = createEvent(this, "mChange", 7);
    /**
     * Emit input and select values when the values change
     */
    this.changeHandler = () => {
      var _a;
      this.mChange.emit({
        amount: (this.htmlInput && this.htmlInput.value)
          ? parseFloat(this.htmlInput.value)
          : undefined,
        currency: (_a = this.htmlSelect) === null || _a === void 0 ? void 0 : _a.value,
      });
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.onBlurEvent = (event) => {
      if (!Number.isNaN(event.target.valueAsNumber)) {
        this.internalValue = event.target.valueAsNumber;
      }
      else {
        this.internalValue = undefined;
      }
      this.htmlInput.setAttribute('type', 'text');
      this.htmlInput.value = this.internalValue !== undefined
        ? currency_min(this.internalValue, this.currencyOptions).format()
        : '';
    };
    this.onFocusEvent = () => {
      this.htmlInput.setAttribute('type', 'number');
      if (this.internalValue !== undefined) {
        this.htmlInput.value = `${this.internalValue}`;
      }
    };
    this.onWheelEvent = () => {
      this.htmlInput.blur();
    };
    this.mId = undefined;
    this.label = '';
    this.labelIcon = 'info-circle';
    this.labelIconFamilyClass = undefined;
    this.labelIconFamilyPrefix = undefined;
    this.iconStart = undefined;
    this.iconStartFamilyClass = undefined;
    this.iconStartFamilyPrefix = undefined;
    this.iconMiddle = undefined;
    this.iconMiddleFamilyClass = undefined;
    this.iconMiddleFamilyPrefix = undefined;
    this.iconEnd = undefined;
    this.iconEndFamilyClass = undefined;
    this.iconEndFamilyPrefix = undefined;
    this.selectOptions = [];
    this.valueExtractor = (item) => item === null || item === void 0 ? void 0 : item.value;
    this.labelExtractor = (item) => item === null || item === void 0 ? void 0 : item.label;
    this.placeholder = '';
    this.value = undefined;
    this.minValue = undefined;
    this.maxValue = undefined;
    this.hint = undefined;
    this.hintIconStart = undefined;
    this.hintIconStartFamilyClass = undefined;
    this.hintIconStartFamilyPrefix = undefined;
    this.hintIconEnd = undefined;
    this.hintIconEndFamilyClass = undefined;
    this.hintIconEndFamilyPrefix = undefined;
    this.theme = undefined;
    this.variant = undefined;
    this.currencyOptions = undefined;
    this.layoutDirection = 'vertical';
    this.isDisabled = false;
    this.isLoading = false;
    this.internalTheme = undefined;
    this.internalValue = undefined;
  }
  watchValueHandler(newValue) {
    if (!this.isValid(newValue)) {
      this.internalTheme = 'danger';
      return;
    }
    this.internalTheme = this.theme;
  }
  watchThemeHandler(newValue) {
    this.internalTheme = newValue;
  }
  isValid(value) {
    if (value === undefined) {
      return true;
    }
    if (this.htmlInput.getAttribute('type') === 'number') {
      return ((this.minValue !== undefined ? value >= this.minValue : true)
        && (this.maxValue !== undefined ? value <= this.maxValue : true));
    }
    return true;
  }
  generateHostClasses() {
    return {
      'form-control-layout form-control-layout-currency': true,
      [`form-control-theme-${this.internalTheme}`]: !!this.internalTheme,
      [`form-control-layout-currency-${this.variant}`]: !!this.variant,
      'form-control-layout-horizontal': this.layoutDirection === 'horizontal',
    };
  }
  connectedCallback() {
    this.internalTheme = this.theme;
    this.internalValue = this.value;
  }
  componentDidLoad() {
    this.htmlInput.setAttribute('type', 'text');
    if (this.internalValue !== undefined && !Number.isNaN(this.internalValue)) {
      this.htmlInput.value = currency_min(this.internalValue, this.currencyOptions).format();
    }
    else {
      this.htmlInput.value = '';
    }
  }
  render() {
    return (h(Host, { class: this.generateHostClasses() }, this.label && (h("label", { htmlFor: this.mId }, this.label, h("m-icon", { class: "form-control-icon", icon: this.labelIcon, familyClass: this.labelIconFamilyClass, familyPrefix: this.labelIconFamilyPrefix }))), h("div", { class: "form-control-input" }, h("div", { class: {
        'input-group': true,
        disabled: this.isDisabled || this.isLoading,
      } }, this.iconStart && (h("span", { class: "input-group-text", id: `${this.mId}-start` }, h("m-icon", { class: "form-control-icon", icon: this.iconStart, familyClass: this.iconStartFamilyClass, familyPrefix: this.iconStartFamilyPrefix }))), this.selectOptions.length > 0 && (h("select", {
      // eslint-disable-next-line no-return-assign
      ref: (el) => (this.htmlSelect = el), class: "form-select", disabled: this.isDisabled || this.isLoading, onInput: this.changeHandler
    }, this.selectOptions.map((opt) => (h("option", { value: this.valueExtractor(opt) }, this.labelExtractor(opt)))))), h("input", {
      // eslint-disable-next-line no-return-assign
      ref: (el) => (this.htmlInput = el), id: this.mId, type: "number", disabled: this.isDisabled || this.isLoading, min: this.minValue, max: this.maxValue, class: "form-control", value: this.value, placeholder: this.placeholder
        ? this.placeholder
        : currency_min(0, this.currencyOptions).format(), "aria-label": this.label, "aria-describedby": `${this.mId}-add`, onInput: this.changeHandler, onBlur: this.onBlurEvent, onFocus: this.onFocusEvent, onWheel: this.onWheelEvent
    }), this.iconMiddle && (h("span", { class: "input-group-text", id: `${this.mId}-middle` }, h("m-icon", { class: "form-control-icon", icon: this.iconMiddle, familyClass: this.iconMiddleFamilyClass, familyPrefix: this.iconMiddleFamilyPrefix }))), (this.iconEnd && !this.isLoading) && (h("span", { class: "input-group-text", id: `${this.mId}-end` }, h("m-icon", { class: "form-control-icon", icon: this.iconEnd, familyClass: this.iconEndFamilyClass, familyPrefix: this.iconEndFamilyPrefix }))), this.isLoading && (h("div", { class: "form-control-icon" }, h("span", { class: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true" }, h("span", { class: "visually-hidden" }, "Loading..."))))), this.hint && (h("m-hint", Object.assign({ text: this.hint }, (this.hintIconStart && ({
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
    "value": ["watchValueHandler"],
    "theme": ["watchThemeHandler"]
  }; }
};
MCurrencyBase.style = mCurrencyBaseCss;

export { MCurrencyBase as m_currency_base };
