import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as o}from"./DLayout-lx-U7S7v.js";import{D as s}from"./DBox-CwmumsS_.js";import"./index-DnZP3Fio.js";import"./iframe-CppG1Bu4.js";const M={title:"Design System/Components/Layout",component:o,argTypes:{gap:{control:{type:"select"},options:[0,1,2,3,4,5],description:"Gap spacing between columns using Bootstrap gap utilities"}},parameters:{docs:{description:{component:`
        DLayout is a grid-based layout component that uses Bootstrap's CSS Grid system to create responsive column layouts.
        
        ### Key Features:

        - **Grid-Based:** Uses Bootstrap's <code>.grid</code> class for flexible layouts.
        - **Column System:** Leverages <code>.g-col-##</code> classes for defining column widths (1-12).
        - **Gap Control:** Supports <code>gap</code> property for controlling spacing between columns using Bootstrap's gap utilities (0-5).
        - **Pane Component:** Includes <code>DLayout.Pane</code> sub-component for individual columns.
        - **Responsive:** Built on Bootstrap's grid system for responsive designs.

        ### When to Use:

        - When you need to create multi-column layouts.
        - To organize content in a grid-based structure.
        - For responsive page layouts using Bootstrap's grid utilities.
        
        ### Usage:

        <DLayout gap="3">
          <DLayout.Pane cols="4">Sidebar</DLayout.Pane>
          <DLayout.Pane cols="8">Main Content</DLayout.Pane>
        </DLayout>

        ### Responsive Usage:

        <DLayout gap="3">
          <DLayout.Pane cols="12" colsMd="6" colsLg="4">Responsive Column</DLayout.Pane>
        </DLayout>

        `}}},tags:["autodocs"]},n={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(o.Pane,{cols:"4",children:e.jsxs(s,{children:[e.jsx("h5",{children:"Column 4"}),e.jsx("p",{children:"This pane takes 4 columns"})]})}),e.jsx(o.Pane,{cols:"8",children:e.jsxs(s,{children:[e.jsx("h5",{children:"Column 8"}),e.jsx("p",{children:"This pane takes 8 columns"})]})})]})}},a={parameters:{docs:{description:{story:"Example with three equal columns."}}},args:{children:e.jsxs(e.Fragment,{children:[e.jsx(o.Pane,{cols:"4",children:e.jsxs(s,{children:[e.jsx("h5",{children:"Column 1"}),e.jsx("p",{children:"First column"})]})}),e.jsx(o.Pane,{cols:"4",children:e.jsxs(s,{children:[e.jsx("h5",{children:"Column 2"}),e.jsx("p",{children:"Second column"})]})}),e.jsx(o.Pane,{cols:"4",children:e.jsxs(s,{children:[e.jsx("h5",{children:"Column 3"}),e.jsx("p",{children:"Third column"})]})})]})}},t={parameters:{docs:{description:{story:"Classic sidebar layout with a narrow sidebar (3 columns) and wide content area (9 columns)."}}},args:{children:e.jsxs(e.Fragment,{children:[e.jsx(o.Pane,{cols:"3",children:e.jsxs(s,{children:[e.jsx("h5",{children:"Sidebar"}),e.jsxs("ul",{style:{listStyle:"none",padding:0},children:[e.jsx("li",{children:"Menu Item 1"}),e.jsx("li",{children:"Menu Item 2"}),e.jsx("li",{children:"Menu Item 3"}),e.jsx("li",{children:"Menu Item 4"})]})]})}),e.jsx(o.Pane,{cols:"9",children:e.jsxs(s,{children:[e.jsx("h5",{children:"Main Content"}),e.jsx("p",{children:"This is the main content area that takes up most of the space."}),e.jsx("p",{children:"It occupies 9 out of 12 columns, while the sidebar takes 3."})]})})]})}},r={parameters:{docs:{description:{story:"A more complex layout with multiple rows and different column configurations."}}},args:{children:e.jsxs(e.Fragment,{children:[e.jsx(o.Pane,{cols:"12",children:e.jsx(s,{children:e.jsx("h5",{children:"Header (Full Width)"})})}),e.jsx(o.Pane,{cols:"3",children:e.jsx(s,{children:e.jsx("h6",{children:"Sidebar"})})}),e.jsx(o.Pane,{cols:"6",children:e.jsx(s,{children:e.jsx("h6",{children:"Main Content"})})}),e.jsx(o.Pane,{cols:"3",children:e.jsx(s,{children:e.jsx("h6",{children:"Right Sidebar"})})}),e.jsx(o.Pane,{cols:"12",children:e.jsx(s,{children:e.jsx("h6",{children:"Footer (Full Width)"})})})]})}},c={parameters:{docs:{description:{story:"Demonstrates the use of the <code>gap</code> property to add spacing between columns. The gap accepts values from 0 to 5 (Bootstrap gap utilities)."}}},args:{gap:3,children:e.jsxs(e.Fragment,{children:[e.jsx(o.Pane,{cols:"4",children:e.jsxs(s,{children:[e.jsx("h5",{children:"Column 1"}),e.jsx("p",{children:"With gap spacing"})]})}),e.jsx(o.Pane,{cols:"4",children:e.jsxs(s,{children:[e.jsx("h5",{children:"Column 2"}),e.jsx("p",{children:"With gap spacing"})]})}),e.jsx(o.Pane,{cols:"4",children:e.jsxs(s,{children:[e.jsx("h5",{children:"Column 3"}),e.jsx("p",{children:"With gap spacing"})]})})]})}},l={parameters:{docs:{description:{story:"Demonstrates responsive columns that adapt to different screen sizes. Resize your browser to see the columns change."}}},args:{gap:3,children:e.jsxs(e.Fragment,{children:[e.jsx(o.Pane,{cols:"12",colsSm:"6",colsLg:"4",children:e.jsxs(s,{children:[e.jsx("h5",{children:"Responsive Column 1"}),e.jsx("p",{children:"12 cols on mobile, 6 on tablet, 4 on desktop"})]})}),e.jsx(o.Pane,{cols:"12",colsSm:"6",colsLg:"4",children:e.jsxs(s,{children:[e.jsx("h5",{children:"Responsive Column 2"}),e.jsx("p",{children:"12 cols on mobile, 6 on tablet, 4 on desktop"})]})}),e.jsx(o.Pane,{cols:"12",colsSm:"12",colsLg:"4",children:e.jsxs(s,{children:[e.jsx("h5",{children:"Responsive Column 3"}),e.jsx("p",{children:"12 cols on mobile and tablet, 4 on desktop"})]})})]})}};var i,d,h;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(h=(d=n.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var p,u,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var x,D,g;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(g=(D=t.parameters)==null?void 0:D.docs)==null?void 0:g.source}}};var y,j,P;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(P=(j=r.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var L,B,C;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(C=(B=c.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var b,f,S;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(S=(f=l.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const T=["Default","ThreeColumns","Sidebar","ComplexLayout","WithGap","Responsive"];export{r as ComplexLayout,n as Default,l as Responsive,t as Sidebar,a as ThreeColumns,c as WithGap,T as __namedExportsOrder,M as default};
