'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be9a6731.js');

const MInputSwitch = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.mChange = index.createEvent(this, "mChange", 7);
    this.changeHandler = (event) => {
      const value = event.target.checked;
      this.internalIsChecked = value;
      this.mChange.emit(value);
    };
    this.label = undefined;
    this.mId = undefined;
    this.name = undefined;
    this.isChecked = undefined;
    this.isDisabled = undefined;
    this.isReadonly = undefined;
    this.internalIsChecked = undefined;
  }
  watchIsCheckedHandler(newValue) {
    this.internalIsChecked = newValue;
  }
  connectedCallback() {
    this.internalIsChecked = this.isChecked;
    if (this.isReadonly) {
      this.el.onclick = () => false;
    }
  }
  render() {
    return (index.h("div", { class: "m-input-switch form-check form-switch" }, index.h("input", { id: this.mId, name: this.name, onChange: this.changeHandler, class: "form-check-input", type: "checkbox", role: "switch", checked: this.internalIsChecked, disabled: this.isDisabled }), !!this.label && (index.h("label", { class: "form-check-label", htmlFor: this.mId }, this.label))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "isChecked": ["watchIsCheckedHandler"]
  }; }
};

exports.m_input_switch = MInputSwitch;

//# sourceMappingURL=m-input-switch.cjs.entry.js.map