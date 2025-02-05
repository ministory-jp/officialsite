import prettierConfig from '@ministory/prettier-config' with { type: 'json' };

/**
 * @type {import("prettier").Config}
 */
const config = {
    ...prettierConfig,
    plugins: ['prettier-plugin-tailwindcss'],
    tailwindStylesheet: './src/styles/global.css',
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
                // NOTE: tailwindcss plugin MUST come last
                plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
            },
        },
    ],
};

export default config;
