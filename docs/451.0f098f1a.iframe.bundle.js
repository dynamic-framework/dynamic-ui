"use strict";(self.webpackChunk_modyo_dynamic_modyo_design_system_react=self.webpackChunk_modyo_dynamic_modyo_design_system_react||[]).push([[451],{"../modyo-design-system/dist/esm/m-input.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{m_input:()=>MInput});__webpack_require__("../../node_modules/.pnpm/core-js@3.26.0/node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.26.0/node_modules/core-js/modules/es.object.define-property.js");var _index_39190b44_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../modyo-design-system/dist/esm/index-39190b44.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var MInput=function(){function MInput(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,MInput),(0,_index_39190b44_js__WEBPACK_IMPORTED_MODULE_2__.r)(this,hostRef),this.mChange=(0,_index_39190b44_js__WEBPACK_IMPORTED_MODULE_2__.c)(this,"mChange",7),this.mBlur=(0,_index_39190b44_js__WEBPACK_IMPORTED_MODULE_2__.c)(this,"mBlur",7),this.changeHandler=function(event){_this.mChange.emit(event.target.value)},this.blurHandler=function(event){_this.mBlur.emit(event)},this.mId=void 0,this.name=void 0,this.label="",this.labelIcon="info-circle",this.labelIconFamilyClass=void 0,this.labelIconFamilyPrefix=void 0,this.placeholder="",this.type="text",this.value="",this.isDisabled=!1,this.isLoading=!1,this.iconStart=void 0,this.iconStartFamilyClass=void 0,this.iconStartFamilyPrefix=void 0,this.iconEnd=void 0,this.iconEndFamilyClass=void 0,this.iconEndFamilyPrefix=void 0,this.hint=void 0,this.hintIconStart=void 0,this.hintIconStartFamilyClass=void 0,this.hintIconStartFamilyPrefix=void 0,this.hintIconEnd=void 0,this.hintIconEndFamilyClass=void 0,this.hintIconEndFamilyPrefix=void 0,this.layoutDirection="vertical",this.isInvalid=!1}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(MInput,[{key:"generateHostClasses",value:function generateHostClasses(){return{"form-control-layout":!0,"form-control-layout-horizontal":"horizontal"===this.layoutDirection}}},{key:"render",value:function render(){return(0,_index_39190b44_js__WEBPACK_IMPORTED_MODULE_2__.h)(_index_39190b44_js__WEBPACK_IMPORTED_MODULE_2__.H,{class:this.generateHostClasses()},this.label&&(0,_index_39190b44_js__WEBPACK_IMPORTED_MODULE_2__.h)("label",{htmlFor:this.mId},this.label,this.labelIcon&&(0,_index_39190b44_js__WEBPACK_IMPORTED_MODULE_2__.h)("m-icon",{class:"form-control-icon",icon:this.labelIcon,familyClass:this.labelIconFamilyClass,familyPrefix:this.labelIconFamilyPrefix})),(0,_index_39190b44_js__WEBPACK_IMPORTED_MODULE_2__.h)("div",{class:"form-control-input"},(0,_index_39190b44_js__WEBPACK_IMPORTED_MODULE_2__.h)("div",{class:{"input-group":!0,"has-validation":this.isInvalid,disabled:this.isDisabled||this.isLoading}},this.iconStart&&(0,_index_39190b44_js__WEBPACK_IMPORTED_MODULE_2__.h)("span",{class:"input-group-text",id:this.mId+"-start"},this.iconStart&&(0,_index_39190b44_js__WEBPACK_IMPORTED_MODULE_2__.h)("m-icon",{class:"form-control-icon",icon:this.iconStart,familyClass:this.iconStartFamilyClass,familyPrefix:this.iconStartFamilyPrefix})),(0,_index_39190b44_js__WEBPACK_IMPORTED_MODULE_2__.h)("input",{id:this.mId,name:this.name,type:this.type,class:{"form-control":!0,"is-invalid":this.isInvalid},placeholder:this.placeholder,"aria-label":this.label,disabled:this.isDisabled||this.isLoading,value:this.value,"aria-describedby":this.mId+"-add",onInput:this.changeHandler,onBlur:this.blurHandler}),this.iconEnd&&!this.isLoading&&(0,_index_39190b44_js__WEBPACK_IMPORTED_MODULE_2__.h)("span",{class:"input-group-text",id:this.mId+"-end"},this.iconEnd&&(0,_index_39190b44_js__WEBPACK_IMPORTED_MODULE_2__.h)("m-icon",{class:"form-control-icon",icon:this.iconEnd,familyClass:this.iconEndFamilyClass,familyPrefix:this.iconEndFamilyPrefix})),this.isLoading&&(0,_index_39190b44_js__WEBPACK_IMPORTED_MODULE_2__.h)("div",{class:"input-group-text form-control-icon"},(0,_index_39190b44_js__WEBPACK_IMPORTED_MODULE_2__.h)("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},(0,_index_39190b44_js__WEBPACK_IMPORTED_MODULE_2__.h)("span",{class:"visually-hidden"},"Loading...")))),this.hint&&(0,_index_39190b44_js__WEBPACK_IMPORTED_MODULE_2__.h)("small",{class:"hint"},this.hintIconStart&&(0,_index_39190b44_js__WEBPACK_IMPORTED_MODULE_2__.h)("m-icon",{class:"form-control-icon",icon:this.hintIconStart,familyClass:this.hintIconStartFamilyClass,familyPrefix:this.hintIconStartFamilyPrefix}),this.hint,this.hintIconEnd&&(0,_index_39190b44_js__WEBPACK_IMPORTED_MODULE_2__.h)("m-icon",{class:"form-control-icon",icon:this.hintIconEnd,familyClass:this.hintIconEndFamilyClass,familyPrefix:this.hintIconEndFamilyPrefix}))))}}]),MInput}()}}]);