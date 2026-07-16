import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as n}from"./config-C3iYXcFk.js";import{D as i}from"./DCarousel-CTCafGP7.js";import"./iframe-vLNjGVop.js";import"./preload-helper-Dp1pzeXC.js";import"./index-nyyuC_Uj.js";import"./DIcon-BaYjXWaB.js";import"./index-BPJnJB5S.js";import"./useMediaBreakpointUp-56XFbS_3.js";import"./DContext-aUrSpq0p.js";import"./index-DFPG5GmN.js";import"./index-oOcxeWdd.js";const O={title:"Design System/Components/Carousel",component:i,parameters:{docs:{description:{component:`
![Shield Badge](https://img.shields.io/badge/Wrapper%20Component-red)

Carousel of elements and components

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Splide](https://splidejs.com/)
+ [Splide React Integration](https://splidejs.com/integration/react-splide/)

## CSS Variables
| Variable                                         | className       | Type            | Description                   |
|--------------------------------------------------|-------------|-----------------|-------------------------------|
| --${n}carousel-arrow-space               | .d-carousel | css length unit | Arrow separation              |
| --${n}carousel-pagination-bottom         | .d-carousel | css length unit | Pagination bottom separation  |
| --${n}carousel-pagination-page-bg        | .d-carousel | css color       | Background of dot page        |
| --${n}carousel-pagination-active-page-bg | .d-carousel | css color       | Background of active dot page |
| --${n}carousel-focus-outline-color       | .d-carousel | css color       | Color of focus ring           |
        `}}},argTypes:{options:{control:"object",table:{category:"Behavior"}},className:{control:"text",type:"string",table:{category:"Appearance"}},style:{control:"object",table:{category:"Appearance"}},iconArrowLeft:{control:!1,description:'DIcon props used to render the "previous" arrow icon (e.g. `{ icon: "ArrowLeft", color: "light" }`).',table:{type:{summary:"ComponentProps<typeof DIcon>"},defaultValue:{summary:"undefined"},category:"Icon"}},iconArrowRight:{control:!1,description:'DIcon props used to render the "next" arrow icon (e.g. `{ icon: "ArrowRight", color: "light" }`).',table:{type:{summary:"ComponentProps<typeof DIcon>"},defaultValue:{summary:"undefined"},category:"Icon"}}},tags:["autodocs"]},t={render:r=>e.jsx(i,{...r,children:[1,2,3,4,5].map(o=>e.jsx(i.Slide,{children:e.jsxs("div",{className:"d-flex flex-column bg-light border p-3 rounded text-center",children:[e.jsx("h5",{children:`Slide ${o}`}),e.jsx("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, cumque? Fugiat illum repellat nemo laboriosam voluptatum, temporibus eius facilis expedita incidunt itaque odio non necessitatibus dolore molestias, harum dicta a!"})]})},o))}),args:{options:{perPage:1,width:532,updateOnMove:!0,gap:"0.5rem",padding:"1rem"}}},a={render:r=>e.jsx(i,{...r,children:[1,2,3,4,5].map(o=>e.jsx(i.Slide,{children:e.jsxs("div",{className:"d-flex flex-column bg-light border p-3 rounded text-center",children:[e.jsx("h5",{children:`Slide ${o}`}),e.jsx("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, cumque? Fugiat illum repellat nemo laboriosam voluptatum, temporibus eius facilis expedita incidunt itaque odio non necessitatibus dolore molestias, harum dicta a!"})]})},o))}),args:{iconArrowRight:{icon:"CircleArrowRight",color:"light"},iconArrowLeft:{icon:"CircleArrowLeft",color:"light"},options:{perPage:1,width:532,updateOnMove:!0,gap:"0.5rem",padding:"1rem"}}},s={render:r=>e.jsx(i,{...r,children:[1,2,3,4,5].map(o=>e.jsx(i.Slide,{children:e.jsxs("div",{className:"d-flex flex-column bg-light border p-3 rounded text-center",children:[e.jsx("h5",{children:`Slide ${o}`}),e.jsx("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, cumque? Fugiat illum repellat nemo laboriosam voluptatum, temporibus eius facilis expedita incidunt itaque odio non necessitatibus dolore molestias, harum dicta a!"})]})},o))}),args:{options:{perMove:1,perPage:2,type:"loop",width:532,gap:"0.5rem",padding:"1rem",omitEnd:!1,updateOnMove:!0}}},l={render:r=>e.jsx(i,{...r,children:[1,2,3,4,5].map(o=>e.jsx(i.Slide,{children:e.jsxs("div",{className:"d-flex flex-column bg-light border p-3 rounded text-center",children:[e.jsx("h5",{children:`Slide ${o}`}),e.jsx("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, cumque? Fugiat illum repellat nemo laboriosam voluptatum, temporibus eius facilis expedita incidunt itaque odio non necessitatibus dolore molestias, harum dicta a!"})]})},o))}),args:{options:{pagination:!0,width:532,padding:16,gap:8,perMove:1,perPage:3,type:"loop",focus:"center",arrows:!0,breakpoints:{375:{width:343,arrows:!1,perPage:1},552:{width:"calc(100vw - 32px)",perPage:2}}}}},d={parameters:{docs:{description:{story:`
The <code>autoplay</code> works automatically if reduced motion is not enabled on the device.

If you need to force autoplay, you can enable it explicitly by setting <code>options: { reducedMotion: { autoplay: true } }</code>.
        `}}},render:r=>e.jsx(i,{...r,children:[1,2,3,4,5].map(o=>e.jsx(i.Slide,{children:e.jsxs("div",{className:"d-flex flex-column bg-light border p-3 rounded text-center",children:[e.jsx("h5",{children:`Slide ${o}`}),e.jsx("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, cumque? Fugiat illum repellat nemo laboriosam voluptatum, temporibus eius facilis expedita incidunt itaque odio non necessitatibus dolore molestias, harum dicta a!"})]})},o))}),args:{options:{perPage:1,width:532,updateOnMove:!0,gap:"0.5rem",padding:"1rem",type:"loop",autoplay:!0,interval:3e3}}};var c,u,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,g,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
    iconArrowRight: {
      icon: 'CircleArrowRight',
      color: 'light'
    },
    iconArrowLeft: {
      icon: 'CircleArrowLeft',
      color: 'light'
    },
    options: {
      perPage: 1,
      width: 532,
      updateOnMove: true,
      gap: '0.5rem',
      padding: '1rem'
    }
  }
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,b,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var y,v,w;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(w=(v=l.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var S,C,j;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(j=(C=d.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};const R=["Default","CustomArrows","TwoPerPage","WithBreakpoints","AutoplayAndLoop"];export{d as AutoplayAndLoop,a as CustomArrows,t as Default,s as TwoPerPage,l as WithBreakpoints,R as __namedExportsOrder,O as default};
