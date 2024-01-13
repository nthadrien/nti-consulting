// 1. Import utilities from `astro:content` if import error run npx astro sync
import { defineCollection, z } from "astro:content";


// 2. Define a `type` and `schema` for each collection
const serviceCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
        date: z.date().transform( str => new Date(str)),
        draft: z.boolean().default(true),
        title: z.string(),
        author: z.string(),
        description: z.string()
    }),
});


// 3. Export a single `collections` object to register your collection(s)
export const collections = {
    'services': serviceCollection,
};