'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-aa298dc0.js');

const mFormSwitchCss = "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap\"); :host,.form-switch-box{--bs-form-check-border-width-focus:0.125rem;--bs-form-check-border-color-focus:var(--bs-accessibility);--bs-checkbox-box-border-width:3px;--bs-checkbox-box-border-radius:0.25em;display:block;width:100%;padding:var(--bs-checkbox-box-border-width)}:host:focus-within,:host.focus,.form-switch-box:focus-within,.form-switch-box.focus{border-radius:var(--bs-checkbox-box-border-radius);box-shadow:0 0 0 var(--bs-form-check-border-width-focus) var(--bs-form-check-border-color-focus)}:host .form-check,:host .form-switch,.form-switch-box .form-check,.form-switch-box .form-switch{width:100%;padding-left:0;text-align:left}:host .form-check-switch,.form-switch-box .form-check-switch{flex:0 0 2.5em}:host .form-check-switch:hover:not([disabled]),.form-switch-box .form-check-switch:hover:not([disabled]){--bs-form-switch-border-hover-color:var(--bs-tertiary);border:var(--bs-form-check-input-border-hover-width) solid var(--bs-form-switch-border-hover-color)}:host .form-switch-box-label,.form-switch-box .form-switch-box-label{display:flex;gap:1rem;align-items:center;justify-content:flex-start;width:100%}";

const MFormSwitch = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.mChange = index.createEvent(this, "mChange", 7);
    this.changeHandler = (event) => {
      const value = event.target.checked;
      this.internalIsChecked = value;
      this.mChange.emit(value);
    };
    this.label = undefined;
    this.labelOn = '';
    this.labelOff = '';
    this.mId = undefined;
    this.isChecked = undefined;
    this.isDisabled = false;
    this.internalIsChecked = undefined;
  }
  watchIsCheckedHandler(newValue) {
    this.internalIsChecked = newValue;
  }
  connectedCallback() {
    this.internalIsChecked = this.isChecked;
  }
  render() {
    return (index.h(index.Host, { class: "form-switch-box" }, index.h("div", { class: "form-check form-switch form-check-reverse", onClick: (e) => e.stopPropagation() }, index.h("label", { class: "form-switch-box-label", htmlFor: this.mId }, index.h("div", { class: "d-flex gap-3 justify-content-between align-items-center flex-grow-1" }, index.h("span", { class: "form-check-label" }, this.label), index.h("span", { class: "form-check-label fw-bold" }, this.internalIsChecked ? this.labelOn : this.labelOff)), index.h("input", { id: this.mId, onChange: (event) => this.changeHandler(event), class: "form-check-input form-check-switch", type: "checkbox", role: "switch", checked: this.internalIsChecked, disabled: this.isDisabled })))));
  }
  static get watchers() { return {
    "isChecked": ["watchIsCheckedHandler"]
  }; }
};
MFormSwitch.style = mFormSwitchCss;

exports.m_form_switch = MFormSwitch;
