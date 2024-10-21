export default function changeQueryString(
  values: Record<string, string | number | null>,
  {
    useSearch = true,
    pushState = false,
  } = {},
) {
  const searchParams = new URLSearchParams(useSearch ? window.location.search : '');
  Object.entries(values).forEach(([key, value]) => {
    if (!value) {
      searchParams.delete(key);
      return;
    }
    searchParams.set(key, String(value));
  });

  if (pushState) {
    const url = new URL(window.location.href);
    url.search = searchParams.toString();
    window.history.pushState(null, '', url.toString());
  }

  return searchParams.toString();
}
