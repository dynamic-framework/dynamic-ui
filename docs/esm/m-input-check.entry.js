import { r as registerInstance, c as createEvent, h } from './index-a19c3827.js';

const MInputCheck = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.mChange = createEvent(this, "mChange", 7);
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
      return (h("input", { onChange: this.changeHandler, class: "m-input-check form-check-input", type: this.type, name: this.name, id: this.mId, value: this.value, checked: this.isChecked, disabled: this.isDisabled, indeterminate: this.isIndeterminate }));
    }
    return (h("div", { class: "m-input-check form-check" }, h("input", { onChange: this.changeHandler, class: "form-check-input", type: this.type, name: this.name, id: this.mId, value: this.value, checked: this.isChecked, disabled: this.isDisabled, indeterminate: this.isIndeterminate }), h("label", { class: "form-check-label", htmlFor: this.mId }, this.label)));
  }
};

export { MInputCheck as m_input_check };

//# sourceMappingURL=m-input-check.entry.js.map