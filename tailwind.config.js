/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			backgroundImage: {
				'livai': "url('../../public/images/livai.gif')",
				'ape': "url('../../public/images/ape.gif')",
				'tsunade': "url('../../public/images/tsunade.gif')",
				'luffy': "url('../../public/images/luffy.gif')",
				'kira': "url('../../public/images/kira.gif')",
				'umaru': "url('../../public/images/umaru.gif')",
				'rengoku': "url('../../public/images/rengoku.gif')",
				'bojji': "url('../../public/images/bojji.gif')",
				'bojjifight': "url('../../public/images/bojjifight.gif')",
			}
},
	},
	plugins: [],
}
