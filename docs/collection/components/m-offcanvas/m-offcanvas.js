import { h, } from '@stencil/core';
import { PREFIX_BS } from '../../utils/component-config';
export class MOffcanvas {
  constructor() {
    this.closeHandler = () => {
      this.mClose.emit();
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
    })), (this.header || this.showCloseButton) && (h("div", { class: "offcanvas-header" }, this.header && (h("div", { class: "m-offcanvas-slot" }, h("slot", { name: "header" }))), this.showCloseButton && (h("button", { type: "button", class: "m-offcanvas-close", "aria-label": "Close", onClick: this.closeHandler }, h("m-icon", { icon: "x-lg" }))))), this.body && (h("div", { class: "m-offcanvas-slot offcanvas-body" }, h("slot", { name: "body" }))), this.footer && (h("div", { class: `m-offcanvas-slot m-offcanvas-footer m-offcanvas-action-${this.footerActionPlacement}` }, h("slot", { name: "footer" })))));
  }
  static get is() { return "m-offcanvas"; }
  static get properties() {
    return {
      "name": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "the name of the offcanvas"
        },
        "attribute": "name",
        "reflect": false
      },
      "isStatic": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Is backdrop static"
        },
        "attribute": "is-static",
        "reflect": false
      },
      "isScrollable": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Is body scrollable while offcanvas is active"
        },
        "attribute": "is-scrollable",
        "reflect": false
      },
      "showCloseButton": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "No display close button"
        },
        "attribute": "show-close-button",
        "reflect": false
      },
      "openFrom": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "PositionToggleFrom",
          "resolved": "\"bottom\" | \"end\" | \"start\" | \"top\" | undefined",
          "references": {
            "PositionToggleFrom": {
              "location": "import",
              "path": "./m-offcanvas-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Position to show offcanvas from"
        },
        "attribute": "open-from",
        "reflect": false,
        "defaultValue": "'end'"
      },
      "footerActionPlacement": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'start' | 'end' | 'fill'",
          "resolved": "\"end\" | \"fill\" | \"start\" | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Footer action direction"
        },
        "attribute": "footer-action-placement",
        "reflect": false,
        "defaultValue": "'fill'"
      }
    };
  }
  static get events() {
    return [{
        "method": "mClose",
        "name": "mClose",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the input value has changed"
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "el"; }
}
//# sourceMappingURL=m-offcanvas.js.map
