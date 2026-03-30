/**
 * generate-a11y-report.ts
 *
 * Generates a consolidated HTML accessibility report for all Storybook stories.
 *
 * Usage:
 *   npx tsx scripts/generate-a11y-report.ts
 *   npx tsx scripts/generate-a11y-report.ts Button
 *   npx tsx scripts/generate-a11y-report.ts Button Tabs Select
 *
 * When component names are passed as arguments, only those components are audited
 * and the output is saved to a dedicated subfolder (e.g. ./scripts/a11y-reports/button).
 *
 * Component name matching is case-insensitive and partial:
 *   "button" matches "Design System/Components/Button" and "Design System/Components/Button Icon"
 *
 * Prerequisites:
 *   npm install --save-dev playwright @axe-core/playwright tsx
 *   npm run build-storybook  (generates storybook-static/)
 */

import { chromium, Browser, Page } from 'playwright';
import { AxeResults, Result, NodeResult } from 'axe-core';
import * as fs from 'fs';
import * as path from 'path';

// ─── CLI args ───────────────────────────────────────────────────────────────

const COMPONENT_ARGS: string[] = process.argv.slice(2);
const IS_TARGETED = COMPONENT_ARGS.length > 0;

// ─── Config ────────────────────────────────────────────────────────────────

const STORYBOOK_URL = process.env.STORYBOOK_URL || 'http://localhost:6006';
const WCAG_TAGS = ['wcag2a', 'wcag2aa'];
const TIMEOUT_MS = 15000;

/**
 * Output directory:
 * - Full audit:    ./scripts/a11y-reports/
 * - Single target: ./scripts/a11y-reports/button/
 * - Multi targets: ./scripts/a11y-reports/button-tabs-select/
 */
const BASE_OUTPUT_DIR = process.env.OUTPUT_DIR || './scripts/a11y-reports';
const OUTPUT_DIR = IS_TARGETED
  ? path.join(BASE_OUTPUT_DIR, COMPONENT_ARGS.map(c => c.toLowerCase()).join('-'))
  : BASE_OUTPUT_DIR;

/**
 * INCLUDE_PATTERNS:
 * - Full audit: only stories under Design System/Components
 * - Targeted:   filter to the specific component(s) passed as args
 *
 * Matching is case-insensitive and partial against the full title,
 * so "button" matches "Design System/Components/Button" and "Button Icon".
 */
const BASE_INCLUDE = 'Design System/Components';

const INCLUDE_PATTERNS: Array<string | RegExp> = IS_TARGETED
  ? COMPONENT_ARGS.map(c => new RegExp(`${BASE_INCLUDE}/${c}`, 'i'))
  : [BASE_INCLUDE];

const EXCLUDE_PATTERNS: Array<string | RegExp> = [];

// ─── Types ──────────────────────────────────────────────────────────────────

interface Story {
  id: string;
  title: string;
  name: string;
  kind: string;
  importPath: string;
}

interface StoryReport {
  storyId: string;
  title: string;
  name: string;
  url: string;
  violations: Result[];
  passes: number;
  incomplete: number;
  timestamp: string;
  error?: string;
}

// ─── Filters ────────────────────────────────────────────────────────────────

function matchesAny(title: string, patterns: Array<string | RegExp>): boolean {
  return patterns.some(p =>
    typeof p === 'string' ? title.startsWith(p) : p.test(title)
  );
}

function shouldAudit(story: Story): boolean {
  if (INCLUDE_PATTERNS.length > 0 && !matchesAny(story.title, INCLUDE_PATTERNS)) return false;
  if (matchesAny(story.title, EXCLUDE_PATTERNS)) return false;
  return true;
}

// ─── Helpers ────────────────────────────────────────────────────────────────

