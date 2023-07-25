"use strict";(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[4042],{"../dynamic-ui/dist/esm/m-input.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{m_input:()=>MInput});var _index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../dynamic-ui/dist/esm/index-a19c3827.js"),_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../dynamic-ui/dist/esm/store-fc6c92fd.js"),__webpack_require__("../dynamic-ui/dist/esm/component-config-025f7932.js"));const MInput=class{constructor(hostRef){(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.mChange=(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"mChange",7),this.mBlur=(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"mBlur",7),this.mFocus=(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"mFocus",7),this.mWheel=(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"mWheel",7),this.mIconStartClick=(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"mIconStartClick",7),this.mIconEndClick=(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"mIconEndClick",7),this.changeHandler=event=>{this.mChange.emit(event.target.value)},this.blurHandler=event=>{this.mBlur.emit(event)},this.focusHandler=event=>{this.mFocus.emit(event)},this.wheelHandler=event=>{this.mWheel.emit(event)},this.iconStartClickHandler=event=>{this.mIconStartClick.emit(event)},this.iconEndClickHandler=event=>{this.mIconEndClick.emit(event)},this.mId=void 0,this.name=void 0,this.label="",this.labelIcon=void 0,this.labelIconFamilyClass=void 0,this.labelIconFamilyPrefix=void 0,this.placeholder="",this.type="text",this.value="",this.mInputMode=void 0,this.pattern=void 0,this.isDisabled=!1,this.isReadOnly=!1,this.isLoading=!1,this.iconFamilyClass=void 0,this.iconFamilyPrefix=void 0,this.iconStart=void 0,this.iconStartFamilyClass=void 0,this.iconStartFamilyPrefix=void 0,this.iconEnd=void 0,this.iconEndFamilyClass=void 0,this.iconEndFamilyPrefix=void 0,this.hint=void 0,this.isInvalid=!1,this.isValid=!1}async focusInput(){var _a;null===(_a=this.htmlInputElement)||void 0===_a||_a.focus()}async blurInput(){var _a;null===(_a=this.htmlInputElement)||void 0===_a||_a.blur()}componentWillLoad(){this.inputStart=this.el.querySelector('[slot="input-start"]'),this.inputEnd=this.el.querySelector('[slot="input-end"]')}render(){return(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"m-input"},this.label&&(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{htmlFor:this.mId},this.label,this.labelIcon&&(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("m-icon",{class:"m-input-icon",icon:this.labelIcon,size:`var(--${_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_2__.P}m-input-label-font-size)`,familyClass:this.labelIconFamilyClass,familyPrefix:this.labelIconFamilyPrefix})),(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"m-input-control"},(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"input-group":!0,"has-validation":this.isInvalid,disabled:this.isDisabled||this.isLoading}},!!this.inputStart&&(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"input-group-text"},(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"input-start"})),this.iconStart&&(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{type:"button",class:"input-group-text",id:`${this.mId}Start`,onClick:this.iconStartClickHandler,disabled:this.isDisabled||this.isLoading},this.iconStart&&(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("m-icon",{class:"m-input-icon",icon:this.iconStart,familyClass:this.iconStartFamilyClass,familyPrefix:this.iconStartFamilyPrefix})),(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{ref:el=>this.htmlInputElement=el,id:this.mId,name:this.name,type:this.type,class:{"form-control":!0,"is-invalid":this.isInvalid,"is-valid":this.isValid},placeholder:this.placeholder,"aria-label":this.label,disabled:this.isDisabled||this.isLoading,readOnly:this.isReadOnly,value:this.value,"aria-describedby":`${this.mId}Add ${this.mId}Hint`,inputmode:this.mInputMode,pattern:this.pattern,onInput:this.changeHandler,onBlur:this.blurHandler,onFocus:this.focusHandler,onWheel:this.wheelHandler}),(this.isInvalid||this.isValid)&&!this.iconEnd&&!this.isLoading&&(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"input-group-text",id:`${this.mId}State`},(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("m-icon",{class:"m-input-validation-icon",icon:this.isInvalid?"exclamation-circle":"check",familyClass:this.iconFamilyClass,familyPrefix:this.iconFamilyPrefix})),this.iconEnd&&!this.isLoading&&(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{type:"button",class:"input-group-text",id:`${this.mId}End`,onClick:this.iconEndClickHandler,disabled:this.isDisabled||this.isLoading},this.iconEnd&&(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("m-icon",{class:"m-input-icon",icon:this.iconEnd,familyClass:this.iconEndFamilyClass,familyPrefix:this.iconEndFamilyPrefix})),!!this.inputEnd&&(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"input-group-text"},(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"input-end"})),this.isLoading&&(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"input-group-text m-input-icon"},(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"visually-hidden"},"Loading...")))),this.hint&&(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"form-text",id:`${this.mId}Hint`},this.hint)))}get el(){return(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.d)(this)}}}}]);