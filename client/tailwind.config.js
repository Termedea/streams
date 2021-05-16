module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                main: {
                    lighter: '#DBD9DB',
                    light: '#918A91',
                    DEFAULT: '#524854',
                    dark: '#423A43',
                    darker: '#2A252B'
                }
            }
        },
        fontFamily: {
            sans: ['Lato', 'ui-sans-serif', 'system-ui'],
            serif: ['ui-serif', 'Georgia'],
            mono: ['ui-monospace', 'SFMono-Regular'],
            display: ['Expletus Sans', 'ui-sans-serif'],
            body: ['Lato', 'ui-sans-serif', 'system-ui']
        }
    },
    variants: {
        extend: { backgroundOpacity: ['hover'] }
    },
    plugins: []
};
