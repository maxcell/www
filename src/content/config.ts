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

const game = defineCollection({
	schema: ({image}) => z.object({
		title: z.string(),
		image: image().refine((img) => true, {
			message: "Cover image must be at least 1080 pixels wide!",
		}),
		imageAlt: z.string(),
		currentlyPlaying: z.boolean(),
		excerpt: z.string(),
		link: z.string()
	}),
})


export const collections = { blender, blog, game };
