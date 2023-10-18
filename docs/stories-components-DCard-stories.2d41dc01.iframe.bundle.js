/*! For license information please see stories-components-DCard-stories.2d41dc01.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[307],{"./src/components/DCard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>DCard});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function DCard({className,style,children}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("card",className),children})}DCard.displayName="DCard";try{DCard.displayName="DCard",DCard.__docgenInfo={description:"",displayName:"DCard",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DCard.tsx#DCard"]={docgenInfo:DCard.__docgenInfo,name:"DCard",path:"src/components/DCard.tsx#DCard"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/DCardBody.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>DCardBody});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function DCardBody({className,children}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("card-body",className),children})}DCardBody.displayName="DCardBody";try{DCardBody.displayName="DCardBody",DCardBody.__docgenInfo={description:"",displayName:"DCardBody",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DCardBody.tsx#DCardBody"]={docgenInfo:DCardBody.__docgenInfo,name:"DCardBody",path:"src/components/DCardBody.tsx#DCardBody"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/components/DCard.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,HeaderAndBody:()=>HeaderAndBody,Horizontal:()=>Horizontal,OnlyBody:()=>OnlyBody,TopImage:()=>TopImage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DCard_stories});var DCard=__webpack_require__("./src/components/DCard.tsx"),classnames=__webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function DCardHeader({className,children}){return(0,jsx_runtime.jsx)("div",{className:classnames_default()("card-header",className),children})}DCardHeader.displayName="DCardHeader";try{DCardHeader.displayName="DCardHeader",DCardHeader.__docgenInfo={description:"",displayName:"DCardHeader",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DCardHeader.tsx#DCardHeader"]={docgenInfo:DCardHeader.__docgenInfo,name:"DCardHeader",path:"src/components/DCardHeader.tsx#DCardHeader"})}catch(__react_docgen_typescript_loader_error){}var DCardBody=__webpack_require__("./src/components/DCardBody.tsx");function DCardFooter({className,children}){return(0,jsx_runtime.jsx)("div",{className:classnames_default()("card-footer",className),children})}DCardFooter.displayName="DCardFooter";try{DCardFooter.displayName="DCardFooter",DCardFooter.__docgenInfo={description:"",displayName:"DCardFooter",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DCardFooter.tsx#DCardFooter"]={docgenInfo:DCardFooter.__docgenInfo,name:"DCardFooter",path:"src/components/DCardFooter.tsx#DCardFooter"})}catch(__react_docgen_typescript_loader_error){}var proxies=__webpack_require__("./src/components/proxies.ts");const DCard_stories={title:"Design System/Components/Card",component:DCard.Z,argTypes:{className:{control:"text",type:"string"},style:{control:"object"}}},Default={render:args=>(0,jsx_runtime.jsxs)(DCard.Z,{...args,children:[(0,jsx_runtime.jsx)(DCardHeader,{children:(0,jsx_runtime.jsx)("h5",{className:"card-title",children:"Title #1"})}),(0,jsx_runtime.jsx)(DCardBody.Z,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quo?"}),(0,jsx_runtime.jsx)(DCardFooter,{className:"d-flex justify-content-end",children:(0,jsx_runtime.jsx)(proxies.IV,{text:"Click me!"})})]}),args:{style:{width:360}}},HeaderAndBody={render:args=>(0,jsx_runtime.jsxs)(DCard.Z,{...args,children:[(0,jsx_runtime.jsx)(DCardHeader,{children:(0,jsx_runtime.jsx)("h5",{className:"card-title",children:"Title #1"})}),(0,jsx_runtime.jsx)(DCardBody.Z,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quo?"})]}),args:{style:{width:360}}},OnlyBody={render:args=>(0,jsx_runtime.jsx)(DCard.Z,{...args,children:(0,jsx_runtime.jsx)(DCardBody.Z,{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos magni ex explicabo sint repudiandae quia commodi reiciendis reprehenderit minima voluptatibus suscipit adipisci modi, veniam doloribus. Laudantium magni tenetur sint eligendi?"})}),args:{style:{width:360}}},TopImage={render:args=>(0,jsx_runtime.jsxs)(DCard.Z,{...args,children:[(0,jsx_runtime.jsx)("img",{src:"https://placehold.co/200x200",className:"card-img-top",alt:"200x200"}),(0,jsx_runtime.jsx)(DCardBody.Z,{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum nihil exercitationem debitis aperiam consectetur beatae dolor error quod voluptatem laboriosam."})]}),args:{style:{width:360}}},Horizontal={render:args=>(0,jsx_runtime.jsx)(DCard.Z,{...args,children:(0,jsx_runtime.jsxs)("div",{className:"row g-0",children:[(0,jsx_runtime.jsx)("div",{className:"col-md-4",children:(0,jsx_runtime.jsx)("img",{src:"https://placehold.co/200x300",className:"img-fluid rounded-start",alt:"200x200"})}),(0,jsx_runtime.jsx)("div",{className:"col-md-8",children:(0,jsx_runtime.jsxs)(DCardBody.Z,{children:[(0,jsx_runtime.jsx)("h5",{className:"card-title",children:"Card title"}),(0,jsx_runtime.jsx)("p",{className:"card-text",children:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}),(0,jsx_runtime.jsx)("p",{className:"card-text",children:(0,jsx_runtime.jsx)("small",{className:"text-body-secondary",children:"Last updated 3 mins ago"})})]})})]})}),args:{style:{width:400}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: args => <DCard {...args}>\n      <DCardHeader>\n        <h5 className="card-title">Title #1</h5>\n      </DCardHeader>\n      <DCardBody>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quo?\n      </DCardBody>\n      <DCardFooter className="d-flex justify-content-end">\n        <DButton text="Click me!" />\n      </DCardFooter>\n    </DCard>,\n  args: {\n    style: {\n      width: 360\n    }\n  }\n}',...Default.parameters?.docs?.source}}},HeaderAndBody.parameters={...HeaderAndBody.parameters,docs:{...HeaderAndBody.parameters?.docs,source:{originalSource:'{\n  render: args => <DCard {...args}>\n      <DCardHeader>\n        <h5 className="card-title">Title #1</h5>\n      </DCardHeader>\n      <DCardBody>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quo?\n      </DCardBody>\n    </DCard>,\n  args: {\n    style: {\n      width: 360\n    }\n  }\n}',...HeaderAndBody.parameters?.docs?.source}}},OnlyBody.parameters={...OnlyBody.parameters,docs:{...OnlyBody.parameters?.docs,source:{originalSource:"{\n  render: args => <DCard {...args}>\n      <DCardBody>\n        Lorem ipsum dolor, sit amet consectetur adipisicing elit.\n        Quos magni ex explicabo sint repudiandae quia commodi reiciendis\n        reprehenderit minima voluptatibus suscipit adipisci modi, veniam\n        doloribus. Laudantium magni tenetur sint eligendi?\n      </DCardBody>\n    </DCard>,\n  args: {\n    style: {\n      width: 360\n    }\n  }\n}",...OnlyBody.parameters?.docs?.source}}},TopImage.parameters={...TopImage.parameters,docs:{...TopImage.parameters?.docs,source:{originalSource:'{\n  render: args => <DCard {...args}>\n      <img src="https://placehold.co/200x200" className="card-img-top" alt="200x200" />\n      <DCardBody>\n        Lorem ipsum, dolor sit amet consectetur adipisicing elit.\n        Eum nihil exercitationem debitis aperiam consectetur beatae\n        dolor error quod voluptatem laboriosam.\n      </DCardBody>\n    </DCard>,\n  args: {\n    style: {\n      width: 360\n    }\n  }\n}',...TopImage.parameters?.docs?.source}}},Horizontal.parameters={...Horizontal.parameters,docs:{...Horizontal.parameters?.docs,source:{originalSource:'{\n  render: args => <DCard {...args}>\n      <div className="row g-0">\n        <div className="col-md-4">\n          <img src="https://placehold.co/200x300" className="img-fluid rounded-start" alt="200x200" />\n        </div>\n        <div className="col-md-8">\n          <DCardBody>\n            <h5 className="card-title">Card title</h5>\n            <p className="card-text">\n              This is a wider card with supporting text\n              below as a natural lead-in to additional\n              content. This content is a little bit longer.\n            </p>\n            <p className="card-text">\n              <small className="text-body-secondary">\n                Last updated 3 mins ago\n              </small>\n            </p>\n          </DCardBody>\n        </div>\n      </div>\n    </DCard>,\n  args: {\n    style: {\n      width: 400\n    }\n  }\n}',...Horizontal.parameters?.docs?.source}}};const __namedExportsOrder=["Default","HeaderAndBody","OnlyBody","TopImage","Horizontal"]},"../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);