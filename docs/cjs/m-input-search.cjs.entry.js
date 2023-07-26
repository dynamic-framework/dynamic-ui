'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be9a6731.js');

const MInputSearch = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.mChange = index.createEvent(this, "mChange", 7);
    this.mClick = index.createEvent(this, "mClick", 7);
    this.changeHandler = (event) => {
      event.stopPropagation();
      this.mChange.emit(event.detail.toString());
    };
    this.clickHandler = (event) => {
      var _a;
      event.stopPropagation();
      this.mClick.emit((_a = this.htmlMInputElement) === null || _a === void 0 ? void 0 : _a.value.toString());
    };
    this.mId = undefined;
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
    return (index.h("m-input", {
      // eslint-disable-next-line no-return-assign
      ref: (el) => (this.htmlMInputElement = el), mId: this.mId, name: this.name, label: this.label, labelIcon: this.labelIcon, labelIconFamilyClass: this.labelIconFamilyClass, labelIconFamilyPrefix: this.labelIconFamilyPrefix, placeholder: this.placeholder, value: this.value, iconEnd: "search", isDisabled: this.isDisabled, isReadOnly: this.isReadOnly, isLoading: this.isLoading, hint: this.hint, isInvalid: this.isInvalid, isValid: this.isValid, onMChange: this.changeHandler, onMIconEndClick: this.clickHandler
    }));
  }
};

exports.m_input_search = MInputSearch;

//# sourceMappingURL=m-input-search.cjs.entry.js.map