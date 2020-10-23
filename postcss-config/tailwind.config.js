module.exports = {
    purge: ['src/**/*.js'],
    theme: {
        extend: {},
        typography: {
            default: {
                css: {
                    pre: {
                        'font-size': '1rem',
                        'margin-bottom': '0px',
                        'margin-top': '0px'
                    }
                }
            }
        }
    },
    variants: {},
    plugins: [
        require('@tailwindcss/typography')
    ]
}