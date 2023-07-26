"use strict";(self.webpackChunk_modyo_dynamic_modyo_design_system_react=self.webpackChunk_modyo_dynamic_modyo_design_system_react||[]).push([[3872],{"../modyo-design-system/dist/esm/m-quick-action-button.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{m_quick_action_button:()=>MQuickActionButton});var _index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../modyo-design-system/dist/esm/index-c7f2daf2.js"),_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../modyo-design-system/dist/esm/store-d1bbe9e1.js"),__webpack_require__("../modyo-design-system/dist/esm/component-config-025f7932.js"));const MQuickActionButton=class{constructor(hostRef){(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.mClick=(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"mClick",7),this.mClickSecondary=(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"mClickSecondary",7),this.globalClickHandler=()=>{this.actionLinkText||this.mClick.emit()},this.actionLinkClickHandler=event=>{event.stopPropagation(),this.actionLinkText&&this.mClick.emit()},this.secondActionLinkClickHandler=event=>{event.stopPropagation(),this.mClickSecondary.emit()},this.line1=void 0,this.line2=void 0,this.actionLinkText=void 0,this.actionLinkTheme="secondary",this.actionIcon="chevron-right",this.secondaryActionIcon=void 0,this.actionIconFamilyClass=void 0,this.actionIconFamilyPrefix=void 0,this.representativeImage=void 0,this.representativeIcon=void 0,this.representativeIconTheme="secondary",this.representativeIconHasCircle=!1,this.representativeIconFamilyClass=void 0,this.representativeIconFamilyPrefix=void 0}getTag(){return this.actionLinkText?"div":"button"}render(){const Tag=this.getTag();return(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.h)(Tag,Object.assign({class:"m-quick-action-button"},!this.actionLinkText&&{onClick:this.globalClickHandler}),this.representativeIcon&&(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.h)("m-icon",{class:"m-quick-action-button-representative-icon",size:this.representativeIconHasCircle?`var(--${_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_2__.P}m-quick-action-button-representative-icon-size)`:`var(--${_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_2__.P}m-quick-action-button-representative-image-size)`,icon:this.representativeIcon,hasCircle:this.representativeIconHasCircle,theme:this.representativeIconTheme,familyClass:this.representativeIconFamilyClass,familyPrefix:this.representativeIconFamilyPrefix}),this.representativeImage&&(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.h)("img",{class:"m-quick-action-button-representative-image",src:this.representativeImage,alt:""}),(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"m-quick-action-button-content"},(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"m-quick-action-button-text"},(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"m-quick-action-button-line1"},this.line1),(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.h)("small",{class:"m-quick-action-button-line2"},this.line2))),this.secondaryActionIcon&&(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.h)("m-button",{class:"m-quick-action-button-secondary-action-link",type:"button",variant:"link",iconStart:this.secondaryActionIcon,iconStartFamilyClass:this.actionIconFamilyClass,iconStartFamilyPrefix:this.actionIconFamilyPrefix,theme:this.actionLinkTheme,onMClick:this.secondActionLinkClickHandler}),this.actionLinkText?(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.h)("m-button",{class:"m-quick-action-button-action-link",type:"button",variant:"link",size:"sm",theme:this.actionLinkTheme,text:this.actionLinkText,onMClick:this.actionLinkClickHandler}):(0,_index_c7f2daf2_js__WEBPACK_IMPORTED_MODULE_0__.h)("m-icon",{class:"m-quick-action-button-action-icon",icon:this.actionIcon,size:`var(--${_component_config_025f7932_js__WEBPACK_IMPORTED_MODULE_2__.P}m-quick-action-button-action-icon-size)`,familyClass:this.actionIconFamilyClass,familyPrefix:this.actionIconFamilyPrefix}))}}}}]);