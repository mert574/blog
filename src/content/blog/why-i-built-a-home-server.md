---
title: Why I built a home server
description: One small box in my apartment now runs DNS, a password vault, an AI proxy, a media server, and this blog. It started as a Raspberry Pi 2 that could barely run Pi-hole. Why I'd rather run these myself than rent them.
date: 2026-07-06
tags: [homelab, infra]
draft: true
---

One small box in my apartment runs most of the things I use every day: DNS, a password vault, an AI proxy, a media server, and this blog. Here's how that happened, and why.

## How it started

For years, all I had was a Raspberry Pi 2 running Pi-hole, and that was already close to what it could handle. I recently replaced it with a Lenovo ThinkCentre M720q: an i5-9500T, 16GB of RAM, a single 256GB SSD. I needed a real way to manage the new box, so I looked into Proxmox, then k3s, then GitOps, and somewhere in there it turned into a homelab. I ended up learning a lot of infrastructure along the way.

## What it runs

Day to day it handles the small stuff: DNS and ad blocking through Pi-hole, passwords through Vaultwarden, and a chat UI, LibreChat, that talks to a proxy in front of a few Anthropic subscriptions. That proxy splits my requests across them for more usage and lets anything else on the network use them too, without holding its own key. It's also a media server, Jellyfin plus the usual `*arr` stack, and I'll say it plainly: some of what it serves didn't come from a paid subscription.

Then there's what I've actually built and deployed there. This blog is served out of my own S3-compatible object store, and I wrote about [that pipeline separately](/blog/hosting-this-blog-on-my-homelab).

Pulse Pager, an uptime monitoring product of mine, also runs on the cluster. It uses the shared Postgres instance for durable state, the shared Redis for its event bus, and a full observability stack watching it: Prometheus, Loki, Tempo, Grafana. Argo CD is what keeps it, and everything else on the cluster, in sync with git.

Activepieces handles workflow automation on that same shared Postgres and Redis, and a self-hosted GitHub Actions runner does the CI work, including building and deploying this blog. All of it is reachable from outside through Cloudflare tunnels.

## Why self-host instead of paying for each one

The usual answer people give is privacy, but I'm not particularly paranoid about it. I just wanted to learn.

Pi-hole, the media server, and ccflare aren't things you can rent, so I had to set them up myself regardless. Once that setup existed, I got curious about what else I could run on it. Owning instead of renting just felt like a good idea.

I also told myself it would be cheaper this way. I'm still not sure I believe that.

## The tradeoffs

There's one disk and no redundancy. 16GB of RAM means every always-on service only gets a few hundred megabytes, and I'm close enough to that limit that starting anything heavy means stopping something else first.

None of this is the cheapest way to run a password manager, but it's the only way to run a Pi-hole, a media server, and an AI proxy without handing them to someone else.
