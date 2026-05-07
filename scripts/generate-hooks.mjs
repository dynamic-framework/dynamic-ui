/**
 * generate-hooks.mjs
 *
 * Generates docs/hooks.json with public hook APIs from Dynamic UI.
 * Uses the TypeScript Compiler API to extract exported types, JSDoc, and
 * call signatures — information that react-docgen-typescript cannot provide
 * because it only processes React components, not plain functions.
 *
 * Prerequisite: docs/ directory must exist (run `npm run build:storybook` first).
 * Usage: node scripts/generate-hooks.mjs
 */

import { writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const ts = require('typescript');

const dirPath = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(dirPath, '..');

// --- Validation ---
const OUTPUT_DIR = resolve(ROOT, 'docs');
if (!existsSync(OUTPUT_DIR)) {
  process.stderr.write('docs/ not found. Run `npm run build:storybook` first.\n');
  process.exit(1);
}

const TSCONFIG_PATH = resolve(ROOT, 'tsconfig.json');
if (!existsSync(TSCONFIG_PATH)) {
  process.stderr.write('tsconfig.json not found at project root.\n');
  process.exit(1);
}

// --- Public hook files to document (relative to project root) ---
const HOOK_FILES = [
  'src/components/DToastContainer/useDToast.tsx',
];

// --- Load tsconfig ---
const tsConfigFile = ts.readConfigFile(TSCONFIG_PATH, ts.sys.readFile);
const { options: compilerOptions } = ts.parseJsonConfigFileContent(
  tsConfigFile.config,
  ts.sys,
  dirname(TSCONFIG_PATH),
);

// --- Helpers ---

/** Extracts plain text from a JSDoc comment (string or NodeArray). */
function jsDocCommentToString(comment) {
  if (!comment) return '';
  if (typeof comment === 'string') return comment.trim();
  return ts.displayPartsToString(comment).trim();
}

/** Reads the JSDoc text attached directly to a node via ts.getJSDocCommentsAndTags. */
function getNodeJsDoc(node) {
  return ts.getJSDocCommentsAndTags(node)
    .map((d) => jsDocCommentToString(d.comment))
    .filter(Boolean)
    .join('\n')
    .trim();
}

/** Returns the raw source text of a TypeNode (best-effort inline type display). */
function typeNodeText(typeNode, sourceFile) {
  if (!typeNode) return 'unknown';
  return typeNode.getText(sourceFile).replace(/\s+/g, ' ').trim();
}

/**
 * Walks a TypeLiteralNode and returns a map of field name → { type, required, description }.
 * Only processes PropertySignature members (skips index signatures etc.).
 */
function extractTypeLiteralFields(typeNode, sourceFile) {
  if (!typeNode || !ts.isTypeLiteralNode(typeNode)) return {};
  return typeNode.members.reduce((result, member) => {
    if (!ts.isPropertySignature(member) || !member.name) return result;
    const name = member.name.getText(sourceFile);
    return {
      ...result,
      [name]: {
        type: typeNodeText(member.type, sourceFile),
        required: !member.questionToken,
        description: getNodeJsDoc(member),
      },
    };
  }, {});
}

/**
 * Reads `@param` JSDoc tags from a node and returns name → description map.
 * This handles inline-documented parameters (e.g. on `useCallback` wrappers)
 * that are not accessible via the type checker's documentation comments.
 */
function getJsDocParamDescriptions(node) {
  return ts.getJSDocTags(node).reduce((result, tag) => {
    if (!ts.isJSDocParameterTag(tag) || !tag.name) return result;
    const raw = tag.name.getText ? tag.name.getText() : String(tag.name);
    const name = raw.replace(/^-?\s*/, '').trim();
    return {
      ...result,
      [name]: jsDocCommentToString(tag.comment).replace(/^-\s*/, '').trim(),
    };
  }, {});
}

/**
 * Extracts the call parameters of a function-typed symbol using the type checker.
 * Returns [{ name, type, required, description }].
 */
function extractCallParams(symbol, checker, locationNode) {
  const type = checker.getTypeOfSymbolAtLocation(symbol, locationNode);
  const sigs = checker.getSignaturesOfType(type, ts.SignatureKind.Call);
  if (!sigs.length) return [];
  return sigs[0].parameters.map((param) => ({
    name: param.name,
    type: checker.typeToString(
      checker.getTypeOfSymbolAtLocation(param, locationNode),
    ),
    required: /* eslint-disable-next-line no-bitwise */
      !(Number(param.flags) & Number(ts.SymbolFlags.Optional)),
    description: ts.displayPartsToString(
      param.getDocumentationComment(checker),
    ).trim(),
  }));
}

/**
 * Returns the string representation of the return type of a function-typed symbol.
 */
function extractReturnTypeString(symbol, checker, locationNode) {
  const type = checker.getTypeOfSymbolAtLocation(symbol, locationNode);
  const sigs = checker.getSignaturesOfType(type, ts.SignatureKind.Call);
  if (!sigs.length) return 'void';
  return checker.typeToString(checker.getReturnTypeOfSignature(sigs[0]));
}

// --- Core extraction ---

/**
 * Parses a hook source file and returns a structured API descriptor:
 * {
 *   source,        // relative file path
 *   description,   // hook JSDoc
 *   parameters,    // hook function parameters (usually empty for React hooks)
 *   returns,       // map of returned properties → their call signature
 *   types,         // exported type aliases with field descriptions
 * }
 */
function extractHookDoc(relPath) {
  const filePath = resolve(ROOT, relPath);
  if (!existsSync(filePath)) throw new Error(`File not found: ${filePath}`);

  const program = ts.createProgram([filePath], { ...compilerOptions, noEmit: true });
  const checker = program.getTypeChecker();
  const sourceFile = program.getSourceFile(filePath);
  if (!sourceFile) throw new Error(`Could not load source file: ${filePath}`);

  const doc = {
    source: relPath,
    description: '',
    parameters: [],
    returns: {},
    types: {},
  };

  ts.forEachChild(sourceFile, (node) => {
    // eslint-disable-next-line no-bitwise
    const flags = ts.getCombinedModifierFlags(node);
    // eslint-disable-next-line no-bitwise
    const isExported = (flags & ts.ModifierFlags.Export) !== 0;
    // eslint-disable-next-line no-bitwise
    const isDefault = (flags & ts.ModifierFlags.Default) !== 0;

    // Collect exported type aliases (e.g. export type ToastData = { ... })
    if (ts.isTypeAliasDeclaration(node) && isExported) {
      doc.types[node.name.text] = {
        description: getNodeJsDoc(node),
        fields: extractTypeLiteralFields(node.type, sourceFile),
      };
    }

    // Process the default-exported hook function
    if (ts.isFunctionDeclaration(node) && isExported && isDefault) {
      doc.description = getNodeJsDoc(node);

      // Hook-level parameters (typically none for React hooks)
      doc.parameters = (node.parameters ?? []).map((param) => ({
        name: param.name.getText(sourceFile),
        type: typeNodeText(param.type, sourceFile),
        required: !param.questionToken && !param.initializer,
        description: getNodeJsDoc(param),
      }));

      // Collect JSDoc from `const x = useCallback(...)` declarations inside the body.
      // TypeScript attaches doc comments to variable declarations, not return symbols,
      // so we pre-build maps of variable name → { description, paramDescriptions }
      // for the return enrichment step.
      const innerJsDoc = {};
      const innerParamDescriptions = {};
      if (node.body) {
        ts.forEachChild(node.body, (stmt) => {
          if (
            ts.isVariableStatement(stmt)
            && stmt.declarationList
            && stmt.declarationList.declarations.length
          ) {
            const decl = stmt.declarationList.declarations[0];
            if (decl.name && ts.isIdentifier(decl.name)) {
              const jsDoc = getNodeJsDoc(stmt);
              if (jsDoc) innerJsDoc[decl.name.text] = jsDoc;
              const paramMap = getJsDocParamDescriptions(stmt);
              if (Object.keys(paramMap).length) {
                innerParamDescriptions[decl.name.text] = paramMap;
              }
            }
          }
        });
      }

      // Use the type checker to inspect the hook's return type
      if (node.name) {
        const hookSymbol = checker.getSymbolAtLocation(node.name);
        if (hookSymbol) {
          const hookType = checker.getTypeOfSymbolAtLocation(hookSymbol, node);
          const sigs = checker.getSignaturesOfType(hookType, ts.SignatureKind.Call);
          if (sigs.length) {
            const returnType = checker.getReturnTypeOfSignature(sigs[0]);
            checker.getPropertiesOfType(returnType).forEach((prop) => {
              const symbolDoc = ts.displayPartsToString(
                prop.getDocumentationComment(checker),
              ).trim();
              doc.returns[prop.name] = {
                description: symbolDoc || innerJsDoc[prop.name] || '',
                parameters: extractCallParams(prop, checker, node).map((p) => ({
                  ...p,
                  description:
                    p.description
                    || (innerParamDescriptions[prop.name] ?? {})[p.name]
                    || '',
                })),
                returns: {
                  type: extractReturnTypeString(prop, checker, node),
                },
              };
            });
          }
        }
      }
    }
  });

  return doc;
}

// --- Run ---
process.stdout.write('Parsing hook APIs...\n');
const results = {};
let failed = 0;

HOOK_FILES.forEach((relPath) => {
  const hookName = relPath.split('/').pop().replace('.tsx', '');
  try {
    results[hookName] = extractHookDoc(relPath);
    process.stdout.write(`  ok ${hookName}\n`);
  } catch (err) {
    process.stderr.write(`  FAIL ${hookName}: ${err.message}\n`);
    failed += 1;
  }
});

const OUTPUT_PATH = resolve(OUTPUT_DIR, 'hooks.json');
const output = JSON.stringify(results, null, 2);
writeFileSync(OUTPUT_PATH, output);

const sizeKB = (Buffer.byteLength(output) / 1024).toFixed(1);
process.stdout.write('\nGenerated docs/hooks.json\n');
process.stdout.write(`  Hooks: ${Object.keys(results).length} documented, ${failed} failed\n`);
process.stdout.write(`  Size: ${sizeKB} KB\n`);

if (failed > 0) {
  process.stderr.write(`\n${failed} hooks failed\n`);
  process.exit(1);
}
