import{r as i,c as t,h as s,d as h}from"./p-bde3ed36.js";import"./p-8fba2b25.js";import{P as n}from"./p-01fea22a.js";const e=class{constructor(s){i(this,s);this.mChange=t(this,"mChange",7);this.mBlur=t(this,"mBlur",7);this.mFocus=t(this,"mFocus",7);this.mWheel=t(this,"mWheel",7);this.mIconStartClick=t(this,"mIconStartClick",7);this.mIconEndClick=t(this,"mIconEndClick",7);this.changeHandler=i=>{this.mChange.emit(i.target.value)};this.blurHandler=i=>{this.mBlur.emit(i)};this.focusHandler=i=>{this.mFocus.emit(i)};this.wheelHandler=i=>{this.mWheel.emit(i)};this.iconStartClickHandler=i=>{this.mIconStartClick.emit(i)};this.iconEndClickHandler=i=>{this.mIconEndClick.emit(i)};this.mId=undefined;this.name=undefined;this.label="";this.labelIcon=undefined;this.labelIconFamilyClass=undefined;this.labelIconFamilyPrefix=undefined;this.placeholder="";this.type="text";this.value="";this.mInputMode=undefined;this.pattern=undefined;this.isDisabled=false;this.isReadOnly=false;this.isLoading=false;this.iconFamilyClass=undefined;this.iconFamilyPrefix=undefined;this.iconStart=undefined;this.iconStartFamilyClass=undefined;this.iconStartFamilyPrefix=undefined;this.iconEnd=undefined;this.iconEndFamilyClass=undefined;this.iconEndFamilyPrefix=undefined;this.hint=undefined;this.isInvalid=false;this.isValid=false}async focusInput(){var i;(i=this.htmlInputElement)===null||i===void 0?void 0:i.focus()}async blurInput(){var i;(i=this.htmlInputElement)===null||i===void 0?void 0:i.blur()}componentWillLoad(){this.inputStart=this.el.querySelector('[slot="input-start"]');this.inputEnd=this.el.querySelector('[slot="input-end"]')}render(){return s("div",{class:"m-input"},this.label&&s("label",{htmlFor:this.mId},this.label,this.labelIcon&&s("m-icon",{class:"m-input-icon",icon:this.labelIcon,size:`var(--${n}m-input-label-font-size)`,familyClass:this.labelIconFamilyClass,familyPrefix:this.labelIconFamilyPrefix})),s("div",{class:"m-input-control"},s("div",{class:{"input-group":true,"has-validation":this.isInvalid,disabled:this.isDisabled||this.isLoading}},!!this.inputStart&&s("div",{class:"input-group-text"},s("slot",{name:"input-start"})),this.iconStart&&s("button",{type:"button",class:"input-group-text",id:`${this.mId}Start`,onClick:this.iconStartClickHandler,disabled:this.isDisabled||this.isLoading},this.iconStart&&s("m-icon",{class:"m-input-icon",icon:this.iconStart,familyClass:this.iconStartFamilyClass,familyPrefix:this.iconStartFamilyPrefix})),s("input",{ref:i=>this.htmlInputElement=i,id:this.mId,name:this.name,type:this.type,class:{"form-control":true,"is-invalid":this.isInvalid,"is-valid":this.isValid},placeholder:this.placeholder,"aria-label":this.label,disabled:this.isDisabled||this.isLoading,readOnly:this.isReadOnly,value:this.value,"aria-describedby":`${this.mId}Add ${this.mId}Hint`,inputmode:this.mInputMode,pattern:this.pattern,onInput:this.changeHandler,onBlur:this.blurHandler,onFocus:this.focusHandler,onWheel:this.wheelHandler}),(this.isInvalid||this.isValid)&&!this.iconEnd&&!this.isLoading&&s("span",{class:"input-group-text",id:`${this.mId}State`},s("m-icon",{class:"m-input-validation-icon",icon:this.isInvalid?"exclamation-circle":"check",familyClass:this.iconFamilyClass,familyPrefix:this.iconFamilyPrefix})),this.iconEnd&&!this.isLoading&&s("button",{type:"button",class:"input-group-text",id:`${this.mId}End`,onClick:this.iconEndClickHandler,disabled:this.isDisabled||this.isLoading},this.iconEnd&&s("m-icon",{class:"m-input-icon",icon:this.iconEnd,familyClass:this.iconEndFamilyClass,familyPrefix:this.iconEndFamilyPrefix})),!!this.inputEnd&&s("div",{class:"input-group-text"},s("slot",{name:"input-end"})),this.isLoading&&s("div",{class:"input-group-text m-input-icon"},s("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},s("span",{class:"visually-hidden"},"Loading...")))),this.hint&&s("div",{class:"form-text",id:`${this.mId}Hint`},this.hint)))}get el(){return h(this)}};export{e as m_input};
//# sourceMappingURL=p-7bdbc9c4.entry.js.map