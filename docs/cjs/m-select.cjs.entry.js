'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-aa298dc0.js');

const mSelectCss = "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap\"); .form-select{--bs-form-select-bg-size:24px;padding-right:var(--bs-form-select-bg-size);background-color:var(--bs-input-group-bg);border:0;box-shadow:none}.form-select:focus,.form-select:hover{outline-width:0;box-shadow:none}.form-select.no-icons{padding-right:calc(var(--bs-form-select-bg-size) * 2);background-position:right 1rem center}.form-control-layout-full .form-select{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3e%3cpath d='M0 2A2 2 0 012 0H22A2 2 0 0124 2V22A2 2 0 0122 24H2A2 2 0 010 22V2' fill='%234848b7' fill-opacity='0.1'/%3e%3cpath d='M5.646 8.646A.5.5 0 016.354 8.646L12 14.293 17.646 8.646A.5.5 0 0118.354 9.354L12.354 15.354A.5.5 0 0111.646 15.354L5.646 9.354A.5.5 0 015.646 8.646Z' fill='%23161723'/%3e%3c/svg%3e\")}.form-control-layout-full .form-select.form-select-primary{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3e%3cpath d='M0 2A2 2 0 012 0H22A2 2 0 0124 2V22A2 2 0 0122 24H2A2 2 0 010 22V2' fill='%23e60063' fill-opacity='0.1'/%3e%3cpath d='M5.646 8.646A.5.5 0 016.354 8.646L12 14.293 17.646 8.646A.5.5 0 0118.354 9.354L12.354 15.354A.5.5 0 0111.646 15.354L5.646 9.354A.5.5 0 015.646 8.646Z' fill='%23e60063'/%3e%3c/svg%3e\")}.form-control-layout-full .form-select.form-select-secondary{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3e%3cpath d='M0 2A2 2 0 012 0H22A2 2 0 0124 2V22A2 2 0 0122 24H2A2 2 0 010 22V2' fill='%23525298' fill-opacity='0.1'/%3e%3cpath d='M5.646 8.646A.5.5 0 016.354 8.646L12 14.293 17.646 8.646A.5.5 0 0118.354 9.354L12.354 15.354A.5.5 0 0111.646 15.354L5.646 9.354A.5.5 0 015.646 8.646Z' fill='%23525298'/%3e%3c/svg%3e\")}.form-control-layout-full .form-select.form-select-tertiary{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3e%3cpath d='M0 2A2 2 0 012 0H22A2 2 0 0124 2V22A2 2 0 0122 24H2A2 2 0 010 22V2' fill='%234848b7' fill-opacity='0.1'/%3e%3cpath d='M5.646 8.646A.5.5 0 016.354 8.646L12 14.293 17.646 8.646A.5.5 0 0118.354 9.354L12.354 15.354A.5.5 0 0111.646 15.354L5.646 9.354A.5.5 0 015.646 8.646Z' fill='%234848b7'/%3e%3c/svg%3e\")}.form-control-layout-full .form-select.form-select-success{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3e%3cpath d='M0 2A2 2 0 012 0H22A2 2 0 0124 2V22A2 2 0 0122 24H2A2 2 0 010 22V2' fill='%2367c23a' fill-opacity='0.1'/%3e%3cpath d='M5.646 8.646A.5.5 0 016.354 8.646L12 14.293 17.646 8.646A.5.5 0 0118.354 9.354L12.354 15.354A.5.5 0 0111.646 15.354L5.646 9.354A.5.5 0 015.646 8.646Z' fill='%2367c23a'/%3e%3c/svg%3e\")}.form-control-layout-full .form-select.form-select-info{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3e%3cpath d='M0 2A2 2 0 012 0H22A2 2 0 0124 2V22A2 2 0 0122 24H2A2 2 0 010 22V2' fill='%234778d9' fill-opacity='0.1'/%3e%3cpath d='M5.646 8.646A.5.5 0 016.354 8.646L12 14.293 17.646 8.646A.5.5 0 0118.354 9.354L12.354 15.354A.5.5 0 0111.646 15.354L5.646 9.354A.5.5 0 015.646 8.646Z' fill='%234778d9'/%3e%3c/svg%3e\")}.form-control-layout-full .form-select.form-select-warning{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3e%3cpath d='M0 2A2 2 0 012 0H22A2 2 0 0124 2V22A2 2 0 0122 24H2A2 2 0 010 22V2' fill='%23e6a23c' fill-opacity='0.1'/%3e%3cpath d='M5.646 8.646A.5.5 0 016.354 8.646L12 14.293 17.646 8.646A.5.5 0 0118.354 9.354L12.354 15.354A.5.5 0 0111.646 15.354L5.646 9.354A.5.5 0 015.646 8.646Z' fill='%23e6a23c'/%3e%3c/svg%3e\")}.form-control-layout-full .form-select.form-select-danger{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3e%3cpath d='M0 2A2 2 0 012 0H22A2 2 0 0124 2V22A2 2 0 0122 24H2A2 2 0 010 22V2' fill='%23f56c6c' fill-opacity='0.1'/%3e%3cpath d='M5.646 8.646A.5.5 0 016.354 8.646L12 14.293 17.646 8.646A.5.5 0 0118.354 9.354L12.354 15.354A.5.5 0 0111.646 15.354L5.646 9.354A.5.5 0 015.646 8.646Z' fill='%23f56c6c'/%3e%3c/svg%3e\")}.form-control-layout-transparent .input-group{justify-content:space-evenly}.form-control-layout-transparent .input-group .form-select{color:var(--bs-gray);text-align:center}.form-control-layout-transparent .input-group-text,.form-control-layout-transparent .form-select{padding-top:calc(0.5rem + -0.0625rem);padding-bottom:calc(0.5rem + -0.0625rem)}.form-control-layout-transparent .form-select.form-select-primary{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3e%3cpath d='M5.646 8.646A.5.5 0 016.354 8.646L12 14.293 17.646 8.646A.5.5 0 0118.354 9.354L12.354 15.354A.5.5 0 0111.646 15.354L5.646 9.354A.5.5 0 015.646 8.646Z' fill='%23e60063'/%3e%3c/svg%3e\")}.form-control-layout-transparent .form-select.form-select-secondary{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3e%3cpath d='M5.646 8.646A.5.5 0 016.354 8.646L12 14.293 17.646 8.646A.5.5 0 0118.354 9.354L12.354 15.354A.5.5 0 0111.646 15.354L5.646 9.354A.5.5 0 015.646 8.646Z' fill='%23525298'/%3e%3c/svg%3e\")}.form-control-layout-transparent .form-select.form-select-tertiary{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3e%3cpath d='M5.646 8.646A.5.5 0 016.354 8.646L12 14.293 17.646 8.646A.5.5 0 0118.354 9.354L12.354 15.354A.5.5 0 0111.646 15.354L5.646 9.354A.5.5 0 015.646 8.646Z' fill='%234848b7'/%3e%3c/svg%3e\")}.form-control-layout-transparent .form-select.form-select-success{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3e%3cpath d='M5.646 8.646A.5.5 0 016.354 8.646L12 14.293 17.646 8.646A.5.5 0 0118.354 9.354L12.354 15.354A.5.5 0 0111.646 15.354L5.646 9.354A.5.5 0 015.646 8.646Z' fill='%2367c23a'/%3e%3c/svg%3e\")}.form-control-layout-transparent .form-select.form-select-info{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3e%3cpath d='M5.646 8.646A.5.5 0 016.354 8.646L12 14.293 17.646 8.646A.5.5 0 0118.354 9.354L12.354 15.354A.5.5 0 0111.646 15.354L5.646 9.354A.5.5 0 015.646 8.646Z' fill='%234778d9'/%3e%3c/svg%3e\")}.form-control-layout-transparent .form-select.form-select-warning{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3e%3cpath d='M5.646 8.646A.5.5 0 016.354 8.646L12 14.293 17.646 8.646A.5.5 0 0118.354 9.354L12.354 15.354A.5.5 0 0111.646 15.354L5.646 9.354A.5.5 0 015.646 8.646Z' fill='%23e6a23c'/%3e%3c/svg%3e\")}.form-control-layout-transparent .form-select.form-select-danger{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3e%3cpath d='M5.646 8.646A.5.5 0 016.354 8.646L12 14.293 17.646 8.646A.5.5 0 0118.354 9.354L12.354 15.354A.5.5 0 0111.646 15.354L5.646 9.354A.5.5 0 015.646 8.646Z' fill='%23f56c6c'/%3e%3c/svg%3e\")}.form-control-layout-full.form-control-theme-primary label,.form-control-layout-transparent.form-control-theme-primary label{--bs-form-label-color:var(--bs-primary)}.form-control-layout-full.form-control-theme-primary .input-group,.form-control-layout-full.form-control-theme-primary .input-group-text,.form-control-layout-full.form-control-theme-primary .form-control-icon,.form-control-layout-full.form-control-theme-primary .hint,.form-control-layout-transparent.form-control-theme-primary .input-group,.form-control-layout-transparent.form-control-theme-primary .input-group-text,.form-control-layout-transparent.form-control-theme-primary .form-control-icon,.form-control-layout-transparent.form-control-theme-primary .hint{color:var(--bs-primary)}.form-control-layout-full.form-control-theme-primary .input-group,.form-control-layout-transparent.form-control-theme-primary .input-group{border-color:var(--bs-primary)}.form-control-layout-full.form-control-theme-primary .input-group:hover:not(.disabled),.form-control-layout-transparent.form-control-theme-primary .input-group:hover:not(.disabled){border-color:var(--bs-primary-hover);box-shadow:0 0 0 0.5px var(--bs-primary-hover)}.form-control-layout-full.form-control-theme-secondary label,.form-control-layout-transparent.form-control-theme-secondary label{--bs-form-label-color:var(--bs-secondary)}.form-control-layout-full.form-control-theme-secondary .input-group,.form-control-layout-full.form-control-theme-secondary .input-group-text,.form-control-layout-full.form-control-theme-secondary .form-control-icon,.form-control-layout-full.form-control-theme-secondary .hint,.form-control-layout-transparent.form-control-theme-secondary .input-group,.form-control-layout-transparent.form-control-theme-secondary .input-group-text,.form-control-layout-transparent.form-control-theme-secondary .form-control-icon,.form-control-layout-transparent.form-control-theme-secondary .hint{color:var(--bs-secondary)}.form-control-layout-full.form-control-theme-secondary .input-group,.form-control-layout-transparent.form-control-theme-secondary .input-group{border-color:var(--bs-secondary)}.form-control-layout-full.form-control-theme-secondary .input-group:hover:not(.disabled),.form-control-layout-transparent.form-control-theme-secondary .input-group:hover:not(.disabled){border-color:var(--bs-secondary-hover);box-shadow:0 0 0 0.5px var(--bs-secondary-hover)}.form-control-layout-full.form-control-theme-tertiary label,.form-control-layout-transparent.form-control-theme-tertiary label{--bs-form-label-color:var(--bs-tertiary)}.form-control-layout-full.form-control-theme-tertiary .input-group,.form-control-layout-full.form-control-theme-tertiary .input-group-text,.form-control-layout-full.form-control-theme-tertiary .form-control-icon,.form-control-layout-full.form-control-theme-tertiary .hint,.form-control-layout-transparent.form-control-theme-tertiary .input-group,.form-control-layout-transparent.form-control-theme-tertiary .input-group-text,.form-control-layout-transparent.form-control-theme-tertiary .form-control-icon,.form-control-layout-transparent.form-control-theme-tertiary .hint{color:var(--bs-tertiary)}.form-control-layout-full.form-control-theme-tertiary .input-group,.form-control-layout-transparent.form-control-theme-tertiary .input-group{border-color:var(--bs-tertiary)}.form-control-layout-full.form-control-theme-tertiary .input-group:hover:not(.disabled),.form-control-layout-transparent.form-control-theme-tertiary .input-group:hover:not(.disabled){border-color:var(--bs-tertiary-hover);box-shadow:0 0 0 0.5px var(--bs-tertiary-hover)}.form-control-layout-full.form-control-theme-success label,.form-control-layout-transparent.form-control-theme-success label{--bs-form-label-color:var(--bs-success)}.form-control-layout-full.form-control-theme-success .input-group,.form-control-layout-full.form-control-theme-success .input-group-text,.form-control-layout-full.form-control-theme-success .form-control-icon,.form-control-layout-full.form-control-theme-success .hint,.form-control-layout-transparent.form-control-theme-success .input-group,.form-control-layout-transparent.form-control-theme-success .input-group-text,.form-control-layout-transparent.form-control-theme-success .form-control-icon,.form-control-layout-transparent.form-control-theme-success .hint{color:var(--bs-success)}.form-control-layout-full.form-control-theme-success .input-group,.form-control-layout-transparent.form-control-theme-success .input-group{border-color:var(--bs-success)}.form-control-layout-full.form-control-theme-success .input-group:hover:not(.disabled),.form-control-layout-transparent.form-control-theme-success .input-group:hover:not(.disabled){border-color:var(--bs-success-hover);box-shadow:0 0 0 0.5px var(--bs-success-hover)}.form-control-layout-full.form-control-theme-info label,.form-control-layout-transparent.form-control-theme-info label{--bs-form-label-color:var(--bs-info)}.form-control-layout-full.form-control-theme-info .input-group,.form-control-layout-full.form-control-theme-info .input-group-text,.form-control-layout-full.form-control-theme-info .form-control-icon,.form-control-layout-full.form-control-theme-info .hint,.form-control-layout-transparent.form-control-theme-info .input-group,.form-control-layout-transparent.form-control-theme-info .input-group-text,.form-control-layout-transparent.form-control-theme-info .form-control-icon,.form-control-layout-transparent.form-control-theme-info .hint{color:var(--bs-info)}.form-control-layout-full.form-control-theme-info .input-group,.form-control-layout-transparent.form-control-theme-info .input-group{border-color:var(--bs-info)}.form-control-layout-full.form-control-theme-info .input-group:hover:not(.disabled),.form-control-layout-transparent.form-control-theme-info .input-group:hover:not(.disabled){border-color:var(--bs-info-hover);box-shadow:0 0 0 0.5px var(--bs-info-hover)}.form-control-layout-full.form-control-theme-warning label,.form-control-layout-transparent.form-control-theme-warning label{--bs-form-label-color:var(--bs-warning)}.form-control-layout-full.form-control-theme-warning .input-group,.form-control-layout-full.form-control-theme-warning .input-group-text,.form-control-layout-full.form-control-theme-warning .form-control-icon,.form-control-layout-full.form-control-theme-warning .hint,.form-control-layout-transparent.form-control-theme-warning .input-group,.form-control-layout-transparent.form-control-theme-warning .input-group-text,.form-control-layout-transparent.form-control-theme-warning .form-control-icon,.form-control-layout-transparent.form-control-theme-warning .hint{color:var(--bs-warning)}.form-control-layout-full.form-control-theme-warning .input-group,.form-control-layout-transparent.form-control-theme-warning .input-group{border-color:var(--bs-warning)}.form-control-layout-full.form-control-theme-warning .input-group:hover:not(.disabled),.form-control-layout-transparent.form-control-theme-warning .input-group:hover:not(.disabled){border-color:var(--bs-warning-hover);box-shadow:0 0 0 0.5px var(--bs-warning-hover)}.form-control-layout-full.form-control-theme-danger label,.form-control-layout-transparent.form-control-theme-danger label{--bs-form-label-color:var(--bs-danger)}.form-control-layout-full.form-control-theme-danger .input-group,.form-control-layout-full.form-control-theme-danger .input-group-text,.form-control-layout-full.form-control-theme-danger .form-control-icon,.form-control-layout-full.form-control-theme-danger .hint,.form-control-layout-transparent.form-control-theme-danger .input-group,.form-control-layout-transparent.form-control-theme-danger .input-group-text,.form-control-layout-transparent.form-control-theme-danger .form-control-icon,.form-control-layout-transparent.form-control-theme-danger .hint{color:var(--bs-danger)}.form-control-layout-full.form-control-theme-danger .input-group,.form-control-layout-transparent.form-control-theme-danger .input-group{border-color:var(--bs-danger)}.form-control-layout-full.form-control-theme-danger .input-group:hover:not(.disabled),.form-control-layout-transparent.form-control-theme-danger .input-group:hover:not(.disabled){border-color:var(--bs-danger-hover);box-shadow:0 0 0 0.5px var(--bs-danger-hover)}.form-control-layout-prime .input-group,.form-control-layout-prime .form-select{color:var(--bs-white);border-radius:var(--bs-input-group-border-radius)}.form-control-layout-prime .input-group .form-select{padding-right:calc(var(--bs-form-select-bg-size) * 2);background-color:var(--bs-primary);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3e%3cpath d='M5.646 8.646A.5.5 0 016.354 8.646L12 14.293 17.646 8.646A.5.5 0 0118.354 9.354L12.354 15.354A.5.5 0 0111.646 15.354L5.646 9.354A.5.5 0 015.646 8.646Z' fill='%23fff'/%3e%3c/svg%3e\");background-position:right 1rem center}.form-control-layout-prime .input-group{border-color:var(--bs-primary)}.form-control-layout-prime .input-group:hover:not(.disabled){border-color:var(--bs-primary-hover)}.form-control-layout-prime .input-group:hover:not(.disabled) .form-select{background-color:var(--bs-primary-hover)}.form-control-layout-prime .form-select:disabled{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3e%3cpath d='M5.646 8.646A.5.5 0 016.354 8.646L12 14.293 17.646 8.646A.5.5 0 0118.354 9.354L12.354 15.354A.5.5 0 0111.646 15.354L5.646 9.354A.5.5 0 015.646 8.646Z' fill='%23d5d4e6'/%3e%3c/svg%3e\")}.form-control-layout-full .input-group.disabled,.form-control-layout-transparent .input-group.disabled,.form-control-layout-prime .input-group.disabled{background-color:var(--bs-light);border-color:var(--bs-gray-light)}.form-control-layout-full .form-select:disabled,.form-control-layout-transparent .form-select:disabled,.form-control-layout-prime .form-select:disabled{color:var(--bs-gray-light);background-color:var(--bs-light)}.form-control-layout-full .loading,.form-control-layout-transparent .loading,.form-control-layout-prime .loading{background:var(--bs-light)}";

