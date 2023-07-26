/*! For license information please see stories-tokens-Layout-mdx.480839ab.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[6269],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/stories/tokens/Layout.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.6_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",a:"a",h2:"h2",h3:"h3"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{title:"Design System/Tokens/Layout"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"layout",children:"Layout"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"We use the Bootstrap Layout, Container and Grid System."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"To understand in more detail the layout and grid system, review the following documentation:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://getbootstrap.com/docs/5.3/layout/breakpoints/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Bootstrap Breakpoints"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://getbootstrap.com/docs/5.3/layout/containers/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Bootstrap Containers"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://getbootstrap.com/docs/5.3/layout/grid/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Bootstrap Grid"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://getbootstrap.com/docs/5.3/layout/columns/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Bootstrap Columns"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://getbootstrap.com/docs/5.3/layout/gutters/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Bootstrap Gutters"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"layout--grid",children:"Layout & Grid"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The layout is where all the elements of communication come together. A good layout requires careful planning and use of composition, which relies on principles such as hierarchy, scale, proportion, contrast, harmony, rhythm, repetition, and many more."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"In the lab we use Bootstrap 5 as the basis for building our design, a powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"grid-options",children:"Grid Options"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h4",{className:"py-3 mb-0 fw-bold",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("pre",{className:"d-inline",children:".container"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"-*"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.UG,{children:"\n\n  | Name                          | Breakpoints   | Max Width     |         |\n  |-------------------------------|---------------|---------------|---------|\n  | Extra extra large (`xxl`)   | >= 1400px     | 1320px        |         |\n  | Extra large ((`xl`)         | >= 1200px     | 1140px        | Desktop |\n  | Large (`lg`)                | >= 992px      | 960px         |         |\n  | Medium (`md`)               | >= 768px      | 720px         |         |\n  | Small (`sm`)                | >= 576px      | 540px         | Mobile  |\n  | Extra small (`xs`) **NONE** | < 576px       | none (auto)   |         |\n\n  "}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"grid-gutter-widths",children:"Grid Gutter Widths"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h4",{className:"py-3 mb-0 fw-bold",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("pre",{className:"d-inline",children:".row "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:".g-*"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.UG,{children:"\n\n  | Name       | Width  | Class   |         |\n  |------------|--------|---------|---------|\n  | Gutter 0   | 0      | row g-0 |         |\n  | Gutter 1   | 4px    | row g-1 |         |\n  | Gutter 2   | 8px    | row g-2 |         |\n  | Gutter 3   | 16px   | row g-3 | Mobile  |\n  | Gutter 4   | 24px   | row g-4 |         |\n  | Gutter 5   | 32px   | row g-5 |         |\n  | Gutter 6   | 40px   | row g-6 |         |\n  | Gutter 7   | 48px   | row g-7 | Desktop |\n  | Gutter 8   | 56px   | row g-8 |         |\n\n  "})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);