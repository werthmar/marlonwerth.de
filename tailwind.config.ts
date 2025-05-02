import type { Config } from 'tailwindcss';

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                navbar: 'var(--navbar)',
                accent: 'var(--accent)',
                emphasis: 'var(--emphasis)',
                accentColor: 'var(--accentColor)',
            },
            screens: {
                xs: '375px', // Define the xs breakpoint
            },
            boxShadow: {
                custom: '2px 2px 10px rgba(0, 0, 0, 0.25)', // horizontal, vertical, blur, color
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
} satisfies Config;
