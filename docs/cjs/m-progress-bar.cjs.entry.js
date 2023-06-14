'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-aa298dc0.js');

const mProgressBarCss = "/*\n$blues: (\n  \"blue-100\": $blue-100,\n  \"blue-200\": $blue-200,\n  \"blue-300\": $blue-300,\n  \"blue-400\": $blue-400,\n  \"blue-500\": $blue-500,\n  \"blue-600\": $blue-600,\n  \"blue-700\": $blue-700,\n  \"blue-800\": $blue-800,\n  \"blue-900\": $blue-900\n) !default;\n*/\n/*\n$indigos: (\n  \"indigo-100\": $indigo-100,\n  \"indigo-200\": $indigo-200,\n  \"indigo-300\": $indigo-300,\n  \"indigo-400\": $indigo-400,\n  \"indigo-500\": $indigo-500,\n  \"indigo-600\": $indigo-600,\n  \"indigo-700\": $indigo-700,\n  \"indigo-800\": $indigo-800,\n  \"indigo-900\": $indigo-900\n) !default;\n*/\n/*\n$purples: (\n  \"purple-100\": $purple-100,\n  \"purple-200\": $purple-200,\n  \"purple-300\": $purple-300,\n  \"purple-400\": $purple-400,\n  \"purple-500\": $purple-500,\n  \"purple-600\": $purple-600,\n  \"purple-700\": $purple-700,\n  \"purple-800\": $purple-800,\n  \"purple-900\": $purple-900\n) !default;\n*/\n/*\n$pinks: (\n  \"pink-100\": $pink-100,\n  \"pink-200\": $pink-200,\n  \"pink-300\": $pink-300,\n  \"pink-400\": $pink-400,\n  \"pink-500\": $pink-500,\n  \"pink-600\": $pink-600,\n  \"pink-700\": $pink-700,\n  \"pink-800\": $pink-800,\n  \"pink-900\": $pink-900\n) !default;\n*/\n/*\n$reds: (\n  \"red-100\": $red-100,\n  \"red-200\": $red-200,\n  \"red-300\": $red-300,\n  \"red-400\": $red-400,\n  \"red-500\": $red-500,\n  \"red-600\": $red-600,\n  \"red-700\": $red-700,\n  \"red-800\": $red-800,\n  \"red-900\": $red-900\n) !default;\n*/\n/*\n$oranges: (\n  \"orange-100\": $orange-100,\n  \"orange-200\": $orange-200,\n  \"orange-300\": $orange-300,\n  \"orange-400\": $orange-400,\n  \"orange-500\": $orange-500,\n  \"orange-600\": $orange-600,\n  \"orange-700\": $orange-700,\n  \"orange-800\": $orange-800,\n  \"orange-900\": $orange-900\n) !default;\n*/\n/*\n$yellows: (\n  \"yellow-100\": $yellow-100,\n  \"yellow-200\": $yellow-200,\n  \"yellow-300\": $yellow-300,\n  \"yellow-400\": $yellow-400,\n  \"yellow-500\": $yellow-500,\n  \"yellow-600\": $yellow-600,\n  \"yellow-700\": $yellow-700,\n  \"yellow-800\": $yellow-800,\n  \"yellow-900\": $yellow-900\n) !default;\n*/\n/*\n$greens: (\n  \"green-100\": $green-100,\n  \"green-200\": $green-200,\n  \"green-300\": $green-300,\n  \"green-400\": $green-400,\n  \"green-500\": $green-500,\n  \"green-600\": $green-600,\n  \"green-700\": $green-700,\n  \"green-800\": $green-800,\n  \"green-900\": $green-900\n) !default;\n*/\n/*\n$teals: (\n  \"teal-100\": $teal-100,\n  \"teal-200\": $teal-200,\n  \"teal-300\": $teal-300,\n  \"teal-400\": $teal-400,\n  \"teal-500\": $teal-500,\n  \"teal-600\": $teal-600,\n  \"teal-700\": $teal-700,\n  \"teal-800\": $teal-800,\n  \"teal-900\": $teal-900\n) !default;\n*/\n/*\n$cyans: (\n  \"cyan-100\": $cyan-100,\n  \"cyan-200\": $cyan-200,\n  \"cyan-300\": $cyan-300,\n  \"cyan-400\": $cyan-400,\n  \"cyan-500\": $cyan-500,\n  \"cyan-600\": $cyan-600,\n  \"cyan-700\": $cyan-700,\n  \"cyan-800\": $cyan-800,\n  \"cyan-900\": $cyan-900\n) !default;\n*/\n/*\n$escaped-characters: (\n  (\"<\", \"%3c\"),\n  (\">\", \"%3e\"),\n  (\"#\", \"%23\"),\n  (\"(\", \"%28\"),\n  (\")\", \"%29\"),\n) !default;\n*/\n/*\n$position-values: (\n  0: 0,\n  50: 50%,\n  100: 100%\n) !default;\n*/\n/*\n$grid-breakpoints: (\n  xs: 0,\n  sm: 576px,\n  md: 768px,\n  lg: 992px,\n  xl: 1200px,\n  xxl: 1400px\n) !default;\n*/\n/*\n$container-max-widths: (\n  sm: 540px,\n  md: 720px,\n  lg: 960px,\n  xl: 1140px,\n  xxl: 1320px\n) !default;\n*/\n/*\n$aspect-ratios: (\n  \"1x1\": 100%,\n  \"4x3\": calc(3 / 4 * 100%),\n  \"16x9\": calc(9 / 16 * 100%),\n  \"21x9\": calc(9 / 21 * 100%)\n) !default;\n*/\n@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap\");\n/*\n$table-variants: (\n  \"primary\": shift-color($primary, $table-bg-scale),\n  \"secondary\": shift-color($secondary, $table-bg-scale),\n  \"success\": shift-color($success, $table-bg-scale),\n  \"info\": shift-color($info, $table-bg-scale),\n  \"warning\": shift-color($warning, $table-bg-scale),\n  \"danger\": shift-color($danger, $table-bg-scale),\n  \"light\": $light,\n  \"dark\": $dark,\n) !default;\n*/\n/*\n$form-validation-states: (\n  \"valid\": (\n    \"color\": $form-feedback-valid-color,\n    \"icon\": $form-feedback-icon-valid\n  ),\n  \"invalid\": (\n    \"color\": $form-feedback-invalid-color,\n    \"icon\": $form-feedback-icon-invalid\n  )\n) !default;\n*/\n@keyframes progress-bar-stripes {\n  0% {\n    background-position-x: 0.5rem;\n  }\n}\n.progress {\n  --bs-progress-height: 0.5rem;\n  --bs-progress-font-size: 0.75rem;\n  --bs-progress-bg: #d7d7e0;\n  --bs-progress-border-radius: 1rem;\n  --bs-progress-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);\n  --bs-progress-bar-color: #fff;\n  --bs-progress-bar-bg: #4848b7;\n  --bs-progress-bar-transition: width 0.6s ease;\n  display: flex;\n  height: var(--bs-progress-height);\n  overflow: hidden;\n  font-size: var(--bs-progress-font-size);\n  background-color: var(--bs-progress-bg);\n  border-radius: var(--bs-progress-border-radius);\n  box-shadow: var(--bs-progress-box-shadow);\n}\n\n.progress-bar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  color: var(--bs-progress-bar-color);\n  text-align: center;\n  white-space: nowrap;\n  background-color: var(--bs-progress-bar-bg);\n  transition: var(--bs-progress-bar-transition);\n}\n@media (prefers-reduced-motion: reduce) {\n  .progress-bar {\n    transition: none;\n  }\n}\n\n.progress-bar-striped {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: var(--bs-progress-height) var(--bs-progress-height);\n}\n\n.progress-bar-animated {\n  animation: 1s linear infinite progress-bar-stripes;\n}\n@media (prefers-reduced-motion: reduce) {\n  .progress-bar-animated {\n    animation: none;\n  }\n}\n\n:host {\n  display: block;\n}\n\n.progress-box {\n  --bs-progress-font-size: .813rem;\n  --bs-progress-font-weight: 700;\n  --bs-progress-font-color: #4848b7;\n  display: flex;\n  flex-direction: row;\n  gap: 0.5rem;\n  align-items: center;\n  width: 100%;\n}\n.progress-box > .progress {\n  --bs-progress-height: 0.5rem;\n  --bs-progress-bg: #d7d7e0;\n  --bs-progress-border-radius: 1rem;\n  --bs-progress-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);\n  --bs-progress-bar-color: #fff;\n  --bs-progress-bar-bg: #4848b7;\n  --bs-progress-bar-border-radius: 50rem;\n  --bs-progress-bar-transition: width 0.6s ease;\n  width: 100%;\n}\n.progress-box > .progress.dark-mode {\n  --bs-progress-bar-bg: #fff;\n  --bs-progress-bg: rgba(255, 255, 255, 0.5);\n}\n.progress-box > .progress.dark-mode + .progress-text {\n  color: var(--bs-progress-bar-bg);\n}\n.progress-box .progress-bar {\n  border-radius: var(--bs-progress-bar-border-radius);\n}\n.progress-box .progress-text {\n  min-width: 4ch;\n  max-width: 4ch;\n  font-size: var(--bs-progress-font-size);\n  font-weight: var(--bs-progress-font-weight);\n  color: var(--bs-progress-font-color);\n  text-align: end;\n}";

