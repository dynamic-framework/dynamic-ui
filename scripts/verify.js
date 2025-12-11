#!/usr/bin/env node
/* eslint-disable no-console */

const { execSync } = require('child_process');

console.log('🔍 Running project quality verification...\n');

const run = ({ label, cmd }) => {
  console.log(`➡️  ${label}`);
  try {
    execSync(cmd, { stdio: 'inherit' });

    console.log('\n--------------------------------');
    console.log(`✅ ${label} OK`);
    console.log('--------------------------------\n');
  } catch (e) {
    console.error('\n--------------------------------');
    console.error(`❌ ${label} FAILED`);
    console.error(e);
    console.error('--------------------------------\n');
    process.exit(1);
  }
};

[
  { label: 'ESLint', cmd: 'npm run eslint' },
  { label: 'Stylelint', cmd: 'npm run stylelint' },
  { label: 'Tests', cmd: 'npm run test' },
  { label: 'Build', cmd: 'npm run build' },
].forEach(run);

console.log('\n✨ All checks passed successfully.');
