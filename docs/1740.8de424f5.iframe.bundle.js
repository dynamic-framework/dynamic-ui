"use strict";(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[1740],{"../dynamic-ui/dist/esm/d-icon.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{d_icon:()=>DIcon});var _index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../dynamic-ui/dist/esm/index-a19c3827.js"),_store_fc6c92fd_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../dynamic-ui/dist/esm/store-fc6c92fd.js"),_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../dynamic-ui/dist/esm/component-config-025f7932.js");const DIcon=class{constructor(hostRef){(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icon=void 0,this.theme=void 0,this.innerClass=void 0,this.size="1.5rem",this.isLoading=!1,this.loadingDuration=1.8,this.hasCircle=!1,this.circleSize=`calc(var(--${_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_2__.P}icon-component-size) * 1)`,this.color=void 0,this.backgroundColor=void 0,this.familyClass=_store_fc6c92fd_js__WEBPACK_IMPORTED_MODULE_1__.a.iconFamilyClass,this.familyPrefix=_store_fc6c92fd_js__WEBPACK_IMPORTED_MODULE_1__.a.iconFamilyPrefix}getColorStyle(){return this.color?{[`--${_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_2__.P}icon-component-color`]:this.color}:this.theme?{[`--${_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_2__.P}icon-component-color`]:`var(--${_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_2__.P}${this.theme})`}:{}}getBackgroundStyle(){return this.backgroundColor?{[`--${_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_2__.P}icon-component-bg-color`]:this.backgroundColor}:this.hasCircle?this.theme?{[`--${_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_2__.P}icon-component-bg-color`]:`rgba(var(--${_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_2__.P}${this.theme}-rgb), 0.1)`}:{[`--${_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_2__.P}icon-component-bg-color`]:`rgba(var(--${_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_2__.P}body-color-rgb), 0.1)`}:{}}getCircleSizeStyle(){return this.hasCircle?{[`--${_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_2__.P}icon-component-padding`]:this.circleSize}:{[`--${_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_2__.P}icon-component-padding`]:"0"}}generateStyleVariables(){return Object.assign(Object.assign(Object.assign({[`--${_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_2__.P}icon-component-size`]:this.size,[`--${_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_2__.P}icon-component-loading-duration`]:`${this.loadingDuration}s`},this.getColorStyle()),this.getBackgroundStyle()),this.getCircleSizeStyle())}generateClasses(){return{"d-icon":!0,[`${this.innerClass}`]:!!this.innerClass,[this.familyClass||_store_fc6c92fd_js__WEBPACK_IMPORTED_MODULE_1__.a.iconFamilyClass]:!0,[`${this.familyPrefix||_store_fc6c92fd_js__WEBPACK_IMPORTED_MODULE_1__.a.iconFamilyPrefix}${this.icon}`]:!0,"d-icon-loading":this.isLoading}}render(){return(0,_index_a19c3827_js__WEBPACK_IMPORTED_MODULE_0__.h)("i",{class:this.generateClasses(),style:this.generateStyleVariables()})}}}}]);