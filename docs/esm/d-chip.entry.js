import { r as registerInstance, c as createEvent, h } from './index-a19c3827.js';

const DChip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.eventClose = createEvent(this, "eventClose", 7);
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
    return (h("span", { class: this.generateClasses() }, this.icon && (h("div", { class: "d-chip-icon-container" }, h("d-icon", { icon: this.icon, familyClass: this.iconFamilyClass, familyPrefix: this.iconFamilyPrefix }))), h("span", null, this.text), this.showClose && (h("button", { type: "button", class: "d-chip-icon-container", onClick: this.closeHandler }, h("d-icon", { icon: "x-lg" })))));
  }
};

export { DChip as d_chip };

//# sourceMappingURL=d-chip.entry.js.map