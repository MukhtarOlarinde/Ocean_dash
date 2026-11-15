#!/usr/bin/env node
'use strict';

/*
 * Builds the page that GitHub Pages serves, into _site/.
 *
 *   node scripts/build-site.js
 *
 * It is the same single file people download, with two additions so browsers
 * can install it as an app and run it offline: a link to the web manifest, and
 * the registration of the service worker in site/sw.js. No packages needed.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SOURCE = path.join(ROOT, 'ocean_dash.html');
const SITE = path.join(ROOT, 'site');
const OUT = path.join(ROOT, '_site');

const HEAD = [
  '<link rel="manifest" href="manifest.webmanifest" />',
  '<link rel="apple-touch-icon" href="icon-192.png" />',
  '<meta name="theme-color" content="#0b3a5c" />',
].join('\n');
const TAIL =
  "<script>if ('serviceWorker' in navigator) addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));</script>";

let html = fs.readFileSync(SOURCE, 'utf8');
if (!html.includes('</head>') || !html.includes('</body>')) throw new Error('The page has no </head> or </body> to add to.');
html = html.replace('</head>', `${HEAD}\n</head>`).replace(/<\/body>(?![\s\S]*<\/body>)/, `${TAIL}\n</body>`);

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'index.html'), html);
for (const file of fs.readdirSync(SITE)) fs.copyFileSync(path.join(SITE, file), path.join(OUT, file));
console.log(`[site] _site/index.html, ${Math.round(html.length / 1024)} KB, plus ${fs.readdirSync(SITE).length} site files`);
