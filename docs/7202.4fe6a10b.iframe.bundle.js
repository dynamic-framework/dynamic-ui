"use strict";(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[7202],{"../dynamic-ui/dist/esm/d-alert.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{d_alert:()=>DAlert});var _index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../dynamic-ui/dist/esm/index-a19c3827.js"),_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../dynamic-ui/dist/esm/store-fc6c92fd.js"),__webpack_require__("../dynamic-ui/dist/esm/component-config-025f7932.js"));const ALERT_TYPE_ICON={warning:"exclamation-circle",danger:"exclamation-triangle",success:"check-circle",info:"info-circle",light:"info-circle",dark:"info-circle"},DAlert=class{constructor(hostRef){(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.eventClose=(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"eventClose",7),this.clickHandler=()=>{this.eventClose.emit()},this.type="light",this.icon=void 0,this.iconFamilyClass=void 0,this.iconFamilyPrefix=void 0,this.showIcon=!1,this.showClose=void 0}generateClasses(){return{[`alert alert-${this.type}`]:!0,"fade show":!!this.showClose}}getIcon(){return this.icon||ALERT_TYPE_ICON[this.type]||""}generateStyleVariables(){return Object.assign(Object.assign({},"light"===this.type?{[`--${_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_2__.P}alert-component-icon-color`]:`var(--${_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_2__.P}secondary)`}:{}),{[`--${_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_2__.P}alert-component-separator-opacity`]:"0.3"})}render(){return(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:this.generateClasses(),style:this.generateStyleVariables(),role:"alert"},(this.showIcon||this.icon)&&(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("d-icon",{class:"alert-icon",icon:this.getIcon(),familyClass:this.iconFamilyClass,familyPrefix:this.iconFamilyPrefix}),(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"alert-text"},(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)),this.showClose&&(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"alert-separator"}),this.showClose&&(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:this.clickHandler},(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("d-icon",{class:"alert-close-icon",icon:"x-lg",familyClass:this.iconFamilyClass,familyPrefix:this.iconFamilyPrefix})))}}}}]);