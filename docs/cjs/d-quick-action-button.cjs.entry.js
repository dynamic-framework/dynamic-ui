'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be9a6731.js');
require('./store-22751436.js');
const componentConfig = require('./component-config-a8f1d95a.js');

const DQuickActionButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.eventClick = index.createEvent(this, "eventClick", 7);
    this.eventClickSecondary = index.createEvent(this, "eventClickSecondary", 7);
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
    return (index.h(Tag, Object.assign({ class: "d-quick-action-button" }, !this.actionLinkText && { onClick: this.globalClickHandler }), this.representativeIcon && (index.h("d-icon", { class: "d-quick-action-button-representative-icon", size: (this.representativeIconHasCircle
        ? `var(--${componentConfig.PREFIX_BS}quick-action-button-representative-icon-size)`
        : `var(--${componentConfig.PREFIX_BS}quick-action-button-representative-image-size)`), icon: this.representativeIcon, hasCircle: this.representativeIconHasCircle, theme: this.representativeIconTheme, familyClass: this.representativeIconFamilyClass, familyPrefix: this.representativeIconFamilyPrefix })), this.representativeImage && (index.h("img", { class: "d-quick-action-button-representative-image", src: this.representativeImage, alt: "" })), index.h("div", { class: "d-quick-action-button-content" }, index.h("div", { class: "d-quick-action-button-text" }, index.h("span", { class: "d-quick-action-button-line1" }, this.line1), index.h("small", { class: "d-quick-action-button-line2" }, this.line2))), this.secondaryActionIcon && (index.h("d-button", { class: "d-quick-action-button-secondary-action-link", type: "button", variant: "link", iconStart: this.secondaryActionIcon, iconStartFamilyClass: this.actionIconFamilyClass, iconStartFamilyPrefix: this.actionIconFamilyPrefix, theme: this.actionLinkTheme, onEventClick: this.secondActionLinkClickHandler })), (this.actionLinkText && !this.actionIcon) && (index.h("d-button", { class: "d-quick-action-button-action-link", type: "button", variant: "link", theme: this.actionLinkTheme, text: this.actionLinkText, onEventClick: this.actionLinkClickHandler })), (this.actionIcon && !this.actionLinkText) && (index.h("d-icon", { class: "d-quick-action-button-action-icon", icon: this.actionIcon, size: `var(--${componentConfig.PREFIX_BS}quick-action-button-action-icon-size)`, familyClass: this.actionIconFamilyClass, familyPrefix: this.actionIconFamilyPrefix }))));
  }
};

exports.d_quick_action_button = DQuickActionButton;

//# sourceMappingURL=d-quick-action-button.cjs.entry.js.map