"use strict";(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[1159],{"../dynamic-ui/dist/esm/m-input-currency-base.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{m_input_currency_base:()=>MInputCurrencyBase});var _index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../dynamic-ui/dist/esm/index-a19c3827.js"),_store_fc6c92fd_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../dynamic-ui/dist/esm/store-fc6c92fd.js"),_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../dynamic-ui/dist/esm/component-config-025f7932.js");const MInputCurrencyBase=class{constructor(hostRef){(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.mChange=(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"mChange",7),this.mBlur=(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"mBlur",7),this.mFocus=(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"mFocus",7),this.changeHandler=event=>{event.stopPropagation(),this.internalValueAsNumber=""!==event.detail&&"string"==typeof event.detail?parseFloat(event.detail):void 0,this.internalValueAsFormat=void 0!==this.internalValueAsNumber?(0,_store_fc6c92fd_js__WEBPACK_IMPORTED_MODULE_1__.c)(this.internalValueAsNumber,Object.assign(Object.assign({},this.currencyOptions),{symbol:""})).format():"",this.mChange.emit(this.internalValueAsNumber)},this.blurHandler=event=>{event.stopPropagation(),this.internalType="text",this.internalValueAsFormat=void 0!==this.internalValueAsNumber?(0,_store_fc6c92fd_js__WEBPACK_IMPORTED_MODULE_1__.c)(this.internalValueAsNumber,Object.assign(Object.assign({},this.currencyOptions),{symbol:""})).format():"",this.mBlur.emit(this.internalValueAsNumber)},this.focusHandler=event=>{event.stopPropagation(),this.internalType="number",this.internalValueAsFormat=void 0!==this.internalValueAsNumber?(0,_store_fc6c92fd_js__WEBPACK_IMPORTED_MODULE_1__.c)(this.internalValueAsNumber,Object.assign(Object.assign({},this.currencyOptions),{symbol:""})).format():"",this.mFocus.emit(this.internalValueAsNumber)},this.wheelHandler=event=>{var _a;event.stopPropagation(),null===(_a=this.htmlMInputElement)||void 0===_a||_a.blurInput()},this.mId=void 0,this.name=void 0,this.label="",this.labelIcon=void 0,this.labelIconFamilyClass=void 0,this.labelIconFamilyPrefix=void 0,this.placeholder="",this.value=void 0,this.isDisabled=!1,this.isReadOnly=!1,this.isLoading=!1,this.iconFamilyClass=void 0,this.iconFamilyPrefix=void 0,this.iconStart=void 0,this.iconStartFamilyClass=void 0,this.iconStartFamilyPrefix=void 0,this.iconEnd=void 0,this.iconEndFamilyClass=void 0,this.iconEndFamilyPrefix=void 0,this.hint=void 0,this.isInvalid=!1,this.isValid=!1,this.minValue=void 0,this.maxValue=void 0,this.currencyOptions=void 0,this.currencyCode=void 0,this.internalValueAsNumber=void 0,this.internalValueAsFormat=void 0,this.internalType="text",this.internalIsInvalid=!1}watchValueHandler(newValue){this.internalIsInvalid=!this.isValidValue(newValue)}isValidValue(value){return void 0===value||("number"!==this.internalType||(void 0===this.minValue||value>=this.minValue)&&(void 0===this.maxValue||value<=this.maxValue))}valueAsType(){return"number"===this.internalType?this.internalValueAsNumber:this.internalValueAsFormat}connectedCallback(){this.internalValueAsNumber=this.value}componentDidLoad(){this.internalType="text",this.internalValueAsFormat=void 0!==this.internalValueAsNumber?(0,_store_fc6c92fd_js__WEBPACK_IMPORTED_MODULE_1__.c)(this.internalValueAsNumber,Object.assign(Object.assign({},this.currencyOptions),{symbol:""})).format():""}generateStyleVariables(){return{[`--${_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_2__.P}m-input-currency-component-symbol-color`]:`var(--${_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_2__.P}secondary)`,[`--${_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_2__.P}m-input-currency-symbol-color`]:`var(--${_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_2__.P}m-input-currency-component-symbol-color)`}}generateSymbolStyleVariables(){return{color:`var(--${_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_2__.P}m-input-currency-symbol-color)`}}render(){return(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("m-input",{ref:el=>this.htmlMInputElement=el,style:this.generateStyleVariables(),mId:this.mId,name:this.name,label:this.label,labelIcon:this.labelIcon,labelIconFamilyClass:this.labelIconFamilyClass,labelIconFamilyPrefix:this.labelIconFamilyPrefix,placeholder:this.placeholder,value:this.valueAsType(),iconStart:this.iconStart,iconStartFamilyClass:this.iconStartFamilyClass,iconStartFamilyPrefix:this.iconStartFamilyPrefix,iconEnd:this.iconEnd,iconEndFamilyClass:this.iconEndFamilyClass,iconEndFamilyPrefix:this.iconEndFamilyPrefix,isDisabled:this.isDisabled,isReadOnly:this.isReadOnly,isLoading:this.isLoading,hint:this.hint,isInvalid:this.isInvalid,isValid:this.isValid,type:this.internalType,mInputMode:"decimal",pattern:"^[0-9]",onMChange:this.changeHandler,onMBlur:this.blurHandler,onMFocus:this.focusHandler,onMWheel:this.wheelHandler},(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{slot:"input-start",style:this.generateSymbolStyleVariables()},this.currencyCode||this.currencyOptions.symbol))}static get watchers(){return{value:["watchValueHandler"]}}}}}]);