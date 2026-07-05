import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import expressiveCode from 'astro-expressive-code';

// https://astro.build
export default defineConfig({
  site: 'https://mert574.dev',
  // Expressive Code must come before mdx so it also styles code in .mdx files.
  integrations: [
    expressiveCode({
      // Dark-only site, so a single dark theme tuned to the terminal palette.
      themes: ['github-dark'],
      styleOverrides: {
        borderRadius: '4px',
        borderColor: '#20232b',
        codeBackground: '#0e1014',
        codeFontFamily: "'JetBrains Mono Variable', ui-monospace, monospace",
        uiFontFamily: "'JetBrains Mono Variable', ui-monospace, monospace",
      },
    }),
    mdx(),
    sitemap(),
  ],
});
