'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-aa298dc0.js');

const mCouponCss = "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap\"); .form-control-layout-coupon .form-select{--bs-form-select-bg-size:16px;flex:none;width:3rem}.form-control-layout-coupon label{font-size:1rem;font-weight:600;color:var(--bs-gray)}.form-control-layout-coupon .form-select,.form-control-layout-coupon .form-control{border-width:0;outline-width:0;box-shadow:none}.form-control-layout-coupon .input-group.disabled,.form-control-layout-coupon .input-group:disabled,.form-control-layout-coupon .form-select.disabled,.form-control-layout-coupon .form-select:disabled,.form-control-layout-coupon .form-control.disabled,.form-control-layout-coupon .form-control:disabled{background-color:var(--bs-light)}.form-control-layout-coupon .input-group-icon{color:var(--bs-dark)}.form-control-layout-coupon .btn.small{--bs-btn-font-size:.625rem;--bs-btn-font-weight:$font-weight-semibold;color:var(--bs-tertiary)}.form-control-layout-coupon .input-group-text{background:inherit}.form-control-layout-coupon.form-control-theme-primary .btn.small{color:var(--bs-primary)}.form-control-layout-coupon.form-control-theme-tertiary .btn.small{color:var(--bs-tertiary)}.form-control-layout-coupon.form-control-theme-warning .btn.small{color:var(--bs-warning)}.form-control-layout-coupon.form-control-theme-danger .btn.small{color:var(--bs-danger)}.form-control-layout-coupon.form-control-theme-primary .form-control-icon.icon-end,.form-control-layout-coupon.form-control-theme-primary .hint{color:var(--bs-primary)}.form-control-layout-coupon.form-control-theme-primary .input-group{border-color:var(--bs-primary)}.form-control-layout-coupon.form-control-theme-tertiary .form-control-icon.icon-end,.form-control-layout-coupon.form-control-theme-tertiary .hint{color:var(--bs-tertiary)}.form-control-layout-coupon.form-control-theme-tertiary .input-group{border-color:var(--bs-tertiary)}.form-control-layout-coupon.form-control-theme-warning .form-control-icon.icon-end,.form-control-layout-coupon.form-control-theme-warning .hint{color:var(--bs-warning)}.form-control-layout-coupon.form-control-theme-warning .input-group{border-color:var(--bs-warning)}.form-control-layout-coupon.form-control-theme-danger .form-control-icon.icon-end,.form-control-layout-coupon.form-control-theme-danger .hint{color:var(--bs-danger)}.form-control-layout-coupon.form-control-theme-danger .input-group{border-color:var(--bs-danger)}.form-control-layout-coupon:hover.form-control-theme-primary .form-control-icon.icon-end,.form-control-layout-coupon.hover.form-control-theme-primary .form-control-icon.icon-end{color:var(--bs-primary)}.form-control-layout-coupon:hover.form-control-theme-primary .input-group,.form-control-layout-coupon.hover.form-control-theme-primary .input-group{border-color:var(--bs-primary);box-shadow:0 0 0 1px var(--bs-primary)}.form-control-layout-coupon:hover.form-control-theme-secondary .form-control-icon.icon-end,.form-control-layout-coupon.hover.form-control-theme-secondary .form-control-icon.icon-end{color:var(--bs-secondary)}.form-control-layout-coupon:hover.form-control-theme-secondary .input-group,.form-control-layout-coupon.hover.form-control-theme-secondary .input-group{border-color:var(--bs-secondary);box-shadow:0 0 0 1px var(--bs-secondary)}.form-control-layout-coupon:hover.form-control-theme-tertiary .form-control-icon.icon-end,.form-control-layout-coupon.hover.form-control-theme-tertiary .form-control-icon.icon-end{color:var(--bs-tertiary)}.form-control-layout-coupon:hover.form-control-theme-tertiary .input-group,.form-control-layout-coupon.hover.form-control-theme-tertiary .input-group{border-color:var(--bs-tertiary);box-shadow:0 0 0 1px var(--bs-tertiary)}.form-control-layout-coupon:hover.form-control-theme-success .form-control-icon.icon-end,.form-control-layout-coupon.hover.form-control-theme-success .form-control-icon.icon-end{color:var(--bs-success)}.form-control-layout-coupon:hover.form-control-theme-success .input-group,.form-control-layout-coupon.hover.form-control-theme-success .input-group{border-color:var(--bs-success);box-shadow:0 0 0 1px var(--bs-success)}.form-control-layout-coupon:hover.form-control-theme-info .form-control-icon.icon-end,.form-control-layout-coupon.hover.form-control-theme-info .form-control-icon.icon-end{color:var(--bs-info)}.form-control-layout-coupon:hover.form-control-theme-info .input-group,.form-control-layout-coupon.hover.form-control-theme-info .input-group{border-color:var(--bs-info);box-shadow:0 0 0 1px var(--bs-info)}.form-control-layout-coupon:hover.form-control-theme-warning .form-control-icon.icon-end,.form-control-layout-coupon.hover.form-control-theme-warning .form-control-icon.icon-end{color:var(--bs-warning)}.form-control-layout-coupon:hover.form-control-theme-warning .input-group,.form-control-layout-coupon.hover.form-control-theme-warning .input-group{border-color:var(--bs-warning);box-shadow:0 0 0 1px var(--bs-warning)}.form-control-layout-coupon:hover.form-control-theme-danger .form-control-icon.icon-end,.form-control-layout-coupon.hover.form-control-theme-danger .form-control-icon.icon-end{color:var(--bs-danger)}.form-control-layout-coupon:hover.form-control-theme-danger .input-group,.form-control-layout-coupon.hover.form-control-theme-danger .input-group{border-color:var(--bs-danger);box-shadow:0 0 0 1px var(--bs-danger)}";

