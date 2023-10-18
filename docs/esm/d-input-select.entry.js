import { r as registerInstance, c as createEvent, h } from './index-a19c3827.js';
import './store-fc6c92fd.js';
import { P as PREFIX_BS } from './component-config-025f7932.js';

const DInputSelect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.eventChange = createEvent(this, "eventChange", 7);
    this.eventBlur = createEvent(this, "eventBlur", 7);
    this.eventIconStartClick = createEvent(this, "eventIconStartClick", 7);
    this.eventIconEndClick = createEvent(this, "eventIconEndClick", 7);
    this.changeHandler = (event) => {
      const { value } = event.target;
      this.eventChange.emit(this.options.find((option) => this.valueExtractor(option).toString() === value));
    };
    this.blurHandler = (event) => {
      this.eventBlur.emit(event);
    };
    this.iconStartClickHandler = (event) => {
      this.eventIconStartClick.emit(event);
    };
    this.iconEndClickHandler = (event) => {
      this.eventIconEndClick.emit(event);
    };
    this.innerId = undefined;
    this.name = undefined;
    this.label = '';
    this.options = [];
    this.labelIcon = undefined;
    this.labelIconFamilyClass = undefined;
    this.labelIconFamilyPrefix = undefined;
    this.isDisabled = false;
    this.isLoading = false;
    this.iconFamilyClass = undefined;
    this.iconFamilyPrefix = undefined;
    this.iconStart = undefined;
    this.iconStartFamilyClass = undefined;
    this.iconStartFamilyPrefix = undefined;
    this.iconEnd = undefined;
    this.iconEndFamilyClass = undefined;
    this.iconEndFamilyPrefix = undefined;
    this.hint = undefined;
    this.selectedOption = undefined;
    this.valueExtractor = (item) => item === null || item === void 0 ? void 0 : item.value;
    this.labelExtractor = (item) => item === null || item === void 0 ? void 0 : item.label;
  }
  render() {
    return (h("div", { class: "d-input" }, (this.label) && (h("label", { htmlFor: this.innerId }, this.label, this.labelIcon && (h("d-icon", { class: "mdinput-icon", icon: this.labelIcon, size: `var(--${PREFIX_BS}input-label-font-size)`, familyClass: this.labelIconFamilyClass, familyPrefix: this.labelIconFamilyPrefix })))), h("div", { class: "d-input-control" }, h("div", { class: {
        'input-group': true,
        disabled: this.isDisabled || this.isLoading,
      } }, this.iconStart && (h("button", { type: "button", class: "input-group-text", id: `${this.innerId}Start`, onClick: this.iconStartClickHandler, disabled: this.isDisabled || this.isLoading }, this.iconStart && (h("d-icon", { class: "d-input-icon", icon: this.iconStart, familyClass: this.iconStartFamilyClass, familyPrefix: this.iconStartFamilyPrefix })))), h("select", { id: this.innerId, name: this.name, class: { 'form-select': true }, "aria-label": this.label, disabled: this.isDisabled || this.isLoading, "aria-describedby": `${this.innerId}Add ${this.innerId}Hint`, onChange: this.changeHandler, onBlur: this.blurHandler }, this.options.map((option) => (h("option", { value: this.valueExtractor(option), selected: this.selectedOption
        && this.valueExtractor(option) === this.valueExtractor(this.selectedOption) }, this.labelExtractor(option))))), (this.iconEnd && !this.isLoading) && (h("button", { type: "button", class: "input-group-text", id: `${this.innerId}End`, onClick: this.iconEndClickHandler, disabled: this.isDisabled || this.isLoading }, this.iconEnd && (h("d-icon", { class: "d-input-icon", icon: this.iconEnd, familyClass: this.iconEndFamilyClass, familyPrefix: this.iconEndFamilyPrefix })))), this.isLoading && (h("div", { class: "input-group-text form-control-icon loading" }, h("span", { class: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true" }, h("span", { class: "visually-hidden" }, "Loading..."))))), this.hint && (h("div", { class: "form-text", id: `${this.innerId}Hint` }, this.hint)))));
  }
};

export { DInputSelect as d_input_select };

//# sourceMappingURL=d-input-select.entry.js.map