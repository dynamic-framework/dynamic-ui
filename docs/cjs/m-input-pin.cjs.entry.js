'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7e8a8a10.js');
require('./store-ee5cb3bf.js');
const componentConfig = require('./component-config-a8f1d95a.js');

const MInputPin = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.mChange = index.createEvent(this, "mChange", 7);
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
    this.labelIcon = undefined;
    this.labelIconFamilyClass = undefined;
    this.labelIconFamilyPrefix = undefined;
    this.placeholder = '•';
    this.type = 'text';
    this.isDisabled = false;
    this.isReadOnly = false;
    this.isLoading = false;
    this.isSecret = false;
    this.iconFamilyClass = undefined;
    this.iconFamilyPrefix = undefined;
    this.characters = 4;
    this.mInputMode = 'text';
    this.hint = undefined;
    this.isInvalid = false;
    this.isValid = false;
    this.pattern = undefined;
  }
  watchMTypeHandler(newValue) {
    this.pattern = newValue === 'number' ? '[0-9]+' : '^[a-zA-Z0-9]+$';
  }
  connectedCallback() {
    this.pattern = this.type === 'number' ? '[0-9]+' : '^[a-zA-Z0-9]+$';
  }
  render() {
    return (index.h("div", { class: "m-input-pin" }, this.label && (index.h("label", { htmlFor: "pinIndex0" }, this.label, this.labelIcon && (index.h("m-icon", { class: "m-input-pin-icon", icon: this.labelIcon, size: `var(--${componentConfig.PREFIX_BS}m-input-label-font-size)`, familyClass: this.labelIconFamilyClass, familyPrefix: this.labelIconFamilyPrefix })))), index.h("form", { id: this.mId, class: "m-input-pin-controls", onInput: this.formChange, onSubmit: this.preventDefaultEvents }, Array.from({ length: this.characters }).map((_, index$1) => (index.h("input", Object.assign({ class: {
        'form-control': true,
        'is-invalid': this.isInvalid,
        'is-valid': this.isValid,
      }, type: this.isSecret ? 'password' : this.type, "aria-describedby": `${this.mId}State`, inputMode: this.mInputMode, id: `pinIndex${index$1}`, name: `pin-${index$1}`, maxLength: 1, onInput: this.nextInput, onKeyDown: this.prevInput, onFocus: this.focusInput, onWheel: this.wheelInput, onClick: this.preventDefaultEvents, autocomplete: "off", placeholder: this.placeholder, disabled: this.isDisabled || this.isLoading, required: true }, this.type === 'number' && ({
      min: 0,
      max: 9,
    }))))), ((this.isInvalid || this.isValid) && !this.isLoading) && (index.h("span", { class: "input-group-text", id: `${this.mId}State` }, index.h("m-icon", { class: "m-input-pin-validation-icon", icon: this.isInvalid ? 'exclamation-circle' : 'check', familyClass: this.iconFamilyClass, familyPrefix: this.iconFamilyPrefix }))), this.isLoading && (index.h("div", { class: "input-group-text m-input-pin-icon" }, index.h("span", { class: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true" }, index.h("span", { class: "visually-hidden" }, "Loading..."))))), this.hint && (index.h("div", { class: "form-text", id: `${this.mId}Hint` }, this.hint))));
  }
  static get watchers() { return {
    "type": ["watchMTypeHandler"]
  }; }
};

exports.m_input_pin = MInputPin;

//# sourceMappingURL=m-input-pin.cjs.entry.js.map