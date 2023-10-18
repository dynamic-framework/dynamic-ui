import { h, } from '@stencil/core';
import { PREFIX_BS } from '../../utils/component-config';
export class DOffcanvas {
  constructor() {
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
  static get is() { return "d-offcanvas"; }
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
              "path": "./d-offcanvas-interface"
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
        "method": "eventClose",
        "name": "eventClose",
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
//# sourceMappingURL=d-offcanvas.js.map
