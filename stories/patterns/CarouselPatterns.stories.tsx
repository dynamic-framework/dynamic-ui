import { Meta, StoryObj } from '@storybook/react-vite';
import {
  DCarousel, DButton, DBox, useDCarouselController,
} from '../../src';

import DocsTemplate from './docs/Template.mdx';

const meta: Meta<typeof DCarousel> = {
  title: 'Patterns/Carousel',
  component: DCarousel,
  parameters: {
    docs: {
      page: DocsTemplate,
      description: {
        component: `
This story showcases carousel patterns for marketing campaigns and promotional content.

Carousels are perfect for highlighting multiple offers, campaigns, or featured content in a rotating format.

### Common Use Cases:

- Marketing campaigns
- Promotional banners
- Featured products or services
- Seasonal offers
- News and announcements
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DCarousel>;

const SAMPLE_IMAGE = 'https://cdn.modyo.cloud/uploads/a55c865c-fbb8-4eaf-b245-10008e0ace70/original/banner-ahorro-programado.png';

export const LightBackgrounds: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Marketing carousel with light backgrounds (white, gray, primary-50).',
      },
    },
  },
  render: () => (
    <DBox style={{ width: 800 }}>
      <h5 className="df-mb-3">Marketing Campaigns</h5>
      <DCarousel
        label="Marketing campaigns"
        loop
        perPage={1}
        autoplay
        interval={5000}
      >
        <DCarousel.Slide>
          <div className="df-bg-surface df-rounded-control df-overflow-hidden">
            <div className="df-grid df-grid-cols-12 df-gap-0">
              <div className="df-md:col-span-6">
                <img
                  src={SAMPLE_IMAGE}
                  alt="Campaign"
                  className="df-w-full df-h-full df-object-cover"
                  style={{ minHeight: '400px' }}
                />
              </div>
              <div className="df-md:col-span-6 df-flex df-items-center">
                <div className="df-p-5">
                  <h4 className="df-mb-3">Summer Sale 2024</h4>
                  <p className="df-text-muted df-mb-4">
                    Get up to 50% off on selected items. Dont miss out on our
                    biggest sale of the year!
                  </p>
                  <DButton text="Shop Now" color="primary" />
                </div>
              </div>
            </div>
          </div>
        </DCarousel.Slide>

        <DCarousel.Slide>
          <div className="df-bg-surface df-rounded-control df-overflow-hidden">
            <div className="df-grid df-grid-cols-12 df-gap-0">
              <div className="df-md:col-span-6">
                <img
                  src={SAMPLE_IMAGE}
                  alt="Campaign"
                  className="df-w-full df-h-full df-object-cover"
                  style={{ minHeight: '400px' }}
                />
              </div>
              <div className="df-md:col-span-6 df-flex df-items-center">
                <div className="df-p-5">
                  <h4 className="df-mb-3">New Customer Bonus</h4>
                  <p className="df-text-muted df-mb-4">
                    Open an account today and receive $100 bonus. Terms and conditions apply.
                  </p>
                  <DButton text="Get Started" color="success" />
                </div>
              </div>
            </div>
          </div>
        </DCarousel.Slide>

        <DCarousel.Slide>
          <div className="df-bg-primary-subtle df-rounded-control df-overflow-hidden">
            <div className="df-grid df-grid-cols-12 df-gap-0">
              <div className="df-md:col-span-6">
                <img
                  src={SAMPLE_IMAGE}
                  alt="Campaign"
                  className="df-w-full df-h-full df-object-cover"
                  style={{ minHeight: '400px' }}
                />
              </div>
              <div className="df-md:col-span-6 df-flex df-items-center">
                <div className="df-p-5">
                  <h4 className="df-mb-3">Investment Opportunities</h4>
                  <p className="df-text-muted df-mb-4">
                    Discover high-yield investment options tailored to your financial goals.
                  </p>
                  <DButton text="Learn More" color="info" />
                </div>
              </div>
            </div>
          </div>
        </DCarousel.Slide>
      </DCarousel>
    </DBox>
  ),
};

export const DarkBackgrounds: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Marketing carousel with dark backgrounds and light text.',
      },
    },
  },
  render: () => (
    <DBox style={{ width: 800 }}>
      <h5 className="df-mb-3">Premium Offers</h5>
      <DCarousel
        label="Premium offers"
        loop
        perPage={1}
        autoplay
        interval={5000}
      >
        <DCarousel.Slide>
          <div className="df-bg-primary df-rounded-control df-overflow-hidden">
            <div className="df-grid df-grid-cols-12 df-gap-0">
              <div className="df-md:col-span-6">
                <img
                  src={SAMPLE_IMAGE}
                  alt="Campaign"
                  className="df-w-full df-h-full df-object-cover"
                  style={{ minHeight: '400px' }}
                />
              </div>
              <div className="df-md:col-span-6 df-flex df-items-center">
                <div className="df-p-5 df-text-on-emphasis">
                  <h4 className="df-mb-3">Premium Credit Card</h4>
                  <p className="df-mb-4" style={{ opacity: 0.9 }}>
                    Unlock exclusive benefits with our premium card.
                    Travel rewards, concierge service, and more.
                  </p>
                  <DButton text="Apply Now" color="light" />
                </div>
              </div>
            </div>
          </div>
        </DCarousel.Slide>

        <DCarousel.Slide>
          <div className="df-bg-inverse df-rounded-control df-overflow-hidden">
            <div className="df-grid df-grid-cols-12 df-gap-0">
              <div className="df-md:col-span-6">
                <img
                  src={SAMPLE_IMAGE}
                  alt="Campaign"
                  className="df-w-full df-h-full df-object-cover"
                  style={{ minHeight: '400px' }}
                />
              </div>
              <div className="df-md:col-span-6 df-flex df-items-center">
                <div className="df-p-5 df-text-on-emphasis">
                  <h4 className="df-mb-3">Black Friday Special</h4>
                  <p className="df-mb-4" style={{ opacity: 0.9 }}>
                    Limited time offer! Get exclusive deals on all our services. Dont miss out!
                  </p>
                  <DButton text="View Deals" color="light" />
                </div>
              </div>
            </div>
          </div>
        </DCarousel.Slide>

        <DCarousel.Slide>
          <div className="df-bg-success df-rounded-control df-overflow-hidden">
            <div className="df-grid df-grid-cols-12 df-gap-0">
              <div className="df-md:col-span-6">
                <img
                  src={SAMPLE_IMAGE}
                  alt="Campaign"
                  className="df-w-full df-h-full df-object-cover"
                  style={{ minHeight: '400px' }}
                />
              </div>
              <div className="df-md:col-span-6 df-flex df-items-center">
                <div className="df-p-5 df-text-on-emphasis">
                  <h4 className="df-mb-3">Go Green with Us</h4>
                  <p className="df-mb-4" style={{ opacity: 0.9 }}>
                    Join our sustainability program and earn rewards while helping the planet.
                  </p>
                  <DButton text="Join Now" color="light" />
                </div>
              </div>
            </div>
          </div>
        </DCarousel.Slide>
      </DCarousel>
    </DBox>
  ),
};

export const ImageLeft: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Carousel with image on the left side and content on the right.',
      },
    },
  },
  render: () => (
    <DBox style={{ width: 800 }}>
      <h5 className="df-mb-3">Featured Campaigns</h5>
      <DCarousel
        label="Featured campaigns"
        loop
        perPage={1}
        autoplay
        interval={4000}
      >
        <DCarousel.Slide>
          <div className="df-bg-surface df-rounded-control df-overflow-hidden df-border-1">
            <div className="df-grid df-grid-cols-12 df-gap-0">
              <div className="df-md:col-span-5">
                <img
                  src={SAMPLE_IMAGE}
                  alt="Campaign"
                  className="df-w-full df-h-full df-object-cover"
                  style={{ minHeight: '350px' }}
                />
              </div>
              <div className="df-md:col-span-7 df-flex df-items-center">
                <div className="df-p-4">
                  <h4 className="df-mb-3">Low Interest Loans</h4>
                  <p className="df-text-muted df-mb-4">
                    Get approved in minutes with rates starting at 4.99% APR.
                    No hidden fees, flexible terms.
                  </p>
                  <DButton text="Check Eligibility" color="primary" />
                </div>
              </div>
            </div>
          </div>
        </DCarousel.Slide>

        <DCarousel.Slide>
          <div className="df-bg-warning-subtle df-rounded-control df-overflow-hidden">
            <div className="df-grid df-grid-cols-12 df-gap-0">
              <div className="df-md:col-span-5">
                <img
                  src={SAMPLE_IMAGE}
                  alt="Campaign"
                  className="df-w-full df-h-full df-object-cover"
                  style={{ minHeight: '350px' }}
                />
              </div>
              <div className="df-md:col-span-7 df-flex df-items-center">
                <div className="df-p-4">
                  <h4 className="df-mb-3">Insurance Plans</h4>
                  <p className="df-text-muted df-mb-4">
                    Protect what matters most.
                    Compare plans and find the perfect coverage for you and your family.
                  </p>
                  <DButton text="Compare Plans" color="warning" />
                </div>
              </div>
            </div>
          </div>
        </DCarousel.Slide>

        <DCarousel.Slide>
          <div className="df-bg-info-subtle df-rounded-control df-overflow-hidden">
            <div className="df-grid df-grid-cols-12 df-gap-0">
              <div className="df-md:col-span-5">
                <img
                  src={SAMPLE_IMAGE}
                  alt="Campaign"
                  className="df-w-full df-h-full df-object-cover"
                  style={{ minHeight: '350px' }}
                />
              </div>
              <div className="df-md:col-span-7 df-flex df-items-center">
                <div className="df-p-4">
                  <h4 className="df-mb-3">Savings Account</h4>
                  <p className="df-text-muted df-mb-4">
                    Earn competitive interest rates on your savings. No minimum balance required.
                  </p>
                  <DButton text="Open Account" color="info" />
                </div>
              </div>
            </div>
          </div>
        </DCarousel.Slide>
      </DCarousel>
    </DBox>
  ),
};

export const ImageRight: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Carousel with content on the left and image on the right side.',
      },
    },
  },
  render: () => (
    <DBox style={{ width: 800 }}>
      <h5 className="df-mb-3">Special Offers</h5>
      <DCarousel
        label="Special offers"
        loop
        perPage={1}
        autoplay
        interval={4500}
      >
        <DCarousel.Slide>
          <div className="df-bg-success-subtle df-rounded-control df-overflow-hidden">
            <div className="df-grid df-grid-cols-12 df-gap-0">
              <div className="df-md:col-span-7 df-flex df-items-center">
                <div className="df-p-5">
                  <h4 className="df-mb-3">Business Banking</h4>
                  <p className="df-text-muted df-mb-4">
                    Powerful tools to help your business grow.
                    From payment processing to payroll management.
                  </p>
                  <DButton text="Get Started" color="success" />
                </div>
              </div>
              <div className="df-md:col-span-5">
                <img
                  src={SAMPLE_IMAGE}
                  alt="Campaign"
                  className="df-w-full df-h-full df-object-cover"
                  style={{ minHeight: '350px' }}
                />
              </div>
            </div>
          </div>
        </DCarousel.Slide>

        <DCarousel.Slide>
          <div className="df-bg-purple-50 df-rounded-control df-overflow-hidden">
            <div className="df-grid df-grid-cols-12 df-gap-0">
              <div className="df-md:col-span-7 df-flex df-items-center">
                <div className="df-p-5">
                  <h4 className="df-mb-3">Student Discounts</h4>
                  <p className="df-text-muted df-mb-4">
                    Special rates for students.
                    No monthly fees and exclusive benefits designed for you.
                  </p>
                  <DButton text="Learn More" color="purple" />
                </div>
              </div>
              <div className="df-md:col-span-5">
                <img
                  src={SAMPLE_IMAGE}
                  alt="Campaign"
                  className="df-w-full df-h-full df-object-cover"
                  style={{ minHeight: '350px' }}
                />
              </div>
            </div>
          </div>
        </DCarousel.Slide>

        <DCarousel.Slide>
          <div className="df-bg-danger-subtle df-rounded-control df-overflow-hidden">
            <div className="df-grid df-grid-cols-12 df-gap-0">
              <div className="df-md:col-span-7 df-flex df-items-center">
                <div className="df-p-5">
                  <h4 className="df-mb-3">Limited Time Offer</h4>
                  <p className="df-text-muted df-mb-4">
                    Dont miss our exclusive promotion!
                    Open an account this month and get special benefits.
                  </p>
                  <DButton text="Claim Offer" color="danger" />
                </div>
              </div>
              <div className="df-md:col-span-5">
                <img
                  src={SAMPLE_IMAGE}
                  alt="Campaign"
                  className="df-w-full df-h-full df-object-cover"
                  style={{ minHeight: '350px' }}
                />
              </div>
            </div>
          </div>
        </DCarousel.Slide>
      </DCarousel>
    </DBox>
  ),
};

export const CompactVersion: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Compact carousel version with smaller height for secondary placements.',
      },
    },
  },
  render: () => (
    <DBox style={{ width: 800 }}>
      <h5 className="df-mb-3">Quick Promotions</h5>
      <DCarousel
        label="Quick promotions"
        loop
        perPage={1}
        autoplay
        interval={3000}
        height="250px"
      >
        <DCarousel.Slide>
          <div className="df-bg-primary df-rounded-control df-overflow-hidden df-h-full">
            <div className="df-grid df-grid-cols-12 df-gap-0 df-h-full">
              <div className="df-md:col-span-5">
                <img
                  src={SAMPLE_IMAGE}
                  alt="Campaign"
                  className="df-w-full df-h-full df-object-cover"
                />
              </div>
              <div className="df-md:col-span-7 df-flex df-items-center">
                <div className="df-p-4 df-text-on-emphasis">
                  <h5 className="df-mb-2">Quick Transfer</h5>
                  <p className="df-mb-3 df-fs-body-sm" style={{ opacity: 0.9 }}>
                    Send money instantly with zero fees
                  </p>
                  <DButton text="Try Now" color="light" size="sm" />
                </div>
              </div>
            </div>
          </div>
        </DCarousel.Slide>

        <DCarousel.Slide>
          <div className="df-bg-success df-rounded-control df-overflow-hidden df-h-full">
            <div className="df-grid df-grid-cols-12 df-gap-0 df-h-full">
              <div className="df-md:col-span-5">
                <img
                  src={SAMPLE_IMAGE}
                  alt="Campaign"
                  className="df-w-full df-h-full df-object-cover"
                />
              </div>
              <div className="df-md:col-span-7 df-flex df-items-center">
                <div className="df-p-4 df-text-on-emphasis">
                  <h5 className="df-mb-2">Cashback Rewards</h5>
                  <p className="df-mb-3 df-fs-body-sm" style={{ opacity: 0.9 }}>
                    Earn up to 5% cashback on purchases
                  </p>
                  <DButton text="Join Now" color="light" size="sm" />
                </div>
              </div>
            </div>
          </div>
        </DCarousel.Slide>

        <DCarousel.Slide>
          <div className="df-bg-info df-rounded-control df-overflow-hidden df-h-full">
            <div className="df-grid df-grid-cols-12 df-gap-0 df-h-full">
              <div className="df-md:col-span-5">
                <img
                  src={SAMPLE_IMAGE}
                  alt="Campaign"
                  className="df-w-full df-h-full df-object-cover"
                />
              </div>
              <div className="df-md:col-span-7 df-flex df-items-center">
                <div className="df-p-4 df-text-on-emphasis">
                  <h5 className="df-mb-2">Mobile App</h5>
                  <p className="df-mb-3 df-fs-body-sm" style={{ opacity: 0.9 }}>
                    Download our app for exclusive features
                  </p>
                  <DButton text="Download" color="light" size="sm" />
                </div>
              </div>
            </div>
          </div>
        </DCarousel.Slide>
      </DCarousel>
    </DBox>
  ),
};

/* ------------------------------------------------------------------ *
 * Website patterns
 *
 * The five above are app-style banners: the carousel draws its own arrows
 * and dots, inside its own box. Everything below takes those over through
 * `useDCarouselController`, which is what lets a control sit in a section
 * header, under a quote, or over an image — the places a marketing site
 * actually puts them.
 * ------------------------------------------------------------------ */

const PHOTOS = [
  { title: 'Open an account in minutes', kicker: 'Everyday banking' },
  { title: 'A mortgage that fits the house', kicker: 'Home' },
  { title: 'Invest from your first peso', kicker: 'Wealth' },
  { title: 'Cards that pay you back', kicker: 'Credit' },
  { title: 'Save without thinking about it', kicker: 'Savings' },
];

const photo = (index: number, w = 1200, h = 675) => (
  `https://placehold.co/${w}x${h}/1f2937/f8fafc?text=${index + 1}`
);

/*
 * The product row shows more cards than there are fixtures, so the list is
 * doubled HERE rather than in the JSX: a key built from the position in a
 * list with repeats is a key that changes meaning when the list does.
 */
const PRODUCTS = [...PHOTOS, ...PHOTOS].map((item, index) => ({
  ...item,
  id: `${item.kicker}-${index}`,
  photoIndex: index,
}));

/** Two digits, so the counter does not change width between 9 and 10. */
const pad = (n: number) => String(n + 1).padStart(2, '0');

function EditorialHeroExample() {
  const hero = useDCarouselController();

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 1100 }}>
      <DCarousel
        label="Featured stories"
        controller={hero}
        arrows={false}
        pagination={false}
        perPage={1}
        loop
        autoplay
        interval={6000}
        lookahead={1}
      >
        {PHOTOS.map((item, index) => (
          <DCarousel.Slide key={item.title}>
            <div style={{ position: 'relative', borderRadius: 'var(--df-shape-surface)', overflow: 'hidden' }}>
              <img
                data-src={photo(index)}
                width={1200}
                height={675}
                alt=""
                style={{ display: 'block', inlineSize: '100%', blockSize: 'auto' }}
              />
              {/*
                * The scrim is what makes overlaid text legible on an image
                * nobody has vetted for contrast — a marketing site swaps the
                * photo weekly and the headline has to survive it.
                */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgb(0 0 0 / 72%) 0%, rgb(0 0 0 / 10%) 55%)',
                }}
              />
              <div style={{
                position: 'absolute', insetInline: 0, bottom: 0, padding: '2rem', color: '#f8fafc',
              }}
              >
                <p className="df-fs-label df-mb-2" style={{ opacity: 0.85 }}>{item.kicker}</p>
                <h3 className="df-fs-heading-2" style={{ margin: 0, maxWidth: '18ch' }}>
                  {item.title}
                </h3>
              </div>
            </div>
          </DCarousel.Slide>
        ))}
      </DCarousel>

      {/*
        * Counter and arrows over the image, bottom right — no dots. With five
        * slides a reader wants to know how far through they are, and `01 / 05`
        * says it in less room than five dots and without implying every stop is
        * worth jumping to directly.
        */}
      <div
        className="df-flex df-items-center df-gap-3"
        style={{
          position: 'absolute', insetInlineEnd: '2rem', bottom: '2rem', color: '#f8fafc',
        }}
      >
        <span className="df-fs-body-sm" style={{ fontVariantNumeric: 'tabular-nums', opacity: 0.85 }}>
          {`${pad(hero.activePage)} / ${pad(hero.pageCount - 1)}`}
        </span>
        <DCarousel.Prev controller={hero} />
        <DCarousel.Next controller={hero} />
        <DCarousel.Autoplay controller={hero} />
      </div>
    </div>
  );
}