async function fetchStories(page: Page): Promise<Story[]> {
  await page.goto(`${STORYBOOK_URL}/index.json`, { timeout: TIMEOUT_MS });
  const raw = await page.evaluate(() => document.body.innerText);
  const index = JSON.parse(raw) as { entries: Record<string, Story> };
  const all = Object.values(index.entries).filter((e: any) => e.type === 'story');
  const filtered = all.filter(shouldAudit);
  const skipped = all.length - filtered.length;
  if (skipped > 0) console.log(`   Skipped ${skipped} stories`);
  return filtered;
}

async function analyzeStory(page: Page, story: Story): Promise<StoryReport> {
  const url = `${STORYBOOK_URL}/iframe.html?id=${story.id}&viewMode=story`;
  const timestamp = new Date().toISOString();

  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: TIMEOUT_MS });
    await page.waitForSelector('#storybook-root, #root', { timeout: TIMEOUT_MS });

    await page.addScriptTag({
      url: 'https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.9.1/axe.min.js',
    });

    const results: AxeResults = await page.evaluate(
      (tags) =>
        (window as any).axe.run('#storybook-root, #root', {
          runOnly: { type: 'tag', values: tags },
        }),
      WCAG_TAGS
    );

    return {
      storyId: story.id,
      title: story.title,
      name: story.name,
      url,
      violations: results.violations,
      passes: results.passes.length,
      incomplete: results.incomplete.length,
      timestamp,
    };
  } catch (err: any) {
    return {
      storyId: story.id,
      title: story.title,
      name: story.name,
      url,
      violations: [],
      passes: 0,
      incomplete: 0,
      timestamp,
      error: err?.message ?? String(err),
    };
  }
}

// ─── HTML Report Generation ─────────────────────────────────────────────────

function impactColor(impact: string | null | undefined): string {
  switch (impact) {
    case 'critical': return '#e53e3e';
    case 'serious':  return '#dd6b20';
    case 'moderate': return '#d69e2e';
    case 'minor':    return '#718096';
    default:         return '#a0aec0';
  }
}

function renderNode(node: NodeResult): string {
  return `
    <div class="node-item">
      <code class="html-snippet">${escapeHtml(node.html)}</code>
      ${node.failureSummary
        ? `<p class="failure-summary">${escapeHtml(node.failureSummary)}</p>`
        : ''}
    </div>`;
}

function renderViolation(v: Result, idx: number): string {
  return `
    <details class="violation" data-impact="${v.impact}">
      <summary>
        <span class="impact-badge" style="background:${impactColor(v.impact)}">${v.impact ?? 'unknown'}</span>
        <span class="rule-id">${escapeHtml(v.id)}</span>
        <span class="violation-desc">${escapeHtml(v.description)}</span>
        <span class="node-count">${v.nodes.length} node${v.nodes.length !== 1 ? 's' : ''}</span>
      </summary>
      <div class="violation-body">
        <div class="meta-row">
          <a href="${v.helpUrl}" target="_blank" rel="noopener">Docs ↗</a>
          <span class="tags">${(v.tags ?? []).join(' · ')}</span>
        </div>
        <div class="nodes-list">
          ${v.nodes.map(renderNode).join('')}
        </div>
      </div>
    </details>`;
}

