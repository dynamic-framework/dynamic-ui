'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be9a6731.js');

const DInputCheck = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.eventChange = index.createEvent(this, "eventChange", 7);
    this.changeHandler = (event) => {
      const { checked, value } = event.target;
      this.eventChange.emit({
        isChecked: checked,
        value,
      });
    };
    this.type = undefined;
    this.name = undefined;
    this.label = undefined;
    this.isChecked = false;
    this.innerId = undefined;
    this.isDisabled = false;
    this.isIndeterminate = undefined;
    this.value = undefined;
  }
  render() {
    if (!this.label) {
      return (index.h("input", { onChange: this.changeHandler, class: "form-check-input", type: this.type, name: this.name, id: this.innerId, value: this.value, checked: this.isChecked, disabled: this.isDisabled, indeterminate: this.isIndeterminate }));
    }
    return (index.h("div", { class: "form-check" }, index.h("input", { onChange: this.changeHandler, class: "form-check-input", type: this.type, name: this.name, id: this.innerId, value: this.value, checked: this.isChecked, disabled: this.isDisabled, indeterminate: this.isIndeterminate }), index.h("label", { class: "form-check-label", htmlFor: this.innerId }, this.label)));
  }
};

exports.d_input_check = DInputCheck;

//# sourceMappingURL=d-input-check.cjs.entry.js.map