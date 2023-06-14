import { r as registerInstance, c as createEvent, h, a as getElement } from './index-39190b44.js';
import { p as prefixBS } from './component-interface-66ff0580.js';

const mModalCss = "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap\"); .modal{--bs-modal-zindex:1055;--bs-modal-width:500px;--bs-modal-padding:1rem;--bs-modal-margin:0.5rem;--bs-modal-bg:#fff;--bs-modal-border-color:var(--bs-border-color-translucent);--bs-modal-border-width:1px;--bs-modal-border-radius:1rem;--bs-modal-box-shadow:0 8px 12px 0 rgba(22, 23, 35, 0.1);--bs-modal-inner-border-radius:calc(1rem - 1px);--bs-modal-header-padding-x:1rem;--bs-modal-header-padding-y:1rem;--bs-modal-header-padding:1rem 1rem;--bs-modal-header-border-color:var(--bs-border-color);--bs-modal-header-border-width:1px;--bs-modal-title-line-height:1.5;--bs-modal-footer-gap:0.5rem;--bs-modal-footer-border-color:var(--bs-border-color);--bs-modal-footer-border-width:1px;position:fixed;top:0;left:0;z-index:var(--bs-modal-zindex);display:none;width:100%;height:100%;overflow-x:hidden;overflow-y:auto;outline:0}.modal-dialog{position:relative;width:auto;margin:var(--bs-modal-margin);pointer-events:none}.modal.fade .modal-dialog{transition:transform 0.5s ease-out;transform:translate(0, 100vh)}@media (prefers-reduced-motion: reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{transform:none}.modal.modal-static .modal-dialog{transform:scale(1.02)}.modal-dialog-scrollable{height:calc(100% - var(--bs-modal-margin) * 2)}.modal-dialog-scrollable .modal-content{max-height:100%;overflow:hidden}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - var(--bs-modal-margin) * 2)}.modal-content{position:relative;display:flex;flex-direction:column;width:100%;color:var(--bs-modal-color);pointer-events:auto;background-color:var(--bs-modal-bg);background-clip:padding-box;border:var(--bs-modal-border-width) solid var(--bs-modal-border-color);border-radius:var(--bs-modal-border-radius);box-shadow:var(--bs-modal-box-shadow);outline:0}.modal-backdrop{--bs-backdrop-zindex:1050;--bs-backdrop-bg:#000;--bs-backdrop-opacity:0.8;position:fixed;top:0;left:0;z-index:var(--bs-backdrop-zindex);width:100vw;height:100vh;background-color:var(--bs-backdrop-bg)}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:var(--bs-backdrop-opacity)}.modal-header{display:flex;flex-shrink:0;align-items:center;justify-content:space-between;padding:var(--bs-modal-header-padding);border-bottom:var(--bs-modal-header-border-width) solid var(--bs-modal-header-border-color);border-top-left-radius:var(--bs-modal-inner-border-radius);border-top-right-radius:var(--bs-modal-inner-border-radius)}.modal-header .btn-close{padding:calc(var(--bs-modal-header-padding-y) * 0.5) calc(var(--bs-modal-header-padding-x) * 0.5);margin:calc(-0.5 * var(--bs-modal-header-padding-y)) calc(-0.5 * var(--bs-modal-header-padding-x)) calc(-0.5 * var(--bs-modal-header-padding-y)) auto}.modal-title{margin-bottom:0;line-height:var(--bs-modal-title-line-height)}.modal-body{position:relative;flex:1 1 auto;padding:var(--bs-modal-padding)}.modal-footer{display:flex;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;padding:calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap) * 0.5);background-color:var(--bs-modal-footer-bg);border-top:var(--bs-modal-footer-border-width) solid var(--bs-modal-footer-border-color);border-bottom-right-radius:var(--bs-modal-inner-border-radius);border-bottom-left-radius:var(--bs-modal-inner-border-radius)}.modal-footer>*{margin:calc(var(--bs-modal-footer-gap) * 0.5)}@media (min-width: 576px){.modal{--bs-modal-margin:1.75rem;--bs-modal-box-shadow:0 12px 14px 0 rgba(22, 23, 35, 0.2)}.modal-dialog{max-width:var(--bs-modal-width);margin-right:auto;margin-left:auto}.modal-sm{--bs-modal-width:300px}}@media (min-width: 992px){.modal-lg,.modal-xl{--bs-modal-width:800px}}@media (min-width: 1200px){.modal-xl{--bs-modal-width:1140px}}.modal-fullscreen{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen .modal-header,.modal-fullscreen .modal-footer{border-radius:0}.modal-fullscreen .modal-body{overflow-y:auto}@media (max-width: 575.98px){.modal-fullscreen-sm-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-sm-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-sm-down .modal-header,.modal-fullscreen-sm-down .modal-footer{border-radius:0}.modal-fullscreen-sm-down .modal-body{overflow-y:auto}}@media (max-width: 767.98px){.modal-fullscreen-md-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-md-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-md-down .modal-header,.modal-fullscreen-md-down .modal-footer{border-radius:0}.modal-fullscreen-md-down .modal-body{overflow-y:auto}}@media (max-width: 991.98px){.modal-fullscreen-lg-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-lg-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-lg-down .modal-header,.modal-fullscreen-lg-down .modal-footer{border-radius:0}.modal-fullscreen-lg-down .modal-body{overflow-y:auto}}@media (max-width: 1199.98px){.modal-fullscreen-xl-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-xl-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-xl-down .modal-header,.modal-fullscreen-xl-down .modal-footer{border-radius:0}.modal-fullscreen-xl-down .modal-body{overflow-y:auto}}@media (max-width: 1399.98px){.modal-fullscreen-xxl-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-xxl-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-xxl-down .modal-header,.modal-fullscreen-xxl-down .modal-footer{border-radius:0}.modal-fullscreen-xxl-down .modal-body{overflow-y:auto}}.modal .btn-close{--bs-close-focus-shadow:rgba(var(--bs-dark-rgb), .3)}.modal-dialog .modal-content .modal-header-bg-image{background-image:var(--bs-header-bg-image);background-repeat:no-repeat;background-position:center;background-clip:border-box;background-size:cover}.modal-dialog .modal-content .modal-header-bg-image .btn-close{margin:0;background-color:var(--bs-white)}.btn-close-text{--bs-btn-close-color:var(--bs-secondary);--bs-btn-close-font-size:0.75rem;--bs-btn-close-font-weight:400;--bs-btn-close-line-height:1.125rem;--bs-btn-close-letter-spacing:-.5%;display:flex;align-items:center;justify-content:center;width:auto;font-size:var(--bs-btn-close-font-size);font-weight:var(--bs-btn-close-font-weight);line-height:var(--bs-btn-close-line-height);color:var(--bs-btn-close-color);letter-spacing:var(--bs-btn-close-letter-spacing);background:none;border:0}";

const MModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.mClose = createEvent(this, "mClose", 7);
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
  get el() { return getElement(this); }
};
MModal.style = mModalCss;

export { MModal as m_modal };
