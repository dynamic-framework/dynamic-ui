import{r as t,c as s,h as i,H as h}from"./p-c721c866.js";const e=class{constructor(i){t(this,i),this.mChange=s(this,"mChange",7),this.changeHandler=t=>{this.mChange.emit(t.target.value)},this.mId=void 0,this.name=void 0,this.label=void 0,this.value=void 0,this.isDisabled=void 0,this.isChecked=void 0,this.state=void 0}render(){return i(h,null,i("input",{type:"radio",class:{"btn-check":!0,[`${this.state}`]:!!this.state},name:this.name,id:this.mId,value:this.value,autocomplete:"off",onChange:this.changeHandler,disabled:this.isDisabled||"disabled"===this.state,checked:this.isChecked}),i("label",{class:"segment-control-item",htmlFor:this.mId},this.label))}};export{e as m_segment_control_item}