"use strict";(self.webpackChunk_modyo_dynamic_modyo_design_system_react=self.webpackChunk_modyo_dynamic_modyo_design_system_react||[]).push([[4996],{"../modyo-design-system/dist/esm/m-modal.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{m_modal:()=>MModal});var _index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../modyo-design-system/dist/esm/index-c7f2daf2.js"),_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../modyo-design-system/dist/esm/store-d1bbe9e1.js"),__webpack_require__("../modyo-design-system/dist/esm/component-config-025f7932.js"));const MModal=class{constructor(hostRef){(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.mClose=(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"mClose",7),this.closeHandler=()=>{this.mClose.emit()},this.name=void 0,this.isStatic=void 0,this.isScrollable=void 0,this.isCentered=void 0,this.isFullScreen=void 0,this.fullScreenFrom=void 0,this.modalSize=void 0,this.showCloseButton=void 0,this.footerActionPlacement="fill"}componentWillLoad(){this.header=!!this.el.querySelector('[slot="header"]'),this.body=!!this.el.querySelector('[slot="body"]'),this.footer=!!this.el.querySelector('[slot="footer"]')}fullScreenClass(){return this.isFullScreen?this.fullScreenFrom?`modal-fullscreen-${this.fullScreenFrom}-down`:"modal-fullscreen":""}generateModalDialogClasses(){return{"modal-dialog":!0,"modal-dialog-centered":!!this.isCentered,"modal-dialog-scrollable":!!this.isScrollable,[`modal-${this.modalSize}`]:!!this.modalSize,[this.fullScreenClass()]:!!this.isFullScreen}}render(){return(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",Object.assign({class:"m-modal modal fade show",id:this.name,tabindex:"-1","aria-labelledby":`${this.name}Label`,"aria-hidden":"false"},this.isStatic&&{[`data-${_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_2__.P}backdrop`]:"static",[`data-${_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_2__.P}keyboard`]:"false"}),(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:this.generateModalDialogClasses()},(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"modal-content"},(this.header||this.showCloseButton)&&(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"modal-header"},this.showCloseButton&&(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{type:"button",class:"m-modal-close","aria-label":"Close",onClick:this.closeHandler},(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.h)("m-icon",{icon:"x-lg"})),this.header&&(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"m-modal-slot"},(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"header"}))),this.body&&(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"m-modal-slot modal-body"},(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"body"})),this.footer&&(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"m-modal-separator"}),this.footer&&(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:`m-modal-slot modal-footer m-modal-action-${this.footerActionPlacement}`},(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"footer"})))))}get el(){return(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.d)(this)}}}}]);