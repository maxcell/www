import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		date: z
		.string()
		.or(z.date())
		.transform((val) => new Date(val)),
		description: z.string()
	}),
});

const blender = defineCollection({
	schema: z.object({
		title: z.string(),
		date: z
		.string()
		.or(z.date())
		.transform((val) => new Date(val)),
		description: z.string()
	})
})


export const collections = { blender, blog };
