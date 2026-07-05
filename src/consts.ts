// True for links that leave the site (http/https), so we can open them in a new tab.
export const isExternal = (href: string) => /^https?:\/\//.test(href);

// Site-wide config. Edit these, not the layouts.
export const SITE = {
  title: 'Mert Yildiz',
  tagline: 'Software engineer. Mostly frontend, plus backend and infra.',
  description:
    'Mert Yildiz, a software engineer in Berlin. Mostly frontend, plus backend, infra, and the things I build and self-host.',
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
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mert-yildiz/' },
  { label: 'Email', href: 'mailto:hi@mert574.dev' },
];

// Portfolio projects for the landing page. Edit freely. Strongest first.
export const PROJECTS = [
  {
    name: 'PSP.js',
    blurb:
      'A PlayStation Portable emulator in TypeScript, running in the browser. HLE, so no BIOS: it reimplements PSP syscalls, runs the MIPS Allegrex CPU and VFPU, renders the GE over WebGL, and decodes ATRAC3+/PSMF. Boots real commercial games.',
    href: 'https://github.com/mert574/psp-js',
    tag: 'emulator',
  },
  {
    name: 'Pulse Pager',
    blurb:
      'A SaaS I built end to end: API, background workers, billing, and an SPA served from object storage.',
    href: 'https://pulsepager.com',
    tag: 'product',
  },
  {
    name: 'M2D Engine',
    blurb:
      'A small 2D game engine in JavaScript: Matter.js physics, a double-buffered Canvas renderer, a component-based entity system, scenes, camera, and a UI layer.',
    href: 'https://github.com/mert574/m2d-engine',
    tag: 'engine',
  },
  {
    name: 'Homelab',
    blurb:
      'A self-hosted cluster on Proxmox and k3s, all in code: NixOS, OpenTofu, Argo CD, Garage object storage. Hosts Pi-hole, a media server, a password manager, and this site.',
    href: 'https://github.com/mert574/homelab-core',
    tag: 'infra',
  },
];
