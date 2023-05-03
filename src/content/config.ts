import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		date: z
		.string()
		.or(z.date())
		.transform((val) => new Date(val))
	}),
});

const blender = defineCollection({
	schema: z.object({
		title: z.string(),
		date: z
		.string()
		.or(z.date())
		.transform((val) => new Date(val))
	})
})


export const collections = { blender, blog };
