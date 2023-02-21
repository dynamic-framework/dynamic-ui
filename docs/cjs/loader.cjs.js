'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-aa298dc0.js');
const appGlobals = require('./app-globals-283d7797.js');
require('./initialize-ae7ede02.js');

/*
 Stencil Client Patch Esm v2.19.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  appGlobals.globalScripts();
  return index.bootstrapLazy(JSON.parse("[[\"m-app_5.cjs\",[[0,\"m-currency\",{\"mId\":[1,\"m-id\"],\"label\":[1],\"labelIcon\":[1,\"label-icon\"],\"labelIconFamilyClass\":[1,\"label-icon-family-class\"],\"labelIconFamilyPrefix\":[1,\"label-icon-family-prefix\"],\"iconStart\":[1,\"icon-start\"],\"iconStartFamilyClass\":[1,\"icon-start-family-class\"],\"iconStartFamilyPrefix\":[1,\"icon-start-family-prefix\"],\"iconMiddle\":[1,\"icon-middle\"],\"iconMiddleFamilyClass\":[1,\"icon-middle-family-class\"],\"iconMiddleFamilyPrefix\":[1,\"icon-middle-family-prefix\"],\"iconEnd\":[1,\"icon-end\"],\"iconEndFamilyClass\":[1,\"icon-end-family-class\"],\"iconEndFamilyPrefix\":[1,\"icon-end-family-prefix\"],\"selectOptions\":[16],\"valueExtractor\":[16],\"labelExtractor\":[16],\"placeholder\":[1],\"value\":[2],\"minValue\":[2,\"min-value\"],\"maxValue\":[2,\"max-value\"],\"hint\":[1],\"hintIconStart\":[1,\"hint-icon-start\"],\"hintIconStartFamilyClass\":[1,\"hint-icon-start-family-class\"],\"hintIconStartFamilyPrefix\":[1,\"hint-icon-start-family-prefix\"],\"hintIconEnd\":[1,\"hint-icon-end\"],\"hintIconEndFamilyClass\":[1,\"hint-icon-end-family-class\"],\"hintIconEndFamilyPrefix\":[1,\"hint-icon-end-family-prefix\"],\"theme\":[1],\"variant\":[1],\"currencyOptions\":[16],\"layoutDirection\":[1,\"layout-direction\"],\"isDisabled\":[4,\"is-disabled\"],\"isLoading\":[4,\"is-loading\"],\"internalTheme\":[32],\"internalValue\":[32]}],[0,\"m-button\",{\"theme\":[1],\"variant\":[1],\"state\":[1],\"text\":[1],\"iconStart\":[1,\"icon-start\"],\"iconStartFamilyClass\":[1,\"icon-start-family-class\"],\"iconStartFamilyPrefix\":[1,\"icon-start-family-prefix\"],\"iconEnd\":[1,\"icon-end\"],\"iconEndFamilyClass\":[1,\"icon-end-family-class\"],\"iconEndFamilyPrefix\":[1,\"icon-end-family-prefix\"],\"value\":[1],\"type\":[1],\"isPill\":[4,\"is-pill\"],\"isLoading\":[4,\"is-loading\"]}],[4,\"m-app\",{\"iconSettings\":[16]}],[0,\"m-hint\",{\"iconStart\":[1,\"icon-start\"],\"iconStartFamilyClass\":[1,\"icon-start-family-class\"],\"iconStartFamilyPrefix\":[1,\"icon-start-family-prefix\"],\"iconEnd\":[1,\"icon-end\"],\"iconEndFamilyClass\":[1,\"icon-end-family-class\"],\"iconEndFamilyPrefix\":[1,\"icon-end-family-prefix\"],\"text\":[1],\"theme\":[1],\"iconSize\":[1,\"icon-size\"]}],[0,\"m-icon\",{\"icon\":[1],\"theme\":[1],\"size\":[1],\"isLoading\":[4,\"is-loading\"],\"duration\":[2],\"color\":[1],\"backgroundColor\":[1,\"background-color\"],\"familyClass\":[1,\"family-class\"],\"familyPrefix\":[1,\"family-prefix\"]}]]],[\"m-counter.cjs\",[[0,\"m-counter\",{\"mId\":[1,\"m-id\"],\"label\":[1],\"labelIcon\":[1,\"label-icon\"],\"labelIconFamilyClass\":[1,\"label-icon-family-class\"],\"labelIconFamilyPrefix\":[1,\"label-icon-family-prefix\"],\"hint\":[1],\"hintIconStart\":[1,\"hint-icon-start\"],\"hintIconStartFamilyClass\":[1,\"hint-icon-start-family-class\"],\"hintIconStartFamilyPrefix\":[1,\"hint-icon-start-family-prefix\"],\"hintIconEnd\":[1,\"hint-icon-end\"],\"hintIconEndFamilyClass\":[1,\"hint-icon-end-family-class\"],\"hintIconEndFamilyPrefix\":[1,\"hint-icon-end-family-prefix\"],\"theme\":[1],\"minValue\":[2,\"min-value\"],\"maxValue\":[2,\"max-value\"],\"value\":[2],\"variant\":[1],\"layoutDirection\":[1,\"layout-direction\"],\"isDisabled\":[4,\"is-disabled\"],\"isLoading\":[4,\"is-loading\"],\"state\":[32],\"internalValue\":[32]}]]],[\"m-coupon.cjs\",[[4,\"m-coupon\",{\"mId\":[1,\"m-id\"],\"label\":[1],\"labelIcon\":[1,\"label-icon\"],\"labelIconFamilyClass\":[1,\"label-icon-family-class\"],\"labelIconFamilyPrefix\":[1,\"label-icon-family-prefix\"],\"iconStart\":[1,\"icon-start\"],\"iconStartFamilyClass\":[1,\"icon-start-family-class\"],\"iconStartFamilyPrefix\":[1,\"icon-start-family-prefix\"],\"iconMiddle\":[1,\"icon-middle\"],\"iconMiddleFamilyClass\":[1,\"icon-middle-family-class\"],\"iconMiddleFamilyPrefix\":[1,\"icon-middle-family-prefix\"],\"iconEnd\":[1,\"icon-end\"],\"iconEndFamilyClass\":[1,\"icon-end-family-class\"],\"iconEndFamilyPrefix\":[1,\"icon-end-family-prefix\"],\"hasSelect\":[4,\"has-select\"],\"isLoading\":[4,\"is-loading\"],\"placeholder\":[1],\"type\":[1],\"buttonText\":[1,\"button-text\"],\"hint\":[1],\"hintIconStart\":[1,\"hint-icon-start\"],\"hintIconStartFamilyClass\":[1,\"hint-icon-start-family-class\"],\"hintIconStartFamilyPrefix\":[1,\"hint-icon-start-family-prefix\"],\"hintIconEnd\":[1,\"hint-icon-end\"],\"hintIconEndFamilyClass\":[1,\"hint-icon-end-family-class\"],\"hintIconEndFamilyPrefix\":[1,\"hint-icon-end-family-prefix\"],\"theme\":[1],\"layoutDirection\":[1,\"layout-direction\"]}]]],[\"m-alert.cjs\",[[4,\"m-alert\",{\"theme\":[1],\"showIcon\":[4,\"show-icon\"],\"showClose\":[4,\"show-close\"]}]]],[\"m-input.cjs\",[[0,\"m-input\",{\"mId\":[1,\"m-id\"],\"name\":[1],\"label\":[1],\"labelIcon\":[1,\"label-icon\"],\"labelIconFamilyClass\":[1,\"label-icon-family-class\"],\"labelIconFamilyPrefix\":[1,\"label-icon-family-prefix\"],\"placeholder\":[1],\"type\":[1],\"value\":[8],\"isDisabled\":[4,\"is-disabled\"],\"isLoading\":[4,\"is-loading\"],\"iconStart\":[1,\"icon-start\"],\"iconStartFamilyClass\":[1,\"icon-start-family-class\"],\"iconStartFamilyPrefix\":[1,\"icon-start-family-prefix\"],\"iconEnd\":[1,\"icon-end\"],\"iconEndFamilyClass\":[1,\"icon-end-family-class\"],\"iconEndFamilyPrefix\":[1,\"icon-end-family-prefix\"],\"hint\":[1],\"hintIconStart\":[1,\"hint-icon-start\"],\"hintIconStartFamilyClass\":[1,\"hint-icon-start-family-class\"],\"hintIconStartFamilyPrefix\":[1,\"hint-icon-start-family-prefix\"],\"hintIconEnd\":[1,\"hint-icon-end\"],\"hintIconEndFamilyClass\":[1,\"hint-icon-end-family-class\"],\"hintIconEndFamilyPrefix\":[1,\"hint-icon-end-family-prefix\"],\"layoutDirection\":[1,\"layout-direction\"],\"isInvalid\":[4,\"is-invalid\"]}]]],[\"m-list-item.cjs\",[[0,\"m-list-item\",{\"theme\":[1],\"text\":[1],\"subtext\":[1],\"value\":[8],\"alternativeValue\":[8,\"alternative-value\"],\"isPill\":[4,\"is-pill\"],\"icon\":[1],\"iconFamilyClass\":[1,\"icon-family-class\"],\"iconFamilyPrefix\":[1,\"icon-family-prefix\"],\"image\":[1],\"variant\":[1],\"selectableProps\":[16],\"themeValue\":[1,\"theme-value\"],\"customActionEndIcon\":[1,\"custom-action-end-icon\"],\"customActionClass\":[1,\"custom-action-class\"],\"customActionEndIconFamilyClass\":[1,\"custom-action-end-icon-family-class\"],\"customActionEndIconFamilyPrefix\":[1,\"custom-action-end-icon-family-prefix\"],\"isLoading\":[4,\"is-loading\"],\"navegableProps\":[16]}]]],[\"m-quick-action.cjs\",[[0,\"m-quick-action\",{\"text\":[1],\"subtext\":[1],\"extraInfo\":[1,\"extra-info\"],\"icon\":[1],\"iconFamilyClass\":[1,\"icon-family-class\"],\"iconFamilyPrefix\":[1,\"icon-family-prefix\"],\"image\":[1],\"variant\":[1],\"actionWord\":[1,\"action-word\"],\"actionIcon\":[1,\"action-icon\"],\"state\":[1]}]]],[\"m-search.cjs\",[[0,\"m-search\",{\"mId\":[1,\"m-id\"],\"label\":[1],\"labelIcon\":[1,\"label-icon\"],\"labelIconFamilyClass\":[1,\"label-icon-family-class\"],\"labelIconFamilyPrefix\":[1,\"label-icon-family-prefix\"],\"placeholder\":[1],\"type\":[1],\"value\":[1],\"isDisabled\":[4,\"is-disabled\"],\"isLoading\":[4,\"is-loading\"],\"isReadOnly\":[4,\"is-read-only\"],\"iconEnd\":[1,\"icon-end\"],\"iconEndFamilyClass\":[1,\"icon-end-family-class\"],\"iconEndFamilyPrefix\":[1,\"icon-end-family-prefix\"],\"hint\":[1],\"hintIconStart\":[1,\"hint-icon-start\"],\"hintIconStartFamilyClass\":[1,\"hint-icon-start-family-class\"],\"hintIconStartFamilyPrefix\":[1,\"hint-icon-start-family-prefix\"],\"hintIconEnd\":[1,\"hint-icon-end\"],\"hintIconEndFamilyClass\":[1,\"hint-icon-end-family-class\"],\"hintIconEndFamilyPrefix\":[1,\"hint-icon-end-family-prefix\"],\"theme\":[1],\"variant\":[1],\"layoutDirection\":[1,\"layout-direction\"]}]]],[\"m-select.cjs\",[[0,\"m-select\",{\"mId\":[1,\"m-id\"],\"name\":[1],\"variant\":[1],\"options\":[16],\"theme\":[1],\"label\":[1],\"labelIcon\":[1,\"label-icon\"],\"labelIconFamilyClass\":[1,\"label-icon-family-class\"],\"labelIconFamilyPrefix\":[1,\"label-icon-family-prefix\"],\"iconStart\":[1,\"icon-start\"],\"iconStartFamilyClass\":[1,\"icon-start-family-class\"],\"iconStartFamilyPrefix\":[1,\"icon-start-family-prefix\"],\"iconMiddle\":[1,\"icon-middle\"],\"iconMiddleFamilyClass\":[1,\"icon-middle-family-class\"],\"iconMiddleFamilyPrefix\":[1,\"icon-middle-family-prefix\"],\"iconEnd\":[1,\"icon-end\"],\"iconEndFamilyClass\":[1,\"icon-end-family-class\"],\"iconEndFamilyPrefix\":[1,\"icon-end-family-prefix\"],\"hintIconStart\":[1,\"hint-icon-start\"],\"hintIconStartFamilyClass\":[1,\"hint-icon-start-family-class\"],\"hintIconStartFamilyPrefix\":[1,\"hint-icon-start-family-prefix\"],\"hintIconEnd\":[1,\"hint-icon-end\"],\"hintIconEndFamilyClass\":[1,\"hint-icon-end-family-class\"],\"hintIconEndFamilyPrefix\":[1,\"hint-icon-end-family-prefix\"],\"hint\":[1],\"selectedOption\":[16],\"layoutDirection\":[1,\"layout-direction\"],\"isDisabled\":[4,\"is-disabled\"],\"isLoading\":[4,\"is-loading\"],\"valueExtractor\":[16],\"labelExtractor\":[16]}]]],[\"m-shortcut-toggle.cjs\",[[0,\"m-shortcut-toggle\",{\"mId\":[1,\"m-id\"],\"name\":[1],\"value\":[1],\"label\":[1],\"text\":[1],\"subtext\":[1],\"icon\":[1],\"iconFamilyClass\":[1,\"icon-family-class\"],\"iconFamilyPrefix\":[1,\"icon-family-prefix\"],\"isChecked\":[4,\"is-checked\"],\"state\":[1],\"white\":[4]}]]],[\"m-badge.cjs\",[[0,\"m-badge\",{\"theme\":[1],\"text\":[1]}]]],[\"m-form-check.cjs\",[[0,\"m-form-check\",{\"type\":[1],\"name\":[1],\"label\":[1],\"isChecked\":[4,\"is-checked\"],\"mId\":[1,\"m-id\"],\"isDisabled\":[4,\"is-disabled\"],\"state\":[1],\"isIndeterminate\":[4,\"is-indeterminate\"],\"value\":[1],\"isButton\":[4,\"is-button\"]}]]],[\"m-form-switch.cjs\",[[0,\"m-form-switch\",{\"label\":[1],\"labelOn\":[1,\"label-on\"],\"labelOff\":[1,\"label-off\"],\"mId\":[1,\"m-id\"],\"isChecked\":[4,\"is-checked\"],\"isDisabled\":[4,\"is-disabled\"],\"internalIsChecked\":[32]}]]],[\"m-modal.cjs\",[[4,\"m-modal\",{\"name\":[1],\"closeText\":[1,\"close-text\"],\"isStatic\":[4,\"is-static\"],\"isScrollable\":[4,\"is-scrollable\"],\"isCentered\":[4,\"is-centered\"],\"isFullScreen\":[4,\"is-full-screen\"],\"fullScreenFrom\":[1,\"full-screen-from\"],\"modalSize\":[1,\"modal-size\"],\"imageHeader\":[1,\"image-header\"],\"showCloseButton\":[4,\"show-close-button\"]}]]],[\"m-offcanvas.cjs\",[[4,\"m-offcanvas\",{\"name\":[1],\"closeText\":[1,\"close-text\"],\"isStatic\":[4,\"is-static\"],\"isScrollable\":[4,\"is-scrollable\"],\"showCloseButton\":[4,\"show-close-button\"],\"openFrom\":[1,\"open-from\"]}]]],[\"m-progress-bar.cjs\",[[0,\"m-progress-bar\",{\"currentValue\":[2,\"current-value\"],\"minValue\":[2,\"min-value\"],\"maxValue\":[2,\"max-value\"],\"classNameContainer\":[1,\"class-name-container\"],\"classNameProgress\":[1,\"class-name-progress\"],\"classNameBar\":[1,\"class-name-bar\"],\"enableStripedAnimation\":[4,\"enable-striped-animation\"],\"enableDarkMode\":[4,\"enable-dark-mode\"]}]]],[\"m-segment-control.cjs\",[[4,\"m-segment-control\",{\"description\":[1]}]]],[\"m-segment-control-item.cjs\",[[0,\"m-segment-control-item\",{\"mId\":[1,\"m-id\"],\"name\":[1],\"label\":[1],\"value\":[1],\"isDisabled\":[4,\"is-disabled\"],\"isChecked\":[4,\"is-checked\"],\"state\":[1]}]]]]"), options);
  });
};

exports.defineCustomElements = defineCustomElements;
