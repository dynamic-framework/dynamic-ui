import { h, } from '@stencil/core';
import { PREFIX_BS } from '../../utils';
export class DModal {
  constructor() {
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
    return (h("div", Object.assign({ class: "modal fade show", id: this.name, tabindex: "-1", "aria-labelledby": `${this.name}Label`, "aria-hidden": "false" }, this.isStatic && ({
      [`data-${PREFIX_BS}backdrop`]: 'static',
      [`data-${PREFIX_BS}keyboard`]: 'false',
    })), h("div", { class: this.generateModalDialogClasses() }, h("div", { class: "modal-content" }, (this.header || this.showCloseButton) && (h("div", { class: "modal-header" }, this.showCloseButton && (h("button", { type: "button", class: "d-modal-close", "aria-label": "Close", onClick: this.closeHandler }, h("d-icon", { icon: "x-lg" }))), this.header && (h("div", { class: "d-modal-slot" }, h("slot", { name: "header" }))))), this.body && (h("div", { class: "d-modal-slot modal-body" }, h("slot", { name: "body" }))), this.footer && (h("div", { class: "d-modal-separator" })), this.footer && (h("div", { class: `d-modal-slot modal-footer d-modal-action-${this.footerActionPlacement}` }, h("slot", { name: "footer" })))))));
  }
  static get is() { return "d-modal"; }
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
          "text": "the name of the modal"
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
          "text": "Is modal scrollable"
        },
        "attribute": "is-scrollable",
        "reflect": false
      },
      "isCentered": {
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
          "text": "Is modal centered"
        },
        "attribute": "is-centered",
        "reflect": false
      },
      "isFullScreen": {
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
          "text": "Is fullscreen in all sizes"
        },
        "attribute": "is-full-screen",
        "reflect": false
      },
      "fullScreenFrom": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "FullScreenFrom",
          "resolved": "\"lg\" | \"md\" | \"sm\" | \"xl\" | \"xxl\" | undefined",
          "references": {
            "FullScreenFrom": {
              "location": "import",
              "path": "./d-modal-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Minimum size to apply the fullscreen"
        },
        "attribute": "full-screen-from",
        "reflect": false
      },
      "modalSize": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ModalSize",
          "resolved": "\"lg\" | \"sm\" | \"xl\" | undefined",
          "references": {
            "ModalSize": {
              "location": "import",
              "path": "./d-modal-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Modal size"
        },
        "attribute": "modal-size",
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
      "footerActionPlacement": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'start' | 'end' | 'fill' | 'center'",
          "resolved": "\"center\" | \"end\" | \"fill\" | \"start\" | undefined",
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
//# sourceMappingURL=d-modal.js.map
