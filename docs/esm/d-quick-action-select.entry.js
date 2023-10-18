import { r as registerInstance, c as createEvent, h } from './index-a19c3827.js';

const DQuickActionSelect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.eventChange = createEvent(this, "eventChange", 7);
    this.changeHandler = (event) => {
      this.eventChange.emit(event.target.value);
    };
    this.innerId = undefined;
    this.name = undefined;
    this.value = undefined;
    this.line1 = undefined;
    this.line2 = undefined;
    this.isSelected = undefined;
  }
  render() {
    return (h("label", { class: "d-quick-action-select", htmlFor: this.innerId }, h("input", { id: this.innerId, type: "radio", name: this.name, value: this.value, checked: this.isSelected, onChange: this.changeHandler }), h("span", { class: "d-quick-action-select-line1" }, this.line1), h("span", { class: "d-quick-action-select-line2" }, this.line2)));
  }
};

export { DQuickActionSelect as d_quick_action_select };

//# sourceMappingURL=d-quick-action-select.entry.js.map