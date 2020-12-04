module.exports = {
    purge: ['src/**/*.js'],
    theme: {
        fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            default: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
        },
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
    variants: {
        backgroundColor: ['responsive', 'hover', 'focus', 'active'],
        borderColor: ['responsive', 'hover', 'focus', 'active'],
        margin: ['first', 'last'],
        transitionTimingFunction: ['active']
    },
    plugins: []
}