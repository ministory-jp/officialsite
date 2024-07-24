import astro from 'eslint-plugin-astro';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tailwind from 'eslint-plugin-tailwindcss';
import ministoryConf from '@ministory/eslint-config';

export default [
    jsxA11y.flatConfigs.recommended,
    ...astro.configs.recommended,
    ...tailwind.configs['flat/recommended'],
    {
        plugins: {
            ministoryConf,
        },
    },
    {
        ignores: ['**/env.d.ts'],
        rules: {
            'no-unused-vars': 'warn',
            'no-undef': 'warn',
        },
        settings: {
            tailwindcss: {
                config: 'tailwind.config.cjs',
            },
        },
    },
    {
        files: ['**/*.cjs'],
        rules: {
            '@typescript-eslint/no-var-requires': 'off',
        },
    },
];
