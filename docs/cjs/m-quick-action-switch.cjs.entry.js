'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7e8a8a10.js');

const MQuickActionSwitch = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.mClick = index.createEvent(this, "mClick", 7);
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
    return (index.h("button", { class: "m-quick-action-switch", onClick: this.clickHandler }, index.h("div", { class: "m-quick-action-switch-content" }, index.h("m-input-switch", { mId: this.mId, name: this.name, isDisabled: this.isDisabled, isChecked: this.isChecked, isReadonly: true }), index.h("label", { class: "m-quick-action-switch-label", htmlFor: this.mId }, this.label)), index.h("div", { class: "m-quick-action-switch-hint" }, this.hint)));
  }
};

exports.m_quick_action_switch = MQuickActionSwitch;

//# sourceMappingURL=m-quick-action-switch.cjs.entry.js.map