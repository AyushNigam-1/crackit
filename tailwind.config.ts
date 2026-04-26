import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#eef4ff',
                    100: '#dae6ff',
                    500: '#4f6bff',
                    600: '#3b54e6',
                    700: '#2e42b8',
                },
            },
            boxShadow: {
                soft: '0 4px 20px rgba(0,0,0,0.06)',
            },
        },
    },
    plugins: [],
};
export default config;
