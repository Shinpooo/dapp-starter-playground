/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			backgroundImage: {
				'livai': "url('../../public/images/livai.gif')",
			}
},
	},
	plugins: [],
}
