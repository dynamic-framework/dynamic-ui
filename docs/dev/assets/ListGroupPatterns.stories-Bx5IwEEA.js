import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as ee}from"./blocks-BMLkTryJ.js";import se from"./Template-DRqLGeYz.js";import{a as s}from"./DListGroup-BwGP1HVM.js";import{D as d}from"./DBox-Bx6992ji.js";import{D as l}from"./DBadge-CdsEnAsm.js";import{D as a}from"./DIcon-CBKX-Ky5.js";import{D as t}from"./DCollapse-DSIK5h4a.js";import{D as c}from"./DDropdown-rPrgtIa0.js";import{D as i}from"./DButton-fRT0Nh4l.js";import"./iframe-BFBKoHXE.js";import"./index-Ddf9zV7q.js";import"./index-BbNkzkJF.js";import"./index-D3nrmYzs.js";import"./index-Cz4ROImR.js";import"./config-C3iYXcFk.js";import"./useMediaBreakpointUp-Dj19RGee.js";import"./DContext-Bs8E6lMM.js";import"./DButtonIcon--GPURmXD.js";function ae(m){return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .sbdocs-content {
            max-width: unset;
          }
        `}),e.jsx(ee,{...m})]})}const ge={title:"Patterns/List Group Patterns",component:s,parameters:{docs:{page:se,container:ae,description:{component:`
This story showcases different list-based patterns for displaying financial information like accounts, transactions, balances, and more.

These patterns use \`DListGroup\` as the foundation to create organized, scannable lists of financial data.

### Common Use Cases:

- Account summaries with balances
- Transaction histories
- Payment methods
- Credit/debit card lists
- Investment portfolios
- Bill payments
        `}}},tags:["autodocs"]},r={parameters:{docs:{description:{story:"Display a list of accounts with names, types, and current balances."}}},render:()=>e.jsxs(d,{style:{width:800},children:[e.jsx("h5",{className:"mb-3",children:"My Accounts"}),e.jsxs(s,{children:[e.jsx(s.Item,{children:e.jsxs("div",{className:"d-flex justify-content-between align-items-start w-100",children:[e.jsxs("div",{children:[e.jsx("h6",{className:"mb-1",children:"Checking Account"}),e.jsx("small",{className:"text-muted",children:"****1234"})]}),e.jsxs("div",{className:"text-end",children:[e.jsx("div",{className:"fw-bold",children:"$5,248.32"}),e.jsx("small",{className:"text-muted",children:"Available"})]})]})}),e.jsx(s.Item,{children:e.jsxs("div",{className:"d-flex w-100 justify-content-between align-items-start",children:[e.jsxs("div",{children:[e.jsx("h6",{className:"mb-1",children:"Savings Account"}),e.jsx("small",{className:"text-muted",children:"****5678"})]}),e.jsxs("div",{className:"text-end",children:[e.jsx("div",{className:"fw-bold",children:"$12,847.90"}),e.jsx("small",{className:"text-muted",children:"Available"})]})]})}),e.jsx(s.Item,{children:e.jsxs("div",{className:"d-flex w-100 justify-content-between align-items-start",children:[e.jsxs("div",{children:[e.jsx("h6",{className:"mb-1",children:"Credit Card"}),e.jsx("small",{className:"text-muted",children:"****9012"})]}),e.jsxs("div",{className:"text-end",children:[e.jsx("div",{className:"fw-bold text-danger",children:"-$1,523.45"}),e.jsx("small",{className:"text-muted",children:"Current Balance"})]})]})}),e.jsx(s.Item,{children:e.jsxs("div",{className:"d-flex w-100 justify-content-between align-items-start",children:[e.jsxs("div",{children:[e.jsx("h6",{className:"mb-1",children:"Investment Account"}),e.jsx("small",{className:"text-muted",children:"****3456"})]}),e.jsxs("div",{className:"text-end",children:[e.jsx("div",{className:"fw-bold",children:"$45,892.15"}),e.jsx("small",{className:"text-muted",children:"Market Value"})]})]})})]})]})},o={parameters:{docs:{description:{story:"Display recent transactions with dates, descriptions, and amounts."}}},render:()=>e.jsxs(d,{style:{width:800},children:[e.jsx("h5",{className:"mb-3",children:"Recent Transactions"}),e.jsxs(s,{children:[e.jsx(s.Item,{children:e.jsxs("div",{className:"d-flex w-100 justify-content-between align-items-center",children:[e.jsxs("div",{children:[e.jsxs("h6",{className:"mb-1",children:[e.jsx(l,{soft:!0,color:"info",className:"me-1",text:"Food"}),"Starbucks Coffee"]}),e.jsx("small",{className:"text-muted",children:"Today, 9:45 AM"})]}),e.jsx("div",{className:"text-end",children:e.jsx("div",{className:"fw-bold",children:"-$5.75"})})]})}),e.jsx(s.Item,{children:e.jsxs("div",{className:"d-flex w-100 justify-content-between align-items-center",children:[e.jsxs("div",{children:[e.jsxs("h6",{className:"mb-1",children:[e.jsx(l,{soft:!0,color:"info",className:"me-1",text:"Shopping"}),"Amazon Purchase"]}),e.jsx("small",{className:"text-muted",children:"Yesterday, 3:20 PM"})]}),e.jsx("div",{className:"text-end",children:e.jsx("div",{className:"fw-bold",children:"-$127.99"})})]})}),e.jsx(s.Item,{children:e.jsxs("div",{className:"d-flex w-100 justify-content-between align-items-center",children:[e.jsxs("div",{children:[e.jsxs("h6",{className:"mb-1",children:[e.jsx(l,{soft:!0,color:"success",className:"me-1",text:"Income"}),"Salary Deposit"]}),e.jsx("small",{className:"text-muted",children:"Oct 1, 2024"})]}),e.jsx("div",{className:"text-end",children:e.jsx("div",{className:"fw-bold",children:"+$4,500.00"})})]})}),e.jsx(s.Item,{children:e.jsxs("div",{className:"d-flex w-100 justify-content-between align-items-center",children:[e.jsxs("div",{children:[e.jsxs("h6",{className:"mb-1",children:[e.jsx(l,{soft:!0,color:"info",className:"me-1",text:"Utilities"}),"Electric Bill"]}),e.jsx("small",{className:"text-muted",children:"Sep 28, 2024"})]}),e.jsx("div",{className:"text-end",children:e.jsx("div",{className:"fw-bold",children:"-$89.32"})})]})}),e.jsx(s.Item,{children:e.jsxs("div",{className:"d-flex w-100 justify-content-between align-items-center",children:[e.jsxs("div",{children:[e.jsxs("h6",{className:"mb-1",children:[e.jsx(l,{soft:!0,color:"info",className:"me-1",text:"Transfer"}),"Transfer to Savings"]}),e.jsx("small",{className:"text-muted",children:"Sep 25, 2024"})]}),e.jsx("div",{className:"text-end",children:e.jsx("div",{className:"fw-bold",children:"-$500.00"})})]})})]})]})},x={parameters:{docs:{description:{story:"Display saved payment methods with card details and status."}}},render:()=>e.jsxs(d,{style:{width:800},children:[e.jsx("h5",{className:"mb-3",children:"Payment Methods"}),e.jsxs(s,{children:[e.jsx(s.Item,{action:!0,className:"hover-bg-gray-25",children:e.jsxs("div",{className:"d-flex w-100 justify-content-between align-items-center",children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"me-3",children:e.jsx(a,{icon:"CreditCard",color:"success",hasCircle:!0})}),e.jsxs("div",{children:[e.jsx("h6",{className:"mb-1",children:"Visa •••• 4532"}),e.jsx("small",{className:"text-muted",children:"Expires 12/25"}),e.jsx("div",{className:"mt-1",children:e.jsx(l,{color:"primary",soft:!0,text:"Primary"})})]})]}),e.jsx(a,{icon:"ChevronRight",className:"text-gray-300"})]})}),e.jsx(s.Item,{action:!0,className:"hover-bg-gray-25",children:e.jsxs("div",{className:"d-flex w-100 justify-content-between align-items-center",children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"me-3",children:e.jsx(a,{icon:"CreditCard",color:"info",hasCircle:!0})}),e.jsxs("div",{children:[e.jsx("h6",{className:"mb-1",children:"Mastercard •••• 8791"}),e.jsx("small",{className:"text-muted",children:"Expires 08/26"})]})]}),e.jsx(a,{icon:"ChevronRight",className:"text-gray-300"})]})}),e.jsx(s.Item,{action:!0,className:"hover-bg-gray-25",children:e.jsxs("div",{className:"d-flex w-100 justify-content-between align-items-center",children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"me-3",children:e.jsx(a,{icon:"Landmark",color:"warning",hasCircle:!0})}),e.jsxs("div",{children:[e.jsx("h6",{className:"mb-1",children:"Bank Account ****1234"}),e.jsx("small",{className:"text-muted",children:"Checking Account"})]})]}),e.jsx(a,{icon:"ChevronRight",className:"text-gray-300"})]})}),e.jsx(s.Item,{action:!0,className:"hover-bg-gray-25",children:e.jsxs("div",{className:"align-items-center d-flex justify-content-center gap-2",children:[e.jsx(a,{icon:"PlusCircle"}),"Add New Payment Method"]})})]})]})},v={parameters:{docs:{description:{story:"Display upcoming bill payments with due dates and amounts."}}},render:()=>e.jsxs(d,{style:{width:800},children:[e.jsx("h5",{className:"mb-3",children:"Upcoming Bills"}),e.jsxs(s,{children:[e.jsx(s.Item,{children:e.jsxs("div",{className:"d-flex w-100 justify-content-between align-items-start",children:[e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("div",{className:"me-3",children:e.jsx(a,{icon:"Zap",hasCircle:!0,size:"1rem"})}),e.jsxs("div",{children:[e.jsx("h6",{className:"mb-1",children:"Electric Company"}),e.jsx("small",{className:"text-muted",children:"Due: Nov 15, 2024"}),e.jsx("div",{className:"mt-1",children:e.jsx(l,{soft:!0,color:"warning",text:"Due Sun"})})]})]}),e.jsx("div",{className:"text-end",children:e.jsx("div",{className:"fw-bold",children:"$92.45"})})]})}),e.jsx(s.Item,{children:e.jsxs("div",{className:"d-flex w-100 justify-content-between align-items-start",children:[e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("div",{className:"me-3",children:e.jsx(a,{icon:"Wifi",hasCircle:!0,size:"1rem"})}),e.jsxs("div",{children:[e.jsx("h6",{className:"mb-1",children:"Internet Service"}),e.jsx("small",{className:"text-muted",children:"Due: Nov 18, 2024"}),e.jsx("div",{className:"mt-1",children:e.jsx(l,{soft:!0,color:"success",text:"Auto-pay"})})]})]}),e.jsx("div",{className:"text-end",children:e.jsx("div",{className:"fw-bold",children:"$79.99"})})]})}),e.jsx(s.Item,{children:e.jsxs("div",{className:"d-flex w-100 justify-content-between align-items-start",children:[e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("div",{className:"me-3",children:e.jsx(a,{hasCircle:!0,icon:"Phone",size:"1rem"})}),e.jsxs("div",{children:[e.jsx("h6",{className:"mb-1",children:"Mobile Phone"}),e.jsx("small",{className:"text-muted",children:"Due: Nov 20, 2024"}),e.jsx("div",{className:"mt-1",children:e.jsx(l,{soft:!0,color:"success",text:"Auto-pay"})})]})]}),e.jsx("div",{className:"text-end",children:e.jsx("div",{className:"fw-bold",children:"$65.00"})})]})}),e.jsx(s.Item,{children:e.jsxs("div",{className:"d-flex w-100 justify-content-between align-items-start",children:[e.jsxs("div",{className:"d-flex align-items-start",children:[e.jsx("div",{className:"me-3",children:e.jsx(a,{hasCircle:!0,icon:"Shapes",size:"1rem"})}),e.jsxs("div",{children:[e.jsx("h6",{className:"mb-1",children:"Rent Payment"}),e.jsx("small",{className:"text-muted",children:"Due: Dec 1, 2024"}),e.jsx("div",{className:"mt-1",children:e.jsx(l,{soft:!0,color:"secondary",text:"Upcoming"})})]})]}),e.jsx("div",{className:"text-end",children:e.jsx("div",{className:"fw-bold",children:"$1,500.00"})})]})})]})]})},h={parameters:{docs:{description:{story:"Display investment holdings with current values and performance."}}},render:()=>e.jsxs(d,{style:{width:800},children:[e.jsx("h5",{className:"mb-3",children:"Investment Portfolio"}),e.jsxs(s,{children:[e.jsx(s.Item,{children:e.jsxs("div",{className:"d-flex w-100 justify-content-between align-items-start",children:[e.jsxs("div",{children:[e.jsx("h6",{className:"mb-1",children:"Apple Inc. (AAPL)"}),e.jsx("small",{className:"text-muted",children:"25 shares @ $178.32"}),e.jsx("div",{className:"mt-1",children:e.jsx(l,{soft:!0,color:"success",text:"+$1,500.00",iconStart:"ArrowUp"})})]}),e.jsxs("div",{className:"text-end",children:[e.jsx("div",{className:"fw-bold",children:"$4,458.00"}),e.jsx("small",{className:"text-success",children:"+$495.00"})]})]})}),e.jsx(s.Item,{children:e.jsxs("div",{className:"d-flex w-100 justify-content-between align-items-start",children:[e.jsxs("div",{children:[e.jsx("h6",{className:"mb-1",children:"Microsoft Corp. (MSFT)"}),e.jsx("small",{className:"text-muted",children:"15 shares @ $368.45"}),e.jsx("div",{className:"mt-1",children:e.jsx(l,{soft:!0,color:"success",text:"+$1,500.00",iconStart:"ArrowUp"})})]}),e.jsxs("div",{className:"text-end",children:[e.jsx("div",{className:"fw-bold",children:"$5,526.75"}),e.jsx("small",{className:"text-success",children:"+$423.50"})]})]})}),e.jsx(s.Item,{children:e.jsxs("div",{className:"d-flex w-100 justify-content-between align-items-start",children:[e.jsxs("div",{children:[e.jsx("h6",{className:"mb-1",children:"Tesla Inc. (TSLA)"}),e.jsx("small",{className:"text-muted",children:"10 shares @ $242.18"}),e.jsx("div",{className:"mt-1",children:e.jsx(l,{soft:!0,color:"danger",text:"-$1,500.00",iconStart:"ArrowDown"})})]}),e.jsxs("div",{className:"text-end",children:[e.jsx("div",{className:"fw-bold",children:"$2,421.80"}),e.jsx("small",{className:"text-danger",children:"-$80.00"})]})]})}),e.jsx(s.Item,{children:e.jsxs("div",{className:"d-flex w-100 justify-content-between align-items-start",children:[e.jsxs("div",{children:[e.jsx("h6",{className:"mb-1",children:"S&P 500 Index Fund (VOO)"}),e.jsx("small",{className:"text-muted",children:"50 shares @ $412.90"}),e.jsx("div",{className:"mt-1",children:e.jsx(l,{soft:!0,color:"success",text:"+$1,500.00",iconStart:"ArrowUp"})})]}),e.jsxs("div",{className:"text-end",children:[e.jsx("div",{className:"fw-bold",children:"$20,645.00"}),e.jsx("small",{className:"text-success",children:"+$2,805.00"})]})]})})]}),e.jsxs("div",{className:"mt-3 p-3 bg-gray-25 rounded",children:[e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("strong",{children:"Total Portfolio Value:"}),e.jsx("span",{className:"fs-5 fw-bold",children:"$33,051.55"})]}),e.jsxs("div",{className:"d-flex justify-content-between mt-2",children:[e.jsx("span",{className:"text-muted",children:"Total Gain:"}),e.jsx("span",{children:"+$3,643.50 (+12.4%)"})]})]})]})},N={parameters:{docs:{description:{story:"Interactive account list with clickable items for navigation."}}},render:()=>e.jsxs(d,{style:{width:800},children:[e.jsx("h5",{className:"mb-3",children:"Quick Actions"}),e.jsxs(s,{children:[e.jsx(s.Item,{action:!0,className:"hover-bg-gray-25",children:e.jsxs("div",{className:"d-flex w-100 justify-content-between align-items-center",children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("i",{className:"bi bi-arrow-left-right fs-4 text-primary me-3"}),e.jsxs("div",{children:[e.jsx("h6",{className:"mb-0",children:"Transfer Money"}),e.jsx("small",{className:"text-muted",children:"Between your accounts"})]})]}),e.jsx("i",{className:"bi bi-chevron-right"})]})}),e.jsx(s.Item,{action:!0,className:"hover-bg-gray-25",children:e.jsxs("div",{className:"d-flex w-100 justify-content-between align-items-center",children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("i",{className:"bi bi-receipt fs-4 text-success me-3"}),e.jsxs("div",{children:[e.jsx("h6",{className:"mb-0",children:"Pay Bills"}),e.jsx("small",{className:"text-muted",children:"3 bills due this month"})]})]}),e.jsx("i",{className:"bi bi-chevron-right"})]})}),e.jsx(s.Item,{action:!0,className:"hover-bg-gray-25",children:e.jsxs("div",{className:"d-flex w-100 justify-content-between align-items-center",children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("i",{className:"bi bi-camera fs-4 text-info me-3"}),e.jsxs("div",{children:[e.jsx("h6",{className:"mb-0",children:"Deposit Check"}),e.jsx("small",{className:"text-muted",children:"Use mobile deposit"})]})]}),e.jsx("i",{className:"bi bi-chevron-right"})]})}),e.jsx(s.Item,{action:!0,className:"hover-bg-gray-25",children:e.jsxs("div",{className:"d-flex w-100 justify-content-between align-items-center",children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("i",{className:"bi bi-file-earmark-text fs-4 text-warning me-3"}),e.jsxs("div",{children:[e.jsx("h6",{className:"mb-0",children:"Statements"}),e.jsx("small",{className:"text-muted",children:"View and download"})]})]}),e.jsx("i",{className:"bi bi-chevron-right"})]})})]})]})},u={parameters:{docs:{description:{story:"Account list with collapsible details using DCollapse component."}}},render:()=>e.jsxs("div",{style:{width:800},children:[e.jsx("h5",{className:"mb-3",children:"Account Details"}),e.jsxs(s,{flush:!0,className:"d-flex flex-column gap-1",children:[e.jsx(s.Item,{className:"p-0 border-0",children:e.jsx(t,{Component:e.jsxs("div",{className:"d-flex w-100 justify-content-between align-items-center",children:[e.jsxs("div",{children:[e.jsx("h6",{className:"mb-1",children:"Checking Account"}),e.jsx("small",{className:"text-muted",children:"****1234"})]}),e.jsx("div",{className:"text-end me-3",children:e.jsx("div",{className:"fw-bold",children:"$5,248.32"})})]}),children:e.jsxs("div",{className:"pt-3 ps-2",children:[e.jsxs("div",{className:"row mb-2",children:[e.jsx("div",{className:"col-6 text-muted",children:"Account Type:"}),e.jsx("div",{className:"col-6 fw-semibold",children:"Personal Checking"})]}),e.jsxs("div",{className:"row mb-2",children:[e.jsx("div",{className:"col-6 text-muted",children:"Account Number:"}),e.jsx("div",{className:"col-6 fw-semibold",children:"****1234"})]}),e.jsxs("div",{className:"row mb-2",children:[e.jsx("div",{className:"col-6 text-muted",children:"Available Balance:"}),e.jsx("div",{className:"col-6 fw-semibold",children:"$5,248.32"})]}),e.jsxs("div",{className:"row mb-2",children:[e.jsx("div",{className:"col-6 text-muted",children:"Pending:"}),e.jsx("div",{className:"col-6 fw-semibold",children:"$150.00"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-6 text-muted",children:"Opened:"}),e.jsx("div",{className:"col-6 fw-semibold",children:"Jan 15, 2020"})]})]})})}),e.jsx(s.Item,{className:"p-0 border-0 hover-bg-gray-50",children:e.jsx(t,{Component:e.jsxs("div",{className:"d-flex w-100 justify-content-between align-items-center",children:[e.jsxs("div",{children:[e.jsx("h6",{className:"mb-1",children:"Savings Account"}),e.jsx("small",{className:"text-muted",children:"****5678"})]}),e.jsx("div",{className:"text-end me-3",children:e.jsx("div",{className:"fw-bold",children:"$12,847.90"})})]}),children:e.jsxs("div",{className:"pt-3 ps-2",children:[e.jsxs("div",{className:"row mb-2",children:[e.jsx("div",{className:"col-6 text-muted",children:"Account Type:"}),e.jsx("div",{className:"col-6 fw-semibold",children:"High Yield Savings"})]}),e.jsxs("div",{className:"row mb-2",children:[e.jsx("div",{className:"col-6 text-muted",children:"Account Number:"}),e.jsx("div",{className:"col-6 fw-semibold",children:"****5678"})]}),e.jsxs("div",{className:"row mb-2",children:[e.jsx("div",{className:"col-6 text-muted",children:"Available Balance:"}),e.jsx("div",{className:"col-6 fw-semibold",children:"$12,847.90"})]}),e.jsxs("div",{className:"row mb-2",children:[e.jsx("div",{className:"col-6 text-muted",children:"Interest Rate:"}),e.jsx("div",{className:"col-6 fw-semibold",children:"4.5% APY"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-6 text-muted",children:"Opened:"}),e.jsx("div",{className:"col-6 fw-semibold",children:"Mar 22, 2021"})]})]})})}),e.jsx(s.Item,{className:"p-0 border-0 hover-bg-gray-50",children:e.jsx(t,{Component:e.jsxs("div",{className:"d-flex w-100 justify-content-between align-items-center",children:[e.jsxs("div",{children:[e.jsx("h6",{className:"mb-1",children:"Credit Card"}),e.jsx("small",{className:"text-muted",children:"****9012"})]}),e.jsx("div",{className:"text-end me-3",children:e.jsx("div",{className:"fw-bold",children:"-$1,523.45"})})]}),children:e.jsxs("div",{className:"pt-3 ps-2",children:[e.jsxs("div",{className:"row mb-2",children:[e.jsx("div",{className:"col-6 text-muted",children:"Card Type:"}),e.jsx("div",{className:"col-6 fw-semibold",children:"Visa Platinum"})]}),e.jsxs("div",{className:"row mb-2",children:[e.jsx("div",{className:"col-6 text-muted",children:"Card Number:"}),e.jsx("div",{className:"col-6 fw-semibold",children:"****9012"})]}),e.jsxs("div",{className:"row mb-2",children:[e.jsx("div",{className:"col-6 text-muted",children:"Current Balance:"}),e.jsx("div",{className:"col-6 fw-semibold",children:"-$1,523.45"})]}),e.jsxs("div",{className:"row mb-2",children:[e.jsx("div",{className:"col-6 text-muted",children:"Available Credit:"}),e.jsx("div",{className:"col-6 fw-semibold",children:"$8,476.55"})]}),e.jsxs("div",{className:"row mb-2",children:[e.jsx("div",{className:"col-6 text-muted",children:"Credit Limit:"}),e.jsx("div",{className:"col-6 fw-semibold",children:"$10,000.00"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-6 text-muted",children:"Payment Due:"}),e.jsx("div",{className:"col-6 fw-semibold",children:"Nov 15, 2024"})]})]})})})]})]})},j={parameters:{docs:{description:{story:"Account list with collapsible details using DCollapse component."}}},render:()=>e.jsxs(d,{style:{width:800},children:[e.jsx("h5",{className:"mb-3",children:"Account Details"}),e.jsxs(s,{children:[e.jsx(s.Item,{className:"p-0",children:e.jsx(t,{className:"shadow-none hover-bg-gray-25",Component:e.jsxs("div",{className:"d-flex w-100 justify-content-between align-items-center",children:[e.jsxs("div",{children:[e.jsx("h6",{className:"mb-1",children:"Checking Account"}),e.jsx("small",{className:"text-muted",children:"****1234"})]}),e.jsx("div",{className:"text-end me-3",children:e.jsx("div",{className:"fw-bold",children:"$5,248.32"})})]}),children:e.jsxs("div",{className:"pt-3 ps-2",children:[e.jsxs("div",{className:"row mb-2",children:[e.jsx("div",{className:"col-6 text-muted",children:"Account Type:"}),e.jsx("div",{className:"col-6 fw-semibold",children:"Personal Checking"})]}),e.jsxs("div",{className:"row mb-2",children:[e.jsx("div",{className:"col-6 text-muted",children:"Account Number:"}),e.jsx("div",{className:"col-6 fw-semibold",children:"****1234"})]}),e.jsxs("div",{className:"row mb-2",children:[e.jsx("div",{className:"col-6 text-muted",children:"Available Balance:"}),e.jsx("div",{className:"col-6 fw-semibold text-success",children:"$5,248.32"})]}),e.jsxs("div",{className:"row mb-2",children:[e.jsx("div",{className:"col-6 text-muted",children:"Pending:"}),e.jsx("div",{className:"col-6 fw-semibold",children:"$150.00"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-6 text-muted",children:"Opened:"}),e.jsx("div",{className:"col-6 fw-semibold",children:"Jan 15, 2020"})]})]})})}),e.jsx(s.Item,{className:"p-0",children:e.jsx(t,{className:"shadow-none hover-bg-gray-25",Component:e.jsxs("div",{className:"d-flex w-100 justify-content-between align-items-center",children:[e.jsxs("div",{children:[e.jsx("h6",{className:"mb-1",children:"Savings Account"}),e.jsx("small",{className:"text-muted",children:"****5678"})]}),e.jsx("div",{className:"text-end me-3",children:e.jsx("div",{className:"fw-bold",children:"$12,847.90"})})]}),children:e.jsxs("div",{className:"pt-3 ps-2",children:[e.jsxs("div",{className:"row mb-2",children:[e.jsx("div",{className:"col-6 text-muted",children:"Account Type:"}),e.jsx("div",{className:"col-6 fw-semibold",children:"High Yield Savings"})]}),e.jsxs("div",{className:"row mb-2",children:[e.jsx("div",{className:"col-6 text-muted",children:"Account Number:"}),e.jsx("div",{className:"col-6 fw-semibold",children:"****5678"})]}),e.jsxs("div",{className:"row mb-2",children:[e.jsx("div",{className:"col-6 text-muted",children:"Available Balance:"}),e.jsx("div",{className:"col-6 fw-semibold text-success",children:"$12,847.90"})]}),e.jsxs("div",{className:"row mb-2",children:[e.jsx("div",{className:"col-6 text-muted",children:"Interest Rate:"}),e.jsx("div",{className:"col-6 fw-semibold",children:"4.5% APY"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-6 text-muted",children:"Opened:"}),e.jsx("div",{className:"col-6 fw-semibold",children:"Mar 22, 2021"})]})]})})}),e.jsx(s.Item,{className:"p-0",children:e.jsx(t,{className:"shadow-none hover-bg-gray-25",Component:e.jsxs("div",{className:"d-flex w-100 justify-content-between align-items-center",children:[e.jsxs("div",{children:[e.jsx("h6",{className:"mb-1",children:"Credit Card"}),e.jsx("small",{className:"text-muted",children:"****9012"})]}),e.jsx("div",{className:"text-end me-3",children:e.jsx("div",{className:"fw-bold",children:"-$1,523.45"})})]}),children:e.jsxs("div",{className:"pt-3 ps-2",children:[e.jsxs("div",{className:"row mb-2",children:[e.jsx("div",{className:"col-6 text-muted",children:"Card Type:"}),e.jsx("div",{className:"col-6 fw-semibold",children:"Visa Platinum"})]}),e.jsxs("div",{className:"row mb-2",children:[e.jsx("div",{className:"col-6 text-muted",children:"Card Number:"}),e.jsx("div",{className:"col-6 fw-semibold",children:"****9012"})]}),e.jsxs("div",{className:"row mb-2",children:[e.jsx("div",{className:"col-6 text-muted",children:"Current Balance:"}),e.jsx("div",{className:"col-6 fw-semibold text-danger",children:"-$1,523.45"})]}),e.jsxs("div",{className:"row mb-2",children:[e.jsx("div",{className:"col-6 text-muted",children:"Available Credit:"}),e.jsx("div",{className:"col-6 fw-semibold",children:"$8,476.55"})]}),e.jsxs("div",{className:"row mb-2",children:[e.jsx("div",{className:"col-6 text-muted",children:"Credit Limit:"}),e.jsx("div",{className:"col-6 fw-semibold",children:"$10,000.00"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-6 text-muted",children:"Payment Due:"}),e.jsx("div",{className:"col-6 fw-semibold",children:"Nov 15, 2024"})]})]})})})]})]})},b={parameters:{docs:{description:{story:"List items with contextual dropdown menus for actions."}}},render:()=>e.jsxs(d,{style:{width:800},children:[e.jsx("h5",{className:"mb-3",children:"Payees"}),e.jsxs(s,{children:[e.jsx(s.Item,{children:e.jsxs("div",{className:"d-flex w-100 justify-content-between align-items-center",children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx(a,{icon:"Zap",hasCircle:!0,size:"1rem",color:"info",className:"me-3"}),e.jsxs("div",{children:[e.jsx("h6",{className:"mb-1",children:"Electric Company"}),e.jsx("small",{className:"text-muted",children:"Auto-pay enabled"})]})]}),e.jsx(c,{actions:[{label:"Make Payment",icon:"CreditCard",onClick:()=>{}},{label:"Edit Details",icon:"Edit",onClick:()=>{}},{label:"View History",icon:"ClockHistory",onClick:()=>{}},{label:"",isDivider:!0},{label:"Remove Payee",icon:"Trash",color:"danger",onClick:()=>{}}]})]})}),e.jsx(s.Item,{children:e.jsxs("div",{className:"d-flex w-100 justify-content-between align-items-center",children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx(a,{icon:"Wifi",hasCircle:!0,size:"1rem",color:"info",className:"me-3"}),e.jsxs("div",{children:[e.jsx("h6",{className:"mb-1",children:"Internet Service Provider"}),e.jsx("small",{className:"text-muted",children:"Auto-pay enabled"})]})]}),e.jsx(c,{actions:[{label:"Make Payment",icon:"CreditCard",onClick:()=>{}},{label:"Edit Details",icon:"Edit",onClick:()=>{}},{label:"View History",icon:"ClockHistory",onClick:()=>{}},{label:"",isDivider:!0},{label:"Remove Payee",icon:"Trash",color:"danger",onClick:()=>{}}]})]})}),e.jsx(s.Item,{children:e.jsxs("div",{className:"d-flex w-100 justify-content-between align-items-center",children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx(a,{icon:"Phone",hasCircle:!0,size:"1rem",color:"info",className:"me-3"}),e.jsxs("div",{children:[e.jsx("h6",{className:"mb-1",children:"Mobile Phone Company"}),e.jsx("small",{className:"text-muted",children:"Manual payment"})]})]}),e.jsx(c,{actions:[{label:"Make Payment",icon:"CreditCard",onClick:()=>{}},{label:"Enable Auto-pay",icon:"ToggleOn",onClick:()=>{}},{label:"Edit Details",icon:"Edit",onClick:()=>{}},{label:"View History",icon:"ClockHistory",onClick:()=>{}},{label:"",isDivider:!0},{label:"Remove Payee",icon:"Trash",color:"danger",onClick:()=>{}}]})]})})]})]})},f={parameters:{docs:{description:{story:"Transaction list with contextual actions for each item."}}},render:()=>e.jsxs(d,{style:{width:800},children:[e.jsx("h5",{className:"mb-3",children:"Recent Transactions"}),e.jsxs(s,{children:[e.jsx(s.Item,{children:e.jsxs("div",{className:"d-flex w-100 justify-content-between align-items-start",children:[e.jsx("div",{className:"flex-grow-1",children:e.jsxs("div",{className:"d-flex justify-content-between align-items-start",children:[e.jsxs("div",{children:[e.jsx("h6",{className:"mb-1",children:"Starbucks Coffee"}),e.jsx("small",{className:"text-muted",children:"Today, 9:45 AM"}),e.jsx("div",{className:"mt-1",children:e.jsx(l,{size:"sm",color:"secondary",soft:!0,text:"Groceries"})})]}),e.jsx("div",{className:"text-end me-3",children:e.jsx("div",{className:"fw-bold",children:"-$5.75"})})]})}),e.jsx(c,{actions:[{label:"View Details",icon:"Eye",onClick:()=>{}},{label:"Add Note",icon:"Pencil",onClick:()=>{}},{label:"Change Category",icon:"Tag",onClick:()=>{}},{label:"",isDivider:!0},{label:"Dispute Transaction",icon:"ExclamationTriangle",color:"warning",onClick:()=>{}}]})]})}),e.jsx(s.Item,{children:e.jsxs("div",{className:"d-flex w-100 justify-content-between align-items-start",children:[e.jsx("div",{className:"flex-grow-1",children:e.jsxs("div",{className:"d-flex justify-content-between align-items-start",children:[e.jsxs("div",{children:[e.jsx("h6",{className:"mb-1",children:"Amazon Purchase"}),e.jsx("small",{className:"text-muted",children:"Yesterday, 3:20 PM"}),e.jsx("div",{className:"mt-1",children:e.jsx(l,{size:"sm",color:"secondary",soft:!0,text:"Shopping"})})]}),e.jsx("div",{className:"text-end me-3",children:e.jsx("div",{className:"fw-bold",children:"-$127.99"})})]})}),e.jsx(c,{actions:[{label:"View Details",icon:"Eye",onClick:()=>{}},{label:"Add Note",icon:"Pencil",onClick:()=>{}},{label:"Change Category",icon:"Tag",onClick:()=>{}},{label:"Track Package",icon:"Box",onClick:()=>{}},{label:"",isDivider:!0},{label:"Cancel Transaction",icon:"XCircle",color:"danger",onClick:()=>{}}]})]})}),e.jsx(s.Item,{children:e.jsxs("div",{className:"d-flex w-100 justify-content-between align-items-start",children:[e.jsx("div",{className:"flex-grow-1",children:e.jsxs("div",{className:"d-flex justify-content-between align-items-start",children:[e.jsxs("div",{children:[e.jsx("h6",{className:"mb-1",children:"Salary Deposit"}),e.jsx("small",{className:"text-muted",children:"Oct 1, 2024"}),e.jsx("div",{className:"mt-1",children:e.jsx(l,{size:"sm",color:"secondary",soft:!0,text:"Income"})})]}),e.jsx("div",{className:"text-end me-3",children:e.jsx("div",{className:"fw-bold",children:"+$127.99"})})]})}),e.jsx(c,{actions:[{label:"View Details",icon:"Eye",onClick:()=>{}},{label:"Add Note",icon:"Pencil",onClick:()=>{}},{label:"Download Receipt",icon:"Download",onClick:()=>{}}]})]})})]})]})},w={parameters:{docs:{description:{story:"Account list with collapsible details using DCollapse component."}}},render:()=>e.jsxs("div",{style:{width:1e3},children:[e.jsx(t,{defaultCollapsed:!1,Component:e.jsx("div",{className:"d-flex w-100 justify-content-between align-items-center",children:e.jsxs("div",{children:[e.jsx("h5",{className:"mb-1",children:"Accounts"}),e.jsx("small",{className:"text-muted",children:"Total: $5,248.32"})]})}),children:e.jsx(s,{children:Array.from({length:3}).map((m,n)=>e.jsx(s.Item,{children:e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"g-col-2 d-flex gap-2 align-items-center",children:[e.jsx(a,{icon:"CreditCard",size:"1rem",hasCircle:!0,color:"info"}),e.jsx("h5",{children:"Mastercard"})]}),e.jsxs("div",{className:"g-col-2",children:[e.jsx("small",{className:"text-muted",children:"Current"}),e.jsx("div",{className:"fw-bold",children:"$5,248.32"}),e.jsx("small",{className:"text-muted",children:"Available: $5,248.32"})]}),e.jsxs("div",{className:"g-col-2",children:[e.jsx("small",{className:"text-muted",children:"Next Payment"}),e.jsx("div",{className:"fw-bold",children:"May 12, 2023"}),e.jsx("small",{className:"text-muted",children:"Amount: $5,248.32"})]}),e.jsxs("div",{className:"g-col-6 d-flex gap-2 align-items-center justify-content-end",children:[e.jsx(i,{variant:"outline",text:"View Details",color:"secondary"}),e.jsx(i,{variant:"outline",text:"Movements",color:"secondary"}),e.jsx(i,{text:"Pay Now",variant:"outline"}),e.jsx(c,{actions:[{label:"View Details",icon:"Eye",onClick:()=>{}},{label:"Add Note",icon:"Pencil",onClick:()=>{}},{label:"Change Category",icon:"Tag",onClick:()=>{}}]})]})]})},n))})}),e.jsx(t,{className:"mt-4",Component:e.jsx("div",{className:"d-flex w-100 justify-content-between align-items-center",children:e.jsxs("div",{children:[e.jsx("h5",{className:"mb-1",children:"Transactions"}),e.jsx("small",{className:"text-muted",children:"Total: $5,248.32"})]})}),children:e.jsx(s,{children:Array.from({length:3}).map((m,n)=>e.jsx(s.Item,{children:e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"g-col-2 d-flex gap-2 align-items-center",children:[e.jsx(a,{icon:"CreditCard",size:"1rem",hasCircle:!0,color:"info"}),e.jsx("h5",{children:"Mastercard"})]}),e.jsxs("div",{className:"g-col-2",children:[e.jsx("small",{className:"text-muted",children:"Current"}),e.jsx("div",{className:"fw-bold",children:"$5,248.32"}),e.jsx("small",{className:"text-muted",children:"Available: $5,248.32"})]}),e.jsxs("div",{className:"g-col-2",children:[e.jsx("small",{className:"text-muted",children:"Next Payment"}),e.jsx("div",{className:"fw-bold",children:"May 12, 2023"}),e.jsx("small",{className:"text-muted",children:"Amount: $5,248.32"})]}),e.jsxs("div",{className:"g-col-6 d-flex gap-2 align-items-center justify-content-end",children:[e.jsx(i,{variant:"outline",text:"View Details",color:"secondary"}),e.jsx(i,{variant:"outline",text:"Movements",color:"secondary"}),e.jsx(i,{text:"Pay Now",variant:"outline"}),e.jsx(c,{actions:[{label:"View Details",icon:"Eye",onClick:()=>{}},{label:"Add Note",icon:"Pencil",onClick:()=>{}},{label:"Change Category",icon:"Tag",onClick:()=>{}}]})]})]})},n))})}),e.jsx(t,{className:"mt-4",Component:e.jsx("div",{className:"d-flex w-100 justify-content-between align-items-center",children:e.jsxs("div",{children:[e.jsx("h5",{className:"mb-1",children:"Deposits"}),e.jsx("small",{className:"text-muted",children:"Total: $5,248.32"})]})}),children:e.jsx(s,{children:Array.from({length:3}).map((m,n)=>e.jsx(s.Item,{children:e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"g-col-2 d-flex gap-2 align-items-center",children:[e.jsx(a,{icon:"CreditCard",size:"1rem",hasCircle:!0,color:"info"}),e.jsx("h5",{children:"Mastercard"})]}),e.jsxs("div",{className:"g-col-2",children:[e.jsx("small",{className:"text-muted",children:"Current"}),e.jsx("div",{className:"fw-bold",children:"$5,248.32"}),e.jsx("small",{className:"text-muted",children:"Available: $5,248.32"})]}),e.jsxs("div",{className:"g-col-2",children:[e.jsx("small",{className:"text-muted",children:"Next Payment"}),e.jsx("div",{className:"fw-bold",children:"May 12, 2023"}),e.jsx("small",{className:"text-muted",children:"Amount: $5,248.32"})]}),e.jsxs("div",{className:"g-col-6 d-flex gap-2 align-items-center justify-content-end",children:[e.jsx(i,{variant:"outline",text:"View Details",color:"secondary"}),e.jsx(i,{variant:"outline",text:"Movements",color:"secondary"}),e.jsx(i,{text:"Pay Now",variant:"outline"}),e.jsx(c,{actions:[{label:"View Details",icon:"Eye",onClick:()=>{}},{label:"Add Note",icon:"Pencil",onClick:()=>{}},{label:"Change Category",icon:"Tag",onClick:()=>{}}]})]})]})},n))})})]})};var p,g,y;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Display a list of accounts with names, types, and current balances.'
      }
    }
  },
  render: () => <DBox style={{
    width: 800
  }}>
      <h5 className="mb-3">My Accounts</h5>
      <DListGroup>
        <DListGroup.Item>
          <div className="d-flex justify-content-between align-items-start w-100">
            <div>
              <h6 className="mb-1">Checking Account</h6>
              <small className="text-muted">****1234</small>
            </div>
            <div className="text-end">
              <div className="fw-bold">$5,248.32</div>
              <small className="text-muted">Available</small>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-start">
            <div>
              <h6 className="mb-1">Savings Account</h6>
              <small className="text-muted">****5678</small>
            </div>
            <div className="text-end">
              <div className="fw-bold">$12,847.90</div>
              <small className="text-muted">Available</small>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-start">
            <div>
              <h6 className="mb-1">Credit Card</h6>
              <small className="text-muted">****9012</small>
            </div>
            <div className="text-end">
              <div className="fw-bold text-danger">-$1,523.45</div>
              <small className="text-muted">Current Balance</small>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-start">
            <div>
              <h6 className="mb-1">Investment Account</h6>
              <small className="text-muted">****3456</small>
            </div>
            <div className="text-end">
              <div className="fw-bold">$45,892.15</div>
              <small className="text-muted">Market Value</small>
            </div>
          </div>
        </DListGroup.Item>
      </DListGroup>
    </DBox>
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var D,C,I;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Display recent transactions with dates, descriptions, and amounts.'
      }
    }
  },
  render: () => <DBox style={{
    width: 800
  }}>
      <h5 className="mb-3">Recent Transactions</h5>
      <DListGroup>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div>
              <h6 className="mb-1">
                <DBadge soft color="info" className="me-1" text="Food" />
                Starbucks Coffee
              </h6>
              <small className="text-muted">Today, 9:45 AM</small>
            </div>
            <div className="text-end">
              <div className="fw-bold">-$5.75</div>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div>
              <h6 className="mb-1">
                <DBadge soft color="info" className="me-1" text="Shopping" />
                Amazon Purchase
              </h6>
              <small className="text-muted">Yesterday, 3:20 PM</small>
            </div>
            <div className="text-end">
              <div className="fw-bold">-$127.99</div>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div>
              <h6 className="mb-1">
                <DBadge soft color="success" className="me-1" text="Income" />
                Salary Deposit
              </h6>
              <small className="text-muted">Oct 1, 2024</small>
            </div>
            <div className="text-end">
              <div className="fw-bold">+$4,500.00</div>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div>
              <h6 className="mb-1">
                <DBadge soft color="info" className="me-1" text="Utilities" />
                Electric Bill
              </h6>
              <small className="text-muted">Sep 28, 2024</small>
            </div>
            <div className="text-end">
              <div className="fw-bold">-$89.32</div>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div>
              <h6 className="mb-1">
                <DBadge soft color="info" className="me-1" text="Transfer" />
                Transfer to Savings
              </h6>
              <small className="text-muted">Sep 25, 2024</small>
            </div>
            <div className="text-end">
              <div className="fw-bold">-$500.00</div>
            </div>
          </div>
        </DListGroup.Item>
      </DListGroup>
    </DBox>
}`,...(I=(C=o.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var A,$,L;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Display saved payment methods with card details and status.'
      }
    }
  },
  render: () => <DBox style={{
    width: 800
  }}>
      <h5 className="mb-3">Payment Methods</h5>
      <DListGroup>
        <DListGroup.Item action className="hover-bg-gray-25">
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="me-3">
                <DIcon icon="CreditCard" color="success" hasCircle />
              </div>
              <div>
                <h6 className="mb-1">Visa •••• 4532</h6>
                <small className="text-muted">Expires 12/25</small>
                <div className="mt-1">
                  <DBadge color="primary" soft text="Primary" />
                </div>
              </div>
            </div>
            <DIcon icon="ChevronRight" className="text-gray-300" />
          </div>
        </DListGroup.Item>
        <DListGroup.Item action className="hover-bg-gray-25">
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="me-3">
                <DIcon icon="CreditCard" color="info" hasCircle />
              </div>
              <div>
                <h6 className="mb-1">Mastercard •••• 8791</h6>
                <small className="text-muted">Expires 08/26</small>
              </div>
            </div>
            <DIcon icon="ChevronRight" className="text-gray-300" />
          </div>
        </DListGroup.Item>
        <DListGroup.Item action className="hover-bg-gray-25">
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="me-3">
                <DIcon icon="Landmark" color="warning" hasCircle />
              </div>
              <div>
                <h6 className="mb-1">Bank Account ****1234</h6>
                <small className="text-muted">Checking Account</small>
              </div>
            </div>
            <DIcon icon="ChevronRight" className="text-gray-300" />
          </div>
        </DListGroup.Item>
        <DListGroup.Item action className="hover-bg-gray-25">
          <div className="align-items-center d-flex justify-content-center gap-2">
            <DIcon icon="PlusCircle" />
            Add New Payment Method
          </div>
        </DListGroup.Item>
      </DListGroup>
    </DBox>
}`,...(L=($=x.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var k,G,P;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Display upcoming bill payments with due dates and amounts.'
      }
    }
  },
  render: () => <DBox style={{
    width: 800
  }}>
      <h5 className="mb-3">Upcoming Bills</h5>
      <DListGroup>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-start">
            <div className="d-flex align-items-start">
              <div className="me-3">
                <DIcon icon="Zap" hasCircle size="1rem" />
              </div>
              <div>
                <h6 className="mb-1">Electric Company</h6>
                <small className="text-muted">Due: Nov 15, 2024</small>
                <div className="mt-1">
                  <DBadge soft color="warning" text="Due Sun" />
                </div>
              </div>
            </div>
            <div className="text-end">
              <div className="fw-bold">$92.45</div>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-start">
            <div className="d-flex align-items-start">
              <div className="me-3">
                <DIcon icon="Wifi" hasCircle size="1rem" />
              </div>
              <div>
                <h6 className="mb-1">Internet Service</h6>
                <small className="text-muted">Due: Nov 18, 2024</small>
                <div className="mt-1">
                  <DBadge soft color="success" text="Auto-pay" />
                </div>
              </div>
            </div>
            <div className="text-end">
              <div className="fw-bold">$79.99</div>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-start">
            <div className="d-flex align-items-start">
              <div className="me-3">
                <DIcon hasCircle icon="Phone" size="1rem" />
              </div>
              <div>
                <h6 className="mb-1">Mobile Phone</h6>
                <small className="text-muted">Due: Nov 20, 2024</small>
                <div className="mt-1">
                  <DBadge soft color="success" text="Auto-pay" />
                </div>
              </div>
            </div>
            <div className="text-end">
              <div className="fw-bold">$65.00</div>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-start">
            <div className="d-flex align-items-start">
              <div className="me-3">
                <DIcon hasCircle icon="Shapes" size="1rem" />
              </div>
              <div>
                <h6 className="mb-1">Rent Payment</h6>
                <small className="text-muted">Due: Dec 1, 2024</small>
                <div className="mt-1">
                  <DBadge soft color="secondary" text="Upcoming" />
                </div>
              </div>
            </div>
            <div className="text-end">
              <div className="fw-bold">$1,500.00</div>
            </div>
          </div>
        </DListGroup.Item>
      </DListGroup>
    </DBox>
}`,...(P=(G=v.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var T,B,S;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Display investment holdings with current values and performance.'
      }
    }
  },
  render: () => <DBox style={{
    width: 800
  }}>
      <h5 className="mb-3">Investment Portfolio</h5>
      <DListGroup>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-start">
            <div>
              <h6 className="mb-1">Apple Inc. (AAPL)</h6>
              <small className="text-muted">25 shares @ $178.32</small>
              <div className="mt-1">
                <DBadge soft color="success" text="+$1,500.00" iconStart="ArrowUp" />
              </div>
            </div>
            <div className="text-end">
              <div className="fw-bold">$4,458.00</div>
              <small className="text-success">+$495.00</small>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-start">
            <div>
              <h6 className="mb-1">Microsoft Corp. (MSFT)</h6>
              <small className="text-muted">15 shares @ $368.45</small>
              <div className="mt-1">
                <DBadge soft color="success" text="+$1,500.00" iconStart="ArrowUp" />
              </div>
            </div>
            <div className="text-end">
              <div className="fw-bold">$5,526.75</div>
              <small className="text-success">+$423.50</small>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-start">
            <div>
              <h6 className="mb-1">Tesla Inc. (TSLA)</h6>
              <small className="text-muted">10 shares @ $242.18</small>
              <div className="mt-1">
                <DBadge soft color="danger" text="-$1,500.00" iconStart="ArrowDown" />
              </div>
            </div>
            <div className="text-end">
              <div className="fw-bold">$2,421.80</div>
              <small className="text-danger">-$80.00</small>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-start">
            <div>
              <h6 className="mb-1">S&P 500 Index Fund (VOO)</h6>
              <small className="text-muted">50 shares @ $412.90</small>
              <div className="mt-1">
                <DBadge soft color="success" text="+$1,500.00" iconStart="ArrowUp" />
              </div>
            </div>
            <div className="text-end">
              <div className="fw-bold">$20,645.00</div>
              <small className="text-success">+$2,805.00</small>
            </div>
          </div>
        </DListGroup.Item>
      </DListGroup>
      <div className="mt-3 p-3 bg-gray-25 rounded">
        <div className="d-flex justify-content-between">
          <strong>Total Portfolio Value:</strong>
          <span className="fs-5 fw-bold">$33,051.55</span>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <span className="text-muted">Total Gain:</span>
          <span>+$3,643.50 (+12.4%)</span>
        </div>
      </div>
    </DBox>
}`,...(S=(B=h.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var M,E,V;N.parameters={...N.parameters,docs:{...(M=N.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Interactive account list with clickable items for navigation.'
      }
    }
  },
  render: () => <DBox style={{
    width: 800
  }}>
      <h5 className="mb-3">Quick Actions</h5>
      <DListGroup>
        <DListGroup.Item action className="hover-bg-gray-25">
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <i className="bi bi-arrow-left-right fs-4 text-primary me-3" />
              <div>
                <h6 className="mb-0">Transfer Money</h6>
                <small className="text-muted">Between your accounts</small>
              </div>
            </div>
            <i className="bi bi-chevron-right" />
          </div>
        </DListGroup.Item>
        <DListGroup.Item action className="hover-bg-gray-25">
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <i className="bi bi-receipt fs-4 text-success me-3" />
              <div>
                <h6 className="mb-0">Pay Bills</h6>
                <small className="text-muted">3 bills due this month</small>
              </div>
            </div>
            <i className="bi bi-chevron-right" />
          </div>
        </DListGroup.Item>
        <DListGroup.Item action className="hover-bg-gray-25">
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <i className="bi bi-camera fs-4 text-info me-3" />
              <div>
                <h6 className="mb-0">Deposit Check</h6>
                <small className="text-muted">Use mobile deposit</small>
              </div>
            </div>
            <i className="bi bi-chevron-right" />
          </div>
        </DListGroup.Item>
        <DListGroup.Item action className="hover-bg-gray-25">
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <i className="bi bi-file-earmark-text fs-4 text-warning me-3" />
              <div>
                <h6 className="mb-0">Statements</h6>
                <small className="text-muted">View and download</small>
              </div>
            </div>
            <i className="bi bi-chevron-right" />
          </div>
        </DListGroup.Item>
      </DListGroup>
    </DBox>
}`,...(V=(E=N.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var z,R,O;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Account list with collapsible details using DCollapse component.'
      }
    }
  },
  render: () => <div style={{
    width: 800
  }}>
      <h5 className="mb-3">Account Details</h5>
      <DListGroup flush className="d-flex flex-column gap-1">
        <DListGroup.Item className="p-0 border-0">
          <DCollapse Component={<div className="d-flex w-100 justify-content-between align-items-center">
                <div>
                  <h6 className="mb-1">Checking Account</h6>
                  <small className="text-muted">****1234</small>
                </div>
                <div className="text-end me-3">
                  <div className="fw-bold">$5,248.32</div>
                </div>
              </div>}>
            <div className="pt-3 ps-2">
              <div className="row mb-2">
                <div className="col-6 text-muted">Account Type:</div>
                <div className="col-6 fw-semibold">Personal Checking</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 text-muted">Account Number:</div>
                <div className="col-6 fw-semibold">****1234</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 text-muted">Available Balance:</div>
                <div className="col-6 fw-semibold">$5,248.32</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 text-muted">Pending:</div>
                <div className="col-6 fw-semibold">$150.00</div>
              </div>
              <div className="row">
                <div className="col-6 text-muted">Opened:</div>
                <div className="col-6 fw-semibold">Jan 15, 2020</div>
              </div>
            </div>
          </DCollapse>
        </DListGroup.Item>
        <DListGroup.Item className="p-0 border-0 hover-bg-gray-50">
          <DCollapse Component={<div className="d-flex w-100 justify-content-between align-items-center">
                <div>
                  <h6 className="mb-1">Savings Account</h6>
                  <small className="text-muted">****5678</small>
                </div>
                <div className="text-end me-3">
                  <div className="fw-bold">$12,847.90</div>
                </div>
              </div>}>
            <div className="pt-3 ps-2">
              <div className="row mb-2">
                <div className="col-6 text-muted">Account Type:</div>
                <div className="col-6 fw-semibold">High Yield Savings</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 text-muted">Account Number:</div>
                <div className="col-6 fw-semibold">****5678</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 text-muted">Available Balance:</div>
                <div className="col-6 fw-semibold">$12,847.90</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 text-muted">Interest Rate:</div>
                <div className="col-6 fw-semibold">4.5% APY</div>
              </div>
              <div className="row">
                <div className="col-6 text-muted">Opened:</div>
                <div className="col-6 fw-semibold">Mar 22, 2021</div>
              </div>
            </div>
          </DCollapse>
        </DListGroup.Item>
        <DListGroup.Item className="p-0 border-0 hover-bg-gray-50">
          <DCollapse Component={<div className="d-flex w-100 justify-content-between align-items-center">
                <div>
                  <h6 className="mb-1">Credit Card</h6>
                  <small className="text-muted">****9012</small>
                </div>
                <div className="text-end me-3">
                  <div className="fw-bold">-$1,523.45</div>
                </div>
              </div>}>
            <div className="pt-3 ps-2">
              <div className="row mb-2">
                <div className="col-6 text-muted">Card Type:</div>
                <div className="col-6 fw-semibold">Visa Platinum</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 text-muted">Card Number:</div>
                <div className="col-6 fw-semibold">****9012</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 text-muted">Current Balance:</div>
                <div className="col-6 fw-semibold">-$1,523.45</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 text-muted">Available Credit:</div>
                <div className="col-6 fw-semibold">$8,476.55</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 text-muted">Credit Limit:</div>
                <div className="col-6 fw-semibold">$10,000.00</div>
              </div>
              <div className="row">
                <div className="col-6 text-muted">Payment Due:</div>
                <div className="col-6 fw-semibold">Nov 15, 2024</div>
              </div>
            </div>
          </DCollapse>
        </DListGroup.Item>
      </DListGroup>
    </div>
}`,...(O=(R=u.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var H,U,W;j.parameters={...j.parameters,docs:{...(H=j.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Account list with collapsible details using DCollapse component.'
      }
    }
  },
  render: () => <DBox style={{
    width: 800
  }}>
      <h5 className="mb-3">Account Details</h5>
      <DListGroup>
        <DListGroup.Item className="p-0">
          <DCollapse className="shadow-none hover-bg-gray-25" Component={<div className="d-flex w-100 justify-content-between align-items-center">
                <div>
                  <h6 className="mb-1">Checking Account</h6>
                  <small className="text-muted">****1234</small>
                </div>
                <div className="text-end me-3">
                  <div className="fw-bold">$5,248.32</div>
                </div>
              </div>}>
            <div className="pt-3 ps-2">
              <div className="row mb-2">
                <div className="col-6 text-muted">Account Type:</div>
                <div className="col-6 fw-semibold">Personal Checking</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 text-muted">Account Number:</div>
                <div className="col-6 fw-semibold">****1234</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 text-muted">Available Balance:</div>
                <div className="col-6 fw-semibold text-success">$5,248.32</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 text-muted">Pending:</div>
                <div className="col-6 fw-semibold">$150.00</div>
              </div>
              <div className="row">
                <div className="col-6 text-muted">Opened:</div>
                <div className="col-6 fw-semibold">Jan 15, 2020</div>
              </div>
            </div>
          </DCollapse>
        </DListGroup.Item>
        <DListGroup.Item className="p-0">
          <DCollapse className="shadow-none hover-bg-gray-25" Component={<div className="d-flex w-100 justify-content-between align-items-center">
                <div>
                  <h6 className="mb-1">Savings Account</h6>
                  <small className="text-muted">****5678</small>
                </div>
                <div className="text-end me-3">
                  <div className="fw-bold">$12,847.90</div>
                </div>
              </div>}>
            <div className="pt-3 ps-2">
              <div className="row mb-2">
                <div className="col-6 text-muted">Account Type:</div>
                <div className="col-6 fw-semibold">High Yield Savings</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 text-muted">Account Number:</div>
                <div className="col-6 fw-semibold">****5678</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 text-muted">Available Balance:</div>
                <div className="col-6 fw-semibold text-success">$12,847.90</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 text-muted">Interest Rate:</div>
                <div className="col-6 fw-semibold">4.5% APY</div>
              </div>
              <div className="row">
                <div className="col-6 text-muted">Opened:</div>
                <div className="col-6 fw-semibold">Mar 22, 2021</div>
              </div>
            </div>
          </DCollapse>
        </DListGroup.Item>
        <DListGroup.Item className="p-0">
          <DCollapse className="shadow-none hover-bg-gray-25" Component={<div className="d-flex w-100 justify-content-between align-items-center">
                <div>
                  <h6 className="mb-1">Credit Card</h6>
                  <small className="text-muted">****9012</small>
                </div>
                <div className="text-end me-3">
                  <div className="fw-bold">-$1,523.45</div>
                </div>
              </div>}>
            <div className="pt-3 ps-2">
              <div className="row mb-2">
                <div className="col-6 text-muted">Card Type:</div>
                <div className="col-6 fw-semibold">Visa Platinum</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 text-muted">Card Number:</div>
                <div className="col-6 fw-semibold">****9012</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 text-muted">Current Balance:</div>
                <div className="col-6 fw-semibold text-danger">-$1,523.45</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 text-muted">Available Credit:</div>
                <div className="col-6 fw-semibold">$8,476.55</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 text-muted">Credit Limit:</div>
                <div className="col-6 fw-semibold">$10,000.00</div>
              </div>
              <div className="row">
                <div className="col-6 text-muted">Payment Due:</div>
                <div className="col-6 fw-semibold">Nov 15, 2024</div>
              </div>
            </div>
          </DCollapse>
        </DListGroup.Item>
      </DListGroup>
    </DBox>
}`,...(W=(U=j.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var Y,_,F;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'List items with contextual dropdown menus for actions.'
      }
    }
  },
  render: () => <DBox style={{
    width: 800
  }}>
      <h5 className="mb-3">Payees</h5>
      <DListGroup>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <DIcon icon="Zap" hasCircle size="1rem" color="info" className="me-3" />
              <div>
                <h6 className="mb-1">Electric Company</h6>
                <small className="text-muted">Auto-pay enabled</small>
              </div>
            </div>
            <DDropdown actions={[{
            label: 'Make Payment',
            icon: 'CreditCard',
            onClick: () => {}
          }, {
            label: 'Edit Details',
            icon: 'Edit',
            onClick: () => {}
          }, {
            label: 'View History',
            icon: 'ClockHistory',
            onClick: () => {}
          }, {
            label: '',
            isDivider: true
          }, {
            label: 'Remove Payee',
            icon: 'Trash',
            color: 'danger',
            onClick: () => {}
          }]} />
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <DIcon icon="Wifi" hasCircle size="1rem" color="info" className="me-3" />
              <div>
                <h6 className="mb-1">Internet Service Provider</h6>
                <small className="text-muted">Auto-pay enabled</small>
              </div>
            </div>
            <DDropdown actions={[{
            label: 'Make Payment',
            icon: 'CreditCard',
            onClick: () => {}
          }, {
            label: 'Edit Details',
            icon: 'Edit',
            onClick: () => {}
          }, {
            label: 'View History',
            icon: 'ClockHistory',
            onClick: () => {}
          }, {
            label: '',
            isDivider: true
          }, {
            label: 'Remove Payee',
            icon: 'Trash',
            color: 'danger',
            onClick: () => {}
          }]} />
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <DIcon icon="Phone" hasCircle size="1rem" color="info" className="me-3" />
              <div>
                <h6 className="mb-1">Mobile Phone Company</h6>
                <small className="text-muted">Manual payment</small>
              </div>
            </div>
            <DDropdown actions={[{
            label: 'Make Payment',
            icon: 'CreditCard',
            onClick: () => {}
          }, {
            label: 'Enable Auto-pay',
            icon: 'ToggleOn',
            onClick: () => {}
          }, {
            label: 'Edit Details',
            icon: 'Edit',
            onClick: () => {}
          }, {
            label: 'View History',
            icon: 'ClockHistory',
            onClick: () => {}
          }, {
            label: '',
            isDivider: true
          }, {
            label: 'Remove Payee',
            icon: 'Trash',
            color: 'danger',
            onClick: () => {}
          }]} />
          </div>
        </DListGroup.Item>
      </DListGroup>
    </DBox>
}`,...(F=(_=b.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var J,Z,X;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Transaction list with contextual actions for each item.'
      }
    }
  },
  render: () => <DBox style={{
    width: 800
  }}>
      <h5 className="mb-3">Recent Transactions</h5>
      <DListGroup>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-start">
            <div className="flex-grow-1">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h6 className="mb-1">Starbucks Coffee</h6>
                  <small className="text-muted">Today, 9:45 AM</small>
                  <div className="mt-1">
                    <DBadge size="sm" color="secondary" soft text="Groceries" />
                  </div>
                </div>
                <div className="text-end me-3">
                  <div className="fw-bold">-$5.75</div>
                </div>
              </div>
            </div>
            <DDropdown actions={[{
            label: 'View Details',
            icon: 'Eye',
            onClick: () => {}
          }, {
            label: 'Add Note',
            icon: 'Pencil',
            onClick: () => {}
          }, {
            label: 'Change Category',
            icon: 'Tag',
            onClick: () => {}
          }, {
            label: '',
            isDivider: true
          }, {
            label: 'Dispute Transaction',
            icon: 'ExclamationTriangle',
            color: 'warning',
            onClick: () => {}
          }]} />
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-start">
            <div className="flex-grow-1">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h6 className="mb-1">Amazon Purchase</h6>
                  <small className="text-muted">Yesterday, 3:20 PM</small>
                  <div className="mt-1">
                    <DBadge size="sm" color="secondary" soft text="Shopping" />
                  </div>
                </div>
                <div className="text-end me-3">
                  <div className="fw-bold">-$127.99</div>
                </div>
              </div>
            </div>
            <DDropdown actions={[{
            label: 'View Details',
            icon: 'Eye',
            onClick: () => {}
          }, {
            label: 'Add Note',
            icon: 'Pencil',
            onClick: () => {}
          }, {
            label: 'Change Category',
            icon: 'Tag',
            onClick: () => {}
          }, {
            label: 'Track Package',
            icon: 'Box',
            onClick: () => {}
          }, {
            label: '',
            isDivider: true
          }, {
            label: 'Cancel Transaction',
            icon: 'XCircle',
            color: 'danger',
            onClick: () => {}
          }]} />
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-start">
            <div className="flex-grow-1">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h6 className="mb-1">Salary Deposit</h6>
                  <small className="text-muted">Oct 1, 2024</small>
                  <div className="mt-1">
                    <DBadge size="sm" color="secondary" soft text="Income" />
                  </div>
                </div>
                <div className="text-end me-3">
                  <div className="fw-bold">+$127.99</div>
                </div>
              </div>
            </div>
            <DDropdown actions={[{
            label: 'View Details',
            icon: 'Eye',
            onClick: () => {}
          }, {
            label: 'Add Note',
            icon: 'Pencil',
            onClick: () => {}
          }, {
            label: 'Download Receipt',
            icon: 'Download',
            onClick: () => {}
          }]} />
          </div>
        </DListGroup.Item>
      </DListGroup>
    </DBox>
}`,...(X=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:X.source}}};var Q,q,K;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Account list with collapsible details using DCollapse component.'
      }
    }
  },
  render: () => <div style={{
    width: 1000
  }}>
      <DCollapse defaultCollapsed={false} Component={<div className="d-flex w-100 justify-content-between align-items-center">
            <div>
              <h5 className="mb-1">Accounts</h5>
              <small className="text-muted">Total: $5,248.32</small>
            </div>
          </div>}>
        <DListGroup>
          {Array.from({
          length: 3
        }).map((_, index) =>
        // eslint-disable-next-line react/no-array-index-key
        <DListGroup.Item key={index}>
              <div className="grid">
                <div className="g-col-2 d-flex gap-2 align-items-center">
                  <DIcon icon="CreditCard" size="1rem" hasCircle color="info" />
                  <h5>Mastercard</h5>
                </div>
                <div className="g-col-2">
                  <small className="text-muted">Current</small>
                  <div className="fw-bold">$5,248.32</div>
                  <small className="text-muted">Available: $5,248.32</small>
                </div>
                <div className="g-col-2">
                  <small className="text-muted">Next Payment</small>
                  <div className="fw-bold">May 12, 2023</div>
                  <small className="text-muted">Amount: $5,248.32</small>
                </div>
                <div className="g-col-6 d-flex gap-2 align-items-center justify-content-end">
                  <DButton variant="outline" text="View Details" color="secondary" />
                  <DButton variant="outline" text="Movements" color="secondary" />
                  <DButton text="Pay Now" variant="outline" />
                  <DDropdown actions={[{
                label: 'View Details',
                icon: 'Eye',
                onClick: () => {}
              }, {
                label: 'Add Note',
                icon: 'Pencil',
                onClick: () => {}
              }, {
                label: 'Change Category',
                icon: 'Tag',
                onClick: () => {}
              }]} />
                </div>
              </div>
            </DListGroup.Item>)}
        </DListGroup>
      </DCollapse>
      <DCollapse className="mt-4" Component={<div className="d-flex w-100 justify-content-between align-items-center">
            <div>
              <h5 className="mb-1">Transactions</h5>
              <small className="text-muted">Total: $5,248.32</small>
            </div>
          </div>}>
        <DListGroup>
          {Array.from({
          length: 3
        }).map((_, index) =>
        // eslint-disable-next-line react/no-array-index-key
        <DListGroup.Item key={index}>
              <div className="grid">
                <div className="g-col-2 d-flex gap-2 align-items-center">
                  <DIcon icon="CreditCard" size="1rem" hasCircle color="info" />
                  <h5>Mastercard</h5>
                </div>
                <div className="g-col-2">
                  <small className="text-muted">Current</small>
                  <div className="fw-bold">$5,248.32</div>
                  <small className="text-muted">Available: $5,248.32</small>
                </div>
                <div className="g-col-2">
                  <small className="text-muted">Next Payment</small>
                  <div className="fw-bold">May 12, 2023</div>
                  <small className="text-muted">Amount: $5,248.32</small>
                </div>
                <div className="g-col-6 d-flex gap-2 align-items-center justify-content-end">
                  <DButton variant="outline" text="View Details" color="secondary" />
                  <DButton variant="outline" text="Movements" color="secondary" />
                  <DButton text="Pay Now" variant="outline" />
                  <DDropdown actions={[{
                label: 'View Details',
                icon: 'Eye',
                onClick: () => {}
              }, {
                label: 'Add Note',
                icon: 'Pencil',
                onClick: () => {}
              }, {
                label: 'Change Category',
                icon: 'Tag',
                onClick: () => {}
              }]} />
                </div>
              </div>
            </DListGroup.Item>)}
        </DListGroup>
      </DCollapse>
      <DCollapse className="mt-4" Component={<div className="d-flex w-100 justify-content-between align-items-center">
            <div>
              <h5 className="mb-1">Deposits</h5>
              <small className="text-muted">Total: $5,248.32</small>
            </div>
          </div>}>
        <DListGroup>
          {Array.from({
          length: 3
        }).map((_, index) =>
        // eslint-disable-next-line react/no-array-index-key
        <DListGroup.Item key={index}>
              <div className="grid">
                <div className="g-col-2 d-flex gap-2 align-items-center">
                  <DIcon icon="CreditCard" size="1rem" hasCircle color="info" />
                  <h5>Mastercard</h5>
                </div>
                <div className="g-col-2">
                  <small className="text-muted">Current</small>
                  <div className="fw-bold">$5,248.32</div>
                  <small className="text-muted">Available: $5,248.32</small>
                </div>
                <div className="g-col-2">
                  <small className="text-muted">Next Payment</small>
                  <div className="fw-bold">May 12, 2023</div>
                  <small className="text-muted">Amount: $5,248.32</small>
                </div>
                <div className="g-col-6 d-flex gap-2 align-items-center justify-content-end">
                  <DButton variant="outline" text="View Details" color="secondary" />
                  <DButton variant="outline" text="Movements" color="secondary" />
                  <DButton text="Pay Now" variant="outline" />
                  <DDropdown actions={[{
                label: 'View Details',
                icon: 'Eye',
                onClick: () => {}
              }, {
                label: 'Add Note',
                icon: 'Pencil',
                onClick: () => {}
              }, {
                label: 'Change Category',
                icon: 'Tag',
                onClick: () => {}
              }]} />
                </div>
              </div>
            </DListGroup.Item>)}
        </DListGroup>
      </DCollapse>
    </div>
}`,...(K=(q=w.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};const ye=["AccountList","TransactionHistory","PaymentMethods","BillPayments","InvestmentPortfolio","AccountSummaryWithActions","CollapsibleAccountDetails","CollapsibleAccountDetails2","ListWithContextualActions","TransactionsWithActions","CollapsibleWithList"];export{r as AccountList,N as AccountSummaryWithActions,v as BillPayments,u as CollapsibleAccountDetails,j as CollapsibleAccountDetails2,w as CollapsibleWithList,h as InvestmentPortfolio,b as ListWithContextualActions,x as PaymentMethods,o as TransactionHistory,f as TransactionsWithActions,ye as __namedExportsOrder,ge as default};
