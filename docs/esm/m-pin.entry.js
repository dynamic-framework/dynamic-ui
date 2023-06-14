import { r as registerInstance, c as createEvent, h, H as Host } from './index-39190b44.js';

const mPinCss = "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap\"); :host{display:block}.form-control-layout.form-control-layout-pin{--bs-form-label-color:var(--bs-gray-500);--bs-input-border-color:var(--bs-gray-300);--bs-input-hover-border-color:var(--bs-gray-500);--bs-input-focus-border-outline:2px solid var(--bs-accessibility);--bs-input-focus-border-padding:-2px;--bs-input-height:56px;--bs-input-width:56px}.form-control-layout.form-control-layout-pin .form-control-input{position:relative;display:flex;gap:1rem;align-items:center;justify-content:center;padding:1rem}.form-control-layout.form-control-layout-pin .form-control-input .input-group-text .form-control-icon{--bs-form-control-icon-size:1.2rem}.form-control-layout.form-control-layout-pin .form-control-input .pin-item{width:var(--bs-input-width);height:var(--bs-input-height);padding:1rem;font-size:1.5rem;line-height:31px;text-align:center;border:2px solid var(--bs-input-border-color);border-radius:8px}.form-control-layout.form-control-layout-pin .form-control-input .pin-item::placeholder{color:var(--bs-gray-300)}.form-control-layout.form-control-layout-pin .form-control-input .pin-item::-webkit-inner-spin-button,.form-control-layout.form-control-layout-pin .form-control-input .pin-item::-webkit-outer-spin-button{appearance:none;margin:0}.form-control-layout.form-control-layout-pin .form-control-input .pin-item:focus,.form-control-layout.form-control-layout-pin .form-control-input .pin-item:focus-visible{outline:var(--bs-input-focus-border-outline);outline-offset:var(--bs-input-focus-border-padding)}.form-control-layout.form-control-layout-pin .form-control-input .pin-item:focus::placeholder,.form-control-layout.form-control-layout-pin .form-control-input .pin-item:focus-visible::placeholder{color:transparent}.form-control-layout.form-control-layout-pin .form-control-input .pin-item:hover{border-color:var(--bs-input-hover-border-color)}.form-control-layout.form-control-layout-pin .form-control-input .pin-item:disabled{color:var(--bs-gray-300);background-color:var(--bs-gray-100);border-color:var(--bs-gray-300)}.form-control-layout.form-control-layout-pin.form-control-theme-tertiary{--bs-form-label-color:#4848b7;--bs-input-border-color:#4848b7}.form-control-layout.form-control-layout-pin.form-control-theme-tertiary .form-control-icon .m-icon{--bs-m-icon-color:#4848b7}.form-control-layout.form-control-layout-pin.form-control-theme-warning{--bs-form-label-color:#e6a23c;--bs-input-border-color:#e6a23c}.form-control-layout.form-control-layout-pin.form-control-theme-warning .form-control-icon .m-icon{--bs-m-icon-color:#e6a23c}.form-control-layout.form-control-layout-pin.form-control-theme-danger{--bs-form-label-color:#f56c6c;--bs-input-border-color:#f56c6c}.form-control-layout.form-control-layout-pin.form-control-theme-danger .form-control-icon .m-icon{--bs-m-icon-color:#f56c6c}.form-control-layout.form-control-layout-pin.form-control-theme-tertiary{--bs-input-hover-border-color:#25258a}.form-control-layout.form-control-layout-pin.form-control-theme-warning{--bs-input-hover-border-color:#c38322}.form-control-layout.form-control-layout-pin.form-control-theme-danger{--bs-input-hover-border-color:#c64e4e}@media (max-width: 767px){.form-control-layout.form-control-layout-pin .form-control-input{gap:8px;width:100%;padding-right:0;padding-left:0}.form-control-layout.form-control-layout-pin .form-control-input .pin-item{--bs-input-height:46px;--bs-input-width:46px;padding:0}}@media (max-width: 375px){.form-control-layout.form-control-layout-pin .form-control-input{gap:0;justify-content:space-around}}";

