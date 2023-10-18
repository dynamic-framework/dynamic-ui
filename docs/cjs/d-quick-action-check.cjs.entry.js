'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be9a6731.js');

const DQuickActionCheck = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.eventChange = index.createEvent(this, "eventChange", 7);
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
    return (index.h("label", { class: "d-quick-action-check", htmlFor: this.innerId }, index.h("d-input-check", { innerId: this.innerId, type: "radio", name: this.name, value: this.value, isChecked: this.isChecked, onEventChange: this.changeHandler }), index.h("div", { class: "d-quick-action-check-detail" }, index.h("span", { class: "d-quick-action-check-line1" }, this.line1), index.h("span", { class: "d-quick-action-check-line2" }, this.line2)), index.h("span", { class: "d-quick-action-check-line3" }, this.line3)));
  }
};

exports.d_quick_action_check = DQuickActionCheck;

//# sourceMappingURL=d-quick-action-check.cjs.entry.js.map