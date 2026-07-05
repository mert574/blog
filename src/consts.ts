// True for links that leave the site (http/https), so we can open them in a new tab.
export const isExternal = (href: string) => /^https?:\/\//.test(href);

// Site-wide config. Edit these, not the layouts.
export const SITE = {
  title: 'Mert Yildiz',
  tagline: 'Senior software engineer. Mostly frontend, plus backend and infra.',
  description:
    'Mert Yildiz, a senior software engineer in Berlin. Mostly frontend, plus distributed systems, cloud infrastructure, and the things I build and self-host.',
  url: 'https://mert574.dev',
  author: 'Mert Yildiz',
  locale: 'en',
};

// Top nav. Keep it short.
export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
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
    blurb: [
      'A PSP emulator in TypeScript that boots real commercial games in the browser, rendering over WebGL.',
    ],
    href: 'https://mert.js.org/psp-js/docs/',
    tag: 'emulator',
  },
  {
    name: 'Pulse Pager',
    blurb: [
      'A multi-tenant uptime monitoring service in Go: five services over Kafka, multi-region checks.',
    ],
    href: 'https://pulsepager.com',
    tag: 'product',
  },
  {
    name: 'M2D Engine',
    blurb: [
      'A full 2D game engine in JavaScript: physics, entities, scenes, and a pluggable renderer.',
    ],
    href: 'https://github.com/mert574/m2d-engine',
    tag: 'engine',
  },
  {
    name: 'Homelab',
    blurb: [
      'A self-hosted Kubernetes (k3s) cluster on Proxmox, all in code with NixOS; hosts Pi-hole, a media server, and this site.',
    ],
    href: 'https://github.com/mert574/homelab-core',
    tag: 'infra',
  },
];
