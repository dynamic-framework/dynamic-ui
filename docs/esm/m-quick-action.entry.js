import { r as registerInstance, c as createEvent, h, H as Host } from './index-39190b44.js';

const mQuickActionCss = "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap\"); .quick-action-host{--bs-quick-action-border-radius:var(--bs-border-radius-sm);--bs-quick-action-host-border-width:3px;--bs-quick-action-border-color:transparent;--bs-quick-action-border:var(--bs-quick-action-host-border-width) solid var(--bs-quick-action-border-color);position:relative;display:inline-block;padding:var(--bs-quick-action-host-border-width);border:var(--bs-quick-action-border);border-radius:var(--bs-quick-action-border-radius)}.quick-action-host:focus-within,.quick-action-host.focus{--bs-quick-action-border-color:var(--bs-accessibility)}.quick-action-host.disabled{cursor:not-allowed;opacity:0.3}.quick-action-host::after{position:absolute;inset:var(--bs-quick-action-host-border-width);z-index:-1;content:\"\";background:var(--bs-white);border-radius:var(--bs-quick-action-border-radius)}.quick-action{display:flex;gap:0.5rem;align-items:center;width:100%;padding:calc(1rem - 1px);cursor:pointer;background-color:var(--bs-white);background-position:center;border:1px solid var(--bs-light);border-radius:var(--bs-border-radius-sm);transition:background 800ms}.quick-action.quick-action-state-focus,.quick-action:focus{outline:0}.quick-action.quick-action-state-hover,.quick-action:hover{background:var(--bs-white) radial-gradient(circle, transparent 1%, var(--bs-white) 1%) center/15000%;box-shadow:0 8px 12px rgba(var(--bs-dark-hover-rgb), 0.1)}.quick-action.quick-action-state-disabled,.quick-action:disabled{pointer-events:none;user-select:none}.quick-action:active{background-color:rgba(var(--bs-tertiary-rgb), 0.2);background-size:100%;transition:background 0s}.quick-action-picture{color:var(--bs-white);border-radius:var(--bs-border-radius-sm)}.quick-action-picture .quick-action-icon,.quick-action-picture .quick-action-img{display:flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:inherit}.quick-action-picture .quick-action-img{overflow:hidden}.quick-action-picture .quick-action-icon{background-color:var(--bs-tertiary)}.quick-action-content{display:flex;width:100%}.quick-action-text{display:flex;flex-grow:1}.quick-action-title{font-weight:700;line-height:1.5}.quick-action-link{color:var(--bs-tertiary);text-align:start}.quick-action-variant-extended .quick-action-content{gap:0.5rem}.quick-action-variant-extended .quick-action-text{flex-direction:column;text-align:start}.quick-action-variant-extended .quick-action-link{align-self:center}.quick-action-variant-compact .quick-action-content{flex-direction:column}.quick-action-variant-compact .quick-action-text{gap:0.5rem;align-items:center;text-align:start}";

const MQuickAction = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.mClick = createEvent(this, "mClick", 7);
    this.clickHandler = () => {
      this.mClick.emit();
    };
    this.text = undefined;
    this.subtext = undefined;
    this.extraInfo = undefined;
    this.icon = 'heart-fill';
    this.iconFamilyClass = undefined;
    this.iconFamilyPrefix = undefined;
    this.image = undefined;
    this.variant = 'extended';
    this.actionWord = undefined;
    this.actionIcon = 'chevron-right';
    this.state = undefined;
  }
  generateHostClasses() {
    return {
      'quick-action-host': true,
      focus: this.state === 'focus',
      disabled: this.state === 'disabled',
    };
  }
  generateButtonClasses() {
    return {
      'quick-action': true,
      [`quick-action-variant-${this.variant}`]: !!this.variant,
      [`quick-action-state-${this.state}`]: !!this.state,
    };
  }
  render() {
    return (h(Host, { class: this.generateHostClasses() }, h("button", { class: this.generateButtonClasses(), onClick: this.clickHandler, disabled: this.state === 'disabled' }, h("div", { class: "quick-action-picture" }, (this.icon && !this.image) && (h("m-icon", { class: "quick-action-icon", icon: this.icon })), this.image && (h("img", { class: "quick-action-img", src: this.image, alt: "Quick action" }))), h("div", { class: "quick-action-content" }, h("div", { class: "quick-action-text" }, h("span", { class: "quick-action-title" }, this.text), this.subtext && (h("small", { class: "quick-action-subtitle" }, this.subtext, this.extraInfo && (` - ${this.extraInfo}`)))), (this.actionIcon && !this.actionWord) && (h("m-icon", { size: "1.125rem", class: "quick-action-link", icon: this.actionIcon, familyClass: this.iconFamilyClass, familyPrefix: this.iconFamilyPrefix })), this.actionWord && (h("small", { class: "quick-action-link" }, this.actionWord))))));
  }
};
MQuickAction.style = mQuickActionCss;

export { MQuickAction as m_quick_action };
