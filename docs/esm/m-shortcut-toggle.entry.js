import { r as registerInstance, c as createEvent, h } from './index-39190b44.js';

const mShortcutToggleCss = "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap\"); .shortcut{width:100%;padding:3px;border:3px solid transparent;border-radius:0.7rem}.shortcut input[type=radio]{position:absolute;opacity:0}.shortcut input[type=radio]~.shortcut-toggle{padding:12px;background-color:rgba(var(--bs-tertiary-rgb), 0.07);border:none;border-radius:0.5rem}.shortcut input[type=radio]~.shortcut-toggle-white{padding:calc(12px - 1px);background-color:var(--bs-white);border:1px solid var(--bs-light);border-radius:0.5rem}.shortcut .shortcut-toggle,.shortcut .shortcut-toggle-white{display:flex;flex-direction:column;align-items:center;justify-content:center;transition:box-shadow 0.3s ease-in-out}.shortcut .shortcut-toggle .shortcut-label,.shortcut .shortcut-toggle-white .shortcut-label{font-size:0.625rem;line-height:0.756rem;color:var(--bs-tertiary)}.shortcut .shortcut-toggle .shortcut-text,.shortcut .shortcut-toggle-white .shortcut-text{font-weight:600;line-height:1.375rem;color:var(--bs-gray)}.shortcut .shortcut-toggle .shortcut-subtext,.shortcut .shortcut-toggle-white .shortcut-subtext{font-weight:300;line-height:1.375rem;color:var(--bs-gray)}.shortcut .shortcut-toggle .shortcut-icon,.shortcut .shortcut-toggle-white .shortcut-icon{color:var(--bs-tertiary)}.shortcut input[type=radio]:checked~.shortcut-toggle,.shortcut input[type=radio]:checked~.shortcut-toggle-white{background-color:var(--bs-tertiary)}.shortcut input[type=radio]:checked~.shortcut-toggle .shortcut-label,.shortcut input[type=radio]:checked~.shortcut-toggle-white .shortcut-label{color:var(--bs-gray-light)}.shortcut input[type=radio]:checked~.shortcut-toggle .shortcut-text,.shortcut input[type=radio]:checked~.shortcut-toggle-white .shortcut-text{color:var(--bs-white)}.shortcut input[type=radio]:checked~.shortcut-toggle .shortcut-icon,.shortcut input[type=radio]:checked~.shortcut-toggle-white .shortcut-icon{color:var(--bs-white)}.shortcut:focus,.shortcut:focus-within,.shortcut.focus{border-color:var(--bs-accessibility)}.shortcut:hover .shortcut-toggle,.shortcut:hover .shortcut-toggle-white,.shortcut.hover .shortcut-toggle,.shortcut.hover .shortcut-toggle-white{box-shadow:0 0 0 3px rgba(var(--bs-tertiary-rgb), 0.03)}.shortcut input[type=radio]:active~.shortcut-toggle,.shortcut input[type=radio]:active~.shortcut-toggle-white,.shortcut.active input[type=radio]~.shortcut-toggle,.shortcut.active input[type=radio]~.shortcut-toggle-white{box-shadow:inset 0 0 0 8px rgba(var(--bs-tertiary-rgb), 0.07)}.shortcut.disabled{pointer-events:none;cursor:not-allowed;opacity:0.3}";

const MShortcutToggle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.mChange = createEvent(this, "mChange", 7);
    this.changeHandler = (event) => {
      this.mChange.emit(event.target.value);
    };
    this.mId = undefined;
    this.name = undefined;
    this.value = undefined;
    this.label = undefined;
    this.text = undefined;
    this.subtext = '';
    this.icon = undefined;
    this.iconFamilyClass = undefined;
    this.iconFamilyPrefix = undefined;
    this.isChecked = undefined;
    this.state = undefined;
    this.white = false;
  }
  render() {
    return (h("label", { class: {
        shortcut: true,
        [`${this.state}`]: !!this.state,
      }, htmlFor: this.mId }, h("input", { id: this.mId, type: "radio", name: this.name, value: this.value, checked: this.isChecked, onChange: this.changeHandler, disabled: this.state === 'disabled' }), ((this.text || this.label) && !this.icon) && (h("div", { class: this.white ? 'shortcut-toggle-white' : 'shortcut-toggle' }, this.label && (h("span", { class: "shortcut-label d-block" }, this.label)), this.text && (h("div", { class: "d-block small" }, h("span", { class: "shortcut-text" }, this.text, ' '), h("span", { class: "shortcut-subtext" }, this.subtext))))), this.icon && (h("div", { class: "shortcut-toggle" }, h("m-icon", { class: "shortcut-icon", icon: this.icon, familyClass: this.iconFamilyClass, familyPrefix: this.iconFamilyPrefix })))));
  }
};
MShortcutToggle.style = mShortcutToggleCss;

export { MShortcutToggle as m_shortcut_toggle };
