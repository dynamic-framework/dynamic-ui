"use strict";(self.webpackChunk_modyo_dynamic_modyo_design_system_react=self.webpackChunk_modyo_dynamic_modyo_design_system_react||[]).push([[9639],{"../modyo-design-system/dist/esm/m-form-switch.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{m_form_switch:()=>MFormSwitch});var _index_39190b44_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../modyo-design-system/dist/esm/index-39190b44.js");const MFormSwitch=class{constructor(hostRef){(0,_index_39190b44_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.mChange=(0,_index_39190b44_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"mChange",7),this.changeHandler=event=>{const value=event.target.checked;this.internalIsChecked=value,this.mChange.emit(value)},this.label=void 0,this.labelOn="On",this.labelOff="Off",this.mId=void 0,this.isChecked=void 0,this.isDisabled=!1,this.internalIsChecked=void 0}watchIsCheckedHandler(newValue){this.internalIsChecked=newValue}connectedCallback(){this.internalIsChecked=this.isChecked}render(){return(0,_index_39190b44_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_39190b44_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:"form-switch-box"},(0,_index_39190b44_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"form-check form-switch form-check-reverse",onClick:e=>e.stopPropagation()},(0,_index_39190b44_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{class:"form-switch-box-label",htmlFor:this.mId},(0,_index_39190b44_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"d-flex gap-3 justify-content-between align-items-center flex-grow-1"},(0,_index_39190b44_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"form-check-label"},this.label),(0,_index_39190b44_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"form-check-label fw-bold"},this.internalIsChecked?this.labelOn:this.labelOff)),(0,_index_39190b44_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{id:this.mId,onChange:event=>this.changeHandler(event),class:"form-check-input form-check-switch",type:"checkbox",role:"switch",checked:this.internalIsChecked,disabled:this.isDisabled}))))}static get watchers(){return{isChecked:["watchIsCheckedHandler"]}}};MFormSwitch.style='@import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap"); :host,.form-switch-box{--bs-form-check-border-width-focus:0.125rem;--bs-form-check-border-color-focus:var(--bs-accessibility);--bs-checkbox-box-border-width:3px;--bs-checkbox-box-border-radius:0.25em;display:block;width:100%;padding:var(--bs-checkbox-box-border-width)}:host:focus-within,:host.focus,.form-switch-box:focus-within,.form-switch-box.focus{border-radius:var(--bs-checkbox-box-border-radius);box-shadow:0 0 0 var(--bs-form-check-border-width-focus) var(--bs-form-check-border-color-focus)}:host .form-check,:host .form-switch,.form-switch-box .form-check,.form-switch-box .form-switch{width:100%;padding-left:0;text-align:left}:host .form-check-switch,.form-switch-box .form-check-switch{flex:0 0 2.5em}:host .form-check-switch:hover:not([disabled]),.form-switch-box .form-check-switch:hover:not([disabled]){--bs-form-switch-border-hover-color:var(--bs-tertiary);border:var(--bs-form-check-input-border-hover-width) solid var(--bs-form-switch-border-hover-color)}:host .form-switch-box-label,.form-switch-box .form-switch-box-label{display:flex;gap:1rem;align-items:center;justify-content:flex-start;width:100%}'}}]);