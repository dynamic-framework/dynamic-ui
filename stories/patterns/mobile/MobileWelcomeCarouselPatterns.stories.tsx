import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';

import {
  DBox,
  DButton,
  DCarousel,
  DIcon,
} from '../../../src';

import DocsTemplate from '../docs/Template.mdx';

type OnboardingSlide = {
  id: string;
  icon: string;
  title: string;
  description: string;
  accentColor: string;
};

const ONBOARDING_SLIDES: OnboardingSlide[] = [
  {
    id: 'ecosystem',
    icon: 'Globe',
    title: 'WELCOME TO ECOSPHERE',
    description: 'Discover initiatives and projects that create positive impact in your community.',
    accentColor: '#ff6b2c',
  },
  {
    id: 'stories',
    icon: 'BookOpenText',
    title: 'ACTIONABLE STORIES',
    description: 'Follow real stories and explore concrete ways to participate and contribute.',
    accentColor: '#2b8fff',
  },
  {
    id: 'collective',
    icon: 'Lightbulb',
    title: 'COLLECTIVE CHANGE',
    description: 'Join actions with others and track how small efforts become meaningful results.',
    accentColor: '#e048dd',
  },
];

type OnboardingPhotoSlide = {
  id: string;
  icon: string;
  title: string;
  description: string;
  imageUrl: string;
};

const ONBOARDING_PHOTO_SLIDES: OnboardingPhotoSlide[] = [
  {
    id: 'explore',
    icon: 'Compass',
    title: 'EXPLORE TOGETHER',
    description: 'Discover places, communities, and initiatives around you with one guided experience.',
    imageUrl: 'https://cdn.modyo.cloud/uploads/9b8adb42-1acc-4517-bfc2-8b52172e09a4/original/pexels-danieljschwarz-37326386.jpg',
  },
  {
    id: 'stories',
    icon: 'BookOpenText',
    title: 'LIVE THE STORY',
    description: 'Capture moments, follow real journeys, and connect each action with meaningful impact.',
    imageUrl: 'https://cdn.modyo.cloud/uploads/30477767-6d33-4430-b975-a117c59fc596/original/pexels-felipe-perfeito-2161694583-37705196.jpg',
  },
  {
    id: 'nature',
    icon: 'Leaf',
    title: 'CREATE IMPACT',
    description: 'Turn small decisions into collective progress with goals and suggestions tailored to you.',
    imageUrl: 'https://cdn.modyo.cloud/uploads/db9bc192-5065-4bcf-8750-563e43e36558/original/pexels-filip-kvasnak-2147757883-32583533.jpg',
  },
];

