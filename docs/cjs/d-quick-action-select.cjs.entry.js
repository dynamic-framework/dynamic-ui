'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be9a6731.js');

const DQuickActionSelect = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.eventChange = index.createEvent(this, "eventChange", 7);
    this.changeHandler = (event) => {
      this.eventChange.emit(event.target.value);
    };
    this.innerId = undefined;
    this.name = undefined;
    this.value = undefined;
    this.line1 = undefined;
    this.line2 = undefined;
    this.isSelected = undefined;
  }
  render() {
    return (index.h("label", { class: "d-quick-action-select", htmlFor: this.innerId }, index.h("input", { id: this.innerId, type: "radio", name: this.name, value: this.value, checked: this.isSelected, onChange: this.changeHandler }), index.h("span", { class: "d-quick-action-select-line1" }, this.line1), index.h("span", { class: "d-quick-action-select-line2" }, this.line2)));
  }
};

exports.d_quick_action_select = DQuickActionSelect;

//# sourceMappingURL=d-quick-action-select.cjs.entry.js.map