/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				medical: {
					blue: '#0F6FFF',
					teal: '#00B8A9',
					dark: '#1A1A1A',
					light: '#F8FAFC',
					slate: '#64748B',
					accent: '#E0F2FE'
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				heading: ['Poppins', 'sans-serif'],
			},
			maxWidth: {
				'layout': '1400px'
			}
		},
	},
	plugins: [],
}
