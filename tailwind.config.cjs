/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx}'],
	theme: (defaultTheme) => ({
		extend: {
			fontFamily: {
				sans: [
					'"IBM Plex Sans"',
					...defaultTheme.fontFamily.sans
				]
			}
		},
	}),
	plugins: [],
}