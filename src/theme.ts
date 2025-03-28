import { createTheme, responsiveFontSizes } from '@mui/material/styles'

let theme = createTheme({
    typography: {
        fontFamily: 'var(--font-montserrat)',
        h1: {
            color: 'white',
            fontWeight: 900,
            fontSize: '4rem',
            '@media (max-width:700px)': {
                fontSize: '2rem',
            },
            marginBottom: '5px',
        },
        h2: {
            color: 'white',
            fontWeight: 800,
            fontSize: '2.5rem',
            '@media (max-width:700px)': {
                fontSize: '1.5rem',
            },
        },
        h3: {
            color: 'white',
            fontWeight: 700,
            fontSize: '20px',
            textAlign: 'center',
            px: 0,
            mx: 0,
        },
        h5: {
            color: 'white',
            fontWeight: 400,
            fontSize: '1.5rem',
            '@media (max-width:600px)': {
                fontSize: '1rem',
            },
        },
        body1: {
            color: 'white',
            textAlign: 'left'
        }
    }
});

theme = responsiveFontSizes(theme);

export default theme;