import { r as registerInstance, c as createEvent, h, H as Host } from './index-39190b44.js';

const MInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.mChange = createEvent(this, "mChange", 7);
    this.mBlur = createEvent(this, "mBlur", 7);
    this.changeHandler = (event) => {
      this.mChange.emit(event.target.value);
    };
    this.blurHandler = (event) => {
      this.mBlur.emit(event);
    };
    this.mId = undefined;
    this.name = undefined;
    this.label = '';
    this.labelIcon = 'info-circle';
    this.labelIconFamilyClass = undefined;
    this.labelIconFamilyPrefix = undefined;
    this.placeholder = '';
    this.type = 'text';
    this.value = '';
    this.isDisabled = false;
    this.isLoading = false;
    this.iconStart = undefined;
    this.iconStartFamilyClass = undefined;
    this.iconStartFamilyPrefix = undefined;
    this.iconEnd = undefined;
    this.iconEndFamilyClass = undefined;
    this.iconEndFamilyPrefix = undefined;
    this.hint = undefined;
    this.hintIconStart = undefined;
    this.hintIconStartFamilyClass = undefined;
    this.hintIconStartFamilyPrefix = undefined;
    this.hintIconEnd = undefined;
    this.hintIconEndFamilyClass = undefined;
    this.hintIconEndFamilyPrefix = undefined;
    this.layoutDirection = 'vertical';
    this.isInvalid = false;
  }
  generateHostClasses() {
    return {
      'form-control-layout': true,
      'form-control-layout-horizontal': this.layoutDirection === 'horizontal',
    };
  }
  render() {
    return (h(Host, { class: this.generateHostClasses() }, this.label && (h("label", { htmlFor: this.mId }, this.label, this.labelIcon && (h("m-icon", { class: "form-control-icon", icon: this.labelIcon, familyClass: this.labelIconFamilyClass, familyPrefix: this.labelIconFamilyPrefix })))), h("div", { class: "form-control-input" }, h("div", { class: {
        'input-group': true,
        'has-validation': this.isInvalid,
        disabled: this.isDisabled || this.isLoading,
      } }, this.iconStart && (h("span", { class: "input-group-text", id: `${this.mId}-start` }, this.iconStart && (h("m-icon", { class: "form-control-icon", icon: this.iconStart, familyClass: this.iconStartFamilyClass, familyPrefix: this.iconStartFamilyPrefix })))), h("input", { id: this.mId, name: this.name, type: this.type, class: {
        'form-control': true,
        'is-invalid': this.isInvalid,
      }, placeholder: this.placeholder, "aria-label": this.label, disabled: this.isDisabled || this.isLoading, value: this.value, "aria-describedby": `${this.mId}-add`, onInput: this.changeHandler, onBlur: this.blurHandler }), (this.iconEnd && !this.isLoading) && (h("span", { class: "input-group-text", id: `${this.mId}-end` }, this.iconEnd && (h("m-icon", { class: "form-control-icon", icon: this.iconEnd, familyClass: this.iconEndFamilyClass, familyPrefix: this.iconEndFamilyPrefix })))), this.isLoading && (h("div", { class: "input-group-text form-control-icon" }, h("span", { class: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true" }, h("span", { class: "visually-hidden" }, "Loading..."))))), this.hint && (h("small", { class: "hint" }, this.hintIconStart && (h("m-icon", { class: "form-control-icon", icon: this.hintIconStart, familyClass: this.hintIconStartFamilyClass, familyPrefix: this.hintIconStartFamilyPrefix })), this.hint, this.hintIconEnd && (h("m-icon", { class: "form-control-icon", icon: this.hintIconEnd, familyClass: this.hintIconEndFamilyClass, familyPrefix: this.hintIconEndFamilyPrefix })))))));
  }
};

export { MInput as m_input };
