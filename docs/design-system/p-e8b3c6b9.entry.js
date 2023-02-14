import{r as o,c as r,h as t,H as s}from"./p-c721c866.js";const a=class{constructor(t){o(this,t),this.mChange=r(this,"mChange",7),this.mClick=r(this,"mClick",7),this.changeHandler=()=>{var o;this.mChange.emit(null===(o=this.htmlInput)||void 0===o?void 0:o.value)},this.clickHandler=()=>{var o;this.mClick.emit(null===(o=this.htmlInput)||void 0===o?void 0:o.value)},this.mId=void 0,this.label="",this.labelIcon=void 0,this.labelIconFamilyClass=void 0,this.labelIconFamilyPrefix=void 0,this.placeholder="",this.type="text",this.value="",this.isDisabled=!1,this.isLoading=!1,this.isReadOnly=!1,this.iconEnd=void 0,this.iconEndFamilyClass=void 0,this.iconEndFamilyPrefix=void 0,this.hint=void 0,this.hintIconStart=void 0,this.hintIconStartFamilyClass=void 0,this.hintIconStartFamilyPrefix=void 0,this.hintIconEnd=void 0,this.hintIconEndFamilyClass=void 0,this.hintIconEndFamilyPrefix=void 0,this.theme=void 0,this.variant=void 0,this.layoutDirection="vertical"}generateHostClasses(){return{"form-control-layout":!0,"form-control-layout-search":!0,[`form-control-layout-search-${this.theme}`]:!!this.theme,[`form-control-layout-${this.variant}`]:!!this.variant,"form-control-layout-horizontal":"horizontal"===this.layoutDirection,disabled:this.isDisabled||this.isLoading,readonly:this.isReadOnly}}render(){return t(s,{class:this.generateHostClasses()},this.label&&t("label",{htmlFor:this.mId},this.label,this.labelIcon&&t("m-icon",{class:"form-control-icon label-icon",icon:this.labelIcon,familyClass:this.labelIconFamilyClass,familyPrefix:this.labelIconFamilyPrefix})),t("div",{class:"form-control-input"},t("div",{class:"input-group"},t("input",{ref:o=>this.htmlInput=o,id:this.mId,type:this.type,class:"form-control",placeholder:this.placeholder,"aria-label":this.label,disabled:this.isDisabled||this.isLoading,readOnly:this.isReadOnly,value:this.value,"aria-describedby":`${this.mId}-add`,onInput:this.changeHandler}),this.iconEnd&&!!this.theme&&!this.isLoading&&t("span",{class:"input-group-text",id:`${this.mId}-end`},this.iconEnd&&t("m-icon",{class:"form-control-icon search-state",icon:this.iconEnd,familyClass:this.iconEndFamilyClass,familyPrefix:this.iconEndFamilyPrefix})),this.isLoading&&t("div",{class:"input-group-text form-control-icon"},t("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},t("span",{class:"visually-hidden"},"Loading..."))),!this.isLoading&&t("button",{class:"btn btn-text btn-search",disabled:this.isDisabled,onClick:this.clickHandler},t("m-icon",{icon:"search"}))),this.hint&&t("small",{class:"hint"},this.hintIconStart&&t("m-icon",{class:"form-control-icon hint-icon",icon:this.hintIconStart,familyClass:this.hintIconStartFamilyClass,familyPrefix:this.hintIconStartFamilyPrefix}),this.hint,this.hintIconEnd&&t("m-icon",{class:"form-control-icon hint-icon",icon:this.hintIconEnd,familyClass:this.hintIconEndFamilyClass,familyPrefix:this.hintIconEndFamilyPrefix}))))}};a.style='@import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap"); .form-control-layout-search{--bs-search-label-color:var(--bs-gray);--bs-label-icon-color:var(--bs-info);--bs-hint-color:var(--bs-gray);--bs-hint-icon-color:var(--bs-dark);--bs-button-search-color:var(--bs-dark);--bs-button-search-hover-color:var(--bs-button-search-color);--bs-button-search-disabled-color:var(--bs-gray);--bs-button-search-disabled-opacity:1;--bs-button-search-readonly-color:var(--bs-gray-light);--bs-search-state-color:var(--bs-gray);--bs-search-state-size:0.75rem;--bs-input-group-search-border-color:var(--bs-input-border-color);--bs-input-group-search-hover-border-color:var(--bs-input-hover-border-color);--bs-input-group-search-focus-border-color:var(--bs-tertiary);--bs-input-group-search-hover-box-shadow:0 0 0 0.5px var(--bs-input-hover-border-color);--bs-input-group-disabled-bg:var(--bs-light);--bs-form-control-disabled-bg:var(--bs-light);--bs-form-control-readonly-bg:var(--bs-white)}.form-control-layout-search .form-control:focus{box-shadow:none}.form-control-layout-search label,.form-control-layout-search .hint{color:var(--bs-search-label-color)}.form-control-layout-search label .form-control-icon{color:var(--bs-label-icon-color)}.form-control-layout-search .input-group .btn-search{z-index:inherit;padding-left:0;color:var(--bs-button-search-color)}.form-control-layout-search .input-group:hover{box-shadow:var(--bs-input-group-search-hover-box-shadow)}.form-control-layout-search .input-group:hover .form-control:not(:read-only)~.btn-search{color:var(--bs-button-search-hover-color)}.form-control-layout-search .input-group:focus-within:not(:hover){border-color:var(--bs-input-group-search-focus-border-color)}.form-control-layout-search .input-group:focus-within:not(:hover) .form-control{caret-color:var(--bs-input-group-search-focus-border-color)}.form-control-layout-search .form-control-icon.hint-icon{color:var(--bs-hint-icon-color)}.form-control-layout-search.disabled .input-group,.form-control-layout-search.disabled .input-group-text,.form-control-layout-search.disabled .form-control-icon:not(.label-icon):not(.hint-icon){pointer-events:none;cursor:not-allowed;background-color:var(--bs-input-group-disabled-bg)}.form-control-layout-search .form-control:disabled{background-color:var(--bs-form-control-disabled-bg)}.form-control-layout-search .btn-search:disabled{color:var(--bs-button-search-disabled-color);opacity:var(--bs-button-search-disabled-opacity)}.form-control-layout-search.readonly{pointer-events:none}.form-control-layout-search.readonly .input-group{border-color:var(--bs-white)}.form-control-layout-search.readonly .btn-search{color:var(--bs-button-search-readonly-color)}.form-control-layout-search .form-control:read-only:not(:disabled){background-color:var(--bs-form-control-readonly-bg)}.form-control-layout-search .search-state{display:flex;align-items:center;justify-content:center;font-size:var(--bs-search-state-size);color:var(--bs-search-state-color)}.form-control-layout-search.form-control-layout-prime{--bs-input-group-bg:transparent;--bs-input-group-border-radius:0;--bs-input-group-disabled-bg:transparent;--bs-form-control-disabled-bg:transparent;--bs-form-control-readonly-bg:transparent;--bs-input-group-outline-padding:3px}.form-control-layout-search.form-control-layout-prime label{display:none}.form-control-layout-search.form-control-layout-prime .form-control{padding-top:3px;padding-bottom:3px;font-size:2rem;line-height:3rem;text-align:center}.form-control-layout-search.form-control-layout-prime .input-group{border-top-color:transparent;border-right-color:transparent;border-bottom-color:var(--bs-input-border-color);border-left-color:transparent}.form-control-layout-search.form-control-layout-prime .input-group:hover{border-bottom-color:var(--bs-input-hover-border-color);box-shadow:none}.form-control-layout-search.form-control-layout-prime .input-group:focus-within,.form-control-layout-search.form-control-layout-prime .input-group:focus{--bs-input-group-border-radius:0.5rem;--bs-input-group-bg:var(--bs-white);border-color:var(--bs-input-border-color)}.form-control-layout-search.form-control-layout-prime .hint{width:100%;text-align:center}.form-control-layout-search.form-control-layout-prime.readonly .input-group{border-color:transparent}.form-control-layout-search.form-control-layout-secondary{--bs-form-label-padding-x:1rem;--bs-form-label-padding-y:.25rem;--bs-input-group-border-radius:50rem;--bs-input-group-bg:transparent;--bs-input-group-disabled-bg:transparent;--bs-form-control-disabled-bg:transparent;--bs-form-control-readonly-bg:transparent}.form-control-layout-search.form-control-layout-secondary .input-group:not(:focus-within){padding:0;border-radius:50rem}.form-control-layout-search.form-control-layout-secondary .input-group:not(:focus-within)>*{padding-top:3px;padding-bottom:3px}.form-control-layout-search.form-control-layout-secondary .input-group:focus-within,.form-control-layout-search.form-control-layout-secondary .input-group:focus{--bs-input-group-bg:var(--bs-white)}.form-control-layout-search-tertiary{--bs-search-label-color:var(--bs-tertiary);--bs-label-icon-color:var(--bs-tertiary);--bs-hint-icon-color:var(--bs-tertiary);--bs-button-search-color:var(--bs-tertiary);--bs-input-group-search-border-color:var(--bs-tertiary);--bs-input-border-color:var(--bs-tertiary);--bs-button-search-hover-color:var(--bs-tertiary-hover);--bs-input-hover-border-color:var(--bs-tertiary-hover);--bs-search-state-color:var(--bs-tertiary)}.form-control-layout-search-warning{--bs-search-label-color:var(--bs-warning);--bs-label-icon-color:var(--bs-warning);--bs-hint-icon-color:var(--bs-warning);--bs-button-search-color:var(--bs-warning);--bs-input-group-search-border-color:var(--bs-warning);--bs-input-border-color:var(--bs-warning);--bs-button-search-hover-color:var(--bs-warning-hover);--bs-input-hover-border-color:var(--bs-warning-hover);--bs-search-state-color:var(--bs-warning)}.form-control-layout-search-danger{--bs-search-label-color:var(--bs-danger);--bs-label-icon-color:var(--bs-danger);--bs-hint-icon-color:var(--bs-danger);--bs-button-search-color:var(--bs-danger);--bs-input-group-search-border-color:var(--bs-danger);--bs-input-border-color:var(--bs-danger);--bs-button-search-hover-color:var(--bs-danger-hover);--bs-input-hover-border-color:var(--bs-danger-hover);--bs-search-state-color:var(--bs-danger)}.form-control-layout-search-loading .form-control-icon.search-state{--bs-search-state-color:var(--bs-info);--bs-search-state-size:0.875rem}.form-control-layout-search-success .form-control-icon.search-state{--bs-search-state-color:var(--bs-success);--bs-search-state-size:1.5rem}';export{a as m_search}