/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	extend: {
		height: {
		  '50': '50%', // Define the '50' height as 50%
		  '20': '20px', // Define the '20' height as 20 pixels
		},
	  },
	container:{
		center:true,
		padding:"15px",
	},
	screens:{
		sm:"640px",
		md:"768px",
		lg:"960px",
		xl:"1200px"
	},
	fontFamily:{
		primary:"var(--font-jetbrainsMono)"
	},
  	extend: {
  		colors: {
  			primary:"#1c1c22",
			accent:{
				DEFAULT:"#00ff99",
				hover:"#00e187",
			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
