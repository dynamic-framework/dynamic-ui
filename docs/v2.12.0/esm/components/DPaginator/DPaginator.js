import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import classNames from 'classnames';
import ResponsivePagination from 'react-responsive-pagination';

function DPaginator(_a) {
    var { navClassName } = _a, props = __rest(_a, ["navClassName"]);
    return (jsx(ResponsivePagination, Object.assign({ navClassName: classNames('page-item-arrow', navClassName) }, props)));
}

export { DPaginator as default };
//# sourceMappingURL=DPaginator.js.map
