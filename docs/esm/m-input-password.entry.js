import { r as registerInstance, c as createEvent, h } from './index-c7f2daf2.js';

const MInputPassword = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.mChange = createEvent(this, "mChange", 7);
    this.changeHandler = () => {
      var _a;
      this.mChange.emit((_a = this.htmlInput) === null || _a === void 0 ? void 0 : _a.value.toString());
    };
    this.visibilityHandler = () => {
      this.visible = !this.visible;
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
    this.visible = false;
  }
  render() {
    return (h("m-input", {
      // eslint-disable-next-line no-return-assign
      ref: (el) => (this.htmlInput = el), mId: this.mId, name: this.name, label: this.label, labelIcon: this.labelIcon, labelIconFamilyClass: this.labelIconFamilyClass, labelIconFamilyPrefix: this.labelIconFamilyPrefix, placeholder: this.placeholder, value: this.value, iconEnd: !this.visible ? 'eye-slash' : 'eye', type: !this.visible ? 'password' : 'text', isDisabled: this.isDisabled, isReadOnly: this.isReadOnly, isLoading: this.isLoading, hint: this.hint, isInvalid: this.isInvalid, isValid: this.isValid, onMChange: this.changeHandler, onMIconEndClick: this.visibilityHandler
    }));
  }
};

export { MInputPassword as m_input_password };

//# sourceMappingURL=m-input-password.entry.js.map