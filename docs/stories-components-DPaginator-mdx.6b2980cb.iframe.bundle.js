"use strict";(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[8865,1842],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/stories/components/DPaginator.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.6_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../dynamic-ui/dist/index.js"),_DPaginator_stories__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/stories/components/DPaginator.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",a:"a",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"paginator",children:"Paginator"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Paginator component."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"To understand in more detail the aspects covered by this component, review the following documentation:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://getbootstrap.com/docs/5.3/components/pagination/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Bootstrap Pagination"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"css-variables",children:"CSS Variables"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.UG,{children:`\n\n  | Variable                                                      | Type                    | Description                           |\n  |---------------------------------------------------------------|-------------------------|---------------------------------------|\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}pagination-page-item-size\`                   | css length unit         | Size of page item                     |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}pagination-page-link-bg\`                     | css color unit          | Background page item                  |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}pagination-page-border-radius\`               | css border radius unit  | Radius page item                      |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}pagination-arrow-font-size\`                  | css length unit         | Text font arrow                       |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}pagination-arrow-padding-y\`                  | css length unit         | Padding Y axis arrow                  |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}pagination-arrow-padding-x\`                  | css length unit         | Padding X axis page arrow             |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}pagination-arrow-border-radius\`              | css border radius unit  | Border radius arrow                   |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}pagination-arrow-color\`                      | css color unit          | Text color arrow                      |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}pagination-focus-arrow-bg\`                   | css color unit          | Focus bg arrow                        |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}pagination-arrow-prev-icon-bg-image\`         | css base64 bg image     | Previous icon default                 |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}pagination-disabled-arrow-prev-icon-bg-image\`| css base64 bg image     | Previous icon :focus :hover           |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}pagination-arrow-next-icon-bg-image\`         | css base64 bg image     | Next icon default                     |\n  | \`--${_dynamic_framework_ui__WEBPACK_IMPORTED_MODULE_2__.k2}pagination-disabled-arrow-next-icon-bg-image\`| css base64 bg image     | Next icon :focus :hover               |\n\n  `}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["Additional ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://getbootstrap.com/docs/5.3/components/pagination/#variables",target:"_blank",rel:"nofollow noopener noreferrer",children:"Bootstrap css variables"})]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"args",children:"Args"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_DPaginator_stories__WEBPACK_IMPORTED_MODULE_5__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Ed,{of:_DPaginator_stories__WEBPACK_IMPORTED_MODULE_5__,sort:"requiredFirst"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.fQ,{})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/stories/components/DPaginator.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomCurrentPage:()=>CustomCurrentPage,CustomMaxWidth:()=>CustomMaxWidth,Default:()=>Default,LabelArrows:()=>LabelArrows,NoArrows:()=>NoArrows,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DPaginator_stories});var react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),classnames=__webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),dist=__webpack_require__("../../node_modules/.pnpm/react-responsive-pagination@2.2.2_react-dom@18.2.0_react@18.2.0/node_modules/react-responsive-pagination/dist/index.js"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function DPaginator({className,nextLabel,previousLabel,showArrows=!0,page,onEventPageChange,...props}){return(0,jsx_runtime.jsx)(dist.ZP,{extraClassName:classnames_default()("pagination",className),nextClassName:classnames_default()("arrow arrow-next",!nextLabel&&"no-label"),nextLabel,previousClassName:classnames_default()("arrow arrow-prev",!previousLabel&&"no-label"),previousLabel,renderNav:showArrows,current:page,onPageChange:onEventPageChange,...props})}DPaginator.displayName="DPaginator";try{DPaginator.displayName="DPaginator",DPaginator.__docgenInfo={description:"",displayName:"DPaginator",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},page:{defaultValue:null,description:"",name:"page",required:!0,type:{name:"number"}},onEventPageChange:{defaultValue:null,description:"",name:"onEventPageChange",required:!0,type:{name:"(page: number) => void"}},total:{defaultValue:null,description:"",name:"total",required:!0,type:{name:"number"}},previousLabel:{defaultValue:null,description:"",name:"previousLabel",required:!1,type:{name:"string | undefined"}},nextLabel:{defaultValue:null,description:"",name:"nextLabel",required:!1,type:{name:"string | undefined"}},showArrows:{defaultValue:{value:"true"},description:"",name:"showArrows",required:!1,type:{name:"boolean | undefined"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"number | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DPaginator.tsx#DPaginator"]={docgenInfo:DPaginator.__docgenInfo,name:"DPaginator",path:"src/components/DPaginator.tsx#DPaginator"})}catch(__react_docgen_typescript_loader_error){}const DPaginator_stories={title:"Design System/Components/Paginator",component:DPaginator,argTypes:{total:{control:"number"},page:{control:"number"},onEventPageChange:{type:"function"},previousLabel:{control:"text"},nextLabel:{control:"text"},showArrows:{control:"boolean",type:"boolean"},maxWidth:{control:"number"},className:{control:"text",type:"string"}}},Default={decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:"calc(100dvw - 64px)"},children:(0,jsx_runtime.jsx)(Story,{})})],render:function Render({page:initialPage,...args}){const[page,setPage]=(0,react.useState)(initialPage);return(0,jsx_runtime.jsx)(DPaginator,{...args,page,onEventPageChange:setPage,className:"justify-content-center"})},args:{total:20,maxWidth:400}},LabelArrows={decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:"calc(100dvw - 64px)"},children:(0,jsx_runtime.jsx)(Story,{})})],render:function Render({page:initialPage,...args}){const[page,setPage]=(0,react.useState)(initialPage);return(0,jsx_runtime.jsx)(DPaginator,{...args,page,onEventPageChange:setPage,className:"justify-content-center"})},args:{total:20,nextLabel:"Next",previousLabel:"Previous",maxWidth:200}},NoArrows={decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:"calc(100dvw - 64px)"},children:(0,jsx_runtime.jsx)(Story,{})})],render:function Render({page:initialPage,...args}){const[page,setPage]=(0,react.useState)(initialPage);return(0,jsx_runtime.jsx)(DPaginator,{...args,page,onEventPageChange:setPage,className:"justify-content-center"})},args:{showArrows:!1,total:20,maxWidth:200}},CustomCurrentPage={decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:"calc(100dvw - 64px)"},children:(0,jsx_runtime.jsx)(Story,{})})],render:function Render({page:initialPage,...args}){const[page,setPage]=(0,react.useState)(initialPage);return(0,jsx_runtime.jsx)(DPaginator,{...args,page,onEventPageChange:setPage,className:"justify-content-center"})},args:{total:20,page:10,maxWidth:200}},CustomMaxWidth={decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:"calc(100dvw - 64px)"},children:(0,jsx_runtime.jsx)(Story,{})})],render:function Render({page:initialPage,...args}){const[page,setPage]=(0,react.useState)(initialPage);return(0,jsx_runtime.jsx)(DPaginator,{...args,page,onEventPageChange:setPage,className:"justify-content-center"})},args:{total:20,maxWidth:400}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  decorators: [(Story: StoryFn) => <div style={{\n    width: 'calc(100dvw - 64px)'\n  }}>\n        <Story />\n      </div>],\n  render: function Render({\n    page: initialPage,\n    ...args\n  }: ComponentProps<typeof DPaginator>) {\n    const [page, setPage] = useState<number>(initialPage);\n    return <DPaginator {...args} page={page} onEventPageChange={setPage} className=\"justify-content-center\" />;\n  },\n  args: {\n    total: 20,\n    maxWidth: 400\n  }\n}",...Default.parameters?.docs?.source}}},LabelArrows.parameters={...LabelArrows.parameters,docs:{...LabelArrows.parameters?.docs,source:{originalSource:"{\n  decorators: [(Story: StoryFn) => <div style={{\n    width: 'calc(100dvw - 64px)'\n  }}>\n        <Story />\n      </div>],\n  render: function Render({\n    page: initialPage,\n    ...args\n  }: ComponentProps<typeof DPaginator>) {\n    const [page, setPage] = useState<number>(initialPage);\n    return <DPaginator {...args} page={page} onEventPageChange={setPage} className=\"justify-content-center\" />;\n  },\n  args: {\n    total: 20,\n    nextLabel: 'Next',\n    previousLabel: 'Previous',\n    maxWidth: 200\n  }\n}",...LabelArrows.parameters?.docs?.source}}},NoArrows.parameters={...NoArrows.parameters,docs:{...NoArrows.parameters?.docs,source:{originalSource:"{\n  decorators: [(Story: StoryFn) => <div style={{\n    width: 'calc(100dvw - 64px)'\n  }}>\n        <Story />\n      </div>],\n  render: function Render({\n    page: initialPage,\n    ...args\n  }: ComponentProps<typeof DPaginator>) {\n    const [page, setPage] = useState<number>(initialPage);\n    return <DPaginator {...args} page={page} onEventPageChange={setPage} className=\"justify-content-center\" />;\n  },\n  args: {\n    showArrows: false,\n    total: 20,\n    maxWidth: 200\n  }\n}",...NoArrows.parameters?.docs?.source}}},CustomCurrentPage.parameters={...CustomCurrentPage.parameters,docs:{...CustomCurrentPage.parameters?.docs,source:{originalSource:"{\n  decorators: [(Story: StoryFn) => <div style={{\n    width: 'calc(100dvw - 64px)'\n  }}>\n        <Story />\n      </div>],\n  render: function Render({\n    page: initialPage,\n    ...args\n  }: ComponentProps<typeof DPaginator>) {\n    const [page, setPage] = useState<number>(initialPage);\n    return <DPaginator {...args} page={page} onEventPageChange={setPage} className=\"justify-content-center\" />;\n  },\n  args: {\n    total: 20,\n    page: 10,\n    maxWidth: 200\n  }\n}",...CustomCurrentPage.parameters?.docs?.source}}},CustomMaxWidth.parameters={...CustomMaxWidth.parameters,docs:{...CustomMaxWidth.parameters?.docs,source:{originalSource:"{\n  decorators: [(Story: StoryFn) => <div style={{\n    width: 'calc(100dvw - 64px)'\n  }}>\n        <Story />\n      </div>],\n  render: function Render({\n    page: initialPage,\n    ...args\n  }: ComponentProps<typeof DPaginator>) {\n    const [page, setPage] = useState<number>(initialPage);\n    return <DPaginator {...args} page={page} onEventPageChange={setPage} className=\"justify-content-center\" />;\n  },\n  args: {\n    total: 20,\n    maxWidth: 400\n  }\n}",...CustomMaxWidth.parameters?.docs?.source}}};const __namedExportsOrder=["Default","LabelArrows","NoArrows","CustomCurrentPage","CustomMaxWidth"]}}]);