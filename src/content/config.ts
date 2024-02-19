// 1. Import utilities from `astro:content` if import error run npx astro sync
import { defineCollection, z } from "astro:content";


const servicesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        author: z.string(),
        date: z.date().transform(str => new Date(str)),
        description: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }),
    })
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
    'services': servicesCollection,
};