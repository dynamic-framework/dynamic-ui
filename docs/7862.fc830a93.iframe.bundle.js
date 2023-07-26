"use strict";(self.webpackChunk_modyo_dynamic_modyo_design_system_react=self.webpackChunk_modyo_dynamic_modyo_design_system_react||[]).push([[7862],{"../modyo-design-system/dist/esm/m-input-select.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{m_input_select:()=>MInputSelect});var _index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../modyo-design-system/dist/esm/index-c7f2daf2.js"),_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../modyo-design-system/dist/esm/store-d1bbe9e1.js"),__webpack_require__("../modyo-design-system/dist/esm/component-config-025f7932.js"));const MInputSelect=class{constructor(hostRef){(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.mChange=(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"mChange",7),this.mBlur=(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"mBlur",7),this.mIconStartClick=(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"mIconStartClick",7),this.mIconEndClick=(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"mIconEndClick",7),this.changeHandler=event=>{const{value}=event.target;this.mChange.emit(this.options.find((option=>this.valueExtractor(option).toString()===value)))},this.blurHandler=event=>{this.mBlur.emit(event)},this.iconStartClickHandler=event=>{this.mIconStartClick.emit(event)},this.iconEndClickHandler=event=>{this.mIconEndClick.emit(event)},this.mId=void 0,this.name=void 0,this.label="",this.options=[],this.labelIcon=void 0,this.labelIconFamilyClass=void 0,this.labelIconFamilyPrefix=void 0,this.isDisabled=!1,this.isLoading=!1,this.iconFamilyClass=void 0,this.iconFamilyPrefix=void 0,this.iconStart=void 0,this.iconStartFamilyClass=void 0,this.iconStartFamilyPrefix=void 0,this.iconEnd=void 0,this.iconEndFamilyClass=void 0,this.iconEndFamilyPrefix=void 0,this.hint=void 0,this.selectedOption=void 0,this.valueExtractor=item=>null==item?void 0:item.value,this.labelExtractor=item=>null==item?void 0:item.label}render(){return(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"m-input"},this.label&&(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{htmlFor:this.mId},this.label,this.labelIcon&&(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.h)("m-icon",{class:"m-input-icon",icon:this.labelIcon,size:`var(--${_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_2__.P}m-input-label-font-size)`,familyClass:this.labelIconFamilyClass,familyPrefix:this.labelIconFamilyPrefix})),(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"m-input-control"},(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"input-group":!0,disabled:this.isDisabled||this.isLoading}},this.iconStart&&(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{type:"button",class:"input-group-text",id:`${this.mId}Start`,onClick:this.iconStartClickHandler,disabled:this.isDisabled||this.isLoading},this.iconStart&&(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.h)("m-icon",{class:"m-input-icon",icon:this.iconStart,familyClass:this.iconStartFamilyClass,familyPrefix:this.iconStartFamilyPrefix})),(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.h)("select",{id:this.mId,name:this.name,class:{"form-select":!0},"aria-label":this.label,disabled:this.isDisabled||this.isLoading,"aria-describedby":`${this.mId}Add ${this.mId}Hint`,onChange:this.changeHandler,onBlur:this.blurHandler},this.options.map((option=>(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.h)("option",{value:this.valueExtractor(option),selected:this.selectedOption&&this.valueExtractor(option)===this.valueExtractor(this.selectedOption)},this.labelExtractor(option))))),this.iconEnd&&!this.isLoading&&(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{type:"button",class:"input-group-text",id:`${this.mId}End`,onClick:this.iconEndClickHandler,disabled:this.isDisabled||this.isLoading},this.iconEnd&&(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.h)("m-icon",{class:"m-input-icon",icon:this.iconEnd,familyClass:this.iconEndFamilyClass,familyPrefix:this.iconEndFamilyPrefix})),this.isLoading&&(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"input-group-text form-control-icon loading"},(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"visually-hidden"},"Loading...")))),this.hint&&(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"form-text",id:`${this.mId}Hint`},this.hint)))}}}}]);