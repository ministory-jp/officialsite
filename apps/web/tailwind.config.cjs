/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{astro,html,js,md,mdx,ts,tsx}'],
    theme: {
        fontWeight: {
            // NOTE: Optimize for Noto Sans JP
            thin: '100',
            light: '300',
            normal: '400',
            medium: '500',
            bold: '700',
            extrabold: '900',
        },
        extend: {
            fontFamily: {
                sans: ['Noto Sans JP', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    light: '#FFCA6F',
                    DEFAULT: '#FFA509',
                    dark: '#E56923',
                },
            },
        },
    },
};
