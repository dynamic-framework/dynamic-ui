import { r as registerInstance, c as createEvent, h } from './index-a19c3827.js';

const DInputCheck = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.eventChange = createEvent(this, "eventChange", 7);
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
      return (h("input", { onChange: this.changeHandler, class: "form-check-input", type: this.type, name: this.name, id: this.innerId, value: this.value, checked: this.isChecked, disabled: this.isDisabled, indeterminate: this.isIndeterminate }));
    }
    return (h("div", { class: "form-check" }, h("input", { onChange: this.changeHandler, class: "form-check-input", type: this.type, name: this.name, id: this.innerId, value: this.value, checked: this.isChecked, disabled: this.isDisabled, indeterminate: this.isIndeterminate }), h("label", { class: "form-check-label", htmlFor: this.innerId }, this.label)));
  }
};

export { DInputCheck as d_input_check };

//# sourceMappingURL=d-input-check.entry.js.map