/**
 * Editorial hero.
 *
 * Full-bleed image, headline over a scrim, and the controls on the image
 * itself: a fraction rather than dots, because five dots say "pick one" when
 * what a reader wants is "how far through am I".
 *
 * The images are deferred — `data-src` plus the carousel's look-ahead — so a
 * hero with five photos costs one photo on arrival rather than five.
 */
export const EditorialHero: Story = {
  parameters: {
    docs: {
      source: {
        code: `const PHOTOS = [
  { title: 'Open an account in minutes', kicker: 'Everyday banking' },
  // …
];

function EditorialHero() {
  const hero = useDCarouselController();

  return (
    <div style={{ position: 'relative' }}>
      <DCarousel
        label="Featured stories"
        controller={hero}
        arrows={false}
        pagination={false}
        perPage={1}
        loop
        autoplay
        interval={6000}
      >
        {PHOTOS.map((item, index) => (
          <DCarousel.Slide key={item.title}>
            <div style={{ position: 'relative', borderRadius: 'var(--df-shape-surface)', overflow: 'hidden' }}>
              {/* Deferred: the hero costs one photo on arrival, not five. */}
              <img
                data-src={photo(index)}
                width={1200}
                height={675}
                alt=""
                style={{ display: 'block', inlineSize: '100%', blockSize: 'auto' }}
              />

              {/* The scrim keeps the headline legible on a photo nobody vetted. */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgb(0 0 0 / 72%) 0%, rgb(0 0 0 / 10%) 55%)',
                }}
              />

              <div style={{ position: 'absolute', insetInline: 0, bottom: 0, padding: '2rem', color: '#f8fafc' }}>
                <p className="df-fs-label df-mb-2">{item.kicker}</p>
                <h3 className="df-fs-heading-2" style={{ margin: 0, maxWidth: '18ch' }}>{item.title}</h3>
              </div>
            </div>
          </DCarousel.Slide>
        ))}
      </DCarousel>

      {/* Over the image, bottom right: a fraction rather than dots. */}
      <div
        className="df-flex df-items-center df-gap-3"
        style={{ position: 'absolute', insetInlineEnd: '2rem', bottom: '2rem', color: '#f8fafc' }}
      >
        <span className="df-fs-body-sm" style={{ fontVariantNumeric: 'tabular-nums' }}>
          {\`\${pad(hero.activePage)} / \${pad(hero.pageCount - 1)}\`}
        </span>
        <DCarousel.Prev controller={hero} />
        <DCarousel.Next controller={hero} />
        <DCarousel.Autoplay controller={hero} />
      </div>
    </div>
  );
}`,
      },
    },
  },
  render: () => <EditorialHeroExample />,
};

