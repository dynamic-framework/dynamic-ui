'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be9a6731.js');
require('./store-22751436.js');
const componentConfig = require('./component-config-a8f1d95a.js');

const MInput = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.mChange = index.createEvent(this, "mChange", 7);
    this.mBlur = index.createEvent(this, "mBlur", 7);
    this.mFocus = index.createEvent(this, "mFocus", 7);
    this.mWheel = index.createEvent(this, "mWheel", 7);
    this.mIconStartClick = index.createEvent(this, "mIconStartClick", 7);
    this.mIconEndClick = index.createEvent(this, "mIconEndClick", 7);
    this.changeHandler = (event) => {
      this.mChange.emit(event.target.value);
    };
    this.blurHandler = (event) => {
      this.mBlur.emit(event);
    };
    this.focusHandler = (event) => {
      this.mFocus.emit(event);
    };
    this.wheelHandler = (event) => {
      this.mWheel.emit(event);
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
    this.labelIcon = undefined;
    this.labelIconFamilyClass = undefined;
    this.labelIconFamilyPrefix = undefined;
    this.placeholder = '';
    this.type = 'text';
    this.value = '';
    this.mInputMode = undefined;
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
  async focusInput() {
    var _a;
    (_a = this.htmlInputElement) === null || _a === void 0 ? void 0 : _a.focus();
  }
  /**
   * Set blur to internal input
   */
  async blurInput() {
    var _a;
    (_a = this.htmlInputElement) === null || _a === void 0 ? void 0 : _a.blur();
  }
  componentWillLoad() {
    this.inputStart = this.el.querySelector('[slot="input-start"]');
    this.inputEnd = this.el.querySelector('[slot="input-end"]');
  }
  render() {
    return (index.h("div", { class: "m-input" }, this.label && (index.h("label", { htmlFor: this.mId }, this.label, this.labelIcon && (index.h("m-icon", { class: "m-input-icon", icon: this.labelIcon, size: `var(--${componentConfig.PREFIX_BS}m-input-label-font-size)`, familyClass: this.labelIconFamilyClass, familyPrefix: this.labelIconFamilyPrefix })))), index.h("div", { class: "m-input-control" }, index.h("div", { class: {
        'input-group': true,
        'has-validation': this.isInvalid,
        disabled: this.isDisabled || this.isLoading,
      } }, !!this.inputStart && (index.h("div", { class: "input-group-text" }, index.h("slot", { name: "input-start" }))), this.iconStart && (index.h("button", { type: "button", class: "input-group-text", id: `${this.mId}Start`, onClick: this.iconStartClickHandler, disabled: this.isDisabled || this.isLoading }, this.iconStart && (index.h("m-icon", { class: "m-input-icon", icon: this.iconStart, familyClass: this.iconStartFamilyClass, familyPrefix: this.iconStartFamilyPrefix })))), index.h("input", {
      // eslint-disable-next-line no-return-assign
      ref: (el) => (this.htmlInputElement = el), id: this.mId, name: this.name, type: this.type, class: {
        'form-control': true,
        'is-invalid': this.isInvalid,
        'is-valid': this.isValid,
      }, placeholder: this.placeholder, "aria-label": this.label, disabled: this.isDisabled || this.isLoading, readOnly: this.isReadOnly, value: this.value, "aria-describedby": `${this.mId}Add ${this.mId}Hint`, inputmode: this.mInputMode, pattern: this.pattern, onInput: this.changeHandler, onBlur: this.blurHandler, onFocus: this.focusHandler, onWheel: this.wheelHandler
    }), ((this.isInvalid || this.isValid) && !this.iconEnd && !this.isLoading) && (index.h("span", { class: "input-group-text", id: `${this.mId}State` }, index.h("m-icon", { class: "m-input-validation-icon", icon: this.isInvalid ? 'exclamation-circle' : 'check', familyClass: this.iconFamilyClass, familyPrefix: this.iconFamilyPrefix }))), (this.iconEnd && !this.isLoading) && (index.h("button", { type: "button", class: "input-group-text", id: `${this.mId}End`, onClick: this.iconEndClickHandler, disabled: this.isDisabled || this.isLoading }, this.iconEnd && (index.h("m-icon", { class: "m-input-icon", icon: this.iconEnd, familyClass: this.iconEndFamilyClass, familyPrefix: this.iconEndFamilyPrefix })))), !!this.inputEnd && (index.h("div", { class: "input-group-text" }, index.h("slot", { name: "input-end" }))), this.isLoading && (index.h("div", { class: "input-group-text m-input-icon" }, index.h("span", { class: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true" }, index.h("span", { class: "visually-hidden" }, "Loading..."))))), this.hint && (index.h("div", { class: "form-text", id: `${this.mId}Hint` }, this.hint)))));
  }
  get el() { return index.getElement(this); }
};

exports.m_input = MInput;

//# sourceMappingURL=m-input.cjs.entry.js.map