const MCoupon = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.mClick = index.createEvent(this, "mClick", 7);
    /**
     * Emit input and select values only when the button was clicked
     */
    this.clickHandler = () => {
      var _a, _b;
      this.mClick.emit({
        inputValue: (_a = this.htmlInput) === null || _a === void 0 ? void 0 : _a.value,
        selectValue: (_b = this.htmlSelect) === null || _b === void 0 ? void 0 : _b.value,
      });
    };
    this.mId = undefined;
    this.label = '';
    this.labelIcon = 'info-circle';
    this.labelIconFamilyClass = undefined;
    this.labelIconFamilyPrefix = undefined;
    this.iconStart = undefined;
    this.iconStartFamilyClass = undefined;
    this.iconStartFamilyPrefix = undefined;
    this.iconMiddle = undefined;
    this.iconMiddleFamilyClass = undefined;
    this.iconMiddleFamilyPrefix = undefined;
    this.iconEnd = undefined;
    this.iconEndFamilyClass = undefined;
    this.iconEndFamilyPrefix = undefined;
    this.hasSelect = false;
    this.isLoading = false;
    this.placeholder = '';
    this.type = 'text';
    this.buttonText = 'Apply';
    this.hint = undefined;
    this.hintIconStart = undefined;
    this.hintIconStartFamilyClass = undefined;
    this.hintIconStartFamilyPrefix = undefined;
    this.hintIconEnd = undefined;
    this.hintIconEndFamilyClass = undefined;
    this.hintIconEndFamilyPrefix = undefined;
    this.theme = undefined;
    this.layoutDirection = 'vertical';
  }
  generateHostClasses() {
    return {
      'form-control-layout form-control-layout-coupon': true,
      [`form-control-theme-${this.theme}`]: !!this.theme,
      'form-control-layout-horizontal': this.layoutDirection === 'horizontal',
    };
  }
  render() {
    return (index.h(index.Host, { class: this.generateHostClasses() }, this.label && (index.h("label", { htmlFor: this.mId }, this.label, this.labelIcon && (index.h("m-icon", { class: "form-control-icon", icon: this.labelIcon, familyClass: this.labelIconFamilyClass, familyPrefix: this.labelIconFamilyPrefix })))), index.h("div", { class: "form-control-input" }, index.h("div", { class: {
        'input-group': true,
        disabled: this.isLoading,
      } }, this.iconStart && (index.h("span", { class: "input-group-text", id: `${this.mId}-start` }, this.iconStart && (index.h("m-icon", { class: "form-control-icon", icon: this.iconStart, familyClass: this.iconStartFamilyClass, familyPrefix: this.iconStartFamilyPrefix })))), this.hasSelect && (index.h("select", {
      // eslint-disable-next-line no-return-assign
      ref: (el) => (this.htmlSelect = el), class: "form-select", disabled: this.isLoading
    }, index.h("slot", null))), index.h("input", {
      // eslint-disable-next-line no-return-assign
      ref: (el) => (this.htmlInput = el), id: this.mId, type: this.type, class: "form-control", placeholder: this.placeholder, "aria-label": this.label, "aria-describedby": `${this.mId}-add`, disabled: this.isLoading
    }), this.iconMiddle && (index.h("span", { class: "input-group-text", id: `${this.mId}-middle` }, index.h("m-icon", { class: "form-control-icon", icon: this.iconMiddle, familyClass: this.iconMiddleFamilyClass, familyPrefix: this.iconMiddleFamilyPrefix }))), !this.isLoading && (index.h("button", { class: {
        'btn fw-semibold text-uppercase small': true,
        [`btn-text-${this.theme}`]: !!this.theme,
      }, onClick: this.clickHandler }, this.buttonText)), (this.iconEnd && !this.isLoading) && (index.h("span", { class: "input-group-text", id: `${this.mId}-end` }, index.h("m-icon", { class: "form-control-icon icon-end", icon: this.iconEnd, familyClass: this.iconEndFamilyClass, familyPrefix: this.iconEndFamilyPrefix }))), this.isLoading && (index.h("div", { class: "input-group-text form-control-icon" }, index.h("span", { class: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true" }, index.h("span", { class: "visually-hidden" }, "Loading..."))))), this.hint && (index.h("m-hint", Object.assign({ text: this.hint, theme: this.theme === 'danger' || this.theme === 'tertiary' || this.theme === 'warning' ? this.theme : undefined }, (this.hintIconStart && ({
      iconStart: this.hintIconStart,
      iconStartFamilyClass: this.hintIconStartFamilyClass,
      iconStartFamilyPrefix: this.hintIconStartFamilyPrefix,
    })), (this.hintIconEnd && ({
      iconEnd: this.hintIconEnd,
      iconEndFamilyClass: this.hintIconEndFamilyClass,
      iconEndFamilyPrefix: this.hintIconEndFamilyPrefix,
    }))))))));
  }
};
MCoupon.style = mCouponCss;

exports.m_coupon = MCoupon;
