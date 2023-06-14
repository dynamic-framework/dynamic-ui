'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7e8a8a10.js');
require('./store-ee5cb3bf.js');
const componentConfig = require('./component-config-a8f1d95a.js');

const MQuickActionButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.mClick = index.createEvent(this, "mClick", 7);
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
    this.line1 = undefined;
    this.line2 = undefined;
    this.actionLinkText = undefined;
    this.actionLinkTheme = 'secondary';
    this.actionIcon = 'chevron-right';
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
    return (index.h(Tag, Object.assign({ class: "m-quick-action-button" }, !this.actionLinkText && { onClick: this.globalClickHandler }), this.representativeIcon && (index.h("m-icon", { class: "m-quick-action-button-representative-icon", size: (this.representativeIconHasCircle
        ? `var(--${componentConfig.PREFIX_BS}m-quick-action-button-representative-icon-size)`
        : `var(--${componentConfig.PREFIX_BS}m-quick-action-button-representative-image-size)`), icon: this.representativeIcon, "has-circle": this.representativeIconHasCircle, theme: this.representativeIconTheme, "family-class": this.representativeIconFamilyClass, "family-prefix": this.representativeIconFamilyPrefix })), this.representativeImage && (index.h("img", { class: "m-quick-action-button-representative-image", src: this.representativeImage, alt: "" })), index.h("div", { class: "m-quick-action-button-content" }, index.h("div", { class: "m-quick-action-button-text" }, index.h("span", { class: "m-quick-action-button-line1" }, this.line1), index.h("small", { class: "m-quick-action-button-line2" }, this.line2))), this.actionLinkText ? (index.h("m-button", { class: "m-quick-action-button-action-link", type: "button", variant: "link", size: "sm", theme: this.actionLinkTheme, text: this.actionLinkText, "on-m-click": this.actionLinkClickHandler })) : (index.h("m-icon", { class: "m-quick-action-button-action-icon", icon: this.actionIcon, size: `var(--${componentConfig.PREFIX_BS}m-quick-action-button-action-icon-size)`, "family-class": this.actionIconFamilyClass, "family-prefix": this.actionIconFamilyPrefix }))));
  }
};

exports.m_quick_action_button = MQuickActionButton;

//# sourceMappingURL=m-quick-action-button.cjs.entry.js.map