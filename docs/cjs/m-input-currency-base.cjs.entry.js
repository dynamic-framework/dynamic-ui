'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be9a6731.js');
const store = require('./store-22751436.js');
const componentConfig = require('./component-config-a8f1d95a.js');

const MInputCurrencyBase = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.mChange = index.createEvent(this, "mChange", 7);
    this.mBlur = index.createEvent(this, "mBlur", 7);
    this.mFocus = index.createEvent(this, "mFocus", 7);
    /**
     * Emit input and select values when the values change
     */
    this.changeHandler = (event) => {
      event.stopPropagation();
      this.internalValueAsNumber = (event.detail !== '' && typeof event.detail === 'string')
        ? parseFloat(event.detail)
        : undefined;
      this.internalValueAsFormat = this.internalValueAsNumber !== undefined
        ? store.currency_min(this.internalValueAsNumber, Object.assign(Object.assign({}, this.currencyOptions), { symbol: '' })).format()
        : '';
      this.mChange.emit(this.internalValueAsNumber);
    };
    this.blurHandler = (event) => {
      event.stopPropagation();
      this.internalType = 'text';
      this.internalValueAsFormat = this.internalValueAsNumber !== undefined
        ? store.currency_min(this.internalValueAsNumber, Object.assign(Object.assign({}, this.currencyOptions), { symbol: '' })).format()
        : '';
      this.mBlur.emit(this.internalValueAsNumber);
    };
    this.focusHandler = (event) => {
      event.stopPropagation();
      this.internalType = 'number';
      this.internalValueAsFormat = this.internalValueAsNumber !== undefined
        ? store.currency_min(this.internalValueAsNumber, Object.assign(Object.assign({}, this.currencyOptions), { symbol: '' })).format()
        : '';
      this.mFocus.emit(this.internalValueAsNumber);
    };
    this.wheelHandler = (event) => {
      var _a;
      event.stopPropagation();
      (_a = this.htmlMInputElement) === null || _a === void 0 ? void 0 : _a.blurInput();
    };
    this.mId = undefined;
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
      ? store.currency_min(this.internalValueAsNumber, Object.assign(Object.assign({}, this.currencyOptions), { symbol: '' })).format()
      : '';
  }
  // eslint-disable-next-line class-methods-use-this
  generateStyleVariables() {
    return {
      [`--${componentConfig.PREFIX_BS}m-input-currency-component-symbol-color`]: `var(--${componentConfig.PREFIX_BS}secondary)`,
      [`--${componentConfig.PREFIX_BS}m-input-currency-symbol-color`]: `var(--${componentConfig.PREFIX_BS}m-input-currency-component-symbol-color)`,
    };
  }
  // eslint-disable-next-line class-methods-use-this
  generateSymbolStyleVariables() {
    return { color: `var(--${componentConfig.PREFIX_BS}m-input-currency-symbol-color)` };
  }
  render() {
    return (index.h("m-input", { ref: (el) => (this.htmlMInputElement = el), style: this.generateStyleVariables(), mId: this.mId, name: this.name, label: this.label, labelIcon: this.labelIcon, labelIconFamilyClass: this.labelIconFamilyClass, labelIconFamilyPrefix: this.labelIconFamilyPrefix, placeholder: this.placeholder, value: this.valueAsType(), iconStart: this.iconStart, iconStartFamilyClass: this.iconStartFamilyClass, iconStartFamilyPrefix: this.iconStartFamilyPrefix, iconEnd: this.iconEnd, iconEndFamilyClass: this.iconEndFamilyClass, iconEndFamilyPrefix: this.iconEndFamilyPrefix, isDisabled: this.isDisabled, isReadOnly: this.isReadOnly, isLoading: this.isLoading, hint: this.hint, isInvalid: this.isInvalid, isValid: this.isValid, type: this.internalType, mInputMode: "decimal", pattern: "^[0-9]", onMChange: this.changeHandler, onMBlur: this.blurHandler, onMFocus: this.focusHandler, onMWheel: this.wheelHandler }, index.h("span", { slot: "input-start", style: this.generateSymbolStyleVariables() }, this.currencyCode || this.currencyOptions.symbol)));
  }
  static get watchers() { return {
    "value": ["watchValueHandler"]
  }; }
};

exports.m_input_currency_base = MInputCurrencyBase;

//# sourceMappingURL=m-input-currency-base.cjs.entry.js.map