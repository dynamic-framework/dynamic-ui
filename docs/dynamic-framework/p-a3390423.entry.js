import{r as i,c as s,h as t}from"./p-bde3ed36.js";import"./p-8fba2b25.js";import{P as e}from"./p-01fea22a.js";const n=class{constructor(t){i(this,t);this.eventClick=s(this,"eventClick",3);this.clickHandler=i=>{if(this.isStopPropagationEnabled){i.stopPropagation()}this.eventClick.emit()};this.theme="primary";this.size=undefined;this.variant=undefined;this.state=undefined;this.text="";this.iconStart=undefined;this.iconStartFamilyClass=undefined;this.iconStartFamilyPrefix=undefined;this.iconEnd=undefined;this.iconEndFamilyClass=undefined;this.iconEndFamilyPrefix=undefined;this.value=undefined;this.type="button";this.isPill=false;this.isLoading=false;this.isDisabled=false;this.isStopPropagationEnabled=true}generateStyleVariables(){if(this.isPill){return{[`--${e}btn-component-border-radius`]:`var(--${e}border-radius-pill)`,[`--${e}btn-component-lg-border-radius`]:`var(--${e}border-radius-pill)`,[`--${e}btn-component-sm-border-radius`]:`var(--${e}border-radius-pill)`}}return{}}generateClasses(){const i=this.variant?`btn-${this.variant}-${this.theme}`:`btn-${this.theme}`;return Object.assign(Object.assign({btn:true,[i]:true,[`btn-${this.size}`]:!!this.size},this.state&&this.state!=="disabled"&&{[this.state]:true}),{loading:this.isLoading})}render(){return t("button",Object.assign({class:this.generateClasses(),style:this.generateStyleVariables(),type:this.type,disabled:this.state==="disabled"||this.isLoading||this.isDisabled},this.value&&{value:this.value},{onClick:this.clickHandler}),this.iconStart&&t("d-icon",{icon:this.iconStart,familyClass:this.iconStartFamilyClass,familyPrefix:this.iconStartFamilyPrefix}),this.text&&!this.isLoading&&t("span",null,this.text),this.isLoading&&t("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},t("span",{class:"visually-hidden"},"Loading...")),this.iconEnd&&t("d-icon",{icon:this.iconEnd,familyClass:this.iconEndFamilyClass,familyPrefix:this.iconEndFamilyPrefix}))}};export{n as d_button};
//# sourceMappingURL=p-a3390423.entry.js.map