import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import DButton from '../../src/components/DButton/DButton';
import DButtonIcon from '../../src/components/DButtonIcon/DButtonIcon';
import DBadge from '../../src/components/DBadge/DBadge';
import DChip from '../../src/components/DChip/DChip';
import DAlert from '../../src/components/DAlert/DAlert';
import DCard from '../../src/components/DCard/DCard';
import DIcon from '../../src/components/DIcon/DIcon';
import DInput from '../../src/components/DInput/DInput';
import DInputCheck from '../../src/components/DInputCheck/DInputCheck';
import DInputSwitch from '../../src/components/DInputSwitch/DInputSwitch';
import DListGroup from '../../src/components/DListGroup/DListGroup';
import DProgress from '../../src/components/DProgress/DProgress';
import DAvatar from '../../src/components/DAvatar/DAvatar';
import DBox from '../../src/components/DBox/DBox';
import DTabs from '../../src/components/DTabs/DTabs';
import DCollapse from '../../src/components/DCollapse/DCollapse';
import DTimeline from '../../src/components/DTimeline/DTimeline';
import DToast from '../../src/components/DToast/DToast';
import DInputRange from '../../src/components/DInputRange/DInputRange';
import DPasswordStrengthMeter from '../../src/components/DPasswordStrengthMeter/DPasswordStrengthMeter';
import DPaginator from '../../src/components/DPaginator/DPaginator';
import DVoucher from '../../src/components/DVoucher/DVoucher';
import DInputPin from '../../src/components/DInputPin/DInputPin';
import DInputSelect from '../../src/components/DInputSelect/DInputSelect';
import DCreditCard from '../../src/components/DCreditCard/DCreditCard';
import DStepperDesktop from '../../src/components/DStepperDesktop/DStepperDesktop';
import { DF_ROLES } from '../../src/components/roles';
import type { AvatarSize } from '../../src/components/interface';

const VARIANTS = ['solid', 'soft', 'outline', 'link'] as const;
const AVATAR_SIZES: Array<AvatarSize | undefined> = ['xs', 'sm', undefined, 'lg', 'xl', 'xxl'];

/* ------------------------------------------------------------------ *
 * Scaffolding
 * ------------------------------------------------------------------ */

function Surface({ theme, children }: { theme: 'light' | 'dark'; children: React.ReactNode }) {
  return (
    <div
      // The theme is an attribute on this element, not on <html>: the token
      // layer emits `[data-df-theme="dark"]` unscoped, so a mode applies to any
      // subtree. That is what lets the "Both modes" story put the two grounds
      // side by side on one page.
      data-df-theme={theme}
      style={{
        background: 'var(--df-bg-canvas)',
        color: 'var(--df-fg-default)',
        padding: 'var(--df-size-6)',
        borderRadius: 'var(--df-shape-surface)',
        border: '1px solid var(--df-border-default)',
      }}
    >
      {children}
    </div>
  );
}

function Section({ title, hint, children }: {
  title: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ display: 'grid', gap: 'var(--df-size-3)', marginBlockEnd: 'var(--df-size-10)' }}>
      <header style={{ display: 'grid', gap: 'var(--df-size-1)' }}>
        <h3 style={{ margin: 0, fontSize: 'var(--df-text-heading-5-font-size)' }}>{title}</h3>
        {hint && (
          <p style={{ margin: 0, color: 'var(--df-fg-muted)', fontSize: 'var(--df-text-body-sm-font-size)' }}>
            {hint}
          </p>
        )}
      </header>
      {children}
    </section>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      display: 'flex', flexWrap: 'wrap', gap: 'var(--df-size-3)', alignItems: 'center',
    }}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * The sheet
 * ------------------------------------------------------------------ */

