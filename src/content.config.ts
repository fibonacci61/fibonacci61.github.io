import { defineCollection, z } from "astro:content";

const notes = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        date: z.string(),
        updated: z.string().optional(),
        tags: z.array(z.string()).default([]),
    }),
});

export const collections = { notes };
