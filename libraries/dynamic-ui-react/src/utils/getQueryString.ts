export default function getQueryString(
  value: string,
  config: {
    default?: string;
    useSearch?: boolean;
  } = {
    useSearch: true,
  },
): string | undefined {
  const urlParams = new URLSearchParams(config.useSearch ? window.location.search : '');

  return urlParams.get(value) || config.default;
}
