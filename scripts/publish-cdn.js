const path = require('node:path');
const { execSync } = require('node:child_process');

const packageDir = path.resolve(__dirname, '..');

const packageJsonPath = path.resolve(packageDir, 'package.json');
// eslint-disable-next-line import/no-dynamic-require
const packageJson = require(packageJsonPath);
const { version } = packageJson;

const versionPath = `s3://dynamicframework-cdn/assets/${version}/ui-react`;

try {
  execSync(`aws s3 sync ./dist/ ${versionPath} --delete --acl public-read`, { stdio: 'inherit' });
  console.log(`Sync completed successfully. Version: ${version}`);
} catch (error) {
  console.error('Error during sync:', error);
  process.exit(1);
}
