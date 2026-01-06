import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{D as e}from"./DTabs-DS9KxaMR.js";import{D as r}from"./DBox-C8rcQ_nM.js";import{P as n}from"./config-C3iYXcFk.js";import{d as R}from"./constants-CyI_OqvZ.js";import{D as L}from"./DChip-aiXNt5f7.js";import{D as t}from"./DIcon-B-Z3ctr_.js";import"./iframe-ZEkJrePL.js";import"./index-DDckYkdi.js";import"./DContext-CrXsNpUv.js";import"./index-CBp5p8Gq.js";import"./index-Dp0--wXr.js";import"./useMediaBreakpointUp-DEwRWCy4.js";const X={title:"Design System/Components/Tabs",component:e,parameters:{docs:{description:{component:`
Wrapper around Bootstrap Navs & Tabs.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Navs & Tabs](https://getbootstrap.com/docs/5.3/components/navs-tabs/)

## CSS Variables
The Bootstrap documentation provides details on the default [Tabs CSS Variables](https://getbootstrap.com/docs/5.3/components/navs-tabs/#css)

| Variable                                              | Classes                               | Type            | Description                        |
|-------------------------------------------------------|---------------------------------------|-----------------|------------------------------------|
| --${n}nav-tabs-nav-gap                        | .nav-pills, .nav-underline, .nav-tabs | css length unit | Space between nav links            |
| --${n}nav-tabs-link-border-active-font-weight | .nav-pills, .nav-underline, .nav-tabs | css font weight | Nav link border active font weight |
| --${n}nav-tabs-border-color                   | .nav-pills, .nav-underline, .nav-tabs | css color       | Nav border color                   |
| --${n}nav-link-padding-x                      | .nav-pills, .nav-underline, .nav-tabs | css length unit | Nav link padding horizontal        |
| --${n}nav-link-padding-y                      | .nav-pills, .nav-underline, .nav-tabs | css length unit | Nav link padding vertical          |
| --${n}nav-link-hover-bg                       | .nav-pills, .nav-underline, .nav-tabs | css color       | Nav link hover background          |
| --${n}nav-link-hover-color                    | .nav-pills, .nav-underline, .nav-tabs | css color       | Nav link hover color               |
        `}}},argTypes:{className:{control:"text",type:"string"},style:{control:"object"},vertical:{type:"boolean",control:"boolean",table:{defaultValue:{summary:"false"}}},variant:{type:"string",options:R,control:"select",table:{defaultValue:{summary:"underline"}}}},tags:["autodocs"]},o={decorators:[s=>a.jsx("div",{style:{width:"800px",height:"400px"},children:a.jsx(s,{})})],render:s=>a.jsxs(e,{...s,children:[a.jsxs(e.Tab,{tab:"overview",children:[a.jsx("h4",{className:"mb-4",children:"Account Overview"}),a.jsx("p",{children:"Welcome to your account dashboard. Here you can view a comprehensive summary of your financial activity, including your current balance, recent transactions, and upcoming payments."}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"Current Balance:"})," ","$12,450.00"]}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"Available Credit:"})," ","$7,550.00"]}),a.jsx("p",{children:"Your last transaction was processed on March 15, 2024, for $150.00 at Online Store Inc. You have 3 pending transactions that will be reflected in your account within the next 2-3 business days."})]}),a.jsxs(e.Tab,{tab:"settings",children:[a.jsx("h4",{className:"mb-4",children:"Account Settings"}),a.jsx("p",{children:"Manage your account preferences and personal information. You can update your contact details, communication preferences, and security settings from this section."}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"Email:"})," ","user@example.com"]}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"Phone:"})," ","+1 (555) 123-4567"]}),a.jsx("p",{children:"Enable two-factor authentication for enhanced security. We recommend reviewing your settings regularly to ensure your account information is up to date and secure."})]})]}),args:{defaultSelected:"overview",variant:"underline",options:[{label:"Overview",tab:"overview"},{label:"Settings",tab:"settings"},{label:a.jsxs("span",{className:"d-flex gap-2 align-items-center",children:["Notifications",a.jsx(L,{color:"info",style:{"--bs-chip-font-size":"10px",lineHeight:1},className:"p-1",text:"2"})]}),tab:"empty"}],className:"mb-8",vertical:!1}},i={decorators:[s=>a.jsx(r,{style:{width:"800px",height:"400px"},children:a.jsx(s,{})})],render:s=>a.jsxs(e,{...s,children:[a.jsxs(e.Tab,{tab:"profile",children:[a.jsx("h4",{className:"mb-4",children:"Profile Information"}),a.jsx("p",{children:"Keep your personal information up to date. This information is used to verify your identity and communicate important account updates."}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"Full Name:"})," ","John Doe"]}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"Date of Birth:"})," ","January 15, 1990"]}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"Address:"})," ","123 Main Street, Apt 4B, New York, NY 10001"]}),a.jsx("p",{children:"Make sure all information is accurate to avoid any service interruptions. You can update these details at any time."})]}),a.jsxs(e.Tab,{tab:"security",children:[a.jsx("h4",{className:"mb-4",children:"Security Settings"}),a.jsx("p",{children:"Protect your account with robust security measures. We recommend enabling all available security features to keep your account safe from unauthorized access."}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"Two-Factor Authentication:"})," ","Enabled"]}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"Last Password Change:"})," ","February 28, 2024"]}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"Login Alerts:"})," ","Enabled via email and SMS"]}),a.jsx("p",{children:"Review your security settings regularly and update your password every 90 days for optimal account protection."})]})]}),args:{defaultSelected:"security",className:"me-8",options:[{label:"Profile",tab:"profile"},{label:"Security",tab:"security"},{label:"Privacy",tab:"empty"}],vertical:!0}},c={decorators:[s=>a.jsx(r,{style:{width:"800px",height:"400px"},children:a.jsx(s,{})})],render:s=>a.jsxs(e,{...s,children:[a.jsxs(e.Tab,{tab:"details",children:[a.jsx("h4",{className:"mb-4",children:"Transaction Details"}),a.jsx("p",{children:"Access detailed information about your most recent transactions, including merchant information, transaction amounts, and processing status."}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"Latest Transaction:"})," ","Coffee Shop - $4.50 (March 20, 2024)"]}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"Pending:"})," ","Online Purchase - $89.99 (Processing)"]}),a.jsx("p",{children:"All transactions are processed securely and typically appear in your account within 1-2 business days. You can dispute any unauthorized transactions directly from this section."})]}),a.jsxs(e.Tab,{tab:"history",children:[a.jsx("h4",{className:"mb-4",children:"Transaction History"}),a.jsx("p",{children:"Review your complete transaction history spanning the last 12 months. You can filter by date range, amount, merchant, or transaction type to find specific entries."}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"Total Transactions (Last 30 days):"})," ","47"]}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"Total Spent:"})," ","$2,340.50"]}),a.jsx("p",{children:"Export your transaction history to CSV or PDF format for your records. Historical data older than 12 months can be requested through customer support."})]})]}),args:{defaultSelected:"history",options:[{label:"Details",tab:"details"},{label:"History",tab:"history"},{label:"Reports",tab:"empty"}],vertical:!1,variant:"pills",className:"mb-8"}},l={decorators:[s=>a.jsx(r,{style:{width:"800px",height:"400px"},children:a.jsx(s,{})})],render:s=>a.jsxs(e,{...s,children:[a.jsxs(e.Tab,{tab:"details",children:[a.jsx("h4",{className:"mb-4",children:"Transaction Details"}),a.jsx("p",{children:"Access detailed information about your most recent transactions, including merchant information, transaction amounts, and processing status."}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"Latest Transaction:"})," ","Coffee Shop - $4.50 (March 20, 2024)"]}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"Pending:"})," ","Online Purchase - $89.99 (Processing)"]}),a.jsx("p",{children:"All transactions are processed securely and typically appear in your account within 1-2 business days. You can dispute any unauthorized transactions directly from this section."})]}),a.jsxs(e.Tab,{tab:"history",children:[a.jsx("h4",{className:"mb-4",children:"Transaction History"}),a.jsx("p",{children:"Review your complete transaction history spanning the last 12 months. You can filter by date range, amount, merchant, or transaction type to find specific entries."}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"Total Transactions (Last 30 days):"})," ","47"]}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"Total Spent:"})," ","$2,340.50"]}),a.jsx("p",{children:"Export your transaction history to CSV or PDF format for your records. Historical data older than 12 months can be requested through customer support."})]})]}),args:{defaultSelected:"history",options:[{label:"Details",tab:"details"},{label:"History",tab:"history"},{label:"Reports",tab:"empty"}],vertical:!1,variant:"toggle-button-group",className:"mb-8"}},p={decorators:[s=>a.jsx(r,{style:{width:"800px",height:"400px"},children:a.jsx(s,{})})],render:s=>a.jsxs(e,{...s,children:[a.jsxs(e.Tab,{tab:"details",children:[a.jsx("h4",{className:"mb-4",children:"Transaction Details"}),a.jsx("p",{children:"Access detailed information about your most recent transactions, including merchant information, transaction amounts, and processing status."}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"Latest Transaction:"})," ","Coffee Shop - $4.50 (March 20, 2024)"]}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"Pending:"})," ","Online Purchase - $89.99 (Processing)"]}),a.jsx("p",{children:"All transactions are processed securely and typically appear in your account within 1-2 business days. You can dispute any unauthorized transactions directly from this section."})]}),a.jsxs(e.Tab,{tab:"history",children:[a.jsx("h4",{className:"mb-4",children:"Transaction History"}),a.jsx("p",{children:"Review your complete transaction history spanning the last 12 months. You can filter by date range, amount, merchant, or transaction type to find specific entries."}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"Total Transactions (Last 30 days):"})," ","47"]}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"Total Spent:"})," ","$2,340.50"]}),a.jsx("p",{children:"Export your transaction history to CSV or PDF format for your records. Historical data older than 12 months can be requested through customer support."})]})]}),args:{defaultSelected:"history",options:[{label:a.jsxs("span",{className:"d-flex flex-column gap-2",children:[a.jsx(t,{icon:"Info"}),"Detail"]}),tab:"details"},{label:a.jsxs("span",{className:"d-flex flex-column gap-2",children:[a.jsx(t,{icon:"FileCheck"}),"History"]}),tab:"history"},{label:a.jsxs("span",{className:"d-flex flex-column gap-2",children:[a.jsx(t,{icon:"FlagTriangleLeft"}),"Reports"]}),tab:"empty"}],vertical:!1,variant:"pills",className:"mb-8"}},d={decorators:[s=>a.jsx(r,{style:{width:"800px",height:"400px"},children:a.jsx(s,{})})],render:s=>a.jsxs(e,{...s,children:[a.jsxs(e.Tab,{tab:"details",children:[a.jsx("h4",{className:"mb-4",children:"Transaction Details"}),a.jsx("p",{children:"Access detailed information about your most recent transactions, including merchant information, transaction amounts, and processing status."}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"Latest Transaction:"})," ","Coffee Shop - $4.50 (March 20, 2024)"]}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"Pending:"})," ","Online Purchase - $89.99 (Processing)"]}),a.jsx("p",{children:"All transactions are processed securely and typically appear in your account within 1-2 business days. You can dispute any unauthorized transactions directly from this section."})]}),a.jsxs(e.Tab,{tab:"history",children:[a.jsx("h4",{className:"mb-4",children:"Transaction History"}),a.jsx("p",{children:"Review your complete transaction history spanning the last 12 months. You can filter by date range, amount, merchant, or transaction type to find specific entries."}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"Total Transactions (Last 30 days):"})," ","47"]}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"Total Spent:"})," ","$2,340.50"]}),a.jsx("p",{children:"Export your transaction history to CSV or PDF format for your records. Historical data older than 12 months can be requested through customer support."})]})]}),args:{defaultSelected:"history",options:[{label:a.jsxs("span",{className:"d-flex flex-column gap-2",children:[a.jsx(t,{icon:"Info"}),"Detail"]}),tab:"details"},{label:a.jsxs("span",{className:"d-flex flex-column gap-2",children:[a.jsx(t,{icon:"FileCheck"}),"History"]}),tab:"history"},{label:a.jsxs("span",{className:"d-flex flex-column gap-2",children:[a.jsx(t,{icon:"FlagTriangleLeft"}),"Reports"]}),tab:"reports"},{label:a.jsxs("span",{className:"d-flex flex-column gap-2",children:[a.jsx(t,{icon:"ChartColumn"}),"Activities"]}),tab:"activities"},{label:a.jsxs("span",{className:"d-flex flex-column gap-2",children:[a.jsx(t,{icon:"ChartPie"}),"Products"]}),tab:"products"}],vertical:!1,variant:"pills",className:"mb-8 ",classNameTab:"flex-grow-1"}},m={decorators:[s=>a.jsx(r,{style:{width:"800px",height:"400px"},children:a.jsx(s,{})})],render:s=>a.jsxs(e,{...s,children:[a.jsxs(e.Tab,{tab:"general",children:[a.jsx("h4",{className:"mb-4",children:"General Settings"}),a.jsx("p",{children:"Customize your application experience with these general settings. Choose your preferred language, time zone, and display options to personalize your interface."}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"Language:"})," ","English (US)"]}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"Time Zone:"})," ","Eastern Standard Time (EST)"]}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"Currency Display:"})," ","USD ($)"]}),a.jsx("p",{children:"These settings will be applied across all your devices. Changes take effect immediately and are synchronized automatically."})]}),a.jsxs(e.Tab,{tab:"notifications",children:[a.jsx("h4",{className:"mb-4",children:"Notification Preferences"}),a.jsx("p",{children:"Control how you receive important updates and alerts. You can choose to receive notifications via email, SMS, or push notifications on your mobile device."}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"Transaction Alerts:"})," ","Enabled for amounts over $100"]}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"Marketing Communications:"})," ","Opted out"]}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"Security Alerts:"})," ","Enabled (Email + SMS)"]}),a.jsx("p",{children:"We recommend keeping security alerts enabled to stay informed about any suspicious activity on your account. You can adjust notification frequency in advanced settings."})]})]}),args:{defaultSelected:"notifications",options:[{label:"General",tab:"general"},{label:"Notifications",tab:"notifications"},{label:"Advanced",tab:"empty"}],vertical:!0,variant:"pills",className:"me-8"}},h={decorators:[s=>a.jsx("div",{style:{width:"800px",height:"400px"},children:a.jsx(s,{})})],render:s=>a.jsx(r,{className:"p-8",style:{width:"800px"},children:a.jsxs(e,{...s,children:[a.jsxs(e.Tab,{tab:"dashboard",children:[a.jsx("h4",{className:"mb-4",children:"Dashboard Overview"}),a.jsx("p",{children:"Welcome to your comprehensive dashboard. This central hub provides real-time insights into your account activity, financial health, and important notifications."}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"Account Balance:"})," ","$12,450.00 (+5.2% from last month)"]}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"Monthly Spending:"})," ","$3,240.75 (within budget)"]}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"Upcoming Bills:"})," ","3 payments due in the next 7 days"]}),a.jsx("p",{children:"Your financial summary shows a positive trend this quarter. Review your spending patterns and savings goals to maintain healthy financial habits. Quick actions are available below for common tasks like transfers and bill payments."})]}),a.jsxs(e.Tab,{tab:"analytics",children:[a.jsx("h4",{className:"mb-4",children:"Financial Analytics"}),a.jsx("p",{children:"Dive deep into your financial data with comprehensive analytics and visual reports. Track your spending patterns, identify savings opportunities, and monitor your progress toward financial goals."}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"Spending by Category:"})," ","Groceries (30%), Transportation (20%), Entertainment (15%)"]}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"Monthly Trend:"})," ","Average spending decreased by 8% compared to previous quarter"]}),a.jsxs("p",{className:"mb-2",children:[a.jsx("strong",{children:"Savings Rate:"})," ","22% of income (above recommended 20% target)"]}),a.jsx("p",{children:"Your spending analysis reveals opportunities to optimize your budget. Consider reviewing recurring subscriptions and discretionary expenses. Export detailed reports to share with your financial advisor or for tax preparation purposes."})]})]})}),args:{defaultSelected:"analytics",options:[{label:"Dashboard",tab:"dashboard"},{label:"Analytics",tab:"analytics"},{label:"Reports",tab:"empty"}],vertical:!1,variant:"tabs",className:"mb-8"}};var u,b,y;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '800px',
    height: '400px'
  }}>
        <Story />
      </div>],
  render: args => <DTabs {...args}>
      <DTabs.Tab tab="overview">
        <h4 className="mb-4">Account Overview</h4>
        <p>
          Welcome to your account dashboard. Here you can view a comprehensive
          summary of your financial activity, including your current balance,
          recent transactions, and upcoming payments.
        </p>
        <p className="mb-2">
          <strong>Current Balance:</strong>
          {' '}
          $12,450.00
        </p>
        <p className="mb-2">
          <strong>Available Credit:</strong>
          {' '}
          $7,550.00
        </p>
        <p>
          Your last transaction was processed on March 15, 2024, for $150.00
          at Online Store Inc. You have 3 pending transactions that will be
          reflected in your account within the next 2-3 business days.
        </p>
      </DTabs.Tab>
      <DTabs.Tab tab="settings">
        <h4 className="mb-4">Account Settings</h4>
        <p>
          Manage your account preferences and personal information. You can
          update your contact details, communication preferences, and security
          settings from this section.
        </p>
        <p className="mb-2">
          <strong>Email:</strong>
          {' '}
          user@example.com
        </p>
        <p className="mb-2">
          <strong>Phone:</strong>
          {' '}
          +1 (555) 123-4567
        </p>
        <p>
          Enable two-factor authentication for enhanced security. We recommend
          reviewing your settings regularly to ensure your account information
          is up to date and secure.
        </p>
      </DTabs.Tab>
    </DTabs>,
  args: {
    defaultSelected: 'overview',
    variant: 'underline',
    options: [{
      label: 'Overview',
      tab: 'overview'
    }, {
      label: 'Settings',
      tab: 'settings'
    }, {
      label: <span className="d-flex gap-2 align-items-center">
            Notifications
            <DChip color="info" style={{
          '--bs-chip-font-size': '10px',
          lineHeight: 1
        }} className="p-1" text="2" />
          </span>,
      tab: 'empty'
    }],
    className: 'mb-8',
    vertical: false
  }
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var g,x,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  decorators: [Story => <DBox style={{
    width: '800px',
    height: '400px'
  }}>
        <Story />
      </DBox>],
  render: args => <DTabs {...args}>
      <DTabs.Tab tab="profile">
        <h4 className="mb-4">Profile Information</h4>
        <p>
          Keep your personal information up to date. This information is used
          to verify your identity and communicate important account updates.
        </p>
        <p className="mb-2">
          <strong>Full Name:</strong>
          {' '}
          John Doe
        </p>
        <p className="mb-2">
          <strong>Date of Birth:</strong>
          {' '}
          January 15, 1990
        </p>
        <p className="mb-2">
          <strong>Address:</strong>
          {' '}
          123 Main Street, Apt 4B, New York, NY 10001
        </p>
        <p>
          Make sure all information is accurate to avoid any service
          interruptions. You can update these details at any time.
        </p>
      </DTabs.Tab>
      <DTabs.Tab tab="security">
        <h4 className="mb-4">Security Settings</h4>
        <p>
          Protect your account with robust security measures. We recommend
          enabling all available security features to keep your account safe
          from unauthorized access.
        </p>
        <p className="mb-2">
          <strong>Two-Factor Authentication:</strong>
          {' '}
          Enabled
        </p>
        <p className="mb-2">
          <strong>Last Password Change:</strong>
          {' '}
          February 28, 2024
        </p>
        <p className="mb-2">
          <strong>Login Alerts:</strong>
          {' '}
          Enabled via email and SMS
        </p>
        <p>
          Review your security settings regularly and update your password
          every 90 days for optimal account protection.
        </p>
      </DTabs.Tab>
    </DTabs>,
  args: {
    defaultSelected: 'security',
    className: 'me-8',
    options: [{
      label: 'Profile',
      tab: 'profile'
    }, {
      label: 'Security',
      tab: 'security'
    }, {
      label: 'Privacy',
      tab: 'empty'
    }],
    vertical: true
  }
}`,...(f=(x=i.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var v,j,T;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  decorators: [Story => <DBox style={{
    width: '800px',
    height: '400px'
  }}>
        <Story />
      </DBox>],
  render: args => <DTabs {...args}>
      <DTabs.Tab tab="details">
        <h4 className="mb-4">Transaction Details</h4>
        <p>
          Access detailed information about your most recent transactions,
          including merchant information, transaction amounts, and processing
          status.
        </p>
        <p className="mb-2">
          <strong>Latest Transaction:</strong>
          {' '}
          Coffee Shop - $4.50 (March 20, 2024)
        </p>
        <p className="mb-2">
          <strong>Pending:</strong>
          {' '}
          Online Purchase - $89.99 (Processing)
        </p>
        <p>
          All transactions are processed securely and typically appear in your
          account within 1-2 business days. You can dispute any unauthorized
          transactions directly from this section.
        </p>
      </DTabs.Tab>
      <DTabs.Tab tab="history">
        <h4 className="mb-4">Transaction History</h4>
        <p>
          Review your complete transaction history spanning the last 12 months.
          You can filter by date range, amount, merchant, or transaction type
          to find specific entries.
        </p>
        <p className="mb-2">
          <strong>Total Transactions (Last 30 days):</strong>
          {' '}
          47
        </p>
        <p className="mb-2">
          <strong>Total Spent:</strong>
          {' '}
          $2,340.50
        </p>
        <p>
          Export your transaction history to CSV or PDF format for your records.
          Historical data older than 12 months can be requested through customer
          support.
        </p>
      </DTabs.Tab>
    </DTabs>,
  args: {
    defaultSelected: 'history',
    options: [{
      label: 'Details',
      tab: 'details'
    }, {
      label: 'History',
      tab: 'history'
    }, {
      label: 'Reports',
      tab: 'empty'
    }],
    vertical: false,
    variant: 'pills',
    className: 'mb-8'
  }
}`,...(T=(j=c.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var N,D,S;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  decorators: [Story => <DBox style={{
    width: '800px',
    height: '400px'
  }}>
        <Story />
      </DBox>],
  render: args => <DTabs {...args}>
      <DTabs.Tab tab="details">
        <h4 className="mb-4">Transaction Details</h4>
        <p>
          Access detailed information about your most recent transactions,
          including merchant information, transaction amounts, and processing
          status.
        </p>
        <p className="mb-2">
          <strong>Latest Transaction:</strong>
          {' '}
          Coffee Shop - $4.50 (March 20, 2024)
        </p>
        <p className="mb-2">
          <strong>Pending:</strong>
          {' '}
          Online Purchase - $89.99 (Processing)
        </p>
        <p>
          All transactions are processed securely and typically appear in your
          account within 1-2 business days. You can dispute any unauthorized
          transactions directly from this section.
        </p>
      </DTabs.Tab>
      <DTabs.Tab tab="history">
        <h4 className="mb-4">Transaction History</h4>
        <p>
          Review your complete transaction history spanning the last 12 months.
          You can filter by date range, amount, merchant, or transaction type
          to find specific entries.
        </p>
        <p className="mb-2">
          <strong>Total Transactions (Last 30 days):</strong>
          {' '}
          47
        </p>
        <p className="mb-2">
          <strong>Total Spent:</strong>
          {' '}
          $2,340.50
        </p>
        <p>
          Export your transaction history to CSV or PDF format for your records.
          Historical data older than 12 months can be requested through customer
          support.
        </p>
      </DTabs.Tab>
    </DTabs>,
  args: {
    defaultSelected: 'history',
    options: [{
      label: 'Details',
      tab: 'details'
    }, {
      label: 'History',
      tab: 'history'
    }, {
      label: 'Reports',
      tab: 'empty'
    }],
    vertical: false,
    variant: 'toggle-button-group',
    className: 'mb-8'
  }
}`,...(S=(D=l.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var w,P,C;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  decorators: [Story => <DBox style={{
    width: '800px',
    height: '400px'
  }}>
        <Story />
      </DBox>],
  render: args => <DTabs {...args}>
      <DTabs.Tab tab="details">
        <h4 className="mb-4">Transaction Details</h4>
        <p>
          Access detailed information about your most recent transactions,
          including merchant information, transaction amounts, and processing
          status.
        </p>
        <p className="mb-2">
          <strong>Latest Transaction:</strong>
          {' '}
          Coffee Shop - $4.50 (March 20, 2024)
        </p>
        <p className="mb-2">
          <strong>Pending:</strong>
          {' '}
          Online Purchase - $89.99 (Processing)
        </p>
        <p>
          All transactions are processed securely and typically appear in your
          account within 1-2 business days. You can dispute any unauthorized
          transactions directly from this section.
        </p>
      </DTabs.Tab>
      <DTabs.Tab tab="history">
        <h4 className="mb-4">Transaction History</h4>
        <p>
          Review your complete transaction history spanning the last 12 months.
          You can filter by date range, amount, merchant, or transaction type
          to find specific entries.
        </p>
        <p className="mb-2">
          <strong>Total Transactions (Last 30 days):</strong>
          {' '}
          47
        </p>
        <p className="mb-2">
          <strong>Total Spent:</strong>
          {' '}
          $2,340.50
        </p>
        <p>
          Export your transaction history to CSV or PDF format for your records.
          Historical data older than 12 months can be requested through customer
          support.
        </p>
      </DTabs.Tab>
    </DTabs>,
  args: {
    defaultSelected: 'history',
    options: [{
      label: <span className="d-flex flex-column gap-2">
            <DIcon icon="Info" />
            Detail
          </span>,
      tab: 'details'
    }, {
      label: <span className="d-flex flex-column gap-2">
            <DIcon icon="FileCheck" />
            History
          </span>,
      tab: 'history'
    }, {
      label: <span className="d-flex flex-column gap-2">
            <DIcon icon="FlagTriangleLeft" />
            Reports
          </span>,
      tab: 'empty'
    }],
    vertical: false,
    variant: 'pills',
    className: 'mb-8'
  }
}`,...(C=(P=p.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var A,$,k;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  decorators: [Story => <DBox style={{
    width: '800px',
    height: '400px'
  }}>
        <Story />
      </DBox>],
  render: args => <DTabs {...args}>
      <DTabs.Tab tab="details">
        <h4 className="mb-4">Transaction Details</h4>
        <p>
          Access detailed information about your most recent transactions,
          including merchant information, transaction amounts, and processing
          status.
        </p>
        <p className="mb-2">
          <strong>Latest Transaction:</strong>
          {' '}
          Coffee Shop - $4.50 (March 20, 2024)
        </p>
        <p className="mb-2">
          <strong>Pending:</strong>
          {' '}
          Online Purchase - $89.99 (Processing)
        </p>
        <p>
          All transactions are processed securely and typically appear in your
          account within 1-2 business days. You can dispute any unauthorized
          transactions directly from this section.
        </p>
      </DTabs.Tab>
      <DTabs.Tab tab="history">
        <h4 className="mb-4">Transaction History</h4>
        <p>
          Review your complete transaction history spanning the last 12 months.
          You can filter by date range, amount, merchant, or transaction type
          to find specific entries.
        </p>
        <p className="mb-2">
          <strong>Total Transactions (Last 30 days):</strong>
          {' '}
          47
        </p>
        <p className="mb-2">
          <strong>Total Spent:</strong>
          {' '}
          $2,340.50
        </p>
        <p>
          Export your transaction history to CSV or PDF format for your records.
          Historical data older than 12 months can be requested through customer
          support.
        </p>
      </DTabs.Tab>
    </DTabs>,
  args: {
    defaultSelected: 'history',
    options: [{
      label: <span className="d-flex flex-column gap-2">
            <DIcon icon="Info" />
            Detail
          </span>,
      tab: 'details'
    }, {
      label: <span className="d-flex flex-column gap-2">
            <DIcon icon="FileCheck" />
            History
          </span>,
      tab: 'history'
    }, {
      label: <span className="d-flex flex-column gap-2">
            <DIcon icon="FlagTriangleLeft" />
            Reports
          </span>,
      tab: 'reports'
    }, {
      label: <span className="d-flex flex-column gap-2">
            <DIcon icon="ChartColumn" />
            Activities
          </span>,
      tab: 'activities'
    }, {
      label: <span className="d-flex flex-column gap-2">
            <DIcon icon="ChartPie" />
            Products
          </span>,
      tab: 'products'
    }],
    vertical: false,
    variant: 'pills',
    className: 'mb-8 ',
    classNameTab: 'flex-grow-1'
  }
}`,...(k=($=d.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var Y,E,B;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  decorators: [Story => <DBox style={{
    width: '800px',
    height: '400px'
  }}>
        <Story />
      </DBox>],
  render: args => <DTabs {...args}>
      <DTabs.Tab tab="general">
        <h4 className="mb-4">General Settings</h4>
        <p>
          Customize your application experience with these general settings.
          Choose your preferred language, time zone, and display options to
          personalize your interface.
        </p>
        <p className="mb-2">
          <strong>Language:</strong>
          {' '}
          English (US)
        </p>
        <p className="mb-2">
          <strong>Time Zone:</strong>
          {' '}
          Eastern Standard Time (EST)
        </p>
        <p className="mb-2">
          <strong>Currency Display:</strong>
          {' '}
          USD ($)
        </p>
        <p>
          These settings will be applied across all your devices. Changes take
          effect immediately and are synchronized automatically.
        </p>
      </DTabs.Tab>
      <DTabs.Tab tab="notifications">
        <h4 className="mb-4">Notification Preferences</h4>
        <p>
          Control how you receive important updates and alerts. You can choose
          to receive notifications via email, SMS, or push notifications on
          your mobile device.
        </p>
        <p className="mb-2">
          <strong>Transaction Alerts:</strong>
          {' '}
          Enabled for amounts over $100
        </p>
        <p className="mb-2">
          <strong>Marketing Communications:</strong>
          {' '}
          Opted out
        </p>
        <p className="mb-2">
          <strong>Security Alerts:</strong>
          {' '}
          Enabled (Email + SMS)
        </p>
        <p>
          We recommend keeping security alerts enabled to stay informed about
          any suspicious activity on your account. You can adjust notification
          frequency in advanced settings.
        </p>
      </DTabs.Tab>
    </DTabs>,
  args: {
    defaultSelected: 'notifications',
    options: [{
      label: 'General',
      tab: 'general'
    }, {
      label: 'Notifications',
      tab: 'notifications'
    }, {
      label: 'Advanced',
      tab: 'empty'
    }],
    vertical: true,
    variant: 'pills',
    className: 'me-8'
  }
}`,...(B=(E=m.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var H,M,F;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '800px',
    height: '400px'
  }}>
        <Story />
      </div>],
  render: args => <DBox className="p-8" style={{
    width: '800px'
  }}>
      <DTabs {...args}>
        <DTabs.Tab tab="dashboard">
          <h4 className="mb-4">Dashboard Overview</h4>
          <p>
            Welcome to your comprehensive dashboard. This central hub provides
            real-time insights into your account activity, financial health,
            and important notifications.
          </p>
          <p className="mb-2">
            <strong>Account Balance:</strong>
            {' '}
            $12,450.00 (+5.2% from last month)
          </p>
          <p className="mb-2">
            <strong>Monthly Spending:</strong>
            {' '}
            $3,240.75 (within budget)
          </p>
          <p className="mb-2">
            <strong>Upcoming Bills:</strong>
            {' '}
            3 payments due in the next 7 days
          </p>
          <p>
            Your financial summary shows a positive trend this quarter. Review
            your spending patterns and savings goals to maintain healthy
            financial habits. Quick actions are available below for common tasks
            like transfers and bill payments.
          </p>
        </DTabs.Tab>
        <DTabs.Tab tab="analytics">
          <h4 className="mb-4">Financial Analytics</h4>
          <p>
            Dive deep into your financial data with comprehensive analytics and
            visual reports. Track your spending patterns, identify savings
            opportunities, and monitor your progress toward financial goals.
          </p>
          <p className="mb-2">
            <strong>Spending by Category:</strong>
            {' '}
            Groceries (30%), Transportation (20%), Entertainment (15%)
          </p>
          <p className="mb-2">
            <strong>Monthly Trend:</strong>
            {' '}
            Average spending decreased by 8% compared to previous quarter
          </p>
          <p className="mb-2">
            <strong>Savings Rate:</strong>
            {' '}
            22% of income (above recommended 20% target)
          </p>
          <p>
            Your spending analysis reveals opportunities to optimize your budget.
            Consider reviewing recurring subscriptions and discretionary expenses.
            Export detailed reports to share with your financial advisor or for
            tax preparation purposes.
          </p>
        </DTabs.Tab>
      </DTabs>
    </DBox>,
  args: {
    defaultSelected: 'analytics',
    options: [{
      label: 'Dashboard',
      tab: 'dashboard'
    }, {
      label: 'Analytics',
      tab: 'analytics'
    }, {
      label: 'Reports',
      tab: 'empty'
    }],
    vertical: false,
    variant: 'tabs',
    className: 'mb-8'
  }
}`,...(F=(M=h.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};const aa=["Default","Vertical","Pills","ToggleButtonGroup","PillsWithIcons","PillsWithIconsFull","VerticalPills","Tabs"];export{o as Default,c as Pills,p as PillsWithIcons,d as PillsWithIconsFull,h as Tabs,l as ToggleButtonGroup,i as Vertical,m as VerticalPills,aa as __namedExportsOrder,X as default};