const MPin = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.mChange = createEvent(this, "mChange", 7);
    // eslint-disable-next-line class-methods-use-this
    this.nextInput = (e) => {
      var _a;
      const input = e.target;
      const regex = new RegExp(this.pattern);
      if (!regex.test(input.value)) {
        input.value = '';
      }
      if (input.value !== '') {
        if (input.nextSibling) {
          (_a = input.nextSibling) === null || _a === void 0 ? void 0 : _a.focus();
        }
        else {
          input.blur();
        }
      }
    };
    // eslint-disable-next-line class-methods-use-this
    this.prevInput = (e) => {
      var _a;
      if (e.key === 'Backspace') {
        const { value } = e.currentTarget;
        const input = e.target;
        if (input.previousSibling && value === '') {
          (_a = input.previousSibling) === null || _a === void 0 ? void 0 : _a.focus();
        }
        else {
          input.blur();
          input.focus();
        }
      }
    };
    // eslint-disable-next-line class-methods-use-this
    this.focusInput = (e) => {
      const input = e.target;
      input.value = '';
      this.mChange.emit('');
    };
    // eslint-disable-next-line class-methods-use-this
    this.wheelInput = (e) => {
      const input = e.target;
      // prevent change the value with the scroll
      input.blur();
    };
    this.formChange = (e) => {
      const form = e.currentTarget;
      const formData = new FormData(form);
      const values = Array.from(formData.values()).join('');
      this.mChange.emit(values);
    };
    // eslint-disable-next-line class-methods-use-this
    this.preventDefaultEvents = (e) => {
      e.preventDefault();
    };
    this.mId = undefined;
    this.label = '';
    this.labelIcon = 'info-circle';
    this.labelIconFamilyClass = undefined;
    this.labelIconFamilyPrefix = undefined;
    this.iconStart = undefined;
    this.iconStartFamilyClass = undefined;
    this.iconStartFamilyPrefix = undefined;
    this.iconEnd = undefined;
    this.iconEndFamilyClass = undefined;
    this.iconEndFamilyPrefix = undefined;
    this.isLoading = false;
    this.characters = 4;
    this.isSecret = false;
    this.isDisabled = false;
    this.mInputMode = 'text';
    this.type = 'text';
    this.placeholder = '•';
    this.theme = undefined;
    this.hint = undefined;
    this.hintIconStart = undefined;
    this.hintIconStartFamilyClass = undefined;
    this.hintIconStartFamilyPrefix = undefined;
    this.hintIconEnd = undefined;
    this.hintIconEndFamilyClass = undefined;
    this.hintIconEndFamilyPrefix = undefined;
    this.internalTheme = undefined;
    this.pattern = undefined;
  }
  watchThemeHandler(newValue) {
    this.internalTheme = newValue;
  }
  watchMTypeHandler(newValue) {
    this.pattern = newValue === 'number' ? '[0-9]+' : '^[a-zA-Z0-9]+$';
  }
  generateHostClasses() {
    return {
      'form-control-layout form-control-layout-pin': true,
      [`form-control-theme-${this.internalTheme}`]: !!this.internalTheme,
    };
  }
  connectedCallback() {
    this.internalTheme = this.theme;
    this.pattern = this.type === 'number' ? '[0-9]+' : '^[a-zA-Z0-9]+$';
  }
  render() {
    return (h(Host, { class: this.generateHostClasses() }, this.label && (h("label", { htmlFor: "pin-index-0" }, this.label, this.labelIcon && (h("m-icon", { class: "form-control-icon", icon: this.labelIcon, familyClass: this.labelIconFamilyClass, familyPrefix: this.labelIconFamilyPrefix })))), h("form", { id: this.mId, class: "form-control-input", onInput: this.formChange, onSubmit: this.preventDefaultEvents }, this.iconStart && (h("span", { class: "input-group-text", id: `${this.mId}-start` }, this.iconStart && (h("m-icon", { class: "form-control-icon", icon: this.iconStart, familyClass: this.iconStartFamilyClass, familyPrefix: this.iconStartFamilyPrefix })))), Array.from({ length: this.characters }).map((_, index) => (h("input", Object.assign({ class: "pin-item", type: this.isSecret ? 'password' : this.type, inputMode: this.mInputMode, id: `pin-index-${index}`, name: `pin-${index}`, maxLength: 1, onInput: this.nextInput, onKeyDown: this.prevInput, onFocus: this.focusInput, onWheel: this.wheelInput, onClick: this.preventDefaultEvents, autocomplete: "off", placeholder: this.placeholder, disabled: this.isDisabled || this.isLoading, required: true }, this.type === 'number' && ({
      min: 0,
      max: 9,
    }))))), (this.iconEnd && !this.isLoading) && (h("span", { class: "input-group-text", id: `${this.mId}-end` }, h("m-icon", { class: "form-control-icon icon-end", icon: this.iconEnd, familyClass: this.iconEndFamilyClass, familyPrefix: this.iconEndFamilyPrefix }))), this.isLoading && (h("div", { class: "input-group-text form-control-icon" }, h("span", { class: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true" }, h("span", { class: "visually-hidden" }, "Loading..."))))), this.hint && (h("m-hint", Object.assign({ text: this.hint, theme: this.theme === 'danger' || this.theme === 'tertiary' || this.theme === 'warning' ? this.theme : undefined }, (this.hintIconStart && ({
      iconStart: this.hintIconStart,
      iconStartFamilyClass: this.hintIconStartFamilyClass,
      iconStartFamilyPrefix: this.hintIconStartFamilyPrefix,
    })), (this.hintIconEnd && ({
      iconEnd: this.hintIconEnd,
      iconEndFamilyClass: this.hintIconEndFamilyClass,
      iconEndFamilyPrefix: this.hintIconEndFamilyPrefix,
    })))))));
  }
  static get watchers() { return {
    "theme": ["watchThemeHandler"],
    "type": ["watchMTypeHandler"]
  }; }
};
MPin.style = mPinCss;

export { MPin as m_pin };
