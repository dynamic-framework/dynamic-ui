import DCarouselArrow from './DCarouselArrow';

import type { Props } from './DCarouselArrow';

/** The forward arrow, for controls that live outside the carousel. */
export default function DCarouselNext(props: Props) {
  return <DCarouselArrow {...props} direction="next" />;
}
