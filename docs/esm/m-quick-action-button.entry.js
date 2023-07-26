import { r as registerInstance, c as createEvent, h } from './index-c7f2daf2.js';
import './store-d1bbe9e1.js';
import { P as PREFIX_BS } from './component-config-025f7932.js';

const MQuickActionButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.mClick = createEvent(this, "mClick", 7);
    this.mClickSecondary = createEvent(this, "mClickSecondary", 7);
    this.globalClickHandler = () => {
      if (this.actionLinkText) {
        return;
      }
      this.mClick.emit();
    };
    this.actionLinkClickHandler = (event) => {
      event.stopPropagation();
      if (!this.actionLinkText) {
        return;
      }
      this.mClick.emit();
    };
    this.secondActionLinkClickHandler = (event) => {
      event.stopPropagation();
      this.mClickSecondary.emit();
    };
    this.line1 = undefined;
    this.line2 = undefined;
    this.actionLinkText = undefined;
    this.actionLinkTheme = 'secondary';
    this.actionIcon = 'chevron-right';
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
    return (h(Tag, Object.assign({ class: "m-quick-action-button" }, !this.actionLinkText && { onClick: this.globalClickHandler }), this.representativeIcon && (h("m-icon", { class: "m-quick-action-button-representative-icon", size: (this.representativeIconHasCircle
        ? `var(--${PREFIX_BS}m-quick-action-button-representative-icon-size)`
        : `var(--${PREFIX_BS}m-quick-action-button-representative-image-size)`), icon: this.representativeIcon, hasCircle: this.representativeIconHasCircle, theme: this.representativeIconTheme, familyClass: this.representativeIconFamilyClass, familyPrefix: this.representativeIconFamilyPrefix })), this.representativeImage && (h("img", { class: "m-quick-action-button-representative-image", src: this.representativeImage, alt: "" })), h("div", { class: "m-quick-action-button-content" }, h("div", { class: "m-quick-action-button-text" }, h("span", { class: "m-quick-action-button-line1" }, this.line1), h("small", { class: "m-quick-action-button-line2" }, this.line2))), this.secondaryActionIcon && (h("m-button", { class: "m-quick-action-button-secondary-action-link", type: "button", variant: "link", iconStart: this.secondaryActionIcon, iconStartFamilyClass: this.actionIconFamilyClass, iconStartFamilyPrefix: this.actionIconFamilyPrefix, theme: this.actionLinkTheme, onMClick: this.secondActionLinkClickHandler })), this.actionLinkText ? (h("m-button", { class: "m-quick-action-button-action-link", type: "button", variant: "link", size: "sm", theme: this.actionLinkTheme, text: this.actionLinkText, onMClick: this.actionLinkClickHandler })) : (h("m-icon", { class: "m-quick-action-button-action-icon", icon: this.actionIcon, size: `var(--${PREFIX_BS}m-quick-action-button-action-icon-size)`, familyClass: this.actionIconFamilyClass, familyPrefix: this.actionIconFamilyPrefix }))));
  }
};

export { MQuickActionButton as m_quick_action_button };

//# sourceMappingURL=m-quick-action-button.entry.js.map