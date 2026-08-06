export default function getQueryString(
  value: string,
  config: {
    default?: string;
    useSearch?: boolean;
  } = {},
): string | undefined {
  const { useSearch = true, default: defaultValue } = config;
  const urlParams = new URLSearchParams(useSearch ? window.location.search : '');

  return urlParams.get(value) || defaultValue;
}
