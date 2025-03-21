import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ['class'],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		colors: {
		  gold: '#C6A567',
		  background: '#000000',
		  foreground: '#FFFFFF',
		  border: '#333333', // Added border color
		},
		backgroundImage: {
		  'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
		  'gradient-conic':
			'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
		},
	  },
	},
	plugins: [require('tailwindcss-animate')],
  };
  export default config;
