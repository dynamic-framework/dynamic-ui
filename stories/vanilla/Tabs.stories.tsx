import type { Meta, StoryObj } from '@storybook/react-vite';

import Html, { htmlStory } from './Html';

/* The box the React tab stories use, so the two pages read the same. */
const FRAME = { width: '800px', height: '400px' };

const meta: Meta<typeof Html> = {
  title: 'Vanilla/Tabs',
  component: Html,
  parameters: {
    docs: {
      description: {
        component: `
\`data-df-tabs\` on the markup \`DTabs\` renders.

The script sets exactly two things, both of which the stylesheet already reads:
\`aria-selected\` on the tab and \`hidden\` on the panel. It adds the roving
tabindex and the arrow keys. Before it runs, this is a row of buttons and their
content — readable, if not yet switchable.

## What you have to write

Each tab needs \`role="tab"\` and an \`aria-controls\` pointing at its panel's
\`id\`.

Everything else is settled from your markup: which panels are hidden, which tab
is in the tab order. So marking one tab \`aria-selected="true"\` is enough — you
do not have to get every attribute right, and the server-rendered state and the
enhanced state cannot disagree.

## Starting on a tab other than the first

Put \`aria-selected="true"\` on the one you want. That is the whole of it. If you
leave it off every tab, the first one is selected.

## Keyboard

- **← →** move between tabs and wrap round, stepping over disabled ones.
- **↑ ↓** instead, when the list is \`aria-orientation="vertical"\`.
- **Home / End** jump to the ends.
- **Tab** leaves the list and lands in the panel: only the selected tab is in
  the tab order, because a tab list is one control, not fifteen.

## Reacting to a change

\`\`\`js
document.addEventListener('df:tabs:change', (event) => {
  console.log(event.detail.tab, event.detail.panel);
});
\`\`\`

## Appearance

Every visual variant — \`data-style\`, \`data-orientation\` — is the same
attribute the React component sets, and is documented under
**Design System › Components › Tabs**. Nothing about the look is specific to
this build.
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Html>;

/** The minimum: a list, panels, and one tab marked selected. */
export const Default: Story = htmlStory(`
<div class="df-tabs" data-df-tabs data-style="underline">
  <ul class="df-tablist" role="tablist" aria-label="Account">
    <li role="presentation" class="df-tab-item">
      <button class="df-tab" role="tab" id="vt-1" aria-controls="vp-1" aria-selected="true">Balance</button>
    </li>
    <li role="presentation" class="df-tab-item">
      <button class="df-tab" role="tab" id="vt-2" aria-controls="vp-2">Transactions</button>
    </li>
    <li role="presentation" class="df-tab-item">
      <button class="df-tab" role="tab" id="vt-3" aria-controls="vp-3">Statements</button>
    </li>
  </ul>
  <div class="df-tabpanel" id="vp-1" role="tabpanel" aria-labelledby="vt-1">
    <p class="df-m-0">Available balance: $12,430.55</p>
  </div>
  <div class="df-tabpanel" id="vp-2" role="tabpanel" aria-labelledby="vt-2" hidden>
    <p class="df-m-0">Three transactions this week.</p>
  </div>
  <div class="df-tabpanel" id="vp-3" role="tabpanel" aria-labelledby="vt-3" hidden>
    <p class="df-m-0">Statements back to 2019.</p>
  </div>
</div>`.trim(), { frame: FRAME });

/**
 * `aria-selected="true"` on the second tab, and nothing else changed. Note that
 * its panel is the one without `hidden` — but if you forget that, the script
 * corrects it.
 */
export const StartingOnAnotherTab: Story = htmlStory(`
<div class="df-tabs" data-df-tabs data-style="underline">
  <ul class="df-tablist" role="tablist" aria-label="Account">
    <li role="presentation" class="df-tab-item">
      <button class="df-tab" role="tab" id="va-1" aria-controls="vap-1">Balance</button>
    </li>
    <li role="presentation" class="df-tab-item">
      <button class="df-tab" role="tab" id="va-2" aria-controls="vap-2" aria-selected="true">Transactions</button>
    </li>
    <li role="presentation" class="df-tab-item">
      <button class="df-tab" role="tab" id="va-3" aria-controls="vap-3">Statements</button>
    </li>
  </ul>
  <div class="df-tabpanel" id="vap-1" role="tabpanel" aria-labelledby="va-1" hidden>Balance</div>
  <div class="df-tabpanel" id="vap-2" role="tabpanel" aria-labelledby="va-2">Transactions</div>
  <div class="df-tabpanel" id="vap-3" role="tabpanel" aria-labelledby="va-3" hidden>Statements</div>
</div>`.trim(), { frame: FRAME });

/**
 * No `hidden` and no `aria-selected` anywhere — the markup a template author
 * writes when they have not read the docs. The script settles it: the first tab
 * is selected and the other panels are hidden.
 */
export const IncompleteMarkup: Story = htmlStory(`
<div class="df-tabs" data-df-tabs data-style="underline">
  <ul class="df-tablist" role="tablist" aria-label="Account">
    <li role="presentation" class="df-tab-item">
      <button class="df-tab" role="tab" id="vi-1" aria-controls="vip-1">Balance</button>
    </li>
    <li role="presentation" class="df-tab-item">
      <button class="df-tab" role="tab" id="vi-2" aria-controls="vip-2">Transactions</button>
    </li>
  </ul>
  <div class="df-tabpanel" id="vip-1" role="tabpanel">Balance</div>
  <div class="df-tabpanel" id="vip-2" role="tabpanel">Transactions</div>
</div>`.trim(), { frame: FRAME });

/** `aria-orientation="vertical"` on the list swaps the arrows to up and down. */
export const Vertical: Story = htmlStory(`
<div class="df-tabs" data-df-tabs data-style="underline" data-orientation="vertical">
  <ul class="df-tablist" role="tablist" aria-orientation="vertical" aria-label="Settings">
    <li role="presentation" class="df-tab-item">
      <button class="df-tab" role="tab" id="vv-1" aria-controls="vvp-1" aria-selected="true">Profile</button>
    </li>
    <li role="presentation" class="df-tab-item">
      <button class="df-tab" role="tab" id="vv-2" aria-controls="vvp-2">Security</button>
    </li>
  </ul>
  <div class="df-tabpanel" id="vvp-1" role="tabpanel" aria-labelledby="vv-1">Your name and address.</div>
  <div class="df-tabpanel" id="vvp-2" role="tabpanel" aria-labelledby="vv-2" hidden>Password and devices.</div>
</div>`.trim(), { frame: FRAME });

/** A disabled tab is stepped over by the arrows, not landed on and refused. */
export const DisabledTab: Story = htmlStory(`
<div class="df-tabs" data-df-tabs data-style="underline">
  <ul class="df-tablist" role="tablist" aria-label="Transfer">
    <li role="presentation" class="df-tab-item">
      <button class="df-tab" role="tab" id="dt-1" aria-controls="dp-1" aria-selected="true">Amount</button>
    </li>
    <li role="presentation" class="df-tab-item">
      <button class="df-tab" role="tab" id="dt-2" aria-controls="dp-2" disabled>Review</button>
    </li>
    <li role="presentation" class="df-tab-item">
      <button class="df-tab" role="tab" id="dt-3" aria-controls="dp-3">Help</button>
    </li>
  </ul>
  <div class="df-tabpanel" id="dp-1" role="tabpanel" aria-labelledby="dt-1">How much?</div>
  <div class="df-tabpanel" id="dp-2" role="tabpanel" aria-labelledby="dt-2" hidden>Not yet.</div>
  <div class="df-tabpanel" id="dp-3" role="tabpanel" aria-labelledby="dt-3" hidden>Call 600 123 456.</div>
</div>`.trim(), { frame: FRAME });
