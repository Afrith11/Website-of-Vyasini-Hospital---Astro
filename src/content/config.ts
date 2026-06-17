import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.enum(['General Health', 'Women Health', 'Child Health', 'Diabetes Care', 'Emergency Care']),
    author: z.string().default('Vyasini Medical Team'),
    image: z.string().default('/images/blog-placeholder.jpg'),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  'blog': blogCollection,
};
