import { createTheme, responsiveFontSizes } from '@mui/material/styles'

let theme = createTheme({
    typography: {
        fontFamily: 'var(--font-montserrat)',
        h1: {
            color: 'white',
            fontWeight: 900,
            fontSize: '4rem',
            '@media (max-width:600px)': {
                fontSize: '2.5rem',
            },
            marginBottom: '5px',
        },
        h5: {
            color: 'white',
            fontWeight: 400,
            fontSize: '1.6rem',
            '@media (max-width:600px)': {
                fontSize: '1rem',
            },
        },
    }
});

theme = responsiveFontSizes(theme);

export default theme;