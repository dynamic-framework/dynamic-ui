/*! For license information please see stories-hooks-useOffcanvasContext-stories.d7c35937.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[2483],{"./src/components/DButton.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return DButton}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_DIcon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/DIcon.tsx"),_config__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/config.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function DButton({theme:theme="primary",size:size,variant:variant,state:state,text:text="",iconStart:iconStart,iconStartFamilyClass:iconStartFamilyClass,iconStartFamilyPrefix:iconStartFamilyPrefix,iconEnd:iconEnd,iconEndFamilyClass:iconEndFamilyClass,iconEndFamilyPrefix:iconEndFamilyPrefix,value:value,type:type="button",isPill:isPill=!1,isLoading:isLoading=!1,isDisabled:isDisabled=!1,isStopPropagationEnabled:isStopPropagationEnabled=!0,className:className,onClick:onClick}){const generateClasses=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({btn:!0,[variant?`btn-${variant}-${theme}`:`btn-${theme}`]:!0,...size&&{[`btn-${size}`]:!0},...state&&"disabled"!==state&&{[state]:!0},loading:isLoading})),[variant,theme,size,state,isLoading]),generateStyleVariables=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>isPill?{[`--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}btn-component-border-radius`]:`var(--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}border-radius-pill)`,[`--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}btn-component-lg-border-radius`]:`var(--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}border-radius-pill)`,[`--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}btn-component-sm-border-radius`]:`var(--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}border-radius-pill)`}:{}),[isPill]),clickHandler=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event=>{isStopPropagationEnabled&&event.stopPropagation(),onClick?.(event)}),[isStopPropagationEnabled,onClick]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(generateClasses,className),style:generateStyleVariables,type:type,disabled:"disabled"===state||isLoading||isDisabled,...value&&{value:value},onClick:clickHandler,children:[iconStart&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_DIcon__WEBPACK_IMPORTED_MODULE_4__.Z,{icon:iconStart,familyClass:iconStartFamilyClass,familyPrefix:iconStartFamilyPrefix}),text&&!isLoading&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:text}),isLoading&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"visually-hidden",children:"Loading..."})}),iconEnd&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_DIcon__WEBPACK_IMPORTED_MODULE_4__.Z,{icon:iconEnd,familyClass:iconEndFamilyClass,familyPrefix:iconEndFamilyPrefix})]})}DButton.displayName="DButton";try{DButton.displayName="DButton",DButton.__docgenInfo={description:"",displayName:"DButton",props:{iconStart:{defaultValue:null,description:"",name:"iconStart",required:!1,type:{name:"string | undefined"}},iconStartFamilyClass:{defaultValue:null,description:"",name:"iconStartFamilyClass",required:!1,type:{name:"string | undefined"}},iconStartFamilyPrefix:{defaultValue:null,description:"",name:"iconStartFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconEnd:{defaultValue:null,description:"",name:"iconEnd",required:!1,type:{name:"string | undefined"}},iconEndFamilyClass:{defaultValue:null,description:"",name:"iconEndFamilyClass",required:!1,type:{name:"string | undefined"}},iconEndFamilyPrefix:{defaultValue:null,description:"",name:"iconEndFamilyPrefix",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},theme:{defaultValue:{value:"primary"},description:"",name:"theme",required:!1,type:{name:"string | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"lg"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"link"'},{value:'"outline"'}]}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"disabled"'},{value:'"focus-visible"'},{value:'"hover"'},{value:'"active"'}]}},text:{defaultValue:{value:""},description:"",name:"text",required:!1,type:{name:"string | undefined"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | undefined"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},isPill:{defaultValue:{value:"false"},description:"",name:"isPill",required:!1,type:{name:"boolean | undefined"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean | undefined"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},isStopPropagationEnabled:{defaultValue:{value:"true"},description:"",name:"isStopPropagationEnabled",required:!1,type:{name:"boolean | undefined"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DButton.tsx#DButton"]={docgenInfo:DButton.__docgenInfo,name:"DButton",path:"src/components/DButton.tsx#DButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/DIcon.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return DIcon}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_config__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/config.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function DIcon({icon:icon,theme:theme,className:className="",size:size="1.5rem",isLoading:isLoading=!1,loadingDuration:loadingDuration=1.8,hasCircle:hasCircle=!1,circleSize:circleSize=`calc(var(--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}icon-component-size) * 1)`,color:color,backgroundColor:backgroundColor,familyClass:familyClass="bi",familyPrefix:familyPrefix="bi-"}){const getColorStyle=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>color?{[`--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}component-color`]:color}:theme?{[`--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}icon-component-color`]:`var(--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}${theme})`}:{}),[color,theme]),getBackgroundStyle=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>backgroundColor?{[`--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}icon-component-bg-color`]:backgroundColor}:hasCircle?theme?{[`--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}icon-component-bg-color`]:`rgba(var(--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}${theme}-rgb), 0.1)`}:{[`--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}icon-component-bg-color`]:`rgba(var(--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}body-color-rgb), 0.1)`}:{}),[backgroundColor,hasCircle,theme]),getCircleSizeStyle=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>hasCircle?{[`--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}icon-component-padding`]:circleSize}:{[`--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}icon-component-padding`]:"0"}),[circleSize,hasCircle]),generateStyleVariables=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({[`--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}icon-component-size`]:size,[`--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}icon-component-loading-duration`]:`${loadingDuration}s`,...getColorStyle,...getBackgroundStyle,...getCircleSizeStyle})),[size,loadingDuration,getColorStyle,getBackgroundStyle,getCircleSizeStyle]),generateClasses=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({"d-icon":!0,[className]:!!className,[familyClass]:!0,[`${familyPrefix}${icon}`]:!0,"d-icon-loading":isLoading})),[familyClass,familyPrefix,icon,className,isLoading]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(generateClasses),style:generateStyleVariables})}DIcon.displayName="DIcon";try{DIcon.displayName="DIcon",DIcon.__docgenInfo={description:"",displayName:"DIcon",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"string | undefined"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string | undefined"}},size:{defaultValue:{value:"1.5rem"},description:"",name:"size",required:!1,type:{name:"string | undefined"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean | undefined"}},loadingDuration:{defaultValue:{value:"1.8"},description:"",name:"loadingDuration",required:!1,type:{name:"number | undefined"}},hasCircle:{defaultValue:{value:"false"},description:"",name:"hasCircle",required:!1,type:{name:"boolean | undefined"}},circleSize:{defaultValue:{value:"`calc(var(--${PREFIX_BS}icon-component-size) * 1)`"},description:"",name:"circleSize",required:!1,type:{name:"string | undefined"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string | undefined"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string | undefined"}},familyClass:{defaultValue:{value:"bi"},description:"",name:"familyClass",required:!1,type:{name:"string | undefined"}},familyPrefix:{defaultValue:{value:"bi-"},description:"",name:"familyPrefix",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DIcon.tsx#DIcon"]={docgenInfo:DIcon.__docgenInfo,name:"DIcon",path:"src/components/DIcon.tsx#DIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/DOffcanvas.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return DOffcanvas}});var _config__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/config.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function DOffcanvas({name:name,isStatic:isStatic,isScrollable:isScrollable,openFrom:openFrom="end",children:children}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:`offcanvas offcanvas-${openFrom} show`,id:name,tabIndex:-1,"aria-labelledby":`${name}Label`,"aria-hidden":"false",...isStatic&&{[`data-${_config__WEBPACK_IMPORTED_MODULE_1__.k2}backdrop`]:"static",[`data-${_config__WEBPACK_IMPORTED_MODULE_1__.k2}keyboard`]:"false"},...isScrollable&&{[`data-${_config__WEBPACK_IMPORTED_MODULE_1__.k2}scroll`]:"true",[`data-${_config__WEBPACK_IMPORTED_MODULE_1__.k2}keyboard`]:"false"},children:children})}DOffcanvas.displayName="DOffcanvas";try{DOffcanvas.displayName="DOffcanvas",DOffcanvas.__docgenInfo={description:"",displayName:"DOffcanvas",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},isStatic:{defaultValue:null,description:"",name:"isStatic",required:!1,type:{name:"boolean | undefined"}},isScrollable:{defaultValue:null,description:"",name:"isScrollable",required:!1,type:{name:"boolean | undefined"}},openFrom:{defaultValue:{value:"end"},description:"",name:"openFrom",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"top"'},{value:'"bottom"'},{value:'"start"'},{value:'"end"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DOffcanvas.tsx#DOffcanvas"]={docgenInfo:DOffcanvas.__docgenInfo,name:"DOffcanvas",path:"src/components/DOffcanvas.tsx#DOffcanvas"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/DOffcanvasBody.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return DOffcanvasBody}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function DOffcanvasBody({children:children}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"d-offcanvas-slot offcanvas-body",children:children})}DOffcanvasBody.displayName="DOffcanvasBody";try{DOffcanvasBody.displayName="DOffcanvasBody",DOffcanvasBody.__docgenInfo={description:"",displayName:"DOffcanvasBody",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DOffcanvasBody.tsx#DOffcanvasBody"]={docgenInfo:DOffcanvasBody.__docgenInfo,name:"DOffcanvasBody",path:"src/components/DOffcanvasBody.tsx#DOffcanvasBody"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/DOffcanvasFooter.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return DOffcanvasFooter}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function DOffcanvasFooter({footerActionPlacement:footerActionPlacement="fill",children:children}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:`d-offcanvas-slot d-offcanvas-footer d-offcanvas-action-${footerActionPlacement}`,children:children})}DOffcanvasFooter.displayName="DOffcanvasFooter";try{DOffcanvasFooter.displayName="DOffcanvasFooter",DOffcanvasFooter.__docgenInfo={description:"",displayName:"DOffcanvasFooter",props:{footerActionPlacement:{defaultValue:{value:"fill"},description:"",name:"footerActionPlacement",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"fill"'},{value:'"start"'},{value:'"end"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DOffcanvasFooter.tsx#DOffcanvasFooter"]={docgenInfo:DOffcanvasFooter.__docgenInfo,name:"DOffcanvasFooter",path:"src/components/DOffcanvasFooter.tsx#DOffcanvasFooter"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/DOffcanvasHeader.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return DOffcanvasHeader}});var _DIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/DIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function DOffcanvasHeader({showCloseButton:showCloseButton,onClose:onClose,children:children}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"offcanvas-header",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"d-offcanvas-slot",children:children}),showCloseButton&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{type:"button",className:"d-offcanvas-close","aria-label":"Close",onClick:onClose,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DIcon__WEBPACK_IMPORTED_MODULE_1__.Z,{icon:"x-lg"})})]})}DOffcanvasHeader.displayName="DOffcanvasHeader";try{DOffcanvasHeader.displayName="DOffcanvasHeader",DOffcanvasHeader.__docgenInfo={description:"",displayName:"DOffcanvasHeader",props:{showCloseButton:{defaultValue:null,description:"",name:"showCloseButton",required:!1,type:{name:"boolean | undefined"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DOffcanvasHeader.tsx#DOffcanvasHeader"]={docgenInfo:DOffcanvasHeader.__docgenInfo,name:"DOffcanvasHeader",path:"src/components/DOffcanvasHeader.tsx#DOffcanvasHeader"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/config.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{_o:function(){return ICON_FAMILY_CLASS},d2:function(){return ALERT_TYPE_ICON},k2:function(){return PREFIX_BS},yM:function(){return ICON_FAMILY_PREFIX}});const PREFIX_BS="bs-",ICON_FAMILY_CLASS="bi",ICON_FAMILY_PREFIX="bi-",ALERT_TYPE_ICON={warning:"exclamation-circle",danger:"exclamation-triangle",success:"check-circle",info:"info-circle",light:"info-circle",dark:"info-circle"}},"./src/hooks/useStackState.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return useStackState}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function useStackState(initialList){const[list,setList]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialList),{length:length}=list,push=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((item=>{setList((prevList=>[...prevList,item]))}),[]),pop=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{setList((prevList=>{if(0===prevList.length)return prevList;const[,...newList]=prevList;return newList}))}),[]),peek=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{if(list.length>0)return list[list.length-1]}),[list]),isEmpty=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>0===list.length),[list]);return[list,{clear:()=>setList([]),isEmpty:isEmpty,length:length,peek:peek,pop:pop,push:push}]}},"./src/stories/hooks/useOffcanvasContext.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return useOffcanvasContext_stories},useOffcanvasContext:function(){return useOffcanvasContext_stories_useOffcanvasContext}});var DOffcanvas=__webpack_require__("./src/components/DOffcanvas.tsx"),DOffcanvasHeader=__webpack_require__("./src/components/DOffcanvasHeader.tsx"),DOffcanvasBody=__webpack_require__("./src/components/DOffcanvasBody.tsx"),DOffcanvasFooter=__webpack_require__("./src/components/DOffcanvasFooter.tsx"),DButton=__webpack_require__("./src/components/DButton.tsx"),react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),react_dom=__webpack_require__("../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),useStackState=__webpack_require__("./src/hooks/useStackState.ts"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const OffcanvasContext=(0,react.createContext)(void 0);function OffcanvasContextProvider({portalName:portalName,children:children,availableOffcanvas:availableOffcanvas}){const[hasPortal,setHasPortal]=(0,react.useState)(!1);(0,react.useEffect)((()=>{const previousPortal=document.querySelector(`#${portalName}`);previousPortal&&previousPortal.remove();const portal=document.createElement("div");portal.id=portalName,document.body.appendChild(portal),setHasPortal(!0)}),[portalName]);const[stack,{push:push,pop:pop,peek:peek}]=(0,useStackState.Z)([]);(0,react.useEffect)((()=>{stack.length?(document.body.style.overflow="hidden",document.body.style.paddingRight="0"):(document.body.style.overflow="unset",document.body.style.paddingRight="unset")}),[stack.length]);const openOffcanvas=(0,react.useCallback)(((offcanvasName,{payload:payload,callbacks:callbacks}={payload:{}})=>{const Component=availableOffcanvas[offcanvasName];if(!Component)throw new Error(`there is no component for offcanvas ${offcanvasName}`);const stackItem={offcanvasName:offcanvasName,Component:Component,payload:payload,callbacks:callbacks};callbacks?.onBeforeOpen&&callbacks.onBeforeOpen(payload),push(stackItem)}),[availableOffcanvas,push]),closeOffcanvas=(0,react.useCallback)(((context={fromOffcanvas:!1})=>{const stackItem=peek();stackItem&&(stackItem.callbacks?.onBeforeClose&&stackItem.callbacks.onBeforeClose(context,stackItem.payload),pop())}),[peek,pop]),value=(0,react.useMemo)((()=>({stack:stack,openOffcanvas:openOffcanvas,closeOffcanvas:closeOffcanvas})),[stack,openOffcanvas,closeOffcanvas]);return(0,jsx_runtime.jsxs)(OffcanvasContext.Provider,{value:value,children:[children,hasPortal&&(0,react_dom.createPortal)((0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[stack.map((({Component:Component,offcanvasName:offcanvasName,callbacks:callbacks,payload:payload})=>{const EnhancedComponent=function enhanceOffcanvas(Offcanvas,callbacks){return function EnhancedOffcanvas({name:name,payload:payload,...otherProps}){return(0,react.useEffect)((()=>(callbacks?.onAfterOpen&&callbacks.onAfterOpen(payload),()=>{callbacks?.onAfterClose&&callbacks.onAfterClose({fromOffcanvas:!1},payload)})),[payload]),(0,jsx_runtime.jsx)(Offcanvas,{name:name,payload:payload,...otherProps})}}(Component,callbacks);return(0,jsx_runtime.jsx)(EnhancedComponent,{name:offcanvasName,payload:payload,openOffcanvas:openOffcanvas,closeOffcanvas:closeOffcanvas},offcanvasName)})),!!stack.length&&(0,jsx_runtime.jsx)("div",{className:"offcanvas-backdrop fade show"})]}),document.getElementById(portalName))]})}OffcanvasContextProvider.displayName="OffcanvasContextProvider";try{OffcanvasContextProvider.displayName="OffcanvasContextProvider",OffcanvasContextProvider.__docgenInfo={description:"",displayName:"OffcanvasContextProvider",props:{portalName:{defaultValue:null,description:"",name:"portalName",required:!0,type:{name:"string"}},availableOffcanvas:{defaultValue:null,description:"",name:"availableOffcanvas",required:!0,type:{name:"OffcanvasAvailableList"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/contexts/OffcanvasContext.tsx#OffcanvasContextProvider"]={docgenInfo:OffcanvasContextProvider.__docgenInfo,name:"OffcanvasContextProvider",path:"src/contexts/OffcanvasContext.tsx#OffcanvasContextProvider"})}catch(__react_docgen_typescript_loader_error){}const ExampleOffcanvas=({closeOffcanvas:closeOffcanvas})=>(0,jsx_runtime.jsxs)(DOffcanvas.Z,{name:"example",isStatic:!1,isScrollable:!1,openFrom:"end",children:[(0,jsx_runtime.jsx)(DOffcanvasHeader.Z,{onClose:closeOffcanvas,showCloseButton:!0,children:(0,jsx_runtime.jsx)("h5",{className:"fw-bold",children:"Advanced filters"})}),(0,jsx_runtime.jsx)(DOffcanvasBody.Z,{children:(0,jsx_runtime.jsx)("p",{children:"Offcanvas body"})}),(0,jsx_runtime.jsxs)(DOffcanvasFooter.Z,{children:[(0,jsx_runtime.jsx)(DButton.Z,{text:"cancel",theme:"secondary",variant:"outline",className:"d-grid",isPill:!0,onClick:()=>closeOffcanvas()}),(0,jsx_runtime.jsx)(DButton.Z,{text:"ok",className:"d-grid",isPill:!0})]})]});ExampleOffcanvas.displayName="ExampleOffcanvas";const ExampleChildren=()=>{const{openOffcanvas:openOffcanvas}=function useOffcanvasContext(){const context=(0,react.useContext)(OffcanvasContext);if(void 0===context)throw new Error("useOffcanvasContext was used outside of OffcanvasContextProvider");return context}();return(0,jsx_runtime.jsx)(DButton.Z,{text:"Open Offcanvas",onClick:()=>openOffcanvas("example")})};ExampleChildren.displayName="ExampleChildren";const Example=()=>(0,jsx_runtime.jsx)(OffcanvasContextProvider,{portalName:"examplePortal",availableOffcanvas:{example:ExampleOffcanvas},children:(0,jsx_runtime.jsx)(ExampleChildren,{})});Example.displayName="Example";var useOffcanvasContext_stories={title:"Design System/Patterns/Offcanvas",component:Example};const useOffcanvasContext_stories_useOffcanvasContext={render:()=>(0,jsx_runtime.jsx)(Example,{})};useOffcanvasContext_stories_useOffcanvasContext.parameters={...useOffcanvasContext_stories_useOffcanvasContext.parameters,docs:{...useOffcanvasContext_stories_useOffcanvasContext.parameters?.docs,source:{originalSource:"{\n  render: () => <Example />\n}",...useOffcanvasContext_stories_useOffcanvasContext.parameters?.docs?.source}}};const __namedExportsOrder=["useOffcanvasContext"]},"../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);