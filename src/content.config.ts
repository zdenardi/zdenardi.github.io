import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const post = defineCollection({
  loader: glob({
    base: "./src/content/posts",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    author: z.string(),
    tags: z.array(z.string()),
    pubDate: z.coerce.date(),
    layout: z.string().optional(),
    bannerImg: z.string().optional(),
  }),
});

export const collections = { post };
