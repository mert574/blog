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
      themes: ['github-light', 'github-dark'],
      // Follow the site's own light/dark toggle instead of picking one theme.
      themeCssSelector: (theme) => `[data-theme='${theme.type}']`,
      styleOverrides: {
        borderRadius: '4px',
        codeFontFamily: "'JetBrains Mono Variable', ui-monospace, monospace",
        uiFontFamily: "'JetBrains Mono Variable', ui-monospace, monospace",
      },
    }),
    mdx(),
    sitemap(),
  ],
});
