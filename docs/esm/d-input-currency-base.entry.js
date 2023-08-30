import { r as registerInstance, c as createEvent, h } from './index-a19c3827.js';
import { c as currency_min } from './store-fc6c92fd.js';
import { P as PREFIX_BS } from './component-config-025f7932.js';

const DInputCurrencyBase = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.eventChange = createEvent(this, "eventChange", 7);
    this.eventBlur = createEvent(this, "eventBlur", 7);
    this.eventFocus = createEvent(this, "eventFocus", 7);
    /**
     * Emit input and select values when the values change
     */
    this.changeHandler = (event) => {
      event.stopPropagation();
      this.internalValueAsNumber = (event.detail !== '' && typeof event.detail === 'string')
        ? parseFloat(event.detail)
        : undefined;
      this.internalValueAsFormat = this.internalValueAsNumber !== undefined
        ? currency_min(this.internalValueAsNumber, Object.assign(Object.assign({}, this.currencyOptions), { symbol: '' })).format()
        : '';
      this.eventChange.emit(this.internalValueAsNumber);
    };
    this.blurHandler = (event) => {
      event.stopPropagation();
      this.internalType = 'text';
      this.internalValueAsFormat = this.internalValueAsNumber !== undefined
        ? currency_min(this.internalValueAsNumber, Object.assign(Object.assign({}, this.currencyOptions), { symbol: '' })).format()
        : '';
      this.eventBlur.emit(this.internalValueAsNumber);
    };
    this.focusHandler = (event) => {
      event.stopPropagation();
      this.internalType = 'number';
      this.internalValueAsFormat = this.internalValueAsNumber !== undefined
        ? currency_min(this.internalValueAsNumber, Object.assign(Object.assign({}, this.currencyOptions), { symbol: '' })).format()
        : '';
      this.eventFocus.emit(this.internalValueAsNumber);
    };
    this.wheelHandler = (event) => {
      var _a;
      event.stopPropagation();
      (_a = this.htmlInput) === null || _a === void 0 ? void 0 : _a.innerBlur();
    };
    this.innerId = undefined;
    this.name = undefined;
    this.label = '';
    this.labelIcon = undefined;
    this.labelIconFamilyClass = undefined;
    this.labelIconFamilyPrefix = undefined;
    this.placeholder = '';
    this.value = undefined;
    this.isDisabled = false;
    this.isReadOnly = false;
    this.isLoading = false;
    this.iconFamilyClass = undefined;
    this.iconFamilyPrefix = undefined;
    this.iconStart = undefined;
    this.iconStartFamilyClass = undefined;
    this.iconStartFamilyPrefix = undefined;
    this.iconEnd = undefined;
    this.iconEndFamilyClass = undefined;
    this.iconEndFamilyPrefix = undefined;
    this.hint = undefined;
    this.isInvalid = false;
    this.isValid = false;
    this.minValue = undefined;
    this.maxValue = undefined;
    this.currencyOptions = undefined;
    this.currencyCode = undefined;
    this.internalValueAsNumber = undefined;
    this.internalValueAsFormat = undefined;
    this.internalType = 'text';
    this.internalIsInvalid = false;
  }
  watchValueHandler(newValue) {
    this.internalIsInvalid = !this.isValidValue(newValue);
  }
  isValidValue(value) {
    if (value === undefined) {
      return true;
    }
    if (this.internalType === 'number') {
      return ((this.minValue !== undefined ? value >= this.minValue : true)
        && (this.maxValue !== undefined ? value <= this.maxValue : true));
    }
    return true;
  }
  valueAsType() {
    if (this.internalType === 'number') {
      return this.internalValueAsNumber;
    }
    return this.internalValueAsFormat;
  }
  connectedCallback() {
    this.internalValueAsNumber = this.value;
  }
  componentDidLoad() {
    this.internalType = 'text';
    this.internalValueAsFormat = (this.internalValueAsNumber !== undefined)
      ? currency_min(this.internalValueAsNumber, Object.assign(Object.assign({}, this.currencyOptions), { symbol: '' })).format()
      : '';
  }
  // eslint-disable-next-line class-methods-use-this
  generateStyleVariables() {
    return {
      [`--${PREFIX_BS}input-currency-component-symbol-color`]: `var(--${PREFIX_BS}secondary)`,
      [`--${PREFIX_BS}input-currency-symbol-color`]: `var(--${PREFIX_BS}input-currency-component-symbol-color)`,
    };
  }
  // eslint-disable-next-line class-methods-use-this
  generateSymbolStyleVariables() {
    return { color: `var(--${PREFIX_BS}m-input-currency-symbol-color)` };
  }
  render() {
    return (h("d-input", { ref: (el) => (this.htmlInput = el), style: this.generateStyleVariables(), innerId: this.innerId, name: this.name, label: this.label, labelIcon: this.labelIcon, labelIconFamilyClass: this.labelIconFamilyClass, labelIconFamilyPrefix: this.labelIconFamilyPrefix, placeholder: this.placeholder, value: this.valueAsType(), iconStart: this.iconStart, iconStartFamilyClass: this.iconStartFamilyClass, iconStartFamilyPrefix: this.iconStartFamilyPrefix, iconEnd: this.iconEnd, iconEndFamilyClass: this.iconEndFamilyClass, iconEndFamilyPrefix: this.iconEndFamilyPrefix, isDisabled: this.isDisabled, isReadOnly: this.isReadOnly, isLoading: this.isLoading, hint: this.hint, isInvalid: this.isInvalid, isValid: this.isValid, type: this.internalType, innerInputMode: "decimal", pattern: "^[0-9]", onEventChange: this.changeHandler, onEventBlur: this.blurHandler, onEventFocus: this.focusHandler, onEventWheel: this.wheelHandler }, h("span", { slot: "input-start", style: this.generateSymbolStyleVariables() }, this.currencyCode || this.currencyOptions.symbol)));
  }
  static get watchers() { return {
    "value": ["watchValueHandler"]
  }; }
};

export { DInputCurrencyBase as d_input_currency_base };

//# sourceMappingURL=d-input-currency-base.entry.js.map