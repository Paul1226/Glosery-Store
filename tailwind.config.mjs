/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				'poppins':'Poppins, sans-serif',
				'montserrat':'Montserrat Variable, sans-serif',
			},
			colors:{
				salmon:'#F38160',
				mustard:'#F0B70D',
				masala:'#403C39',
				mountain:'#403C39',
			}
		},
	},
	plugins: [],
}
