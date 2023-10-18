import { r as registerInstance, c as createEvent, h } from './index-a19c3827.js';

const DInputSearch = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.eventChange = createEvent(this, "eventChange", 7);
    this.eventClick = createEvent(this, "eventClick", 7);
    this.changeHandler = (event) => {
      event.stopPropagation();
      this.eventChange.emit(event.detail.toString());
    };
    this.clickHandler = (event) => {
      var _a;
      event.stopPropagation();
      this.eventClick.emit((_a = this.htmlInput) === null || _a === void 0 ? void 0 : _a.value.toString());
    };
    this.innerId = undefined;
    this.name = undefined;
    this.label = '';
    this.labelIcon = undefined;
    this.labelIconFamilyClass = undefined;
    this.labelIconFamilyPrefix = undefined;
    this.placeholder = '';
    this.value = '';
    this.isDisabled = false;
    this.isReadOnly = false;
    this.isLoading = false;
    this.hint = undefined;
    this.isInvalid = false;
    this.isValid = false;
  }
  render() {
    return (h("d-input", {
      // eslint-disable-next-line no-return-assign
      ref: (el) => (this.htmlInput = el), innerId: this.innerId, name: this.name, label: this.label, labelIcon: this.labelIcon, labelIconFamilyClass: this.labelIconFamilyClass, labelIconFamilyPrefix: this.labelIconFamilyPrefix, placeholder: this.placeholder, value: this.value, iconEnd: "search", isDisabled: this.isDisabled, isReadOnly: this.isReadOnly, isLoading: this.isLoading, hint: this.hint, isInvalid: this.isInvalid, isValid: this.isValid, onEventChange: this.changeHandler, onEventIconEndClick: this.clickHandler
    }));
  }
};

export { DInputSearch as d_input_search };

//# sourceMappingURL=d-input-search.entry.js.map