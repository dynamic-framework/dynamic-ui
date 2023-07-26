'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be9a6731.js');

const MChip = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.mClose = index.createEvent(this, "mClose", 7);
    this.closeHandler = () => {
      this.mClose.emit();
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
      'm-chip': true,
      [`m-chip-${this.theme}`]: !!this.theme,
    };
  }
  render() {
    return (index.h("span", { class: this.generateClasses() }, this.icon && (index.h("div", { class: "m-badge-icon-container" }, index.h("m-icon", { icon: this.icon, familyClass: this.iconFamilyClass, familyPrefix: this.iconFamilyPrefix }))), index.h("span", null, this.text), this.showClose && (index.h("button", { type: "button", class: "m-badge-icon-container", onClick: this.closeHandler }, index.h("m-icon", { icon: "x-lg" })))));
  }
};

exports.m_chip = MChip;

//# sourceMappingURL=m-chip.cjs.entry.js.map