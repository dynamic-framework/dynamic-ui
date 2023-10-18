import { r as registerInstance, c as createEvent, h } from './index-a19c3827.js';

const DQuickActionCheck = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.eventChange = createEvent(this, "eventChange", 7);
    this.changeHandler = (event) => {
      event.stopPropagation();
      this.eventChange.emit(event.target.value);
    };
    this.innerId = undefined;
    this.name = undefined;
    this.value = undefined;
    this.line1 = undefined;
    this.line2 = undefined;
    this.line3 = undefined;
    this.isChecked = undefined;
  }
  render() {
    return (h("label", { class: "d-quick-action-check", htmlFor: this.innerId }, h("d-input-check", { innerId: this.innerId, type: "radio", name: this.name, value: this.value, isChecked: this.isChecked, onEventChange: this.changeHandler }), h("div", { class: "d-quick-action-check-detail" }, h("span", { class: "d-quick-action-check-line1" }, this.line1), h("span", { class: "d-quick-action-check-line2" }, this.line2)), h("span", { class: "d-quick-action-check-line3" }, this.line3)));
  }
};

export { DQuickActionCheck as d_quick_action_check };

//# sourceMappingURL=d-quick-action-check.entry.js.map