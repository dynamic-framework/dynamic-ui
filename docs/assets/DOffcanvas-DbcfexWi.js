import{j as a}from"./jsx-runtime-CKrituN3.js";import{c as u}from"./index-ELyB7pIJ.js";import{P as d}from"./config-CUZHf55T.js";import{r as v}from"./index-CBqU2yxZ.js";import{D as q}from"./DIcon-1scRBrNx.js";import{u as N}from"./DContext-CSLUP0I2.js";function f({showCloseButton:e,onClose:n,children:t,className:l,style:s,iconFamilyClass:r,iconFamilyPrefix:o,icon:i,materialStyle:_=!1}){const{iconMap:{xLg:y}}=N(),b=v.useMemo(()=>i||y,[i,y]);return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:u("offcanvas-header",l),style:s,children:[a.jsx("div",{children:t}),e&&a.jsx("button",{type:"button",className:"d-close align-self-center","aria-label":"Close",onClick:n,children:a.jsx(q,{icon:b,familyClass:r,familyPrefix:o,materialStyle:_})})]}),a.jsx("div",{className:"d-offcanvas-separator"})]})}try{f.displayName="DOffcanvasHeader",f.__docgenInfo={description:"",displayName:"DOffcanvasHeader",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},iconFamilyClass:{defaultValue:null,description:"",name:"iconFamilyClass",required:!1,type:{name:"string | undefined"}},iconFamilyPrefix:{defaultValue:null,description:"",name:"iconFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconMaterialStyle:{defaultValue:null,description:"",name:"iconMaterialStyle",required:!1,type:{name:"boolean | undefined"}},showCloseButton:{defaultValue:null,description:"",name:"showCloseButton",required:!1,type:{name:"boolean | undefined"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string | undefined"}},materialStyle:{defaultValue:{value:"false"},description:"",name:"materialStyle",required:!1,type:{name:"boolean | undefined"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}function c({children:e,className:n,style:t}){return a.jsx("div",{className:u("offcanvas-body",n),style:t,children:e})}try{c.displayName="DOffcanvasBody",c.__docgenInfo={description:"",displayName:"DOffcanvasBody",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}}}}}catch{}function m({actionPlacement:e,children:n,className:t,style:l}){const s=v.useMemo(()=>({"d-offcanvas-footer":!0,[`d-offcanvas-action-${e}`]:!!e}),[e]);return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"d-offcanvas-separator"}),a.jsx("div",{className:u(s,t),style:l,children:n})]})}try{m.displayName="DOffcanvasFooter",m.__docgenInfo={description:"",displayName:"DOffcanvasFooter",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},actionPlacement:{defaultValue:null,description:"",name:"actionPlacement",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"end"'},{value:'"start"'},{value:'"fill"'}]}}}}}catch{}function p({name:e,className:n,style:t,staticBackdrop:l,scrollable:s,openFrom:r="end",children:o,dataAttributes:i}){return a.jsx("div",{className:u("offcanvas portal show",{[`offcanvas-${r}`]:r},n),style:t,id:e,tabIndex:-1,"aria-labelledby":`${e}Label`,"aria-hidden":"false",...l&&{[`data-${d}backdrop`]:"static",[`data-${d}keyboard`]:"false"},...s&&{[`data-${d}scroll`]:"true",[`data-${d}keyboard`]:"false"},...i,children:o})}const O=Object.assign(p,{Header:f,Body:c,Footer:m});try{p.displayName="DOffcanvas",p.__docgenInfo={description:"",displayName:"DOffcanvas",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},staticBackdrop:{defaultValue:null,description:"",name:"staticBackdrop",required:!1,type:{name:"boolean | undefined"}},scrollable:{defaultValue:null,description:"",name:"scrollable",required:!1,type:{name:"boolean | undefined"}},openFrom:{defaultValue:null,description:"",name:"openFrom",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"end"'},{value:'"start"'},{value:'"bottom"'},{value:'"top"'}]}}}}}catch{}export{O as D};
