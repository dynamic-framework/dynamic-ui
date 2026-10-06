import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as s}from"./DTabs-CxESNjjc.js";import{D as r}from"./DBox-Dt8mDl-c.js";import{P as t}from"./config-7dXXkQRG.js";import{d as G}from"./constants-Cykb4qS-.js";import{D as U}from"./DChip-BoOPTX-P.js";import{D as n}from"./DIcon-CTNbRGzm.js";import"./iframe-BOlGrI6L.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DowJ8Qf7.js";import"./DContext-BsbKwSe9.js";import"./index-B7vmrvBm.js";import"./index-1yCPQ3pT.js";import"./index-BPJnJB5S.js";import"./useMediaBreakpointUp-CBOESKxy.js";const le={title:"Design System/Components/Tabs",component:s,parameters:{docs:{description:{component:`
Wrapper around Bootstrap Navs & Tabs.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Navs & Tabs](https://getbootstrap.com/docs/5.3/components/navs-tabs/)

## CSS Variables
The Bootstrap documentation provides details on the default [Tabs CSS Variables](https://getbootstrap.com/docs/5.3/components/navs-tabs/#css)

| Variable                                              | Classes                               | Type            | Description                        |
|-------------------------------------------------------|---------------------------------------|-----------------|------------------------------------|
| --${t}nav-tabs-nav-gap                        | .nav-pills, .nav-underline, .nav-tabs | css length unit | Space between nav links            |
| --${t}nav-tabs-link-border-active-font-weight | .nav-pills, .nav-underline, .nav-tabs | css font weight | Nav link border active font weight |
| --${t}nav-tabs-border-color                   | .nav-pills, .nav-underline, .nav-tabs | css color       | Nav border color                   |
| --${t}nav-link-padding-x                      | .nav-pills, .nav-underline, .nav-tabs | css length unit | Nav link padding horizontal        |
| --${t}nav-link-padding-y                      | .nav-pills, .nav-underline, .nav-tabs | css length unit | Nav link padding vertical          |
| --${t}nav-link-hover-bg                       | .nav-pills, .nav-underline, .nav-tabs | css color       | Nav link hover background          |
| --${t}nav-link-hover-color                    | .nav-pills, .nav-underline, .nav-tabs | css color       | Nav link hover color               |

Dynamic adds its own variable for the panels container:

| Variable                                              | Classes                               | Type            | Description                        |
|-------------------------------------------------------|---------------------------------------|-----------------|------------------------------------|
| --${t}tabs-content-margin-bottom              | .d-tabs                               | css length unit | Space below the panels container   |

The panels container is only rendered when \`DTabs\` has children. Used as pure navigation (no \`DTabs.Tab\`, reacting to \`onChange\`), it renders just the tab bar.
        `}}},argTypes:{className:{control:"text",type:"string",table:{category:"Appearance"}},classNameContent:{control:"text",type:"string",description:"Class for the panels container. Only rendered when `DTabs` has children.",table:{category:"Appearance"}},style:{control:"object",table:{category:"Appearance"}},vertical:{type:"boolean",control:"boolean",table:{defaultValue:{summary:"false"},category:"Appearance"}},variant:{type:"string",options:G,control:"select",table:{defaultValue:{summary:"underline"},category:"Appearance"}}},tags:["autodocs"]},o={decorators:[a=>e.jsx("div",{style:{width:"800px",height:"400px"},children:e.jsx(a,{})})],render:a=>e.jsxs(s,{...a,children:[e.jsxs(s.Tab,{tab:"overview",children:[e.jsx("h4",{className:"mb-4",children:"Account Overview"}),e.jsx("p",{children:"Welcome to your account dashboard. Here you can view a comprehensive summary of your financial activity, including your current balance, recent transactions, and upcoming payments."}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Current Balance:"})," ","$12,450.00"]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Available Credit:"})," ","$7,550.00"]}),e.jsx("p",{children:"Your last transaction was processed on March 15, 2024, for $150.00 at Online Store Inc. You have 3 pending transactions that will be reflected in your account within the next 2-3 business days."})]}),e.jsxs(s.Tab,{tab:"settings",children:[e.jsx("h4",{className:"mb-4",children:"Account Settings"}),e.jsx("p",{children:"Manage your account preferences and personal information. You can update your contact details, communication preferences, and security settings from this section."}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Email:"})," ","user@example.com"]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Phone:"})," ","+1 (555) 123-4567"]}),e.jsx("p",{children:"Enable two-factor authentication for enhanced security. We recommend reviewing your settings regularly to ensure your account information is up to date and secure."})]})]}),argTypes:{defaultSelected:{control:"select",options:["overview","settings","empty"]}},args:{defaultSelected:"overview",variant:"underline",options:[{label:"Overview",tab:"overview"},{label:"Settings",tab:"settings"},{label:e.jsxs("span",{className:"d-flex gap-2 align-items-center justify-content-center",children:["Notifications",e.jsx(U,{color:"info",style:{"--bs-chip-font-size":"10px",lineHeight:1},className:"p-1",text:"2"})]}),tab:"empty"}],className:"mb-8",vertical:!1}},i={parameters:{docs:{description:{story:"Without `DTabs.Tab` children the panels container is not rendered, so the tab bar can drive navigation through `onChange` without leaving an empty node or margin below it."}}},args:{defaultSelected:"overview",options:[{label:"Overview",tab:"overview"},{label:"Settings",tab:"settings"}],ariaLabel:"Account sections"}},c={parameters:{docs:{description:{story:"`DTabs.Provider` owns the selection, so the tab bar and its `DTabs.Tab` panels can live in different parts of the layout. `DTabs` inside the provider does not need `defaultSelected`."}}},render:a=>e.jsx(s.Provider,{defaultSelected:"overview",children:e.jsxs("div",{className:"d-flex gap-6",children:[e.jsx("aside",{children:e.jsx(s,{...a})}),e.jsxs(r,{className:"flex-grow-1",children:[e.jsx(s.Tab,{tab:"overview",children:"Account overview panel."}),e.jsx(s.Tab,{tab:"settings",children:"Account settings panel."})]})]})}),args:{options:[{label:"Overview",tab:"overview"},{label:"Settings",tab:"settings"}],vertical:!0,variant:"pills",ariaLabel:"Account sections"}},l={decorators:[a=>e.jsx(r,{style:{width:"800px",height:"400px"},children:e.jsx(a,{})})],render:a=>e.jsxs(s,{...a,children:[e.jsxs(s.Tab,{tab:"profile",children:[e.jsx("h4",{className:"mb-4",children:"Profile Information"}),e.jsx("p",{children:"Keep your personal information up to date. This information is used to verify your identity and communicate important account updates."}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Full Name:"})," ","John Doe"]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Date of Birth:"})," ","January 15, 1990"]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Address:"})," ","123 Main Street, Apt 4B, New York, NY 10001"]}),e.jsx("p",{children:"Make sure all information is accurate to avoid any service interruptions. You can update these details at any time."})]}),e.jsxs(s.Tab,{tab:"security",children:[e.jsx("h4",{className:"mb-4",children:"Security Settings"}),e.jsx("p",{children:"Protect your account with robust security measures. We recommend enabling all available security features to keep your account safe from unauthorized access."}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Two-Factor Authentication:"})," ","Enabled"]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Last Password Change:"})," ","February 28, 2024"]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Login Alerts:"})," ","Enabled via email and SMS"]}),e.jsx("p",{children:"Review your security settings regularly and update your password every 90 days for optimal account protection."})]})]}),args:{defaultSelected:"security",className:"me-8",options:[{label:"Profile",tab:"profile"},{label:"Security",tab:"security"},{label:"Privacy",tab:"empty"}],vertical:!0}},d={decorators:[a=>e.jsx(r,{style:{width:"800px",height:"400px"},children:e.jsx(a,{})})],render:a=>e.jsxs(s,{...a,children:[e.jsxs(s.Tab,{tab:"details",children:[e.jsx("h4",{className:"mb-4",children:"Transaction Details"}),e.jsx("p",{children:"Access detailed information about your most recent transactions, including merchant information, transaction amounts, and processing status."}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Latest Transaction:"})," ","Coffee Shop - $4.50 (March 20, 2024)"]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Pending:"})," ","Online Purchase - $89.99 (Processing)"]}),e.jsx("p",{children:"All transactions are processed securely and typically appear in your account within 1-2 business days. You can dispute any unauthorized transactions directly from this section."})]}),e.jsxs(s.Tab,{tab:"history",children:[e.jsx("h4",{className:"mb-4",children:"Transaction History"}),e.jsx("p",{children:"Review your complete transaction history spanning the last 12 months. You can filter by date range, amount, merchant, or transaction type to find specific entries."}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Total Transactions (Last 30 days):"})," ","47"]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Total Spent:"})," ","$2,340.50"]}),e.jsx("p",{children:"Export your transaction history to CSV or PDF format for your records. Historical data older than 12 months can be requested through customer support."})]})]}),args:{defaultSelected:"history",options:[{label:"Details",tab:"details"},{label:"History",tab:"history"},{label:"Reports",tab:"empty"}],vertical:!1,variant:"pills",className:"mb-8"}},p={decorators:[a=>e.jsx(r,{style:{width:"800px",height:"400px"},children:e.jsx(a,{})})],render:a=>e.jsxs(s,{...a,children:[e.jsxs(s.Tab,{tab:"details",children:[e.jsx("h4",{className:"mb-4",children:"Transaction Details"}),e.jsx("p",{children:"Access detailed information about your most recent transactions, including merchant information, transaction amounts, and processing status."}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Latest Transaction:"})," ","Coffee Shop - $4.50 (March 20, 2024)"]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Pending:"})," ","Online Purchase - $89.99 (Processing)"]}),e.jsx("p",{children:"All transactions are processed securely and typically appear in your account within 1-2 business days. You can dispute any unauthorized transactions directly from this section."})]}),e.jsxs(s.Tab,{tab:"history",children:[e.jsx("h4",{className:"mb-4",children:"Transaction History"}),e.jsx("p",{children:"Review your complete transaction history spanning the last 12 months. You can filter by date range, amount, merchant, or transaction type to find specific entries."}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Total Transactions (Last 30 days):"})," ","47"]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Total Spent:"})," ","$2,340.50"]}),e.jsx("p",{children:"Export your transaction history to CSV or PDF format for your records. Historical data older than 12 months can be requested through customer support."})]})]}),args:{defaultSelected:"history",options:[{label:"Details",tab:"details"},{label:"History",tab:"history"},{label:"Reports",tab:"empty"}],vertical:!1,variant:"toggle-button-group",className:"mb-8 nav-fill"}},m={decorators:[a=>e.jsx(r,{style:{width:"800px",height:"400px"},children:e.jsx(a,{})})],render:a=>e.jsxs(s,{...a,children:[e.jsxs(s.Tab,{tab:"details",children:[e.jsx("h4",{className:"mb-4",children:"Transaction Details"}),e.jsx("p",{children:"Access detailed information about your most recent transactions, including merchant information, transaction amounts, and processing status."}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Latest Transaction:"})," ","Coffee Shop - $4.50 (March 20, 2024)"]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Pending:"})," ","Online Purchase - $89.99 (Processing)"]}),e.jsx("p",{children:"All transactions are processed securely and typically appear in your account within 1-2 business days. You can dispute any unauthorized transactions directly from this section."})]}),e.jsxs(s.Tab,{tab:"history",children:[e.jsx("h4",{className:"mb-4",children:"Transaction History"}),e.jsx("p",{children:"Review your complete transaction history spanning the last 12 months. You can filter by date range, amount, merchant, or transaction type to find specific entries."}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Total Transactions (Last 30 days):"})," ","47"]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Total Spent:"})," ","$2,340.50"]}),e.jsx("p",{children:"Export your transaction history to CSV or PDF format for your records. Historical data older than 12 months can be requested through customer support."})]})]}),args:{defaultSelected:"history",options:[{label:e.jsxs("span",{className:"d-flex flex-column gap-2",children:[e.jsx(n,{icon:"Info"}),"Detail"]}),tab:"details"},{label:e.jsxs("span",{className:"d-flex flex-column gap-2",children:[e.jsx(n,{icon:"FileCheck"}),"History"]}),tab:"history"},{label:e.jsxs("span",{className:"d-flex flex-column gap-2",children:[e.jsx(n,{icon:"FlagTriangleLeft"}),"Reports"]}),tab:"empty"}],vertical:!1,variant:"pills",className:"mb-8"}},h={decorators:[a=>e.jsx(r,{style:{width:"800px",height:"400px"},children:e.jsx(a,{})})],render:a=>e.jsxs(s,{...a,children:[e.jsxs(s.Tab,{tab:"details",children:[e.jsx("h4",{className:"mb-4",children:"Transaction Details"}),e.jsx("p",{children:"Access detailed information about your most recent transactions, including merchant information, transaction amounts, and processing status."}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Latest Transaction:"})," ","Coffee Shop - $4.50 (March 20, 2024)"]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Pending:"})," ","Online Purchase - $89.99 (Processing)"]}),e.jsx("p",{children:"All transactions are processed securely and typically appear in your account within 1-2 business days. You can dispute any unauthorized transactions directly from this section."})]}),e.jsxs(s.Tab,{tab:"history",children:[e.jsx("h4",{className:"mb-4",children:"Transaction History"}),e.jsx("p",{children:"Review your complete transaction history spanning the last 12 months. You can filter by date range, amount, merchant, or transaction type to find specific entries."}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Total Transactions (Last 30 days):"})," ","47"]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Total Spent:"})," ","$2,340.50"]}),e.jsx("p",{children:"Export your transaction history to CSV or PDF format for your records. Historical data older than 12 months can be requested through customer support."})]})]}),args:{defaultSelected:"history",options:[{label:e.jsxs("span",{className:"d-flex flex-column gap-2",children:[e.jsx(n,{icon:"Info"}),"Detail"]}),tab:"details"},{label:e.jsxs("span",{className:"d-flex flex-column gap-2",children:[e.jsx(n,{icon:"FileCheck"}),"History"]}),tab:"history"},{label:e.jsxs("span",{className:"d-flex flex-column gap-2",children:[e.jsx(n,{icon:"FlagTriangleLeft"}),"Reports"]}),tab:"reports"},{label:e.jsxs("span",{className:"d-flex flex-column gap-2",children:[e.jsx(n,{icon:"ChartColumn"}),"Activities"]}),tab:"activities"},{label:e.jsxs("span",{className:"d-flex flex-column gap-2",children:[e.jsx(n,{icon:"ChartPie"}),"Products"]}),tab:"products"}],vertical:!1,variant:"pills",className:"mb-8 nav-fill"}},u={decorators:[a=>e.jsx(r,{style:{width:"800px",height:"400px"},children:e.jsx(a,{})})],render:a=>e.jsxs(s,{...a,children:[e.jsxs(s.Tab,{tab:"general",children:[e.jsx("h4",{className:"mb-4",children:"General Settings"}),e.jsx("p",{children:"Customize your application experience with these general settings. Choose your preferred language, time zone, and display options to personalize your interface."}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Language:"})," ","English (US)"]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Time Zone:"})," ","Eastern Standard Time (EST)"]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Currency Display:"})," ","USD ($)"]}),e.jsx("p",{children:"These settings will be applied across all your devices. Changes take effect immediately and are synchronized automatically."})]}),e.jsxs(s.Tab,{tab:"notifications",children:[e.jsx("h4",{className:"mb-4",children:"Notification Preferences"}),e.jsx("p",{children:"Control how you receive important updates and alerts. You can choose to receive notifications via email, SMS, or push notifications on your mobile device."}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Transaction Alerts:"})," ","Enabled for amounts over $100"]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Marketing Communications:"})," ","Opted out"]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Security Alerts:"})," ","Enabled (Email + SMS)"]}),e.jsx("p",{children:"We recommend keeping security alerts enabled to stay informed about any suspicious activity on your account. You can adjust notification frequency in advanced settings."})]})]}),args:{defaultSelected:"notifications",options:[{label:"General",tab:"general"},{label:"Notifications",tab:"notifications"},{label:"Advanced",tab:"empty"}],vertical:!0,variant:"pills",className:"me-8"}},b={decorators:[a=>e.jsx("div",{style:{width:"800px",height:"400px"},children:e.jsx(a,{})})],render:a=>e.jsx(r,{className:"p-8",style:{width:"800px"},children:e.jsxs(s,{...a,children:[e.jsxs(s.Tab,{tab:"dashboard",children:[e.jsx("h4",{className:"mb-4",children:"Dashboard Overview"}),e.jsx("p",{children:"Welcome to your comprehensive dashboard. This central hub provides real-time insights into your account activity, financial health, and important notifications."}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Account Balance:"})," ","$12,450.00 (+5.2% from last month)"]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Monthly Spending:"})," ","$3,240.75 (within budget)"]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Upcoming Bills:"})," ","3 payments due in the next 7 days"]}),e.jsx("p",{children:"Your financial summary shows a positive trend this quarter. Review your spending patterns and savings goals to maintain healthy financial habits. Quick actions are available below for common tasks like transfers and bill payments."})]}),e.jsxs(s.Tab,{tab:"analytics",children:[e.jsx("h4",{className:"mb-4",children:"Financial Analytics"}),e.jsx("p",{children:"Dive deep into your financial data with comprehensive analytics and visual reports. Track your spending patterns, identify savings opportunities, and monitor your progress toward financial goals."}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Spending by Category:"})," ","Groceries (30%), Transportation (20%), Entertainment (15%)"]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Monthly Trend:"})," ","Average spending decreased by 8% compared to previous quarter"]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Savings Rate:"})," ","22% of income (above recommended 20% target)"]}),e.jsx("p",{children:"Your spending analysis reveals opportunities to optimize your budget. Consider reviewing recurring subscriptions and discretionary expenses. Export detailed reports to share with your financial advisor or for tax preparation purposes."})]})]})}),args:{defaultSelected:"analytics",options:[{label:"Dashboard",tab:"dashboard"},{label:"Analytics",tab:"analytics"},{label:"Reports",tab:"empty"}],vertical:!1,variant:"tabs",className:"mb-8"}};var g,y,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
  argTypes: {
    defaultSelected: {
      control: 'select',
      options: ['overview', 'settings', 'empty']
    }
  },
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
      label: <span className="d-flex gap-2 align-items-center justify-content-center">
            Notifications
            <DChip color="info" style={{
          '--bs-chip-font-size': '10px',
          lineHeight: 1
        } as CSSProperties} className="p-1" text="2" />
          </span>,
      tab: 'empty'
    }],
    className: 'mb-8',
    vertical: false
  }
}`,...(x=(y=o.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var f,v,T;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Without \`DTabs.Tab\` children the panels container is not rendered, so the tab bar can drive navigation through \`onChange\` without leaving an empty node or margin below it.'
      }
    }
  },
  args: {
    defaultSelected: 'overview',
    options: [{
      label: 'Overview',
      tab: 'overview'
    }, {
      label: 'Settings',
      tab: 'settings'
    }],
    ariaLabel: 'Account sections'
  }
}`,...(T=(v=i.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var j,N,D;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`DTabs.Provider\` owns the selection, so the tab bar and its \`DTabs.Tab\` panels can live in different parts of the layout. \`DTabs\` inside the provider does not need \`defaultSelected\`.'
      }
    }
  },
  render: args => <DTabs.Provider defaultSelected="overview">
      <div className="d-flex gap-6">
        <aside>
          <DTabs {...args} />
        </aside>
        <DBox className="flex-grow-1">
          <DTabs.Tab tab="overview">Account overview panel.</DTabs.Tab>
          <DTabs.Tab tab="settings">Account settings panel.</DTabs.Tab>
        </DBox>
      </div>
    </DTabs.Provider>,
  args: {
    options: [{
      label: 'Overview',
      tab: 'overview'
    }, {
      label: 'Settings',
      tab: 'settings'
    }],
    vertical: true,
    variant: 'pills',
    ariaLabel: 'Account sections'
  }
}`,...(D=(N=c.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var S,w,P;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(P=(w=l.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var A,C,$;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...($=(C=d.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var k,Y,E;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
    className: 'mb-8 nav-fill'
  }
}`,...(E=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:E.source}}};var B,L,H;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(H=(L=m.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var M,F,R;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
    className: 'mb-8 nav-fill'
  }
}`,...(R=(F=h.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var O,z,I;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(I=(z=u.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var V,W,q;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(q=(W=b.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};const de=["Default","NavigationOnly","SeparatePanels","Vertical","Pills","ToggleButtonGroup","PillsWithIcons","PillsWithIconsFull","VerticalPills","Tabs"];export{o as Default,i as NavigationOnly,d as Pills,m as PillsWithIcons,h as PillsWithIconsFull,c as SeparatePanels,b as Tabs,p as ToggleButtonGroup,l as Vertical,u as VerticalPills,de as __namedExportsOrder,le as default};
