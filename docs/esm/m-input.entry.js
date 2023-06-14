import { r as registerInstance, c as createEvent, h, d as getElement } from './index-c7f2daf2.js';
import './store-d1bbe9e1.js';
import { P as PREFIX_BS } from './component-config-025f7932.js';

const MInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.mChange = createEvent(this, "mChange", 7);
    this.mBlur = createEvent(this, "mBlur", 7);
    this.mFocus = createEvent(this, "mFocus", 7);
    this.mWheel = createEvent(this, "mWheel", 7);
    this.mIconStartClick = createEvent(this, "mIconStartClick", 7);
    this.mIconEndClick = createEvent(this, "mIconEndClick", 7);
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
    return (h("div", { class: "m-input" }, this.label && (h("label", { htmlFor: this.mId }, this.label, this.labelIcon && (h("m-icon", { class: "m-input-icon", icon: this.labelIcon, size: `var(--${PREFIX_BS}m-input-label-font-size)`, familyClass: this.labelIconFamilyClass, familyPrefix: this.labelIconFamilyPrefix })))), h("div", { class: "m-input-control" }, h("div", { class: {
        'input-group': true,
        'has-validation': this.isInvalid,
        disabled: this.isDisabled || this.isLoading,
      } }, !!this.inputStart && (h("div", { class: "input-group-text" }, h("slot", { name: "input-start" }))), this.iconStart && (h("button", { type: "button", class: "input-group-text", id: `${this.mId}Start`, onClick: this.iconStartClickHandler, disabled: this.isDisabled || this.isLoading }, this.iconStart && (h("m-icon", { class: "m-input-icon", icon: this.iconStart, familyClass: this.iconStartFamilyClass, familyPrefix: this.iconStartFamilyPrefix })))), h("input", {
      // eslint-disable-next-line no-return-assign
      ref: (el) => (this.htmlInputElement = el), id: this.mId, name: this.name, type: this.type, class: {
        'form-control': true,
        'is-invalid': this.isInvalid,
        'is-valid': this.isValid,
      }, placeholder: this.placeholder, "aria-label": this.label, disabled: this.isDisabled || this.isLoading, readOnly: this.isReadOnly, value: this.value, "aria-describedby": `${this.mId}Add ${this.mId}Hint`, inputmode: this.mInputMode, pattern: this.pattern, onInput: this.changeHandler, onBlur: this.blurHandler, onFocus: this.focusHandler, onWheel: this.wheelHandler
    }), ((this.isInvalid || this.isValid) && !this.iconEnd && !this.isLoading) && (h("span", { class: "input-group-text", id: `${this.mId}State` }, h("m-icon", { class: "m-input-validation-icon", icon: this.isInvalid ? 'exclamation-circle' : 'check', familyClass: this.iconFamilyClass, familyPrefix: this.iconFamilyPrefix }))), (this.iconEnd && !this.isLoading) && (h("button", { type: "button", class: "input-group-text", id: `${this.mId}End`, onClick: this.iconEndClickHandler, disabled: this.isDisabled || this.isLoading }, this.iconEnd && (h("m-icon", { class: "m-input-icon", icon: this.iconEnd, familyClass: this.iconEndFamilyClass, familyPrefix: this.iconEndFamilyPrefix })))), !!this.inputEnd && (h("div", { class: "input-group-text" }, h("slot", { name: "input-end" }))), this.isLoading && (h("div", { class: "input-group-text m-input-icon" }, h("span", { class: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true" }, h("span", { class: "visually-hidden" }, "Loading..."))))), this.hint && (h("div", { class: "form-text", id: `${this.mId}Hint` }, this.hint)))));
  }
  get el() { return getElement(this); }
};

export { MInput as m_input };

//# sourceMappingURL=m-input.entry.js.map