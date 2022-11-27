/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				beige: '#f4f1e9',
				black: '#191919',
				purple: '#eadaff',
				orange: '#e56430'
			},
			fontFamily: {
				blackgold: ['BlackGold', 'sans-serif'],
				nunito: ['Nunito', 'sans-serif'],
				arima: ['Arima Madurai', 'cursive']
			},
			backgroundImage: {
				rainbow1: "url('/src/images/rainbow1.png')",
				rainbow2: "url('/src/images/rainbow2.png')",
				rainbow3: "url('/src/images/rainbow3.png')",
				rainbow4: "url('/src/images/rainbow4.png')",
				star: "url('/src/images/star.png')",
				arch: "url('/src/images/arch.png')",
				frame: "url('/src/images/frame.png')",
				iphoneMockup: "url('/src/images/iphone-mockup.svg')",
			},
			letterSpacing: {
				widest: '.2em'
			},
			backgroundPosition: {
				'top-center': 'top center',
				'bottom-center': 'bottom center',
			}
		},
	},
	plugins: [],
}
