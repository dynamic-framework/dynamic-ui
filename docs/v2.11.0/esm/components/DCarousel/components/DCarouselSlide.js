import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { SplideSlide } from '@splidejs/react-splide';
import classNames from 'classnames';

function DCarouselSlide(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (jsx(SplideSlide, Object.assign({ className: classNames('d-carousel-slide', className) }, props)));
}

export { DCarouselSlide as default };
//# sourceMappingURL=DCarouselSlide.js.map
