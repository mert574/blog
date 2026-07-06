// True for links that leave the site (http/https), so we can open them in a new tab.
export const isExternal = (href: string) => /^https?:\/\//.test(href);

// Site-wide config. Edit these, not the layouts.
export const SITE = {
  title: 'Mert Yıldız',
  tagline: 'Senior software engineer. Mostly frontend, plus backend and infra.',
  description:
    'Mert Yıldız, a senior software engineer in Berlin. Mostly frontend, plus distributed systems, cloud infrastructure, and the things I build and self-host.',
  url: 'https://mert574.dev',
  author: 'Mert Yıldız',
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

// Work history for the landing page. Years and facts, no titles.
export const HISTORY = [
  {
    years: '2025',
    name: 'Trade Republic Bank',
    blurb:
      'Customer support tooling for millions of customers: live chat, WebRTC phone calls, and AI agents working in real time alongside the support team, transcribing, translating both ways, suggesting responses, pointing at the likely problem, and running first-aid checks that often fix the problem on the spot.',
  },
  {
    years: '2021',
    name: 'HeyJobs.co',
    blurb:
      "Led the frontend of the recruiter platform through the TypeScript and Vite migrations. Led the company's AI tooling adoption: policy, use cases, and internal guides.",
  },
  {
    years: '2020',
    name: 'Toolio.com',
    blurb:
      'Merchandise planning platform used by top retail brands; built its excel-like planning UI in React.',
  },
  {
    years: '2019',
    name: 'Orema AS',
    blurb:
      'Built the frontend architecture of a multi-channel live chat platform: chat, video calls, and an offline-capable PWA with push notifications.',
  },
  {
    years: '2016',
    name: 'Bumin Software',
    blurb:
      'Built dashboards to monitor and manage payment flows moving millions of dollars a day.',
  },
];

// Portfolio projects for the landing page. Edit freely. Strongest first.
export const PROJECTS = [
  {
    name: 'PSP.js',
    blurb: [
      'A PSP emulator in TypeScript that boots real 3D games in the browser, rendering over WebGL.',
    ],
    href: 'https://mert.js.org/psp-js/docs/',
  },
  {
    name: 'Pulse Pager',
    blurb: [
      'A multi-tenant uptime monitoring service in Go: five services over Kafka, multi-region checks.',
    ],
    href: 'https://pulsepager.com',
  },
  {
    name: 'M2D Engine',
    blurb: [
      'A full 2D game engine in JavaScript: physics, entities, scenes, and a pluggable renderer.',
    ],
    href: 'https://github.com/mert574/m2d-engine',
  },
  {
    name: 'Homelab',
    blurb: [
      'A self-hosted Kubernetes (k3s) cluster on Proxmox, all in code with NixOS; hosts Pi-hole, a media server, and this site.',
    ],
    href: 'https://github.com/mert574/homelab-core',
  },
];
