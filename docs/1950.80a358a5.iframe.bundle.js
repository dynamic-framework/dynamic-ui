"use strict";(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[1950],{"../dynamic-ui/dist/esm/d-progress.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{d_progress:()=>DProgress});var _index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../dynamic-ui/dist/esm/index-a19c3827.js");const DProgress=class{constructor(hostRef){(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.currentValue=void 0,this.minValue=0,this.maxValue=100,this.hideCurrentValue=!1,this.enableStripedAnimation=!1}formatProgress(){return`${this.currentValue}%`}generateClasses(){return{"progress-bar":!0,"progress-bar-striped progress-bar-animated":this.enableStripedAnimation}}render(){return(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"progress"},(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:this.generateClasses(),role:"progressbar","aria-label":"Progress bar",style:{width:`${this.currentValue}%`},"aria-valuenow":this.currentValue,"aria-valuemin":this.minValue,"aria-valuemax":this.maxValue},!this.hideCurrentValue&&this.formatProgress()))}}}}]);