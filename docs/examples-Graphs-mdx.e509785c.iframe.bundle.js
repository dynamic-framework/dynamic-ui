"use strict";(self.webpackChunk_dynamic_framework_ui_react=self.webpackChunk_dynamic_framework_ui_react||[]).push([[856],{"./stories/examples/Graphs.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Graphs}});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.5.1_@types+react-dom@18.2.14_@types+react@18.2.31_encoding@0.1.13_react-d_l35q4xusgbdqni7di6kmyf4vqa/node_modules/@storybook/blocks/dist/index.mjs"),ResponsiveContainer=__webpack_require__("../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/component/ResponsiveContainer.js"),LineChart=__webpack_require__("../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/chart/LineChart.js"),CartesianGrid=__webpack_require__("../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/cartesian/CartesianGrid.js"),XAxis=__webpack_require__("../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/cartesian/XAxis.js"),YAxis=__webpack_require__("../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/cartesian/YAxis.js"),Tooltip=__webpack_require__("../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/component/Tooltip.js"),Legend=__webpack_require__("../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/component/Legend.js"),Line=__webpack_require__("../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/cartesian/Line.js"),PieChart=__webpack_require__("../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/chart/PieChart.js"),Pie=__webpack_require__("../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/polar/Pie.js"),Cell=__webpack_require__("../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/component/Cell.js"),BarChart=__webpack_require__("../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/chart/BarChart.js"),Bar=__webpack_require__("../../node_modules/.pnpm/recharts@2.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/recharts/es6/cartesian/Bar.js");const LINE_CHART_DATA=[{date:"Mar 23",conservative:100,tech:100},{date:"Apr 23",conservative:101,tech:115},{date:"May 23",conservative:101,tech:130},{date:"Jun 23",conservative:102,tech:125},{date:"Jul 23",conservative:102,tech:140},{date:"Aug 23",conservative:102,tech:135},{date:"Sep 23",conservative:103,tech:150},{date:"Oct 23",conservative:103,tech:145},{date:"Nov 23",conservative:103,tech:155},{date:"Dec 23",conservative:104,tech:160},{date:"Jan 24",conservative:104,tech:165},{date:"Feb 24",conservative:104,tech:170},{date:"Mar 24",conservative:105,tech:180}];function ExampleLineChart(){return(0,jsx_runtime.jsx)(ResponsiveContainer.h,{width:"100%",height:"100%",children:(0,jsx_runtime.jsxs)(LineChart.w,{data:LINE_CHART_DATA,children:[(0,jsx_runtime.jsx)(CartesianGrid.q,{strokeDasharray:"4 ",vertical:!1}),(0,jsx_runtime.jsx)(XAxis.K,{dataKey:"date"}),(0,jsx_runtime.jsx)(YAxis.B,{domain:[100,"dataMax + 20"]}),(0,jsx_runtime.jsx)(Tooltip.u,{}),(0,jsx_runtime.jsx)(Legend.D,{}),(0,jsx_runtime.jsx)(Line.x,{type:"monotone",dataKey:"conservative",stroke:"var(--bs-primary)",activeDot:{r:8,stroke:"var(--bs-primary-100)",strokeWidth:2},dot:!1,name:"Conservative Differentiated Oct24"}),(0,jsx_runtime.jsx)(Line.x,{type:"monotone",dataKey:"tech",stroke:"var(--bs-secondary)",activeDot:{r:8,stroke:"var(--bs-secondary-100)",strokeWidth:2},dot:!1,name:"Technological"})]})})}ExampleLineChart.displayName="ExampleLineChart";const PIE_CHART_COLORS=["var(--bs-primary)","var(--bs-primary-300)","var(--bs-primary-100)","var(--bs-primary-600)"],PIE_CHART_DATA=[{id:1,name:"Group A",value:6500},{id:2,name:"Group B",value:1200},{id:3,name:"Group C",value:10200},{id:4,name:"Group D",value:2100}],total=PIE_CHART_DATA.reduce(((value,item)=>value+item.value),0),renderCustomizedLabel=({cx:cx,cy:cy})=>(0,jsx_runtime.jsx)("text",{x:cx,y:cy,fill:"var(--bs-gray-900)",textAnchor:"middle",dominantBaseline:"central",className:"fs-3",children:`$${total.toLocaleString()}`});function ExamplePieChart(){return(0,jsx_runtime.jsx)(ResponsiveContainer.h,{width:"100%",height:"100%",children:(0,jsx_runtime.jsx)(PieChart.u,{children:(0,jsx_runtime.jsx)(Pie.b,{data:PIE_CHART_DATA,cx:"50%",cy:"50%",innerRadius:76,dataKey:"value",label:renderCustomizedLabel,labelLine:!1,children:PIE_CHART_DATA.map(((entry,index)=>(0,jsx_runtime.jsx)(Cell.b,{fill:PIE_CHART_COLORS[index%PIE_CHART_COLORS.length]},entry.id)))})})})}renderCustomizedLabel.displayName="renderCustomizedLabel",ExamplePieChart.displayName="ExamplePieChart";const BAR_CHART_DATA=[{name:"Jan 23",value:5e4},{name:"Mar 23",value:75e3},{name:"May 23",value:1e5},{name:"Jul 23",value:8e4},{name:"Sep 23",value:7e4},{name:"Nov 23",value:6e4}];function ExampleBarChart(){return(0,jsx_runtime.jsx)(ResponsiveContainer.h,{width:"100%",height:"100%",children:(0,jsx_runtime.jsxs)(BarChart.v,{data:BAR_CHART_DATA,barCategoryGap:"25%",children:[(0,jsx_runtime.jsx)(CartesianGrid.q,{strokeDasharray:"4 ",vertical:!1}),(0,jsx_runtime.jsx)(XAxis.K,{dataKey:"name"}),(0,jsx_runtime.jsx)(YAxis.B,{domain:[0,"dataMax + 10000"],tickFormatter:value=>`$${(value/1e3).toFixed(0)}K`}),(0,jsx_runtime.jsx)(Tooltip.u,{formatter:value=>`$${value.toLocaleString()}`,cursor:{fill:"var(--bs-secondary-100)"}}),(0,jsx_runtime.jsx)(Bar.$,{dataKey:"value",fill:"var(--bs-secondary)"})]})})}ExampleBarChart.displayName="ExampleBarChart";const PROGRESSIVE_BAR_CHART_DATA=[{id:1,name:"Item A",value:22500,down:0,color:"var(--bs-blue)"},{id:2,name:"Item B",value:1e3,down:21500,color:"var(--bs-orange)"},{id:3,name:"Item C",value:2e3,down:19500,color:"var(--bs-orange)"},{id:4,name:"Item D",value:3e3,down:16500,color:"var(--bs-orange)"},{id:5,name:"Item E",value:16500,down:0,color:"var(--bs-green)"},{id:6,name:"Item F",value:1e3,down:16500,color:"var(--bs-blue)"},{id:7,name:"Item G",value:8e3,down:16500,color:"var(--bs-blue)"},{id:8,name:"Item H",value:24500,down:0,color:"var(--bs-green)"}];function ExampleProgressiveBarChart(){return(0,jsx_runtime.jsx)(ResponsiveContainer.h,{width:"100%",height:"100%",children:(0,jsx_runtime.jsxs)(BarChart.v,{data:PROGRESSIVE_BAR_CHART_DATA,children:[(0,jsx_runtime.jsx)(CartesianGrid.q,{strokeDasharray:"4 ",vertical:!1}),(0,jsx_runtime.jsx)(XAxis.K,{dataKey:"name"}),(0,jsx_runtime.jsx)(YAxis.B,{domain:[0,"dataMax + 10000"]}),(0,jsx_runtime.jsx)(Tooltip.u,{formatter:value=>`$${value.toLocaleString()}`,cursor:{fill:"var(--bs-gray-100)"}}),(0,jsx_runtime.jsx)(Bar.$,{dataKey:"down",stackId:"a",fill:"transparent"}),(0,jsx_runtime.jsx)(Bar.$,{dataKey:"value",stackId:"a",children:PROGRESSIVE_BAR_CHART_DATA.map((entry=>(0,jsx_runtime.jsx)(Cell.b,{fill:entry.color},entry.id)))})]})})}function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",strong:"strong",h3:"h3",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Design System/Examples/Graphs"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"recharts-the-choice-for-graphs",children:"Recharts: The Choice for Graphs"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"In our project, we've opted to utilize Recharts as our primary graphing library. Here's why:"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"why-recharts",children:"Why Recharts?"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Recharts is a highly versatile and feature-rich library designed specifically for building charts in React applications. Here are some key reasons why we chose Recharts:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Native React Components:"})," Recharts provides a set of native React components for building various types of charts, making it easy to integrate into our React-based project."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Rich Feature Set:"})," It offers a comprehensive set of chart types and customization options, allowing us to create visually appealing and interactive charts."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Responsive Design:"})," Recharts supports responsive design out of the box, ensuring that our charts look great and remain functional across different screen sizes and devices."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Active Community:"})," Recharts has a large and active community, which means that we can easily find support, resources, and community-contributed plugins and extensions."]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"why-no-wrapper-component",children:"Why No Wrapper Component?"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Unlike some other charting libraries, Recharts provides React components that can be directly imported and used in our application without the need for a wrapper component. Here's why we don't need to create a wrapper component for Recharts:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Direct Integration:"})," Recharts components can be directly imported and used like any other React component, simplifying the integration process and reducing unnecessary abstraction layers."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Customization:"})," Recharts components are highly customizable, allowing us to achieve the desired functionality and appearance without the need for additional wrapper components."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Performance:"})," By avoiding unnecessary wrapper components, we can improve the performance of our application by reducing the overhead associated with component nesting."]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Let's dive into some examples of how we can use Recharts to create different types of charts:"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"examplelinecharttsx",children:(0,jsx_runtime.jsx)(_components.code,{children:"ExampleLineChart.tsx"})}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)("div",{style:{height:"300px"},children:(0,jsx_runtime.jsx)(ExampleLineChart,{})})}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:"\nimport {\n  LineChart,\n  Line,\n  XAxis,\n  YAxis,\n  CartesianGrid,\n  Tooltip,\n  Legend,\n  ResponsiveContainer,\n} from 'recharts';\n\nconst LINE_CHART_DATA = [\n  { date: 'Mar 23', conservative: 100, tech: 100 },\n  { date: 'Apr 23', conservative: 101, tech: 115 },\n  { date: 'May 23', conservative: 101, tech: 130 },\n  { date: 'Jun 23', conservative: 102, tech: 125 },\n  { date: 'Jul 23', conservative: 102, tech: 140 },\n  { date: 'Aug 23', conservative: 102, tech: 135 },\n  { date: 'Sep 23', conservative: 103, tech: 150 },\n  { date: 'Oct 23', conservative: 103, tech: 145 },\n  { date: 'Nov 23', conservative: 103, tech: 155 },\n  { date: 'Dec 23', conservative: 104, tech: 160 },\n  { date: 'Jan 24', conservative: 104, tech: 165 },\n  { date: 'Feb 24', conservative: 104, tech: 170 },\n  { date: 'Mar 24', conservative: 105, tech: 180 },\n];\n\nexport function ExampleLineChart() {\n  return (\n    <ResponsiveContainer width=\"100%\" height=\"100%\">\n      <LineChart data={LINE_CHART_DATA}>\n        <CartesianGrid strokeDasharray=\"4 \" vertical={false} />\n        <XAxis dataKey=\"date\" />\n        <YAxis domain={[100, 'dataMax + 20']} />\n        <Tooltip />\n        <Legend />\n        <Line\n          type=\"monotone\"\n          dataKey=\"conservative\"\n          stroke=\"var(--bs-primary)\"\n          activeDot={{ r: 8, stroke: 'var(--bs-primary-100)', strokeWidth: 2 }}\n          dot={false}\n          name=\"Conservative Differentiated Oct24\"\n        />\n        <Line\n          type=\"monotone\"\n          dataKey=\"tech\"\n          stroke=\"var(--bs-secondary)\"\n          activeDot={{ r: 8, stroke: 'var(--bs-secondary-100)', strokeWidth: 2 }}\n          dot={false}\n          name=\"Technological\"\n        />\n      </LineChart>\n    </ResponsiveContainer>\n  );\n}\n    ",language:"tsx",dark:!0}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"examplepiecharttsx",children:(0,jsx_runtime.jsx)(_components.code,{children:"ExamplePieChart.tsx"})}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)("div",{style:{height:"300px"},children:(0,jsx_runtime.jsx)(ExamplePieChart,{})})}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:"\nimport {\n  ResponsiveContainer,\n  Pie,\n  PieChart,\n  Cell,\n} from 'recharts';\n\nimport type { PieLabelRenderProps } from 'recharts';\n\nconst PIE_CHART_COLORS = [\n  'var(--bs-primary)',\n  'var(--bs-primary-300)',\n  'var(--bs-primary-100)',\n  'var(--bs-primary-600)',\n];\nconst PIE_CHART_DATA = [\n  { id: 1, name: 'Group A', value: 6500 },\n  { id: 2, name: 'Group B', value: 1200 },\n  { id: 3, name: 'Group C', value: 10200 },\n  { id: 4, name: 'Group D', value: 2100 },\n];\n\nconst total = PIE_CHART_DATA.reduce(\n  (value, item) => value + item.value,\n  0,\n);\n\nconst renderCustomizedLabel = ({ cx, cy }: PieLabelRenderProps) => (\n  <text\n    x={cx}\n    y={cy}\n    fill=\"var(--bs-gray-900)\"\n    textAnchor=\"middle\"\n    dominantBaseline=\"central\"\n    className=\"fs-3\"\n  >\n    {`$${total.toLocaleString()}`}\n  </text>\n);\n\nexport function ExamplePieChart() {\n  return (\n    <ResponsiveContainer width=\"100%\" height=\"100%\">\n      <PieChart>\n        <Pie\n          data={PIE_CHART_DATA}\n          cx=\"50%\"\n          cy=\"50%\"\n          innerRadius={76}\n          dataKey=\"value\"\n          label={renderCustomizedLabel}\n          labelLine={false}\n        >\n          {PIE_CHART_DATA.map((entry, index) => (\n            <Cell key={entry.id} fill={PIE_CHART_COLORS[index % PIE_CHART_COLORS.length]} />\n          ))}\n        </Pie>\n      </PieChart>\n    </ResponsiveContainer>\n  );\n}\n    ",language:"tsx",dark:!0}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"bar-chart",children:"Bar Chart"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)("div",{style:{height:"300px"},children:(0,jsx_runtime.jsx)(ExampleBarChart,{})})}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:"\nimport {\n  XAxis,\n  YAxis,\n  CartesianGrid,\n  ResponsiveContainer,\n  Tooltip,\n  BarChart,\n  Bar,\n} from 'recharts';\n\nconst BAR_CHART_DATA = [\n  { name: 'Jan 23', value: 50000 },\n  { name: 'Mar 23', value: 75000 },\n  { name: 'May 23', value: 100000 },\n  { name: 'Jul 23', value: 80000 },\n  { name: 'Sep 23', value: 70000 },\n  { name: 'Nov 23', value: 60000 },\n];\n\nexport function ExampleBarChart() {\n  return (\n    <ResponsiveContainer width=\"100%\" height=\"100%\">\n      <BarChart data={BAR_CHART_DATA} barCategoryGap=\"25%\">\n        <CartesianGrid strokeDasharray=\"4 \" vertical={false} />\n        <XAxis dataKey=\"name\" />\n        <YAxis\n          domain={[0, 'dataMax + 10000']}\n          tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}\n        />\n        <Tooltip\n          formatter={(value: number) => `$${value.toLocaleString()}`}\n          cursor={{ fill: 'var(--bs-secondary-100)' }}\n        />\n        <Bar dataKey=\"value\" fill=\"var(--bs-secondary)\" />\n      </BarChart>\n    </ResponsiveContainer>\n  );\n}\n    ",language:"tsx",dark:!0}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"progressive-column-bar-chart",children:"Progressive Column Bar Chart"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Progressive column charts, also knows as waterfall charts, are like stacked charts with each segment of\na single stack displaced vertically from the next segment."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Progressive column charts are useful for emphasizing the contribution of the individual segments to the whole."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)("div",{style:{height:"300px"},children:(0,jsx_runtime.jsx)(ExampleProgressiveBarChart,{})})}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:"\nimport {\n  Bar,\n  BarChart,\n  CartesianGrid,\n  Cell,\n  ResponsiveContainer,\n  XAxis,\n  YAxis,\n  Tooltip,\n} from 'recharts';\n\nconst PROGRESSIVE_BAR_CHART_DATA = [\n  {\n    id: 1,\n    name: 'Item A',\n    value: 22500,\n    down: 0,\n    color: 'var(--bs-blue)',\n  },\n  {\n    id: 2,\n    name: 'Item B',\n    value: 1000,\n    down: 21500,\n    color: 'var(--bs-orange)',\n  },\n  {\n    id: 3,\n    name: 'Item C',\n    value: 2000,\n    down: 19500,\n    color: 'var(--bs-orange)',\n  },\n  {\n    id: 4,\n    name: 'Item D',\n    value: 3000,\n    down: 16500,\n    color: 'var(--bs-orange)',\n  },\n  {\n    id: 5,\n    name: 'Item E',\n    value: 16500,\n    down: 0,\n    color: 'var(--bs-green)',\n  },\n  {\n    id: 6,\n    name: 'Item F',\n    value: 1000,\n    down: 16500,\n    color: 'var(--bs-blue)',\n  },\n  {\n    id: 7,\n    name: 'Item G',\n    value: 8000,\n    down: 16500,\n    color: 'var(--bs-blue)',\n  },\n  {\n    id: 8,\n    name: 'Item H',\n    value: 24500,\n    down: 0,\n    color: 'var(--bs-green)',\n  },\n];\n\nexport function ExampleProgressiveBarChart() {\n  return (\n    <ResponsiveContainer width=\"100%\" height=\"100%\">\n      <BarChart\n        data={PROGRESSIVE_BAR_CHART_DATA}\n      >\n        <CartesianGrid strokeDasharray=\"4 \" vertical={false} />\n        <XAxis dataKey=\"name\" />\n        <YAxis\n          domain={[0, 'dataMax + 10000']}\n        />\n        <Tooltip\n          formatter={(value: number) => `$${value.toLocaleString()}`}\n          cursor={{ fill: 'var(--bs-gray-100)' }}\n        />\n        <Bar dataKey=\"down\" stackId=\"a\" fill=\"transparent\" />\n        <Bar dataKey=\"value\" stackId=\"a\">\n          {PROGRESSIVE_BAR_CHART_DATA.map((entry) => (\n            <Cell key={entry.id} fill={entry.color} />\n          ))}\n        </Bar>\n      </BarChart>\n    </ResponsiveContainer>\n  );\n}\n",language:"tsx",dark:!0})]})}ExampleProgressiveBarChart.displayName="ExampleProgressiveBarChart";var Graphs=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);