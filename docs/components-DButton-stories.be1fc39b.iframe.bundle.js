/*! For license information please see components-DButton-stories.be1fc39b.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[6715],{"./src/components/DButton/DButton.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return DButton}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_DIcon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/DIcon/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function DButton({theme:theme="primary",size:size,variant:variant,state:state,text:text="",ariaLabel:ariaLabel,iconStart:iconStart,iconStartFamilyClass:iconStartFamilyClass,iconStartFamilyPrefix:iconStartFamilyPrefix,iconStartMaterialStyle:iconStartMaterialStyle,iconEnd:iconEnd,iconEndFamilyClass:iconEndFamilyClass,iconEndFamilyPrefix:iconEndFamilyPrefix,iconEndMaterialStyle:iconEndMaterialStyle,value:value,type:type="button",loading:loading=!1,loadingAriaLabel:loadingAriaLabel,disabled:disabled=!1,stopPropagationEnabled:stopPropagationEnabled=!0,className:className,style:style,form:form,onClick:onClick}){const generateClasses=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({btn:!0,[variant?`btn-${variant}-${theme}`:`btn-${theme}`]:!0,...size&&{[`btn-${size}`]:!0},...state&&"disabled"!==state&&{[state]:!0},loading:loading})),[variant,theme,size,state,loading]),clickHandler=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event=>{stopPropagationEnabled&&event.stopPropagation(),onClick?.(event)}),[stopPropagationEnabled,onClick]),isDisabled=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>"disabled"===state||loading||disabled),[state,loading,disabled]),newAriaLabel=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>loading?loadingAriaLabel||ariaLabel||text:ariaLabel||text),[loading,loadingAriaLabel,ariaLabel,text]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(generateClasses,className),style:style,type:type,disabled:isDisabled,onClick:clickHandler,"aria-label":newAriaLabel,form:form,...value&&{value:value},children:[iconStart&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_DIcon__WEBPACK_IMPORTED_MODULE_3__.Z,{icon:iconStart,familyClass:iconStartFamilyClass,familyPrefix:iconStartFamilyPrefix,materialStyle:iconStartMaterialStyle}),text&&!loading&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:text}),loading&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"visually-hidden",children:"Loading..."})}),iconEnd&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_DIcon__WEBPACK_IMPORTED_MODULE_3__.Z,{icon:iconEnd,familyClass:iconEndFamilyClass,familyPrefix:iconEndFamilyPrefix,materialStyle:iconEndMaterialStyle})]})}DButton.displayName="DButton";try{DButton.displayName="DButton",DButton.__docgenInfo={description:"",displayName:"DButton",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},iconStart:{defaultValue:null,description:"",name:"iconStart",required:!1,type:{name:"string | undefined"}},iconStartDisabled:{defaultValue:null,description:"",name:"iconStartDisabled",required:!1,type:{name:"boolean | undefined"}},iconStartFamilyClass:{defaultValue:null,description:"",name:"iconStartFamilyClass",required:!1,type:{name:"string | undefined"}},iconStartFamilyPrefix:{defaultValue:null,description:"",name:"iconStartFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconStartAriaLabel:{defaultValue:null,description:"",name:"iconStartAriaLabel",required:!1,type:{name:"string | undefined"}},iconStartTabIndex:{defaultValue:null,description:"",name:"iconStartTabIndex",required:!1,type:{name:"number | undefined"}},iconStartMaterialStyle:{defaultValue:null,description:"",name:"iconStartMaterialStyle",required:!1,type:{name:"boolean | undefined"}},iconEnd:{defaultValue:null,description:"",name:"iconEnd",required:!1,type:{name:"string | undefined"}},iconEndDisabled:{defaultValue:null,description:"",name:"iconEndDisabled",required:!1,type:{name:"boolean | undefined"}},iconEndFamilyClass:{defaultValue:null,description:"",name:"iconEndFamilyClass",required:!1,type:{name:"string | undefined"}},iconEndFamilyPrefix:{defaultValue:null,description:"",name:"iconEndFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconEndAriaLabel:{defaultValue:null,description:"",name:"iconEndAriaLabel",required:!1,type:{name:"string | undefined"}},iconEndTabIndex:{defaultValue:null,description:"",name:"iconEndTabIndex",required:!1,type:{name:"number | undefined"}},iconEndMaterialStyle:{defaultValue:null,description:"",name:"iconEndMaterialStyle",required:!1,type:{name:"boolean | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},theme:{defaultValue:{value:"primary"},description:"",name:"theme",required:!1,type:{name:"string | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"lg"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"link"'},{value:'"outline"'}]}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"disabled"'},{value:'"active"'},{value:'"focus-visible"'},{value:'"hover"'}]}},text:{defaultValue:{value:""},description:"",name:"text",required:!1,type:{name:"string | undefined"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string | undefined"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | undefined"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},pill:{defaultValue:null,description:"",name:"pill",required:!1,type:{name:"boolean | undefined"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},loadingAriaLabel:{defaultValue:null,description:"",name:"loadingAriaLabel",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},stopPropagationEnabled:{defaultValue:{value:"true"},description:"",name:"stopPropagationEnabled",required:!1,type:{name:"boolean | undefined"}},form:{defaultValue:null,description:"",name:"form",required:!1,type:{name:"string | undefined"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DButton/DButton.tsx#DButton"]={docgenInfo:DButton.__docgenInfo,name:"DButton",path:"src/components/DButton/DButton.tsx#DButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/DIcon/DIcon.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return DIcon}});var react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),classnames=__webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),config=__webpack_require__("./src/components/config.ts"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function DIconBase({icon:icon,theme:theme,style:style,className:className,size:size="1.5rem",loading:loading=!1,loadingDuration:loadingDuration=1.8,hasCircle:hasCircle=!1,circleSize:circleSize=`calc(var(--${config.k2}icon-component-size) * 1)`,color:color,backgroundColor:backgroundColor,materialStyle:materialStyle=!1,familyClass:familyClass="bi",familyPrefix:familyPrefix="bi-"}){const colorStyle=(0,react.useMemo)((()=>color?{[`--${config.k2}icon-component-color`]:color}:theme?{[`--${config.k2}icon-component-color`]:`var(--${config.k2}${theme})`}:{}),[color,theme]),backgroundStyle=(0,react.useMemo)((()=>backgroundColor?{[`--${config.k2}icon-component-bg-color`]:backgroundColor}:hasCircle?theme?{[`--${config.k2}icon-component-bg-color`]:`rgba(var(--${config.k2}${theme}-rgb), 0.1)`}:{[`--${config.k2}icon-component-bg-color`]:`rgba(var(--${config.k2}body-color-rgb), 0.1)`}:{}),[backgroundColor,hasCircle,theme]),circleSizeStyle=(0,react.useMemo)((()=>hasCircle?{[`--${config.k2}icon-component-padding`]:circleSize}:{[`--${config.k2}icon-component-padding`]:"0"}),[circleSize,hasCircle]),generateStyleVariables=(0,react.useMemo)((()=>({[`--${config.k2}icon-component-size`]:size,[`--${config.k2}icon-component-loading-duration`]:`${loadingDuration}s`,...colorStyle,...backgroundStyle,...circleSizeStyle,...style})),[size,loadingDuration,colorStyle,backgroundStyle,circleSizeStyle,style]),generateClasses=(0,react.useMemo)((()=>({"d-icon":!0,[familyClass]:!0,"d-icon-loading":loading,...!materialStyle&&{[`${familyPrefix}${icon}`]:!0},...className&&{[className]:!0}})),[familyClass,loading,className,materialStyle,familyPrefix,icon]);return(0,jsx_runtime.jsx)("i",{className:classnames_default()(generateClasses),style:generateStyleVariables,children:materialStyle&&icon})}DIconBase.displayName="DIconBase";try{DIconBase.displayName="DIconBase",DIconBase.__docgenInfo={description:"",displayName:"DIconBase",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"string | undefined"}},size:{defaultValue:{value:"1.5rem"},description:"",name:"size",required:!1,type:{name:"string | undefined"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},loadingDuration:{defaultValue:{value:"1.8"},description:"",name:"loadingDuration",required:!1,type:{name:"number | undefined"}},hasCircle:{defaultValue:{value:"false"},description:"",name:"hasCircle",required:!1,type:{name:"boolean | undefined"}},circleSize:{defaultValue:{value:"`calc(var(--${PREFIX_BS}icon-component-size) * 1)`"},description:"",name:"circleSize",required:!1,type:{name:"string | undefined"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string | undefined"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string | undefined"}},materialStyle:{defaultValue:{value:"false"},description:"",name:"materialStyle",required:!1,type:{name:"boolean | undefined"}},familyClass:{defaultValue:{value:"bi"},description:"",name:"familyClass",required:!1,type:{name:"string | undefined"}},familyPrefix:{defaultValue:{value:"bi-"},description:"",name:"familyPrefix",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DIconBase/DIconBase.tsx#DIconBase"]={docgenInfo:DIconBase.__docgenInfo,name:"DIconBase",path:"src/components/DIconBase/DIconBase.tsx#DIconBase"})}catch(__react_docgen_typescript_loader_error){}var components_DIconBase=DIconBase,DContext=__webpack_require__("./src/contexts/DContext.tsx");function DIcon({familyClass:propFamilyClass,familyPrefix:propFamilyPrefix,materialStyle:propMaterialStyle,...props}){const{icon:{familyClass:familyClass,familyPrefix:familyPrefix,materialStyle:materialStyle}}=(0,DContext.Fg)();return(0,jsx_runtime.jsx)(components_DIconBase,{familyClass:propFamilyClass||familyClass,familyPrefix:propFamilyPrefix||familyPrefix,materialStyle:propMaterialStyle||materialStyle,...props})}DIcon.displayName="DIcon";try{DIcon.displayName="DIcon",DIcon.__docgenInfo={description:"",displayName:"DIcon",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"string | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string | undefined"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},loadingDuration:{defaultValue:null,description:"",name:"loadingDuration",required:!1,type:{name:"number | undefined"}},hasCircle:{defaultValue:null,description:"",name:"hasCircle",required:!1,type:{name:"boolean | undefined"}},circleSize:{defaultValue:null,description:"",name:"circleSize",required:!1,type:{name:"string | undefined"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string | undefined"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string | undefined"}},materialStyle:{defaultValue:null,description:"",name:"materialStyle",required:!1,type:{name:"boolean | undefined"}},familyClass:{defaultValue:null,description:"",name:"familyClass",required:!1,type:{name:"string | undefined"}},familyPrefix:{defaultValue:null,description:"",name:"familyPrefix",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DIcon/DIcon.tsx#DIcon"]={docgenInfo:DIcon.__docgenInfo,name:"DIcon",path:"src/components/DIcon/DIcon.tsx#DIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/DIcon/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var _DIcon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/DIcon/DIcon.tsx");__webpack_exports__.Z=_DIcon__WEBPACK_IMPORTED_MODULE_0__.Z},"./src/components/config.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{_o:function(){return ICON_FAMILY_CLASS},k2:function(){return PREFIX_BS},yM:function(){return ICON_FAMILY_PREFIX}});const PREFIX_BS="bs-",ICON_FAMILY_CLASS="bi",ICON_FAMILY_PREFIX="bi-"},"./src/contexts/DContext.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Fg:function(){return useDContext},oW:function(){return DContextProvider}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const defaultState={language:"en",currency:{symbol:"$",precision:2,separator:",",decimal:"."},icon:{familyClass:"bi",familyPrefix:"bi-",materialStyle:!1},iconMap:{x:"x",xLg:"x-lg",chevronUp:"chevron-up",chevronDown:"chevron-down",chevronLeft:"chevron-left",chevronRight:"chevron-right",upload:"cloud-upload",calendar:"calendar",check:"check",alert:{warning:"exclamation-circle",danger:"exclamation-triangle",success:"check-circle",info:"info-circle",dark:"info-circle",light:"info-circle",primary:"info-circle",secondary:"info-circle"},input:{invalid:"exclamation-circle",valid:"check",search:"search",show:"eye",hide:"eye-slash",increase:"plus-square",decrease:"dash-square"}},setContext:()=>{}},DContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultState);function DContextProvider({language:language=defaultState.language,currency:currency=defaultState.currency,icon:icon=defaultState.icon,iconMap:iconMap=defaultState.iconMap,children:children}){const[internalContext,setInternalContext]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({language:language,currency:currency,icon:icon,iconMap:iconMap}),setContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newValue=>setInternalContext((prevInternalContext=>({...prevInternalContext,...newValue})))),[]),value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({...internalContext,setContext:setContext})),[internalContext,setContext]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DContext.Provider,{value:value,children:children})}function useDContext(){const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DContext);if(void 0===context)throw new Error("useDContext was used outside of DContextProvider");return context}DContextProvider.displayName="DContextProvider";try{DContextProvider.displayName="DContextProvider",DContextProvider.__docgenInfo={description:"",displayName:"DContextProvider",props:{language:{defaultValue:{value:"en"},description:"",name:"language",required:!1,type:{name:"string | undefined"}},currency:{defaultValue:{value:"{\n    symbol: '$',\n    precision: 2,\n    separator: ',',\n    decimal: '.',\n  }"},description:"",name:"currency",required:!1,type:{name:"CurrencyProps | undefined"}},icon:{defaultValue:{value:"{\n    familyClass: 'bi',\n    familyPrefix: 'bi-',\n    materialStyle: false,\n  }"},description:"",name:"icon",required:!1,type:{name:"IconProps | undefined"}},iconMap:{defaultValue:{value:"{\n    x: 'x',\n    xLg: 'x-lg',\n    chevronUp: 'chevron-up',\n    chevronDown: 'chevron-down',\n    chevronLeft: 'chevron-left',\n    chevronRight: 'chevron-right',\n    upload: 'cloud-upload',\n    calendar: 'calendar',\n    check: 'check',\n    alert: {\n      warning: 'exclamation-circle',\n      danger: 'exclamation-triangle',\n      success: 'check-circle',\n      info: 'info-circle',\n      dark: 'info-circle',\n      light: 'info-circle',\n      primary: 'info-circle',\n      secondary: 'info-circle',\n    },\n    input: {\n      invalid: 'exclamation-circle',\n      valid: 'check',\n      search: 'search',\n      show: 'eye',\n      hide: 'eye-slash',\n      increase: 'plus-square',\n      decrease: 'dash-square',\n    },\n  }"},description:"",name:"iconMap",required:!1,type:{name:"IconMapProps | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/contexts/DContext.tsx#DContextProvider"]={docgenInfo:DContextProvider.__docgenInfo,name:"DContextProvider",path:"src/contexts/DContext.tsx#DContextProvider"})}catch(__react_docgen_typescript_loader_error){}},"./stories/components/DButton.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Link:function(){return Link},LinkIconRight:function(){return LinkIconRight},MaterialSecondaryIconRight:function(){return MaterialSecondaryIconRight},Primary:function(){return Primary},PrimaryIconRight:function(){return PrimaryIconRight},Secondary:function(){return Secondary},SecondaryIconRight:function(){return SecondaryIconRight},__namedExportsOrder:function(){return __namedExportsOrder}});var _src_components_DButton_DButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/DButton/DButton.tsx"),_config_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./stories/config/constants.ts"),_src_components_config__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/config.ts"),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/contexts/DContext.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const config={title:"Design System/Components/Button",component:_src_components_DButton_DButton__WEBPACK_IMPORTED_MODULE_1__.Z,parameters:{docs:{description:{component:`\nThe style of our buttons is highly based on bootstrap, however,\nboostrap darkens or lightens the color of a button to generate its different states,\nwe use the established palettes in the variables.\n\n## Differences between bootstrap and our implementation:\n\n### For our buttons:\n\n#### normal\n* **default** background \`-500\`, text contrast with background\n* **hover** background \`-600\`, text contrast with background\n* **focus** background \`-600\`, text contrast with background\n* **active** background \`-700\`, text contrast with background\n* **disabled** background \`-100\`, text contrast with background\n\n#### outline\n* **default** border-color \`-600\`, text color background\n* **hover** border-color \`-600\`, background hover \`-100\`, text color background\n* **focus** border-color \`-600\`, background focus \`-100\`, text color background\n* **active** border-color \`-600\`, background active \`-200\`, text color background\n* **disabled** border-color \`-100\`, text contrast with background\n\n### For bootstrap buttons:\n\n#### normal\n* **default** background \`-500\`, text contrast with background\n\n> **mix-color**: The other states use the default color of the text to determine which color to mix with, if it is light, \`black\` is used, if it is dark, \`white\` is used.\n\n* **hover** background mix between \`mix-color\` and \`-500\` at \`15%\`, text contrast with background color, border-color mix at \`20%\` for dark and \`10%\` for light.\n* **focus** use hover settings with outline\n* **active** background mix between \`mix-color\` and \`-500\` at \`20%\`, text contrast with background color, border-color mix at \`25%\` for dark and \`10%\` for light.\n* **disabled** default style with \`.65\` opacity.\n\n#### outline\n* **default** border-color \`-500\`, text color \`-500\`\n* **hover** border-color \`-500\`, background hover \`-500\`, text contrast with background\n* **focus** use hover settings with outline\n* **active** use hover settings\n* **disabled** default style with \`.65\` opacity.\n\n## CSS Variables\n\nThe css variables available by default can be seen in the\nbootstrap documentation: [Bootstrap Button CSS Variables](https://getbootstrap.com/docs/5.3/components/buttons/#css)\n\n\n| Variable                                | Type              | Description                       |\n|-----------------------------------------|-------------------|-----------------------------------|\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}btn-padding-x             | css length unit   | Button padding horizontal         |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}btn-padding-y             | css length unit   | Button padding vertical           |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}btn-font-size             | css length unit   | Button font size                  |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}btn-font-weight           | css weight unit   | Button font weight                |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}btn-line-height           | css length unit   | Button line height                |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}btn-color                 | css color unit    | Button text color                 |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}btn-bg                    | css color unit    | Button background color           |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}btn-border-width          | css length unit   | Button border width               |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}btn-border-color          | css color unit    | Button border color               |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}btn-border-radius         | css length unit   | Button border radius              |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}btn-hover-border-color    | css color unit    | Button hover border color         |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}btn-box-shadow            | css box shadow    | Button box shadow                 |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}btn-disabled-opacity      | css length unit   | Button link padding vertical      |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}btn-focus-box-shadow      | css box shadow    | Button focus box shadow           |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}btn–text-decoration       | text decoration   | Button text decoration            |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}btn-lg-padding-x          | css length unit   | Button large padding horizontal   |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}btn-lg-padding-y          | css length unit   | Button large padding vertical     |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}btn-lg-font-size          | css length unit   | Button large font size            |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}btn-lg-border-radius      | css length unit   | Button large border radius        |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}btn-sm-padding-x          | css length unit   | Button small padding horizontal   |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}btn-sm-padding-y          | css length unit   | Button small padding vertical     |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}btn-sm-font-size          | css length unit   | Button small font size            |\n| --${_src_components_config__WEBPACK_IMPORTED_MODULE_2__.k2}btn-sm-border-radius      | css length unit   | Button small border radius        |\n\n+ [Bootstrap css variables](https://getbootstrap.com/docs/5.3/components/buttons/#variables)\n        `}}},argTypes:{className:{control:"text",type:"string"},style:{control:"object"},id:{control:"text",type:"string"},form:{control:"text",type:"string"},ariaLabel:{control:"text",type:"string"},theme:{control:"select",type:{name:"string",required:!0},options:_config_constants__WEBPACK_IMPORTED_MODULE_3__.yU,table:{defaultValue:{summary:"primary"}}},size:{control:{type:"select",labels:{undefined:"default"}},type:"string",options:_config_constants__WEBPACK_IMPORTED_MODULE_3__.om},text:{control:"text",type:"string",description:"The text to display."},type:{control:"select",type:"string",options:["submit","reset","button"],table:{defaultValue:{summary:"button"}},description:"The html type of the button."},variant:{type:"string",control:{type:"select",labels:{undefined:"empty"}},options:[void 0,"outline","text"],description:"The variant to use."},iconStart:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,..._config_constants__WEBPACK_IMPORTED_MODULE_3__.UZ]},iconStartDisabled:{control:"boolean",type:"boolean"},iconStartFamilyClass:{control:"text",type:"string"},iconStartFamilyPrefix:{control:"text",type:"string"},iconStartMaterialStyle:{control:"boolean",type:"boolean"},iconStartAriaLabel:{control:"text",type:"string"},iconStartTabIndex:{control:"number",type:"number"},iconEnd:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,..._config_constants__WEBPACK_IMPORTED_MODULE_3__.UZ]},iconEndDisabled:{control:"boolean",type:"boolean"},iconEndFamilyClass:{control:"text",type:"string"},iconEndFamilyPrefix:{control:"text",type:"string"},iconEndMaterialStyle:{control:"boolean",type:"boolean"},iconEndAriaLabel:{control:"text",type:"string"},iconEndTabIndex:{control:"number",type:"number"},value:{control:"text",type:"string",description:"The html value of the button."},loading:{control:"boolean",table:{defaultValue:{summary:!1}},type:"boolean"},disabled:{control:"boolean",table:{defaultValue:{summary:!1}},type:"boolean"},loadingAriaLabel:{control:"text",type:"string"},state:{control:{type:"select",labels:{undefined:"empty"}},options:[void 0,..._config_constants__WEBPACK_IMPORTED_MODULE_3__.dD],type:"string",description:"Change the state of the button"},stopPropagationEnabled:{control:"boolean",table:{defaultValue:{summary:!0}},type:"boolean"},onClick:{action:"onClick"}},tags:["autodocs"]};__webpack_exports__.default=config;const Primary={args:{theme:"primary",size:void 0,text:"Default",type:"button",variant:void 0,loading:!1,iconStart:void 0,iconEnd:void 0}},PrimaryIconRight={args:{theme:"primary",size:void 0,text:"Default",type:"button",variant:void 0,loading:!1,iconStart:void 0,iconEnd:"chevron-right"}},Secondary={args:{theme:"secondary",size:void 0,text:"Default",type:"button",variant:"outline",loading:!1,iconStart:void 0,iconEnd:void 0}},SecondaryIconRight={args:{theme:"secondary",size:void 0,text:"Default",type:"button",variant:"outline",loading:!1,iconStart:void 0,iconEnd:"chevron-right"}},Link={args:{theme:"secondary",size:void 0,text:"Default",type:"button",variant:"link",loading:!1,iconStart:void 0,iconEnd:void 0}},LinkIconRight={args:{theme:"secondary",size:void 0,text:"Default",type:"button",variant:"link",loading:!1,iconStart:void 0,iconEnd:"chevron-right"}},MaterialSecondaryIconRight={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.oW,{..._config_constants__WEBPACK_IMPORTED_MODULE_3__.Hr,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DButton_DButton__WEBPACK_IMPORTED_MODULE_1__.Z,{...args})}),args:{theme:"primary",size:void 0,text:"Default",type:"button",loading:!1,iconStart:void 0,iconEnd:"chevron_right"},parameters:{docs:{canvas:{sourceState:"shown"}}}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    theme: 'primary',\n    size: undefined,\n    text: 'Default',\n    type: 'button',\n    variant: undefined,\n    loading: false,\n    iconStart: undefined,\n    iconEnd: undefined\n  }\n}",...Primary.parameters?.docs?.source}}},PrimaryIconRight.parameters={...PrimaryIconRight.parameters,docs:{...PrimaryIconRight.parameters?.docs,source:{originalSource:"{\n  args: {\n    theme: 'primary',\n    size: undefined,\n    text: 'Default',\n    type: 'button',\n    variant: undefined,\n    loading: false,\n    iconStart: undefined,\n    iconEnd: 'chevron-right'\n  }\n}",...PrimaryIconRight.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"{\n  args: {\n    theme: 'secondary',\n    size: undefined,\n    text: 'Default',\n    type: 'button',\n    variant: 'outline',\n    loading: false,\n    iconStart: undefined,\n    iconEnd: undefined\n  }\n}",...Secondary.parameters?.docs?.source}}},SecondaryIconRight.parameters={...SecondaryIconRight.parameters,docs:{...SecondaryIconRight.parameters?.docs,source:{originalSource:"{\n  args: {\n    theme: 'secondary',\n    size: undefined,\n    text: 'Default',\n    type: 'button',\n    variant: 'outline',\n    loading: false,\n    iconStart: undefined,\n    iconEnd: 'chevron-right'\n  }\n}",...SecondaryIconRight.parameters?.docs?.source}}},Link.parameters={...Link.parameters,docs:{...Link.parameters?.docs,source:{originalSource:"{\n  args: {\n    theme: 'secondary',\n    size: undefined,\n    text: 'Default',\n    type: 'button',\n    variant: 'link',\n    loading: false,\n    iconStart: undefined,\n    iconEnd: undefined\n  }\n}",...Link.parameters?.docs?.source}}},LinkIconRight.parameters={...LinkIconRight.parameters,docs:{...LinkIconRight.parameters?.docs,source:{originalSource:"{\n  args: {\n    theme: 'secondary',\n    size: undefined,\n    text: 'Default',\n    type: 'button',\n    variant: 'link',\n    loading: false,\n    iconStart: undefined,\n    iconEnd: 'chevron-right'\n  }\n}",...LinkIconRight.parameters?.docs?.source}}},MaterialSecondaryIconRight.parameters={...MaterialSecondaryIconRight.parameters,docs:{...MaterialSecondaryIconRight.parameters?.docs,source:{originalSource:"{\n  render: (args: ComponentProps<typeof DButton>) => <DContextProvider {...CONTEXT_PROVIDER_CONFIG_MATERIAL}>\n      <DButton {...args} />\n    </DContextProvider>,\n  args: {\n    theme: 'primary',\n    size: undefined,\n    text: 'Default',\n    type: 'button',\n    loading: false,\n    iconStart: undefined,\n    iconEnd: 'chevron_right'\n  },\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: 'shown'\n      }\n    }\n  }\n}",...MaterialSecondaryIconRight.parameters?.docs?.source},description:{story:"To use buttons with Material Symbols style use a `DContextProvider` with `familyClass`\nand the flag `materialStyle=true` or use the flags directly over the\n`DButton` component as a props",...MaterialSecondaryIconRight.parameters?.docs?.description}}};const __namedExportsOrder=["Primary","PrimaryIconRight","Secondary","SecondaryIconRight","Link","LinkIconRight","MaterialSecondaryIconRight"];try{MaterialSecondaryIconRight.displayName="MaterialSecondaryIconRight",MaterialSecondaryIconRight.__docgenInfo={description:"To use buttons with Material Symbols style use a `DContextProvider` with `familyClass`\nand the flag `materialStyle=true` or use the flags directly over the\n`DButton` component as a props",displayName:"MaterialSecondaryIconRight",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/components/DButton.stories.tsx#MaterialSecondaryIconRight"]={docgenInfo:MaterialSecondaryIconRight.__docgenInfo,name:"MaterialSecondaryIconRight",path:"stories/components/DButton.stories.tsx#MaterialSecondaryIconRight"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);