import{j as t}from"./jsx-runtime-CKrituN3.js";import{useMDXComponents as d}from"./index-DSz_1G2r.js";import{ae as n,ah as p,ai as o,aj as s,ak as k,ag as l}from"./index-D83KeUA8.js";import{D as m,a as r}from"./DDatePicker.stories-B3sehrnB.js";import{P as e}from"./config-CUZHf55T.js";import{D as h}from"./DAlert-BJ8CDSqL.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-n4QHviUT.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-C8M-hMhC.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./index-ELyB7pIJ.js";import"./DSelect-VR4pLnmy.js";import"./index-8JwjhRSi.js";import"./floating-ui.dom-Hl2SHHju.js";import"./DIcon-1scRBrNx.js";import"./DContext-CSLUP0I2.js";import"./DInputCheck-DOt0IpKo.js";import"./DInput-CT3eH2pi.js";import"./useProvidedRefOrCreate-B_Nl4lOm.js";import"./DButton-DMz62NRO.js";import"./constants-DhWTmuJQ.js";function c(i){const a={a:"a",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...d(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:m}),`
`,t.jsx(a.h1,{id:"date-picker",children:"Date Picker"}),`
`,t.jsx(a.p,{children:t.jsx(a.img,{src:"https://img.shields.io/badge/Abstraction%20Component-4848b7",alt:"Shield Badge"})}),`
`,t.jsx(p,{children:t.jsx(h,{theme:"danger",children:t.jsx("span",{children:"This component is deprecated and will be removed in the next major release, we are working on a replacement."})})}),`
`,t.jsx(a.p,{children:`Datepicker with month, year and time selector. This component is a custom wrapper which does
not cover all the features of the original library.`}),`
`,t.jsx(a.p,{children:"To understand in more detail the aspects covered by this component, review the following documentation:"}),`
`,t.jsxs(a.ul,{children:[`
`,t.jsx(a.li,{children:t.jsx(a.a,{href:"https://reactdatepicker.com/",rel:"nofollow",children:"React Datepicker"})}),`
`]}),`
`,t.jsx(a.h2,{id:"css-variables",children:"CSS Variables"}),`
`,t.jsx(o,{children:`
| Variable                                           | Class             | Type            | Description                                   |
|----------------------------------------------------|-------------------|-----------------|-----------------------------------------------|
| --${e}datepicker-border                    | .react-datepicker | css length unit | Datepicker border                             |
| --${e}datepicker-font-family               | .react-datepicker | css font family | Datepicker font family                        |
| --${e}datepicker-box-shadow                | .react-datepicker | css shadow unit | Datepicker box shadow                         |
| --${e}datepicker-font-size                 | .react-datepicker | css font unit   | Datepicker font size                          |
| --${e}datepicker-header-gap                | .react-datepicker | css length unit | Datepicker header gap                         |
| --${e}datepicker-header-padding            | .react-datepicker | css length unit | Datepicker header padding                     |
| --${e}datepicker-header-background-color   | .react-datepicker | css color unit  | Datepicker header background color            |
| --${e}datepicker-header-border             | .react-datepicker | css length unit | Datepicker header border                      |
| --${e}datepicker-header-font-size          | .react-datepicker | css length unit | Datepicker header border                      |
| --${e}datepicker-header-button-padding     | .react-datepicker | css length unit | Datepicker header buttons padding             |
| --${e}datepicker-header-select-padding     | .react-datepicker | css length unit | Datepicker header selects padding             |
| --${e}datepicker-header-select-font-weight | .react-datepicker | css weight unit | Datepicker header select font weight          |
| --${e}datepicker-header-select-menu-width  | .react-datepicker | css length unit | Datepicker header select width                |
| --${e}datepicker-day-names-margin          | .react-datepicker | css length unit | Datepicker header days margin                 |
| --${e}datepicker-day-names-font-size       | .react-datepicker | css length unit | Datepicker header days font size              |
| --${e}datepicker-day-name-weight           | .react-datepicker | css weight unit | Datepicker header days weight                 |
| --${e}datepicker-day-name-margin           | .react-datepicker | css length unit | Datepicker header days margin                 |
| --${e}datepicker-day-name-size             | .react-datepicker | css length unit | Datepicker header days size                   |
| --${e}datepicker-day-name-color            | .react-datepicker | css color unit  | Datepicker header days color                  |
| --${e}datepicker-month-gap                 | .react-datepicker | css length unit | Datepicker month gap                          |
| --${e}datepicker-month-padding             | .react-datepicker | css length unit | Datepicker month padding                      |
| --${e}datepicker-month-margin              | .react-datepicker | css length unit | Datepicker month margin                       |
| --${e}datepicker-month-color               | .react-datepicker | css color unit  | Datepicker month color                        |
| --${e}datepicker-week-gap                  | .react-datepicker | css length unit | Datepicker week gap                           |
| --${e}datepicker-day-margin                | .react-datepicker | css length unit | Datepicker day margin                         |
| --${e}datepicker-day-font-size             | .react-datepicker | css font unit   | Datepicker day font size                      |
| --${e}datepicker-day-size                  | .react-datepicker | css length unit | Datepicker day size                           |
| --${e}datepicker-day-padding               | .react-datepicker | css length unit | Datepicker day padding                        |
| --${e}datepicker-day-radius                | .react-datepicker | css length unit | Datepicker day border radius                  |
| --${e}datepicker-day-color                 | .react-datepicker | css color unit  | Datepicker day text color                     |
| --${e}datepicker-day-disabled-color        | .react-datepicker | css color unit  | Datepicker disabled day text color            |
| --${e}datepicker-day-bg-hover              | .react-datepicker | css color unit  | Datepicker day hover background               |
| --${e}datepicker-day-color-hover           | .react-datepicker | css color unit  | Datepicker day hover color                    |
| --${e}datepicker-day-selected-color        | .react-datepicker | css color unit  | Datepicker day selected color                 |
| --${e}datepicker-day-selected-bg           | .react-datepicker | css color unit  | Datepicker day selected background            |
| --${e}datepicker-day-in-range-color        | .react-datepicker | css color unit  | Datepicker date range color                   |
| --${e}datepicker-day-in-range-bg           | .react-datepicker | css color unit  | Datepicker date range background              |
| --${e}datepicker-day-outside-month-color   | .react-datepicker | css color unit  | Datepicker day outside color                  |
| --${e}datepicker-day-today-font-weight     | .react-datepicker | css weight unit | Datepicker today weight                       |
| --${e}datepicker-day-today-box-shadow      | .react-datepicker | css shadow unit | Datepicker today box shadow                   |
| --${e}datepicker-time-container-margin     | .react-datepicker | css length unit | Datepicker container time margin              |
| --${e}datepicker-time-container-align      | .react-datepicker | css align unit  | Datepicker container time alignment           |
| --${e}datepicker-time-input-width          | .react-datepicker | css length unit | Datepicker time width                         |
| --${e}datepicker-time-input-margin         | .react-datepicker | css length unit | Datepicker time margin                        |
| --${e}datepicker-time-input-align          | .react-datepicker | css align unit  | Datepicker time alignment                     |
| --${e}datepicker-time-input-padding        | .react-datepicker | css length unit | Datepicker time padding                       |
| --${e}datepicker-time-input-gap            | .react-datepicker | css length unit | Datepicker time gap                           |
| --${e}datepicker-time-input-label-weight   | .react-datepicker | css weight unit | Datepicker time weight                        |
| --${e}datepicker-time-input-label-color    | .react-datepicker | css color unit  | Datepicker label time color                   |
| --${e}datepicker-time-input-label-size     | .react-datepicker | css length unit | Datepicker label time size                    |
| --${e}datepicker-triangle-color            | .react-datepicker | css color unit  | Datepicker triangle color                     |
| --${e}datepicker-webkit-time-color         | .react-datepicker | css color unit  | Datepicker webkit time color                  |
| --${e}datepicker-webkit-time-align         | .react-datepicker | css align unit  | Datepicker webkit time align                  |
| --${e}datepicker-webkit-edit-text-padding  | .react-datepicker | css length unit | Datepicker webkit edit text padding           |
| --${e}datepicker-webkit-edit-ampm-padding  | .react-datepicker | css length unit | Datepicker webkit edit am/pm padding          |
| --${e}datepicker-webkit-edit-ampm-color    | .react-datepicker | css color unit  | Datepicker webkit edit am/pm color            |
| --${e}datepicker-webkit-edit-ampm-bg       | .react-datepicker | css color unit  | Datepicker webkit edit am/pm background color |
| --${e}datepicker-webkit-edit-ampm-radius   | .react-datepicker | css length unit | Datepicker webkit edit am/pm border radius    |
| --${e}datepicker-calendar-picker-icon      | .react-datepicker | css url icon    | Datepicker picker icon                        |
  `}),`
`,t.jsx(s,{of:r}),`
`,t.jsx(k,{of:r}),`
`,t.jsx(l,{})]})}function L(i={}){const{wrapper:a}={...d(),...i.components};return a?t.jsx(a,{...i,children:t.jsx(c,{...i})}):c(i)}export{L as default};
