import { useEffect, useRef, useState } from 'react';
import { DCard } from '../../../src';

const QUERY = '(min-width: 768px)';

function ExampleOfUse() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [width, setWidth] = useState(0);
  const [matches, setMatches] = useState(false);

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

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) {
      return undefined;
    }

    // Mirrors what `subscribeToMediaQuery` does internally: it creates a
    // `MediaQueryList` and subscribes to its `change` event, keeping `matches`
    // in sync automatically as the viewport (here, the resizable box) changes.
    let mediaQueryList: MediaQueryList | undefined;
    const handleChange = (event: MediaQueryListEvent) => setMatches(event.matches);

    const attach = () => {
      const win = iframe.contentWindow;
      if (!win || mediaQueryList) {
        return;
      }
      mediaQueryList = win.matchMedia(QUERY);
      setMatches(mediaQueryList.matches);
      mediaQueryList.addEventListener('change', handleChange);
    };

    attach();
    iframe.addEventListener('load', attach);

    return () => {
      iframe.removeEventListener('load', attach);
      mediaQueryList?.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <DCard>
      <DCard.Header>
        {QUERY}
      </DCard.Header>
      <DCard.Body>
        <p className="mb-2">
          Drag the right edge of the box below (an isolated viewport)
          to resize it and see &quot;Matches&quot; update automatically, without
          clicking anything.
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
            title="subscribeToMediaQuery resizable preview"
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
          <span
            className="badge text-bg-dark"
            style={{ position: 'absolute', top: 4, left: 4 }}
          >
            {`Width: ${Math.round(width)}px`}
          </span>
        </div>
        <pre className="mt-3 mb-0">{`Matches: ${matches}`}</pre>
      </DCard.Body>
    </DCard>
  );
}

export function ExampleRoot() {
  return <ExampleOfUse />;
}