function Sheet({ theme }: { theme: 'light' | 'dark' }) {
  const [text, setText] = useState('1.240.500');
  const [range, setRange] = useState('4');
  const [password, setPassword] = useState('Abc1');

  const onRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRange(event.currentTarget.value);
  };

  return (
    <Surface theme={theme}>
      <Section
        title="Button — 4 variants × 8 roles"
        hint="32 combinations, none of which is a class name. The axes are data attributes and one generated selector per combination fills the component's local custom properties."
      >
        <div style={{ display: 'grid', gap: 'var(--df-size-2)' }}>
          {VARIANTS.map((variant) => (
            <Row key={variant}>
              <span style={{
                width: '5rem',
                color: 'var(--df-fg-muted)',
                fontSize: 'var(--df-text-caption-font-size)',
              }}
              >
                {variant}
              </span>
              {DF_ROLES.map((role) => (
                <DButton key={role} variant={variant} color={role} text={role} />
              ))}
            </Row>
          ))}
        </div>
      </Section>

      <Section title="Button — sizes, shape and state">
        <Row>
          <DButton color="primary" size="sm" text="Small" />
          <DButton color="primary" text="Default" />
          <DButton color="primary" size="lg" text="Large" />
          <DButton color="primary" shape="pill" text="Pill" />
          <DButton color="primary" text="Disabled" disabled />
          <DButton color="primary" text="Paying" loading loadingAriaLabel="Paying" />
          <DButtonIcon icon="X" color="secondary" variant="outline" aria-label="Close" />
          <DButtonIcon icon="Download" color="primary" aria-label="Download" />
        </Row>
      </Section>

      <Section
        title="Badge and chip"
        hint="Badge carries the same variant axis as the button; chip has one treatment across the eight roles."
      >
        <Row>
          {DF_ROLES.map((role) => <DBadge key={role} color={role} text={role} />)}
        </Row>
        <Row>
          {DF_ROLES.map((role) => <DBadge key={role} color={role} variant="soft" text={role} />)}
        </Row>
        <Row>
          {DF_ROLES.map((role) => (
            <DChip key={role} color={role} text={role} icon="Tag" showClose />
          ))}
        </Row>
      </Section>

      <Section title="Alert">
        <div style={{ display: 'grid', gap: 'var(--df-size-2)' }}>
          {(['success', 'info', 'warning', 'danger'] as const).map((role) => (
            <DAlert key={role} color={role} showClose>
              {`A ${role} alert. The icon colour, the fill and the border all come from the role.`}
            </DAlert>
          ))}
        </div>
      </Section>

      <Section
        title="Icon"
        hint="The colour is one attribute and the circle derives its ground from it with color-mix(), so a ninth role needs no extra CSS. 2.x generated two rules per theme colour."
      >
        <Row>
          {DF_ROLES.map((role) => <DIcon key={role} icon="Heart" color={role} size="24px" />)}
        </Row>
        <Row>
          {DF_ROLES.map((role) => (
            <DIcon key={role} icon="Heart" color={role} size="24px" hasCircle />
          ))}
        </Row>
      </Section>

      <Section title="Field">
        <div style={{ display: 'grid', gap: 'var(--df-size-4)', maxWidth: '24rem' }}>
          <DInput
            label="Amount"
            value={text}
            onChange={setText}
            iconStart="DollarSign"
            hint="Available: $1.240.500"
          />
          <DInput label="Tax id" value="11.111.111-1" invalid hint="Not a valid id" />
          <DInput label="Read only" value="not editable" disabled />
          <DInput label="Loading" value="" loading />
        </div>
      </Section>

      <Section
        title="Choice — checkbox, radio, switch"
        hint="One token set for all three. The check and dash marks are mask-image, not a background SVG with a hardcoded white fill, so the mark follows a token instead of ignoring the brand."
      >
        <Row>
          <DInputCheck type="checkbox" id={`${theme}-c1`} label="Checkbox" checked />
          <DInputCheck type="checkbox" id={`${theme}-c2`} label="Unchecked" />
          <DInputCheck type="checkbox" id={`${theme}-c3`} label="Indeterminate" indeterminate />
          <DInputCheck type="checkbox" id={`${theme}-c4`} label="Disabled" disabled />
          <DInputCheck type="checkbox" id={`${theme}-c5`} label="Invalid" invalid />
        </Row>
        <Row>
          <DInputCheck type="radio" id={`${theme}-r1`} name={`${theme}-r`} label="Radio" checked />
          <DInputCheck type="radio" id={`${theme}-r2`} name={`${theme}-r`} label="Other" />
          <DInputCheck type="radio" id={`${theme}-r3`} name={`${theme}-r`} label="Disabled" disabled />
        </Row>
        <Row>
          <DInputSwitch id={`${theme}-s1`} label="On" checked />
          <DInputSwitch id={`${theme}-s2`} label="Off" />
          <DInputSwitch id={`${theme}-s3`} label="Disabled" disabled />
        </Row>
      </Section>

      <Section
        title="Progress"
        hint="The fill is a custom property, not an inline width — the stylesheet keeps control of how the live value is used."
      >
        <div style={{ display: 'grid', gap: 'var(--df-size-3)', maxWidth: '28rem' }}>
          <DProgress currentValue={25} />
          <DProgress currentValue={60} dataAttributes={{ 'data-color': 'success' }} />
          <DProgress currentValue={85} dataAttributes={{ 'data-color': 'warning' }} />
          <DProgress currentValue={45} enableStripedAnimation hideCurrentValue />
        </div>
      </Section>

      <Section
        title="List group"
        hint="`horizontal` was six class names in 2.x, one per breakpoint, all shipped whether used or not. It is one attribute now."
      >
        <div style={{ display: 'grid', gap: 'var(--df-size-4)', maxWidth: '28rem' }}>
          <DListGroup>
            <DListGroup.Item iconStart="Wallet" iconEnd="ChevronRight" action>Accounts</DListGroup.Item>
            <DListGroup.Item iconStart="CreditCard" iconEnd="ChevronRight" action active>Cards</DListGroup.Item>
            <DListGroup.Item iconStart="Landmark" iconEnd="ChevronRight" action disabled>Loans</DListGroup.Item>
          </DListGroup>
          <DListGroup numbered>
            <DListGroup.Item>First step</DListGroup.Item>
            <DListGroup.Item>Second step</DListGroup.Item>
          </DListGroup>
        </div>
      </Section>

      <Section title="Avatar and box">
        <Row>
          {AVATAR_SIZES.map((size, i) => (
            <DAvatar key={size ?? 'md'} size={size} name={`User ${i + 1}`} />
          ))}
        </Row>
        <div className="df-avatar-group">
          <DAvatar name="Ana Lopez" />
          <DAvatar name="Beto Diaz" />
          <DAvatar name="Cira Mora" />
        </div>
        <Row>
          <DBox>A box</DBox>
          <DBox dataAttributes={{ 'data-elevation': 'md' }}>Raised</DBox>
          <DBox dataAttributes={{ 'data-bordered': '', 'data-elevation': 'none' }}>Bordered</DBox>
        </Row>
      </Section>

      <Section
        title="Tabs — 4 styles"
        hint="2.x built these from Bootstrap's .nav / .nav-link, so the pill group inherited rules meant for navigation. The active indicator is a pseudo-element, and the active state is read from aria-selected rather than a class."
      >
        <div style={{ display: 'grid', gap: 'var(--df-size-6)' }}>
          {(['underline', 'pills', 'toggle', 'boxed'] as const).map((variant) => (
            <DTabs
              key={variant}
              variant={variant}
              ariaLabel={variant}
              defaultSelected="a"
              options={[
                { tab: 'a', label: 'Accounts' },
                { tab: 'b', label: 'Cards' },
                { tab: 'c', label: 'Disabled', disabled: true },
              ]}
            >
              <DTabs.Tab tab="a">{`The ${variant} style.`}</DTabs.Tab>
              <DTabs.Tab tab="b">Cards panel.</DTabs.Tab>
            </DTabs>
          ))}
        </div>
      </Section>

      <Section
        title="Collapse"
        hint="Opens with interpolate-size and @starting-style, so height: auto animates with no JavaScript measuring the content. It also gained aria-expanded and aria-controls, which 2.x never emitted."
      >
        <div style={{ display: 'grid', gap: 'var(--df-size-3)', maxWidth: '28rem' }}>
          <DCollapse Component={<span>Transfer detail</span>} dataAttributes={{ 'data-separator': '' }}>
            <p style={{ margin: 0 }}>Sent to Ana Lopez · $120.000 · 12 Mar</p>
          </DCollapse>
          <DCollapse Component={<span>Already open</span>} defaultCollapsed={false}>
            <p style={{ margin: 0 }}>This one starts expanded.</p>
          </DCollapse>
        </div>
      </Section>

      <Section
        title="Timeline"
        hint="The connector is a pseudo-element, so there is no node per item whose only job is to sometimes be invisible."
      >
        <DTimeline
          items={[
            {
              title: 'Requested',
              description: 'You started the transfer',
              time: '09:12',
              status: 'info',
            },
            {
              title: 'Under review',
              description: 'Checking the destination account',
              time: '09:14',
              status: 'warning',
            },
            {
              title: 'Sent',
              description: 'Funds left your account',
              time: '09:15',
              status: 'success',
            },
          ]}
        />
      </Section>

      <Section title="Toast">
        <div style={{ display: 'grid', gap: 'var(--df-size-2)', maxWidth: '24rem' }}>
          {(['success', 'warning', 'danger', 'info'] as const).map((role) => (
            <DToast key={role} dataAttributes={{ 'data-color': role }}>
              <DToast.Header>
                <span className="df-toast-title">{role}</span>
                <small className="df-toast-timestamp">just now</small>
              </DToast.Header>
              <DToast.Body>The accent comes from the role.</DToast.Body>
            </DToast>
          ))}
        </div>
      </Section>

      <Section
        title="Range, strength meter and pagination"
        hint="The strength meter used five bg-* palette utilities that 3.x does not ship; the tier is an attribute now. The range fill is a gradient stop written as a custom property, so there is no second element to size."
      >
        <div style={{ display: 'grid', gap: 'var(--df-size-5)', maxWidth: '26rem' }}>
          <DInputRange id={`${theme}-range`} label="Amount" value={range} onChange={onRange} />
          <DPasswordStrengthMeter
            id={`${theme}-pw`}
            label="New password"
            value={password}
            onChange={setPassword}
          />
          <DPaginator current={3} total={9} onPageChange={() => {}} />
        </div>
      </Section>

      <Section
        title="PIN and select"
        hint="The PIN boxes are their own control, not a .form-control fighting its own padding. The select's chevron is a mask, so it follows the theme instead of staying dark on a dark field."
      >
        <div style={{ display: 'grid', gap: 'var(--df-size-4)', maxWidth: '24rem' }}>
          <DInputPin characters={4} label="Security code" placeholder="0" />
          <DInputSelect
            label="Destination account"
            options={[
              { label: 'Checking · 4821', value: 'checking' },
              { label: 'Savings · 9013', value: 'savings' },
            ]}
            value="checking"
            onChange={() => {}}
          />
        </div>
      </Section>

      <Section
        title="Stepper"
        hint="One token set for both layouts — 2.x kept two, which is how the marker sizes drifted apart. The connector is a pseudo-element, and the state is one attribute where 2.x had two independent classes."
      >
        <DStepperDesktop
          currentStep={2}
          options={[
            { value: 1, label: 'Amount', description: 'Entered' },
            { value: 2, label: 'Review', description: 'In progress' },
            { value: 3, label: 'Confirm', description: 'Pending' },
          ]}
        />
      </Section>

      <Section
        title="Credit card"
        hint="The only literal colours in the stylesheet: the face gradient is decorative art, not a system colour, so there is no palette entry it could alias."
      >
        <div style={{ maxWidth: '20rem' }}>
          <DCreditCard
            number="4821 •••• •••• 1234"
            name="ANA LOPEZ"
            brand="visa"
          />
        </div>
      </Section>

      <Section title="Voucher">
        <div style={{ maxWidth: '22rem' }}>
          <DVoucher
            title="Payment sent"
            message="We emailed you the receipt"
            amount="$120.000"
            amountDetails="to Ana Lopez"
          />
        </div>
      </Section>

      <Section title="Card">
        <div style={{
          display: 'grid',
          gap: 'var(--df-size-4)',
          gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))',
        }}
        >
          <DCard>
            <DCard.Header>Current account</DCard.Header>
            <DCard.Body>
              <span style={{
                fontSize: 'var(--df-text-heading-3-font-size)',
                fontVariantNumeric: 'tabular-nums',
              }}
              >
                $1.240.500
              </span>
              <span style={{ color: 'var(--df-fg-muted)' }}>**** 4821</span>
            </DCard.Body>
            <DCard.Footer>
              <DButton variant="link" color="primary" size="sm" text="See detail" />
            </DCard.Footer>
          </DCard>

          <DCard dataAttributes={{ 'data-interactive': '', 'data-elevation': 'md' }}>
            <DCard.Body>
              <strong>Interactive</strong>
              <span style={{ color: 'var(--df-fg-muted)' }}>hover, and focus-within via the link</span>
              <a href="#card">Inner link</a>
            </DCard.Body>
          </DCard>
        </div>
      </Section>
    </Surface>
  );
}

