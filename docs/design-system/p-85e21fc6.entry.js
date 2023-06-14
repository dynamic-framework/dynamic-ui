import{r as s,c as t,h as a,d as i}from"./p-0425ccc6.js";import{P as o}from"./p-01fea22a.js";const e=class{constructor(a){s(this,a);this.mClose=t(this,"mClose",7);this.closeHandler=()=>{this.mClose.emit()};this.name=undefined;this.isStatic=undefined;this.isScrollable=undefined;this.showCloseButton=undefined;this.openFrom="end";this.footerActionPlacement="fill";this.isInline=false}componentWillLoad(){this.header=!!this.el.querySelector('[slot="header"]');this.body=!!this.el.querySelector('[slot="body"]');this.footer=!!this.el.querySelector('[slot="footer"]')}render(){return a("div",Object.assign({class:`offcanvas offcanvas-${this.openFrom} show`,id:this.name,tabindex:"-1","aria-labelledby":`${this.name}Label`,"aria-hidden":"false"},this.isStatic&&{[`data-${o}backdrop`]:"static",[`data-${o}keyboard`]:"false"},this.isScrollable&&{[`data-${o}scroll`]:"true",[`data-${o}keyboard`]:"false"},{style:Object.assign({},this.isInline&&{position:"absolute"})}),(this.header||this.showCloseButton)&&a("div",{class:"offcanvas-header"},this.header&&a("div",{class:"m-offcanvas-slot"},a("slot",{name:"header"})),this.showCloseButton&&a("button",{type:"button",class:"m-offcanvas-close","aria-label":"Close",onClick:this.closeHandler},a("m-icon",{icon:"x-lg"}))),this.body&&a("div",{class:"m-offcanvas-slot offcanvas-body"},a("slot",{name:"body"})),this.footer&&a("div",{class:`m-offcanvas-slot m-offcanvas-footer m-offcanvas-action-${this.footerActionPlacement}`},a("slot",{name:"footer"})))}get el(){return i(this)}};export{e as m_offcanvas};
//# sourceMappingURL=p-85e21fc6.entry.js.map