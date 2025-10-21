#!/usr/bin/env node
// Computes the next dev pre-release number for 2.0.0-dev.N
// Reads JSON array of versions from stdin and outputs the next integer (N+1).

const fs = require('node:fs');

function main() {
  const input = fs.readFileSync(0, 'utf8').trim();
  let versions = [];
  try {
    versions = JSON.parse(input || '[]');
    if (!Array.isArray(versions)) versions = [];
  } catch (e) {
    versions = [];
  }
  const baseRegex = /^2\.0\.0-dev\.(\d+)$/;
  const nums = versions
    .filter((v) => baseRegex.test(v))
    .map((v) => parseInt(v.match(baseRegex)[1], 10));
  const max = nums.length ? Math.max(...nums) : 0;
  process.stdout.write(String(max + 1));
}

main();
