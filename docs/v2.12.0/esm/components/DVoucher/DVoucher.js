import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import classNames from 'classnames';
import useScreenshotDownload from './hooks/useScreenshotDownload.js';
import useScreenshotWebShare from './hooks/useScreenshotWebShare.js';
import DIcon from '../DIcon/DIcon.js';
import DButton from '../DButton/DButton.js';

function DVoucher({ amount, amountDetails, icon, title, onError, message, downloadText = 'Download', shareText = 'Share', fileName = 'voucher', hideActions = false, className, children, }) {
    const { shareRef, share } = useScreenshotWebShare();
    const { downloadRef, download } = useScreenshotDownload();
    const handleShare = () => {
        share(fileName)
            .catch(async (err) => {
            if (onError) {
                await onError(err);
            }
        })
            .catch(() => {
            // Error already handled by onError
        });
    };
    const handleDownload = () => {
        download(fileName)
            .catch(async (err) => {
            if (onError) {
                await onError(err);
            }
        })
            .catch(() => {
            // Error already handled by onError
        });
    };
    const defaultIconProps = {
        icon: 'CircleCheckBig',
        color: 'success',
        size: '2rem',
        hasCircle: true,
    };
    const resolvedIconProps = (() => {
        if (icon === false || icon == null)
            return null;
        if (typeof icon === 'string')
            return Object.assign(Object.assign({}, defaultIconProps), { icon });
        if (typeof icon === 'object')
            return Object.assign(Object.assign({}, defaultIconProps), icon);
        return defaultIconProps;
    })();
    return (jsx("div", { className: classNames('d-voucher', className), ref: (el) => {
            shareRef.current = el;
            downloadRef.current = el;
        }, children: jsxs("div", { children: [jsxs("div", { className: "d-voucher-header", children: [resolvedIconProps && (jsx(DIcon, Object.assign({}, resolvedIconProps))), jsxs("div", { className: "d-voucher-title-group", children: [jsx("h3", { className: "d-voucher-title", children: title }), jsx("p", { className: "d-voucher-message", children: message })] })] }), amount && (jsxs("div", { className: "d-voucher-amount", children: [jsx("div", { className: classNames('d-voucher-amount-value', { 'd-voucher-amount-value-with-details': !!amountDetails }), children: amount }), amountDetails] })), jsx("hr", { className: "d-voucher-divider" }), children, !hideActions && (jsxs(Fragment, { children: [jsx("hr", { className: "my-4" }), jsxs("div", { className: "d-voucher-footer", children: [jsx(DButton, { onClick: handleShare, iconStart: "Share2", text: shareText, variant: "outline", size: "sm" }), jsx(DButton, { onClick: handleDownload, iconStart: "Download", text: downloadText, variant: "outline", size: "sm" })] })] }))] }) }));
}

export { DVoucher as default };
//# sourceMappingURL=DVoucher.js.map
