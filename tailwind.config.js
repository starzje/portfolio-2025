/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		fontFamily: {
  			inter: [
  				'var(--font-inter)',
  				'sans-serif'
  			],
  			'uncut-sans': [
  				'var(--font-uncut-sans)',
  				'sans-serif'
  			]
  		},
  		fontSize: {
  			xs: [
  				'0.75rem',
  				{
  					lineHeight: '1.5'
  				}
  			],
  			sm: [
  				'0.875rem',
  				{
  					lineHeight: '1.5715'
  				}
  			],
  			base: [
  				'1rem',
  				{
  					lineHeight: '1.5',
  					letterSpacing: '-0.01em'
  				}
  			],
  			lg: [
  				'1.125rem',
  				{
  					lineHeight: '1.5',
  					letterSpacing: '-0.01em'
  				}
  			],
  			xl: [
  				'1.25rem',
  				{
  					lineHeight: '1.5',
  					letterSpacing: '-0.01em'
  				}
  			],
  			'2xl': [
  				'1.5rem',
  				{
  					lineHeight: '1.415',
  					letterSpacing: '-0.01em'
  				}
  			],
  			'3xl': [
  				'1.875rem',
  				{
  					lineHeight: '1.333',
  					letterSpacing: '-0.01em'
  				}
  			],
  			'4xl': [
  				'2.25rem',
  				{
  					lineHeight: '1.277',
  					letterSpacing: '-0.01em'
  				}
  			],
  			'5xl': [
  				'3rem',
  				{
  					lineHeight: '1.2',
  					letterSpacing: '-0.01em'
  				}
  			],
  			'6xl': [
  				'3.75rem',
  				{
  					lineHeight: '1.166',
  					letterSpacing: '-0.01em'
  				}
  			],
  			'7xl': [
  				'5rem',
  				{
  					lineHeight: '1',
  					letterSpacing: '-0.01em'
  				}
  			]
  		},
  		letterSpacing: {
  			tighter: '-0.02em',
  			tight: '-0.01em',
  			normal: '0',
  			wide: '0.01em',
  			wider: '0.02em',
  			widest: '0.4em'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			'color-1': 'hsl(var(--color-1))',
  			'color-2': 'hsl(var(--color-2))',
  			'color-3': 'hsl(var(--color-3))',
  			'color-4': 'hsl(var(--color-4))',
  			'color-5': 'hsl(var(--color-5))'
  		},
  		keyframes: {
  			colorShift: {
  				'0%': {
  					fill: 'rgba(147, 51, 234, 0.5)'
  				},
  				'100%': {
  					fill: 'rgba(191, 219, 254, 0.2)'
  				}
  			},
  			'aurora-border': {
  				'0%, 100%': {
  					borderRadius: '37% 29% 27% 27% / 28% 25% 41% 37%'
  				},
  				'25%': {
  					borderRadius: '47% 29% 39% 49% / 61% 19% 66% 26%'
  				},
  				'50%': {
  					borderRadius: '57% 23% 47% 72% / 63% 17% 66% 33%'
  				},
  				'75%': {
  					borderRadius: '28% 49% 29% 100% / 93% 20% 64% 25%'
  				}
  			},
  			'aurora-1': {
  				'0%, 100%': {
  					top: '0',
  					right: '0'
  				},
  				'50%': {
  					top: '50%',
  					right: '25%'
  				},
  				'75%': {
  					top: '25%',
  					right: '50%'
  				}
  			},
  			'aurora-2': {
  				'0%, 100%': {
  					top: '0',
  					left: '0'
  				},
  				'60%': {
  					top: '75%',
  					left: '25%'
  				},
  				'85%': {
  					top: '50%',
  					left: '50%'
  				}
  			},
  			'aurora-3': {
  				'0%, 100%': {
  					bottom: '0',
  					left: '0'
  				},
  				'40%': {
  					bottom: '50%',
  					left: '25%'
  				},
  				'65%': {
  					bottom: '25%',
  					left: '50%'
  				}
  			},
  			'aurora-4': {
  				'0%, 100%': {
  					bottom: '0',
  					right: '0'
  				},
  				'50%': {
  					bottom: '25%',
  					right: '40%'
  				},
  				'90%': {
  					bottom: '50%',
  					right: '25%'
  				}
  			},
  			rainbow: {
  				'0%': {
  					'background-position': '0%'
  				},
  				'100%': {
  					'background-position': '200%'
  				}
  			},
  			'shimmer-slide': {
  				to: {
  					transform: 'translate(calc(100cqw - 100%), 0)'
  				}
  			},
  			'spin-around': {
  				'0%': {
  					transform: 'translateZ(0) rotate(0)'
  				},
  				'15%, 35%': {
  					transform: 'translateZ(0) rotate(90deg)'
  				},
  				'65%, 85%': {
  					transform: 'translateZ(0) rotate(270deg)'
  				},
  				'100%': {
  					transform: 'translateZ(0) rotate(360deg)'
  				}
  			},
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-vertical': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			},
  			'background-position-spin': {
  				'0%': {
  					backgroundPosition: 'top center'
  				},
  				'100%': {
  					backgroundPosition: 'bottom center'
  				}
  			},
  			meteor: {
  				'0%': {
  					transform: 'rotate(215deg) translateX(0)',
  					opacity: '1'
  				},
  				'70%': {
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'rotate(215deg) translateX(-500px)',
  					opacity: '0'
  				}
  			}
  		},
  		animation: {
  			colorShift: 'colorShift 2s ease-in-out infinite alternate',
  			rainbow: 'rainbow var(--speed, 2s) infinite linear',
  			'shimmer-slide': 'shimmer-slide var(--speed) ease-in-out infinite alternate',
  			'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
  			marquee: 'marquee var(--duration) infinite linear',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
  			'background-position-spin': 'background-position-spin 3000ms infinite alternate',
  			meteor: 'meteor 5s linear infinite'
  		}
  	}
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-animate")],
};
