import DCarousel from './DCarousel';

export type { Props as DCarouselProps, DCarouselHandle, DCarouselSpacing } from './DCarousel';
export type { CarouselAlign, CarouselLoop, CarouselPerMove } from './useCarousel';
export type { DCarouselI18n } from './i18n';
export { default as DCarouselSlide } from './components/DCarouselSlide';
export { default as DCarouselPrev } from './components/DCarouselPrev';
export { default as DCarouselNext } from './components/DCarouselNext';
export { default as DCarouselPagination } from './components/DCarouselPagination';
export { default as useDCarouselController } from './useDCarouselController';
export type { DCarouselController } from './useDCarouselController';
export { default as createCarouselController } from './controller';
export type {
  DCarouselActions,
  DCarouselControllerState,
  DCarouselControllerStore,
} from './controller';
export default DCarousel;
