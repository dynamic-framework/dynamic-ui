/**
 * The carousel's strings.
 *
 * Their own module because the controls are no longer all inside
 * `DCarousel.tsx`: `DCarousel.Prev`, `DCarousel.Next` and
 * `DCarousel.Pagination` render outside it and say the same words, and
 * importing them from the component they are attached to would be a cycle.
 */
export type DCarouselI18n = {
  prev: string;
  next: string;
  slides: string;
  goToSlide: string;
  play: string;
  pause: string;
};

export const DEFAULT_CAROUSEL_I18N: DCarouselI18n = {
  prev: 'Previous slide',
  next: 'Next slide',
  slides: 'Slides',
  goToSlide: 'Go to slide',
  play: 'Start automatic slide show',
  pause: 'Pause automatic slide show',
};

export default DEFAULT_CAROUSEL_I18N;
