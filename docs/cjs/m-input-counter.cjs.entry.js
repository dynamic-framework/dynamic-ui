'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7e8a8a10.js');
require('./store-ee5cb3bf.js');
const componentConfig = require('./component-config-a8f1d95a.js');

const MInputCounter = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.mChange = index.createEvent(this, "mChange", 7);
    this.mClick = index.createEvent(this, "mClick", 7);
    this.changeHandler = (event) => {
      event.stopPropagation();
      this.internalValue = (event.detail !== '' && typeof event.detail === 'string')
        ? parseInt(event.detail, 10)
        : 0;
      this.mChange.emit(this.internalValue);
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
    this.name = undefined;
    this.label = '';
    this.labelIcon = undefined;
    this.labelIconFamilyClass = undefined;
    this.labelIconFamilyPrefix = undefined;
    this.value = undefined;
    this.isDisabled = false;
    this.isReadOnly = false;
    this.isLoading = false;
    this.iconFamilyClass = undefined;
    this.iconFamilyPrefix = undefined;
    this.iconStart = 'dash-square';
    this.iconStartFamilyClass = undefined;
    this.iconStartFamilyPrefix = undefined;
    this.iconEnd = 'plus-square';
    this.iconEndFamilyClass = undefined;
    this.iconEndFamilyPrefix = undefined;
    this.hint = undefined;
    this.isInvalid = false;
    this.isValid = false;
    this.minValue = undefined;
    this.maxValue = undefined;
    this.internalIsInvalid = false;
    this.internalValue = 0;
  }
  watchValidValueHandler() {
    this.internalIsInvalid = !(this.internalValue >= this.minValue
      && this.internalValue <= this.maxValue);
  }
  watchValueHandler() {
    this.internalValue = this.value;
  }
  connectedCallback() {
    this.internalValue = this.value;
  }
  // eslint-disable-next-line class-methods-use-this
  generateStyleVariables() {
    return { [`--${componentConfig.PREFIX_BS}m-input-component-form-control-text-align`]: 'center' };
  }
  render() {
    return (index.h("m-input", { style: this.generateStyleVariables(), mId: this.mId, name: this.name, label: this.label, labelIcon: this.labelIcon, labelIconFamilyClass: this.labelIconFamilyClass, labelIconFamilyPrefix: this.labelIconFamilyPrefix, value: this.internalValue, iconStart: this.iconStart, iconStartFamilyClass: this.iconStartFamilyClass, iconStartFamilyPrefix: this.iconStartFamilyPrefix, iconEnd: this.iconEnd, iconEndFamilyClass: this.iconStartFamilyClass, iconEndFamilyPrefix: this.iconStartFamilyPrefix, isDisabled: this.isDisabled, isReadOnly: this.isReadOnly, isLoading: this.isLoading, hint: this.hint, isInvalid: this.internalIsInvalid || this.isInvalid, isValid: this.isValid, type: "number", onMChange: this.changeHandler, onMIconStartClick: (event) => {
        event.stopPropagation();
        this.clickHandler(false);
      }, onMIconEndClick: (event) => {
        event.stopPropagation();
        this.clickHandler(true);
      } }));
  }
  static get watchers() { return {
    "internalValue": ["watchValidValueHandler"],
    "value": ["watchValueHandler"]
  }; }
};

exports.m_input_counter = MInputCounter;

//# sourceMappingURL=m-input-counter.cjs.entry.js.map