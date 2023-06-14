import { r as registerInstance, c as createEvent, h } from './index-c7f2daf2.js';

const MChip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.mClose = createEvent(this, "mClose", 7);
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
    return (h("span", { class: this.generateClasses() }, this.icon && (h("div", { class: "m-badge-icon-container" }, h("m-icon", { icon: this.icon, familyClass: this.iconFamilyClass, familyPrefix: this.iconFamilyPrefix }))), h("span", null, this.text), this.showClose && (h("button", { type: "button", class: "m-badge-icon-container", onClick: this.closeHandler }, h("m-icon", { icon: "x-lg" })))));
  }
};

export { MChip as m_chip };

//# sourceMappingURL=m-chip.entry.js.map