import{j as a}from"./jsx-runtime-CKrituN3.js";import{r as i}from"./index-CBqU2yxZ.js";import{c as M}from"./index-ELyB7pIJ.js";import{D as o}from"./DIcon-1scRBrNx.js";import{u as S}from"./DContext-CSLUP0I2.js";function f({theme:e="success",icon:s,iconFamilyClass:c,iconFamilyPrefix:m,iconMaterialStyle:p=!1,iconClose:t,iconCloseFamilyClass:y,iconCloseFamilyPrefix:C,iconCloseMaterialStyle:x=!1,showClose:l,onClose:q,children:V,id:g,className:n,style:v,dataAttributes:b}){const{iconMap:{alert:r,xLg:u}}=S(),d=i.useMemo(()=>s||r[e],[r,s,e]),D=i.useMemo(()=>t||u,[t,u]),F=i.useMemo(()=>({alert:!0,[`alert-${e}`]:!0,"fade show":!!l,...n&&{[n]:!0}}),[e,l,n]);return a.jsxs("div",{className:M(F),style:v,role:"alert",id:g,...b,children:[d&&a.jsx(o,{className:"alert-icon",icon:d,familyClass:c,familyPrefix:m,materialStyle:p}),a.jsx("div",{className:"alert-text",children:V}),l&&a.jsx("button",{type:"button",className:"d-close","aria-label":"Close",onClick:q,children:a.jsx(o,{icon:D,familyClass:y,familyPrefix:C,materialStyle:x})})]})}try{f.displayName="DAlert",f.__docgenInfo={description:"",displayName:"DAlert",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},theme:{defaultValue:{value:"success"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"primary"'},{value:'"secondary"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string | undefined"}},iconFamilyClass:{defaultValue:null,description:"",name:"iconFamilyClass",required:!1,type:{name:"string | undefined"}},iconFamilyPrefix:{defaultValue:null,description:"",name:"iconFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconMaterialStyle:{defaultValue:{value:"false"},description:"",name:"iconMaterialStyle",required:!1,type:{name:"boolean | undefined"}},showClose:{defaultValue:null,description:"",name:"showClose",required:!1,type:{name:"boolean | undefined"}},iconClose:{defaultValue:null,description:"",name:"iconClose",required:!1,type:{name:"string | undefined"}},iconCloseFamilyClass:{defaultValue:null,description:"",name:"iconCloseFamilyClass",required:!1,type:{name:"string | undefined"}},iconCloseFamilyPrefix:{defaultValue:null,description:"",name:"iconCloseFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconCloseMaterialStyle:{defaultValue:{value:"false"},description:"",name:"iconCloseMaterialStyle",required:!1,type:{name:"boolean | undefined"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}export{f as D};
