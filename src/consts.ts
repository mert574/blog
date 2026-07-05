// Site-wide config. Edit these, not the layouts.
export const SITE = {
  title: 'Mert Yildiz',
  tagline: 'Software engineer. I build systems and write about them.',
  description:
    'Personal site and blog of Mert Yildiz, software engineer. Notes on backend, infra, and the things I build.',
  url: 'https://mert574.dev',
  author: 'Mert Yildiz',
  locale: 'en',
};

// Top nav. Keep it short.
export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Writing', href: '/blog' },
  { label: 'Tags', href: '/tags' },
  { label: 'Search', href: '/search' },
];

// Links shown on the landing page and footer.
export const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/mert574' },
  { label: 'Email', href: 'mailto:hi@mert574.dev' },
];

// Portfolio projects for the landing page. Edit freely.
export const PROJECTS = [
  {
    name: 'Homelab',
    blurb:
      'A self-hosted cluster on Proxmox + k3s, everything in code: NixOS LXCs, OpenTofu, Argo CD, Garage object storage. This site is served from it.',
    href: 'https://github.com/mert574/homelab-core',
    tag: 'infra',
  },
  {
    name: 'Pulse',
    blurb:
      'A pager / on-call product. Backend, workers, billing, and a static SPA frontend pushed to object storage.',
    href: 'https://github.com/mert574',
    tag: 'product',
  },
];
