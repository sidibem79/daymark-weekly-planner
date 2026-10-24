// Checks that the site's text colours stay readable: each pair below must meet its minimum
// contrast (WCAG AA is 4.5:1 for body text; supporting text aims for 6:1). Colours are read from
// each page's :root, so changing a colour there is checked here. Run by the pre-commit hook
// (.githooks/pre-commit), or directly: `node scripts/check-contrast.mjs`.
import { readFileSync } from "node:fs";

// [page, text colour, background colour, minimum]. A name is a custom property in the page's
// :root; anything else is a literal colour.
const PAIRS = [
  ["upgrade/index.html", "--ink", "#FFFFFF", 4.5],
  ["upgrade/index.html", "--head", "#FFFFFF", 4.5],
  ["upgrade/index.html", "--quiet", "#FFFFFF", 6],
  ["upgrade/index.html", "--quiet", "--mist", 6],
  ["upgrade/index.html", "--cobalt", "#FFFFFF", 4.5],
  ["upgrade/index.html", "#FFFFFF", "--cobalt", 4.5],
  ["upgrade/index.html", "#FFFFFF", "--cobalt-h", 4.5],
  ["upgrade/index.html", "--on-dark-2", "--ink", 6],
  ["upgrade/index.html", "--on-dark-3", "--ink", 6],
];

const roots = new Map();
function rootOf(page) {
  if (!roots.has(page)) {
    const html = readFileSync(page, "utf8");
    roots.set(page, /:root\{([^}]*)\}/.exec(html)?.[1] ?? "");
  }
  return roots.get(page);
}

function colour(page, value) {
  if (!value.startsWith("--")) return value;
  const found = new RegExp(`${value}:\\s*(#[0-9A-Fa-f]{6})`).exec(rootOf(page))?.[1];
  if (found === undefined) throw new Error(`${value} is not a hex colour in ${page}'s :root`);
  return found;
}

function luminance(hex) {
  const [r, g, b] = [1, 3, 5].map((i) => {
    const v = parseInt(hex.slice(i, i + 2), 16) / 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(a, b) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

let failed = 0;
for (const [page, text, background, minimum] of PAIRS) {
  const ratio = contrast(colour(page, text), colour(page, background));
  if (ratio < minimum) {
    failed++;
    console.error(`${page}: ${text} on ${background} is ${ratio.toFixed(2)}:1, needs ${minimum}:1`);
  }
}
if (failed > 0) process.exit(1);
console.log(`Contrast: ${PAIRS.length} pairs readable.`);
