'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7e8a8a10.js');

const MQuickActionSelect = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.mChange = index.createEvent(this, "mChange", 7);
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
    return (index.h("label", { class: "m-quick-action-select", htmlFor: this.mId }, index.h("input", { id: this.mId, type: "radio", name: this.name, value: this.value, checked: this.isSelected, onChange: this.changeHandler }), index.h("span", { class: "m-quick-action-select-line1" }, this.line1), index.h("span", { class: "m-quick-action-select-line2" }, this.line2)));
  }
};

exports.m_quick_action_select = MQuickActionSelect;

//# sourceMappingURL=m-quick-action-select.cjs.entry.js.map