export function subscribeToMediaQuery(query: string, callback: () => void) {
  const mediaQueryList = window.matchMedia(query);
  mediaQueryList.addEventListener('change', callback);

  return () => {
    mediaQueryList.removeEventListener('change', callback);
  };
}

export function checkMediaQuery(query: string) {
  return window.matchMedia(query).matches;
}
