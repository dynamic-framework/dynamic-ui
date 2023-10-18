"use strict";(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[8377],{"../dynamic-ui/dist/esm/d-input-pin.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{d_input_pin:()=>DInputPin});var _index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../dynamic-ui/dist/esm/index-a19c3827.js"),_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../dynamic-ui/dist/esm/store-fc6c92fd.js"),__webpack_require__("../dynamic-ui/dist/esm/component-config-025f7932.js"));const DInputPin=class{constructor(hostRef){(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.eventChange=(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"eventChange",7),this.nextInput=e=>{var _a;const input=e.target;new RegExp(this.pattern).test(input.value)||(input.value=""),""!==input.value&&(input.nextSibling?null===(_a=input.nextSibling)||void 0===_a||_a.focus():input.blur())},this.prevInput=e=>{var _a;if("Backspace"===e.key){const{value}=e.currentTarget,input=e.target;input.previousSibling&&""===value?null===(_a=input.previousSibling)||void 0===_a||_a.focus():(input.blur(),input.focus())}},this.focusInput=e=>{e.target.value="",this.eventChange.emit("")},this.wheelInput=e=>{e.target.blur()},this.formChange=e=>{const form=e.currentTarget,formData=new FormData(form),values=Array.from(formData.values()).join("");this.eventChange.emit(values)},this.preventDefaultEvents=e=>{e.preventDefault()},this.innerId=void 0,this.label="",this.labelIcon=void 0,this.labelIconFamilyClass=void 0,this.labelIconFamilyPrefix=void 0,this.placeholder="•",this.type="text",this.isDisabled=!1,this.isReadOnly=!1,this.isLoading=!1,this.isSecret=!1,this.iconFamilyClass=void 0,this.iconFamilyPrefix=void 0,this.characters=4,this.innerInputMode="text",this.hint=void 0,this.isInvalid=!1,this.isValid=!1,this.pattern=void 0}watchMTypeHandler(newValue){this.pattern="number"===newValue?"[0-9]+":"^[a-zA-Z0-9]+$"}connectedCallback(){this.pattern="number"===this.type?"[0-9]+":"^[a-zA-Z0-9]+$"}render(){return(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"d-input-pin"},this.label&&(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{htmlFor:"pinIndex0"},this.label,this.labelIcon&&(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("d-icon",{class:"d-input-pin-icon",icon:this.labelIcon,size:`var(--${_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_2__.P}input-label-font-size)`,familyClass:this.labelIconFamilyClass,familyPrefix:this.labelIconFamilyPrefix})),(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("form",{id:this.innerId,class:"d-input-pin-controls",onInput:this.formChange,onSubmit:this.preventDefaultEvents},Array.from({length:this.characters}).map(((_,index)=>(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",Object.assign({class:{"form-control":!0,"is-invalid":this.isInvalid,"is-valid":this.isValid},type:this.isSecret?"password":this.type,"aria-describedby":`${this.innerId}State`,inputMode:this.innerInputMode,id:`pinIndex${index}`,name:`pin-${index}`,maxLength:1,onInput:this.nextInput,onKeyDown:this.prevInput,onFocus:this.focusInput,onWheel:this.wheelInput,onClick:this.preventDefaultEvents,autocomplete:"off",placeholder:this.placeholder,disabled:this.isDisabled||this.isLoading,required:!0},"number"===this.type&&{min:0,max:9})))),(this.isInvalid||this.isValid)&&!this.isLoading&&(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"input-group-text",id:`${this.innerId}State`},(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("d-icon",{class:"d-input-pin-validation-icon",icon:this.isInvalid?"exclamation-circle":"check",familyClass:this.iconFamilyClass,familyPrefix:this.iconFamilyPrefix})),this.isLoading&&(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"input-group-text d-input-pin-icon"},(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"visually-hidden"},"Loading...")))),this.hint&&(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"form-text",id:`${this.innerId}Hint`},this.hint))}static get watchers(){return{type:["watchMTypeHandler"]}}}}}]);