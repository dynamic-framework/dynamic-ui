import { r as registerInstance, c as createEvent, h, d as getElement } from './index-a19c3827.js';
import { P as PREFIX_BS } from './component-config-025f7932.js';

const DOffcanvas = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.eventClose = createEvent(this, "eventClose", 7);
    this.closeHandler = () => {
      this.eventClose.emit();
    };
    this.name = undefined;
    this.isStatic = undefined;
    this.isScrollable = undefined;
    this.showCloseButton = undefined;
    this.openFrom = 'end';
    this.footerActionPlacement = 'fill';
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
    })), (this.header || this.showCloseButton) && (h("div", { class: "offcanvas-header" }, this.header && (h("div", { class: "d-offcanvas-slot" }, h("slot", { name: "header" }))), this.showCloseButton && (h("button", { type: "button", class: "d-offcanvas-close", "aria-label": "Close", onClick: this.closeHandler }, h("d-icon", { icon: "x-lg" }))))), this.body && (h("div", { class: "d-offcanvas-slot offcanvas-body" }, h("slot", { name: "body" }))), this.footer && (h("div", { class: `d-offcanvas-slot d-offcanvas-footer d-offcanvas-action-${this.footerActionPlacement}` }, h("slot", { name: "footer" })))));
  }
  get el() { return getElement(this); }
};

export { DOffcanvas as d_offcanvas };

//# sourceMappingURL=d-offcanvas.entry.js.map