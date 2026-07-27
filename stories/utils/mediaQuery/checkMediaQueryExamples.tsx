import { useEffect, useRef, useState } from 'react';
import { DButton, DCard } from '../../../src';

const QUERY = '(min-width: 768px)';

function ExampleOfUse() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [width, setWidth] = useState(0);
  const [matches, setMatches] = useState<boolean>();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return undefined;
    }

    setWidth(container.getBoundingClientRect().width);

    const observer = new ResizeObserver(([entry]) => {
      setWidth(entry.contentRect.width);
    });
    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  // Reads the match state once, at the moment of the click, the same way
  // `checkMediaQuery` does internally (`window.matchMedia(query).matches`).
  // It does not react to width changes on its own: resize the box and press
  // the button again to see the updated (one-off) result.
  const handleCheck = () => {
    const win = iframeRef.current?.contentWindow;
    setMatches(win ? win.matchMedia(QUERY).matches : undefined);
  };

  return (
    <DCard>
      <DCard.Header>
        {QUERY}
      </DCard.Header>
      <DCard.Body>
        <p className="mb-2">
          Drag the bottom-right corner to resize the box (an isolated viewport),
          then click &quot;Check now&quot; to read the match at that instant.
        </p>
        <div
          ref={containerRef}
          style={{
            position: 'relative',
            resize: 'horizontal',
            overflow: 'hidden',
            border: '1px solid var(--bs-border-color)',
            width: 900,
            maxWidth: '100%',
            minWidth: 320,
            height: 48,
          }}
        >
          <iframe
            ref={iframeRef}
            title="checkMediaQuery resizable preview"
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
          <span
            className="badge text-bg-dark"
            style={{ position: 'absolute', top: 4, left: 4 }}
          >
            {`Width: ${Math.round(width)}px`}
          </span>
        </div>
        <div className="d-flex align-items-center gap-3 mt-3">
          <DButton size="sm" onClick={handleCheck} text="Check now" />
          <pre className="mb-0">
            {matches === undefined ? 'Matches: (not checked yet)' : `Matches: ${matches}`}
          </pre>
        </div>
      </DCard.Body>
    </DCard>
  );
}

export function ExampleRoot() {
  return <ExampleOfUse />;
}
