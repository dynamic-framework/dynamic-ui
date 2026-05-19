import React, { useEffect, useState } from 'react';

// Injected at build time by Vite (see .storybook/main.ts viteFinal).
// Each deployed Storybook version fetches its own matching api.json from the CDN.
declare const DYNAMIC_PACKAGE_VERSION: string;

const CDN_BASE = 'https://cdn.dynamicframework.dev/assets';
const VERSIONED_URL = `${CDN_BASE}/${DYNAMIC_PACKAGE_VERSION}/ui-react/api.json`;
const LATEST_URL = `${CDN_BASE}/latest/ui-react/api.json`;

// --- Types matching the actual api.json structure ---

type PropEntry = {
  type: string;
  required?: boolean;
  defaultValue?: string | number | boolean | null;
  description?: string;
};

type ParamEntry = {
  name: string;
  type: string;
  required?: boolean;
  description?: string;
};

type ReturnEntry = {
  type: string;
  description?: string;
  parameters?: ParamEntry[];
  returns?: { type: string };
};

type ComponentData = {
  description?: string;
  sourcePath?: string;
  props: Record<string, PropEntry>;
};

type HookData = {
  description?: string;
  signature?: string;
  parameters?: ParamEntry[];
  returns?: Record<string, ReturnEntry>;
};

type ApiData = {
  components?: Record<string, ComponentData>;
  hooks?: Record<string, HookData>;
  contexts?: Record<string, HookData>;
};

// --- Row shapes used for rendering ---

type PropsRow = { name: string } & PropEntry;
type ReturnsRow = { name: string } & ReturnEntry;

// --- ApiTable props ---

type Section = 'props' | 'returns' | 'parameters';

type ApiTableProps = {
  /**
   * Top-level section in api.json: "components", "hooks", or "contexts".
   */
  category: 'components' | 'hooks' | 'contexts';
  /**
   * Entry name within the category (e.g. "DButton", "useDToast").
   */
  name: string;
  /**
   * Which sub-section to display.
   * Defaults to "props" for components and "returns" for hooks/contexts.
   */
  section?: Section;
};

// --- Small table-cell helpers ---

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th
      style={{
        textAlign: 'left',
        padding: '6px 12px',
        borderBottom: '2px solid var(--sb-color-border, #e0e0e0)',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </th>
  );
}

function Td({ children }: { children: React.ReactNode }) {
  return (
    <td
      style={{
        padding: '6px 12px',
        borderBottom: '1px solid var(--sb-color-border, #e0e0e0)',
        verticalAlign: 'top',
      }}
    >
      {children}
    </td>
  );
}

// --- Fetch helper: versioned URL, falls back to latest ---

async function fetchApiData(): Promise<ApiData> {
  try {
    const res = await fetch(VERSIONED_URL);
    if (res.ok) return res.json() as ApiData;
  } catch (_) { /* fall through to latest */ }
  const res = await fetch(LATEST_URL);
  if (!res.ok) throw new Error(`HTTP ${res.status} fetching api.json from CDN`);
  return res.json() as Promise<ApiData>;
}

// --- Return value type hint for function entries ---

function returnTypeHint(entry: ReturnEntry): string {
  if (entry.type !== 'function') return entry.type;
  const params = (entry.parameters ?? []).map((p) => `${p.name}: ${p.type}`).join(', ');
  const ret = entry.returns?.type ?? 'void';
  return `(${params}) => ${ret}`;
}

/**
 * Fetches api.json from the CDN at runtime and renders a prop/return/parameter
 * table for the requested component, hook, or context. This keeps Storybook
 * docs in sync with the live api.json without manual copy-paste.
 *
 * Usage:
 *   <ApiTable category="components" name="DButton" />
 *   <ApiTable category="hooks" name="useDToast" />
 *   <ApiTable category="hooks" name="useDPortalContext" section="parameters" />
 */
