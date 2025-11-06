import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as s}from"./DLayout-D41SpJAa.js";import{D as o}from"./DBox-DcsrQmQG.js";import"./index-DvQjpGce.js";import"./iframe-Yvsh7xC9.js";const W={title:"Design System/Components/Layout",component:s,argTypes:{gap:{control:{type:"select"},options:[0,1,2,3,4,5],description:"Gap spacing between columns (all breakpoints)"},gapSm:{control:{type:"select"},options:[0,1,2,3,4,5],description:"Gap spacing for small screens (≥576px)"},gapMd:{control:{type:"select"},options:[0,1,2,3,4,5],description:"Gap spacing for medium screens (≥768px)"},gapLg:{control:{type:"select"},options:[0,1,2,3,4,5],description:"Gap spacing for large screens (≥992px)"},gapXl:{control:{type:"select"},options:[0,1,2,3,4,5],description:"Gap spacing for extra large screens (≥1200px)"},gapXxl:{control:{type:"select"},options:[0,1,2,3,4,5],description:"Gap spacing for extra extra large screens (≥1400px)"}},parameters:{docs:{description:{component:`
        DLayout is a grid-based layout component that uses Bootstrap's CSS Grid system to create responsive column layouts.
        
        ### Key Features:

        - **Grid-Based:** Uses Bootstrap's <code>.grid</code> class for flexible layouts.
        - **Column System:** Leverages <code>.g-col-##</code> classes for defining column widths (1-12).
        - **Gap Control:** Supports <code>gap</code> property for controlling spacing between columns using Bootstrap's gap utilities (0-5).
        - **Responsive Gap:** Supports responsive gap properties: <code>gapSm</code>, <code>gapMd</code>, <code>gapLg</code>, <code>gapXl</code>, <code>gapXxl</code>.
        - **Pane Component:** Includes <code>DLayout.Pane</code> sub-component for individual columns.
        - **Responsive:** Built on Bootstrap's grid system for responsive designs.

        ### When to Use:

        - When you need to create multi-column layouts.
        - To organize content in a grid-based structure.
        - For responsive page layouts using Bootstrap's grid utilities.
        
        ### Usage:

        <DLayout gap={3}>
          <DLayout.Pane cols="4">Sidebar</DLayout.Pane>
          <DLayout.Pane cols="8">Main Content</DLayout.Pane>
        </DLayout>

        ### Responsive Usage:

        <DLayout gap={1} gapMd={2} gapLg={4}>
          <DLayout.Pane cols="12" colsMd="6" colsLg="4">Responsive Column</DLayout.Pane>
        </DLayout>

        `}}},tags:["autodocs"]},a={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(s.Pane,{cols:"4",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Column 4"}),e.jsx("p",{children:"This pane takes 4 columns"})]})}),e.jsx(s.Pane,{cols:"8",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Column 8"}),e.jsx("p",{children:"This pane takes 8 columns"})]})})]})}},n={parameters:{docs:{description:{story:"Example with three equal columns."}}},args:{children:e.jsxs(e.Fragment,{children:[e.jsx(s.Pane,{cols:"4",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Column 1"}),e.jsx("p",{children:"First column"})]})}),e.jsx(s.Pane,{cols:"4",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Column 2"}),e.jsx("p",{children:"Second column"})]})}),e.jsx(s.Pane,{cols:"4",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Column 3"}),e.jsx("p",{children:"Third column"})]})})]})}},r={parameters:{docs:{description:{story:"Classic sidebar layout with a narrow sidebar (3 columns) and wide content area (9 columns)."}}},args:{children:e.jsxs(e.Fragment,{children:[e.jsx(s.Pane,{cols:"3",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Sidebar"}),e.jsxs("ul",{style:{listStyle:"none",padding:0},children:[e.jsx("li",{children:"Menu Item 1"}),e.jsx("li",{children:"Menu Item 2"}),e.jsx("li",{children:"Menu Item 3"}),e.jsx("li",{children:"Menu Item 4"})]})]})}),e.jsx(s.Pane,{cols:"9",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Main Content"}),e.jsx("p",{children:"This is the main content area that takes up most of the space."}),e.jsx("p",{children:"It occupies 9 out of 12 columns, while the sidebar takes 3."})]})})]})}},t={parameters:{docs:{description:{story:"A more complex layout with multiple rows and different column configurations."}}},args:{children:e.jsxs(e.Fragment,{children:[e.jsx(s.Pane,{cols:"12",children:e.jsx(o,{children:e.jsx("h5",{children:"Header (Full Width)"})})}),e.jsx(s.Pane,{cols:"3",children:e.jsx(o,{children:e.jsx("h6",{children:"Sidebar"})})}),e.jsx(s.Pane,{cols:"6",children:e.jsx(o,{children:e.jsx("h6",{children:"Main Content"})})}),e.jsx(s.Pane,{cols:"3",children:e.jsx(o,{children:e.jsx("h6",{children:"Right Sidebar"})})}),e.jsx(s.Pane,{cols:"12",children:e.jsx(o,{children:e.jsx("h6",{children:"Footer (Full Width)"})})})]})}},c={parameters:{docs:{description:{story:"Demonstrates the use of the <code>gap</code> property to add spacing between columns. The gap accepts values from 0 to 5 (Bootstrap gap utilities)."}}},args:{gap:3,children:e.jsxs(e.Fragment,{children:[e.jsx(s.Pane,{cols:"4",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Column 1"}),e.jsx("p",{children:"With gap spacing"})]})}),e.jsx(s.Pane,{cols:"4",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Column 2"}),e.jsx("p",{children:"With gap spacing"})]})}),e.jsx(s.Pane,{cols:"4",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Column 3"}),e.jsx("p",{children:"With gap spacing"})]})})]})}},l={parameters:{docs:{description:{story:"Demonstrates responsive columns that adapt to different screen sizes. Resize your browser to see the columns change."}}},args:{gap:3,children:e.jsxs(e.Fragment,{children:[e.jsx(s.Pane,{cols:"12",colsSm:"6",colsLg:"4",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Responsive Column 1"}),e.jsx("p",{children:"12 cols on mobile, 6 on tablet, 4 on desktop"})]})}),e.jsx(s.Pane,{cols:"12",colsSm:"6",colsLg:"4",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Responsive Column 2"}),e.jsx("p",{children:"12 cols on mobile, 6 on tablet, 4 on desktop"})]})}),e.jsx(s.Pane,{cols:"12",colsSm:"12",colsLg:"4",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Responsive Column 3"}),e.jsx("p",{children:"12 cols on mobile and tablet, 4 on desktop"})]})})]})}},i={parameters:{docs:{description:{story:"Demonstrates responsive gap spacing that changes at different screen sizes. Small gap on mobile (1), medium gap on tablet (2), larger gap on desktop (4)."}}},args:{gap:1,gapMd:2,gapLg:4,children:e.jsxs(e.Fragment,{children:[e.jsx(s.Pane,{cols:"12",colsMd:"6",colsLg:"3",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Card 1"}),e.jsx("p",{children:"Gap adjusts with screen size"})]})}),e.jsx(s.Pane,{cols:"12",colsMd:"6",colsLg:"3",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Card 2"}),e.jsx("p",{children:"Gap adjusts with screen size"})]})}),e.jsx(s.Pane,{cols:"12",colsMd:"6",colsLg:"3",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Card 3"}),e.jsx("p",{children:"Gap adjusts with screen size"})]})}),e.jsx(s.Pane,{cols:"12",colsMd:"6",colsLg:"3",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Card 4"}),e.jsx("p",{children:"Gap adjusts with screen size"})]})})]})}};var p,d,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: <>
        <DLayout.Pane cols="4">
          <DBox>
            <h5>Column 4</h5>
            <p>This pane takes 4 columns</p>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols="8">
          <DBox>
            <h5>Column 8</h5>
            <p>This pane takes 8 columns</p>
          </DBox>
        </DLayout.Pane>
      </>
  }
}`,...(h=(d=a.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var u,m,x;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Example with three equal columns.'
      }
    }
  },
  args: {
    children: <>
        <DLayout.Pane cols="4">
          <DBox>
            <h5>Column 1</h5>
            <p>First column</p>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols="4">
          <DBox>
            <h5>Column 2</h5>
            <p>Second column</p>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols="4">
          <DBox>
            <h5>Column 3</h5>
            <p>Third column</p>
          </DBox>
        </DLayout.Pane>
      </>
  }
}`,...(x=(m=n.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var g,D,j;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Classic sidebar layout with a narrow sidebar (3 columns) and wide content area (9 columns).'
      }
    }
  },
  args: {
    children: <>
        <DLayout.Pane cols="3">
          <DBox>
            <h5>Sidebar</h5>
            <ul style={{
            listStyle: 'none',
            padding: 0
          }}>
              <li>Menu Item 1</li>
              <li>Menu Item 2</li>
              <li>Menu Item 3</li>
              <li>Menu Item 4</li>
            </ul>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols="9">
          <DBox>
            <h5>Main Content</h5>
            <p>This is the main content area that takes up most of the space.</p>
            <p>It occupies 9 out of 12 columns, while the sidebar takes 3.</p>
          </DBox>
        </DLayout.Pane>
      </>
  }
}`,...(j=(D=r.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var y,L,P;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'A more complex layout with multiple rows and different column configurations.'
      }
    }
  },
  args: {
    children: <>
        <DLayout.Pane cols="12">
          <DBox>
            <h5>Header (Full Width)</h5>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols="3">
          <DBox>
            <h6>Sidebar</h6>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols="6">
          <DBox>
            <h6>Main Content</h6>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols="3">
          <DBox>
            <h6>Right Sidebar</h6>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols="12">
          <DBox>
            <h6>Footer (Full Width)</h6>
          </DBox>
        </DLayout.Pane>
      </>
  }
}`,...(P=(L=t.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var B,C,b;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the use of the <code>gap</code> property to add spacing between columns. The gap accepts values from 0 to 5 (Bootstrap gap utilities).'
      }
    }
  },
  args: {
    gap: 3,
    children: <>
        <DLayout.Pane cols="4">
          <DBox>
            <h5>Column 1</h5>
            <p>With gap spacing</p>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols="4">
          <DBox>
            <h5>Column 2</h5>
            <p>With gap spacing</p>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols="4">
          <DBox>
            <h5>Column 3</h5>
            <p>With gap spacing</p>
          </DBox>
        </DLayout.Pane>
      </>
  }
}`,...(b=(C=c.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var f,S,w;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates responsive columns that adapt to different screen sizes. Resize your browser to see the columns change.'
      }
    }
  },
  args: {
    gap: 3,
    children: <>
        <DLayout.Pane cols="12" colsSm="6" colsLg="4">
          <DBox>
            <h5>Responsive Column 1</h5>
            <p>12 cols on mobile, 6 on tablet, 4 on desktop</p>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols="12" colsSm="6" colsLg="4">
          <DBox>
            <h5>Responsive Column 2</h5>
            <p>12 cols on mobile, 6 on tablet, 4 on desktop</p>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols="12" colsSm="12" colsLg="4">
          <DBox>
            <h5>Responsive Column 3</h5>
            <p>12 cols on mobile and tablet, 4 on desktop</p>
          </DBox>
        </DLayout.Pane>
      </>
  }
}`,...(w=(S=l.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var M,v,G;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates responsive gap spacing that changes at different screen sizes. Small gap on mobile (1), medium gap on tablet (2), larger gap on desktop (4).'
      }
    }
  },
  args: {
    gap: 1,
    gapMd: 2,
    gapLg: 4,
    children: <>
        <DLayout.Pane cols="12" colsMd="6" colsLg="3">
          <DBox>
            <h5>Card 1</h5>
            <p>Gap adjusts with screen size</p>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols="12" colsMd="6" colsLg="3">
          <DBox>
            <h5>Card 2</h5>
            <p>Gap adjusts with screen size</p>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols="12" colsMd="6" colsLg="3">
          <DBox>
            <h5>Card 3</h5>
            <p>Gap adjusts with screen size</p>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols="12" colsMd="6" colsLg="3">
          <DBox>
            <h5>Card 4</h5>
            <p>Gap adjusts with screen size</p>
          </DBox>
        </DLayout.Pane>
      </>
  }
}`,...(G=(v=i.parameters)==null?void 0:v.docs)==null?void 0:G.source}}};const I=["Default","ThreeColumns","Sidebar","ComplexLayout","WithGap","Responsive","ResponsiveGap"];export{t as ComplexLayout,a as Default,l as Responsive,i as ResponsiveGap,r as Sidebar,n as ThreeColumns,c as WithGap,I as __namedExportsOrder,W as default};
