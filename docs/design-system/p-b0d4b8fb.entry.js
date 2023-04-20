import{r as t,c as o,h as s}from"./p-c721c866.js";const r=class{constructor(s){t(this,s),this.mChange=o(this,"mChange",7),this.changeHandler=t=>{this.mChange.emit(t.target.value)},this.mId=void 0,this.name=void 0,this.value=void 0,this.label=void 0,this.text=void 0,this.subtext="",this.icon=void 0,this.iconFamilyClass=void 0,this.iconFamilyPrefix=void 0,this.isChecked=void 0,this.state=void 0,this.white=!1}render(){return s("label",{class:{shortcut:!0,[`${this.state}`]:!!this.state},htmlFor:this.mId},s("input",{id:this.mId,type:"radio",name:this.name,value:this.value,checked:this.isChecked,onChange:this.changeHandler,disabled:"disabled"===this.state}),(this.text||this.label)&&!this.icon&&s("div",{class:this.white?"shortcut-toggle-white":"shortcut-toggle"},this.label&&s("span",{class:"shortcut-label d-block"},this.label),this.text&&s("div",{class:"d-block small"},s("span",{class:"shortcut-text"},this.text," "),s("span",{class:"shortcut-subtext"},this.subtext))),this.icon&&s("div",{class:"shortcut-toggle"},s("m-icon",{class:"shortcut-icon",icon:this.icon,familyClass:this.iconFamilyClass,familyPrefix:this.iconFamilyPrefix})))}};r.style='@import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap"); .shortcut{width:100%;padding:3px;border:3px solid transparent;border-radius:0.7rem}.shortcut input[type=radio]{position:absolute;opacity:0}.shortcut input[type=radio]~.shortcut-toggle{padding:12px;background-color:rgba(var(--bs-tertiary-rgb), 0.07);border:none;border-radius:0.5rem}.shortcut input[type=radio]~.shortcut-toggle-white{padding:calc(12px - 1px);background-color:var(--bs-white);border:1px solid var(--bs-light);border-radius:0.5rem}.shortcut .shortcut-toggle,.shortcut .shortcut-toggle-white{display:flex;flex-direction:column;align-items:center;justify-content:center;transition:box-shadow 0.3s ease-in-out}.shortcut .shortcut-toggle .shortcut-label,.shortcut .shortcut-toggle-white .shortcut-label{font-size:0.625rem;line-height:0.756rem;color:var(--bs-tertiary)}.shortcut .shortcut-toggle .shortcut-text,.shortcut .shortcut-toggle-white .shortcut-text{font-weight:600;line-height:1.375rem;color:var(--bs-gray)}.shortcut .shortcut-toggle .shortcut-subtext,.shortcut .shortcut-toggle-white .shortcut-subtext{font-weight:300;line-height:1.375rem;color:var(--bs-gray)}.shortcut .shortcut-toggle .shortcut-icon,.shortcut .shortcut-toggle-white .shortcut-icon{color:var(--bs-tertiary)}.shortcut input[type=radio]:checked~.shortcut-toggle,.shortcut input[type=radio]:checked~.shortcut-toggle-white{background-color:var(--bs-tertiary)}.shortcut input[type=radio]:checked~.shortcut-toggle .shortcut-label,.shortcut input[type=radio]:checked~.shortcut-toggle-white .shortcut-label{color:var(--bs-gray-light)}.shortcut input[type=radio]:checked~.shortcut-toggle .shortcut-text,.shortcut input[type=radio]:checked~.shortcut-toggle-white .shortcut-text{color:var(--bs-white)}.shortcut input[type=radio]:checked~.shortcut-toggle .shortcut-icon,.shortcut input[type=radio]:checked~.shortcut-toggle-white .shortcut-icon{color:var(--bs-white)}.shortcut:focus,.shortcut:focus-within,.shortcut.focus{border-color:var(--bs-accessibility)}.shortcut:hover .shortcut-toggle,.shortcut:hover .shortcut-toggle-white,.shortcut.hover .shortcut-toggle,.shortcut.hover .shortcut-toggle-white{box-shadow:0 0 0 3px rgba(var(--bs-tertiary-rgb), 0.03)}.shortcut input[type=radio]:active~.shortcut-toggle,.shortcut input[type=radio]:active~.shortcut-toggle-white,.shortcut.active input[type=radio]~.shortcut-toggle,.shortcut.active input[type=radio]~.shortcut-toggle-white{box-shadow:inset 0 0 0 8px rgba(var(--bs-tertiary-rgb), 0.07)}.shortcut.disabled{pointer-events:none;cursor:not-allowed;opacity:0.3}';export{r as m_shortcut_toggle}