const MProgressBar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.currentValue = undefined;
    this.minValue = 0;
    this.maxValue = 100;
    this.classNameContainer = undefined;
    this.classNameProgress = undefined;
    this.classNameBar = undefined;
    this.enableStripedAnimation = false;
    this.enableDarkMode = false;
  }
  formatProgress() {
    return `${this.currentValue}%`;
  }
  generateHostClasses() {
    return {
      'progress-box': true,
      [`${this.classNameContainer}`]: !!this.classNameContainer,
    };
  }
  generateContainerClasses() {
    return {
      progress: true,
      'dark-mode': this.enableDarkMode,
    };
  }
  generateClasses() {
    return {
      'progress-bar': true,
      [`${this.classNameBar}`]: !!this.classNameBar,
      'progress-bar-striped progress-bar-animated': this.enableStripedAnimation,
    };
  }
  render() {
    return (index.h(index.Host, { class: this.generateHostClasses() }, index.h("div", { class: this.generateContainerClasses() }, index.h("div", { class: this.generateClasses(), role: "progressbar", "aria-label": "Progress bar", style: { width: `${this.currentValue}%` }, "aria-valuenow": this.currentValue, "aria-valuemin": this.minValue, "aria-valuemax": this.maxValue })), index.h("span", { class: "progress-text" }, this.formatProgress())));
  }
};
MProgressBar.style = mProgressBarCss;

exports.m_progress_bar = MProgressBar;
