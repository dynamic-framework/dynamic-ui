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
      <div>
        <div className="df-voucher-header">
          {resolvedIconProps && (
            <DIcon {...resolvedIconProps} />
          )}
          <div className="df-voucher-header">
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
        {children}
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
    </div>
  );
}
