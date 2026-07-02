import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as o}from"./DLayout-C1FHI6On.js";import{D as s}from"./DBox-DyjlUDDM.js";import"./index-CtlKHQhD.js";import"./iframe-DkjceUUU.js";import"./preload-helper-Dp1pzeXC.js";const n=Array.from({length:31},(X,H)=>H),Z={title:"Design System/Components/Layout",component:o,argTypes:{gap:{control:{type:"select"},options:n,description:"Gap spacing between columns (all breakpoints)",table:{category:"Appearance"}},gapSm:{control:{type:"select"},options:n,description:"Gap spacing for small screens (≥576px)",table:{category:"Appearance"}},gapMd:{control:{type:"select"},options:n,description:"Gap spacing for medium screens (≥768px)",table:{category:"Appearance"}},gapLg:{control:{type:"select"},options:n,description:"Gap spacing for large screens (≥992px)",table:{category:"Appearance"}},gapXl:{control:{type:"select"},options:n,description:"Gap spacing for extra large screens (≥1200px)",table:{category:"Appearance"}},gapXxl:{control:{type:"select"},options:n,description:"Gap spacing for extra extra large screens (≥1400px)",table:{category:"Appearance"}},children:{table:{type:{summary:"ReactNode"},category:"Content"},control:!1},className:{type:"string",table:{category:"Appearance"}}},parameters:{docs:{description:{component:`
DLayout is a grid-based layout component that uses Bootstrap's CSS Grid system to create responsive column layouts.

### Key Features:

- **Grid-Based:** Uses Bootstrap's <code>.grid</code> class for flexible layouts.
- **Column System:** Leverages <code>.g-col-##</code> classes for defining column widths (1-24).
- **Gap Control:** Supports <code>gap</code> property for controlling spacing between columns using Bootstrap's gap utilities (0–30).
- **Responsive Gap:** Supports responsive gap properties: <code>gapSm</code>, <code>gapMd</code>, <code>gapLg</code>, <code>gapXl</code>, <code>gapXxl</code>, using the same Bootstrap gap utility range (0–30).
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
        `}}},tags:["autodocs"]},a={args:{className:"bg-gray-100 p-4",gap:4,columns:12,children:e.jsxs(e.Fragment,{children:[e.jsx(o.Pane,{cols:"4",children:e.jsxs(s,{children:[e.jsx("h5",{children:"Column 4"}),e.jsx("p",{children:"This pane takes 4 columns"})]})}),e.jsx(o.Pane,{cols:"8",children:e.jsxs(s,{children:[e.jsx("h5",{children:"Column 8"}),e.jsx("p",{children:"This pane takes 8 columns"})]})})]})}},l={parameters:{docs:{description:{story:"Example with three equal columns."}}},args:{children:e.jsxs(e.Fragment,{children:[e.jsx(o.Pane,{cols:"4",children:e.jsxs(s,{children:[e.jsx("h5",{children:"Column 1"}),e.jsx("p",{children:"First column"})]})}),e.jsx(o.Pane,{cols:"4",children:e.jsxs(s,{children:[e.jsx("h5",{children:"Column 2"}),e.jsx("p",{children:"Second column"})]})}),e.jsx(o.Pane,{cols:"4",children:e.jsxs(s,{children:[e.jsx("h5",{children:"Column 3"}),e.jsx("p",{children:"Third column"})]})})]})}},c={parameters:{docs:{description:{story:"Classic sidebar layout with a narrow sidebar (3 columns) and wide content area (9 columns)."}}},args:{children:e.jsxs(e.Fragment,{children:[e.jsx(o.Pane,{cols:"3",children:e.jsxs(s,{children:[e.jsx("h5",{children:"Sidebar"}),e.jsxs("ul",{style:{listStyle:"none",padding:0},children:[e.jsx("li",{children:"Menu Item 1"}),e.jsx("li",{children:"Menu Item 2"}),e.jsx("li",{children:"Menu Item 3"}),e.jsx("li",{children:"Menu Item 4"})]})]})}),e.jsx(o.Pane,{cols:"9",children:e.jsxs(s,{children:[e.jsx("h5",{children:"Main Content"}),e.jsx("p",{children:"This is the main content area that takes up most of the space."}),e.jsx("p",{children:"It occupies 9 out of 12 columns, while the sidebar takes 3."})]})})]})}},i={parameters:{docs:{description:{story:"A more complex layout with multiple rows and different column configurations."}}},args:{children:e.jsxs(e.Fragment,{children:[e.jsx(o.Pane,{cols:"12",children:e.jsx(s,{children:e.jsx("h5",{children:"Header (Full Width)"})})}),e.jsx(o.Pane,{cols:"3",children:e.jsx(s,{children:e.jsx("h6",{children:"Sidebar"})})}),e.jsx(o.Pane,{cols:"6",children:e.jsx(s,{children:e.jsx("h6",{children:"Main Content"})})}),e.jsx(o.Pane,{cols:"3",children:e.jsx(s,{children:e.jsx("h6",{children:"Right Sidebar"})})}),e.jsx(o.Pane,{cols:"12",children:e.jsx(s,{children:e.jsx("h6",{children:"Footer (Full Width)"})})})]})}},r={parameters:{docs:{description:{story:"Demonstrates the use of the <code>gap</code> property to add spacing between columns. The gap accepts values from 0 to 5 (Bootstrap gap utilities)."}}},args:{gap:3,children:e.jsxs(e.Fragment,{children:[e.jsx(o.Pane,{cols:"4",children:e.jsxs(s,{children:[e.jsx("h5",{children:"Column 1"}),e.jsx("p",{children:"With gap spacing"})]})}),e.jsx(o.Pane,{cols:"4",children:e.jsxs(s,{children:[e.jsx("h5",{children:"Column 2"}),e.jsx("p",{children:"With gap spacing"})]})}),e.jsx(o.Pane,{cols:"4",children:e.jsxs(s,{children:[e.jsx("h5",{children:"Column 3"}),e.jsx("p",{children:"With gap spacing"})]})})]})}},t={parameters:{docs:{description:{story:"Demonstrates responsive columns that adapt to different screen sizes. Resize your browser to see the columns change."}}},args:{gap:3,children:e.jsxs(e.Fragment,{children:[e.jsx(o.Pane,{cols:"12",colsSm:"6",colsLg:"4",children:e.jsxs(s,{children:[e.jsx("h5",{children:"Responsive Column 1"}),e.jsx("p",{children:"12 cols on mobile, 6 on tablet, 4 on desktop"})]})}),e.jsx(o.Pane,{cols:"12",colsSm:"6",colsLg:"4",children:e.jsxs(s,{children:[e.jsx("h5",{children:"Responsive Column 2"}),e.jsx("p",{children:"12 cols on mobile, 6 on tablet, 4 on desktop"})]})}),e.jsx(o.Pane,{cols:"12",colsSm:"12",colsLg:"4",children:e.jsxs(s,{children:[e.jsx("h5",{children:"Responsive Column 3"}),e.jsx("p",{children:"12 cols on mobile and tablet, 4 on desktop"})]})})]})}},d={parameters:{docs:{description:{story:"Demonstrates responsive gap spacing that changes at different screen sizes. Small gap on mobile (1), medium gap on tablet (2), larger gap on desktop (4)."}}},args:{gap:1,gapMd:2,gapLg:4,children:e.jsxs(e.Fragment,{children:[e.jsx(o.Pane,{cols:"12",colsMd:"6",colsLg:"3",children:e.jsxs(s,{children:[e.jsx("h5",{children:"Card 1"}),e.jsx("p",{children:"Gap adjusts with screen size"})]})}),e.jsx(o.Pane,{cols:"12",colsMd:"6",colsLg:"3",children:e.jsxs(s,{children:[e.jsx("h5",{children:"Card 2"}),e.jsx("p",{children:"Gap adjusts with screen size"})]})}),e.jsx(o.Pane,{cols:"12",colsMd:"6",colsLg:"3",children:e.jsxs(s,{children:[e.jsx("h5",{children:"Card 3"}),e.jsx("p",{children:"Gap adjusts with screen size"})]})}),e.jsx(o.Pane,{cols:"12",colsMd:"6",colsLg:"3",children:e.jsxs(s,{children:[e.jsx("h5",{children:"Card 4"}),e.jsx("p",{children:"Gap adjusts with screen size"})]})})]})}},p={parameters:{docs:{description:{story:"Demonstrates a custom 5-column layout using the <code>columns</code> prop. Instead of the default 12-column grid, this creates 5 equal columns."}}},args:{columns:5,gap:2,children:e.jsxs(e.Fragment,{children:[e.jsx(o.Pane,{cols:"1",children:e.jsxs(s,{children:[e.jsx("h5",{children:"Column 1"}),e.jsx("p",{children:"1 of 5"})]})}),e.jsx(o.Pane,{cols:"1",children:e.jsxs(s,{children:[e.jsx("h5",{children:"Column 2"}),e.jsx("p",{children:"2 of 5"})]})}),e.jsx(o.Pane,{cols:"1",children:e.jsxs(s,{children:[e.jsx("h5",{children:"Column 3"}),e.jsx("p",{children:"3 of 5"})]})}),e.jsx(o.Pane,{cols:"1",children:e.jsxs(s,{children:[e.jsx("h5",{children:"Column 4"}),e.jsx("p",{children:"4 of 5"})]})}),e.jsx(o.Pane,{cols:"1",children:e.jsxs(s,{children:[e.jsx("h5",{children:"Column 5"}),e.jsx("p",{children:"5 of 5"})]})})]})}},m={parameters:{docs:{description:{story:"Demonstrates a custom 24-column layout. This example shows a 2/3 - 1/3 split using 16 columns for the main content and 8 columns for the sidebar."}}},args:{columns:24,gap:3,children:e.jsxs(e.Fragment,{children:[e.jsx(o.Pane,{cols:"16",children:e.jsxs(s,{children:[e.jsx("h5",{children:"Main Content (16/24)"}),e.jsx("p",{children:"This pane takes 16 columns out of 24, which is 2/3 of the width."}),e.jsx("p",{children:"Perfect for main content areas that need more space."})]})}),e.jsx(o.Pane,{cols:"8",children:e.jsxs(s,{children:[e.jsx("h5",{children:"Sidebar (8/24)"}),e.jsx("p",{children:"This pane takes 8 columns out of 24, which is 1/3 of the width."}),e.jsx("p",{children:"Ideal for sidebars or secondary content."})]})})]})}},h={parameters:{docs:{description:{story:`
**CSS-only Grid Utilities**

The \`DLayout\` component is built on top of a set of pure CSS utility classes. When working **without React**, you can replicate any layout by applying these classes directly to your HTML elements.

---

### Container: \`.grid\`

The root wrapper must have the \`.grid\` class. Optionally, override the column count with the CSS custom property \`--bs-columns\`.

\`\`\`html
<div class="grid gap-3">
  <!-- children -->
</div>
\`\`\`

---

### Column spans: \`.g-col-{n}\`

Each child uses \`.g-col-{n}\` to declare how many columns it occupies. The default grid has **12 columns**.

| Class | Columns spanned |
|---|---|
| \`.g-col-1\` | 1 |
| \`.g-col-2\` | 2 |
| \`.g-col-3\` | 3 |
| \`.g-col-4\` | 4 |
| \`.g-col-6\` | 6 |
| \`.g-col-8\` | 8 |
| \`.g-col-9\` | 9 |
| \`.g-col-12\` | 12 (full width) |

> **Extended spans (13–24):** Classes \`.g-col-13\` through \`.g-col-24\` are also available. They become useful when you increase the column count via \`--bs-columns\` on the container or via the \`columns\` prop on \`DLayout\` (e.g. \`columns={24}\`). See the *Custom column count* section below and the *24-column layout* story for an example.

---

### Responsive column spans

Append a breakpoint infix to make the column span apply only from that breakpoint upward.

| Class | Applies from |
|---|---|
| \`.g-col-{n}\` | All screens (xs) |
| \`.g-col-sm-{n}\` | ≥ 576 px |
| \`.g-col-md-{n}\` | ≥ 768 px |
| \`.g-col-lg-{n}\` | ≥ 992 px |
| \`.g-col-xl-{n}\` | ≥ 1200 px |
| \`.g-col-xxl-{n}\` | ≥ 1400 px |

\`\`\`html
<!-- Full width on mobile, half on tablet, one-third on desktop -->
<div class="g-col-12 g-col-md-6 g-col-lg-4">…</div>
\`\`\`

---

### Gap utilities: \`.gap-{n}\`

Control the spacing between columns with Bootstrap gap utility classes. DLayout supports gap values \`0–30\`, which is the full range exposed by the component and the Storybook controls above. Responsive infixes follow the same pattern as column classes.

| Class | Breakpoint |
|---|---|
| \`.gap-{n}\` | All screens |
| \`.gap-sm-{n}\` | ≥ 576 px |
| \`.gap-md-{n}\` | ≥ 768 px |
| \`.gap-lg-{n}\` | ≥ 992 px |
| \`.gap-xl-{n}\` | ≥ 1200 px |
| \`.gap-xxl-{n}\` | ≥ 1400 px |

---

### Custom column count

Override the number of columns with the \`--bs-columns\` CSS variable on the container.

\`\`\`html
<!-- 5-column grid -->
<div class="grid gap-2" style="--bs-columns: 5">
  <div class="g-col-1">1/5</div>
  <div class="g-col-1">2/5</div>
  <div class="g-col-1">3/5</div>
  <div class="g-col-1">4/5</div>
  <div class="g-col-1">5/5</div>
</div>
\`\`\`

---

### Full example: sidebar layout (CSS-only)

\`\`\`html
<div class="grid gap-3">
  <div class="g-col-3">Sidebar</div>
  <div class="g-col-9">Main content</div>
</div>
\`\`\`

### Full example: responsive cards (CSS-only)

\`\`\`html
<div class="grid gap-1 gap-md-2 gap-lg-4">
  <div class="g-col-12 g-col-md-6 g-col-lg-3">Card 1</div>
  <div class="g-col-12 g-col-md-6 g-col-lg-3">Card 2</div>
  <div class="g-col-12 g-col-md-6 g-col-lg-3">Card 3</div>
  <div class="g-col-12 g-col-md-6 g-col-lg-3">Card 4</div>
</div>
\`\`\`

> These classes are the exact ones generated by the \`DLayout\` and \`DLayout.Pane\` React components under the hood.
        `}}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsxs("p",{className:"mb-2 fw-semibold",children:["Sidebar layout - ",e.jsx("code",{children:".grid .gap-3"})," with ",e.jsx("code",{children:".g-col-3"})," / ",e.jsx("code",{children:".g-col-9"})]}),e.jsxs("div",{className:"grid gap-3",children:[e.jsx("div",{className:"g-col-3",children:e.jsxs(s,{children:[e.jsx("strong",{children:"Sidebar"}),e.jsx("p",{className:"mb-0",children:".g-col-3"})]})}),e.jsx("div",{className:"g-col-9",children:e.jsxs(s,{children:[e.jsx("strong",{children:"Main Content"}),e.jsx("p",{className:"mb-0",children:".g-col-9"})]})})]})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"mb-2 fw-semibold",children:["Three equal columns - ",e.jsx("code",{children:".grid"})," with ",e.jsx("code",{children:".g-col-4"})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx("div",{className:"g-col-4",children:e.jsx(s,{children:e.jsx("p",{className:"mb-0",children:".g-col-4"})})}),e.jsx("div",{className:"g-col-4",children:e.jsx(s,{children:e.jsx("p",{className:"mb-0",children:".g-col-4"})})}),e.jsx("div",{className:"g-col-4",children:e.jsx(s,{children:e.jsx("p",{className:"mb-0",children:".g-col-4"})})})]})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"mb-2 fw-semibold",children:["Responsive columns - ",e.jsx("code",{children:".g-col-12 .g-col-md-6 .g-col-lg-4"})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx("div",{className:"g-col-12 g-col-md-6 g-col-lg-4",children:e.jsx(s,{children:e.jsx("p",{className:"mb-0",children:"12 / md:6 / lg:4"})})}),e.jsx("div",{className:"g-col-12 g-col-md-6 g-col-lg-4",children:e.jsx(s,{children:e.jsx("p",{className:"mb-0",children:"12 / md:6 / lg:4"})})}),e.jsx("div",{className:"g-col-12 g-col-md-12 g-col-lg-4",children:e.jsx(s,{children:e.jsx("p",{className:"mb-0",children:"12 / md:12 / lg:4"})})})]})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"mb-2 fw-semibold",children:["Custom 5-column grid - ",e.jsx("code",{children:"--bs-columns: 5"})]}),e.jsxs("div",{className:"grid gap-2",style:{"--bs-columns":5},children:[e.jsx("div",{className:"g-col-1",children:e.jsx(s,{children:e.jsx("p",{className:"mb-0",children:"1/5"})})}),e.jsx("div",{className:"g-col-1",children:e.jsx(s,{children:e.jsx("p",{className:"mb-0",children:"2/5"})})}),e.jsx("div",{className:"g-col-1",children:e.jsx(s,{children:e.jsx("p",{className:"mb-0",children:"3/5"})})}),e.jsx("div",{className:"g-col-1",children:e.jsx(s,{children:e.jsx("p",{className:"mb-0",children:"4/5"})})}),e.jsx("div",{className:"g-col-1",children:e.jsx(s,{children:e.jsx("p",{className:"mb-0",children:"5/5"})})})]})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"mb-2 fw-semibold",children:["Responsive gap - ",e.jsx("code",{children:".gap-1 .gap-md-2 .gap-lg-4"})]}),e.jsxs("div",{className:"grid gap-1 gap-md-2 gap-lg-4",children:[e.jsx("div",{className:"g-col-12 g-col-md-6 g-col-lg-3",children:e.jsx(s,{children:e.jsx("p",{className:"mb-0",children:"Card 1"})})}),e.jsx("div",{className:"g-col-12 g-col-md-6 g-col-lg-3",children:e.jsx(s,{children:e.jsx("p",{className:"mb-0",children:"Card 2"})})}),e.jsx("div",{className:"g-col-12 g-col-md-6 g-col-lg-3",children:e.jsx(s,{children:e.jsx("p",{className:"mb-0",children:"Card 3"})})}),e.jsx("div",{className:"g-col-12 g-col-md-6 g-col-lg-3",children:e.jsx(s,{children:e.jsx("p",{className:"mb-0",children:"Card 4"})})})]})]})]})};var g,u,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var y,j,v;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(v=(j=l.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var D,b,f;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(f=(b=c.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var C,B,L;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(L=(B=i.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var P,N,w;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(w=(N=r.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var S,T,k;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(k=(T=t.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var M,R,F;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(F=(R=d.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var G,A,I;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(I=(A=p.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var W,z,E;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(E=(z=m.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var U,O,q;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
**CSS-only Grid Utilities**

The \\\`DLayout\\\` component is built on top of a set of pure CSS utility classes. When working **without React**, you can replicate any layout by applying these classes directly to your HTML elements.

---

### Container: \\\`.grid\\\`

The root wrapper must have the \\\`.grid\\\` class. Optionally, override the column count with the CSS custom property \\\`--bs-columns\\\`.

\\\`\\\`\\\`html
<div class="grid gap-3">
  <!-- children -->
</div>
\\\`\\\`\\\`

---

### Column spans: \\\`.g-col-{n}\\\`

Each child uses \\\`.g-col-{n}\\\` to declare how many columns it occupies. The default grid has **12 columns**.

| Class | Columns spanned |
|---|---|
| \\\`.g-col-1\\\` | 1 |
| \\\`.g-col-2\\\` | 2 |
| \\\`.g-col-3\\\` | 3 |
| \\\`.g-col-4\\\` | 4 |
| \\\`.g-col-6\\\` | 6 |
| \\\`.g-col-8\\\` | 8 |
| \\\`.g-col-9\\\` | 9 |
| \\\`.g-col-12\\\` | 12 (full width) |

> **Extended spans (13–24):** Classes \\\`.g-col-13\\\` through \\\`.g-col-24\\\` are also available. They become useful when you increase the column count via \\\`--bs-columns\\\` on the container or via the \\\`columns\\\` prop on \\\`DLayout\\\` (e.g. \\\`columns={24}\\\`). See the *Custom column count* section below and the *24-column layout* story for an example.

---

### Responsive column spans

Append a breakpoint infix to make the column span apply only from that breakpoint upward.

| Class | Applies from |
|---|---|
| \\\`.g-col-{n}\\\` | All screens (xs) |
| \\\`.g-col-sm-{n}\\\` | ≥ 576 px |
| \\\`.g-col-md-{n}\\\` | ≥ 768 px |
| \\\`.g-col-lg-{n}\\\` | ≥ 992 px |
| \\\`.g-col-xl-{n}\\\` | ≥ 1200 px |
| \\\`.g-col-xxl-{n}\\\` | ≥ 1400 px |

\\\`\\\`\\\`html
<!-- Full width on mobile, half on tablet, one-third on desktop -->
<div class="g-col-12 g-col-md-6 g-col-lg-4">…</div>
\\\`\\\`\\\`

---

### Gap utilities: \\\`.gap-{n}\\\`

Control the spacing between columns with Bootstrap gap utility classes. DLayout supports gap values \\\`0–30\\\`, which is the full range exposed by the component and the Storybook controls above. Responsive infixes follow the same pattern as column classes.

| Class | Breakpoint |
|---|---|
| \\\`.gap-{n}\\\` | All screens |
| \\\`.gap-sm-{n}\\\` | ≥ 576 px |
| \\\`.gap-md-{n}\\\` | ≥ 768 px |
| \\\`.gap-lg-{n}\\\` | ≥ 992 px |
| \\\`.gap-xl-{n}\\\` | ≥ 1200 px |
| \\\`.gap-xxl-{n}\\\` | ≥ 1400 px |

---

### Custom column count

Override the number of columns with the \\\`--bs-columns\\\` CSS variable on the container.

\\\`\\\`\\\`html
<!-- 5-column grid -->
<div class="grid gap-2" style="--bs-columns: 5">
  <div class="g-col-1">1/5</div>
  <div class="g-col-1">2/5</div>
  <div class="g-col-1">3/5</div>
  <div class="g-col-1">4/5</div>
  <div class="g-col-1">5/5</div>
</div>
\\\`\\\`\\\`

---

### Full example: sidebar layout (CSS-only)

\\\`\\\`\\\`html
<div class="grid gap-3">
  <div class="g-col-3">Sidebar</div>
  <div class="g-col-9">Main content</div>
</div>
\\\`\\\`\\\`

### Full example: responsive cards (CSS-only)

\\\`\\\`\\\`html
<div class="grid gap-1 gap-md-2 gap-lg-4">
  <div class="g-col-12 g-col-md-6 g-col-lg-3">Card 1</div>
  <div class="g-col-12 g-col-md-6 g-col-lg-3">Card 2</div>
  <div class="g-col-12 g-col-md-6 g-col-lg-3">Card 3</div>
  <div class="g-col-12 g-col-md-6 g-col-lg-3">Card 4</div>
</div>
\\\`\\\`\\\`

> These classes are the exact ones generated by the \\\`DLayout\\\` and \\\`DLayout.Pane\\\` React components under the hood.
        \`
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <div>
        <p className="mb-2 fw-semibold">
          {'Sidebar layout - '}
          <code>.grid .gap-3</code>
          {' with '}
          <code>.g-col-3</code>
          {' / '}
          <code>.g-col-9</code>
        </p>
        <div className="grid gap-3">
          <div className="g-col-3">
            <DBox>
              <strong>Sidebar</strong>
              <p className="mb-0">.g-col-3</p>
            </DBox>
          </div>
          <div className="g-col-9">
            <DBox>
              <strong>Main Content</strong>
              <p className="mb-0">.g-col-9</p>
            </DBox>
          </div>
        </div>
      </div>

      <div>
        <p className="mb-2 fw-semibold">
          {'Three equal columns - '}
          <code>.grid</code>
          {' with '}
          <code>.g-col-4</code>
        </p>
        <div className="grid gap-2">
          <div className="g-col-4">
            <DBox><p className="mb-0">.g-col-4</p></DBox>
          </div>
          <div className="g-col-4">
            <DBox><p className="mb-0">.g-col-4</p></DBox>
          </div>
          <div className="g-col-4">
            <DBox><p className="mb-0">.g-col-4</p></DBox>
          </div>
        </div>
      </div>

      <div>
        <p className="mb-2 fw-semibold">
          {'Responsive columns - '}
          <code>.g-col-12 .g-col-md-6 .g-col-lg-4</code>
        </p>
        <div className="grid gap-2">
          <div className="g-col-12 g-col-md-6 g-col-lg-4">
            <DBox><p className="mb-0">12 / md:6 / lg:4</p></DBox>
          </div>
          <div className="g-col-12 g-col-md-6 g-col-lg-4">
            <DBox><p className="mb-0">12 / md:6 / lg:4</p></DBox>
          </div>
          <div className="g-col-12 g-col-md-12 g-col-lg-4">
            <DBox><p className="mb-0">12 / md:12 / lg:4</p></DBox>
          </div>
        </div>
      </div>

      <div>
        <p className="mb-2 fw-semibold">
          {'Custom 5-column grid - '}
          <code>--bs-columns: 5</code>
        </p>
        <div className="grid gap-2" style={{
        '--bs-columns': 5
      } as CSSProperties}>
          <div className="g-col-1">
            <DBox><p className="mb-0">1/5</p></DBox>
          </div>
          <div className="g-col-1">
            <DBox><p className="mb-0">2/5</p></DBox>
          </div>
          <div className="g-col-1">
            <DBox><p className="mb-0">3/5</p></DBox>
          </div>
          <div className="g-col-1">
            <DBox><p className="mb-0">4/5</p></DBox>
          </div>
          <div className="g-col-1">
            <DBox><p className="mb-0">5/5</p></DBox>
          </div>
        </div>
      </div>

      <div>
        <p className="mb-2 fw-semibold">
          {'Responsive gap - '}
          <code>.gap-1 .gap-md-2 .gap-lg-4</code>
        </p>
        <div className="grid gap-1 gap-md-2 gap-lg-4">
          <div className="g-col-12 g-col-md-6 g-col-lg-3">
            <DBox><p className="mb-0">Card 1</p></DBox>
          </div>
          <div className="g-col-12 g-col-md-6 g-col-lg-3">
            <DBox><p className="mb-0">Card 2</p></DBox>
          </div>
          <div className="g-col-12 g-col-md-6 g-col-lg-3">
            <DBox><p className="mb-0">Card 3</p></DBox>
          </div>
          <div className="g-col-12 g-col-md-6 g-col-lg-3">
            <DBox><p className="mb-0">Card 4</p></DBox>
          </div>
        </div>
      </div>
    </div>
}`,...(q=(O=h.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};const $=["Default","ThreeColumns","Sidebar","ComplexLayout","WithGap","Responsive","ResponsiveGap","FiveColumns","TwentyFourColumns","GridUtilities"];export{i as ComplexLayout,a as Default,p as FiveColumns,h as GridUtilities,t as Responsive,d as ResponsiveGap,c as Sidebar,l as ThreeColumns,m as TwentyFourColumns,r as WithGap,$ as __namedExportsOrder,Z as default};
