const fs = require('node:fs');
const path = require('node:path');
const { execSync } = require('node:child_process');

const packageDir = path.resolve(__dirname, '..')

const packageJsonPath = path.resolve(packageDir, 'package.json');
const packageJson = require(packageJsonPath)

const versionFilePath = path.resolve(packageDir, 'dist', 'version');

fs.writeFileSync(versionFilePath, packageJson.version);

// execSync('git add version.json');
// execSync('git commit -m "chore(release): add version.json"');
