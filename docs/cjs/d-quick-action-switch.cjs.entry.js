'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be9a6731.js');

const DQuickActionSwitch = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.eventClick = index.createEvent(this, "eventClick", 7);
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
    return (index.h("button", { class: "d-quick-action-switch", onClick: this.clickHandler }, index.h("div", { class: "d-quick-action-switch-content" }, index.h("d-input-switch", { innerId: this.innerId, name: this.name, isDisabled: this.isDisabled, isChecked: this.isChecked, isReadonly: true }), index.h("label", { class: "d-quick-action-switch-label", htmlFor: this.innerId }, this.label)), index.h("div", { class: "d-quick-action-switch-hint" }, this.hint)));
  }
};

exports.d_quick_action_switch = DQuickActionSwitch;

//# sourceMappingURL=d-quick-action-switch.cjs.entry.js.map