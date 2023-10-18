import { r as registerInstance, c as createEvent, h } from './index-a19c3827.js';
import './store-fc6c92fd.js';
import { P as PREFIX_BS } from './component-config-025f7932.js';

const DQuickActionButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.eventClick = createEvent(this, "eventClick", 7);
    this.eventClickSecondary = createEvent(this, "eventClickSecondary", 7);
    this.globalClickHandler = () => {
      if (this.actionLinkText) {
        return;
      }
      this.eventClick.emit();
    };
    this.actionLinkClickHandler = (event) => {
      event.stopPropagation();
      if (!this.actionLinkText) {
        return;
      }
      this.eventClick.emit();
    };
    this.secondActionLinkClickHandler = (event) => {
      event.stopPropagation();
      this.eventClickSecondary.emit();
    };
    this.line1 = undefined;
    this.line2 = undefined;
    this.actionLinkText = undefined;
    this.actionLinkTheme = 'secondary';
    this.actionIcon = undefined;
    this.secondaryActionIcon = undefined;
    this.actionIconFamilyClass = undefined;
    this.actionIconFamilyPrefix = undefined;
    this.representativeImage = undefined;
    this.representativeIcon = undefined;
    this.representativeIconTheme = 'secondary';
    this.representativeIconHasCircle = false;
    this.representativeIconFamilyClass = undefined;
    this.representativeIconFamilyPrefix = undefined;
  }
  getTag() {
    return this.actionLinkText ? 'div' : 'button';
  }
  render() {
    const Tag = this.getTag();
    return (h(Tag, Object.assign({ class: "d-quick-action-button" }, !this.actionLinkText && { onClick: this.globalClickHandler }), this.representativeIcon && (h("d-icon", { class: "d-quick-action-button-representative-icon", size: (this.representativeIconHasCircle
        ? `var(--${PREFIX_BS}quick-action-button-representative-icon-size)`
        : `var(--${PREFIX_BS}quick-action-button-representative-image-size)`), icon: this.representativeIcon, hasCircle: this.representativeIconHasCircle, theme: this.representativeIconTheme, familyClass: this.representativeIconFamilyClass, familyPrefix: this.representativeIconFamilyPrefix })), this.representativeImage && (h("img", { class: "d-quick-action-button-representative-image", src: this.representativeImage, alt: "" })), h("div", { class: "d-quick-action-button-content" }, h("div", { class: "d-quick-action-button-text" }, h("span", { class: "d-quick-action-button-line1" }, this.line1), h("small", { class: "d-quick-action-button-line2" }, this.line2))), this.secondaryActionIcon && (h("d-button", { class: "d-quick-action-button-secondary-action-link", type: "button", variant: "link", iconStart: this.secondaryActionIcon, iconStartFamilyClass: this.actionIconFamilyClass, iconStartFamilyPrefix: this.actionIconFamilyPrefix, theme: this.actionLinkTheme, onEventClick: this.secondActionLinkClickHandler })), (this.actionLinkText && !this.actionIcon) && (h("d-button", { class: "d-quick-action-button-action-link", type: "button", variant: "link", theme: this.actionLinkTheme, text: this.actionLinkText, onEventClick: this.actionLinkClickHandler })), (this.actionIcon && !this.actionLinkText) && (h("d-icon", { class: "d-quick-action-button-action-icon", icon: this.actionIcon, size: `var(--${PREFIX_BS}quick-action-button-action-icon-size)`, familyClass: this.actionIconFamilyClass, familyPrefix: this.actionIconFamilyPrefix }))));
  }
};

export { DQuickActionButton as d_quick_action_button };

//# sourceMappingURL=d-quick-action-button.entry.js.map