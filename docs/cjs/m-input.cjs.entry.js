'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-aa298dc0.js');

const MInput = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.mChange = index.createEvent(this, "mChange", 7);
    this.mBlur = index.createEvent(this, "mBlur", 7);
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
    return (index.h(index.Host, { class: this.generateHostClasses() }, this.label && (index.h("label", { htmlFor: this.mId }, this.label, this.labelIcon && (index.h("m-icon", { class: "form-control-icon", icon: this.labelIcon, familyClass: this.labelIconFamilyClass, familyPrefix: this.labelIconFamilyPrefix })))), index.h("div", { class: "form-control-input" }, index.h("div", { class: {
        'input-group': true,
        'has-validation': this.isInvalid,
        disabled: this.isDisabled || this.isLoading,
      } }, this.iconStart && (index.h("span", { class: "input-group-text", id: `${this.mId}-start` }, this.iconStart && (index.h("m-icon", { class: "form-control-icon", icon: this.iconStart, familyClass: this.iconStartFamilyClass, familyPrefix: this.iconStartFamilyPrefix })))), index.h("input", { id: this.mId, name: this.name, type: this.type, class: {
        'form-control': true,
        'is-invalid': this.isInvalid,
      }, placeholder: this.placeholder, "aria-label": this.label, disabled: this.isDisabled || this.isLoading, value: this.value, "aria-describedby": `${this.mId}-add`, onInput: this.changeHandler, onBlur: this.blurHandler }), (this.iconEnd && !this.isLoading) && (index.h("span", { class: "input-group-text", id: `${this.mId}-end` }, this.iconEnd && (index.h("m-icon", { class: "form-control-icon", icon: this.iconEnd, familyClass: this.iconEndFamilyClass, familyPrefix: this.iconEndFamilyPrefix })))), this.isLoading && (index.h("div", { class: "input-group-text form-control-icon" }, index.h("span", { class: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true" }, index.h("span", { class: "visually-hidden" }, "Loading..."))))), this.hint && (index.h("small", { class: "hint" }, this.hintIconStart && (index.h("m-icon", { class: "form-control-icon", icon: this.hintIconStart, familyClass: this.hintIconStartFamilyClass, familyPrefix: this.hintIconStartFamilyPrefix })), this.hint, this.hintIconEnd && (index.h("m-icon", { class: "form-control-icon", icon: this.hintIconEnd, familyClass: this.hintIconEndFamilyClass, familyPrefix: this.hintIconEndFamilyPrefix })))))));
  }
};

exports.m_input = MInput;
