'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-aa298dc0.js');

const mBadgeCss = "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap\"); .badge{--bs-badge-padding-x:0.75rem;--bs-badge-padding-y:0.25rem;--bs-badge-font-size:0.75rem;--bs-badge-font-weight:400;--bs-badge-color:#fff;--bs-badge-border-radius:0.5rem;display:inline-block;padding:var(--bs-badge-padding-y) var(--bs-badge-padding-x);font-size:var(--bs-badge-font-size);font-weight:var(--bs-badge-font-weight);line-height:1;color:var(--bs-badge-color);text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:var(--bs-badge-border-radius)}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.badge{--bs-badge-line-height:1.125rem;line-height:var(--bs-badge-line-height)}.badge.bg-light{--bs-badge-color-light:#61616d;color:var(--bs-badge-color-light)}.badge.badge-dot{--bs-badge-dot-width:0.75rem;--bs-badge-dot-height:0.75rem;width:var(--bs-badge-dot-width);height:var(--bs-badge-dot-height);padding:0;margin:0}.badge.badge-dot:empty{display:inline-block}";

const MBadge = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.theme = 'primary';
    this.text = '';
  }
  render() {
    return (index.h(index.Host, { class: "d-inline-block" }, index.h("span", { class: `badge ${this.text === '' ? 'badge-dot' : ''} bg-${this.theme}` }, this.text)));
  }
};
MBadge.style = mBadgeCss;

exports.m_badge = MBadge;