const ONBOARDING_WELCOME_CAROUSEL_SOURCE = String.raw`import { DButton, DCarousel, DIcon } from '../../src';

const ONBOARDING_SLIDES = [
  {
    id: 'ecosystem',
    icon: 'Globe',
    title: 'WELCOME TO ECOSPHERE',
    description: 'Discover initiatives and projects that create positive impact in your community.',
    accentColor: '#ff6b2c',
  },
  {
    id: 'stories',
    icon: 'BookOpenText',
    title: 'ACTIONABLE STORIES',
    description: 'Follow real stories and explore concrete ways to participate and contribute.',
    accentColor: '#2b8fff',
  },
  {
    id: 'collective',
    icon: 'Lightbulb',
    title: 'COLLECTIVE CHANGE',
    description: 'Join actions with others and track how small efforts become meaningful results.',
    accentColor: '#e048dd',
  },
];

function MobileWelcomeCarouselPatternExample() {
  return (
    <div className="df-border-1 df-relative df-overflow-hidden df-rounded-control" style={{ width: '390px', maxWidth: '100%', height: '760px', background: 'linear-gradient(180deg, #53c9cc 0%, #61d1d2 35%, #7ad7d6 100%)' }}>
      <div className="df-h-full df-p-3">
        <div className="df-bg-surface df-rounded-control df-h-full df-flex df-flex-col df-shadow-sm">
          <div className="df-grow df-px-2 df-pt-3 df-pb-2">
            <DCarousel
              label="Onboarding"
              loop="rewind"
              perPage={1}
              perMove={1}
              arrows={false}
              gap={3}
            >
              {ONBOARDING_SLIDES.map((slide) => (
                <DCarousel.Slide key={slide.id}>
                  <div className="df-h-full df-flex df-flex-col df-items-center df-justify-center df-text-center df-px-3 df-py-4">
                    <div className="df-flex df-items-center df-justify-center df-rounded-pill df-mb-4" style={{ width: '176px', height: '176px', background: 'linear-gradient(180deg, #e4f6f7 0%, #f5f7f8 100%)' }}>
                      <DIcon icon={slide.icon} size="5.5rem" className="df-text-primary" />
                    </div>
                    <h5 className="df-mb-2" style={{ letterSpacing: '0.06em' }}>{slide.title}</h5>
                    <span className="df-block df-rounded-pill df-mb-3" style={{ width: '44px', height: '4px', backgroundColor: slide.accentColor }} />
                    <p className="df-text-muted df-mb-0" style={{ maxWidth: '260px' }}>
                      {slide.description}
                    </p>
                  </div>
                </DCarousel.Slide>
              ))}
            </DCarousel>
          </div>

          <div className="df-px-3 df-pb-3 df-pt-2">
            <div className="df-grid df-gap-2">
              <DButton
                text="Log in"
                variant="outline"
                color="light"
                className="df-border-secondary df-text-secondary"
              />
              <DButton text="Continue" color="primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`;

const ONBOARDING_WELCOME_SPLIT_ACTIONS_SOURCE = String.raw`import { DButton, DCarousel, DIcon } from '../../src';

const ONBOARDING_PHOTO_SLIDES = [
  {
    id: 'explore',
    icon: 'Compass',
    title: 'EXPLORE TOGETHER',
    description: 'Discover places, communities, and initiatives around you with one guided experience.',
    imageUrl: 'https://cdn.modyo.cloud/uploads/9b8adb42-1acc-4517-bfc2-8b52172e09a4/original/pexels-danieljschwarz-37326386.jpg',
  },
  {
    id: 'stories',
    icon: 'BookOpenText',
    title: 'LIVE THE STORY',
    description: 'Capture moments, follow real journeys, and connect each action with meaningful impact.',
    imageUrl: 'https://cdn.modyo.cloud/uploads/30477767-6d33-4430-b975-a117c59fc596/original/pexels-felipe-perfeito-2161694583-37705196.jpg',
  },
  {
    id: 'nature',
    icon: 'Leaf',
    title: 'CREATE IMPACT',
    description: 'Turn small decisions into collective progress with goals and suggestions tailored to you.',
    imageUrl: 'https://cdn.modyo.cloud/uploads/db9bc192-5065-4bcf-8750-563e43e36558/original/pexels-filip-kvasnak-2147757883-32583533.jpg',
  },
];

function WelcomeOnboardingSplitActionsExample() {
  return (
    <div className="df-border-1 df-relative df-overflow-hidden df-rounded-control" style={{ width: '390px', maxWidth: '100%', height: '760px', background: 'linear-gradient(180deg, #0f2f35 0%, #164952 44%, #1a5d67 100%)' }}>
      <style>
        {'.welcome-photo-carousel .splide__pagination { bottom: 156px; z-index: 4; } .welcome-photo-carousel .splide__track { height: 100%; }'}
      </style>
      <div className="df-h-full df-relative">
        <div className="df-absolute df-top-0 df-start-0 df-bottom-0 df-end-0">
          <DCarousel
            className="df-h-full welcome-photo-carousel"
            label="Welcome"
            loop="rewind"
            perPage={1}
            perMove={1}
            arrows={false}
            gap={0}
            height="100%"
          >
            {ONBOARDING_PHOTO_SLIDES.map((slide) => (
              <DCarousel.Slide className="df-w-full" key={slide.id}>
                <article
                  className="df-relative df-overflow-hidden df-h-full"
                  style={{ minHeight: '100%', paddingBottom: '180px', backgroundImage: 'url(' + slide.imageUrl + ')', backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                <div className="df-absolute df-top-0 df-start-0 df-w-full df-h-full" style={{ background: 'linear-gradient(180deg, rgba(3, 16, 23, 0.12) 0%, rgba(3, 16, 23, 0.48) 44%, rgba(3, 16, 23, 0.86) 100%)' }} />
                <div className="df-relative df-h-full df-w-full df-flex df-flex-col df-justify-end df-p-4 df-text-on-emphasis">
                  <div className="df-flex df-items-center df-justify-center df-rounded-pill df-mb-3" style={{ width: '56px', height: '56px', backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(3px)' }}>
                    <DIcon icon={slide.icon} size="1.75rem" />
                  </div>
                  <h3 className="df-mb-2">{slide.title}</h3>
                  <p className="df-mb-0" style={{ opacity: 0.95, maxWidth: '90%' }}>{slide.description}</p>
                </div>
                </article>
              </DCarousel.Slide>
            ))}
          </DCarousel>
        </div>

        <div className="df-absolute df-bottom-0 df-start-0 df-end-0 df-p-3" style={{ zIndex: 3 }}>
          <div className="df-p-3 df-text-center">
            <DButton text="Start now" color="light" className="df-fw-semibold df-w-full" />
            <a href="/register" className="df-inline-block df-mt-3 df-text-on-emphasis df-underline">Register</a>
          </div>
        </div>
      </div>
    </div>
  );
}`;

