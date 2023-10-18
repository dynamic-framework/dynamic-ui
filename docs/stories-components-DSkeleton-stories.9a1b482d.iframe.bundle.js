/*! For license information please see stories-components-DSkeleton-stories.9a1b482d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[8795],{"./src/stories/components/DSkeleton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DSkeleton_stories});var react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__assign=function(){return __assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};var SVG=function(_a){var animate=_a.animate,animateBegin=_a.animateBegin,backgroundColor=_a.backgroundColor,backgroundOpacity=_a.backgroundOpacity,baseUrl=_a.baseUrl,children=_a.children,foregroundColor=_a.foregroundColor,foregroundOpacity=_a.foregroundOpacity,gradientRatio=_a.gradientRatio,gradientDirection=_a.gradientDirection,uniqueKey=_a.uniqueKey,interval=_a.interval,rtl=_a.rtl,speed=_a.speed,style=_a.style,title=_a.title,beforeMask=_a.beforeMask,props=function __rest(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t}(_a,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),fixedId=uniqueKey||Math.random().toString(36).substring(6),idClip=fixedId+"-diff",idGradient=fixedId+"-animated-diff",idAria=fixedId+"-aria",rtlStyle=rtl?{transform:"scaleX(-1)"}:null,keyTimes="0; "+interval+"; 1",dur=speed+"s",gradientTransform="top-bottom"===gradientDirection?"rotate(90)":void 0;return(0,react.createElement)("svg",__assign({"aria-labelledby":idAria,role:"img",style:__assign(__assign({},style),rtlStyle)},props),title?(0,react.createElement)("title",{id:idAria},title):null,beforeMask&&(0,react.isValidElement)(beforeMask)?beforeMask:null,(0,react.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+baseUrl+"#"+idClip+")",style:{fill:"url("+baseUrl+"#"+idGradient+")"}}),(0,react.createElement)("defs",null,(0,react.createElement)("clipPath",{id:idClip},children),(0,react.createElement)("linearGradient",{id:idGradient,gradientTransform},(0,react.createElement)("stop",{offset:"0%",stopColor:backgroundColor,stopOpacity:backgroundOpacity},animate&&(0,react.createElement)("animate",{attributeName:"offset",values:-gradientRatio+"; "+-gradientRatio+"; 1",keyTimes,dur,repeatCount:"indefinite",begin:animateBegin})),(0,react.createElement)("stop",{offset:"50%",stopColor:foregroundColor,stopOpacity:foregroundOpacity},animate&&(0,react.createElement)("animate",{attributeName:"offset",values:-gradientRatio/2+"; "+-gradientRatio/2+"; "+(1+gradientRatio/2),keyTimes,dur,repeatCount:"indefinite",begin:animateBegin})),(0,react.createElement)("stop",{offset:"100%",stopColor:backgroundColor,stopOpacity:backgroundOpacity},animate&&(0,react.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+gradientRatio),keyTimes,dur,repeatCount:"indefinite",begin:animateBegin})))))};SVG.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,gradientDirection:"left-right",id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading...",beforeMask:null};var ContentLoader=function(props){return props.children?(0,react.createElement)(SVG,__assign({},props)):(0,react.createElement)(ReactContentLoaderFacebook,__assign({},props))},ReactContentLoaderFacebook=function(props){return(0,react.createElement)(ContentLoader,__assign({viewBox:"0 0 476 124"},props),(0,react.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,react.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,react.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,react.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,react.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,react.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};const react_content_loader_es=ContentLoader;var dist=__webpack_require__("../dynamic-ui/dist/index.js"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function DSkeleton({speed=2,viewBox,backgroundColor,foregroundColor,children}){const innerBackgroundColor=(0,react.useMemo)((()=>{if(backgroundColor)return backgroundColor;return getComputedStyle(document.documentElement).getPropertyValue(`--${dist.k2}secondary-100`)}),[backgroundColor]),innerForegroundColor=(0,react.useMemo)((()=>{if(foregroundColor)return foregroundColor;return getComputedStyle(document.documentElement).getPropertyValue(`--${dist.k2}gray-100`)}),[foregroundColor]);return(0,jsx_runtime.jsx)(react_content_loader_es,{speed,viewBox,backgroundColor:innerBackgroundColor,foregroundColor:innerForegroundColor,children})}DSkeleton.displayName="DSkeleton";try{DSkeleton.displayName="DSkeleton",DSkeleton.__docgenInfo={description:"",displayName:"DSkeleton",props:{speed:{defaultValue:{value:"2"},description:"",name:"speed",required:!1,type:{name:"number | undefined"}},viewBox:{defaultValue:null,description:"",name:"viewBox",required:!1,type:{name:"string | undefined"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string | undefined"}},foregroundColor:{defaultValue:null,description:"",name:"foregroundColor",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DSkeleton.tsx#DSkeleton"]={docgenInfo:DSkeleton.__docgenInfo,name:"DSkeleton",path:"src/components/DSkeleton.tsx#DSkeleton"})}catch(__react_docgen_typescript_loader_error){}const DSkeleton_stories={title:"Design System/Components/Skeleton",component:DSkeleton,argTypes:{speed:{control:"number",type:"number"},viewBox:{control:"text",type:"string"},backgroundColor:{control:"color",type:"string"},foregroundColor:{control:"color",type:"string"}}},Default={render:args=>(0,jsx_runtime.jsxs)(DSkeleton,{...args,children:[(0,jsx_runtime.jsx)("rect",{x:"48",y:"8",rx:"3",ry:"3",width:"88",height:"6"}),(0,jsx_runtime.jsx)("rect",{x:"48",y:"26",rx:"3",ry:"3",width:"52",height:"6"}),(0,jsx_runtime.jsx)("rect",{x:"0",y:"56",rx:"3",ry:"3",width:"410",height:"6"}),(0,jsx_runtime.jsx)("rect",{x:"0",y:"72",rx:"3",ry:"3",width:"380",height:"6"}),(0,jsx_runtime.jsx)("rect",{x:"0",y:"88",rx:"3",ry:"3",width:"178",height:"6"}),(0,jsx_runtime.jsx)("circle",{cx:"20",cy:"20",r:"20"})]}),args:{}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: args => <DSkeleton {...args}>\n      <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />\n      <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />\n      <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />\n      <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />\n      <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />\n      <circle cx="20" cy="20" r="20" />\n    </DSkeleton>,\n  args: {}\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);