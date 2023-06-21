/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: ["DM Sans", "sans-serif"],
		},
		fontWeight: {
			regular: "400",
			medium: "500",
			bold: "700",
		},
		fontSize: {
			"2xlg": "3.75rem", // h1, 60px
			xlg: "2.375rem", // h2, 38px
			lg: "1.5rem", // h3 and used for large text, 24px
			h4: "1.375rem", // h4, 22px
			md: "1.125rem", // Medium text and h5, 18px
			base: "1rem", // Default text and h6, 16px
			sm: "0.875rem", // Small text, 14px
			xs: "0.75rem", // Extra small, 10px
		},
		extend: {},
	},
	plugins: [],
};
