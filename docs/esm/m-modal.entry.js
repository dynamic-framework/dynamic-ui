import { r as registerInstance, c as createEvent, h, d as getElement } from './index-c7f2daf2.js';
import './store-d1bbe9e1.js';
import { P as PREFIX_BS } from './component-config-025f7932.js';

const MModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.mClose = createEvent(this, "mClose", 7);
    this.closeHandler = () => {
      this.mClose.emit();
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
    return (h("div", Object.assign({ class: "m-modal modal fade show", id: this.name, tabindex: "-1", "aria-labelledby": `${this.name}Label`, "aria-hidden": "false" }, this.isStatic && ({
      [`data-${PREFIX_BS}backdrop`]: 'static',
      [`data-${PREFIX_BS}keyboard`]: 'false',
    })), h("div", { class: this.generateModalDialogClasses() }, h("div", { class: "modal-content" }, (this.header || this.showCloseButton) && (h("div", { class: "modal-header" }, this.showCloseButton && (h("button", { type: "button", class: "m-modal-close", "aria-label": "Close", onClick: this.closeHandler }, h("m-icon", { icon: "x-lg" }))), this.header && (h("div", { class: "m-modal-slot" }, h("slot", { name: "header" }))))), this.body && (h("div", { class: "m-modal-slot modal-body" }, h("slot", { name: "body" }))), this.footer && (h("div", { class: "m-modal-separator" })), this.footer && (h("div", { class: `m-modal-slot modal-footer m-modal-action-${this.footerActionPlacement}` }, h("slot", { name: "footer" })))))));
  }
  get el() { return getElement(this); }
};

export { MModal as m_modal };

//# sourceMappingURL=m-modal.entry.js.map