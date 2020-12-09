module.exports = {
    purge: ['./src/**/*.js'],
    theme: {
        fontFamily: {
            'sans': ['"IBM Plex Sans"']
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
        transitionTimingFunction: ['active'],
        extend: {
            translate: ['group-hover']
        }
    },
    plugins: []
}