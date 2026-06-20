import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, 'docs');

const indexHtml = path.join(distDir, 'index.html');
const fallbackHtml = path.join(distDir, '404.html');

try {
  if (fs.existsSync(indexHtml)) {
    fs.copyFileSync(indexHtml, fallbackHtml);
    console.log('Successfully copied index.html to 404.html for GitHub Pages routing.');
  } else {
    console.error('Error: index.html not found in docs!');
  }
} catch (err) {
  console.error('Error copying index.html to 404.html:', err);
}