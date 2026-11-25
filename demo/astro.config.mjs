import { defineConfig } from 'astro/config';

// Side-by-side previews of design proposals (npm run demo).
// Separate from the site: nothing in demo/ is built or deployed.
export default defineConfig({
  srcDir: '.',
  publicDir: '../public',
  server: { port: 4400 },
  devToolbar: { enabled: false },
});
