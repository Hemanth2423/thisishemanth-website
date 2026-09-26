import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

import type { SchemaContext } from 'astro:content';

const schema = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    hero: image().optional(),
    heroAlt: z.string().optional(),
  });

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema,
});

const scribbles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/scribbles' }),
  schema,
});

export const collections = { work, scribbles };
