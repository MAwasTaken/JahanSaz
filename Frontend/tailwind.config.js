/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				Vazir: 'Vazir',
        Lalezar: "Lalezar"
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1.25rem',
					md: '1rem'
				},
				screens: {
					'2xl': '1280px',
					xl: '1024px',
					lg: '1024px',
					md: '768px',
					sm: '640px'
				}
			}
		}
	},
	plugins: []
};
