import { h, } from '@stencil/core';
import { prefixBS } from '../../utils/component-interface';
export class MOffcanvas {
  constructor() {
    this.closeHandler = () => {
      this.mClose.emit();
    };
    this.name = undefined;
    this.closeText = undefined;
    this.isStatic = undefined;
    this.isScrollable = undefined;
    this.showCloseButton = undefined;
    this.openFrom = 'start';
  }
  componentWillLoad() {
    this.header = !!this.el.querySelector('[slot="header"]');
    this.body = !!this.el.querySelector('[slot="body"]');
    this.footer = !!this.el.querySelector('[slot="footer"]');
  }
  render() {
    return (h("div", Object.assign({ class: `offcanvas offcanvas-${this.openFrom} show`, id: this.name, tabindex: "-1", "aria-labelledby": `${this.name}Label`, "aria-hidden": "false" }, this.isStatic && ({
      [`data-${prefixBS}backdrop`]: 'static',
      [`data-${prefixBS}keyboard`]: 'false',
    }), this.isScrollable && ({
      [`data-${prefixBS}scroll`]: 'true',
      [`data-${prefixBS}keyboard`]: 'false',
    })), this.header && (h("div", { class: "offcanvas-header" }, h("slot", { name: "header" }), this.showCloseButton && (h("button", { type: "button", class: {
        'btn-close': !this.closeText,
        'btn-close-text': !!this.closeText,
      }, "aria-label": "Close", onClick: this.closeHandler }, this.closeText && (this.closeText))))), this.body && (h("div", { class: "offcanvas-body" }, h("slot", { name: "body" }))), this.footer && (h("div", { class: "offcanvas-footer" }, h("slot", { name: "footer" })))));
  }
  static get is() { return "m-offcanvas"; }
  static get originalStyleUrls() {
    return {
      "$": ["m-offcanvas.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["m-offcanvas.css"]
    };
  }
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
      "closeText": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Close button text"
        },
        "attribute": "close-text",
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
          "resolved": "\"bottom\" | \"end\" | \"start\" | \"top\"",
          "references": {
            "PositionToggleFrom": {
              "location": "import",
              "path": "./m-offcanvas-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Position to show offcanvas from"
        },
        "attribute": "open-from",
        "reflect": false,
        "defaultValue": "'start'"
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
