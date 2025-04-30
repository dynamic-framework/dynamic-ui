const fs = require('node:fs');
const path = require('node:path');
const { execSync } = require('node:child_process');
const glob = require('glob');

const dirPath = path.join(__dirname, '../dist/css');

if (fs.existsSync(dirPath)) {
  fs.rmSync(dirPath, { recursive: true });
}

fs.mkdirSync(dirPath, { recursive: true });

const {
  version: VERSION,
  dependencies: { bootstrap: BOOTSTRAP_VERSION },
  license: LICENSE,
} = require('../package.json');

const HEADER_COMMENT = `/*!
 * dynamic-framework ${VERSION}
 * bootstrap ${BOOTSTRAP_VERSION}
 * license ${LICENSE}
 */
`;

const vendorCssImports = [
  require.resolve('react-international-phone/style.css'),
];

let vendorCss = '';
vendorCssImports.forEach((cssPath) => {
  const content = fs.readFileSync(cssPath, 'utf8');
  vendorCss += `${content}\n`;
});

const files = glob.sync('./src/style/*.scss');

files.forEach((file) => {
  const filename = path.basename(file, '.scss');

  if (filename.startsWith('_')) return;

  const rawFilePath = path.join(dirPath, `${filename}.css`);
  const minFilePath = path.join(dirPath, `${filename}.min.css`);

  execSync(`sass --trace --color --load-path=./ --no-source-map ${file} > ${rawFilePath}`);
  execSync(`sass --trace --color --load-path=./ --no-source-map --style=compressed ${file} > ${minFilePath}`);

  const rawContent = fs.readFileSync(rawFilePath, 'utf8');
  const minContent = fs.readFileSync(minFilePath, 'utf8');

  fs.writeFileSync(
    rawFilePath,
    Buffer.concat([
      Buffer.from(HEADER_COMMENT, 'utf8'),
      Buffer.from(vendorCss, 'utf8'),
      Buffer.from(rawContent, 'utf8'),
    ]),
    'utf8',
  );
  fs.writeFileSync(
    minFilePath,
    Buffer.concat([
      Buffer.from(HEADER_COMMENT, 'utf8'),
      Buffer.from(vendorCss, 'utf8'),
      Buffer.from(minContent.replace(/\uFEFF/g, ''), 'utf8'),
    ]),
    'utf8',
  );
});

execSync(`postcss ${path.join(dirPath, '*.css')} --replace --use autoprefixer --no-map`);
