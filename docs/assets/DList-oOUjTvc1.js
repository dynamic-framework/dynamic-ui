import{j as o}from"./jsx-runtime-CKrituN3.js";import{c as m}from"./index-ELyB7pIJ.js";import{r as p}from"./index-CBqU2yxZ.js";function u({children:t,className:i,style:r,active:l=!1,disabled:s=!1,theme:e,onClick:a}){const n=p.useMemo(()=>a?"button":"div",[a]);return o.jsx(n,{...n==="button"&&{onClick:a,type:"button"},className:m("list-group-item list-group-item-action",e?`list-group-item-${e}`:void 0,i,{active:l,disabled:s}),style:r,...l&&{"aria-current":!0},children:t})}try{u.displayName="DListItem",u.__docgenInfo={description:"",displayName:"DListItem",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},active:{defaultValue:{value:"false"},description:"",name:"active",required:!1,type:{name:"boolean | undefined"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"string | undefined"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}function d({children:t,className:i,style:r,flush:l=!1,numbered:s=!1,horizontal:e=!1,horizontalBreakpoint:a,dataAttributes:n}){if(l&&e)throw new Error("Horizontal and Flush props don't work together");return o.jsx("div",{className:m("list-group",{"list-group-flush":l&&!e,"list-group-numbered":s,"list-group-horizontal":e&&!a},e&&a&&`list-group-horizontal-${a}`,i),style:r,...n,children:t})}const b=Object.assign(d,{Item:u});try{d.displayName="DList",d.__docgenInfo={description:"",displayName:"DList",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},flush:{defaultValue:null,description:"",name:"flush",required:!1,type:{name:"boolean | undefined"}},numbered:{defaultValue:null,description:"",name:"numbered",required:!1,type:{name:"boolean | undefined"}},horizontal:{defaultValue:null,description:"",name:"horizontal",required:!1,type:{name:"boolean | undefined"}},horizontalBreakpoint:{defaultValue:null,description:"",name:"horizontalBreakpoint",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"md"'}]}}}}}catch{}export{b as D,u as a};
