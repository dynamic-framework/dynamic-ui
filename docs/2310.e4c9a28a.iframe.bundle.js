"use strict";(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[2310],{"../dynamic-ui/dist/esm/m-offcanvas.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{m_offcanvas:()=>MOffcanvas});var _index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../dynamic-ui/dist/esm/index-a19c3827.js"),_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../dynamic-ui/dist/esm/component-config-025f7932.js");const MOffcanvas=class{constructor(hostRef){(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.mClose=(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"mClose",7),this.closeHandler=()=>{this.mClose.emit()},this.name=void 0,this.isStatic=void 0,this.isScrollable=void 0,this.showCloseButton=void 0,this.openFrom="end",this.footerActionPlacement="fill"}componentWillLoad(){this.header=!!this.el.querySelector('[slot="header"]'),this.body=!!this.el.querySelector('[slot="body"]'),this.footer=!!this.el.querySelector('[slot="footer"]')}render(){return(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",Object.assign({class:`offcanvas offcanvas-${this.openFrom} show`,id:this.name,tabindex:"-1","aria-labelledby":`${this.name}Label`,"aria-hidden":"false"},this.isStatic&&{[`data-${_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_1__.P}backdrop`]:"static",[`data-${_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_1__.P}keyboard`]:"false"},this.isScrollable&&{[`data-${_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_1__.P}scroll`]:"true",[`data-${_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_1__.P}keyboard`]:"false"}),(this.header||this.showCloseButton)&&(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"offcanvas-header"},this.header&&(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"m-offcanvas-slot"},(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"header"})),this.showCloseButton&&(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{type:"button",class:"m-offcanvas-close","aria-label":"Close",onClick:this.closeHandler},(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("m-icon",{icon:"x-lg"}))),this.body&&(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"m-offcanvas-slot offcanvas-body"},(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"body"})),this.footer&&(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:`m-offcanvas-slot m-offcanvas-footer m-offcanvas-action-${this.footerActionPlacement}`},(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"footer"})))}get el(){return(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.d)(this)}}}}]);