const meta: Meta<typeof DBox> = {
  title: 'Patterns/Mobile/Welcome Carousel',
  component: DBox,
  parameters: {
    docs: {
      page: DocsTemplate,
      description: {
        component: 'Mobile onboarding welcome flow with DCarousel slides, icon-based visual storytelling, and footer actions for log in or continue.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DBox>;

function MobileViewport(
  {
    children,
  }: {
    children: ReactNode;
  },
) {
  return (
    <div
      className="df-border-1 df-relative df-overflow-hidden df-rounded-control"
      style={{
        width: '390px',
        maxWidth: '100%',
        height: '760px',
        background: 'linear-gradient(180deg, var(--df-role-primary-base) 0%, var(--df-role-primary-subtle) 35%, var(--df-role-primary-subtle) 100%)',
      }}
    >
      {children}
    </div>
  );
}

export const WelcomeOnboardingCarousel: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Onboarding pattern inspired by common welcome flows: swipeable slides, expressive icon visual, and CTA actions to log in or continue.',
      },
      source: {
        code: ONBOARDING_WELCOME_CAROUSEL_SOURCE,
        language: 'tsx',
      },
    },
  },
  render: () => (
    <MobileViewport>
      <div className="df-h-full df-p-3">
        <div className="df-bg-surface df-rounded-control df-h-full df-flex df-flex-col df-shadow-sm">
          <div className="df-grow df-px-2 df-pt-3 df-pb-2">
            <DCarousel
              label="Onboarding"
              loop="rewind"
              perPage={1}
              perMove={1}
              arrows={false}
              gap={3}
            >
              {ONBOARDING_SLIDES.map((slide) => (
                <DCarousel.Slide key={slide.id}>
                  <div className="df-h-full df-flex df-flex-col df-items-center df-justify-center df-text-center df-px-3 df-py-4">
                    <div
                      className="df-flex df-bg-primary-subtle df-items-center df-justify-center df-rounded-pill df-mb-4"
                      style={{
                        width: '176px',
                        height: '176px',
                      }}
                    >
                      <DIcon icon={slide.icon} size="5.5rem" className="df-text-primary" />
                    </div>

                    <h5 className="df-mb-2" style={{ letterSpacing: '0.06em' }}>
                      {slide.title}
                    </h5>

                    <span
                      className="df-block df-rounded-pill df-mb-3"
                      style={{
                        width: '44px',
                        height: '4px',
                        backgroundColor: slide.accentColor,
                      }}
                    />

                    <p className="df-text-muted df-mb-0" style={{ maxWidth: '260px' }}>
                      {slide.description}
                    </p>
                  </div>
                </DCarousel.Slide>
              ))}
            </DCarousel>
          </div>

          <div className="df-px-3 df-pb-3 df-pt-2">
            <div className="df-grid df-gap-2">
              <DButton
                text="Log in"
                variant="outline"
                color="light"
                className="df-border-secondary df-text-secondary"
              />
              <DButton text="Continue" color="primary" />
            </div>
          </div>
        </div>
      </div>
    </MobileViewport>
  ),
};

