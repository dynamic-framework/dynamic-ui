'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be9a6731.js');
require('./store-22751436.js');
const componentConfig = require('./component-config-a8f1d95a.js');

const DModal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.eventClose = index.createEvent(this, "eventClose", 7);
    this.closeHandler = () => {
      this.eventClose.emit();
    };
    this.name = undefined;
    this.isStatic = undefined;
    this.isScrollable = undefined;
    this.isCentered = undefined;
    this.isFullScreen = undefined;
    this.fullScreenFrom = undefined;
    this.modalSize = undefined;
    this.showCloseButton = undefined;
    this.footerActionPlacement = 'fill';
  }
  componentWillLoad() {
    this.header = !!this.el.querySelector('[slot="header"]');
    this.body = !!this.el.querySelector('[slot="body"]');
    this.footer = !!this.el.querySelector('[slot="footer"]');
  }
  fullScreenClass() {
    if (this.isFullScreen) {
      if (this.fullScreenFrom) {
        return `modal-fullscreen-${this.fullScreenFrom}-down`;
      }
      return 'modal-fullscreen';
    }
    return '';
  }
  generateModalDialogClasses() {
    return {
      'modal-dialog': true,
      'modal-dialog-centered': !!this.isCentered,
      'modal-dialog-scrollable': !!this.isScrollable,
      [`modal-${this.modalSize}`]: !!this.modalSize,
      [this.fullScreenClass()]: !!this.isFullScreen,
    };
  }
  render() {
    return (index.h("div", Object.assign({ class: "modal fade show", id: this.name, tabindex: "-1", "aria-labelledby": `${this.name}Label`, "aria-hidden": "false" }, this.isStatic && ({
      [`data-${componentConfig.PREFIX_BS}backdrop`]: 'static',
      [`data-${componentConfig.PREFIX_BS}keyboard`]: 'false',
    })), index.h("div", { class: this.generateModalDialogClasses() }, index.h("div", { class: "modal-content" }, (this.header || this.showCloseButton) && (index.h("div", { class: "modal-header" }, this.showCloseButton && (index.h("button", { type: "button", class: "d-modal-close", "aria-label": "Close", onClick: this.closeHandler }, index.h("d-icon", { icon: "x-lg" }))), this.header && (index.h("div", { class: "d-modal-slot" }, index.h("slot", { name: "header" }))))), this.body && (index.h("div", { class: "d-modal-slot modal-body" }, index.h("slot", { name: "body" }))), this.footer && (index.h("div", { class: "d-modal-separator" })), this.footer && (index.h("div", { class: `d-modal-slot modal-footer d-modal-action-${this.footerActionPlacement}` }, index.h("slot", { name: "footer" })))))));
  }
  get el() { return index.getElement(this); }
};

exports.d_modal = DModal;

//# sourceMappingURL=d-modal.cjs.entry.js.map