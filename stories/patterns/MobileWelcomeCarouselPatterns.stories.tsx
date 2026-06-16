import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';

import {
  DBox,
  DButton,
  DCarousel,
  DIcon,
} from '../../src';

import DocsTemplate from './docs/Template.mdx';

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
    <div className="border position-relative overflow-hidden rounded-2" style={{ width: '390px', maxWidth: '100%', height: '760px', background: 'linear-gradient(180deg, #53c9cc 0%, #61d1d2 35%, #7ad7d6 100%)' }}>
      <div className="h-100 p-3">
        <div className="bg-white rounded-3 h-100 d-flex flex-column shadow-sm">
          <div className="flex-grow-1 px-2 pt-3 pb-2">
            <DCarousel
              options={{
                perPage: 1,
                perMove: 1,
                rewind: true,
                arrows: false,
                pagination: true,
                drag: true,
                gap: '0.75rem',
              }}
            >
              {ONBOARDING_SLIDES.map((slide) => (
                <DCarousel.Slide key={slide.id}>
                  <div className="h-100 d-flex flex-column align-items-center justify-content-center text-center px-3 py-4">
                    <div className="d-flex align-items-center justify-content-center rounded-circle mb-4" style={{ width: '176px', height: '176px', background: 'linear-gradient(180deg, #e4f6f7 0%, #f5f7f8 100%)' }}>
                      <DIcon icon={slide.icon} size="5.5rem" className="text-primary" />
                    </div>
                    <h5 className="mb-2" style={{ letterSpacing: '0.06em' }}>{slide.title}</h5>
                    <span className="d-block rounded-pill mb-3" style={{ width: '44px', height: '4px', backgroundColor: slide.accentColor }} />
                    <p className="text-body-secondary mb-0" style={{ maxWidth: '260px' }}>
                      {slide.description}
                    </p>
                  </div>
                </DCarousel.Slide>
              ))}
            </DCarousel>
          </div>

          <div className="px-3 pb-3 pt-2">
            <div className="d-grid gap-2">
              <DButton
                text="Log in"
                variant="outline"
                color="light"
                className="border-secondary text-secondary"
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
    <div className="border position-relative overflow-hidden rounded-2" style={{ width: '390px', maxWidth: '100%', height: '760px', background: 'linear-gradient(180deg, #0f2f35 0%, #164952 44%, #1a5d67 100%)' }}>
      <style>
        {'.welcome-photo-carousel .splide__pagination { bottom: 156px; z-index: 4; } .splide__track { height: 100%; }'}
      </style>
      <div className="h-100 position-relative">
        <div className="position-absolute top-0 start-0 bottom-0 end-0">
          <DCarousel
            className="h-100 welcome-photo-carousel"
            options={{
              perPage: 1,
              perMove: 1,
              rewind: true,
              arrows: false,
              pagination: true,
              drag: true,
              gap: '0',
              height: '100%',
            }}
          >
            {ONBOARDING_PHOTO_SLIDES.map((slide) => (
              <DCarousel.Slide className="w-100" key={slide.id}>
                <article
                  className="position-relative overflow-hidden h-100"
                  style={{ minHeight: '100%', paddingBottom: '180px', backgroundImage: 'url(' + slide.imageUrl + ')', backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(180deg, rgba(3, 16, 23, 0.12) 0%, rgba(3, 16, 23, 0.48) 44%, rgba(3, 16, 23, 0.86) 100%)' }} />
                <div className="position-relative h-100 w-100 d-flex flex-column justify-content-end p-4 text-white">
                  <div className="d-flex align-items-center justify-content-center rounded-circle mb-3" style={{ width: '56px', height: '56px', backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(3px)' }}>
                    <DIcon icon={slide.icon} size="1.75rem" />
                  </div>
                  <h3 className="mb-2">{slide.title}</h3>
                  <p className="mb-0" style={{ opacity: 0.95, maxWidth: '90%' }}>{slide.description}</p>
                </div>
                </article>
              </DCarousel.Slide>
            ))}
          </DCarousel>
        </div>

        <div className="position-absolute bottom-0 start-0 end-0 p-3" style={{ zIndex: 3 }}>
          <div className="p-3 text-center">
            <DButton text="Start now" color="light" className="fw-semibold w-100" />
            <a href="/register" className="d-inline-block mt-3 text-white text-decoration-underline">Register</a>
          </div>
        </div>
      </div>
    </div>
  );
}`;

const meta: Meta<typeof DBox> = {
  title: 'Mobile Patterns/Mobile Welcome Carousel',
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
      className="border position-relative overflow-hidden rounded-2"
      style={{
        width: '390px',
        maxWidth: '100%',
        height: '760px',
        background: 'linear-gradient(180deg, var(--bs-primary) 0%, var(--bs-primary-100) 35%, var(--bs-primary-25) 100%)',
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
      <div className="h-100 p-3">
        <div className="bg-white rounded-3 h-100 d-flex flex-column shadow-sm">
          <div className="flex-grow-1 px-2 pt-3 pb-2">
            <DCarousel
              options={{
                perPage: 1,
                perMove: 1,
                rewind: true,
                arrows: false,
                pagination: true,
                drag: true,
                gap: '0.75rem',
              }}
            >
              {ONBOARDING_SLIDES.map((slide) => (
                <DCarousel.Slide key={slide.id}>
                  <div className="h-100 d-flex flex-column align-items-center justify-content-center text-center px-3 py-4">
                    <div
                      className="d-flex bg-primary-25 align-items-center justify-content-center rounded-circle mb-4"
                      style={{
                        width: '176px',
                        height: '176px',
                      }}
                    >
                      <DIcon icon={slide.icon} size="5.5rem" className="text-primary" />
                    </div>

                    <h5 className="mb-2" style={{ letterSpacing: '0.06em' }}>
                      {slide.title}
                    </h5>

                    <span
                      className="d-block rounded-pill mb-3"
                      style={{
                        width: '44px',
                        height: '4px',
                        backgroundColor: slide.accentColor,
                      }}
                    />

                    <p className="text-body-secondary mb-0" style={{ maxWidth: '260px' }}>
                      {slide.description}
                    </p>
                  </div>
                </DCarousel.Slide>
              ))}
            </DCarousel>
          </div>

          <div className="px-3 pb-3 pt-2">
            <div className="d-grid gap-2">
              <DButton
                text="Log in"
                variant="outline"
                color="light"
                className="border-secondary text-secondary"
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
      className="border position-relative overflow-hidden rounded-2"
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
          .splide__track {
            height: 100%;
          }
        `}
      </style>
      <div className="h-100 position-relative">
        <div className="position-absolute top-0 start-0 bottom-0 end-0">
          <DCarousel
            className="h-100 welcome-photo-carousel"
            options={{
              perPage: 1,
              perMove: 1,
              rewind: true,
              arrows: false,
              pagination: true,
              drag: true,
              gap: '0',
              height: '100%',
            }}
          >
            {ONBOARDING_PHOTO_SLIDES.map((slide) => (
              <DCarousel.Slide className="w-100" key={slide.id}>
                <article
                  className="position-relative overflow-hidden h-100"
                  style={{
                    minHeight: '100%',
                    paddingBottom: '180px',
                    backgroundImage: `url(${slide.imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      background: 'linear-gradient(180deg, rgba(3, 16, 23, 0.12) 0%, rgba(3, 16, 23, 0.48) 44%, rgba(3, 16, 23, 0.86) 100%)',
                    }}
                  />

                  <div className="position-relative h-100 w-100 d-flex flex-column justify-content-end p-4 text-white">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle mb-3"
                      style={{
                        width: '56px',
                        height: '56px',
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(3px)',
                      }}
                    >
                      <DIcon icon={slide.icon} size="1.75rem" />
                    </div>
                    <h3 className="mb-2">{slide.title}</h3>
                    <p className="mb-0" style={{ opacity: 0.95, maxWidth: '90%' }}>
                      {slide.description}
                    </p>
                  </div>
                </article>
              </DCarousel.Slide>
            ))}
          </DCarousel>
        </div>

        <div className="position-absolute bottom-0 start-0 end-0 p-3" style={{ zIndex: 3 }}>
          <div className="p-3 text-center">
            <DButton text="Start now" color="light" className="fw-semibold w-100" />
            <a href="/register" className="d-inline-block mt-3 text-white text-decoration-underline">Register</a>
          </div>
        </div>
      </div>
    </div>
  ),
};
