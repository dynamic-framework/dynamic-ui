export default function changeQueryString(values: Record<string, string | number | null>, { useSearch, pushState, }?: {
    useSearch?: boolean | undefined;
    pushState?: boolean | undefined;
}): string;
