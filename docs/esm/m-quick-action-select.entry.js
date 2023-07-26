import { r as registerInstance, c as createEvent, h } from './index-a19c3827.js';

const MQuickActionSelect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.mChange = createEvent(this, "mChange", 7);
    this.changeHandler = (event) => {
      this.mChange.emit(event.target.value);
    };
    this.mId = undefined;
    this.name = undefined;
    this.value = undefined;
    this.line1 = undefined;
    this.line2 = undefined;
    this.isSelected = undefined;
  }
  render() {
    return (h("label", { class: "m-quick-action-select", htmlFor: this.mId }, h("input", { id: this.mId, type: "radio", name: this.name, value: this.value, checked: this.isSelected, onChange: this.changeHandler }), h("span", { class: "m-quick-action-select-line1" }, this.line1), h("span", { class: "m-quick-action-select-line2" }, this.line2)));
  }
};

export { MQuickActionSelect as m_quick_action_select };

//# sourceMappingURL=m-quick-action-select.entry.js.map