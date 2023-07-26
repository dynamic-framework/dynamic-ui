import { r as registerInstance, c as createEvent, h, d as getElement } from './index-a19c3827.js';

const MInputSwitch = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.mChange = createEvent(this, "mChange", 7);
    this.changeHandler = (event) => {
      const value = event.target.checked;
      this.internalIsChecked = value;
      this.mChange.emit(value);
    };
    this.label = undefined;
    this.mId = undefined;
    this.name = undefined;
    this.isChecked = undefined;
    this.isDisabled = undefined;
    this.isReadonly = undefined;
    this.internalIsChecked = undefined;
  }
  watchIsCheckedHandler(newValue) {
    this.internalIsChecked = newValue;
  }
  connectedCallback() {
    this.internalIsChecked = this.isChecked;
    if (this.isReadonly) {
      this.el.onclick = () => false;
    }
  }
  render() {
    return (h("div", { class: "m-input-switch form-check form-switch" }, h("input", { id: this.mId, name: this.name, onChange: this.changeHandler, class: "form-check-input", type: "checkbox", role: "switch", checked: this.internalIsChecked, disabled: this.isDisabled }), !!this.label && (h("label", { class: "form-check-label", htmlFor: this.mId }, this.label))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "isChecked": ["watchIsCheckedHandler"]
  }; }
};

export { MInputSwitch as m_input_switch };

//# sourceMappingURL=m-input-switch.entry.js.map