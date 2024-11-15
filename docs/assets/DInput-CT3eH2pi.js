import{j as a}from"./jsx-runtime-CKrituN3.js";import{r as i}from"./index-CBqU2yxZ.js";import{c as _}from"./index-ELyB7pIJ.js";import{P as ae}from"./config-CUZHf55T.js";import{D as h}from"./DIcon-1scRBrNx.js";import{u as ne}from"./useProvidedRefOrCreate-B_Nl4lOm.js";function v({id:x,style:A,className:R,label:q="",labelIcon:V,labelIconFamilyClass:I,labelIconFamilyPrefix:$,labelIconMaterialStyle:C,disabled:f=!1,loading:n=!1,iconFamilyClass:le,iconFamilyPrefix:te,iconMaterialStyle:de,iconStart:m,iconStartDisabled:T,iconStartFamilyClass:L,iconStartFamilyPrefix:O,iconStartAriaLabel:w,iconStartTabIndex:z,iconStartMaterialStyle:B,iconEnd:d,iconEndDisabled:H,iconEndFamilyClass:X,iconEndFamilyPrefix:G,iconEndAriaLabel:J,iconEndTabIndex:K,iconEndMaterialStyle:Q,hint:c,size:S,invalid:r=!1,valid:u=!1,floatingLabel:l=!1,inputStart:p,inputEnd:y,value:t,placeholder:g="",dataAttributes:U,onChange:b,onIconStartClick:s,onIconEndClick:o,...D},W){const E=ne(W),M=i.useId(),e=i.useMemo(()=>x||M,[x,M]),P=i.useCallback(ee=>{b==null||b(ee.currentTarget.value)},[b]),Y=i.useCallback(()=>{s==null||s(t)},[s,t]),Z=i.useCallback(()=>{o==null||o(t)},[o,t]),F=i.useMemo(()=>[!!p&&`${e}InputStart`,!!m&&`${e}Start`,(r||u)&&!d&&!n&&`${e}State`,d&&!n&&`${e}End`,n&&`${e}Loading`,!!y&&`${e}InputEnd`,!!c&&`${e}Hint`].filter(Boolean).join(" "),[e,p,m,r,u,d,n,y,c]),j=i.useMemo(()=>a.jsx("input",{ref:E,id:e,className:_("form-control",{[`form-control-${S}`]:!!S,"is-invalid":r,"is-valid":u}),disabled:f||n,value:t,onChange:P,...(l||g)&&{placeholder:l?"":g},...F&&{"aria-describedby":F},...D}),[F,f,P,e,D,E,r,n,g,l,u,t,S]),N=i.useMemo(()=>a.jsxs("label",{htmlFor:e,children:[q,V&&a.jsx(h,{icon:V,size:`var(--${ae}label-font-size)`,familyClass:I,familyPrefix:$,materialStyle:C})]}),[e,q,V,I,$,C]),k=i.useMemo(()=>l?a.jsxs("div",{className:"form-floating",children:[j,N]}):j,[l,j,N]);return a.jsxs("div",{className:R,style:A,...U,children:[q&&!l&&N,a.jsxs("div",{className:_({"input-group":!0,"has-validation":r||u}),children:[!!p&&a.jsx("div",{className:"input-group-text",id:`${e}InputStart`,children:p}),m&&a.jsx("button",{type:"button",className:"input-group-text",id:`${e}Start`,onClick:Y,disabled:f||n||T,"aria-label":w,tabIndex:s?z:-1,children:a.jsx(h,{icon:m,familyClass:L,familyPrefix:O,materialStyle:B})}),k,d&&!n&&a.jsx("button",{type:"button",className:"input-group-text",id:`${e}End`,onClick:Z,disabled:f||n||H,"aria-label":J,tabIndex:o?K:-1,children:a.jsx(h,{icon:d,familyClass:X,familyPrefix:G,materialStyle:Q})}),n&&a.jsx("div",{className:"input-group-text",id:`${e}Loading`,children:a.jsx("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})}),!!y&&a.jsx("div",{className:"input-group-text",id:`${e}InputEnd`,children:y})]}),c&&a.jsx("div",{className:"form-text",id:`${e}Hint`,children:c})]})}const ie=i.forwardRef(v);ie.displayName="DInput";try{v.displayName="DInput",v.__docgenInfo={description:"",displayName:"DInput",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},iconFamilyClass:{defaultValue:null,description:"",name:"iconFamilyClass",required:!1,type:{name:"string | undefined"}},iconFamilyPrefix:{defaultValue:null,description:"",name:"iconFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconMaterialStyle:{defaultValue:null,description:"",name:"iconMaterialStyle",required:!1,type:{name:"boolean | undefined"}},labelIcon:{defaultValue:null,description:"",name:"labelIcon",required:!1,type:{name:"string | undefined"}},labelIconFamilyClass:{defaultValue:null,description:"",name:"labelIconFamilyClass",required:!1,type:{name:"string | undefined"}},labelIconFamilyPrefix:{defaultValue:null,description:"",name:"labelIconFamilyPrefix",required:!1,type:{name:"string | undefined"}},labelIconMaterialStyle:{defaultValue:null,description:"",name:"labelIconMaterialStyle",required:!1,type:{name:"boolean | undefined"}},iconStart:{defaultValue:null,description:"",name:"iconStart",required:!1,type:{name:"string | undefined"}},iconStartDisabled:{defaultValue:null,description:"",name:"iconStartDisabled",required:!1,type:{name:"boolean | undefined"}},iconStartFamilyClass:{defaultValue:null,description:"",name:"iconStartFamilyClass",required:!1,type:{name:"string | undefined"}},iconStartFamilyPrefix:{defaultValue:null,description:"",name:"iconStartFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconStartAriaLabel:{defaultValue:null,description:"",name:"iconStartAriaLabel",required:!1,type:{name:"string | undefined"}},iconStartTabIndex:{defaultValue:null,description:"",name:"iconStartTabIndex",required:!1,type:{name:"number | undefined"}},iconStartMaterialStyle:{defaultValue:null,description:"",name:"iconStartMaterialStyle",required:!1,type:{name:"boolean | undefined"}},iconEnd:{defaultValue:null,description:"",name:"iconEnd",required:!1,type:{name:"string | undefined"}},iconEndDisabled:{defaultValue:null,description:"",name:"iconEndDisabled",required:!1,type:{name:"boolean | undefined"}},iconEndFamilyClass:{defaultValue:null,description:"",name:"iconEndFamilyClass",required:!1,type:{name:"string | undefined"}},iconEndFamilyPrefix:{defaultValue:null,description:"",name:"iconEndFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconEndAriaLabel:{defaultValue:null,description:"",name:"iconEndAriaLabel",required:!1,type:{name:"string | undefined"}},iconEndTabIndex:{defaultValue:null,description:"",name:"iconEndTabIndex",required:!1,type:{name:"number | undefined"}},iconEndMaterialStyle:{defaultValue:null,description:"",name:"iconEndMaterialStyle",required:!1,type:{name:"boolean | undefined"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"lg"'}]}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean | undefined"}},valid:{defaultValue:null,description:"",name:"valid",required:!1,type:{name:"boolean | undefined"}},floatingLabel:{defaultValue:null,description:"",name:"floatingLabel",required:!1,type:{name:"boolean | undefined"}},inputStart:{defaultValue:null,description:"",name:"inputStart",required:!1,type:{name:"ReactNode"}},inputEnd:{defaultValue:null,description:"",name:"inputEnd",required:!1,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void) | undefined"}},onIconStartClick:{defaultValue:null,description:"",name:"onIconStartClick",required:!1,type:{name:"((value?: string | undefined) => void) | undefined"}},onIconEndClick:{defaultValue:null,description:"",name:"onIconEndClick",required:!1,type:{name:"((value?: string | undefined) => void) | undefined"}}}}}catch{}export{ie as F};