export const WelcomeOnboardingSplitActions: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Alternative welcome pattern with top skip action, glassmorphism-like panel, and primary account creation CTA.',
      },
      source: {
        code: ONBOARDING_WELCOME_SPLIT_ACTIONS_SOURCE,
        language: 'tsx',
      },
    },
  },
  render: () => (
    <div
      className="df-border-1 df-relative df-overflow-hidden df-rounded-control"
      style={{
        width: '390px',
        maxWidth: '100%',
        height: '760px',
        background: 'linear-gradient(180deg, #0f2f35 0%, #164952 44%, #1a5d67 100%)',
      }}
    >
      <style>
        {`
          .welcome-photo-carousel .splide__pagination {
            bottom: 156px;
            z-index: 4;
          }
          .welcome-photo-carousel .splide__track {
            height: 100%;
          }
        `}
      </style>
      <div className="df-h-full df-relative">
        <div className="df-absolute df-top-0 df-start-0 df-bottom-0 df-end-0">
          <DCarousel
            className="df-h-full welcome-photo-carousel"
            label="Welcome"
            loop="rewind"
            perPage={1}
            perMove={1}
            arrows={false}
            gap={0}
            height="100%"
          >
            {ONBOARDING_PHOTO_SLIDES.map((slide) => (
              <DCarousel.Slide className="df-w-full" key={slide.id}>
                <article
                  className="df-relative df-overflow-hidden df-h-full"
                  style={{
                    minHeight: '100%',
                    paddingBottom: '180px',
                    backgroundImage: `url(${slide.imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div
                    className="df-absolute df-top-0 df-start-0 df-w-full df-h-full"
                    style={{
                      background: 'linear-gradient(180deg, rgba(3, 16, 23, 0.12) 0%, rgba(3, 16, 23, 0.48) 44%, rgba(3, 16, 23, 0.86) 100%)',
                    }}
                  />

                  <div className="df-relative df-h-full df-w-full df-flex df-flex-col df-justify-end df-p-4 df-text-on-emphasis">
                    <div
                      className="df-flex df-items-center df-justify-center df-rounded-pill df-mb-3"
                      style={{
                        width: '56px',
                        height: '56px',
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(3px)',
                      }}
                    >
                      <DIcon icon={slide.icon} size="1.75rem" />
                    </div>
                    <h3 className="df-mb-2">{slide.title}</h3>
                    <p className="df-mb-0" style={{ opacity: 0.95, maxWidth: '90%' }}>
                      {slide.description}
                    </p>
                  </div>
                </article>
              </DCarousel.Slide>
            ))}
          </DCarousel>
        </div>

        <div className="df-absolute df-bottom-0 df-start-0 df-end-0 df-p-3" style={{ zIndex: 3 }}>
          <div className="df-p-3 df-text-center">
            <DButton text="Start now" color="light" className="df-fw-semibold df-w-full" />
            <a href="/register" className="df-inline-block df-mt-3 df-text-on-emphasis df-underline">Register</a>
          </div>
        </div>
      </div>
    </div>
  ),
};
