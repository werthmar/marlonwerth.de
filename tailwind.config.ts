import forms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';

export default {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                bg: 'var(--bg)',
                surface: 'var(--surface)',
                'surface-2': 'var(--surface-2)',
                ink: 'var(--ink)',
                muted: 'var(--muted)',
                line: 'var(--line)',
                ice: 'var(--ice)',
                'ice-ink': 'var(--ice-ink)',
                'on-ice': 'var(--on-ice)',
                // shadcn primitives
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                'muted-foreground': 'var(--muted-foreground)',
                border: 'var(--border)',
            },
            borderRadius: {
                panel: '1.25rem',
            },
            boxShadow: {
                float: 'var(--shadow-float)',
            },
            screens: {
                xs: '375px',
            },
        },
    },
    plugins: [forms({ strategy: 'class' })],
} satisfies Config;
