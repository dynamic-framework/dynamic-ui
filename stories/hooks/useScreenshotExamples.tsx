import { useState } from 'react';

import {
  DButton,
  useScreenshot,
  useScreenshotDownload,
  useScreenshotWebShare,
} from '../../src';

// Buttons placed OUTSIDE the captured element, both refs point to the same node.
export function CustomVoucherExample() {
  const { shareRef, share } = useScreenshotWebShare();
  const { downloadRef, download } = useScreenshotDownload();
  const [error, setError] = useState('');

  const setVoucherRef = (el: HTMLDivElement | null) => {
    shareRef.current = el;
    downloadRef.current = el;
  };

  const handleAction = (action: () => Promise<void>) => () => {
    action().catch((err: Error) => setError(err.message));
  };

  return (
    <div className="d-flex flex-column gap-3" style={{ maxWidth: '360px' }}>
      {/* Only this node is rasterized: action buttons live outside of it */}
      <div ref={setVoucherRef} className="p-4 border rounded text-center">
        <h5 className="mb-1">Payment Successful</h5>
        <p className="text-muted mb-0">$125.00</p>
      </div>

      <div className="d-flex gap-2">
        <DButton
          text="Share"
          iconStart="Share2"
          variant="outline"
          size="sm"
          onClick={handleAction(share)}
        />
        <DButton
          text="Download"
          iconStart="Download"
          variant="outline"
          size="sm"
          onClick={handleAction(download)}
        />
      </div>

      {error && <p className="text-danger small mb-0">{error}</p>}
    </div>
  );
}

// Content and actions live in fully separate components/subtrees.
function VoucherContent({ innerRef }: { innerRef: (el: HTMLDivElement | null) => void }) {
  return (
    <div ref={innerRef} className="p-4 border rounded text-center">
      <h5 className="mb-1">Registration Complete</h5>
      <p className="text-muted mb-0">Welcome aboard!</p>
    </div>
  );
}

function VoucherActions(
  { onShare, onDownload }: { onShare: () => void; onDownload: () => void },
) {
  return (
    <div className="d-flex gap-2 justify-content-end">
      <DButton text="Share" variant="outline" size="sm" onClick={onShare} />
      <DButton text="Download" variant="outline" size="sm" onClick={onDownload} />
    </div>
  );
}

export function DecoupledLayoutExample() {
  const { shareRef, share } = useScreenshotWebShare();
  const { downloadRef, download } = useScreenshotDownload();

  const setVoucherRef = (el: HTMLDivElement | null) => {
    shareRef.current = el;
    downloadRef.current = el;
  };

  return (
    <div className="d-flex flex-column gap-3" style={{ maxWidth: '360px' }}>
      <VoucherContent innerRef={setVoucherRef} />
      <hr className="my-0" />
      <VoucherActions
        onShare={() => { share().catch(() => {}); }}
        onDownload={() => { download().catch(() => {}); }}
      />
    </div>
  );
}

// Using useScreenshot directly for a custom action (e.g. upload instead of download/share).
export function UploadVoucherExample() {
  const { clipRef, takeBlob } = useScreenshot();
  const [status, setStatus] = useState('');

  const handleUpload = async () => {
    try {
      const blob = await takeBlob('image/png');
      setStatus(`Ready to upload (${Math.round(blob.size / 1024)} KB)`);
    } catch {
      setStatus('Could not capture the voucher');
    }
  };

  return (
    <div className="d-flex flex-column gap-3" style={{ maxWidth: '360px' }}>
      <div ref={clipRef} className="p-4 border rounded text-center">
        <h5 className="mb-1">Invoice #1024</h5>
        <p className="text-muted mb-0">$980.00</p>
      </div>
      <DButton
        text="Upload copy"
        variant="outline"
        size="sm"
        onClick={() => { handleUpload().catch(() => {}); }}
      />
      {status && <p className="text-muted small mb-0">{status}</p>}
    </div>
  );
}
