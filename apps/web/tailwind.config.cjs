/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{astro,html,js,md,mdx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Noto Sans JP', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'primary': {
                    light: '#FFCA6F',
                    DEFAULT: '#FFA509',
                    dark: '#E56923',
                }
            }
        }
    }
};