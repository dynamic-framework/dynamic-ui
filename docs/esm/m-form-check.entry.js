import { r as registerInstance, c as createEvent, h, H as Host } from './index-39190b44.js';

const mFormCheckCss = "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap\"); :host,.form-check-box{--bs-form-check-border-width-focus:0.125rem;--bs-form-check-border-color-focus:var(--bs-accessibility);--bs-checkbox-box-border-width:2px;--bs-checkbox-box-border-radius:0.25em;display:block;padding:var(--bs-checkbox-box-border-width)}:host:focus-within,:host.focus,.form-check-box:focus-within,.form-check-box.focus{border-radius:var(--bs-checkbox-box-border-radius);box-shadow:0 0 0 var(--bs-form-check-border-width-focus) var(--bs-form-check-border-color-focus)}:host .form-check-box-label,.form-check-box .form-check-box-label{width:20px;height:20px;font-size:13px;font-weight:700;line-height:20px;color:var(--bs-white);text-align:center;background-color:var(--bs-gray-light);border-radius:var(--bs-border-radius-pill)}:host .form-check-box-input,.form-check-box .form-check-box-input{position:absolute;opacity:0}:host .form-check-box-input:checked~.form-check-box-label,.form-check-box .form-check-box-input:checked~.form-check-box-label{background-color:var(--bs-tertiary)}.form-check{border-radius:0.25em}.form-check-input{--bs-form-check-input-border-color:var(--bs-gray-300);--bs-form-check-input-border-hover-width:1px;--bs-form-check-input-checked-bg:var(--bs-tertiary);--bs-form-check-input-checked-border:var(--bs-tertiary);transition:border 200ms, color 200ms, background-color 200ms}.form-check-input:hover:not([disabled]){--bs-form-check-input-border-hover-color:#61616d;border:var(--bs-form-check-input-border-hover-width) solid var(--bs-form-check-input-border-hover-color)}.form-check-input:hover:indeterminate{border:1px solid var(--bs-gray-600)}.form-check-input-primary{--bs-form-check-input-border-color:var(--bs-primary);--bs-form-check-input-border-hover-width:2px;--bs-form-check-input-checked-bg:var(--bs-primary)}.form-check-input-primary:hover:checked{background-color:var(--bs-primary-hover)}.form-check-input-primary:hover:not([disabled]){--bs-check-input-border-hover:var(--bs-primary-hover);border:1px solid var(--bs-check-input-border-hover)}.form-check-input-secondary{--bs-form-check-input-border-color:var(--bs-secondary);--bs-form-check-input-border-hover-width:2px;--bs-form-check-input-checked-bg:var(--bs-secondary)}.form-check-input-secondary:hover:checked{background-color:var(--bs-secondary-hover)}.form-check-input-secondary:hover:not([disabled]){--bs-check-input-border-hover:var(--bs-secondary-hover);border:1px solid var(--bs-check-input-border-hover)}.form-check-input-tertiary{--bs-form-check-input-border-color:var(--bs-tertiary);--bs-form-check-input-border-hover-width:2px;--bs-form-check-input-checked-bg:var(--bs-tertiary)}.form-check-input-tertiary:hover:checked{background-color:var(--bs-tertiary-hover)}.form-check-input-tertiary:hover:not([disabled]){--bs-check-input-border-hover:var(--bs-tertiary-hover);border:1px solid var(--bs-check-input-border-hover)}.form-check-input-success{--bs-form-check-input-border-color:var(--bs-success);--bs-form-check-input-border-hover-width:2px;--bs-form-check-input-checked-bg:var(--bs-success)}.form-check-input-success:hover:checked{background-color:var(--bs-success-hover)}.form-check-input-success:hover:not([disabled]){--bs-check-input-border-hover:var(--bs-success-hover);border:1px solid var(--bs-check-input-border-hover)}.form-check-input-warning{--bs-form-check-input-border-color:var(--bs-warning);--bs-form-check-input-border-hover-width:2px;--bs-form-check-input-checked-bg:var(--bs-warning)}.form-check-input-warning:hover:checked{background-color:var(--bs-warning-hover)}.form-check-input-warning:hover:not([disabled]){--bs-check-input-border-hover:var(--bs-warning-hover);border:1px solid var(--bs-check-input-border-hover)}.form-check-input-danger{--bs-form-check-input-border-color:var(--bs-danger);--bs-form-check-input-border-hover-width:2px;--bs-form-check-input-checked-bg:var(--bs-danger)}.form-check-input-danger:hover:checked{background-color:var(--bs-danger-hover)}.form-check-input-danger:hover:not([disabled]){--bs-check-input-border-hover:var(--bs-danger-hover);border:1px solid var(--bs-check-input-border-hover)}";

const MFormCheck = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.mChange = createEvent(this, "mChange", 7);
    this.changeHandler = (event) => {
      const { checked, value } = event.target;
      this.mChange.emit({
        isChecked: checked,
        value,
      });
    };
    this.type = undefined;
    this.name = undefined;
    this.label = undefined;
    this.isChecked = false;
    this.mId = undefined;
    this.isDisabled = false;
    this.state = undefined;
    this.isIndeterminate = undefined;
    this.value = undefined;
    this.isButton = false;
  }
  generateClasses() {
    return {
      'form-check-input': !this.isButton,
      [`form-check-input-${this.state}`]: !!this.state && !this.isButton,
      'form-check-box-input': this.isButton,
    };
  }
  render() {
    return (h(Host, { class: "form-check-box" }, this.label ? (h("div", { class: this.isButton ? '' : 'form-check' }, h("input", { onChange: (event) => this.changeHandler(event), class: this.generateClasses(), type: this.type, name: this.name, id: this.mId, value: this.value, checked: this.isChecked, disabled: this.isDisabled, indeterminate: this.isIndeterminate }), h("label", { class: this.isButton ? 'form-check-box-label' : 'form-check-label', htmlFor: this.mId }, this.label))) : (h("input", { onChange: (event) => this.changeHandler(event), class: this.generateClasses(), type: this.type, name: this.name, id: this.mId, value: this.value, checked: this.isChecked, disabled: this.isDisabled, indeterminate: this.isIndeterminate }))));
  }
};
MFormCheck.style = mFormCheckCss;

export { MFormCheck as m_form_check };
