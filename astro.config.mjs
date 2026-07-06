import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import expressiveCode from 'astro-expressive-code';
import icon from 'astro-icon';

// https://astro.build
export default defineConfig({
  site: 'https://mert574.dev',
  // Expressive Code must come before mdx so it also styles code in .mdx files.
  integrations: [
    expressiveCode({
      // One theme per scheme, switched by the data-theme attribute Base sets.
      themes: ['github-dark', 'github-light'],
      themeCssSelector: (theme) => `[data-theme='${theme.type}']`,
      useDarkModeMediaQuery: false,
      styleOverrides: {
        borderRadius: '4px',
        codeFontFamily: "'Geist Mono Variable', ui-monospace, monospace",
        uiFontFamily: "'Geist Mono Variable', ui-monospace, monospace",
      },
    }),
    mdx(),
    sitemap(),
    icon(),
  ],
});
