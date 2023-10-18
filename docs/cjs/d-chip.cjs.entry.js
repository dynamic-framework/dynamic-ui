'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be9a6731.js');

const DChip = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.eventClose = index.createEvent(this, "eventClose", 7);
    this.closeHandler = () => {
      this.eventClose.emit();
    };
    this.theme = 'primary';
    this.text = undefined;
    this.icon = undefined;
    this.iconFamilyClass = undefined;
    this.iconFamilyPrefix = undefined;
    this.showClose = false;
  }
  // eslint-disable-next-line @stencil/own-methods-must-be-private
  generateClasses() {
    return {
      'd-chip': true,
      [`d-chip-${this.theme}`]: !!this.theme,
    };
  }
  render() {
    return (index.h("span", { class: this.generateClasses() }, this.icon && (index.h("div", { class: "d-chip-icon-container" }, index.h("d-icon", { icon: this.icon, familyClass: this.iconFamilyClass, familyPrefix: this.iconFamilyPrefix }))), index.h("span", null, this.text), this.showClose && (index.h("button", { type: "button", class: "d-chip-icon-container", onClick: this.closeHandler }, index.h("d-icon", { icon: "x-lg" })))));
  }
};

exports.d_chip = DChip;

//# sourceMappingURL=d-chip.cjs.entry.js.map