import { r as registerInstance, c as createEvent, h } from './index-c7f2daf2.js';
import './store-d1bbe9e1.js';
import { P as PREFIX_BS } from './component-config-025f7932.js';

const MInputSelect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.mChange = createEvent(this, "mChange", 7);
    this.mBlur = createEvent(this, "mBlur", 7);
    this.mIconStartClick = createEvent(this, "mIconStartClick", 7);
    this.mIconEndClick = createEvent(this, "mIconEndClick", 7);
    this.changeHandler = (event) => {
      const { value } = event.target;
      this.mChange.emit(this.options.find((option) => this.valueExtractor(option).toString() === value));
    };
    this.blurHandler = (event) => {
      this.mBlur.emit(event);
    };
    this.iconStartClickHandler = (event) => {
      this.mIconStartClick.emit(event);
    };
    this.iconEndClickHandler = (event) => {
      this.mIconEndClick.emit(event);
    };
    this.mId = undefined;
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
    return (h("div", { class: "m-input" }, (this.label) && (h("label", { htmlFor: this.mId }, this.label, this.labelIcon && (h("m-icon", { class: "m-input-icon", icon: this.labelIcon, size: `var(--${PREFIX_BS}m-input-label-font-size)`, familyClass: this.labelIconFamilyClass, familyPrefix: this.labelIconFamilyPrefix })))), h("div", { class: "m-input-control" }, h("div", { class: {
        'input-group': true,
        disabled: this.isDisabled || this.isLoading,
      } }, this.iconStart && (h("button", { type: "button", class: "input-group-text", id: `${this.mId}Start`, onClick: this.iconStartClickHandler, disabled: this.isDisabled || this.isLoading }, this.iconStart && (h("m-icon", { class: "m-input-icon", icon: this.iconStart, familyClass: this.iconStartFamilyClass, familyPrefix: this.iconStartFamilyPrefix })))), h("select", { id: this.mId, name: this.name, class: { 'form-select': true }, "aria-label": this.label, disabled: this.isDisabled || this.isLoading, "aria-describedby": `${this.mId}Add ${this.mId}Hint`, onChange: this.changeHandler, onBlur: this.blurHandler }, this.options.map((option) => (h("option", { value: this.valueExtractor(option), selected: this.selectedOption
        && this.valueExtractor(option) === this.valueExtractor(this.selectedOption) }, this.labelExtractor(option))))), (this.iconEnd && !this.isLoading) && (h("button", { type: "button", class: "input-group-text", id: `${this.mId}End`, onClick: this.iconEndClickHandler, disabled: this.isDisabled || this.isLoading }, this.iconEnd && (h("m-icon", { class: "m-input-icon", icon: this.iconEnd, familyClass: this.iconEndFamilyClass, familyPrefix: this.iconEndFamilyPrefix })))), this.isLoading && (h("div", { class: "input-group-text form-control-icon loading" }, h("span", { class: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true" }, h("span", { class: "visually-hidden" }, "Loading..."))))), this.hint && (h("div", { class: "form-text", id: `${this.mId}Hint` }, this.hint)))));
  }
};

export { MInputSelect as m_input_select };

//# sourceMappingURL=m-input-select.entry.js.map