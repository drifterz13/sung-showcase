/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				beige: '#f4f1e9',
				black: '#191919'
			},
			fontFamily: {
				blackgold: ['BlackGold', 'sans-serif'],
				jamjuree: ['Bai Jamjuree', 'sans-serif']
			},
			backgroundImage: {
				rainbow1: "url('/src/images/rainbow1.png')",
				star: "url('/src/images/star.png')"
			},
			letterSpacing: {
				widest: '.2em'
			},
			backgroundPosition: {
				'top-center': 'top center',
			}
		},
	},
	plugins: [],
}
