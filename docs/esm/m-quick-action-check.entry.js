import { r as registerInstance, c as createEvent, h } from './index-c7f2daf2.js';

const MQuickActionCheck = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.mChange = createEvent(this, "mChange", 7);
    this.changeHandler = (event) => {
      event.stopPropagation();
      this.mChange.emit(event.target.value);
    };
    this.mId = undefined;
    this.name = undefined;
    this.value = undefined;
    this.line1 = undefined;
    this.line2 = undefined;
    this.line3 = undefined;
    this.isChecked = undefined;
  }
  render() {
    return (h("label", { class: "m-quick-action-check", htmlFor: this.mId }, h("m-input-check", { mId: this.mId, type: "radio", name: this.name, value: this.value, isChecked: this.isChecked, onMChange: this.changeHandler }), h("div", { class: "quick-action-check-detail" }, h("span", { class: "quick-action-check-line1" }, this.line1), h("span", { class: "quick-action-check-line2" }, this.line2)), h("span", { class: "quick-action-check-line3" }, this.line3)));
  }
};

export { MQuickActionCheck as m_quick_action_check };

//# sourceMappingURL=m-quick-action-check.entry.js.map