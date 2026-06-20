import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, 'docs');

const fallbackHtml = path.join(distDir, '404.html');

// Lightweight 404.html — only redirects SPA routes, never intercepts static files
const content = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Daivam Origins</title>
    <script>
      // Only redirect if this is a real SPA route, not a missing static file
      (function () {
        var path = window.location.pathname;
        var staticExtensions = /\\.(jpg|jpeg|png|webp|gif|svg|ico|css|js|json|woff|woff2|ttf|eot|map|txt|xml|pdf)$/i;
        if (staticExtensions.test(path)) {
          // It's a missing static file — don't redirect, let the 404 show naturally
          document.write('<h1 style="font-family:sans-serif;padding:2rem">404 — File not found</h1>');
        } else {
          // It's an SPA route — redirect to index with the path stored in sessionStorage
          sessionStorage.setItem('spa-redirect', path + window.location.search);
          window.location.replace('/');
        }
      })();
    </script>
  </head>
  <body></body>
</html>`;

try {
  fs.writeFileSync(fallbackHtml, content, 'utf-8');
  console.log('Successfully created smart 404.html for GitHub Pages SPA routing.');
} catch (err) {
  console.error('Error writing 404.html:', err);
}