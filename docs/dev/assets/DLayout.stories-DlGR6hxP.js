import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as s}from"./DLayout-DwUNeyxZ.js";import{D as o}from"./DBox-CvefZ7hV.js";import"./index-5PCv3b9w.js";import"./iframe-B2wa2xAh.js";const H={title:"Design System/Components/Layout",component:s,argTypes:{gap:{control:{type:"select"},options:[0,1,2,3,4,5],description:"Gap spacing between columns (all breakpoints)"},gapSm:{control:{type:"select"},options:[0,1,2,3,4,5],description:"Gap spacing for small screens (≥576px)"},gapMd:{control:{type:"select"},options:[0,1,2,3,4,5],description:"Gap spacing for medium screens (≥768px)"},gapLg:{control:{type:"select"},options:[0,1,2,3,4,5],description:"Gap spacing for large screens (≥992px)"},gapXl:{control:{type:"select"},options:[0,1,2,3,4,5],description:"Gap spacing for extra large screens (≥1200px)"},gapXxl:{control:{type:"select"},options:[0,1,2,3,4,5],description:"Gap spacing for extra extra large screens (≥1400px)"},children:{table:{type:{summary:"ReactNode"}},control:!1},className:{type:"string"}},parameters:{docs:{description:{component:`
DLayout is a grid-based layout component that uses Bootstrap's CSS Grid system to create responsive column layouts.

### Key Features:

- **Grid-Based:** Uses Bootstrap's <code>.grid</code> class for flexible layouts.
- **Column System:** Leverages <code>.g-col-##</code> classes for defining column widths (1-24).
- **Gap Control:** Supports <code>gap</code> property for controlling spacing between columns using Bootstrap's gap utilities (0-30).
- **Responsive Gap:** Supports responsive gap properties: <code>gapSm</code>, <code>gapMd</code>, <code>gapLg</code>, <code>gapXl</code>, <code>gapXxl</code>.
- **Pane Component:** Includes <code>DLayout.Pane</code> sub-component for individual columns.
- **Responsive:** Built on Bootstrap's grid system for responsive designs.

### When to Use:

- When you need to create multi-column layouts.
- To organize content in a grid-based structure.
- For responsive page layouts using Bootstrap's grid utilities.

### Usage:

\`\`\`tsx
<DLayout gap={3}>
  <DLayout.Pane cols="4">Sidebar</DLayout.Pane>
  <DLayout.Pane cols="8">Main Content</DLayout.Pane>
</DLayout>
\`\`\`

### Responsive Usage:
\`\`\`tsx
<DLayout gap={1} gapMd={2} gapLg={4}>
  <DLayout.Pane cols="12" colsMd="6" colsLg="4">
    Responsive Column
  </DLayout.Pane>
</DLayout>
\`\`\`
        `}}},tags:["autodocs"]},a={args:{className:"bg-gray-100 p-4",gap:4,columns:12,children:e.jsxs(e.Fragment,{children:[e.jsx(s.Pane,{cols:"4",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Column 4"}),e.jsx("p",{children:"This pane takes 4 columns"})]})}),e.jsx(s.Pane,{cols:"8",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Column 8"}),e.jsx("p",{children:"This pane takes 8 columns"})]})})]})}},n={parameters:{docs:{description:{story:"Example with three equal columns."}}},args:{children:e.jsxs(e.Fragment,{children:[e.jsx(s.Pane,{cols:"4",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Column 1"}),e.jsx("p",{children:"First column"})]})}),e.jsx(s.Pane,{cols:"4",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Column 2"}),e.jsx("p",{children:"Second column"})]})}),e.jsx(s.Pane,{cols:"4",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Column 3"}),e.jsx("p",{children:"Third column"})]})})]})}},r={parameters:{docs:{description:{story:"Classic sidebar layout with a narrow sidebar (3 columns) and wide content area (9 columns)."}}},args:{children:e.jsxs(e.Fragment,{children:[e.jsx(s.Pane,{cols:"3",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Sidebar"}),e.jsxs("ul",{style:{listStyle:"none",padding:0},children:[e.jsx("li",{children:"Menu Item 1"}),e.jsx("li",{children:"Menu Item 2"}),e.jsx("li",{children:"Menu Item 3"}),e.jsx("li",{children:"Menu Item 4"})]})]})}),e.jsx(s.Pane,{cols:"9",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Main Content"}),e.jsx("p",{children:"This is the main content area that takes up most of the space."}),e.jsx("p",{children:"It occupies 9 out of 12 columns, while the sidebar takes 3."})]})})]})}},t={parameters:{docs:{description:{story:"A more complex layout with multiple rows and different column configurations."}}},args:{children:e.jsxs(e.Fragment,{children:[e.jsx(s.Pane,{cols:"12",children:e.jsx(o,{children:e.jsx("h5",{children:"Header (Full Width)"})})}),e.jsx(s.Pane,{cols:"3",children:e.jsx(o,{children:e.jsx("h6",{children:"Sidebar"})})}),e.jsx(s.Pane,{cols:"6",children:e.jsx(o,{children:e.jsx("h6",{children:"Main Content"})})}),e.jsx(s.Pane,{cols:"3",children:e.jsx(o,{children:e.jsx("h6",{children:"Right Sidebar"})})}),e.jsx(s.Pane,{cols:"12",children:e.jsx(o,{children:e.jsx("h6",{children:"Footer (Full Width)"})})})]})}},c={parameters:{docs:{description:{story:"Demonstrates the use of the <code>gap</code> property to add spacing between columns. The gap accepts values from 0 to 5 (Bootstrap gap utilities)."}}},args:{gap:3,children:e.jsxs(e.Fragment,{children:[e.jsx(s.Pane,{cols:"4",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Column 1"}),e.jsx("p",{children:"With gap spacing"})]})}),e.jsx(s.Pane,{cols:"4",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Column 2"}),e.jsx("p",{children:"With gap spacing"})]})}),e.jsx(s.Pane,{cols:"4",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Column 3"}),e.jsx("p",{children:"With gap spacing"})]})})]})}},l={parameters:{docs:{description:{story:"Demonstrates responsive columns that adapt to different screen sizes. Resize your browser to see the columns change."}}},args:{gap:3,children:e.jsxs(e.Fragment,{children:[e.jsx(s.Pane,{cols:"12",colsSm:"6",colsLg:"4",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Responsive Column 1"}),e.jsx("p",{children:"12 cols on mobile, 6 on tablet, 4 on desktop"})]})}),e.jsx(s.Pane,{cols:"12",colsSm:"6",colsLg:"4",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Responsive Column 2"}),e.jsx("p",{children:"12 cols on mobile, 6 on tablet, 4 on desktop"})]})}),e.jsx(s.Pane,{cols:"12",colsSm:"12",colsLg:"4",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Responsive Column 3"}),e.jsx("p",{children:"12 cols on mobile and tablet, 4 on desktop"})]})})]})}},i={parameters:{docs:{description:{story:"Demonstrates responsive gap spacing that changes at different screen sizes. Small gap on mobile (1), medium gap on tablet (2), larger gap on desktop (4)."}}},args:{gap:1,gapMd:2,gapLg:4,children:e.jsxs(e.Fragment,{children:[e.jsx(s.Pane,{cols:"12",colsMd:"6",colsLg:"3",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Card 1"}),e.jsx("p",{children:"Gap adjusts with screen size"})]})}),e.jsx(s.Pane,{cols:"12",colsMd:"6",colsLg:"3",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Card 2"}),e.jsx("p",{children:"Gap adjusts with screen size"})]})}),e.jsx(s.Pane,{cols:"12",colsMd:"6",colsLg:"3",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Card 3"}),e.jsx("p",{children:"Gap adjusts with screen size"})]})}),e.jsx(s.Pane,{cols:"12",colsMd:"6",colsLg:"3",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Card 4"}),e.jsx("p",{children:"Gap adjusts with screen size"})]})})]})}},d={parameters:{docs:{description:{story:"Demonstrates a custom 5-column layout using the <code>columns</code> prop. Instead of the default 12-column grid, this creates 5 equal columns."}}},args:{columns:5,gap:2,children:e.jsxs(e.Fragment,{children:[e.jsx(s.Pane,{cols:"1",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Column 1"}),e.jsx("p",{children:"1 of 5"})]})}),e.jsx(s.Pane,{cols:"1",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Column 2"}),e.jsx("p",{children:"2 of 5"})]})}),e.jsx(s.Pane,{cols:"1",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Column 3"}),e.jsx("p",{children:"3 of 5"})]})}),e.jsx(s.Pane,{cols:"1",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Column 4"}),e.jsx("p",{children:"4 of 5"})]})}),e.jsx(s.Pane,{cols:"1",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Column 5"}),e.jsx("p",{children:"5 of 5"})]})})]})}},p={parameters:{docs:{description:{story:"Demonstrates a custom 24-column layout. This example shows a 2/3 - 1/3 split using 16 columns for the main content and 8 columns for the sidebar."}}},args:{columns:24,gap:3,children:e.jsxs(e.Fragment,{children:[e.jsx(s.Pane,{cols:"16",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Main Content (16/24)"}),e.jsx("p",{children:"This pane takes 16 columns out of 24, which is 2/3 of the width."}),e.jsx("p",{children:"Perfect for main content areas that need more space."})]})}),e.jsx(s.Pane,{cols:"8",children:e.jsxs(o,{children:[e.jsx("h5",{children:"Sidebar (8/24)"}),e.jsx("p",{children:"This pane takes 8 columns out of 24, which is 1/3 of the width."}),e.jsx("p",{children:"Ideal for sidebars or secondary content."})]})})]})}};var h,u,m;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    className: 'bg-gray-100 p-4',
    gap: 4,
    columns: 12,
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
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var x,g,D;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(D=(g=n.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};var j,y,P;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(P=(y=r.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var L,f,B;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(B=(f=t.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var C,b,w;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(w=(b=c.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var S,M,v;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(v=(M=l.parameters)==null?void 0:M.docs)==null?void 0:v.source}}};var F,G,T;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(T=(G=i.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};var k,R,z;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates a custom 5-column layout using the <code>columns</code> prop. Instead of the default 12-column grid, this creates 5 equal columns.'
      }
    }
  },
  args: {
    columns: 5,
    gap: 2,
    children: <>
        <DLayout.Pane cols="1">
          <DBox>
            <h5>Column 1</h5>
            <p>1 of 5</p>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols="1">
          <DBox>
            <h5>Column 2</h5>
            <p>2 of 5</p>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols="1">
          <DBox>
            <h5>Column 3</h5>
            <p>3 of 5</p>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols="1">
          <DBox>
            <h5>Column 4</h5>
            <p>4 of 5</p>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols="1">
          <DBox>
            <h5>Column 5</h5>
            <p>5 of 5</p>
          </DBox>
        </DLayout.Pane>
      </>
  }
}`,...(z=(R=d.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var I,W,q;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates a custom 24-column layout. This example shows a 2/3 - 1/3 split using 16 columns for the main content and 8 columns for the sidebar.'
      }
    }
  },
  args: {
    columns: 24,
    gap: 3,
    children: <>
        <DLayout.Pane cols="16">
          <DBox>
            <h5>Main Content (16/24)</h5>
            <p>This pane takes 16 columns out of 24, which is 2/3 of the width.</p>
            <p>Perfect for main content areas that need more space.</p>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols="8">
          <DBox>
            <h5>Sidebar (8/24)</h5>
            <p>This pane takes 8 columns out of 24, which is 1/3 of the width.</p>
            <p>Ideal for sidebars or secondary content.</p>
          </DBox>
        </DLayout.Pane>
      </>
  }
}`,...(q=(W=p.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};const _=["Default","ThreeColumns","Sidebar","ComplexLayout","WithGap","Responsive","ResponsiveGap","FiveColumns","TwentyFourColumns"];export{t as ComplexLayout,a as Default,d as FiveColumns,l as Responsive,i as ResponsiveGap,r as Sidebar,n as ThreeColumns,p as TwentyFourColumns,c as WithGap,_ as __namedExportsOrder,H as default};
