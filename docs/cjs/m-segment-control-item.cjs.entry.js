'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-aa298dc0.js');

const MSegmentControlItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.mChange = index.createEvent(this, "mChange", 7);
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
    return (index.h(index.Host, null, index.h("input", { type: "radio", class: {
        'btn-check': true,
        [`${this.state}`]: !!this.state,
      }, name: this.name, id: this.mId, value: this.value, autocomplete: "off", onChange: this.changeHandler, disabled: this.isDisabled || this.state === 'disabled', checked: this.isChecked }), index.h("label", { class: "segment-control-item", htmlFor: this.mId }, this.label)));
  }
};

exports.m_segment_control_item = MSegmentControlItem;
