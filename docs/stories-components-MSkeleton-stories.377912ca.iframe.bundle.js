"use strict";(self.webpackChunk_modyo_dynamic_modyo_design_system_react=self.webpackChunk_modyo_dynamic_modyo_design_system_react||[]).push([[1891],{"./src/stories/components/MSkeleton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>MSkeleton_stories});var react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__assign=function(){return __assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};var SVG=function(_a){var animate=_a.animate,animateBegin=_a.animateBegin,backgroundColor=_a.backgroundColor,backgroundOpacity=_a.backgroundOpacity,baseUrl=_a.baseUrl,children=_a.children,foregroundColor=_a.foregroundColor,foregroundOpacity=_a.foregroundOpacity,gradientRatio=_a.gradientRatio,gradientDirection=_a.gradientDirection,uniqueKey=_a.uniqueKey,interval=_a.interval,rtl=_a.rtl,speed=_a.speed,style=_a.style,title=_a.title,beforeMask=_a.beforeMask,props=function __rest(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t}(_a,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),fixedId=uniqueKey||Math.random().toString(36).substring(6),idClip=fixedId+"-diff",idGradient=fixedId+"-animated-diff",idAria=fixedId+"-aria",rtlStyle=rtl?{transform:"scaleX(-1)"}:null,keyTimes="0; "+interval+"; 1",dur=speed+"s",gradientTransform="top-bottom"===gradientDirection?"rotate(90)":void 0;return(0,react.createElement)("svg",__assign({"aria-labelledby":idAria,role:"img",style:__assign(__assign({},style),rtlStyle)},props),title?(0,react.createElement)("title",{id:idAria},title):null,beforeMask&&(0,react.isValidElement)(beforeMask)?beforeMask:null,(0,react.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+baseUrl+"#"+idClip+")",style:{fill:"url("+baseUrl+"#"+idGradient+")"}}),(0,react.createElement)("defs",null,(0,react.createElement)("clipPath",{id:idClip},children),(0,react.createElement)("linearGradient",{id:idGradient,gradientTransform},(0,react.createElement)("stop",{offset:"0%",stopColor:backgroundColor,stopOpacity:backgroundOpacity},animate&&(0,react.createElement)("animate",{attributeName:"offset",values:-gradientRatio+"; "+-gradientRatio+"; 1",keyTimes,dur,repeatCount:"indefinite",begin:animateBegin})),(0,react.createElement)("stop",{offset:"50%",stopColor:foregroundColor,stopOpacity:foregroundOpacity},animate&&(0,react.createElement)("animate",{attributeName:"offset",values:-gradientRatio/2+"; "+-gradientRatio/2+"; "+(1+gradientRatio/2),keyTimes,dur,repeatCount:"indefinite",begin:animateBegin})),(0,react.createElement)("stop",{offset:"100%",stopColor:backgroundColor,stopOpacity:backgroundOpacity},animate&&(0,react.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+gradientRatio),keyTimes,dur,repeatCount:"indefinite",begin:animateBegin})))))};SVG.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,gradientDirection:"left-right",id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading...",beforeMask:null};var ContentLoader=function(props){return props.children?(0,react.createElement)(SVG,__assign({},props)):(0,react.createElement)(ReactContentLoaderFacebook,__assign({},props))},ReactContentLoaderFacebook=function(props){return(0,react.createElement)(ContentLoader,__assign({viewBox:"0 0 476 124"},props),(0,react.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,react.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,react.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,react.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,react.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,react.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};const react_content_loader_es=ContentLoader;var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function MSkeleton({speed=2,viewBox,backgroundColor="#f3f3f3",foregroundColor="#ecebeb",children}){return(0,jsx_runtime.jsx)(react_content_loader_es,{speed,viewBox,backgroundColor,foregroundColor,children})}MSkeleton.displayName="MSkeleton";try{MSkeleton.displayName="MSkeleton",MSkeleton.__docgenInfo={description:"",displayName:"MSkeleton",props:{speed:{defaultValue:{value:"2"},description:"",name:"speed",required:!1,type:{name:"number | undefined"}},viewBox:{defaultValue:null,description:"",name:"viewBox",required:!1,type:{name:"string | undefined"}},backgroundColor:{defaultValue:{value:"#f3f3f3"},description:"",name:"backgroundColor",required:!1,type:{name:"string | undefined"}},foregroundColor:{defaultValue:{value:"#ecebeb"},description:"",name:"foregroundColor",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MSkeleton.tsx#MSkeleton"]={docgenInfo:MSkeleton.__docgenInfo,name:"MSkeleton",path:"src/components/MSkeleton.tsx#MSkeleton"})}catch(__react_docgen_typescript_loader_error){}const MSkeleton_stories={title:"React/Components/Skeleton",component:MSkeleton,argTypes:{speed:{control:"number"},viewBox:{control:"text"},backgroundColor:{control:"color"},foregroundColor:{control:"color"}}},Default={render:args=>(0,jsx_runtime.jsxs)(MSkeleton,{...args,children:[(0,jsx_runtime.jsx)("rect",{x:"48",y:"8",rx:"3",ry:"3",width:"88",height:"6"}),(0,jsx_runtime.jsx)("rect",{x:"48",y:"26",rx:"3",ry:"3",width:"52",height:"6"}),(0,jsx_runtime.jsx)("rect",{x:"0",y:"56",rx:"3",ry:"3",width:"410",height:"6"}),(0,jsx_runtime.jsx)("rect",{x:"0",y:"72",rx:"3",ry:"3",width:"380",height:"6"}),(0,jsx_runtime.jsx)("rect",{x:"0",y:"88",rx:"3",ry:"3",width:"178",height:"6"}),(0,jsx_runtime.jsx)("circle",{cx:"20",cy:"20",r:"20"})]}),args:{}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: args => /*#__PURE__*/_jsxs(MSkeleton, {\n    ...args,\n    children: [/*#__PURE__*/_jsx("rect", {\n      x: "48",\n      y: "8",\n      rx: "3",\n      ry: "3",\n      width: "88",\n      height: "6"\n    }), /*#__PURE__*/_jsx("rect", {\n      x: "48",\n      y: "26",\n      rx: "3",\n      ry: "3",\n      width: "52",\n      height: "6"\n    }), /*#__PURE__*/_jsx("rect", {\n      x: "0",\n      y: "56",\n      rx: "3",\n      ry: "3",\n      width: "410",\n      height: "6"\n    }), /*#__PURE__*/_jsx("rect", {\n      x: "0",\n      y: "72",\n      rx: "3",\n      ry: "3",\n      width: "380",\n      height: "6"\n    }), /*#__PURE__*/_jsx("rect", {\n      x: "0",\n      y: "88",\n      rx: "3",\n      ry: "3",\n      width: "178",\n      height: "6"\n    }), /*#__PURE__*/_jsx("circle", {\n      cx: "20",\n      cy: "20",\n      r: "20"\n    })]\n  }),\n  args: {}\n}',...Default.parameters?.docs?.source}}}}}]);