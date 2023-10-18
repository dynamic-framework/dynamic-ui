import{r as t,c as s,h as e}from"./p-bde3ed36.js";import"./p-8fba2b25.js";import{P as i}from"./p-01fea22a.js";const a={warning:"exclamation-circle",danger:"exclamation-triangle",success:"check-circle",info:"info-circle",light:"info-circle",dark:"info-circle"};const r=class{constructor(e){t(this,e);this.eventClose=s(this,"eventClose",7);this.clickHandler=()=>{this.eventClose.emit()};this.type="light";this.icon=undefined;this.iconFamilyClass=undefined;this.iconFamilyPrefix=undefined;this.showIcon=false;this.showClose=undefined}generateClasses(){return{[`alert alert-${this.type}`]:true,"fade show":!!this.showClose}}getIcon(){return this.icon||a[this.type]||""}generateStyleVariables(){return Object.assign(Object.assign({},this.type==="light"?{[`--${i}alert-component-icon-color`]:`var(--${i}secondary)`}:{}),{[`--${i}alert-component-separator-opacity`]:"0.3"})}render(){return e("div",{class:this.generateClasses(),style:this.generateStyleVariables(),role:"alert"},(this.showIcon||this.icon)&&e("d-icon",{class:"alert-icon",icon:this.getIcon(),familyClass:this.iconFamilyClass,familyPrefix:this.iconFamilyPrefix}),e("div",{class:"alert-text"},e("slot",null)),this.showClose&&e("div",{class:"alert-separator"}),this.showClose&&e("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:this.clickHandler},e("d-icon",{class:"alert-close-icon",icon:"x-lg",familyClass:this.iconFamilyClass,familyPrefix:this.iconFamilyPrefix})))}};export{r as d_alert};
//# sourceMappingURL=p-42df9103.entry.js.map