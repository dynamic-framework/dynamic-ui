import{r as i,c as e,h as s}from"./p-0425ccc6.js";const t=class{constructor(s){i(this,s);this.mChange=e(this,"mChange",7);this.changeHandler=i=>{const{checked:e,value:s}=i.target;this.mChange.emit({isChecked:e,value:s})};this.type=undefined;this.name=undefined;this.label=undefined;this.isChecked=false;this.mId=undefined;this.isDisabled=false;this.isIndeterminate=undefined;this.value=undefined}render(){if(!this.label){return s("input",{onChange:this.changeHandler,class:"m-input-check form-check-input",type:this.type,name:this.name,id:this.mId,value:this.value,checked:this.isChecked,disabled:this.isDisabled,indeterminate:this.isIndeterminate})}return s("div",{class:"m-input-check form-check"},s("input",{onChange:this.changeHandler,class:"form-check-input",type:this.type,name:this.name,id:this.mId,value:this.value,checked:this.isChecked,disabled:this.isDisabled,indeterminate:this.isIndeterminate}),s("label",{class:"form-check-label",htmlFor:this.mId},this.label))}};export{t as m_input_check};
//# sourceMappingURL=p-a6ddc988.entry.js.map