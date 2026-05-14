import React, { useEffect, useState } from 'react';

type PropEntry = {
  name: string;
  type: string;
  required?: boolean;
  defaultValue?: string;
  description?: string;
};

type ApiData = {
  components?: Record<string, PropEntry[]>;
  hooks?: Record<string, PropEntry[]>;
  contexts?: Record<string, PropEntry[]>;
};

type ApiTableProps = {
  /**
   * Category within api.json: "components", "hooks", or "contexts".
   */
  category: 'components' | 'hooks' | 'contexts';
  /**
   * Name of the entry within the category (e.g. "DButton", "useDToast").
   */
  name: string;
};

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

/**
 * Fetches api.json at runtime and renders the prop table for the requested
 * component, hook, or context. This keeps Storybook docs in sync with the
 * live api.json without manual copy-paste.
 */
export function ApiTable({ category, name }: ApiTableProps) {
  const [rows, setRows] = useState<PropEntry[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('./api.json')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<ApiData>;
      })
      .then((data) => {
        const section = data[category];
        if (!section) throw new Error(`Category "${category}" not found in api.json`);
        const entry = section[name];
        if (!entry) throw new Error(`"${name}" not found in api.json["${category}"]`);
        setRows(entry);
      })
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : String(err));
      });
  }, [category, name]);

  if (error) {
    return (
      <p style={{ color: 'var(--sb-color-negative, #e5484d)', fontFamily: 'monospace' }}>
        ApiTable error (
        {category}
        /
        {name}
        ):
        {' '}
        {error}
      </p>
    );
  }

  if (!rows) {
    return <p style={{ fontStyle: 'italic', opacity: 0.6 }}>Loading API table…</p>;
  }

  if (rows.length === 0) {
    return <p style={{ fontStyle: 'italic', opacity: 0.6 }}>No entries found.</p>;
  }

  const hasDefault = rows.some((r) => r.defaultValue !== undefined && r.defaultValue !== '');

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
        {rows.map((row) => (
          <tr key={row.name}>
            <Td>
              <code>{row.name}</code>
            </Td>
            <Td>
              <code>{row.type}</code>
            </Td>
            <Td>{row.required ? '✅' : '—'}</Td>
            {hasDefault && <Td>{row.defaultValue ? <code>{row.defaultValue}</code> : '—'}</Td>}
            <Td>{row.description ?? '—'}</Td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
