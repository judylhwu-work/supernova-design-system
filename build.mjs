import StyleDictionary from 'style-dictionary';
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir = dirname(fileURLToPath(import.meta.url));
const tmp = join(__dir, '.build-tmp');

// Preprocess Figma token exports before Style Dictionary sees them:
// 1. Flatten Figma color objects ({ colorSpace, hex, ... }) → hex string
// 2. Rename $root keys → 'default' (Figma uses $root for a group's own value)
// 3. Strip $extensions (Figma-only metadata, not needed in output)
function clean(obj) {
  if (typeof obj !== 'object' || obj === null) return obj;

  if ('$value' in obj) {
    const v = obj.$value;
    let value = (v && typeof v === 'object' && v.hex) ? v.hex : v;
    // Fix references that point to $root (now renamed to 'default')
    if (typeof value === 'string') value = value.replace(/\.\$root}/g, '.default}');
    return {
      $type: obj.$type,
      $value: value,
      ...(obj.$description && { $description: obj.$description }),
    };
  }

  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    if (k === '$extensions') continue;
    // Strip pixel/value annotations Figma adds to key names: "minimal (2)" → "minimal"
    let key = k.replace(/\s+\(\d+\)$/, '');
    if (key === '$root') key = 'default';
    out[key] = clean(v);
  }
  return out;
}

// Write cleaned token files to a temp directory
mkdirSync(tmp, { recursive: true });
mkdirSync(join(__dir, 'dist'), { recursive: true });

for (const name of ['value', 'light', 'dark']) {
  const raw = JSON.parse(readFileSync(join(__dir, `foundations/tokens/${name}.tokens.json`)));
  writeFileSync(join(tmp, `${name}.json`), JSON.stringify(clean(raw)));
}

// Run Style Dictionary for each output target
async function buildTokens(source, destination, format, transforms, selector) {
  const sd = new StyleDictionary({
    log: { verbosity: 'silent' },
    source: [source],
    platforms: {
      out: {
        transforms,
        prefix: 'sn',
        buildPath: 'dist/',
        files: [{
          destination,
          format,
          ...(selector && { options: { selector } }),
        }],
      },
    },
  });
  await sd.buildAllPlatforms();
}

// CSS custom properties — light and dark modes
await buildTokens(join(tmp, 'light.json'), 'tokens.light.css', 'css/variables', ['name/kebab'], ':root');
await buildTokens(join(tmp, 'dark.json'),  'tokens.dark.css',  'css/variables', ['name/kebab'], ':root');

// JS module — primitives only (for non-CSS contexts like the Phaser game)
await buildTokens(join(tmp, 'value.json'), 'tokens.js', 'javascript/es6', ['name/camel']);

// Clean up temp files
rmSync(tmp, { recursive: true });

console.log('Supernova tokens built → dist/');
