import classNames from 'classnames';
import { ComponentProps, PropsWithChildren, ReactNode } from 'react';

import useScreenshotDownload from './hooks/useScreenshotDownload';
import useScreenshotWebShare from './hooks/useScreenshotWebShare';
import DIcon from '../DIcon';
import DButton from '../DButton';

type Props = PropsWithChildren<{
  amount?: string;
  amountDetails?: ReactNode;
  icon?: false | null | string | Partial<ComponentProps<typeof DIcon>>;
  className?: string;
  message: string;
  title: string;
  downloadText?: string;
  shareText?: string;
  onError?: (err: Error) => Promise<void> | void;
}>;

export default function DVoucher(
  {
    amount,
    amountDetails,
    icon,
    title,
    onError,
    message,
    downloadText = 'Download',
    shareText = 'Share',
    className,
    children,
  }: Props,
) {
  const { shareRef, share } = useScreenshotWebShare();
  const { downloadRef, download } = useScreenshotDownload();

  const handleShare = () => {
    share()
      .catch(async (err: Error) => {
        if (onError) {
          await onError(err);
        }
      })
      .catch(() => {
        // Error already handled by onError
      });
  };

  const handleDownload = () => {
    download()
      .catch(async (err: Error) => {
        if (onError) {
          await onError(err);
        }
      })
      .catch(() => {
        // Error already handled by onError
      });
  };

  const defaultIconProps: ComponentProps<typeof DIcon> = {
    icon: 'CircleCheckBig',
    color: 'success',
    size: '2rem',
    hasCircle: true,
  };

  const resolvedIconProps: ComponentProps<typeof DIcon> | null = (() => {
    if (icon === false || icon == null) return null;
    if (typeof icon === 'string') return { ...defaultIconProps, icon };
    if (typeof icon === 'object') return { ...defaultIconProps, ...icon };
    return defaultIconProps;
  })();

  return (
    <div
      className={classNames('df-voucher', className)}
      ref={(el) => {
        shareRef.current = el;
        downloadRef.current = el;
      }}
    >
      {/*
        * No wrapper.
        *
        * Everything below used to sit inside an unclassed `<div>`, which made
        * `.df-voucher` a flex column with exactly ONE child — so its `gap`
        * had nothing to apply between and every piece of internal spacing the
        * block was supposed to own did nothing. The only thing separating
        * anything was a margin on the divider.
        */}
      <div className="df-voucher-header">
        {resolvedIconProps && (
          <DIcon {...resolvedIconProps} />
        )}
        {/* The title block was itself `.df-voucher-header`, nested inside the
            header — one class doing two jobs, with its gap applied twice. */}
        <div className="df-voucher-heading">
          <h3 className="df-voucher-title">{title}</h3>
          <p className="df-voucher-message">{message}</p>
        </div>
      </div>

      {amount && (
        <div className="df-voucher-amount">
          <div className="df-voucher-amount-value">{amount}</div>
          {amountDetails && (
            <div className="df-voucher-amount-details">{amountDetails}</div>
          )}
        </div>
      )}

      <hr className="df-voucher-divider" />
      {/* `.df-voucher-body` was defined in the stylesheet and rendered by
          nothing: `children` went in bare, so the slot's own padding and
          text alignment never applied. */}
      <div className="df-voucher-body">{children}</div>
      <hr className="df-voucher-divider" />

      <div className="df-voucher-footer">
        <DButton
          onClick={handleShare}
          iconStart="Share2"
          text={shareText}
          variant="outline"
          size="sm"
        />
        <DButton
          onClick={handleDownload}
          iconStart="Download"
          text={downloadText}
          variant="outline"
          size="sm"
        />
      </div>
    </div>
  );
}
