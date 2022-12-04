/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				beige: '#f4f1e9',
				black: '#191919',
				"purple-100": '#eadaff',
				"purple-200": "#e0c8ff",
				"purple-300": "#cBA3ff",
				"purple-400": "#b77fff",
				"purple-500": "#a25aff",
				dark_purple: '#9747ff',
				primary_orange: '#fa9764',
				orange: '#e56430',
				sky: '#c8dbff',
				leukocyte_white: '#f2f1ed',
				grey: '#d9d9d9'
			},
			fontSize: {
				'xxs': '10px'
			},
			fontFamily: {
				blackgold: ['BlackGold', 'sans-serif'],
				nunito: ['Nunito', 'sans-serif'],
				arima: ['Arima Madurai', 'cursive'],
				mitr: ['Mitr', 'sans-serif']
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
				iphoneMockup2: "url('/src/images/iphone-mockup-2.svg')",
				feeling: "url('/src/images/feeling.png')",

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