function ProgressRailExample() {
  const strip = useDCarouselController();

  return (
    <div style={{ width: '100%', maxWidth: 900 }}>
      <DCarousel
        label="Guides"
        controller={strip}
        arrows={false}
        pagination={false}
        perPage={1}
        gap={4}
      >
        {PHOTOS.map((item) => (
          <DCarousel.Slide key={item.title}>
            <div className="df-bg-surface df-rounded-surface df-p-5">
              <p className="df-fs-label df-text-muted df-mb-2">{item.kicker}</p>
              <h4 className="df-fs-heading-4 df-mb-3">{item.title}</h4>
              <p className="df-text-muted" style={{ margin: 0 }}>
                A short standfirst of the kind a guide or a help-centre article
                carries, long enough to show two lines of real text.
              </p>
            </div>
          </DCarousel.Slide>
        ))}
      </DCarousel>

      {/*
        * A segmented rail instead of dots.
        *
        * Same information, read as progress rather than as a row of targets —
        * and each segment is still a button, so it keeps the one thing dots are
        * good for. `role="tablist"` is left to `DCarousel.Pagination`; these are
        * plain buttons with `aria-current`, which is the honest shape for
        * something that is not a tab strip.
        */}
      <div className="df-flex df-gap-1 df-mt-3" style={{ blockSize: 4 }}>
        {Array.from({ length: strip.pageCount }, (_, page) => (
          <button
            key={`rail-${page}`}
            type="button"
            aria-label={`Go to slide ${page + 1}`}
            aria-current={page === strip.activePage}
            {...strip.viewportId && { 'aria-controls': strip.viewportId }}
            onClick={() => strip.goToPage(page)}
            style={{
              flex: 1,
              blockSize: '100%',
              padding: 0,
              cursor: 'pointer',
              border: 0,
              borderRadius: 999,
              background: page === strip.activePage
                ? 'var(--df-role-primary-base)'
                : 'var(--df-border-default)',
              transition: 'background-color var(--df-motion-duration-hover) var(--df-motion-easing-standard)',
            }}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * A progress rail instead of dots.
 *
 * The same information read as progress rather than as a row of targets, which
 * suits a sequence somebody is meant to read in order — a guide, an onboarding
 * tour, a changelog. Each segment is still a button, so it keeps the one thing
 * dots are good for.
 */
export const ProgressRail: Story = {
  parameters: {
    docs: {
      source: {
        code: `function ProgressRail() {
  const strip = useDCarouselController();

  return (
    <div>
      <DCarousel
        label="Guides"
        controller={strip}
        arrows={false}
        pagination={false}
        perPage={1}
        gap={4}
      >
        <DCarousel.Slide>…</DCarousel.Slide>
      </DCarousel>

      {/*
        A segmented rail instead of dots: the same information read as
        progress. Plain buttons with \`aria-current\`, not a tablist — this is
        not a tab strip, and saying so would be a promise the markup cannot
        keep. \`DCarousel.Pagination\` is the tablist version.
      */}
      <div className="df-flex df-gap-1 df-mt-3" style={{ blockSize: 4 }}>
        {Array.from({ length: strip.pageCount }, (unused, page) => (
          <button
            key={page}
            type="button"
            aria-label={\`Go to slide \${page + 1}\`}
            aria-current={page === strip.activePage}
            aria-controls={strip.viewportId}
            onClick={() => strip.goToPage(page)}
            style={{
              flex: 1,
              blockSize: '100%',
              padding: 0,
              border: 0,
              borderRadius: 999,
              cursor: 'pointer',
              background: page === strip.activePage
                ? 'var(--df-role-primary-base)'
                : 'var(--df-border-default)',
            }}
          />
        ))}
      </div>
    </div>
  );
}`,
      },
    },
  },
  render: () => <ProgressRailExample />,
};

function SectionHeaderExample() {
  const row = useDCarouselController();

  return (
    <div style={{ width: '100%', maxWidth: 1000 }}>
      {/*
        * The pattern most marketing sites actually use: the section's own
        * heading on the left, the arrows on the right, and the strip below
        * bleeding off the edge. Before the controller this was impossible —
        * the arrows could only live inside the carousel's own box.
        */}
      <header className="df-flex df-items-center df-gap-3 df-mb-4">
        <h3 className="df-fs-heading-4 df-me-auto" style={{ margin: 0 }}>Featured products</h3>
        <a className="df-fs-body-sm" href="#all">See all</a>
        <DCarousel.Prev controller={row} />
        <DCarousel.Next controller={row} />
      </header>

      <DCarousel
        label="Featured products"
        controller={row}
        arrows={false}
        pagination={false}
        perPage={{ xs: 1, sm: 2, md: 3 }}
        peek={10}
        gap={3}
      >
        {PRODUCTS.map((item) => (
          <DCarousel.Slide key={item.id}>
            <article className="df-bg-surface df-rounded-surface df-overflow-hidden">
              <img
                data-src={photo(item.photoIndex, 600, 400)}
                width={600}
                height={400}
                alt=""
                style={{ display: 'block', inlineSize: '100%', blockSize: 'auto' }}
              />
              <div className="df-p-4">
                <p className="df-fs-label df-text-muted df-mb-2">{item.kicker}</p>
                <h4 className="df-fs-heading-6" style={{ margin: 0 }}>{item.title}</h4>
              </div>
            </article>
          </DCarousel.Slide>
        ))}
      </DCarousel>
    </div>
  );
}

/**
 * Controls in the section header.
 *
 * The heading on the left, the arrows on the right, the strip below bleeding
 * off the edge with a `peek` so it is obvious there is more. This is the
 * commonest row on a modern marketing site, and before the controller it could
 * not be built: the arrows could only live inside the carousel's own box.
 */
export const SectionHeaderControls: Story = {
  parameters: {
    docs: {
      source: {
        code: `function SectionHeaderControls() {
  const row = useDCarouselController();

  return (
    <div>
      {/*
        The heading left, the arrows right, the strip below. Before the
        controller the arrows could only live inside the carousel's own box.
      */}
      <header className="df-flex df-items-center df-gap-3 df-mb-4">
        <h3 className="df-fs-heading-4 df-me-auto" style={{ margin: 0 }}>Featured products</h3>
        <a className="df-fs-body-sm" href="#all">See all</a>
        <DCarousel.Prev controller={row} />
        <DCarousel.Next controller={row} />
      </header>

      <DCarousel
        label="Featured products"
        controller={row}
        arrows={false}
        pagination={false}
        perPage={{ xs: 1, sm: 2, md: 3 }}
        peek={10}
        gap={3}
      >
        {PRODUCTS.map((item) => (
          <DCarousel.Slide key={item.id}>
            <article className="df-bg-surface df-rounded-surface df-overflow-hidden">
              <img
                data-src={photo(item.photoIndex, 600, 400)}
                width={600}
                height={400}
                alt=""
                style={{ display: 'block', inlineSize: '100%', blockSize: 'auto' }}
              />
              <div className="df-p-4">
                <p className="df-fs-label df-text-muted df-mb-2">{item.kicker}</p>
                <h4 className="df-fs-heading-6" style={{ margin: 0 }}>{item.title}</h4>
              </div>
            </article>
          </DCarousel.Slide>
        ))}
      </DCarousel>
    </div>
  );
}`,
      },
    },
  },
  render: () => <SectionHeaderExample />,
};

function FilmstripExample() {
  const gallery = useDCarouselController();

  return (
    <div style={{
      width: '100%', maxWidth: 760, display: 'grid', gap: '0.75rem',
    }}
    >
      <DCarousel
        label="Product gallery"
        controller={gallery}
        arrows={false}
        pagination={false}
        perPage={1}
      >
        {PHOTOS.map((item, index) => (
          <DCarousel.Slide key={item.title}>
            <img
              data-src={photo(index, 900, 600)}
              width={900}
              height={600}
              alt=""
              style={{
                display: 'block',
                inlineSize: '100%',
                blockSize: 'auto',
                borderRadius: 'var(--df-shape-surface)',
              }}
            />
          </DCarousel.Slide>
        ))}
      </DCarousel>

      {/*
        * `goToSlide`, not `goToPage`: a thumbnail points at a SLIDE, and the
        * two stop being the same unit the moment more than one is on screen.
        * This is the feature the v3 issue listed as having no replacement.
        */}
      <div className="df-flex df-gap-2" style={{ overflowX: 'auto' }}>
        {PHOTOS.map((item, index) => {
          const current = index === gallery.activeIndex;
          return (
            <button
              key={`thumb-${item.title}`}
              type="button"
              aria-label={`Show image ${index + 1}`}
              aria-current={current}
              {...gallery.viewportId && { 'aria-controls': gallery.viewportId }}
              onClick={() => gallery.goToSlide(index)}
              style={{
                flex: '0 0 auto',
                padding: 0,
                cursor: 'pointer',
                background: 'none',
                border: `2px solid ${current ? 'var(--df-role-primary-base)' : 'transparent'}`,
                borderRadius: 'var(--df-shape-control-sm)',
                lineHeight: 0,
              }}
            >
              <img
                src={photo(index, 120, 80)}
                width={120}
                height={80}
                alt=""
                style={{ display: 'block', borderRadius: 'var(--df-shape-control-sm)' }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

/**
 * A filmstrip under the image.
 *
 * The product-gallery pattern. The thumbnails call `goToSlide` — a thumbnail
 * points at a SLIDE, and a slide stops being a page the moment more than one
 * is on screen — and read `activeIndex` to outline the current one.
 *
 * The thumbnails themselves are NOT deferred: they are small, all of them are
 * on screen at once, and deferring something already visible costs a round
 * trip for nothing.
 */
export const Filmstrip: Story = {
  parameters: {
    docs: {
      source: {
        code: `function Filmstrip() {
  const gallery = useDCarouselController();

  return (
    <div style={{ display: 'grid', gap: '0.75rem' }}>
      <DCarousel
        label="Product gallery"
        controller={gallery}
        arrows={false}
        pagination={false}
        perPage={1}
      >
        {PHOTOS.map((item, index) => (
          <DCarousel.Slide key={item.title}>
            <img data-src={photo(index, 900, 600)} width={900} height={600} alt="" />
          </DCarousel.Slide>
        ))}
      </DCarousel>

      {/*
        \`goToSlide\`, not \`goToPage\`: a thumbnail points at a SLIDE, and the two
        stop being the same unit once more than one is on screen.

        The thumbnails are NOT deferred — they are small, all on screen, and
        deferring something already visible is a round trip for nothing.
      */}
      <div className="df-flex df-gap-2" style={{ overflowX: 'auto' }}>
        {PHOTOS.map((item, index) => {
          const current = index === gallery.activeIndex;

          return (
            <button
              key={item.title}
              type="button"
              aria-label={\`Show image \${index + 1}\`}
              aria-current={current}
              aria-controls={gallery.viewportId}
              onClick={() => gallery.goToSlide(index)}
              style={{
                flex: '0 0 auto',
                padding: 0,
                lineHeight: 0,
                cursor: 'pointer',
                background: 'none',
                border: \`2px solid \${current ? 'var(--df-role-primary-base)' : 'transparent'}\`,
                borderRadius: 'var(--df-shape-control-sm)',
              }}
            >
              <img src={photo(index, 120, 80)} width={120} height={80} alt="" />
            </button>
          );
        })}
      </div>
    </div>
  );
}`,
      },
    },
  },
  render: () => <FilmstripExample />,
};

/**
 * A brand strip.
 *
 * `variableWidth` so each name takes its own width — dividing the row into
 * equal shares is the wrong model when the content is logos or names of
 * different lengths. No arrows, no dots: nothing here is worth navigating to,
 * it is a texture, and it still drags and scrolls because that is the
 * browser's.
 */
export const BrandStrip: Story = {
  parameters: {
    docs: {
      source: {
        code: `<DCarousel
  label="Customers"
  variableWidth
  arrows={false}
  pagination={false}
  autoplay
  interval={2500}
  loop
  gap={5}
  peek={6}
>
  {BRANDS.map((name) => (
    <DCarousel.Slide key={name}>
      <span className="df-fs-heading-5 df-text-muted df-fw-semibold" style={{ whiteSpace: 'nowrap' }}>
        {name}
      </span>
    </DCarousel.Slide>
  ))}
</DCarousel>`,
      },
    },
  },
  render: () => (
    <div style={{ width: '100%', maxWidth: 900 }}>
      <p className="df-fs-label df-text-muted df-mb-3">Trusted by</p>
      <DCarousel
        label="Customers"
        variableWidth
        arrows={false}
        pagination={false}
        autoplay
        interval={2500}
        loop
        gap={5}
        peek={6}
      >
        {[
          'Northbank', 'Cordillera', 'Atacama Seguros', 'Grupo Lumen',
          'Vía Central', 'Patagonia Capital', 'Altamar', 'Quilla',
        ].map((name) => (
          <DCarousel.Slide key={name}>
            <span
              className="df-fs-heading-5 df-text-muted df-fw-semibold"
              style={{ whiteSpace: 'nowrap' }}
            >
              {name}
            </span>
          </DCarousel.Slide>
        ))}
      </DCarousel>
    </div>
  ),
};

const VOICES = [
  { name: 'Camila Rojas', role: 'Small business owner', quote: 'Opening the account took less time than my coffee. I had the card number before I finished it.' },
  { name: 'Diego Fuentes', role: 'Freelance designer', quote: 'The part I did not expect was the support. A real person, on a Sunday, who already knew my case.' },
  { name: 'Valentina Soto', role: 'Teacher', quote: 'I moved everything over in an afternoon. Nothing broke, no branch, no paperwork I had to print.' },
];

function QuotesExample() {
  const voices = useDCarouselController();

  return (
    <div style={{ width: '100%', maxWidth: 680, textAlign: 'center' }}>
      <DCarousel
        label="What people say"
        controller={voices}
        arrows={false}
        pagination={false}
        perPage={1}
      >
        {VOICES.map((voice) => (
          <DCarousel.Slide key={voice.name}>
            <blockquote className="df-fs-heading-5" style={{ margin: 0, fontStyle: 'italic' }}>
              {`“${voice.quote}”`}
            </blockquote>
          </DCarousel.Slide>
        ))}
      </DCarousel>

      {/*
        * Navigation by PERSON rather than by position. A dot says "slide two";
        * a name says whose words these are, which is the thing a reader is
        * actually choosing between.
        */}
      <div className="df-flex df-justify-center df-gap-4 df-mt-4">
        {VOICES.map((voice, index) => {
          const current = index === voices.activeIndex;
          return (
            <button
              key={voice.name}
              type="button"
              aria-current={current}
              {...voices.viewportId && { 'aria-controls': voices.viewportId }}
              onClick={() => voices.goToSlide(index)}
              className="df-fs-body-sm"
              style={{
                padding: 0,
                cursor: 'pointer',
                background: 'none',
                border: 0,
                borderBlockEnd: `2px solid ${current ? 'var(--df-role-primary-base)' : 'transparent'}`,
                color: current ? 'var(--df-fg-default)' : 'var(--df-fg-muted)',
              }}
            >
              <span className="df-fw-semibold">{voice.name}</span>
              <span className="df-fs-body-xs df-text-muted" style={{ display: 'block' }}>
                {voice.role}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Quotes, navigated by person.
 *
 * A dot says "slide two"; a name says whose words these are, which is what a
 * reader is actually choosing between. Same two calls as the filmstrip —
 * `goToSlide` to move, `activeIndex` to mark — with the labels carrying the
 * meaning instead of the position.
 */
export const QuotesByPerson: Story = {
  parameters: {
    docs: {
      source: {
        code: `const VOICES = [
  { name: 'Camila Rojas', role: 'Small business owner', quote: '…' },
  // …
];

function QuotesByPerson() {
  const voices = useDCarouselController();

  return (
    <div style={{ textAlign: 'center' }}>
      <DCarousel
        label="What people say"
        controller={voices}
        arrows={false}
        pagination={false}
        perPage={1}
      >
        {VOICES.map((voice) => (
          <DCarousel.Slide key={voice.name}>
            <blockquote className="df-fs-heading-5" style={{ margin: 0, fontStyle: 'italic' }}>
              {\`“\${voice.quote}”\`}
            </blockquote>
          </DCarousel.Slide>
        ))}
      </DCarousel>

      {/*
        Navigation by PERSON rather than by position. A dot says "slide two";
        a name says whose words these are, which is what a reader is choosing.
      */}
      <div className="df-flex df-justify-center df-gap-4 df-mt-4">
        {VOICES.map((voice, index) => {
          const current = index === voices.activeIndex;

          return (
            <button
              key={voice.name}
              type="button"
              aria-current={current}
              aria-controls={voices.viewportId}
              onClick={() => voices.goToSlide(index)}
              className="df-fs-body-sm"
              style={{
                padding: 0,
                background: 'none',
                border: 0,
                cursor: 'pointer',
                borderBlockEnd: \`2px solid \${current ? 'var(--df-role-primary-base)' : 'transparent'}\`,
                color: current ? 'var(--df-fg-default)' : 'var(--df-fg-muted)',
              }}
            >
              <span className="df-fw-semibold">{voice.name}</span>
              <span className="df-fs-body-xs df-text-muted" style={{ display: 'block' }}>{voice.role}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}`,
      },
    },
  },
  render: () => <QuotesExample />,
};

function ControlBarExample() {
  const deck = useDCarouselController();

  return (
    <div style={{ width: '100%', maxWidth: 820 }}>
      <DCarousel
        label="Reports"
        controller={deck}
        arrows={false}
        pagination={false}
        perPage={{ xs: 1, md: 2 }}
        gap={3}
        autoplay
        interval={5000}
        loop
      >
        {PHOTOS.map((item, index) => (
          <DCarousel.Slide key={item.title}>
            <article className="df-bg-surface df-rounded-surface df-overflow-hidden">
              <img
                data-src={photo(index, 640, 360)}
                width={640}
                height={360}
                alt=""
                style={{ display: 'block', inlineSize: '100%', blockSize: 'auto' }}
              />
              <div className="df-p-4">
                <p className="df-fs-label df-text-muted df-mb-2">{item.kicker}</p>
                <h4 className="df-fs-heading-6" style={{ margin: 0 }}>{item.title}</h4>
              </div>
            </article>
          </DCarousel.Slide>
        ))}
      </DCarousel>

      {/*
        * One bar for everything: arrows, dots and the play control in a single
        * row under the strip.
        *
        * It is a plain flex row. `DCarousel.Pagination` brings its own
        * `role="tablist"` and the arrows sit OUTSIDE it as siblings — putting
        * them inside would make two buttons that are not tabs into tabs, which
        * is a promise the markup could not keep.
        */}
      <div
        className="df-flex df-items-center df-justify-center df-gap-3 df-mt-4 df-px-4 df-py-2"
        style={{
          marginInline: 'auto',
          inlineSize: 'fit-content',
          background: 'var(--df-bg-surface)',
          borderRadius: 999,
          boxShadow: 'var(--df-elevation-sm)',
        }}
      >
        <DCarousel.Prev controller={deck} />
        <DCarousel.Pagination controller={deck} />
        <DCarousel.Next controller={deck} />
        <span style={{ inlineSize: 1, blockSize: '1.25rem', background: 'var(--df-border-default)' }} />
        <DCarousel.Autoplay controller={deck} />
      </div>
    </div>
  );
}

/**
 * Every control in one bar.
 *
 * Arrows, dots and the play toggle in a single row under the strip — the shape
 * a media player uses, and the one that stops a reader hunting for the
 * controls in three places.
 *
 * It needed one change in the stylesheet to be possible at all. The arrow was
 * `position: absolute` unconditionally, which was right while the only arrows
 * were the carousel's own and wrong the moment the controller let one live
 * somewhere else: in a flow row two absolutely positioned arrows land on top
 * of each other. Floating over the strip is now what a DIRECT CHILD of
 * `.df-carousel` does, so the built-in pair is unchanged and an arrow anywhere
 * else simply flows.
 *
 * The arrows are siblings of the pagination, not children of it:
 * `DCarousel.Pagination` is a `role="tablist"`, and a button that is not a tab
 * has no business inside one.
 */
export const ControlBar: Story = {
  parameters: {
    docs: {
      source: {
        code: `function ControlBar() {
  const deck = useDCarouselController();

  return (
    <div>
      <DCarousel
        label="Reports"
        controller={deck}
        arrows={false}
        pagination={false}
        perPage={{ xs: 1, md: 2 }}
        gap={3}
        autoplay
        interval={5000}
        loop
      >
        <DCarousel.Slide>…</DCarousel.Slide>
      </DCarousel>

      {/*
        One bar for everything. A plain flex row: the arrows sit OUTSIDE the
        pagination as siblings, because \`DCarousel.Pagination\` is a
        \`role="tablist"\` and a button that is not a tab has no business in one.
      */}
      <div
        className="df-flex df-items-center df-justify-center df-gap-3 df-mt-4 df-px-4 df-py-2"
        style={{
          marginInline: 'auto',
          inlineSize: 'fit-content',
          background: 'var(--df-bg-surface)',
          borderRadius: 999,
          boxShadow: 'var(--df-elevation-sm)',
        }}
      >
        <DCarousel.Prev controller={deck} />
        <DCarousel.Pagination controller={deck} />
        <DCarousel.Next controller={deck} />
        <span style={{ inlineSize: 1, blockSize: '1.25rem', background: 'var(--df-border-default)' }} />
        <DCarousel.Autoplay controller={deck} />
      </div>
    </div>
  );
}`,
      },
    },
  },
  render: () => <ControlBarExample />,
};
