import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Astro 5 content layer: posts are markdown/mdx under src/content/blog.
// The file name (without extension) is the slug, e.g. hello-world.mdx -> /blog/hello-world.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      // Co-locate the cover next to the post and it goes through the image pipeline.
      cover: image().optional(),
      coverAlt: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