/* ------------------------------------------------------------------ */

const meta: Meta = {
  title: 'Dynamic 3.x/Overview',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Everything ported to the 3.x stylesheet so far, in both colour modes.

These components no longer emit a single Bootstrap class name. The markup is
\`.df-block\` plus data attributes for the variant, colour, size and state axes —
which is the same shape the framework-free custom elements will take, so both
renderers share one stylesheet.

**What to look at**

- The 32 button combinations are 32 generated selectors, not 32 class names, and
  each one only assigns local custom properties.
- Dark mode is the \`data-df-theme\` attribute and nothing else: the semantic
  token layer redefines itself, every component reads that layer.
- Contrast for every opaque fill here is asserted in CI by \`npm run css:verify\`,
  which resolves the real stylesheet's \`var()\` chains and checks the pairs.

Run \`npm run css:audit\` for what is ported and what each remaining component
still emits.
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  name: 'Light',
  render: () => <Sheet theme="light" />,
};

export const Dark: Story = {
  name: 'Dark',
  render: () => <Sheet theme="dark" />,
};

/** Both grounds at once, which is where a mode-only mistake shows up. */
export const SideBySide: Story = {
  name: 'Both modes',
  render: () => (
    <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(28rem, 1fr))' }}>
      <Sheet theme="light" />
      <Sheet theme="dark" />
    </div>
  ),
};
