import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                font: '400 18px/24px Roboto, sans-serif',
            },
        },
    },
    breakpoints: {
        base: '0px',
        sm: '450px',
        '2sm': '600px',
        md: '680px',
        lg: '1080px',
        xl: '1200px',
        '2xl': '1500px',
    },
})
