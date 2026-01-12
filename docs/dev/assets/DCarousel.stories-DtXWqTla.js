import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as i}from"./DCarousel-D9TTa69V.js";import{P as n}from"./config-C3iYXcFk.js";import"./iframe-eIrUEdNP.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cld7CebZ.js";const q={title:"Design System/Components/Carousel",component:i,parameters:{docs:{description:{component:`
![Shield Badge](https://img.shields.io/badge/Wrapper%20Component-red)

Carousel of elements and components

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Splide](https://splidejs.com/)
+ [Splide React Integration](https://splidejs.com/integration/react-splide/)

## CSS Variables
| Variable                                         | Class       | Type            | Description                   |
|--------------------------------------------------|-------------|-----------------|-------------------------------|
| --${n}carousel-arrow-space               | .d-carousel | css length unit | Arrow separation              |
| --${n}carousel-pagination-bottom         | .d-carousel | css length unit | Pagination bottom separation  |
| --${n}carousel-pagination-page-bg        | .d-carousel | css color       | Background of dot page        |
| --${n}carousel-pagination-active-page-bg | .d-carousel | css color       | Background of active dot page |
| --${n}carousel-focus-outline-color       | .d-carousel | css color       | Color of focus ring           |
        `}}},argTypes:{options:{control:"object"},className:{control:"text",type:"string"},style:{control:"object"}},tags:["autodocs"]},r={render:a=>e.jsx(i,{...a,children:[1,2,3,4,5].map(o=>e.jsx(i.Slide,{children:e.jsxs("div",{className:"d-flex flex-column bg-light border p-3 rounded text-center",children:[e.jsx("h5",{children:`Slide ${o}`}),e.jsx("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, cumque? Fugiat illum repellat nemo laboriosam voluptatum, temporibus eius facilis expedita incidunt itaque odio non necessitatibus dolore molestias, harum dicta a!"})]})},o))}),args:{options:{perPage:1,width:532,updateOnMove:!0,gap:"0.5rem",padding:"1rem"}}},t={render:a=>e.jsx(i,{...a,children:[1,2,3,4,5].map(o=>e.jsx(i.Slide,{children:e.jsxs("div",{className:"d-flex flex-column bg-light border p-3 rounded text-center",children:[e.jsx("h5",{children:`Slide ${o}`}),e.jsx("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, cumque? Fugiat illum repellat nemo laboriosam voluptatum, temporibus eius facilis expedita incidunt itaque odio non necessitatibus dolore molestias, harum dicta a!"})]})},o))}),args:{options:{perMove:1,perPage:2,type:"loop",width:532,gap:"0.5rem",padding:"1rem",omitEnd:!1,updateOnMove:!0}}},s={render:a=>e.jsx(i,{...a,children:[1,2,3,4,5].map(o=>e.jsx(i.Slide,{children:e.jsxs("div",{className:"d-flex flex-column bg-light border p-3 rounded text-center",children:[e.jsx("h5",{children:`Slide ${o}`}),e.jsx("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, cumque? Fugiat illum repellat nemo laboriosam voluptatum, temporibus eius facilis expedita incidunt itaque odio non necessitatibus dolore molestias, harum dicta a!"})]})},o))}),args:{options:{pagination:!0,width:532,padding:16,gap:8,perMove:1,perPage:3,type:"loop",focus:"center",arrows:!0,breakpoints:{375:{width:343,arrows:!1,perPage:1},552:{width:"calc(100vw - 32px)",perPage:2}}}}},l={render:a=>e.jsx(i,{...a,children:[1,2,3,4,5].map(o=>e.jsx(i.Slide,{children:e.jsxs("div",{className:"d-flex flex-column bg-light border p-3 rounded text-center",children:[e.jsx("h5",{children:`Slide ${o}`}),e.jsx("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, cumque? Fugiat illum repellat nemo laboriosam voluptatum, temporibus eius facilis expedita incidunt itaque odio non necessitatibus dolore molestias, harum dicta a!"})]})},o))}),args:{options:{perPage:1,width:532,updateOnMove:!0,gap:"0.5rem",padding:"1rem",type:"loop",autoplay:!0,interval:3e3}}};var d,p,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <DCarousel {...args}>
      {[1, 2, 3, 4, 5].map(el => <DCarousel.Slide key={el}>
          <div className="d-flex flex-column bg-light border p-3 rounded text-center">
            <h5>{\`Slide \${el}\`}</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, cumque?
              Fugiat illum repellat nemo laboriosam voluptatum, temporibus eius facilis
              expedita incidunt itaque odio non necessitatibus dolore molestias,
              harum dicta a!
            </p>
          </div>
        </DCarousel.Slide>)}
    </DCarousel>,
  args: {
    options: {
      perPage: 1,
      width: 532,
      updateOnMove: true,
      gap: '0.5rem',
      padding: '1rem'
    }
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var c,m,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <DCarousel {...args}>
      {[1, 2, 3, 4, 5].map(el => <DCarousel.Slide key={el}>
          <div className="d-flex flex-column bg-light border p-3 rounded text-center">
            <h5>{\`Slide \${el}\`}</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, cumque?
              Fugiat illum repellat nemo laboriosam voluptatum, temporibus eius facilis
              expedita incidunt itaque odio non necessitatibus dolore molestias,
              harum dicta a!
            </p>
          </div>
        </DCarousel.Slide>)}
    </DCarousel>,
  args: {
    options: {
      perMove: 1,
      perPage: 2,
      type: 'loop',
      width: 532,
      gap: '0.5rem',
      padding: '1rem',
      omitEnd: false,
      updateOnMove: true
    }
  }
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,x,b;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <DCarousel {...args}>
      {[1, 2, 3, 4, 5].map(el => <DCarousel.Slide key={el}>
          <div className="d-flex flex-column bg-light border p-3 rounded text-center">
            <h5>{\`Slide \${el}\`}</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, cumque?
              Fugiat illum repellat nemo laboriosam voluptatum, temporibus eius facilis
              expedita incidunt itaque odio non necessitatibus dolore molestias,
              harum dicta a!
            </p>
          </div>
        </DCarousel.Slide>)}
    </DCarousel>,
  args: {
    options: {
      pagination: true,
      width: 532,
      padding: 16,
      gap: 8,
      perMove: 1,
      perPage: 3,
      type: 'loop',
      focus: 'center',
      arrows: true,
      breakpoints: {
        375: {
          width: 375 - 32,
          arrows: false,
          perPage: 1
        },
        552: {
          width: 'calc(100vw - 32px)',
          perPage: 2
        }
      }
    }
  }
}`,...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var f,v,S;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <DCarousel {...args}>
      {[1, 2, 3, 4, 5].map(el => <DCarousel.Slide key={el}>
          <div className="d-flex flex-column bg-light border p-3 rounded text-center">
            <h5>{\`Slide \${el}\`}</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, cumque?
              Fugiat illum repellat nemo laboriosam voluptatum, temporibus eius facilis
              expedita incidunt itaque odio non necessitatibus dolore molestias,
              harum dicta a!
            </p>
          </div>
        </DCarousel.Slide>)}
    </DCarousel>,
  args: {
    options: {
      perPage: 1,
      width: 532,
      updateOnMove: true,
      gap: '0.5rem',
      padding: '1rem',
      type: 'loop',
      autoplay: true,
      interval: 3000
    }
  }
}`,...(S=(v=l.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const $=["Default","TwoPerPage","WithBreakpoints","AutoplayAndLoop"];export{l as AutoplayAndLoop,r as Default,t as TwoPerPage,s as WithBreakpoints,$ as __namedExportsOrder,q as default};
