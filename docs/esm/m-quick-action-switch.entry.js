import { r as registerInstance, c as createEvent, h } from './index-c7f2daf2.js';

const MQuickActionSwitch = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.mClick = createEvent(this, "mClick", 7);
    this.clickHandler = (event) => {
      event.stopPropagation();
      this.mClick.emit(this.isChecked);
    };
    this.mId = undefined;
    this.name = undefined;
    this.label = undefined;
    this.hint = undefined;
    this.isChecked = undefined;
    this.isDisabled = undefined;
  }
  render() {
    return (h("button", { class: "m-quick-action-switch", onClick: this.clickHandler }, h("div", { class: "m-quick-action-switch-content" }, h("m-input-switch", { mId: this.mId, name: this.name, isDisabled: this.isDisabled, isChecked: this.isChecked, isReadonly: true }), h("label", { class: "m-quick-action-switch-label", htmlFor: this.mId }, this.label)), h("div", { class: "m-quick-action-switch-hint" }, this.hint)));
  }
};

export { MQuickActionSwitch as m_quick_action_switch };

//# sourceMappingURL=m-quick-action-switch.entry.js.map