import { useEffect, useState } from 'react';

export default function usePortal(portalName: string) {
  const [hasPortal, setHasPortal] = useState(false);
  useEffect(() => {
    const previousPortal = document.querySelector(`#${portalName}`);
    if (previousPortal) {
      previousPortal.remove();
    }
    const portal = document.createElement('div');
    portal.id = portalName;
    portal.className = 'd-portal';
    document.body.appendChild(portal);
    setHasPortal(true);
  }, [portalName]);

  return { created: hasPortal };
}
