'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-aa298dc0.js');

const mHintCss = "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap\"); .m-hint{--bs-hint-gap:0.5rem;--bs-hint-padding-x:1rem;--bs-hint-padding-y:0.25rem;display:flex;gap:var(--bs-hint-gap);align-items:center;justify-content:flex-start;width:100%;padding:var(--bs-hint-padding-y) var(--bs-hint-padding-x);color:var(--bs-gray)}.m-hint-tertiary{color:var(--bs-tertiary)}.m-hint-success{color:var(--bs-success)}.m-hint-info{color:var(--bs-info)}.m-hint-warning{color:var(--bs-warning)}.m-hint-danger{color:var(--bs-danger)}.m-hint-dark{color:var(--bs-dark)}";

const MHint = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.iconStart = undefined;
    this.iconStartFamilyClass = undefined;
    this.iconStartFamilyPrefix = undefined;
    this.iconEnd = undefined;
    this.iconEndFamilyClass = undefined;
    this.iconEndFamilyPrefix = undefined;
    this.text = undefined;
    this.theme = undefined;
    this.iconSize = 'inherit';
  }
  render() {
    return (index.h("small", { class: {
        'm-hint': true,
        [`m-hint-${this.theme}`]: !!this.theme,
      } }, this.iconStart && (index.h("m-icon", { icon: this.iconStart, theme: this.theme, size: this.iconSize, familyClass: this.iconStartFamilyClass, familyPrefix: this.iconStartFamilyPrefix })), index.h("span", null, this.text), this.iconEnd && (index.h("m-icon", { icon: this.iconEnd, theme: this.theme, size: this.iconSize, familyClass: this.iconEndFamilyClass, familyPrefix: this.iconEndFamilyPrefix }))));
  }
};
MHint.style = mHintCss;

exports.m_hint = MHint;
