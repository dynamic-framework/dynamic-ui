'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be9a6731.js');

const DInputPassword = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.eventChange = index.createEvent(this, "eventChange", 7);
    this.changeHandler = () => {
      var _a;
      this.eventChange.emit((_a = this.htmlInput) === null || _a === void 0 ? void 0 : _a.value.toString());
    };
    this.visibilityHandler = () => {
      this.visible = !this.visible;
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
    this.visible = false;
  }
  render() {
    return (index.h("d-input", {
      // eslint-disable-next-line no-return-assign
      ref: (el) => (this.htmlInput = el), innerId: this.innerId, name: this.name, label: this.label, labelIcon: this.labelIcon, labelIconFamilyClass: this.labelIconFamilyClass, labelIconFamilyPrefix: this.labelIconFamilyPrefix, placeholder: this.placeholder, value: this.value, iconEnd: !this.visible ? 'eye-slash' : 'eye', type: !this.visible ? 'password' : 'text', isDisabled: this.isDisabled, isReadOnly: this.isReadOnly, isLoading: this.isLoading, hint: this.hint, isInvalid: this.isInvalid, isValid: this.isValid, onEventChange: this.changeHandler, onEventIconEndClick: this.visibilityHandler
    }));
  }
};

exports.d_input_password = DInputPassword;

//# sourceMappingURL=d-input-password.cjs.entry.js.map