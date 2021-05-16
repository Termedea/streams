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
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
