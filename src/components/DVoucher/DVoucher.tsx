import classNames from 'classnames';
import { PropsWithChildren, ReactNode } from 'react';

import useScreenshotDownload from './hooks/useScreenshotDownload';
import useScreenshotWebShare from './hooks/useScreenshotWebShare';
import DIcon from '../DIcon';
import DButton from '../DButton';

type Props = PropsWithChildren<{
  amount?: string;
  amountDetails?: ReactNode;
  icon?: string;
  color?: string;
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
    icon = 'CircleCheckBig',
    color = 'success',
    title,
    onError,
    message,
    downloadText = 'Download',
    shareText = 'Share',
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

  return (
    <div
      className="d-voucher"
      ref={(el) => {
        shareRef.current = el;
        downloadRef.current = el;
      }}
    >
      <div>
        <div className="d-voucher-header">
          <DIcon
            icon={icon}
            size="var(--bs-ref-spacer-8)"
            color={color}
          />
          <div className="text-center">
            <h3 className="mb-2">{title}</h3>
            <p className="m-0">{message}</p>
          </div>
        </div>
        {amount && (
          <div className="d-voucher-amount">
            <div
              className={classNames(
                'text-center fw-bold fs-3',
                amountDetails ? 'mb-1' : 'm-0',
              )}
            >
              {amount}
            </div>
            {amountDetails}
          </div>
        )}

        <hr className="my-4" />
        {children}
        <hr className="my-4" />

        <div className="d-voucher-footer">
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
