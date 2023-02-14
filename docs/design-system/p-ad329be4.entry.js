import{r as s,c as o,h as c,H as r}from"./p-c721c866.js";const t=class{constructor(c){s(this,c),this.mChange=o(this,"mChange",7),this.changeHandler=s=>{const o=s.target.checked;this.internalIsChecked=o,this.mChange.emit(o)},this.label=void 0,this.labelOn="On",this.labelOff="Off",this.mId=void 0,this.isChecked=void 0,this.isDisabled=!1,this.internalIsChecked=void 0}watchIsCheckedHandler(s){this.internalIsChecked=s}connectedCallback(){this.internalIsChecked=this.isChecked}render(){return c(r,{class:"form-switch-box"},c("div",{class:"form-check form-switch form-check-reverse"},c("label",{class:"form-switch-box-label",htmlFor:this.mId},c("div",{class:"d-flex gap-3 justify-content-between flex-grow-1"},c("span",{class:"form-check-label"},this.label),c("span",{class:"form-check-label fw-bold"},this.internalIsChecked?this.labelOn:this.labelOff)),c("input",{id:this.mId,onChange:s=>this.changeHandler(s),class:"form-check-input form-check-switch",type:"checkbox",role:"switch",checked:this.internalIsChecked,disabled:this.isDisabled}))))}static get watchers(){return{isChecked:["watchIsCheckedHandler"]}}};t.style='@import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap"); :host,.form-switch-box{--bs-form-check-border-width-focus:0.125rem;--bs-form-check-border-color-focus:var(--bs-accessibility);--bs-checkbox-box-border-width:3px;--bs-checkbox-box-border-radius:0.25em;display:block;width:100%;padding:var(--bs-checkbox-box-border-width)}:host:focus-within,:host.focus,.form-switch-box:focus-within,.form-switch-box.focus{border-radius:var(--bs-checkbox-box-border-radius);box-shadow:0 0 0 var(--bs-form-check-border-width-focus) var(--bs-form-check-border-color-focus)}:host .form-check,:host .form-switch,.form-switch-box .form-check,.form-switch-box .form-switch{width:100%}:host .form-check-switch:hover:not([disabled]),.form-switch-box .form-check-switch:hover:not([disabled]){--bs-form-switch-border-hover-color:var(--bs-tertiary);border:var(--bs-form-check-input-border-hover-width) solid var(--bs-form-switch-border-hover-color)}:host .form-switch-box-label,.form-switch-box .form-switch-box-label{display:flex;gap:1rem;align-items:center;justify-content:flex-start;width:100%}';export{t as m_form_switch}