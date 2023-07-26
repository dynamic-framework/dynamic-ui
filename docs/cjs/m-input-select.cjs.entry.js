'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7e8a8a10.js');
require('./store-ee5cb3bf.js');
const componentConfig = require('./component-config-a8f1d95a.js');

const MInputSelect = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.mChange = index.createEvent(this, "mChange", 7);
    this.mBlur = index.createEvent(this, "mBlur", 7);
    this.mIconStartClick = index.createEvent(this, "mIconStartClick", 7);
    this.mIconEndClick = index.createEvent(this, "mIconEndClick", 7);
    this.changeHandler = (event) => {
      const { value } = event.target;
      this.mChange.emit(this.options.find((option) => this.valueExtractor(option).toString() === value));
    };
    this.blurHandler = (event) => {
      this.mBlur.emit(event);
    };
    this.iconStartClickHandler = (event) => {
      this.mIconStartClick.emit(event);
    };
    this.iconEndClickHandler = (event) => {
      this.mIconEndClick.emit(event);
    };
    this.mId = undefined;
    this.name = undefined;
    this.label = '';
    this.options = [];
    this.labelIcon = undefined;
    this.labelIconFamilyClass = undefined;
    this.labelIconFamilyPrefix = undefined;
    this.isDisabled = false;
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
    this.selectedOption = undefined;
    this.valueExtractor = (item) => item === null || item === void 0 ? void 0 : item.value;
    this.labelExtractor = (item) => item === null || item === void 0 ? void 0 : item.label;
  }
  render() {
    return (index.h("div", { class: "m-input" }, (this.label) && (index.h("label", { htmlFor: this.mId }, this.label, this.labelIcon && (index.h("m-icon", { class: "m-input-icon", icon: this.labelIcon, size: `var(--${componentConfig.PREFIX_BS}m-input-label-font-size)`, familyClass: this.labelIconFamilyClass, familyPrefix: this.labelIconFamilyPrefix })))), index.h("div", { class: "m-input-control" }, index.h("div", { class: {
        'input-group': true,
        disabled: this.isDisabled || this.isLoading,
      } }, this.iconStart && (index.h("button", { type: "button", class: "input-group-text", id: `${this.mId}Start`, onClick: this.iconStartClickHandler, disabled: this.isDisabled || this.isLoading }, this.iconStart && (index.h("m-icon", { class: "m-input-icon", icon: this.iconStart, familyClass: this.iconStartFamilyClass, familyPrefix: this.iconStartFamilyPrefix })))), index.h("select", { id: this.mId, name: this.name, class: { 'form-select': true }, "aria-label": this.label, disabled: this.isDisabled || this.isLoading, "aria-describedby": `${this.mId}Add ${this.mId}Hint`, onChange: this.changeHandler, onBlur: this.blurHandler }, this.options.map((option) => (index.h("option", { value: this.valueExtractor(option), selected: this.selectedOption
        && this.valueExtractor(option) === this.valueExtractor(this.selectedOption) }, this.labelExtractor(option))))), (this.iconEnd && !this.isLoading) && (index.h("button", { type: "button", class: "input-group-text", id: `${this.mId}End`, onClick: this.iconEndClickHandler, disabled: this.isDisabled || this.isLoading }, this.iconEnd && (index.h("m-icon", { class: "m-input-icon", icon: this.iconEnd, familyClass: this.iconEndFamilyClass, familyPrefix: this.iconEndFamilyPrefix })))), this.isLoading && (index.h("div", { class: "input-group-text form-control-icon loading" }, index.h("span", { class: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true" }, index.h("span", { class: "visually-hidden" }, "Loading..."))))), this.hint && (index.h("div", { class: "form-text", id: `${this.mId}Hint` }, this.hint)))));
  }
};

exports.m_input_select = MInputSelect;

//# sourceMappingURL=m-input-select.cjs.entry.js.map