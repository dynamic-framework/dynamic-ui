"use strict";(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[7163],{"./src/stories/components/MCarousel.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AutoplayAndLoop:()=>AutoplayAndLoop,Default:()=>Default,TwoPerPage:()=>TwoPerPage,WithBreakpoints:()=>WithBreakpoints,__namedExportsOrder:()=>__namedExportsOrder,default:()=>MCarousel_stories});var react_splide_esm=__webpack_require__("../../node_modules/.pnpm/@splidejs+react-splide@0.7.12/node_modules/@splidejs/react-splide/dist/js/react-splide.esm.js"),classnames=__webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function MCarousel({children,className,options,...props}){return(0,jsx_runtime.jsx)(react_splide_esm.tv,{className:classnames_default()("m-carousel",className),options:{...options,classes:{arrows:"splide__arrows m-carousel-arrows",arrow:"splide__arrow m-carousel-arrow",prev:"splide__arrow--prev m-carousel-arrow-prev",next:"splide__arrow--next m-carousel-arrow-next",pagination:"splide__pagination m-carousel-pagination",page:"splide__pagination__page m-carousel-pagination-page"}},...props,children})}MCarousel.displayName="MCarousel";try{MCarousel.displayName="MCarousel",MCarousel.__docgenInfo={description:"",displayName:"MCarousel",props:{onMounted:{defaultValue:null,description:"",name:"onMounted",required:!1,type:{name:"((splide: Splide) => void) | undefined"}},onReady:{defaultValue:null,description:"",name:"onReady",required:!1,type:{name:"((splide: Splide) => void) | undefined"}},onMove:{defaultValue:null,description:"",name:"onMove",required:!1,type:{name:"((splide: Splide, index: number, prev: number, dest: number) => void) | undefined"}},onMoved:{defaultValue:null,description:"",name:"onMoved",required:!1,type:{name:"((splide: Splide, index: number, prev: number, dest: number) => void) | undefined"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((splide: Splide, Slide: SlideComponent, e: MouseEvent) => void) | undefined"}},onActive:{defaultValue:null,description:"",name:"onActive",required:!1,type:{name:"((splide: Splide, Slide: SlideComponent) => void) | undefined"}},onInactive:{defaultValue:null,description:"",name:"onInactive",required:!1,type:{name:"((splide: Splide, Slide: SlideComponent) => void) | undefined"}},onVisible:{defaultValue:null,description:"",name:"onVisible",required:!1,type:{name:"((splide: Splide, Slide: SlideComponent) => void) | undefined"}},onHidden:{defaultValue:null,description:"",name:"onHidden",required:!1,type:{name:"((splide: Splide, Slide: SlideComponent) => void) | undefined"}},onRefresh:{defaultValue:null,description:"",name:"onRefresh",required:!1,type:{name:"((splide: Splide) => void) | undefined"}},onUpdated:{defaultValue:null,description:"",name:"onUpdated",required:!1,type:{name:"((splide: Splide, options: Options) => void) | undefined"}},onResize:{defaultValue:null,description:"",name:"onResize",required:!1,type:{name:"((splide: Splide) => void) | undefined"}},onResized:{defaultValue:null,description:"",name:"onResized",required:!1,type:{name:"((splide: Splide) => void) | undefined"}},onDrag:{defaultValue:null,description:"",name:"onDrag",required:!1,type:{name:"((splide: Splide) => void) | undefined"}},onDragging:{defaultValue:null,description:"",name:"onDragging",required:!1,type:{name:"((splide: Splide) => void) | undefined"}},onDragged:{defaultValue:null,description:"",name:"onDragged",required:!1,type:{name:"((splide: Splide) => void) | undefined"}},onScroll:{defaultValue:null,description:"",name:"onScroll",required:!1,type:{name:"((splide: Splide) => void) | undefined"}},onScrolled:{defaultValue:null,description:"",name:"onScrolled",required:!1,type:{name:"((splide: Splide) => void) | undefined"}},onDestroy:{defaultValue:null,description:"",name:"onDestroy",required:!1,type:{name:"((splide: Splide) => void) | undefined"}},onArrowsMounted:{defaultValue:null,description:"",name:"onArrowsMounted",required:!1,type:{name:"((splide: Splide, prev: HTMLButtonElement, next: HTMLButtonElement) => void) | undefined"}},onArrowsUpdated:{defaultValue:null,description:"",name:"onArrowsUpdated",required:!1,type:{name:"((splide: Splide, prev: HTMLButtonElement, next: HTMLButtonElement, prevIndex: number, nextIndex: number) => void) | undefined"}},onPaginationMounted:{defaultValue:null,description:"",name:"onPaginationMounted",required:!1,type:{name:"((splide: Splide, data: PaginationData, item: PaginationItem) => void) | undefined"}},onPaginationUpdated:{defaultValue:null,description:"",name:"onPaginationUpdated",required:!1,type:{name:"((splide: Splide, data: PaginationData, prev: PaginationItem, curr: PaginationItem) => void) | undefined"}},onNavigationMounted:{defaultValue:null,description:"",name:"onNavigationMounted",required:!1,type:{name:"((splide: Splide, splides: Splide[]) => void) | undefined"}},onAutoplayPlay:{defaultValue:null,description:"",name:"onAutoplayPlay",required:!1,type:{name:"((splide: Splide) => void) | undefined"}},onAutoplayPlaying:{defaultValue:null,description:"",name:"onAutoplayPlaying",required:!1,type:{name:"((splide: Splide, rate: number) => void) | undefined"}},onAutoplayPause:{defaultValue:null,description:"",name:"onAutoplayPause",required:!1,type:{name:"((splide: Splide) => void) | undefined"}},onLazyLoadLoaded:{defaultValue:null,description:"",name:"onLazyLoadLoaded",required:!1,type:{name:"((splide: Splide, img: HTMLImageElement, Slide: SlideComponent) => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MCarousel.tsx#MCarousel"]={docgenInfo:MCarousel.__docgenInfo,name:"MCarousel",path:"src/components/MCarousel.tsx#MCarousel"})}catch(__react_docgen_typescript_loader_error){}function MCarouselSlide({className,...props}){return(0,jsx_runtime.jsx)(react_splide_esm.jw,{className:classnames_default()("m-carousel-slide",className),...props})}MCarouselSlide.displayName="MCarouselSlide";try{MCarouselSlide.displayName="MCarouselSlide",MCarouselSlide.__docgenInfo={description:"",displayName:"MCarouselSlide",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MCarouselSlide.tsx#MCarouselSlide"]={docgenInfo:MCarouselSlide.__docgenInfo,name:"MCarouselSlide",path:"src/components/MCarouselSlide.tsx#MCarouselSlide"})}catch(__react_docgen_typescript_loader_error){}const MCarousel_stories={title:"Design System/Components/Carousel",component:MCarousel,argTypes:{options:{control:"object"}}},MCarouselExample=({...props})=>(0,jsx_runtime.jsx)(MCarousel,{...props,children:[1,2,3,4,5].map((el=>(0,jsx_runtime.jsx)(MCarouselSlide,{children:(0,jsx_runtime.jsxs)("div",{className:"d-flex flex-column bg-light border p-3 rounded text-center",children:[(0,jsx_runtime.jsx)("h5",{children:`Slide ${el}`}),(0,jsx_runtime.jsx)("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, cumque? Fugiat illum repellat nemo laboriosam voluptatum, temporibus eius facilis expedita incidunt itaque odio non necessitatibus dolore molestias, harum dicta a!"})]})},el)))});MCarouselExample.displayName="MCarouselExample";const Default={render:args=>(0,jsx_runtime.jsx)(MCarouselExample,{...args}),args:{options:{perPage:1,width:532,updateOnMove:!0,gap:"0.5rem",padding:"1rem"}}},TwoPerPage={render:args=>(0,jsx_runtime.jsx)(MCarouselExample,{...args}),args:{options:{perMove:1,perPage:2,type:"loop",width:532,gap:"0.5rem",padding:"1rem",omitEnd:!1,updateOnMove:!0}}},WithBreakpoints={render:args=>(0,jsx_runtime.jsx)(MCarouselExample,{...args}),args:{options:{pagination:!0,width:532,padding:16,gap:8,perMove:1,perPage:3,type:"loop",focus:"center",arrows:!0,breakpoints:{375:{width:343,arrows:!1,perPage:1},552:{width:"calc(100vw - 32px)",perPage:2}}}}},AutoplayAndLoop={render:args=>(0,jsx_runtime.jsx)(MCarouselExample,{...args}),args:{options:{perPage:1,width:532,updateOnMove:!0,gap:"0.5rem",padding:"1rem",type:"loop",autoplay:!0,interval:3e3}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: args => <MCarouselExample {...args} />,\n  args: {\n    options: {\n      perPage: 1,\n      width: 532,\n      updateOnMove: true,\n      gap: '0.5rem',\n      padding: '1rem'\n    }\n  }\n}",...Default.parameters?.docs?.source}}},TwoPerPage.parameters={...TwoPerPage.parameters,docs:{...TwoPerPage.parameters?.docs,source:{originalSource:"{\n  render: args => <MCarouselExample {...args} />,\n  args: {\n    options: {\n      perMove: 1,\n      perPage: 2,\n      type: 'loop',\n      width: 532,\n      gap: '0.5rem',\n      padding: '1rem',\n      omitEnd: false,\n      updateOnMove: true\n    }\n  }\n}",...TwoPerPage.parameters?.docs?.source}}},WithBreakpoints.parameters={...WithBreakpoints.parameters,docs:{...WithBreakpoints.parameters?.docs,source:{originalSource:"{\n  render: args => <MCarouselExample {...args} />,\n  args: {\n    options: {\n      pagination: true,\n      width: 532,\n      padding: 16,\n      gap: 8,\n      perMove: 1,\n      perPage: 3,\n      type: 'loop',\n      focus: 'center',\n      arrows: true,\n      breakpoints: {\n        375: {\n          width: 375 - 32,\n          arrows: false,\n          perPage: 1\n        },\n        552: {\n          width: 'calc(100vw - 32px)',\n          perPage: 2\n        }\n      }\n    }\n  }\n}",...WithBreakpoints.parameters?.docs?.source}}},AutoplayAndLoop.parameters={...AutoplayAndLoop.parameters,docs:{...AutoplayAndLoop.parameters?.docs,source:{originalSource:"{\n  render: args => <MCarouselExample {...args} />,\n  args: {\n    options: {\n      perPage: 1,\n      width: 532,\n      updateOnMove: true,\n      gap: '0.5rem',\n      padding: '1rem',\n      type: 'loop',\n      autoplay: true,\n      interval: 3000\n    }\n  }\n}",...AutoplayAndLoop.parameters?.docs?.source}}};const __namedExportsOrder=["Default","TwoPerPage","WithBreakpoints","AutoplayAndLoop"]}}]);