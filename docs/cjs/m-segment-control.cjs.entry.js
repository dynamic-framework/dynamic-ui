'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-aa298dc0.js');

const mSegmentControlCss = "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap\"); .form-check{display:block;min-height:1.5rem;padding-left:2em;margin-bottom:0}.form-check .form-check-input{float:left;margin-left:-2em}.form-check-reverse{padding-right:2em;padding-left:0;text-align:right}.form-check-reverse .form-check-input{float:right;margin-right:-2em;margin-left:0}.form-check-input{width:1.5em;height:1.5em;margin-top:0em;vertical-align:top;background-color:var(--bs-light);background-repeat:no-repeat;background-position:center;background-size:contain;border:1px solid var(--bs-form-check-input-border-color);appearance:none;print-color-adjust:exact;transition:border 200ms, color 200ms, background-color 200ms}@media (prefers-reduced-motion: reduce){.form-check-input{transition:none}}.form-check-input[type=checkbox]{border-radius:0.25em}.form-check-input[type=radio]{border-radius:50%}.form-check-input:active{filter:brightness(90%)}.form-check-input:focus{border-color:none;outline:0;box-shadow:none}.form-check-input:checked{background-color:var(--bs-form-check-input-checked-bg, var(--bs-tertiary));border-color:var(--bs-form-check-input-checked-bg, var(--bs-tertiary))}.form-check-input:checked[type=checkbox]{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\")}.form-check-input:checked[type=radio]{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\")}.form-check-input[type=checkbox]:indeterminate{background-color:var(--bs-tertiary);border-color:var(--bs-tertiary);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23f7f7ff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e\")}.form-check-input:disabled{pointer-events:none;filter:none;opacity:0.75}.form-check-input[disabled]~.form-check-label,.form-check-input:disabled~.form-check-label{cursor:default;opacity:0.3}.form-check-label{color:var(--bs-gray)}.form-switch{padding-left:3em}.form-switch .form-check-input{width:2.5em;margin-left:-3em;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e\");background-position:left center;border-radius:2.5em;transition:background-position 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.form-switch .form-check-input{transition:none}}.form-switch .form-check-input:focus{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='var%28--bs-tertiary%29'/%3e%3c/svg%3e\")}.form-switch .form-check-input:checked{background-position:right center;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")}.form-switch.form-check-reverse{padding-right:3em;padding-left:0}.form-switch.form-check-reverse .form-check-input{margin-right:-3em;margin-left:0}.form-check-inline{display:inline-block;margin-right:1rem}.btn-check{position:absolute;clip:rect(0, 0, 0, 0);pointer-events:none}.btn-check[disabled]+.btn,.btn-check:disabled+.btn{pointer-events:none;filter:none;opacity:0.3}.segment-control{--bs-segment-control-width:100%;--bs-segment-control-height:auto;--bs-segment-control-font-size:12px;--bs-segment-control-font-weight:700;--bs-segment-control-line-height:18px;--bs-segment-control-letter-spacing:-0.5%;--bs-segment-control-bg:var(--bs-gray-light);--bs-segment-control-border-radius:0.5rem;--bs-segment-control-item-border-color:var(--bs-gray-light);position:relative;display:flex;align-items:center;justify-content:center;width:var(--bs-segment-control-width);height:var(--bs-segment-control-height);overflow:hidden;font-size:var(--bs-segment-control-font-size);font-weight:var(--bs-segment-control-font-weight);line-height:var(--bs-segment-control-line-height);letter-spacing:var(--bs-segment-control-letter-spacing);background-color:var(--bs-segment-control-bg);border-radius:var(--bs-segment-control-border-radius)}.segment-control-item{--bs-segment-control-item-width:calc(100% - 4px);--bs-segment-control-item-bg:var(--bs-gray-light);--bs-segment-control-item-color:var(--bs-white);--bs-segment-control-item-cursor:pointer;--bs-segment-control-item-padding:calc(0.5rem - 2px) calc(1rem - 2px);--bs-segment-control-item-border:2px solid var(--bs-segment-control-item-border-color);--bs-segment-control-item-border-radius:0.5rem;width:var(--bs-segment-control-item-width);padding:var(--bs-segment-control-item-padding);color:var(--bs-segment-control-item-color);text-align:center;cursor:var(--bs-segment-control-item-cursor);background-color:var(--bs-segment-control-item-bg);border:var(--bs-segment-control-item-border);border-radius:var(--bs-segment-control-item-border-radius)}.segment-control>*:last-child .segment-control-item{--bs-segment-control-item-width:100%}.segment-control input:hover+.segment-control-item,.segment-control .hover+.segment-control-item{--bs-segment-control-item-bg:var(--bs-gray)}.segment-control input:focus+.segment-control-item,.segment-control .focus+.segment-control-item{--bs-segment-control-item-border-color:var(--bs-accessibility)}.segment-control input:active+.segment-control-item,.segment-control .active+.segment-control-item{--bs-segment-control-item-bg:var(--bs-tertiary);--bs-segment-control-item-color:var(--bs-white)}.segment-control input:checked+.segment-control-item{--bs-segment-control-item-bg:var(--bs-white);--bs-segment-control-item-color:var(--bs-tertiary)}.segment-control input:hover:checked+.segment-control-item,.segment-control .hover:checked+.segment-control-item{--bs-segment-control-item-border-color:var(--bs-tertiary)}.segment-control input:disabled+.segment-control-item,.segment-control input:disabled:checked+.segment-control-item,.segment-control .disabled+.segment-control-item,.segment-control .disabled:checked+.segment-control-item{--bs-segment-control-item-bg:var(--bs-white);--bs-segment-control-item-color:var(--bs-gray-light);--bs-segment-control-item-cursor:not-allowed;--bs-segment-control-item-border-color:var(--bs-gray-light);pointer-events:none}.segment-control>:not(:last-child)::after{--bs-segment-control-separator-width:1px;--bs-segment-control-separator-height:25px;--bs-segment-control-separator-margin-x:1.5px;--bs-segment-control-separator-bg:var(--bs-light);--bs-segment-control-separator-border-radius:1rem;--bs-segment-control-separator-opacity:0.2;display:inline-flex;width:var(--bs-segment-control-separator-width);height:var(--bs-segment-control-separator-height);margin:0 var(--bs-segment-control-separator-margin-x);vertical-align:middle;content:\"\";background-color:var(--bs-segment-control-separator-bg);border-radius:var(--bs-segment-control-separator-border-radius);opacity:var(--bs-segment-control-separator-opacity)}";

const MSegmentControl = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.description = undefined;
  }
  render() {
    return (index.h("div", Object.assign({ class: "segment-control", role: "group" }, this.description && ({ 'aria-label': this.description })), index.h("slot", null)));
  }
};
MSegmentControl.style = mSegmentControlCss;

exports.m_segment_control = MSegmentControl;
