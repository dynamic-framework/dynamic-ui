import { r as registerInstance, c as createEvent, h } from './index-a19c3827.js';

const DQuickActionSwitch = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.eventClick = createEvent(this, "eventClick", 7);
    this.clickHandler = (event) => {
      event.stopPropagation();
      this.eventClick.emit(this.isChecked);
    };
    this.innerId = undefined;
    this.name = undefined;
    this.label = undefined;
    this.hint = undefined;
    this.isChecked = undefined;
    this.isDisabled = undefined;
  }
  render() {
    return (h("button", { class: "d-quick-action-switch", onClick: this.clickHandler }, h("div", { class: "d-quick-action-switch-content" }, h("d-input-switch", { innerId: this.innerId, name: this.name, isDisabled: this.isDisabled, isChecked: this.isChecked, isReadonly: true }), h("label", { class: "d-quick-action-switch-label", htmlFor: this.innerId }, this.label)), h("div", { class: "d-quick-action-switch-hint" }, this.hint)));
  }
};

export { DQuickActionSwitch as d_quick_action_switch };

//# sourceMappingURL=d-quick-action-switch.entry.js.map