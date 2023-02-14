import { h, } from '@stencil/core';
import { prefixBS } from '../../utils/component-interface';
export class MModal {
  constructor() {
    this.closeHandler = () => {
      this.mClose.emit();
    };
    this.name = undefined;
    this.closeText = undefined;
    this.isStatic = undefined;
    this.isScrollable = undefined;
    this.isCentered = undefined;
    this.isFullScreen = undefined;
    this.fullScreenFrom = undefined;
    this.modalSize = undefined;
    this.imageHeader = undefined;
    this.showCloseButton = undefined;
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
    return (h("div", Object.assign({ class: "modal fade show d-block", id: this.name, tabindex: "-1", "aria-labelledby": `${this.name}Label`, "aria-hidden": "false" }, this.isStatic && ({
      [`data-${prefixBS}backdrop`]: 'static',
      [`data-${prefixBS}keyboard`]: 'false',
    })), h("div", Object.assign({ class: this.generateModalDialogClasses() }, this.imageHeader && ({ style: { [`--${prefixBS}header-bg-image`]: `url("${this.imageHeader}")` } })), h("div", { class: "modal-content" }, this.header && (h("div", { class: {
        'modal-header': true,
        'modal-header-bg-image': !!this.imageHeader,
      } }, h("slot", { name: "header" }), this.showCloseButton && (h("button", { type: "button", class: {
        'btn-close': !this.closeText,
        'btn-close-text': !!this.closeText,
      }, "aria-label": "Close", onClick: this.closeHandler }, this.closeText && (this.closeText))))), this.body && (h("div", { class: "modal-body" }, h("slot", { name: "body" }))), this.footer && (h("div", { class: "modal-footer" }, h("slot", { name: "footer" })))))));
  }
  static get is() { return "m-modal"; }
  static get originalStyleUrls() {
    return {
      "$": ["m-modal.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["m-modal.css"]
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
          "text": "the name of the modal"
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
              "path": "./m-modal-interface"
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
              "path": "./m-modal-interface"
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
      "imageHeader": {
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
          "text": "Background image header"
        },
        "attribute": "image-header",
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
