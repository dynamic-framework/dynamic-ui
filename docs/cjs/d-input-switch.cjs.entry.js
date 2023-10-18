'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be9a6731.js');

const DInputSwitch = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.eventChange = index.createEvent(this, "eventChange", 7);
    this.changeHandler = (event) => {
      const value = event.target.checked;
      this.internalIsChecked = value;
      this.eventChange.emit(value);
    };
    this.label = undefined;
    this.innerId = undefined;
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
    return (index.h("div", { class: "form-check form-switch" }, index.h("input", { id: this.innerId, name: this.name, onChange: this.changeHandler, class: "form-check-input", type: "checkbox", role: "switch", checked: this.internalIsChecked, disabled: this.isDisabled }), !!this.label && (index.h("label", { class: "form-check-label", htmlFor: this.innerId }, this.label))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "isChecked": ["watchIsCheckedHandler"]
  }; }
};

exports.d_input_switch = DInputSwitch;

//# sourceMappingURL=d-input-switch.cjs.entry.js.map