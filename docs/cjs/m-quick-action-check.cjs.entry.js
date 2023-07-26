'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be9a6731.js');

const MQuickActionCheck = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.mChange = index.createEvent(this, "mChange", 7);
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
    return (index.h("label", { class: "m-quick-action-check", htmlFor: this.mId }, index.h("m-input-check", { mId: this.mId, type: "radio", name: this.name, value: this.value, isChecked: this.isChecked, onMChange: this.changeHandler }), index.h("div", { class: "quick-action-check-detail" }, index.h("span", { class: "quick-action-check-line1" }, this.line1), index.h("span", { class: "quick-action-check-line2" }, this.line2)), index.h("span", { class: "quick-action-check-line3" }, this.line3)));
  }
};

exports.m_quick_action_check = MQuickActionCheck;

//# sourceMappingURL=m-quick-action-check.cjs.entry.js.map