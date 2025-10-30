import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-CHSOfr5v.js";import{M as i,a as s,C as n,b as l,S as p}from"./blocks-CJUw5px9.js";import{D as k,a as t}from"./DDatePicker.stories-CKaAOuHR.js";import{P as e}from"./config-BV4l-vIF.js";import"./iframe-XnRhdyHW.js";import"./index-CQ6hCEsd.js";import"./index-CucmxpGD.js";import"./clsx-B-dksMZM.js";import"./floating-ui.dom-osFzHgfv.js";import"./floating-ui.react-dom-58du_pUC.js";import"./DInput-D8D_BD8e.js";import"./index-D0sKC-UO.js";import"./DIcon-BtjKyMWG.js";import"./DContext-Dm_WebLV.js";import"./useProvidedRefOrCreate-DwhWJTgz.js";import"./DButton-DLoc9Exd.js";import"./DSelect-Dw0Kj6iC.js";import"./hoist-non-react-statics.cjs-C-Qo8PK8.js";import"./DInputCheck-V_NtaE-w.js";import"./constants-Bqs03lsf.js";function o(c){const a={a:"a",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...d(),...c.components};return r.jsxs(r.Fragment,{children:[r.jsx(i,{of:k}),`
`,r.jsx(a.h1,{id:"date-picker",children:"Date Picker"}),`
`,r.jsx(a.p,{children:r.jsx(a.img,{src:"https://img.shields.io/badge/Abstraction%20Component-4848b7",alt:"Shield Badge"})}),`
`,r.jsx(a.p,{children:`Datepicker with month, year and time selector. This component is a abstraction which does
not cover all the features of the original library.`}),`
`,r.jsx(a.p,{children:"To understand in more detail the aspects covered by this component, review the following documentation:"}),`
`,r.jsxs(a.ul,{children:[`
`,r.jsx(a.li,{children:r.jsx(a.a,{href:"https://reactdatepicker.com/",rel:"nofollow",children:"React Datepicker"})}),`
`]}),`
`,r.jsx(a.h2,{id:"css-variables",children:"CSS Variables"}),`
`,r.jsx(s,{children:`
| Variable                                                        | Class                         | Type            | Description                                  |
|-----------------------------------------------------------------|-------------------------------|-----------------|----------------------------------------------|
| --${e}datepicker-bg                                     | .react-datepicker             | css color       | Background color of the datepicker           |
| --${e}datepicker-border-color                           | .react-datepicker             | css color       | Border color                                 |
| --${e}datepicker-border                                 | .react-datepicker             | css value       | Border value                                 |
| --${e}datepicker-border-radius                          | .react-datepicker             | css length unit | Border radius                                |
| --${e}datepicker-header-bg                              | .react-datepicker             | css color       | Header background color                      |
| --${e}datepicker-header-border-bottom                   | .react-datepicker             | css value       | Header bottom border                         |
| --${e}datepicker-header-padding                         | .react-datepicker             | css value       | Header padding                               |
| --${e}datepicker-header-font-weight                     | .react-datepicker             | css value       | Header font weight                           |
| --${e}datepicker-day-names-color                        | .react-datepicker             | css color       | Color for day names                          |
| --${e}datepicker-day-names-font-size                    | .react-datepicker             | css length unit | Font size for day names                      |
| --${e}datepicker-body-margin                            | .react-datepicker             | css value       | Body margin                                  |
| --${e}datepicker-body-gap                               | .react-datepicker             | css value       | Body gap                                     |
| --${e}datepicker-highlighted-color                      | .react-datepicker             | css value       | Highlighted day text color                   |
| --${e}datepicker-highlighted-bg                         | .react-datepicker             | css value       | Highlighted day background                   |
| --${e}datepicker-highlighted-border-radius              | .react-datepicker             | css value       | Highlighted day border radius                |
| --${e}datepicker-holidays-color                         | .react-datepicker             | css value       | Holidays text color                          |
| --${e}datepicker-holidays-bg                            | .react-datepicker             | css value       | Holidays background color                    |
| --${e}datepicker-holidays-border-radius                 | .react-datepicker             | css value       | Holidays border radius                       |
| --${e}datepicker-day-border-radius                      | .react-datepicker             | css length unit | Day cell border radius                       |
| --${e}datepicker-day-outside-month-color                | .react-datepicker             | css color       | Color of days outside current month          |
| --${e}datepicker-day-bg                                 | .react-datepicker             | css color       | Background for normal day                    |
| --${e}datepicker-day-hover-bg                           | .react-datepicker             | css color       | Hover background for a day                   |
| --${e}datepicker-day-width                              | .react-datepicker             | css length unit | Width of a day cell                          |
| --${e}datepicker-day-selected-color                     | .react-datepicker             | css color       | Color of selected day                        |
| --${e}datepicker-day-selected-bg                        | .react-datepicker             | css color       | Background of selected day                   |
| --${e}datepicker-day-disabled-color                     | .react-datepicker             | css color       | Disabled day color                           |
| --${e}datepicker-week-number-color                      | .react-datepicker             | css color       | Week number color                            |
| --${e}datepicker-week-number-bg                         | .react-datepicker             | css color       | Week number background                       |
| --${e}datepicker-week-number-selected-color             | .react-datepicker             | css color       | Selected week number color                   |
| --${e}datepicker-week-number-selected-bg                | .react-datepicker             | css color       | Selected week number background              |
| --${e}datepicker-week-number-hover-bg                   | .react-datepicker             | css color       | Week number hover background                 |
| --${e}datepicker-week-number-hover-color                | .react-datepicker             | css color       | Week number hover color                      |
| --${e}datepicker-week-number-border-radius              | .react-datepicker             | css length unit | Week number border radius                    |
| --${e}datepicker-range-start-color                      | .react-datepicker             | css color       | Start range day color                        |
| --${e}datepicker-range-start-bg                         | .react-datepicker             | css color       | Start range background                       |
| --${e}datepicker-range-end-color                        | .react-datepicker             | css color       | End range day color                          |
| --${e}datepicker-range-end-bg                           | .react-datepicker             | css color       | End range background                         |
| --${e}datepicker-in-range-bg                            | .react-datepicker             | css color       | In-range background                          |
| --${e}datepicker-range-color                            | .react-datepicker             | css color       | In-range text color                          |
| --${e}datepicker-in-range-hover-bg                      | .react-datepicker             | css color       | Hover background in range                    |
| --${e}datepicker-in-range-disabled-color                | .react-datepicker             | css color       | Disabled in-range color                      |
| --${e}datepicker-in-range-disabled-bg                   | .react-datepicker             | css color       | Disabled in-range background                 |
| --${e}datepicker-time-list-item-width                   | .react-datepicker             | css length unit | Aside time item width                        |
| --${e}datepicker-time-list-item-padding                 | .react-datepicker             | css length unit | Aside time item padding                      |
`}),`
`,r.jsx(n,{of:t}),`
`,r.jsx(l,{of:t}),`
`,r.jsx(p,{})]})}function X(c={}){const{wrapper:a}={...d(),...c.components};return a?r.jsx(a,{...c,children:r.jsx(o,{...c})}):o(c)}export{X as default};
