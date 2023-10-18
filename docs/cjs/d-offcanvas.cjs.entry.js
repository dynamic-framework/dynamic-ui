'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be9a6731.js');
const componentConfig = require('./component-config-a8f1d95a.js');

const DOffcanvas = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.eventClose = index.createEvent(this, "eventClose", 7);
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
    return (index.h("div", Object.assign({ class: `offcanvas offcanvas-${this.openFrom} show`, id: this.name, tabindex: "-1", "aria-labelledby": `${this.name}Label`, "aria-hidden": "false" }, this.isStatic && ({
      [`data-${componentConfig.PREFIX_BS}backdrop`]: 'static',
      [`data-${componentConfig.PREFIX_BS}keyboard`]: 'false',
    }), this.isScrollable && ({
      [`data-${componentConfig.PREFIX_BS}scroll`]: 'true',
      [`data-${componentConfig.PREFIX_BS}keyboard`]: 'false',
    })), (this.header || this.showCloseButton) && (index.h("div", { class: "offcanvas-header" }, this.header && (index.h("div", { class: "d-offcanvas-slot" }, index.h("slot", { name: "header" }))), this.showCloseButton && (index.h("button", { type: "button", class: "d-offcanvas-close", "aria-label": "Close", onClick: this.closeHandler }, index.h("d-icon", { icon: "x-lg" }))))), this.body && (index.h("div", { class: "d-offcanvas-slot offcanvas-body" }, index.h("slot", { name: "body" }))), this.footer && (index.h("div", { class: `d-offcanvas-slot d-offcanvas-footer d-offcanvas-action-${this.footerActionPlacement}` }, index.h("slot", { name: "footer" })))));
  }
  get el() { return index.getElement(this); }
};

exports.d_offcanvas = DOffcanvas;

//# sourceMappingURL=d-offcanvas.cjs.entry.js.map