'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be9a6731.js');
require('./store-22751436.js');
const componentConfig = require('./component-config-a8f1d95a.js');

const DInputCounter = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.eventChange = index.createEvent(this, "eventChange", 7);
    this.eventClick = index.createEvent(this, "eventClick", 7);
    this.changeHandler = (event) => {
      event.stopPropagation();
      this.internalValue = (event.detail !== '' && typeof event.detail === 'string')
        ? parseInt(event.detail, 10)
        : 0;
      this.eventChange.emit(this.internalValue);
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
      this.eventClick.emit(this.internalValue);
    };
    this.innerId = undefined;
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
    return { [`--${componentConfig.PREFIX_BS}input-component-form-control-text-align`]: 'center' };
  }
  render() {
    return (index.h("d-input", { style: this.generateStyleVariables(), innerId: this.innerId, name: this.name, label: this.label, labelIcon: this.labelIcon, labelIconFamilyClass: this.labelIconFamilyClass, labelIconFamilyPrefix: this.labelIconFamilyPrefix, value: this.internalValue, iconStart: this.iconStart, iconStartFamilyClass: this.iconStartFamilyClass, iconStartFamilyPrefix: this.iconStartFamilyPrefix, iconEnd: this.iconEnd, iconEndFamilyClass: this.iconStartFamilyClass, iconEndFamilyPrefix: this.iconStartFamilyPrefix, isDisabled: this.isDisabled, isReadOnly: this.isReadOnly, isLoading: this.isLoading, hint: this.hint, isInvalid: this.internalIsInvalid || this.isInvalid, isValid: this.isValid, type: "number", onEventChange: this.changeHandler, onEventIconStartClick: (event) => {
        event.stopPropagation();
        this.clickHandler(false);
      }, onEventIconEndClick: (event) => {
        event.stopPropagation();
        this.clickHandler(true);
      } }));
  }
  static get watchers() { return {
    "internalValue": ["watchValidValueHandler"],
    "value": ["watchValueHandler"]
  }; }
};

exports.d_input_counter = DInputCounter;

//# sourceMappingURL=d-input-counter.cjs.entry.js.map