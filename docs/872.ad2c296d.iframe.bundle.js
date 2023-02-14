"use strict";(self.webpackChunk_modyo_dynamic_modyo_design_system_react=self.webpackChunk_modyo_dynamic_modyo_design_system_react||[]).push([[872],{"../modyo-design-system/dist/esm/m-form-switch.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{m_form_switch:()=>MFormSwitch});__webpack_require__("../../node_modules/.pnpm/core-js@3.26.0/node_modules/core-js/modules/es.object.define-property.js");var _index_39190b44_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../modyo-design-system/dist/esm/index-39190b44.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var MFormSwitch=function(){function MFormSwitch(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,MFormSwitch),(0,_index_39190b44_js__WEBPACK_IMPORTED_MODULE_1__.r)(this,hostRef),this.mChange=(0,_index_39190b44_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"mChange",7),this.changeHandler=function(event){var value=event.target.checked;_this.internalIsChecked=value,_this.mChange.emit(value)},this.label=void 0,this.labelOn="On",this.labelOff="Off",this.mId=void 0,this.isChecked=void 0,this.isDisabled=!1,this.internalIsChecked=void 0}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(MFormSwitch,[{key:"watchIsCheckedHandler",value:function watchIsCheckedHandler(newValue){this.internalIsChecked=newValue}},{key:"connectedCallback",value:function connectedCallback(){this.internalIsChecked=this.isChecked}},{key:"render",value:function render(){var _this2=this;return(0,_index_39190b44_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_39190b44_js__WEBPACK_IMPORTED_MODULE_1__.H,{class:"form-switch-box"},(0,_index_39190b44_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"form-check form-switch form-check-reverse"},(0,_index_39190b44_js__WEBPACK_IMPORTED_MODULE_1__.h)("label",{class:"form-switch-box-label",htmlFor:this.mId},(0,_index_39190b44_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"d-flex gap-3 justify-content-between flex-grow-1"},(0,_index_39190b44_js__WEBPACK_IMPORTED_MODULE_1__.h)("span",{class:"form-check-label"},this.label),(0,_index_39190b44_js__WEBPACK_IMPORTED_MODULE_1__.h)("span",{class:"form-check-label fw-bold"},this.internalIsChecked?this.labelOn:this.labelOff)),(0,_index_39190b44_js__WEBPACK_IMPORTED_MODULE_1__.h)("input",{id:this.mId,onChange:function onChange(event){return _this2.changeHandler(event)},class:"form-check-input form-check-switch",type:"checkbox",role:"switch",checked:this.internalIsChecked,disabled:this.isDisabled}))))}}],[{key:"watchers",get:function get(){return{isChecked:["watchIsCheckedHandler"]}}}]),MFormSwitch}();MFormSwitch.style='@import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap"); :host,.form-switch-box{--bs-form-check-border-width-focus:0.125rem;--bs-form-check-border-color-focus:var(--bs-accessibility);--bs-checkbox-box-border-width:3px;--bs-checkbox-box-border-radius:0.25em;display:block;width:100%;padding:var(--bs-checkbox-box-border-width)}:host:focus-within,:host.focus,.form-switch-box:focus-within,.form-switch-box.focus{border-radius:var(--bs-checkbox-box-border-radius);box-shadow:0 0 0 var(--bs-form-check-border-width-focus) var(--bs-form-check-border-color-focus)}:host .form-check,:host .form-switch,.form-switch-box .form-check,.form-switch-box .form-switch{width:100%}:host .form-check-switch:hover:not([disabled]),.form-switch-box .form-check-switch:hover:not([disabled]){--bs-form-switch-border-hover-color:var(--bs-tertiary);border:var(--bs-form-check-input-border-hover-width) solid var(--bs-form-switch-border-hover-color)}:host .form-switch-box-label,.form-switch-box .form-switch-box-label{display:flex;gap:1rem;align-items:center;justify-content:flex-start;width:100%}'}}]);