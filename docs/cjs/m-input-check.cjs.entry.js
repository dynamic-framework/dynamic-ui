'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be9a6731.js');

const MInputCheck = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.mChange = index.createEvent(this, "mChange", 7);
    this.changeHandler = (event) => {
      const { checked, value } = event.target;
      this.mChange.emit({
        isChecked: checked,
        value,
      });
    };
    this.type = undefined;
    this.name = undefined;
    this.label = undefined;
    this.isChecked = false;
    this.mId = undefined;
    this.isDisabled = false;
    this.isIndeterminate = undefined;
    this.value = undefined;
  }
  render() {
    if (!this.label) {
      return (index.h("input", { onChange: this.changeHandler, class: "m-input-check form-check-input", type: this.type, name: this.name, id: this.mId, value: this.value, checked: this.isChecked, disabled: this.isDisabled, indeterminate: this.isIndeterminate }));
    }
    return (index.h("div", { class: "m-input-check form-check" }, index.h("input", { onChange: this.changeHandler, class: "form-check-input", type: this.type, name: this.name, id: this.mId, value: this.value, checked: this.isChecked, disabled: this.isDisabled, indeterminate: this.isIndeterminate }), index.h("label", { class: "form-check-label", htmlFor: this.mId }, this.label)));
  }
};

exports.m_input_check = MInputCheck;

//# sourceMappingURL=m-input-check.cjs.entry.js.map