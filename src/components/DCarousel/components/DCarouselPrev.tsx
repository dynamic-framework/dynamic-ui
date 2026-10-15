import DCarouselArrow from './DCarouselArrow';

import type { Props } from './DCarouselArrow';

/** The back arrow, for controls that live outside the carousel. */
export default function DCarouselPrev(props: Props) {
  return <DCarouselArrow {...props} direction="prev" />;
}
