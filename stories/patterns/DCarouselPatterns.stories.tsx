import { Meta, StoryObj } from '@storybook/react-vite';
import { DCarousel, DButton, DBox } from '../../src';

const meta: Meta<typeof DCarousel> = {
  title: 'Patterns/Carousel Patterns',
  component: DCarousel,
  parameters: {
    docs: {
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
      <h5 className="mb-3">Marketing Campaigns</h5>
      <DCarousel
        options={{
          type: 'loop',
          perPage: 1,
          autoplay: true,
          interval: 5000,
          pauseOnHover: true,
          arrows: true,
          pagination: true,
        }}
      >
        <DCarousel.Slide>
          <div className="bg-white rounded overflow-hidden">
            <div className="row g-0">
              <div className="col-md-6">
                <img
                  src={SAMPLE_IMAGE}
                  alt="Campaign"
                  className="w-100 h-100 object-fit-cover"
                  style={{ minHeight: '400px' }}
                />
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="p-5">
                  <h4 className="mb-3">Summer Sale 2024</h4>
                  <p className="text-body-secondary mb-4">
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
          <div className="bg-gray-25 rounded overflow-hidden">
            <div className="row g-0">
              <div className="col-md-6">
                <img
                  src={SAMPLE_IMAGE}
                  alt="Campaign"
                  className="w-100 h-100 object-fit-cover"
                  style={{ minHeight: '400px' }}
                />
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="p-5">
                  <h4 className="mb-3">New Customer Bonus</h4>
                  <p className="text-body-secondary mb-4">
                    Open an account today and receive $100 bonus. Terms and conditions apply.
                  </p>
                  <DButton text="Get Started" color="success" />
                </div>
              </div>
            </div>
          </div>
        </DCarousel.Slide>

        <DCarousel.Slide>
          <div className="bg-primary-50 rounded overflow-hidden">
            <div className="row g-0">
              <div className="col-md-6">
                <img
                  src={SAMPLE_IMAGE}
                  alt="Campaign"
                  className="w-100 h-100 object-fit-cover"
                  style={{ minHeight: '400px' }}
                />
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="p-5">
                  <h4 className="mb-3">Investment Opportunities</h4>
                  <p className="text-body-secondary mb-4">
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
      <h5 className="mb-3">Premium Offers</h5>
      <DCarousel
        options={{
          type: 'loop',
          perPage: 1,
          autoplay: true,
          interval: 5000,
          pauseOnHover: true,
          arrows: true,
          pagination: true,
        }}
      >
        <DCarousel.Slide>
          <div className="bg-primary rounded overflow-hidden">
            <div className="row g-0">
              <div className="col-md-6">
                <img
                  src={SAMPLE_IMAGE}
                  alt="Campaign"
                  className="w-100 h-100 object-fit-cover"
                  style={{ minHeight: '400px' }}
                />
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="p-5 text-white">
                  <h4 className="mb-3">Premium Credit Card</h4>
                  <p className="mb-4" style={{ opacity: 0.9 }}>
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
          <div className="bg-dark rounded overflow-hidden">
            <div className="row g-0">
              <div className="col-md-6">
                <img
                  src={SAMPLE_IMAGE}
                  alt="Campaign"
                  className="w-100 h-100 object-fit-cover"
                  style={{ minHeight: '400px' }}
                />
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="p-5 text-white">
                  <h4 className="mb-3">Black Friday Special</h4>
                  <p className="mb-4" style={{ opacity: 0.9 }}>
                    Limited time offer! Get exclusive deals on all our services. Dont miss out!
                  </p>
                  <DButton text="View Deals" color="light" />
                </div>
              </div>
            </div>
          </div>
        </DCarousel.Slide>

        <DCarousel.Slide>
          <div className="bg-success rounded overflow-hidden">
            <div className="row g-0">
              <div className="col-md-6">
                <img
                  src={SAMPLE_IMAGE}
                  alt="Campaign"
                  className="w-100 h-100 object-fit-cover"
                  style={{ minHeight: '400px' }}
                />
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="p-5 text-white">
                  <h4 className="mb-3">Go Green with Us</h4>
                  <p className="mb-4" style={{ opacity: 0.9 }}>
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
      <h5 className="mb-3">Featured Campaigns</h5>
      <DCarousel
        options={{
          type: 'loop',
          perPage: 1,
          autoplay: true,
          interval: 4000,
          pauseOnHover: true,
          arrows: true,
          pagination: true,
        }}
      >
        <DCarousel.Slide>
          <div className="bg-white rounded overflow-hidden border">
            <div className="row g-0">
              <div className="col-md-5">
                <img
                  src={SAMPLE_IMAGE}
                  alt="Campaign"
                  className="w-100 h-100 object-fit-cover"
                  style={{ minHeight: '350px' }}
                />
              </div>
              <div className="col-md-7 d-flex align-items-center">
                <div className="p-4">
                  <h4 className="mb-3">Low Interest Loans</h4>
                  <p className="text-body-secondary mb-4">
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
          <div className="bg-warning-50 rounded overflow-hidden">
            <div className="row g-0">
              <div className="col-md-5">
                <img
                  src={SAMPLE_IMAGE}
                  alt="Campaign"
                  className="w-100 h-100 object-fit-cover"
                  style={{ minHeight: '350px' }}
                />
              </div>
              <div className="col-md-7 d-flex align-items-center">
                <div className="p-4">
                  <h4 className="mb-3">Insurance Plans</h4>
                  <p className="text-body-secondary mb-4">
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
          <div className="bg-info-50 rounded overflow-hidden">
            <div className="row g-0">
              <div className="col-md-5">
                <img
                  src={SAMPLE_IMAGE}
                  alt="Campaign"
                  className="w-100 h-100 object-fit-cover"
                  style={{ minHeight: '350px' }}
                />
              </div>
              <div className="col-md-7 d-flex align-items-center">
                <div className="p-4">
                  <h4 className="mb-3">Savings Account</h4>
                  <p className="text-body-secondary mb-4">
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
      <h5 className="mb-3">Special Offers</h5>
      <DCarousel
        options={{
          type: 'loop',
          perPage: 1,
          autoplay: true,
          interval: 4500,
          pauseOnHover: true,
          arrows: true,
          pagination: true,
        }}
      >
        <DCarousel.Slide>
          <div className="bg-success-50 rounded overflow-hidden">
            <div className="row g-0">
              <div className="col-md-7 d-flex align-items-center">
                <div className="p-5">
                  <h4 className="mb-3">Business Banking</h4>
                  <p className="text-body-secondary mb-4">
                    Powerful tools to help your business grow.
                    From payment processing to payroll management.
                  </p>
                  <DButton text="Get Started" color="success" />
                </div>
              </div>
              <div className="col-md-5">
                <img
                  src={SAMPLE_IMAGE}
                  alt="Campaign"
                  className="w-100 h-100 object-fit-cover"
                  style={{ minHeight: '350px' }}
                />
              </div>
            </div>
          </div>
        </DCarousel.Slide>

        <DCarousel.Slide>
          <div className="bg-purple-50 rounded overflow-hidden">
            <div className="row g-0">
              <div className="col-md-7 d-flex align-items-center">
                <div className="p-5">
                  <h4 className="mb-3">Student Discounts</h4>
                  <p className="text-body-secondary mb-4">
                    Special rates for students.
                    No monthly fees and exclusive benefits designed for you.
                  </p>
                  <DButton text="Learn More" color="purple" />
                </div>
              </div>
              <div className="col-md-5">
                <img
                  src={SAMPLE_IMAGE}
                  alt="Campaign"
                  className="w-100 h-100 object-fit-cover"
                  style={{ minHeight: '350px' }}
                />
              </div>
            </div>
          </div>
        </DCarousel.Slide>

        <DCarousel.Slide>
          <div className="bg-danger-50 rounded overflow-hidden">
            <div className="row g-0">
              <div className="col-md-7 d-flex align-items-center">
                <div className="p-5">
                  <h4 className="mb-3">Limited Time Offer</h4>
                  <p className="text-body-secondary mb-4">
                    Dont miss our exclusive promotion!
                    Open an account this month and get special benefits.
                  </p>
                  <DButton text="Claim Offer" color="danger" />
                </div>
              </div>
              <div className="col-md-5">
                <img
                  src={SAMPLE_IMAGE}
                  alt="Campaign"
                  className="w-100 h-100 object-fit-cover"
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
      <h5 className="mb-3">Quick Promotions</h5>
      <DCarousel
        options={{
          type: 'loop',
          perPage: 1,
          autoplay: true,
          interval: 3000,
          pauseOnHover: true,
          arrows: true,
          pagination: true,
          height: '250px',
        }}
      >
        <DCarousel.Slide>
          <div className="bg-primary rounded overflow-hidden h-100">
            <div className="row g-0 h-100">
              <div className="col-md-5">
                <img
                  src={SAMPLE_IMAGE}
                  alt="Campaign"
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
              <div className="col-md-7 d-flex align-items-center">
                <div className="p-4 text-white">
                  <h5 className="mb-2">Quick Transfer</h5>
                  <p className="mb-3 small" style={{ opacity: 0.9 }}>
                    Send money instantly with zero fees
                  </p>
                  <DButton text="Try Now" color="light" size="sm" />
                </div>
              </div>
            </div>
          </div>
        </DCarousel.Slide>

        <DCarousel.Slide>
          <div className="bg-success rounded overflow-hidden h-100">
            <div className="row g-0 h-100">
              <div className="col-md-5">
                <img
                  src={SAMPLE_IMAGE}
                  alt="Campaign"
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
              <div className="col-md-7 d-flex align-items-center">
                <div className="p-4 text-white">
                  <h5 className="mb-2">Cashback Rewards</h5>
                  <p className="mb-3 small" style={{ opacity: 0.9 }}>
                    Earn up to 5% cashback on purchases
                  </p>
                  <DButton text="Join Now" color="light" size="sm" />
                </div>
              </div>
            </div>
          </div>
        </DCarousel.Slide>

        <DCarousel.Slide>
          <div className="bg-info rounded overflow-hidden h-100">
            <div className="row g-0 h-100">
              <div className="col-md-5">
                <img
                  src={SAMPLE_IMAGE}
                  alt="Campaign"
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
              <div className="col-md-7 d-flex align-items-center">
                <div className="p-4 text-white">
                  <h5 className="mb-2">Mobile App</h5>
                  <p className="mb-3 small" style={{ opacity: 0.9 }}>
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