const MSelect = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.mChange = index.createEvent(this, "mChange", 7);
    this.mBlur = index.createEvent(this, "mBlur", 7);
    this.changeHandler = (event) => {
      const { value } = event.target;
      this.mChange.emit(this.options.find((option) => this.valueExtractor(option).toString() === value));
    };
    this.blurHandler = (event) => {
      this.mBlur.emit(event);
    };
    this.mId = undefined;
    this.name = undefined;
    this.variant = 'prime';
    this.options = [];
    this.theme = undefined;
    this.label = undefined;
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
    this.hintIconStart = undefined;
    this.hintIconStartFamilyClass = undefined;
    this.hintIconStartFamilyPrefix = undefined;
    this.hintIconEnd = undefined;
    this.hintIconEndFamilyClass = undefined;
    this.hintIconEndFamilyPrefix = undefined;
    this.hint = undefined;
    this.selectedOption = undefined;
    this.layoutDirection = 'vertical';
    this.isDisabled = false;
    this.isLoading = false;
    this.valueExtractor = (item) => item === null || item === void 0 ? void 0 : item.value;
    this.labelExtractor = (item) => item === null || item === void 0 ? void 0 : item.label;
  }
  generateHostClasses() {
    return {
      'form-control-layout': true,
      'form-control-layout-horizontal': this.layoutDirection === 'horizontal',
      [`form-control-layout-${this.variant}`]: !!this.variant,
      'form-control-layout-pill': this.variant !== 'full',
      [`form-control-theme-${this.theme}`]: this.variant !== 'prime' && !!this.theme,
    };
  }
  render() {
    return (index.h(index.Host, { class: this.generateHostClasses() }, (this.label) && (index.h("label", { htmlFor: this.mId }, this.label, this.labelIcon && (index.h("m-icon", { class: "form-control-icon small", icon: this.labelIcon, familyClass: this.labelIconFamilyClass, familyPrefix: this.labelIconFamilyPrefix })))), index.h("div", { class: "form-control-input w-100" }, index.h("div", { class: {
        'input-group': true,
        disabled: this.isDisabled || this.isLoading,
      } }, this.iconStart && (index.h("span", { class: "input-group-text", id: `${this.mId}-start` }, index.h("m-icon", { class: "form-control-icon", icon: this.iconStart, familyClass: this.iconStartFamilyClass, familyPrefix: this.iconStartFamilyPrefix }))), index.h("select", { id: this.mId, name: this.name, class: {
        'form-select': true,
        'no-icons': !this.iconStart && !this.iconMiddle && !this.iconEnd,
        [`form-select-${this.theme}`]: this.variant !== 'prime' && !!this.theme,
      }, "aria-describedby": `${this.mId}-start`, disabled: this.isDisabled || this.isLoading, onChange: this.changeHandler, onBlur: this.blurHandler }, this.options.map((option) => (index.h("option", { value: this.valueExtractor(option), selected: this.selectedOption
        && this.valueExtractor(option) === this.valueExtractor(this.selectedOption) }, this.labelExtractor(option))))), (this.iconMiddle) && (index.h("span", { class: "input-group-text", id: `${this.mId}-middle` }, this.iconMiddle && (index.h("m-icon", { class: "form-control-icon", icon: this.iconMiddle, familyClass: this.iconMiddleFamilyClass, familyPrefix: this.iconMiddleFamilyPrefix })))), (this.iconEnd && !this.isLoading) && (index.h("span", { class: "input-group-text", id: `${this.mId}-end` }, this.iconEnd && (index.h("m-icon", { class: "form-control-icon", icon: this.iconEnd, familyClass: this.iconEndFamilyClass, familyPrefix: this.iconEndFamilyPrefix })))), this.isLoading && (index.h("div", { class: "input-group-text form-control-icon loading" }, index.h("span", { class: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true" }, index.h("span", { class: "visually-hidden" }, "Loading..."))))), (this.hint) && (index.h("div", { class: "d-flex gap-2 hint text-start" }, index.h("small", null, this.hintIconStart && (index.h("m-icon", { class: "form-control-icon", icon: this.hintIconStart, familyClass: this.hintIconStartFamilyClass, familyPrefix: this.hintIconStartFamilyPrefix })), this.hint, this.hintIconEnd && (index.h("m-icon", { class: "form-control-icon", icon: this.hintIconEnd, familyClass: this.hintIconEndFamilyClass, familyPrefix: this.hintIconEndFamilyPrefix }))))))));
  }
};
MSelect.style = mSelectCss;

exports.m_select = MSelect;
