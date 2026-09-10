import { __rest } from 'tslib';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { Splide, SplideTrack } from '@splidejs/react-splide';
import classNames from 'classnames';
import { forwardRef } from 'react';
import DIcon from '../DIcon/DIcon.js';
import DCarouselSlide from './components/DCarouselSlide.js';

const DEFAULT_ARROW_PATH = 'm15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z';
function DefaultArrowIcon() {
    return (jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 40 40", width: 40, height: 40, focusable: "false", "aria-hidden": "true", children: jsx("path", { d: DEFAULT_ARROW_PATH }) }));
}
function DCarousel(_a, ref) {
    var { children, className, style, options, dataAttributes, iconArrowLeft, iconArrowRight, hasTrack: propsHasTrack } = _a, props = __rest(_a, ["children", "className", "style", "options", "dataAttributes", "iconArrowLeft", "iconArrowRight", "hasTrack"]);
    // Explicit `options.arrows === false` always wins, even when icon props are set.
    const hasCustomArrows = Boolean((iconArrowLeft || iconArrowRight) && (options === null || options === void 0 ? void 0 : options.arrows) !== false);
    return (jsx(Splide, Object.assign({ className: classNames('d-carousel', className), style: style, ref: ref, options: Object.assign(Object.assign({}, options), { classes: {
                // Arrows
                arrows: 'splide__arrows d-carousel-arrows',
                arrow: 'splide__arrow d-carousel-arrow',
                prev: 'splide__arrow--prev d-carousel-arrow-prev',
                next: 'splide__arrow--next d-carousel-arrow-next',
                // Paginator
                pagination: 'splide__pagination d-carousel-pagination',
                page: 'splide__pagination__page d-carousel-pagination-page',
            } }) }, dataAttributes, props, { 
        // Rendering our own arrows requires taking over the track wrapper, so this
        // must be applied after `...props` to prevent a consumer-provided `hasTrack`
        // from re-enabling Splide's automatic track when custom arrows are active.
        hasTrack: hasCustomArrows ? false : propsHasTrack, children: hasCustomArrows ? (jsxs(Fragment, { children: [jsx(SplideTrack, { children: children }), jsxs("div", { className: "splide__arrows d-carousel-arrows", children: [jsx("button", { type: "button", className: "splide__arrow splide__arrow--prev d-carousel-arrow d-carousel-arrow-prev", children: iconArrowLeft ? jsx(DIcon, Object.assign({}, iconArrowLeft)) : jsx(DefaultArrowIcon, {}) }), jsx("button", { type: "button", className: "splide__arrow splide__arrow--next d-carousel-arrow d-carousel-arrow-next", children: iconArrowRight ? jsx(DIcon, Object.assign({}, iconArrowRight)) : jsx(DefaultArrowIcon, {}) })] })] })) : children })));
}
const ForwardedDCarousel = forwardRef(DCarousel);
ForwardedDCarousel.displayName = 'DCarousel';
var DCarousel$1 = Object.assign(ForwardedDCarousel, {
    Slide: DCarouselSlide,
});

export { DCarousel$1 as default };
//# sourceMappingURL=DCarousel.js.map
