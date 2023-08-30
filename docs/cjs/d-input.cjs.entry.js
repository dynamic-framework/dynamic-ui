'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be9a6731.js');
require('./store-22751436.js');
const componentConfig = require('./component-config-a8f1d95a.js');

const DInput = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.eventChange = index.createEvent(this, "eventChange", 7);
    this.eventBlur = index.createEvent(this, "eventBlur", 7);
    this.eventFocus = index.createEvent(this, "eventFocus", 7);
    this.eventWheel = index.createEvent(this, "eventWheel", 7);
    this.eventIconStartClick = index.createEvent(this, "eventIconStartClick", 7);
    this.eventIconEndClick = index.createEvent(this, "eventIconEndClick", 7);
    this.changeHandler = (event) => {
      this.eventChange.emit(event.target.value);
    };
    this.blurHandler = (event) => {
      this.eventBlur.emit(event);
    };
    this.focusHandler = (event) => {
      this.eventFocus.emit(event);
    };
    this.wheelHandler = (event) => {
      this.eventWheel.emit(event);
    };
    this.iconStartClickHandler = (event) => {
      this.eventIconStartClick.emit(event);
    };
    this.iconEndClickHandler = (event) => {
      this.eventIconEndClick.emit(event);
    };
    this.innerId = undefined;
    this.name = undefined;
    this.label = '';
    this.labelIcon = undefined;
    this.labelIconFamilyClass = undefined;
    this.labelIconFamilyPrefix = undefined;
    this.placeholder = '';
    this.type = 'text';
    this.value = '';
    this.innerInputMode = undefined;
    this.pattern = undefined;
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
  }
  /**
   * Set focus to internal input
   */
  async innerFocus() {
    var _a;
    (_a = this.htmlInputElement) === null || _a === void 0 ? void 0 : _a.focus();
  }
  /**
   * Set blur to internal input
   */
  async innerBlur() {
    var _a;
    (_a = this.htmlInputElement) === null || _a === void 0 ? void 0 : _a.blur();
  }
  componentWillLoad() {
    this.inputStart = this.el.querySelector('[slot="input-start"]');
    this.inputEnd = this.el.querySelector('[slot="input-end"]');
  }
  render() {
    return (index.h("div", { class: "d-input" }, this.label && (index.h("label", { htmlFor: this.innerId }, this.label, this.labelIcon && (index.h("d-icon", { class: "d-input-icon", icon: this.labelIcon, size: `var(--${componentConfig.PREFIX_BS}input-label-font-size)`, familyClass: this.labelIconFamilyClass, familyPrefix: this.labelIconFamilyPrefix })))), index.h("div", { class: "d-input-control" }, index.h("div", { class: {
        'input-group': true,
        'has-validation': this.isInvalid,
        disabled: this.isDisabled || this.isLoading,
      } }, !!this.inputStart && (index.h("div", { class: "input-group-text" }, index.h("slot", { name: "input-start" }))), this.iconStart && (index.h("button", { type: "button", class: "input-group-text", id: `${this.innerId}Start`, onClick: this.iconStartClickHandler, disabled: this.isDisabled || this.isLoading }, this.iconStart && (index.h("d-icon", { class: "d-input-icon", icon: this.iconStart, familyClass: this.iconStartFamilyClass, familyPrefix: this.iconStartFamilyPrefix })))), index.h("input", {
      // eslint-disable-next-line no-return-assign
      ref: (el) => (this.htmlInputElement = el), id: this.innerId, name: this.name, type: this.type, class: {
        'form-control': true,
        'is-invalid': this.isInvalid,
        'is-valid': this.isValid,
      }, placeholder: this.placeholder, "aria-label": this.label, disabled: this.isDisabled || this.isLoading, readOnly: this.isReadOnly, value: this.value, "aria-describedby": `${this.innerId}Add ${this.innerId}Hint`, inputmode: this.innerInputMode, pattern: this.pattern, onInput: this.changeHandler, onBlur: this.blurHandler, onFocus: this.focusHandler, onWheel: this.wheelHandler
    }), ((this.isInvalid || this.isValid) && !this.iconEnd && !this.isLoading) && (index.h("span", { class: "input-group-text", id: `${this.innerId}State` }, index.h("d-icon", { class: "d-input-validation-icon", icon: this.isInvalid ? 'exclamation-circle' : 'check', familyClass: this.iconFamilyClass, familyPrefix: this.iconFamilyPrefix }))), (this.iconEnd && !this.isLoading) && (index.h("button", { type: "button", class: "input-group-text", id: `${this.innerId}End`, onClick: this.iconEndClickHandler, disabled: this.isDisabled || this.isLoading }, this.iconEnd && (index.h("d-icon", { class: "d-input-icon", icon: this.iconEnd, familyClass: this.iconEndFamilyClass, familyPrefix: this.iconEndFamilyPrefix })))), !!this.inputEnd && (index.h("div", { class: "input-group-text" }, index.h("slot", { name: "input-end" }))), this.isLoading && (index.h("div", { class: "input-group-text d-input-icon" }, index.h("span", { class: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true" }, index.h("span", { class: "visually-hidden" }, "Loading..."))))), this.hint && (index.h("div", { class: "form-text", id: `${this.innerId}Hint` }, this.hint)))));
  }
  get el() { return index.getElement(this); }
};

exports.d_input = DInput;

//# sourceMappingURL=d-input.cjs.entry.js.map