import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as c}from"./index-CBqU2yxZ.js";import{c as u}from"./index-ELyB7pIJ.js";import{P as v}from"./config-CUZHf55T.js";import{D as x}from"./DIcon-1scRBrNx.js";import{u as V}from"./DContext-CSLUP0I2.js";function p({showCloseButton:a,onClose:n,children:l,className:s,style:t,iconFamilyClass:o,iconFamilyPrefix:d,icon:r,materialStyle:i=!1}){const{iconMap:{xLg:m}}=V(),f=c.useMemo(()=>r||m,[r,m]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:u("modal-header",s),style:t,children:[e.jsx("div",{children:l}),a&&e.jsx("button",{type:"button",className:"d-close align-self-center","aria-label":"Close",onClick:n,children:e.jsx(x,{icon:f,familyClass:o,familyPrefix:d,materialStyle:i})})]}),e.jsx("div",{className:"d-modal-separator"})]})}try{p.displayName="DModalHeader",p.__docgenInfo={description:"",displayName:"DModalHeader",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},iconFamilyClass:{defaultValue:null,description:"",name:"iconFamilyClass",required:!1,type:{name:"string | undefined"}},iconFamilyPrefix:{defaultValue:null,description:"",name:"iconFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconMaterialStyle:{defaultValue:null,description:"",name:"iconMaterialStyle",required:!1,type:{name:"boolean | undefined"}},showCloseButton:{defaultValue:null,description:"",name:"showCloseButton",required:!1,type:{name:"boolean | undefined"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string | undefined"}},materialStyle:{defaultValue:{value:"false"},description:"",name:"materialStyle",required:!1,type:{name:"boolean | undefined"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}function y({children:a,className:n,style:l}){return e.jsx("div",{className:u("modal-body",n),style:l,children:a})}try{y.displayName="DModalBody",y.__docgenInfo={description:"",displayName:"DModalBody",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}}}}}catch{}function _({className:a,style:n,actionPlacement:l,children:s}){const t=c.useMemo(()=>({"modal-footer":!0,[`d-modal-action-${l}`]:!!l}),[l]);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"d-modal-separator"}),e.jsx("div",{className:u(t,a),style:n,children:s})]})}try{_.displayName="DModalFooter",_.__docgenInfo={description:"",displayName:"DModalFooter",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},actionPlacement:{defaultValue:null,description:"",name:"actionPlacement",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"center"'},{value:'"end"'},{value:'"start"'},{value:'"fill"'}]}}}}}catch{}function b({name:a,className:n,style:l,staticBackdrop:s,scrollable:t,centered:o,fullScreen:d,fullScreenFrom:r,size:i,children:m,dataAttributes:f}){const g=c.useMemo(()=>d?r?`modal-fullscreen-${r}-down`:"modal-fullscreen":"",[r,d]),q=c.useMemo(()=>({"modal-dialog":!0,"modal-dialog-centered":!!o,"modal-dialog-scrollable":!!t,[g]:!!d,...i&&{[`modal-${i}`]:!0}}),[g,o,d,t,i]);return e.jsx("div",{className:u("modal portal fade show",n),id:a,tabIndex:-1,"aria-labelledby":`${a}Label`,"aria-hidden":"false",style:l,...s&&{[`data-${v}backdrop`]:"static",[`data-${v}keyboard`]:"false"},...f,children:e.jsx("div",{className:u(q),children:e.jsx("div",{className:"modal-content",children:m})})})}const S=Object.assign(b,{Header:p,Body:y,Footer:_});try{b.displayName="DModal",b.__docgenInfo={description:"",displayName:"DModal",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},staticBackdrop:{defaultValue:null,description:"",name:"staticBackdrop",required:!1,type:{name:"boolean | undefined"}},scrollable:{defaultValue:null,description:"",name:"scrollable",required:!1,type:{name:"boolean | undefined"}},centered:{defaultValue:null,description:"",name:"centered",required:!1,type:{name:"boolean | undefined"}},fullScreen:{defaultValue:null,description:"",name:"fullScreen",required:!1,type:{name:"boolean | undefined"}},fullScreenFrom:{defaultValue:null,description:"",name:"fullScreenFrom",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"md"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'}]}}}}}catch{}export{S as D};
