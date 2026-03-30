import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as a}from"./DCarousel-sHQVvmjO.js";import{P as i}from"./config-C3iYXcFk.js";import"./iframe-um1WsC0C.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cc_4mDlw.js";const q={title:"Design System/Components/Carousel",component:a,parameters:{docs:{description:{component:`
![Shield Badge](https://img.shields.io/badge/Wrapper%20Component-red)

Carousel of elements and components

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Splide](https://splidejs.com/)
+ [Splide React Integration](https://splidejs.com/integration/react-splide/)

## CSS Variables
| Variable                                         | className       | Type            | Description                   |
|--------------------------------------------------|-------------|-----------------|-------------------------------|
| --${i}carousel-arrow-space               | .d-carousel | css length unit | Arrow separation              |
| --${i}carousel-pagination-bottom         | .d-carousel | css length unit | Pagination bottom separation  |
| --${i}carousel-pagination-page-bg        | .d-carousel | css color       | Background of dot page        |
| --${i}carousel-pagination-active-page-bg | .d-carousel | css color       | Background of active dot page |
| --${i}carousel-focus-outline-color       | .d-carousel | css color       | Color of focus ring           |
        `}}},argTypes:{options:{control:"object",table:{category:"Behavior"}},className:{control:"text",type:"string",table:{category:"Appearance"}},style:{control:"object",table:{category:"Appearance"}}},tags:["autodocs"]},n={render:t=>e.jsx(a,{...t,children:[1,2,3,4,5].map(o=>e.jsx(a.Slide,{children:e.jsxs("div",{className:"d-flex flex-column bg-light border p-3 rounded text-center",children:[e.jsx("h5",{children:`Slide ${o}`}),e.jsx("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, cumque? Fugiat illum repellat nemo laboriosam voluptatum, temporibus eius facilis expedita incidunt itaque odio non necessitatibus dolore molestias, harum dicta a!"})]})},o))}),args:{options:{perPage:1,width:532,updateOnMove:!0,gap:"0.5rem",padding:"1rem"}}},r={render:t=>e.jsx(a,{...t,children:[1,2,3,4,5].map(o=>e.jsx(a.Slide,{children:e.jsxs("div",{className:"d-flex flex-column bg-light border p-3 rounded text-center",children:[e.jsx("h5",{children:`Slide ${o}`}),e.jsx("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, cumque? Fugiat illum repellat nemo laboriosam voluptatum, temporibus eius facilis expedita incidunt itaque odio non necessitatibus dolore molestias, harum dicta a!"})]})},o))}),args:{options:{perMove:1,perPage:2,type:"loop",width:532,gap:"0.5rem",padding:"1rem",omitEnd:!1,updateOnMove:!0}}},s={render:t=>e.jsx(a,{...t,children:[1,2,3,4,5].map(o=>e.jsx(a.Slide,{children:e.jsxs("div",{className:"d-flex flex-column bg-light border p-3 rounded text-center",children:[e.jsx("h5",{children:`Slide ${o}`}),e.jsx("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, cumque? Fugiat illum repellat nemo laboriosam voluptatum, temporibus eius facilis expedita incidunt itaque odio non necessitatibus dolore molestias, harum dicta a!"})]})},o))}),args:{options:{pagination:!0,width:532,padding:16,gap:8,perMove:1,perPage:3,type:"loop",focus:"center",arrows:!0,breakpoints:{375:{width:343,arrows:!1,perPage:1},552:{width:"calc(100vw - 32px)",perPage:2}}}}},l={parameters:{docs:{description:{story:`
The <code>autoplay</code> works automatically if reduced motion is not enabled on the device.

If you need to force autoplay, you can enable it explicitly by setting <code>options: { reducedMotion: { autoplay: true } }</code>.
        `}}},render:t=>e.jsx(a,{...t,children:[1,2,3,4,5].map(o=>e.jsx(a.Slide,{children:e.jsxs("div",{className:"d-flex flex-column bg-light border p-3 rounded text-center",children:[e.jsx("h5",{children:`Slide ${o}`}),e.jsx("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, cumque? Fugiat illum repellat nemo laboriosam voluptatum, temporibus eius facilis expedita incidunt itaque odio non necessitatibus dolore molestias, harum dicta a!"})]})},o))}),args:{options:{perPage:1,width:532,updateOnMove:!0,gap:"0.5rem",padding:"1rem",type:"loop",autoplay:!0,interval:3e3}}};var d,c,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,m,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,b,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var f,v,y;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
The <code>autoplay</code> works automatically if reduced motion is not enabled on the device.

If you need to force autoplay, you can enable it explicitly by setting <code>options: { reducedMotion: { autoplay: true } }</code>.
        \`
      }
    }
  },
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
}`,...(y=(v=l.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const $=["Default","TwoPerPage","WithBreakpoints","AutoplayAndLoop"];export{l as AutoplayAndLoop,n as Default,r as TwoPerPage,s as WithBreakpoints,$ as __namedExportsOrder,q as default};
