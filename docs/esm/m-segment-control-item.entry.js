import { r as registerInstance, c as createEvent, h, H as Host } from './index-39190b44.js';

const MSegmentControlItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.mChange = createEvent(this, "mChange", 7);
    this.changeHandler = (event) => {
      this.mChange.emit(event.target.value);
    };
    this.mId = undefined;
    this.name = undefined;
    this.label = undefined;
    this.value = undefined;
    this.isDisabled = undefined;
    this.isChecked = undefined;
    this.state = undefined;
  }
  render() {
    return (h(Host, null, h("input", { type: "radio", class: {
        'btn-check': true,
        [`${this.state}`]: !!this.state,
      }, name: this.name, id: this.mId, value: this.value, autocomplete: "off", onChange: this.changeHandler, disabled: this.isDisabled || this.state === 'disabled', checked: this.isChecked }), h("label", { class: "segment-control-item", htmlFor: this.mId }, this.label)));
  }
};

export { MSegmentControlItem as m_segment_control_item };
