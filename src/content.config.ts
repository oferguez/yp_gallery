import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const paintingsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/paintings' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    year: z.number(),
    medium: z.string(),
    dimensions: z.string(),
    series: z.string(),
    description: z.string(),
    featured: z.boolean().default(false),
    order: z.number(),
    coverImage: z.string().url(),
    coverAlt: z.string(),
    galleryImages: z
      .array(
        z.object({
          src: z.string().url(),
          alt: z.string()
        })
      )
      .optional()
  })
});

export const collections = {
  paintings: paintingsCollection
};
