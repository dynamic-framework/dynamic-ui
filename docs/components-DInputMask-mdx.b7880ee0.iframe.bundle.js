"use strict";(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[2372,376],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{NF:function(){return withMDXComponents},Zo:function(){return MDXProvider},ah:function(){return useMDXComponents},pC:function(){return MDXContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/components/DInputMask.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_home_runner_work_dynamic_ui_dynamic_ui_node_modules_pnpm_storybook_addon_docs_7_5_1_types_react_dom_18_2_14_types_react_18_2_31_react_dom_18_2_0_react_18_2_0_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.5.1_@types+react-dom@18.2.14_@types+react@18.2.31_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),_src_components_config__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/config.ts"),_DInputMask_stories__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./stories/components/DInputMask.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",ul:"ul",li:"li",a:"a",h2:"h2"},(0,_home_runner_work_dynamic_ui_dynamic_ui_node_modules_pnpm_storybook_addon_docs_7_5_1_types_react_dom_18_2_14_types_react_18_2_31_react_dom_18_2_0_react_18_2_0_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"input-mask",children:"Input Mask"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Component composition with ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"d-input"})," to make a mask input component."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"To understand in more detail the aspects covered by this component, review the following documentation:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://www.npmjs.com/package/@react-input/mask",target:"_blank",rel:"nofollow noopener noreferrer",children:"@react-input/mask"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"css-variables",children:"CSS Variables"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.UG,{children:`\n\n  | Variable                                            | Type            | Description                   |\n  |-----------------------------------------------------|-----------------|-------------------------------|\n  | \`--${_src_components_config__WEBPACK_IMPORTED_MODULE_4__.k2}input-control-gap\`                 | css length unit | Space between layout elements |\n  | \`--${_src_components_config__WEBPACK_IMPORTED_MODULE_4__.k2}input-label-color\`                 | css color unit  | Label color                   |\n  | \`--${_src_components_config__WEBPACK_IMPORTED_MODULE_4__.k2}input-label-font-weight\`           | css font weight | Label font weight             |\n  | \`--${_src_components_config__WEBPACK_IMPORTED_MODULE_4__.k2}input-label-font-size\`             | css length unit | Label font size               |\n  | \`--${_src_components_config__WEBPACK_IMPORTED_MODULE_4__.k2}input-label-padding-x\`             | css length unit | Label horizontal padding      |\n  | \`--${_src_components_config__WEBPACK_IMPORTED_MODULE_4__.k2}input-label-padding-y\`             | css length unit | Label vertical padding        |\n  | \`--${_src_components_config__WEBPACK_IMPORTED_MODULE_4__.k2}input-label-gap\`                   | css length unit | Space between label elements  |\n  | \`--${_src_components_config__WEBPACK_IMPORTED_MODULE_4__.k2}input-group-border-color\`          | css color unit  | Input border color            |\n  | \`--${_src_components_config__WEBPACK_IMPORTED_MODULE_4__.k2}input-group-border-width\`          | css length unit | Input border width            |\n  | \`--${_src_components_config__WEBPACK_IMPORTED_MODULE_4__.k2}input-group-border-radius\`         | css length unit | Input border radius           |\n  | \`--${_src_components_config__WEBPACK_IMPORTED_MODULE_4__.k2}input-group-hover-border-color\`    | css color unit  | Input hover border color      |\n  | \`--${_src_components_config__WEBPACK_IMPORTED_MODULE_4__.k2}input-group-focus-border-color\`    | css color unit  | Input focus border color      |\n  | \`--${_src_components_config__WEBPACK_IMPORTED_MODULE_4__.k2}input-group-focus-box-shadow\`      | css shadow      | Input focus box shadow        |\n  | \`--${_src_components_config__WEBPACK_IMPORTED_MODULE_4__.k2}input-form-text-padding\`           | css length unit | Hint padding                  |\n  | \`--${_src_components_config__WEBPACK_IMPORTED_MODULE_4__.k2}input-form-text-gap\`               | css length unit | Space between hint elements   |\n  | \`--${_src_components_config__WEBPACK_IMPORTED_MODULE_4__.k2}input-form-text-color\`             | css color unit  | Hint color                    |\n  | \`--${_src_components_config__WEBPACK_IMPORTED_MODULE_4__.k2}input-group-disabled-bg\`           | css color unit  | Input disable background      |\n  | \`--${_src_components_config__WEBPACK_IMPORTED_MODULE_4__.k2}input-group-disabled-color\`        | css color unit  | Input disable color           |\n  | \`--${_src_components_config__WEBPACK_IMPORTED_MODULE_4__.k2}input-group-disabled-border-color\` | css color unit  | Input disable border color    |\n  | \`--${_src_components_config__WEBPACK_IMPORTED_MODULE_4__.k2}input-form-control-text-align\`     | css text align  | Input text align              |\n\n  `}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"args",children:"Args"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_DInputMask_stories__WEBPACK_IMPORTED_MODULE_5__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_DInputMask_stories__WEBPACK_IMPORTED_MODULE_5__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.fQ,{})]})}__webpack_exports__.default=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_dynamic_ui_dynamic_ui_node_modules_pnpm_storybook_addon_docs_7_5_1_types_react_dom_18_2_14_types_react_18_2_31_react_dom_18_2_0_react_18_2_0_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components/DIcon/DIcon.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return DIcon}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_config__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/config.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function DIcon({icon:icon,theme:theme,style:style,className:className,size:size="1.5rem",loading:loading=!1,loadingDuration:loadingDuration=1.8,hasCircle:hasCircle=!1,circleSize:circleSize=`calc(var(--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}icon-component-size) * 1)`,color:color,backgroundColor:backgroundColor,familyClass:familyClass="bi",familyPrefix:familyPrefix="bi-"}){const colorStyle=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>color?{[`--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}component-color`]:color}:theme?{[`--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}icon-component-color`]:`var(--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}${theme})`}:{}),[color,theme]),backgroundStyle=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>backgroundColor?{[`--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}icon-component-bg-color`]:backgroundColor}:hasCircle?theme?{[`--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}icon-component-bg-color`]:`rgba(var(--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}${theme}-rgb), 0.1)`}:{[`--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}icon-component-bg-color`]:`rgba(var(--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}body-color-rgb), 0.1)`}:{}),[backgroundColor,hasCircle,theme]),circleSizeStyle=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>hasCircle?{[`--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}icon-component-padding`]:circleSize}:{[`--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}icon-component-padding`]:"0"}),[circleSize,hasCircle]),generateStyleVariables=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({[`--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}icon-component-size`]:size,[`--${_config__WEBPACK_IMPORTED_MODULE_3__.k2}icon-component-loading-duration`]:`${loadingDuration}s`,...colorStyle,...backgroundStyle,...circleSizeStyle,...style})),[size,loadingDuration,colorStyle,backgroundStyle,circleSizeStyle,style]),generateClasses=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({"d-icon":!0,[familyClass]:!0,[`${familyPrefix}${icon}`]:!0,"d-icon-loading":loading,...className&&{[className]:!0}})),[familyClass,familyPrefix,icon,className,loading]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(generateClasses),style:generateStyleVariables})}DIcon.displayName="DIcon";try{DIcon.displayName="DIcon",DIcon.__docgenInfo={description:"",displayName:"DIcon",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"string | undefined"}},size:{defaultValue:{value:"1.5rem"},description:"",name:"size",required:!1,type:{name:"string | undefined"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},loadingDuration:{defaultValue:{value:"1.8"},description:"",name:"loadingDuration",required:!1,type:{name:"number | undefined"}},hasCircle:{defaultValue:{value:"false"},description:"",name:"hasCircle",required:!1,type:{name:"boolean | undefined"}},circleSize:{defaultValue:{value:"`calc(var(--${PREFIX_BS}icon-component-size) * 1)`"},description:"",name:"circleSize",required:!1,type:{name:"string | undefined"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string | undefined"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string | undefined"}},familyClass:{defaultValue:{value:"bi"},description:"",name:"familyClass",required:!1,type:{name:"string | undefined"}},familyPrefix:{defaultValue:{value:"bi-"},description:"",name:"familyPrefix",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DIcon/DIcon.tsx#DIcon"]={docgenInfo:DIcon.__docgenInfo,name:"DIcon",path:"src/components/DIcon/DIcon.tsx#DIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/DIcon/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _DIcon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/DIcon/DIcon.tsx");__webpack_exports__.Z=_DIcon__WEBPACK_IMPORTED_MODULE_0__.Z},"./src/components/DInput/DInput.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_config__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/config.ts"),_DIcon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/DIcon/index.ts"),_hooks_useProvidedRefOrCreate__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/hooks/useProvidedRefOrCreate.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function DInput({id:id,style:style,className:className,label:label="",labelIcon:labelIcon,labelIconFamilyClass:labelIconFamilyClass,labelIconFamilyPrefix:labelIconFamilyPrefix,disabled:disabled=!1,readOnly:readOnly=!1,loading:loading=!1,iconFamilyClass:iconFamilyClass,iconFamilyPrefix:iconFamilyPrefix,iconStart:iconStart,iconStartFamilyClass:iconStartFamilyClass,iconStartFamilyPrefix:iconStartFamilyPrefix,iconStartAriaLabel:iconStartAriaLabel,iconStartTabIndex:iconStartTabIndex,iconEnd:iconEnd,iconEndFamilyClass:iconEndFamilyClass,iconEndFamilyPrefix:iconEndFamilyPrefix,iconEndAriaLabel:iconEndAriaLabel,iconEndTabIndex:iconEndTabIndex,hint:hint,invalid:invalid=!1,valid:valid=!1,floatingLabel:floatingLabel=!1,inputStart:inputStart,value:value,placeholder:placeholder="",onChange:onChange,onIconStartClick:onIconStartClick,onIconEndClick:onIconEndClick,...inputProps},ref){const inputRef=(0,_hooks_useProvidedRefOrCreate__WEBPACK_IMPORTED_MODULE_3__.Z)(ref),handleOnChange=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event=>{onChange?.(event.currentTarget.value)}),[onChange]),handleOnIconStartClick=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{onIconStartClick?.(value)}),[onIconStartClick,value]),handleOnIconEndClick=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{onIconEndClick?.(value)}),[onIconEndClick,value]),ariaDescribedby=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>[iconStart&&`${id}Start`,hint&&`${id}Hint`,iconEnd&&`${id}End`].filter(Boolean).join(" ")),[id,iconStart,iconEnd,hint]),inputComponent=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{ref:inputRef,id:id,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("form-control",{"is-invalid":invalid,"is-valid":valid}),disabled:disabled||loading,readOnly:readOnly,value:value,onChange:handleOnChange,...(floatingLabel||placeholder)&&{placeholder:floatingLabel?"":placeholder},...ariaDescribedby&&{"aria-describedby":ariaDescribedby},...inputProps})),[ariaDescribedby,disabled,handleOnChange,id,inputProps,inputRef,invalid,loading,placeholder,floatingLabel,readOnly,valid,value]),labelComponent=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("label",{htmlFor:id,children:[label,labelIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_DIcon__WEBPACK_IMPORTED_MODULE_4__.Z,{className:"d-input-icon",icon:labelIcon,size:`var(--${_config__WEBPACK_IMPORTED_MODULE_5__.k2}input-label-font-size)`,familyClass:labelIconFamilyClass,familyPrefix:labelIconFamilyPrefix})]})),[id,label,labelIcon,labelIconFamilyClass,labelIconFamilyPrefix]),dynamicComponent=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>floatingLabel?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"form-floating",children:[inputComponent,labelComponent]}):inputComponent),[floatingLabel,inputComponent,labelComponent]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()({"d-input":!0,...className&&{[className]:!0}}),style:style,children:[label&&!floatingLabel&&labelComponent,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"d-input-control",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()({"input-group":!0,"has-validation":invalid,disabled:disabled||loading}),children:[!!inputStart&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"input-group-text",children:inputStart}),iconStart&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{type:"button",className:"input-group-text",id:`${id}Start`,onClick:handleOnIconStartClick,disabled:disabled||loading,"aria-label":iconStartAriaLabel,tabIndex:iconStartTabIndex,children:iconStart&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_DIcon__WEBPACK_IMPORTED_MODULE_4__.Z,{className:"d-input-icon",icon:iconStart,familyClass:iconStartFamilyClass,familyPrefix:iconStartFamilyPrefix})}),dynamicComponent,(invalid||valid)&&!iconEnd&&!loading&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"input-group-text",id:`${id}State`,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_DIcon__WEBPACK_IMPORTED_MODULE_4__.Z,{className:"d-input-validation-icon",icon:invalid?"exclamation-circle":"check",familyClass:iconFamilyClass,familyPrefix:iconFamilyPrefix})}),iconEnd&&!loading&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{type:"button",className:"input-group-text",id:`${id}End`,onClick:handleOnIconEndClick,disabled:disabled||loading,"aria-label":iconEndAriaLabel,tabIndex:iconEndTabIndex,children:iconEnd&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_DIcon__WEBPACK_IMPORTED_MODULE_4__.Z,{className:"d-input-icon",icon:iconEnd,familyClass:iconEndFamilyClass,familyPrefix:iconEndFamilyPrefix})}),loading&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"input-group-text d-input-icon",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})]}),hint&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"form-text",id:`${id}Hint`,children:hint})]})]})}DInput.displayName="DInput";const ForwardedDInput=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(DInput);ForwardedDInput.displayName="DInput",__webpack_exports__.Z=ForwardedDInput;try{DInput.displayName="DInput",DInput.__docgenInfo={description:"",displayName:"DInput",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},iconFamilyClass:{defaultValue:null,description:"",name:"iconFamilyClass",required:!1,type:{name:"string | undefined"}},iconFamilyPrefix:{defaultValue:null,description:"",name:"iconFamilyPrefix",required:!1,type:{name:"string | undefined"}},labelIcon:{defaultValue:null,description:"",name:"labelIcon",required:!1,type:{name:"string | undefined"}},labelIconFamilyClass:{defaultValue:null,description:"",name:"labelIconFamilyClass",required:!1,type:{name:"string | undefined"}},labelIconFamilyPrefix:{defaultValue:null,description:"",name:"labelIconFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconStart:{defaultValue:null,description:"",name:"iconStart",required:!1,type:{name:"string | undefined"}},iconStartFamilyClass:{defaultValue:null,description:"",name:"iconStartFamilyClass",required:!1,type:{name:"string | undefined"}},iconStartFamilyPrefix:{defaultValue:null,description:"",name:"iconStartFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconStartAriaLabel:{defaultValue:null,description:"",name:"iconStartAriaLabel",required:!1,type:{name:"string | undefined"}},iconStartTabIndex:{defaultValue:null,description:"",name:"iconStartTabIndex",required:!1,type:{name:"number | undefined"}},iconEnd:{defaultValue:null,description:"",name:"iconEnd",required:!1,type:{name:"string | undefined"}},iconEndFamilyClass:{defaultValue:null,description:"",name:"iconEndFamilyClass",required:!1,type:{name:"string | undefined"}},iconEndFamilyPrefix:{defaultValue:null,description:"",name:"iconEndFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconEndAriaLabel:{defaultValue:null,description:"",name:"iconEndAriaLabel",required:!1,type:{name:"string | undefined"}},iconEndTabIndex:{defaultValue:null,description:"",name:"iconEndTabIndex",required:!1,type:{name:"number | undefined"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string | undefined"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean | undefined"}},valid:{defaultValue:null,description:"",name:"valid",required:!1,type:{name:"boolean | undefined"}},floatingLabel:{defaultValue:null,description:"",name:"floatingLabel",required:!1,type:{name:"boolean | undefined"}},inputStart:{defaultValue:null,description:"",name:"inputStart",required:!1,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void) | undefined"}},onIconStartClick:{defaultValue:null,description:"",name:"onIconStartClick",required:!1,type:{name:"((value?: string | undefined) => void) | undefined"}},onIconEndClick:{defaultValue:null,description:"",name:"onIconEndClick",required:!1,type:{name:"((value?: string | undefined) => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DInput/DInput.tsx#DInput"]={docgenInfo:DInput.__docgenInfo,name:"DInput",path:"src/components/DInput/DInput.tsx#DInput"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/DInput/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _DInput__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/DInput/DInput.tsx");__webpack_exports__.Z=_DInput__WEBPACK_IMPORTED_MODULE_0__.Z},"./src/components/config.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{_o:function(){return ICON_FAMILY_CLASS},d2:function(){return ALERT_TYPE_ICON},k2:function(){return PREFIX_BS},yM:function(){return ICON_FAMILY_PREFIX}});const PREFIX_BS="bs-",ICON_FAMILY_CLASS="bi",ICON_FAMILY_PREFIX="bi-",ALERT_TYPE_ICON={warning:"exclamation-circle",danger:"exclamation-triangle",success:"check-circle",info:"info-circle",dark:"info-circle",light:"info-circle",primary:"info-circle",secondary:"info-circle"}},"./src/hooks/useProvidedRefOrCreate.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return useProvidedRefOrCreate}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function useProvidedRefOrCreate(providedRef){const createdRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);return providedRef??createdRef}},"./stories/components/DInputMask.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return DInputMask_stories}});var react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),dist_module=__webpack_require__("../../node_modules/.pnpm/@react-input+mask@1.0.20_@types+react@18.2.31_react-dom@18.2.0_react@18.2.0/node_modules/@react-input/mask/dist/module/index.js"),DInput=__webpack_require__("./src/components/DInput/index.ts"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function DInputMask(props,ref){return(0,jsx_runtime.jsx)(dist_module.v,{ref:ref,component:DInput.Z,...props})}DInputMask.displayName="DInputMask";const ForwardedDInputMask=(0,react.forwardRef)(DInputMask);ForwardedDInputMask.displayName="DInputMask";var DInputMask_DInputMask=ForwardedDInputMask;try{DInputMask.displayName="DInputMask",DInputMask.__docgenInfo={description:"",displayName:"DInputMask",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void) | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string | undefined"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | undefined"}},labelIcon:{defaultValue:null,description:"",name:"labelIcon",required:!1,type:{name:"string | undefined"}},labelIconFamilyClass:{defaultValue:null,description:"",name:"labelIconFamilyClass",required:!1,type:{name:"string | undefined"}},labelIconFamilyPrefix:{defaultValue:null,description:"",name:"labelIconFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconStart:{defaultValue:null,description:"",name:"iconStart",required:!1,type:{name:"string | undefined"}},iconStartFamilyClass:{defaultValue:null,description:"",name:"iconStartFamilyClass",required:!1,type:{name:"string | undefined"}},iconStartFamilyPrefix:{defaultValue:null,description:"",name:"iconStartFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconStartAriaLabel:{defaultValue:null,description:"",name:"iconStartAriaLabel",required:!1,type:{name:"string | undefined"}},iconStartTabIndex:{defaultValue:null,description:"",name:"iconStartTabIndex",required:!1,type:{name:"number | undefined"}},iconEnd:{defaultValue:null,description:"",name:"iconEnd",required:!1,type:{name:"string | undefined"}},iconEndFamilyClass:{defaultValue:null,description:"",name:"iconEndFamilyClass",required:!1,type:{name:"string | undefined"}},iconEndFamilyPrefix:{defaultValue:null,description:"",name:"iconEndFamilyPrefix",required:!1,type:{name:"string | undefined"}},iconEndAriaLabel:{defaultValue:null,description:"",name:"iconEndAriaLabel",required:!1,type:{name:"string | undefined"}},iconEndTabIndex:{defaultValue:null,description:"",name:"iconEndTabIndex",required:!1,type:{name:"number | undefined"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},floatingLabel:{defaultValue:null,description:"",name:"floatingLabel",required:!1,type:{name:"boolean | undefined"}},onIconStartClick:{defaultValue:null,description:"",name:"onIconStartClick",required:!1,type:{name:"((value?: string | undefined) => void) | undefined"}},onIconEndClick:{defaultValue:null,description:"",name:"onIconEndClick",required:!1,type:{name:"((value?: string | undefined) => void) | undefined"}},iconFamilyClass:{defaultValue:null,description:"",name:"iconFamilyClass",required:!1,type:{name:"string | undefined"}},iconFamilyPrefix:{defaultValue:null,description:"",name:"iconFamilyPrefix",required:!1,type:{name:"string | undefined"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean | undefined"}},valid:{defaultValue:null,description:"",name:"valid",required:!1,type:{name:"boolean | undefined"}},inputStart:{defaultValue:null,description:"",name:"inputStart",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DInputMask/DInputMask.tsx#DInputMask"]={docgenInfo:DInputMask.__docgenInfo,name:"DInputMask",path:"src/components/DInputMask/DInputMask.tsx#DInputMask"})}catch(__react_docgen_typescript_loader_error){}var components_DInputMask=DInputMask_DInputMask,constants=__webpack_require__("./stories/config/constants.ts");var DInputMask_stories={title:"Design System/Components/Input Mask",component:components_DInputMask,argTypes:{id:{control:"text",type:"string",description:"The id of the input"},name:{control:"text",type:"string",description:"Name of the input"},label:{control:"text",type:"string"},labelIcon:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...constants.UZ]},placeholder:{control:"text",type:"string"},type:{control:"select",options:["text","email","number"],type:"string",description:"The type of the input"},value:{control:"text",type:"string",description:"The value of the input"},inputMode:{control:"text",type:"string",description:"Input mode"},pattern:{control:"text",type:"string",description:"Pattern to validate"},disabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:!1}}},readOnly:{control:"boolean",type:"boolean",table:{defaultValue:{summary:!1}}},loading:{control:"boolean",type:"boolean",table:{defaultValue:{summary:!1}}},iconStart:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...constants.UZ]},iconStartAriaLabel:{control:"text",type:"string"},iconEndAriaLabel:{control:"text",type:"string"},iconEnd:{control:{type:"select",labels:{undefined:"empty"}},type:"string",options:[void 0,...constants.UZ]},hint:{control:"text",type:"string",description:"Hint to display, also used to display validity feedback"},invalid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:!1}}},valid:{control:"boolean",type:"boolean",table:{defaultValue:{summary:!1}}},floatingLabel:{control:"boolean",type:"boolean",table:{defaultValue:{summary:!1}}},onIconStartClick:{action:"onIconStartClicked"},onIconEndClick:{action:"onIconStartClicked"},mask:{control:"text",type:"string",description:"example: (+56)_ ____ ____"},replacement:{control:"object",description:"example: { _: /\\d/ }"},showMask:{control:"boolean",type:"boolean"},separate:{control:"boolean",type:"boolean"},onChange:{action:"onChange"},onBlur:{action:"onBlur"},onFocus:{action:"onFocus"},onWheel:{action:"onWheel"},onMask:{action:"onMask"},modify:{action:"modify"}}};const Default={args:{id:"componentId1",label:"Label",labelIcon:void 0,type:"text",iconStart:"phone",iconStartAriaLabel:"start action",iconEndAriaLabel:"end action",hint:"Write your phone number",mask:"(+56)_ ____ ____",replacement:{_:/\d/},showMask:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'componentId1',\n    label: 'Label',\n    labelIcon: undefined,\n    type: 'text',\n    iconStart: 'phone',\n    iconStartAriaLabel: 'start action',\n    iconEndAriaLabel: 'end action',\n    hint: 'Write your phone number',\n    mask: '(+56)_ ____ ____',\n    replacement: {\n      _: /\\d/\n    },\n    showMask: true\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);