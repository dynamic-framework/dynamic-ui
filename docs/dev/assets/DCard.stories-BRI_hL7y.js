import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as a}from"./DCard-CxYmsqQA.js";import{D as N}from"./DButton-CApI4VYz.js";import"./index-Csc2mwcI.js";import"./iframe-z1MTcv_h.js";import"./DIcon-BXrlZjAH.js";import"./config-C3iYXcFk.js";import"./useMediaBreakpointUp-CaQH-f2J.js";import"./DContext-By_v3TNv.js";import"./index-Dj-_Oamp.js";import"./index-bqyYwqY-.js";const k={title:"Design System/Components/Card",component:a,parameters:{docs:{description:{component:`
Card component

Dynamic framework exports 4 card-related components:

+ **DCard**: The main component to display a card.
+ **DCard.Header** | **DCardHeader**: Commonly used for the title of a card.
+ **DCard.Body** | **DCardBody**: The content of the card.
+ **DCard.Footer** | **DCardFooter**: Commonly used for actions.

To understand in more detail the aspects and css varibles covered by this component,
review the following documentation:

+ [Bootstrap Cards](https://getbootstrap.com/docs/5.3/components/card/)

## CSS Variables

The Bootstrap documentation provides details on the default [Card CSS Variables](https://getbootstrap.com/docs/5.3/components/card/#css)

        `}}},argTypes:{className:{control:"text",type:"string"},style:{control:"object"}},tags:["autodocs"]},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(a.Header,{children:e.jsx("h5",{className:"card-title mb-0",children:"Title #1"})}),e.jsx(a.Body,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quo?"}),e.jsx(a.Footer,{className:"d-flex justify-content-end",children:e.jsx(N,{text:"Click me!"})})]}),args:{style:{width:360}}},s={render:r=>e.jsxs(a,{...r,children:[e.jsx(a.Header,{children:e.jsx("h5",{className:"card-title mb-0",children:"Title #1"})}),e.jsx(a.Body,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quo?"})]}),args:{style:{width:360}}},o={render:r=>e.jsx(a,{...r,children:e.jsx(a.Body,{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos magni ex explicabo sint repudiandae quia commodi reiciendis reprehenderit minima voluptatibus suscipit adipisci modi, veniam doloribus. Laudantium magni tenetur sint eligendi?"})}),args:{style:{width:360}}},i={render:r=>e.jsxs(a,{...r,children:[e.jsx("img",{src:"https://placehold.co/200x200",className:"card-img-top",alt:"200x200"}),e.jsx(a.Body,{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum nihil exercitationem debitis aperiam consectetur beatae dolor error quod voluptatem laboriosam."})]}),args:{style:{width:360}}},n={render:r=>e.jsx(a,{...r,children:e.jsxs("div",{className:"row g-0",children:[e.jsx("div",{className:"col-md-4",children:e.jsx("img",{src:"https://placehold.co/200x300",className:"img-fluid rounded-start",alt:"200x200"})}),e.jsx("div",{className:"col-md-8",children:e.jsxs(a.Body,{children:[e.jsx("h5",{className:"card-title mb-0",children:"Card title"}),e.jsx("p",{className:"card-text",children:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}),e.jsx("p",{className:"card-text",children:e.jsx("small",{className:"text-body-secondary",children:"Last updated 3 mins ago"})})]})})]})}),args:{style:{width:400}}};var d,c,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <DCard {...args}>
      <DCard.Header>
        <h5 className="card-title mb-0">Title #1</h5>
      </DCard.Header>
      <DCard.Body>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quo?
      </DCard.Body>
      <DCard.Footer className="d-flex justify-content-end">
        <DButton text="Click me!" />
      </DCard.Footer>
    </DCard>,
  args: {
    style: {
      width: 360
    }
  }
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,p,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <DCard {...args}>
      <DCard.Header>
        <h5 className="card-title mb-0">Title #1</h5>
      </DCard.Header>
      <DCard.Body>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quo?
      </DCard.Body>
    </DCard>,
  args: {
    style: {
      width: 360
    }
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,g,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <DCard {...args}>
      <DCard.Body>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Quos magni ex explicabo sint repudiandae quia commodi reiciendis
        reprehenderit minima voluptatibus suscipit adipisci modi, veniam
        doloribus. Laudantium magni tenetur sint eligendi?
      </DCard.Body>
    </DCard>,
  args: {
    style: {
      width: 360
    }
  }
}`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var y,C,D;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <DCard {...args}>
      <img src="https://placehold.co/200x200" className="card-img-top" alt="200x200" />
      <DCard.Body>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Eum nihil exercitationem debitis aperiam consectetur beatae
        dolor error quod voluptatem laboriosam.
      </DCard.Body>
    </DCard>,
  args: {
    style: {
      width: 360
    }
  }
}`,...(D=(C=i.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var b,j,B;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <DCard {...args}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src="https://placehold.co/200x300" className="img-fluid rounded-start" alt="200x200" />
        </div>
        <div className="col-md-8">
          <DCard.Body>
            <h5 className="card-title mb-0">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text
              below as a natural lead-in to additional
              content. This content is a little bit longer.
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </p>
          </DCard.Body>
        </div>
      </div>
    </DCard>,
  args: {
    style: {
      width: 400
    }
  }
}`,...(B=(j=n.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};const O=["Default","HeaderAndBody","OnlyBody","TopImage","Horizontal"];export{t as Default,s as HeaderAndBody,n as Horizontal,o as OnlyBody,i as TopImage,O as __namedExportsOrder,k as default};