function renderStorySection(r: StoryReport): string {
  const totalViolations = r.violations.length;
  const criticalCount = r.violations.filter(v => v.impact === 'critical').length;
  const seriousCount  = r.violations.filter(v => v.impact === 'serious').length;
  const status = r.error ? 'error' : totalViolations === 0 ? 'pass' : 'fail';

  return `
  <section class="story-section" data-status="${status}" id="${r.storyId}">
    <div class="story-header">
      <div class="story-title-group">
        <span class="story-path">${escapeHtml(r.title)}</span>
        <span class="story-separator">/</span>
        <span class="story-name">${escapeHtml(r.name)}</span>
      </div>
      <div class="story-meta">
        ${r.error
          ? `<span class="badge badge-error">Error</span>`
          : `
          <span class="badge badge-violations">${totalViolations} violation${totalViolations !== 1 ? 's' : ''}</span>
          ${criticalCount > 0 ? `<span class="badge badge-critical">${criticalCount} critical</span>` : ''}
          ${seriousCount  > 0 ? `<span class="badge badge-serious">${seriousCount} serious</span>`  : ''}
          <span class="badge badge-passes">${r.passes} passes</span>
        `}
      </div>
    </div>
    ${r.error
      ? `<div class="error-box">⚠ ${escapeHtml(r.error)}</div>`
      : totalViolations === 0
        ? `<div class="pass-box">✓ No accessibility violations found</div>`
        : `<div class="violations-list">${r.violations.map(renderViolation).join('')}</div>`
    }
  </section>`;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function generateHTML(reports: StoryReport[]): string {
  const totalStories    = reports.length;
  const failingStories  = reports.filter(r => r.violations.length > 0).length;
  const passingStories  = reports.filter(r => !r.error && r.violations.length === 0).length;
  const errorStories    = reports.filter(r => r.error).length;
  const totalViolations = reports.reduce((acc, r) => acc + r.violations.length, 0);
  const criticalTotal   = reports.flatMap(r => r.violations).filter(v => v.impact === 'critical').length;
  const generatedAt     = new Date().toLocaleString();
  const scopeLabel      = IS_TARGETED ? `Components: ${COMPONENT_ARGS.join(', ')}` : 'All components';

  const grouped = reports.reduce<Record<string, StoryReport[]>>((acc, r) => {
    if (!acc[r.title]) acc[r.title] = [];
    acc[r.title].push(r);
    return acc;
  }, {});

  const sidebarItems = Object.entries(grouped).map(([title, stories]) => {
    const hasViolations = stories.some(s => s.violations.length > 0);
    const hasError      = stories.some(s => s.error);
    const icon = hasError ? '⚠' : hasViolations ? '✗' : '✓';
    const cls  = hasError ? 'sidebar-error' : hasViolations ? 'sidebar-fail' : 'sidebar-pass';
    return `
      <li class="sidebar-group">
        <span class="sidebar-component ${cls}">${icon} ${escapeHtml(title)}</span>
        <ul>
          ${stories.map(s => `
            <li>
              <a href="#${s.storyId}" class="${s.violations.length > 0 ? 'link-fail' : s.error ? 'link-error' : 'link-pass'}">
                ${escapeHtml(s.name)}
              </a>
            </li>
          `).join('')}
        </ul>
      </li>`;
  }).join('');

  const content = Object.values(grouped).flatMap(s => s).map(renderStorySection).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Accessibility Report — Design System</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --bg: #0f1117; --surface: #1a1d27; --surface2: #222535;
      --border: #2e3250; --text: #e2e8f0; --text-muted: #718096;
      --accent: #6366f1; --pass: #38a169; --fail: #e53e3e;
      --warn: #dd6b20; --error: #9f7aea;
      --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
      --font-sans: 'Inter', system-ui, sans-serif;
      --sidebar-w: 280px;
    }
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
    html { font-size: 14px; scroll-behavior: smooth; }
    body { font-family: var(--font-sans); background: var(--bg); color: var(--text); display: flex; min-height: 100vh; }
    .sidebar { width: var(--sidebar-w); min-width: var(--sidebar-w); background: var(--surface); border-right: 1px solid var(--border); height: 100vh; position: sticky; top: 0; overflow-y: auto; padding-bottom: 2rem; }
    .sidebar-logo { padding: 1.25rem 1rem; font-weight: 700; font-size: 0.85rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent); border-bottom: 1px solid var(--border); }
    .sidebar-search { padding: 0.75rem 1rem; border-bottom: 1px solid var(--border); }
    .sidebar-search input { width: 100%; background: var(--surface2); border: 1px solid var(--border); border-radius: 6px; padding: 0.4rem 0.75rem; color: var(--text); font-size: 0.8rem; outline: none; }
    .sidebar-search input:focus { border-color: var(--accent); }
    .sidebar-nav { padding: 0.5rem 0; }
    .sidebar-group { list-style: none; padding: 0.2rem 0; }
    .sidebar-component { display: block; padding: 0.35rem 1rem; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); }
    .sidebar-fail { color: var(--fail); } .sidebar-pass { color: var(--pass); } .sidebar-error { color: var(--error); }
    .sidebar-group ul { list-style: none; }
    .sidebar-group ul li a { display: block; padding: 0.3rem 1rem 0.3rem 1.75rem; font-size: 0.82rem; color: var(--text-muted); text-decoration: none; border-left: 2px solid transparent; transition: all 0.15s; }
    .sidebar-group ul li a:hover { color: var(--text); background: var(--surface2); }
    .link-fail { color: #fc8181 !important; border-left-color: var(--fail) !important; }
    .link-pass { color: #68d391 !important; }
    .link-error { color: #b794f4 !important; border-left-color: var(--error) !important; }
    .main { flex: 1; overflow-y: auto; }
    .report-header { background: var(--surface); border-bottom: 1px solid var(--border); padding: 2rem 2.5rem; }
    .report-title { font-size: 1.5rem; font-weight: 700; margin-bottom: 0.25rem; }
    .report-subtitle { color: var(--text-muted); font-size: 0.85rem; }
    .scope-badge { display: inline-block; margin-top: 0.5rem; padding: 0.2rem 0.75rem; border-radius: 20px; font-size: 0.75rem; font-weight: 600; background: rgba(99,102,241,0.15); color: var(--accent); border: 1px solid rgba(99,102,241,0.3); }
    .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 1rem; margin-top: 1.5rem; }
    .stat-card { background: var(--surface2); border: 1px solid var(--border); border-radius: 8px; padding: 1rem; }
    .stat-value { font-size: 1.75rem; font-weight: 700; font-family: var(--font-mono); line-height: 1; }
    .stat-label { font-size: 0.75rem; color: var(--text-muted); margin-top: 0.35rem; }
    .stat-critical .stat-value { color: #e53e3e; } .stat-fail .stat-value { color: #fc8181; } .stat-pass .stat-value { color: #68d391; } .stat-total .stat-value { color: var(--accent); }
    .filters { padding: 1rem 2.5rem; display: flex; gap: 0.5rem; border-bottom: 1px solid var(--border); flex-wrap: wrap; align-items: center; }
    .filter-label { font-size: 0.75rem; color: var(--text-muted); margin-right: 0.25rem; }
    .filter-btn { padding: 0.35rem 0.85rem; border-radius: 20px; border: 1px solid var(--border); background: transparent; color: var(--text-muted); font-size: 0.78rem; cursor: pointer; transition: all 0.15s; }
    .filter-btn:hover, .filter-btn.active { background: var(--accent); border-color: var(--accent); color: white; }
    .content { padding: 1.5rem 2.5rem 4rem; }
    .story-section { background: var(--surface); border: 1px solid var(--border); border-radius: 10px; margin-bottom: 1rem; overflow: hidden; }
    .story-section[data-status="fail"] { border-left: 3px solid var(--fail); }
    .story-section[data-status="pass"] { border-left: 3px solid var(--pass); }
    .story-section[data-status="error"] { border-left: 3px solid var(--error); }
    .story-header { display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.25rem; gap: 1rem; flex-wrap: wrap; }
    .story-title-group { display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap; }
    .story-path { font-weight: 600; font-size: 0.9rem; } .story-separator { color: var(--text-muted); } .story-name { color: var(--text-muted); font-size: 0.9rem; }
    .story-meta { display: flex; gap: 0.4rem; flex-wrap: wrap; }
    .badge { padding: 0.2rem 0.55rem; border-radius: 20px; font-size: 0.72rem; font-weight: 600; }
    .badge-violations { background: rgba(229,62,62,0.15); color: #fc8181; }
    .badge-critical { background: rgba(229,62,62,0.25); color: #e53e3e; }
    .badge-serious { background: rgba(221,107,32,0.2); color: #f6ad55; }
    .badge-passes { background: rgba(56,161,105,0.15); color: #68d391; }
    .badge-error { background: rgba(159,122,234,0.2); color: #b794f4; }
    .pass-box { padding: 0.85rem 1.25rem; font-size: 0.82rem; color: #68d391; background: rgba(56,161,105,0.07); border-top: 1px solid var(--border); }
    .error-box { padding: 0.85rem 1.25rem; font-size: 0.82rem; color: #b794f4; background: rgba(159,122,234,0.07); border-top: 1px solid var(--border); }
    .violations-list { border-top: 1px solid var(--border); }
    .violation { border-bottom: 1px solid var(--border); } .violation:last-child { border-bottom: none; }
    .violation summary { display: flex; align-items: center; gap: 0.65rem; padding: 0.85rem 1.25rem; cursor: pointer; list-style: none; flex-wrap: wrap; }
    .violation summary:hover { background: var(--surface2); }
    .violation summary::-webkit-details-marker { display: none; }
    .impact-badge { padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; color: white; flex-shrink: 0; }
    .rule-id { font-family: var(--font-mono); font-size: 0.78rem; color: var(--accent); flex-shrink: 0; }
    .violation-desc { font-size: 0.82rem; color: var(--text); flex: 1; min-width: 200px; }
    .node-count { font-size: 0.72rem; color: var(--text-muted); margin-left: auto; flex-shrink: 0; }
    .violation-body { padding: 0.85rem 1.25rem 1rem; background: var(--surface2); border-top: 1px solid var(--border); }
    .meta-row { display: flex; align-items: center; gap: 1rem; margin-bottom: 0.75rem; }
    .meta-row a { color: var(--accent); font-size: 0.78rem; text-decoration: none; } .meta-row a:hover { text-decoration: underline; }
    .tags { font-size: 0.72rem; color: var(--text-muted); }
    .node-item { margin-bottom: 0.75rem; padding: 0.75rem; background: var(--bg); border-radius: 6px; border: 1px solid var(--border); }
    .html-snippet { display: block; font-family: var(--font-mono); font-size: 0.75rem; color: #f6ad55; overflow-x: auto; white-space: pre-wrap; word-break: break-all; }
    .failure-summary { font-size: 0.78rem; color: var(--text-muted); margin-top: 0.5rem; white-space: pre-line; }
    ::-webkit-scrollbar { width: 6px; height: 6px; } ::-webkit-scrollbar-track { background: var(--bg); } ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; } ::-webkit-scrollbar-thumb:hover { background: var(--accent); }
  </style>
</head>
<body>
<nav class="sidebar">
  <div class="sidebar-logo">⬡ A11y Report</div>
  <div class="sidebar-search"><input type="text" id="sidebar-search" placeholder="Filter components…" /></div>
  <ul class="sidebar-nav" id="sidebar-nav">${sidebarItems}</ul>
</nav>
<div class="main">
  <header class="report-header">
    <h1 class="report-title">Accessibility Report</h1>
    <p class="report-subtitle">Generated on ${generatedAt} · WCAG 2.0 A/AA</p>
    <span class="scope-badge">⬡ ${scopeLabel}</span>
    <div class="stats-grid">
      <div class="stat-card stat-total"><div class="stat-value">${totalStories}</div><div class="stat-label">Total stories</div></div>
      <div class="stat-card stat-fail"><div class="stat-value">${failingStories}</div><div class="stat-label">With violations</div></div>
      <div class="stat-card stat-pass"><div class="stat-value">${passingStories}</div><div class="stat-label">Fully passing</div></div>
      <div class="stat-card stat-critical"><div class="stat-value">${totalViolations}</div><div class="stat-label">Total violations</div></div>
      <div class="stat-card stat-critical"><div class="stat-value">${criticalTotal}</div><div class="stat-label">Critical issues</div></div>
    </div>
  </header>
  <div class="filters">
    <span class="filter-label">Filter:</span>
    <button class="filter-btn active" data-filter="all">All (${totalStories})</button>
    <button class="filter-btn" data-filter="fail">Violations (${failingStories})</button>
    <button class="filter-btn" data-filter="pass">Passing (${passingStories})</button>
    ${errorStories > 0 ? `<button class="filter-btn" data-filter="error">Errors (${errorStories})</button>` : ''}
    <button class="filter-btn" data-filter="critical" style="margin-left:auto">Critical only</button>
    <button class="filter-btn" data-filter="serious">Serious only</button>
  </div>
  <div class="content" id="content">${content}</div>
</div>
<script>
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      document.querySelectorAll('.story-section').forEach(section => {
        if (f === 'all') section.style.display = '';
        else if (f === 'critical' || f === 'serious') {
          const has = [...section.querySelectorAll('.violation')].some(v => v.dataset.impact === f);
          section.style.display = has ? '' : 'none';
        } else section.style.display = section.dataset.status === f ? '' : 'none';
      });
    });
  });
  document.getElementById('sidebar-search').addEventListener('input', e => {
    const q = e.target.value.toLowerCase();
    document.querySelectorAll('.sidebar-group').forEach(group => {
      group.style.display = group.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
  });
</script>
</body>
</html>`;
}

// ─── Main ───────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  console.log('🔍  Starting accessibility audit…');
  console.log(`   Storybook : ${STORYBOOK_URL}`);
  console.log(`   Scope     : ${IS_TARGETED ? COMPONENT_ARGS.join(', ') : 'all components'}`);
  console.log(`   Output    : ${OUTPUT_DIR}`);
  console.log(`   WCAG tags : ${WCAG_TAGS.join(', ')}`);

  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const browser: Browser = await chromium.launch();
  const page: Page = await browser.newPage();

  let stories: Story[] = [];

  try {
    console.log('\n📖  Fetching story index…');
    stories = await fetchStories(page);
    console.log(`   Found ${stories.length} stories`);

    if (stories.length === 0) {
      console.warn(`\n⚠️  No stories matched: "${COMPONENT_ARGS.join(', ')}"`);
      console.warn('   Check that the component name matches part of the Storybook title.');
      await browser.close();
      process.exit(0);
    }
  } catch (err) {
    console.error('❌  Could not fetch story index. Is Storybook running?', err);
    await browser.close();
    process.exit(1);
  }

  const reports: StoryReport[] = [];
  let current = 0;

  for (const story of stories) {
    current++;
    process.stdout.write(`\r   Analyzing [${current}/${stories.length}] ${story.title}/${story.name}…`);
    const report = await analyzeStory(page, story);
    reports.push(report);
  }

  console.log('\n\n✅  Analysis complete');

  const jsonPath = path.join(OUTPUT_DIR, 'a11y-report.json');
  fs.writeFileSync(jsonPath, JSON.stringify(reports, null, 2), 'utf-8');
  console.log(`📄  JSON report : ${jsonPath}`);

  const htmlPath = path.join(OUTPUT_DIR, 'a11y-report.html');
  fs.writeFileSync(htmlPath, generateHTML(reports), 'utf-8');
  console.log(`🌐  HTML report : ${htmlPath}`);

  const violations = reports.reduce((acc, r) => acc + r.violations.length, 0);
  const critical   = reports.flatMap(r => r.violations).filter(v => v.impact === 'critical').length;
  const failing    = reports.filter(r => r.violations.length > 0).length;

  console.log('\n── Summary ─────────────────────────────');
  console.log(`   Stories analyzed : ${reports.length}`);
  console.log(`   Stories failing  : ${failing}`);
  console.log(`   Total violations : ${violations}`);
  console.log(`   Critical issues  : ${critical}`);
  console.log('────────────────────────────────────────\n');

  await browser.close();

  if (process.env.CI && critical > 0) {
    console.error(`❌  CI: ${critical} critical violation(s) found. Failing build.`);
    process.exit(1);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});