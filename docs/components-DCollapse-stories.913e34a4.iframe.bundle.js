/*! For license information please see components-DCollapse-stories.913e34a4.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[8738],{"./src/components/DIcon/DIcon.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return DIcon}});var react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),classnames=__webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),config=__webpack_require__("./src/components/config.ts"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function DIconBase({icon:icon,theme:theme,style:style,className:className,size:size="1.5rem",loading:loading=!1,loadingDuration:loadingDuration=1.8,hasCircle:hasCircle=!1,circleSize:circleSize=`calc(var(--${config.k2}icon-component-size) * 1)`,color:color,backgroundColor:backgroundColor,materialStyle:materialStyle=!1,familyClass:familyClass="bi",familyPrefix:familyPrefix="bi-",dataAttributes:dataAttributes}){const colorStyle=(0,react.useMemo)((()=>color?{[`--${config.k2}icon-component-color`]:color}:theme?{[`--${config.k2}icon-component-color`]:`var(--${config.k2}${theme})`}:{}),[color,theme]),backgroundStyle=(0,react.useMemo)((()=>backgroundColor?{[`--${config.k2}icon-component-bg-color`]:backgroundColor}:hasCircle?theme?{[`--${config.k2}icon-component-bg-color`]:`rgba(var(--${config.k2}${theme}-rgb), 0.1)`}:{[`--${config.k2}icon-component-bg-color`]:`rgba(var(--${config.k2}body-color-rgb), 0.1)`}:{}),[backgroundColor,hasCircle,theme]),circleSizeStyle=(0,react.useMemo)((()=>hasCircle?{[`--${config.k2}icon-component-padding`]:circleSize}:{[`--${config.k2}icon-component-padding`]:"0"}),[circleSize,hasCircle]),generateStyleVariables=(0,react.useMemo)((()=>({[`--${config.k2}icon-component-size`]:size,[`--${config.k2}icon-component-loading-duration`]:`${loadingDuration}s`,...colorStyle,...backgroundStyle,...circleSizeStyle,...style})),[size,loadingDuration,colorStyle,backgroundStyle,circleSizeStyle,style]),generateClasses=(0,react.useMemo)((()=>({"d-icon":!0,[familyClass]:!0,"d-icon-loading":loading,...!materialStyle&&{[`${familyPrefix}${icon}`]:!0},...className&&{[className]:!0}})),[familyClass,loading,className,materialStyle,familyPrefix,icon]);return(0,jsx_runtime.jsx)("i",{className:classnames_default()(generateClasses),style:generateStyleVariables,...dataAttributes,children:materialStyle&&icon})}DIconBase.displayName="DIconBase";try{DIconBase.displayName="DIconBase",DIconBase.__docgenInfo={description:"",displayName:"DIconBase",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"string | undefined"}},size:{defaultValue:{value:"1.5rem"},description:"",name:"size",required:!1,type:{name:"string | undefined"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},loadingDuration:{defaultValue:{value:"1.8"},description:"",name:"loadingDuration",required:!1,type:{name:"number | undefined"}},hasCircle:{defaultValue:{value:"false"},description:"",name:"hasCircle",required:!1,type:{name:"boolean | undefined"}},circleSize:{defaultValue:{value:"`calc(var(--${PREFIX_BS}icon-component-size) * 1)`"},description:"",name:"circleSize",required:!1,type:{name:"string | undefined"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string | undefined"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string | undefined"}},materialStyle:{defaultValue:{value:"false"},description:"",name:"materialStyle",required:!1,type:{name:"boolean | undefined"}},familyClass:{defaultValue:{value:"bi"},description:"",name:"familyClass",required:!1,type:{name:"string | undefined"}},familyPrefix:{defaultValue:{value:"bi-"},description:"",name:"familyPrefix",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DIconBase/DIconBase.tsx#DIconBase"]={docgenInfo:DIconBase.__docgenInfo,name:"DIconBase",path:"src/components/DIconBase/DIconBase.tsx#DIconBase"})}catch(__react_docgen_typescript_loader_error){}var components_DIconBase=DIconBase,DContext=__webpack_require__("./src/contexts/DContext.tsx");function DIcon({familyClass:propFamilyClass,familyPrefix:propFamilyPrefix,materialStyle:propMaterialStyle,...props}){const{icon:{familyClass:familyClass,familyPrefix:familyPrefix,materialStyle:materialStyle}}=(0,DContext.Fg)();return(0,jsx_runtime.jsx)(components_DIconBase,{familyClass:propFamilyClass||familyClass,familyPrefix:propFamilyPrefix||familyPrefix,materialStyle:propMaterialStyle||materialStyle,...props})}DIcon.displayName="DIcon";try{DIcon.displayName="DIcon",DIcon.__docgenInfo={description:"",displayName:"DIcon",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"string | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string | undefined"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},loadingDuration:{defaultValue:null,description:"",name:"loadingDuration",required:!1,type:{name:"number | undefined"}},hasCircle:{defaultValue:null,description:"",name:"hasCircle",required:!1,type:{name:"boolean | undefined"}},circleSize:{defaultValue:null,description:"",name:"circleSize",required:!1,type:{name:"string | undefined"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string | undefined"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string | undefined"}},materialStyle:{defaultValue:null,description:"",name:"materialStyle",required:!1,type:{name:"boolean | undefined"}},familyClass:{defaultValue:null,description:"",name:"familyClass",required:!1,type:{name:"string | undefined"}},familyPrefix:{defaultValue:null,description:"",name:"familyPrefix",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DIcon/DIcon.tsx#DIcon"]={docgenInfo:DIcon.__docgenInfo,name:"DIcon",path:"src/components/DIcon/DIcon.tsx#DIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/DIcon/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var _DIcon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/DIcon/DIcon.tsx");__webpack_exports__.Z=_DIcon__WEBPACK_IMPORTED_MODULE_0__.Z},"./src/components/config.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{_o:function(){return ICON_FAMILY_CLASS},k2:function(){return PREFIX_BS},yM:function(){return ICON_FAMILY_PREFIX}});const PREFIX_BS="bs-",ICON_FAMILY_CLASS="bi",ICON_FAMILY_PREFIX="bi-"},"./src/contexts/DContext.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Fg:function(){return useDContext},oW:function(){return DContextProvider}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_DPortalContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/contexts/DPortalContext.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const defaultState={language:"en",currency:{symbol:"$",precision:2,separator:",",decimal:"."},icon:{familyClass:"bi",familyPrefix:"bi-",materialStyle:!1},iconMap:{x:"x",xLg:"x-lg",chevronUp:"chevron-up",chevronDown:"chevron-down",chevronLeft:"chevron-left",chevronRight:"chevron-right",upload:"cloud-upload",calendar:"calendar",check:"check",alert:{warning:"exclamation-circle",danger:"exclamation-triangle",success:"check-circle",info:"info-circle",dark:"info-circle",light:"info-circle",primary:"info-circle",secondary:"info-circle"},input:{invalid:"exclamation-circle",valid:"check",search:"search",show:"eye",hide:"eye-slash",increase:"plus-square",decrease:"dash-square"}},setContext:()=>{},portalName:"d-portal"},DContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultState);function DContextProvider({language:language=defaultState.language,currency:currency=defaultState.currency,icon:icon=defaultState.icon,iconMap:iconMap=defaultState.iconMap,portalName:portalName=defaultState.portalName,availablePortals:availablePortals,children:children}){const[internalContext,setInternalContext]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({language:language,currency:currency,icon:icon,iconMap:iconMap}),setContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newValue=>setInternalContext((prevInternalContext=>({...prevInternalContext,...newValue})))),[]),value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({...internalContext,setContext:setContext})),[internalContext,setContext]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DContext.Provider,{value:value,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_DPortalContext__WEBPACK_IMPORTED_MODULE_2__.RC,{portalName:portalName,availablePortals:availablePortals,children:children})})}function useDContext(){const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DContext);if(void 0===context)throw new Error("useDContext was used outside of DContextProvider");return context}DContextProvider.displayName="DContextProvider";try{DContextProvider.displayName="DContextProvider",DContextProvider.__docgenInfo={description:"",displayName:"DContextProvider",props:{language:{defaultValue:{value:"en"},description:"",name:"language",required:!1,type:{name:"string | undefined"}},currency:{defaultValue:{value:"{\n    symbol: '$',\n    precision: 2,\n    separator: ',',\n    decimal: '.',\n  }"},description:"",name:"currency",required:!1,type:{name:"CurrencyProps | undefined"}},icon:{defaultValue:{value:"{\n    familyClass: 'bi',\n    familyPrefix: 'bi-',\n    materialStyle: false,\n  }"},description:"",name:"icon",required:!1,type:{name:"IconProps | undefined"}},iconMap:{defaultValue:{value:"{\n    x: 'x',\n    xLg: 'x-lg',\n    chevronUp: 'chevron-up',\n    chevronDown: 'chevron-down',\n    chevronLeft: 'chevron-left',\n    chevronRight: 'chevron-right',\n    upload: 'cloud-upload',\n    calendar: 'calendar',\n    check: 'check',\n    alert: {\n      warning: 'exclamation-circle',\n      danger: 'exclamation-triangle',\n      success: 'check-circle',\n      info: 'info-circle',\n      dark: 'info-circle',\n      light: 'info-circle',\n      primary: 'info-circle',\n      secondary: 'info-circle',\n    },\n    input: {\n      invalid: 'exclamation-circle',\n      valid: 'check',\n      search: 'search',\n      show: 'eye',\n      hide: 'eye-slash',\n      increase: 'plus-square',\n      decrease: 'dash-square',\n    },\n  }"},description:"",name:"iconMap",required:!1,type:{name:"IconMapProps | undefined"}},portalName:{defaultValue:{value:"d-portal"},description:"",name:"portalName",required:!1,type:{name:"string | undefined"}},availablePortals:{defaultValue:null,description:"",name:"availablePortals",required:!1,type:{name:"PortalAvailableList<T> | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/contexts/DContext.tsx#DContextProvider"]={docgenInfo:DContextProvider.__docgenInfo,name:"DContextProvider",path:"src/contexts/DContext.tsx#DContextProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/contexts/DPortalContext.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{RC:function(){return DPortalContextProvider},S0:function(){return useDPortalContext}});var react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),react_dom=__webpack_require__("../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js");var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const DPortalContext=(0,react.createContext)(void 0);function DPortalContextProvider({portalName:portalName,children:children,availablePortals:availablePortals}){const{created:created}=function usePortal(portalName){const[hasPortal,setHasPortal]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{const previousPortal=document.querySelector(`#${portalName}`);previousPortal&&previousPortal.remove();const portal=document.createElement("div");portal.id=portalName,portal.className="d-portal",document.body.appendChild(portal),setHasPortal(!0)}),[portalName]),{created:hasPortal}}(portalName),[stack,{push:push,pop:pop,isEmpty:isEmpty}]=function useStackState(initialList=[]){const[list,setList]=(0,react.useState)(initialList),push=(0,react.useCallback)((item=>setList((prevList=>[...prevList,item]))),[]),pop=(0,react.useCallback)((()=>setList((prevList=>prevList.slice(0,prevList.length-1)))),[]),peek=(0,react.useCallback)((()=>list.at(-1)),[list]),clear=(0,react.useCallback)((()=>setList([])),[]),isEmpty=(0,react.useCallback)((()=>0===list.length),[list.length]),controls=(0,react.useMemo)((()=>({clear:clear,isEmpty:isEmpty,length:list.length,peek:peek,pop:pop,push:push})),[clear,isEmpty,list.length,peek,pop,push]);return[list,controls]}([]);!function useDisableBodyScrollEffect(disable){(0,react.useEffect)((()=>{disable?(document.body.style.overflow="hidden",document.body.style.paddingRight="0"):(document.body.style.overflow="unset",document.body.style.paddingRight="unset")}),[disable])}(Boolean(stack.length));const openPortal=(0,react.useCallback)(((name,payload)=>{if(!availablePortals)throw new Error(`there is no component for portal ${name.toString()}`);const Component=availablePortals[name];if(!Component)throw new Error(`there is no component for portal ${name.toString()}`);push({name:name,Component:Component,payload:payload})}),[availablePortals,push]),closePortal=(0,react.useCallback)((()=>{isEmpty()||pop()}),[isEmpty,pop]),value=(0,react.useMemo)((()=>({stack:stack,openPortal:openPortal,closePortal:closePortal})),[stack,openPortal,closePortal]),handleClose=(0,react.useCallback)((target=>{if(target instanceof HTMLDivElement)if(!target.classList.contains("portal")||"bsBackdrop"in target.dataset){if(target.classList.contains("backdrop")){const lastPortal=target.nextElementSibling;lastPortal&&lastPortal.classList.contains("portal")&&!("bsBackdrop"in lastPortal.dataset)&&closePortal()}}else closePortal()}),[closePortal]);return(0,react.useEffect)((()=>{const keyEvent=event=>{if("Escape"===event.key){const lastPortal=document.querySelector(`#${portalName} > div > div:last-child`);lastPortal&&handleClose(lastPortal)}};return 0!==stack.length&&window.addEventListener("keydown",keyEvent),()=>{window.removeEventListener("keydown",keyEvent)}}),[handleClose,portalName,stack.length]),(0,jsx_runtime.jsxs)(DPortalContext.Provider,{value:value,children:[children,created&&(0,react_dom.createPortal)((0,jsx_runtime.jsx)("div",{onClick:({target:target})=>handleClose(target),onKeyDown:()=>{},children:stack.map((({Component:Component,name:name,payload:payload})=>(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:"backdrop fade show"}),(0,jsx_runtime.jsx)(Component,{name:name,payload:payload})]},name)))}),document.getElementById(portalName))]})}function useDPortalContext(){const context=(0,react.useContext)(DPortalContext);if(void 0===context)throw new Error("usePortalContext was used outside of PortalContextProvider");return context}DPortalContextProvider.displayName="DPortalContextProvider";try{DPortalContextProvider.displayName="DPortalContextProvider",DPortalContextProvider.__docgenInfo={description:"",displayName:"DPortalContextProvider",props:{portalName:{defaultValue:null,description:"",name:"portalName",required:!0,type:{name:"string"}},availablePortals:{defaultValue:null,description:"",name:"availablePortals",required:!1,type:{name:"PortalAvailableList<T> | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/contexts/DPortalContext.tsx#DPortalContextProvider"]={docgenInfo:DPortalContextProvider.__docgenInfo,name:"DPortalContextProvider",path:"src/contexts/DPortalContext.tsx#DPortalContextProvider"})}catch(__react_docgen_typescript_loader_error){}},"./stories/components/DCollapse.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Collapsed:function(){return Collapsed},HeaderComponent:function(){return HeaderComponent},HeaderText:function(){return HeaderText},MaterialIcon:function(){return MaterialIcon},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return DCollapse_stories}});var classnames=__webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),config=__webpack_require__("./src/components/config.ts"),DIcon=__webpack_require__("./src/components/DIcon/index.ts"),DContext=__webpack_require__("./src/contexts/DContext.tsx"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function DCollapse({id:id,className:className,style:style,Component:Component,hasSeparator:hasSeparator=!1,defaultCollapsed:defaultCollapsed=!1,onChange:onChange,children:children,iconOpen:iconOpenProp,iconClose:iconCloseProp,iconFamilyClass:iconFamilyClass,iconFamilyPrefix:iconFamilyPrefix,iconMaterialStyle:iconMaterialStyle=!1,dataAttributes:dataAttributes}){const[toggle,setToggle]=(0,react.useState)(defaultCollapsed),{iconMap:{chevronDown:chevronDown,chevronUp:chevronUp}}=(0,DContext.Fg)(),iconOpen=(0,react.useMemo)((()=>iconOpenProp||chevronUp),[chevronUp,iconOpenProp]),iconClose=(0,react.useMemo)((()=>iconCloseProp||chevronDown),[chevronDown,iconCloseProp]);(0,react.useEffect)((()=>{onChange&&onChange(toggle)}),[toggle,onChange]),(0,react.useEffect)((()=>{setToggle(defaultCollapsed)}),[defaultCollapsed]);const generateStyles=(0,react.useMemo)((()=>({[`--${config.k2}collapse-separator-display`]:hasSeparator?"block":"none"})),[hasSeparator]);return(0,jsx_runtime.jsxs)("div",{id:id,className:classnames_default()("collapse-container",className),style:style,...dataAttributes,children:[(0,jsx_runtime.jsxs)("button",{className:"collapse-button",type:"button",onClick:()=>setToggle((prev=>!prev)),children:[(0,jsx_runtime.jsx)("div",{className:"flex-grow-1",children:Component}),(0,jsx_runtime.jsx)(DIcon.Z,{color:`var(--${config.k2}gray)`,size:`var(--${config.k2}fs-small)`,icon:toggle?iconOpen:iconClose,familyClass:iconFamilyClass,familyPrefix:iconFamilyPrefix,materialStyle:iconMaterialStyle})]}),toggle&&(0,jsx_runtime.jsx)("div",{className:classnames_default()({"collapse-body":!0}),style:generateStyles,children:children})]})}DCollapse.displayName="DCollapse";try{DCollapse.displayName="DCollapse",DCollapse.__docgenInfo={description:"",displayName:"DCollapse",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},dataAttributes:{defaultValue:null,description:"",name:"dataAttributes",required:!1,type:{name:"DataAttributes | undefined"}},iconFamilyClass:{defaultValue:null,description:"",name:"iconFamilyClass",required:!1,type:{name:"string | undefined"}},iconFamilyPrefix:{defaultValue:null,description:"",name:"iconFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconMaterialStyle:{defaultValue:{value:"false"},description:"",name:"iconMaterialStyle",required:!1,type:{name:"boolean | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},Component:{defaultValue:null,description:"",name:"Component",required:!0,type:{name:"ReactNode | ReactElement<any, string | JSXElementConstructor<any>>"}},hasSeparator:{defaultValue:{value:"false"},description:"",name:"hasSeparator",required:!1,type:{name:"boolean | undefined"}},defaultCollapsed:{defaultValue:{value:"false"},description:"",name:"defaultCollapsed",required:!1,type:{name:"boolean | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: boolean) => void) | undefined"}},iconOpen:{defaultValue:null,description:"",name:"iconOpen",required:!1,type:{name:"string | undefined"}},iconClose:{defaultValue:null,description:"",name:"iconClose",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DCollapse/DCollapse.tsx#DCollapse"]={docgenInfo:DCollapse.__docgenInfo,name:"DCollapse",path:"src/components/DCollapse/DCollapse.tsx#DCollapse"})}catch(__react_docgen_typescript_loader_error){}var constants=__webpack_require__("./stories/config/constants.ts");var DCollapse_stories={title:"Design System/Patterns/Collapse",component:DCollapse,parameters:{docs:{description:{component:`\n## CSS Variables\n| Variable                                 | Class               | Type            | Description                               |\n|------------------------------------------|---------------------|-----------------|-------------------------------------------|\n| --${config.k2}collapse-bg                | .collapse-container | css color unit  | Collapse background                       |\n| --${config.k2}collapse-border-radius     | .collapse-container | css length unit | Collapse border radius                    |\n| --${config.k2}collapse-box-shadow        | .collapse-container | css box shadow  | Collapse box shadow                       |\n| --${config.k2}collapse-button-padding-x  | .collapse-container | css length unit | Collapse header button padding horizontal |\n| --${config.k2}collapse-button-padding-y  | .collapse-container | css length unit | Collapse header button padding vertical   |\n| --${config.k2}collapse-button-gap        | .collapse-container | css length unit | Collapse header button gap                |\n| --${config.k2}collapse-body-padding-x    | .collapse-container | css length unit | Collapse body padding horizontal          |\n| --${config.k2}collapse-body-padding-y    | .collapse-container | css length unit | Collapse body padding vertical            |\n| --${config.k2}collapse-separator-display | .collapse-container | css display     | Collapse separator display                |\n| --${config.k2}collapse-separator-height  | .collapse-container | css length unit | Collapse separator size                   |\n| --${config.k2}collapse-separator-bg      | .collapse-container | css color unit  | Collapse separator color                  |\n        `}}},argTypes:{className:{control:"text",type:"string"},style:{control:"object"},Component:{options:["Text","Custom"],mapping:{Text:"Simple text",Custom:(0,jsx_runtime.jsxs)("div",{className:"d-flex align-items-center gap-3",children:[(0,jsx_runtime.jsx)(DIcon.Z,{icon:"fire",hasCircle:!0}),(0,jsx_runtime.jsx)("h1",{className:"h4 m-0",children:"Custom component"})]})}},defaultCollapsed:{control:"boolean"},hasSeparator:{control:"boolean"},iconOpen:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...constants.UZ]},iconClose:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,...constants.UZ]},iconMaterialStyle:{control:"boolean",type:"boolean"},iconFamilyClass:{control:"text",type:"string"},iconFamilyPrefix:{control:"text",type:"string"}},tags:["autodocs"]};const HeaderText={decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:"320px",height:"320px"},children:(0,jsx_runtime.jsx)(Story,{})})],render:args=>(0,jsx_runtime.jsx)(DCollapse,{...args,children:(0,jsx_runtime.jsxs)("div",{className:"row d-flex flex-column gap-3 pt-3",children:[(0,jsx_runtime.jsx)("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),(0,jsx_runtime.jsx)("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),(0,jsx_runtime.jsx)("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."})]})}),args:{Component:(0,jsx_runtime.jsx)("p",{children:"Text"}),defaultCollapsed:!1,hasSeparator:!0}},HeaderComponent={decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:"320px",height:"320px"},children:(0,jsx_runtime.jsx)(Story,{})})],render:args=>(0,jsx_runtime.jsx)(DCollapse,{...args,children:(0,jsx_runtime.jsxs)("div",{className:"row d-flex flex-column gap-3 pt-3",children:[(0,jsx_runtime.jsx)("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),(0,jsx_runtime.jsx)("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),(0,jsx_runtime.jsx)("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."})]})}),args:{Component:(0,jsx_runtime.jsxs)("div",{className:"d-flex align-items-center gap-3",children:[(0,jsx_runtime.jsx)(DIcon.Z,{icon:"fire",hasCircle:!0}),(0,jsx_runtime.jsx)("h1",{className:"h4 m-0",children:"Custom component"})]}),defaultCollapsed:!1,hasSeparator:!0}},Collapsed={decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:"320px",height:"320px"},children:(0,jsx_runtime.jsx)(Story,{})})],render:args=>(0,jsx_runtime.jsx)(DCollapse,{...args,children:(0,jsx_runtime.jsxs)("div",{className:"row d-flex flex-column gap-3 pt-3",children:[(0,jsx_runtime.jsx)("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),(0,jsx_runtime.jsx)("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),(0,jsx_runtime.jsx)("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."})]})}),args:{Component:(0,jsx_runtime.jsx)("p",{children:"Text"}),defaultCollapsed:!0,hasSeparator:!0}},MaterialIcon={decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:"320px",height:"320px"},children:(0,jsx_runtime.jsx)(Story,{})})],render:args=>(0,jsx_runtime.jsx)(DContext.oW,{...constants.Hr,children:(0,jsx_runtime.jsx)(DCollapse,{...args,children:(0,jsx_runtime.jsxs)("div",{className:"row d-flex flex-column gap-3 pt-3",children:[(0,jsx_runtime.jsx)("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),(0,jsx_runtime.jsx)("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."}),(0,jsx_runtime.jsx)("div",{className:"col-12",children:"Lorem ipsum dolor sit amet consectetur."})]})})}),args:{Component:(0,jsx_runtime.jsx)("p",{children:"Text"}),defaultCollapsed:!0,hasSeparator:!0,iconClose:"unfold_more",iconOpen:"unfold_less"}};HeaderText.parameters={...HeaderText.parameters,docs:{...HeaderText.parameters?.docs,source:{originalSource:'{\n  decorators: [Story => <div style={{\n    width: \'320px\',\n    height: \'320px\'\n  }}>\n        <Story />\n      </div>],\n  render: args => <DCollapse {...args}>\n      <div className="row d-flex flex-column gap-3 pt-3">\n        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>\n        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>\n        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>\n      </div>\n    </DCollapse>,\n  args: {\n    Component: <p>Text</p>,\n    defaultCollapsed: false,\n    hasSeparator: true\n  }\n}',...HeaderText.parameters?.docs?.source}}},HeaderComponent.parameters={...HeaderComponent.parameters,docs:{...HeaderComponent.parameters?.docs,source:{originalSource:'{\n  decorators: [Story => <div style={{\n    width: \'320px\',\n    height: \'320px\'\n  }}>\n        <Story />\n      </div>],\n  render: args => <DCollapse {...args}>\n      <div className="row d-flex flex-column gap-3 pt-3">\n        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>\n        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>\n        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>\n      </div>\n    </DCollapse>,\n  args: {\n    Component: <div className="d-flex align-items-center gap-3">\n        <DIcon icon="fire" hasCircle />\n        <h1 className="h4 m-0">Custom component</h1>\n      </div>,\n    defaultCollapsed: false,\n    hasSeparator: true\n  }\n}',...HeaderComponent.parameters?.docs?.source}}},Collapsed.parameters={...Collapsed.parameters,docs:{...Collapsed.parameters?.docs,source:{originalSource:'{\n  decorators: [Story => <div style={{\n    width: \'320px\',\n    height: \'320px\'\n  }}>\n        <Story />\n      </div>],\n  render: args => <DCollapse {...args}>\n      <div className="row d-flex flex-column gap-3 pt-3">\n        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>\n        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>\n        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>\n      </div>\n    </DCollapse>,\n  args: {\n    Component: <p>Text</p>,\n    defaultCollapsed: true,\n    hasSeparator: true\n  }\n}',...Collapsed.parameters?.docs?.source}}},MaterialIcon.parameters={...MaterialIcon.parameters,docs:{...MaterialIcon.parameters?.docs,source:{originalSource:"{\n  decorators: [Story => <div style={{\n    width: '320px',\n    height: '320px'\n  }}>\n        <Story />\n      </div>],\n  render: args => <DContextProvider {...CONTEXT_PROVIDER_CONFIG_MATERIAL}>\n      <DCollapse {...args}>\n        <div className=\"row d-flex flex-column gap-3 pt-3\">\n          <div className=\"col-12\">Lorem ipsum dolor sit amet consectetur.</div>\n          <div className=\"col-12\">Lorem ipsum dolor sit amet consectetur.</div>\n          <div className=\"col-12\">Lorem ipsum dolor sit amet consectetur.</div>\n        </div>\n      </DCollapse>\n    </DContextProvider>,\n  args: {\n    Component: <p>Text</p>,\n    defaultCollapsed: true,\n    hasSeparator: true,\n    iconClose: 'unfold_more',\n    iconOpen: 'unfold_less'\n  }\n}",...MaterialIcon.parameters?.docs?.source}}};const __namedExportsOrder=["HeaderText","HeaderComponent","Collapsed","MaterialIcon"]},"../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);