export function ApiTable({ category, name, section }: ApiTableProps) {
  const resolvedSection: Section = section ?? (category === 'components' ? 'props' : 'returns');

  const [propsRows, setPropsRows] = useState<PropsRow[] | null>(null);
  const [returnsRows, setReturnsRows] = useState<ReturnsRow[] | null>(null);
  const [paramsRows, setParamsRows] = useState<ParamEntry[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchApiData()
      .then((data) => {
        const categoryData = data[category];
        if (!categoryData) throw new Error(`Category "${category}" not found in api.json`);
        const entry = categoryData[name];
        if (!entry) throw new Error(`"${name}" not found in api.json["${category}"]`);

        if (resolvedSection === 'props') {
          const comp = entry as ComponentData;
          if (!comp.props) throw new Error(`No "props" on ${category}.${name}`);
          setPropsRows(
            Object.entries(comp.props).map(([k, v]) => ({ name: k, ...v })),
          );
        } else if (resolvedSection === 'returns') {
          const hook = entry as HookData;
          if (!hook.returns) throw new Error(`No "returns" on ${category}.${name}`);
          setReturnsRows(
            Object.entries(hook.returns).map(([k, v]) => ({ name: k, ...v })),
          );
        } else {
          const hook = entry as HookData;
          setParamsRows(hook.parameters ?? []);
        }
      })
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : String(err));
      });
  }, [category, name, resolvedSection]);

  if (error) {
    return (
      <p style={{ color: 'var(--sb-color-negative, #e5484d)', fontFamily: 'monospace' }}>
        {`ApiTable error (${category}/${name}): ${error}`}
      </p>
    );
  }

  const isLoading = propsRows === null && returnsRows === null && paramsRows === null;
  if (isLoading) {
    return <p style={{ fontStyle: 'italic', opacity: 0.6 }}>Loading API table…</p>;
  }

  // --- Props table (components) ---
  if (propsRows !== null) {
    if (propsRows.length === 0) return <p style={{ fontStyle: 'italic', opacity: 0.6 }}>No props.</p>;
    const hasDefault = propsRows.some((r) => r.defaultValue !== undefined && r.defaultValue !== null && r.defaultValue !== '');
    return (
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Type</Th>
            <Th>Required</Th>
            {hasDefault && <Th>Default</Th>}
            <Th>Description</Th>
          </tr>
        </thead>
        <tbody>
          {propsRows.map((row) => (
            <tr key={row.name}>
              <Td><code>{row.name}</code></Td>
              <Td><code>{row.type}</code></Td>
              <Td>{row.required ? '✅' : '—'}</Td>
              {hasDefault && <Td>{row.defaultValue != null && row.defaultValue !== '' ? <code>{String(row.defaultValue)}</code> : '—'}</Td>}
              <Td>{row.description || '—'}</Td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  // --- Returns table (hooks / contexts) ---
  if (returnsRows !== null) {
    if (returnsRows.length === 0) return <p style={{ fontStyle: 'italic', opacity: 0.6 }}>No return values.</p>;
    return (
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Type</Th>
            <Th>Description</Th>
          </tr>
        </thead>
        <tbody>
          {returnsRows.map((row) => (
            <tr key={row.name}>
              <Td><code>{row.name}</code></Td>
              <Td><code>{returnTypeHint(row)}</code></Td>
              <Td>{row.description || '—'}</Td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  // --- Parameters table (hooks / contexts) ---
  if (paramsRows !== null) {
    if (paramsRows.length === 0) return <p style={{ fontStyle: 'italic', opacity: 0.6 }}>No parameters.</p>;
    return (
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Type</Th>
            <Th>Required</Th>
            <Th>Description</Th>
          </tr>
        </thead>
        <tbody>
          {paramsRows.map((row) => (
            <tr key={row.name}>
              <Td><code>{row.name}</code></Td>
              <Td><code>{row.type}</code></Td>
              <Td>{row.required ? '✅' : '—'}</Td>
              <Td>{row.description || '—'}</Td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return null;
}
