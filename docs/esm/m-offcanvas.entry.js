import { r as registerInstance, c as createEvent, h, d as getElement } from './index-c7f2daf2.js';
import { P as PREFIX_BS } from './component-config-025f7932.js';

const MOffcanvas = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.mClose = createEvent(this, "mClose", 7);
    this.closeHandler = () => {
      this.mClose.emit();
    };
    this.name = undefined;
    this.isStatic = undefined;
    this.isScrollable = undefined;
    this.showCloseButton = undefined;
    this.openFrom = 'end';
    this.footerActionPlacement = 'fill';
    this.isInline = false;
  }
  componentWillLoad() {
    this.header = !!this.el.querySelector('[slot="header"]');
    this.body = !!this.el.querySelector('[slot="body"]');
    this.footer = !!this.el.querySelector('[slot="footer"]');
  }
  render() {
    return (h("div", Object.assign({ class: `offcanvas offcanvas-${this.openFrom} show`, id: this.name, tabindex: "-1", "aria-labelledby": `${this.name}Label`, "aria-hidden": "false" }, this.isStatic && ({
      [`data-${PREFIX_BS}backdrop`]: 'static',
      [`data-${PREFIX_BS}keyboard`]: 'false',
    }), this.isScrollable && ({
      [`data-${PREFIX_BS}scroll`]: 'true',
      [`data-${PREFIX_BS}keyboard`]: 'false',
    }), { style: Object.assign({}, this.isInline && { position: 'absolute' }) }), (this.header || this.showCloseButton) && (h("div", { class: "offcanvas-header" }, this.header && (h("div", { class: "m-offcanvas-slot" }, h("slot", { name: "header" }))), this.showCloseButton && (h("button", { type: "button", class: "m-offcanvas-close", "aria-label": "Close", onClick: this.closeHandler }, h("m-icon", { icon: "x-lg" }))))), this.body && (h("div", { class: "m-offcanvas-slot offcanvas-body" }, h("slot", { name: "body" }))), this.footer && (h("div", { class: `m-offcanvas-slot m-offcanvas-footer m-offcanvas-action-${this.footerActionPlacement}` }, h("slot", { name: "footer" })))));
  }
  get el() { return getElement(this); }
};

export { MOffcanvas as m_offcanvas };

//# sourceMappingURL=m-offcanvas.entry.js.map