import { createTheme, responsiveFontSizes } from '@mui/material';

// eslint-disable-next-line import/no-mutable-exports
let theme = createTheme({
  palette: {
    primary: {
      main: '#15c39a',
      dark: '#11a683',
      disabled: '#f0f2fc',
      disabledText: '#c6cbde',
    },
    secondary: {
      main: '#4a6ee0',
    },
    text: {
      primary: '#0E101A',
      secondary: '#6D758D',
      shadeOfGrey: '#ebecef',
      shadeOfBlue: '#9fa6bf',
    },
    common: {
      blue: '#333954',
      white100: '#f9faff',
      blue900: '#3659b5',
    },
  },
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
    MuiTypography: {
      defaultProps: {
        fontFamily: '"Inter",  sans-serif',
      },

    },
  },
  typography: {

    h1: {
      fontSize: '3rem',
      fontWeight: 700,
    },

    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    body2: {
      fontSize: '1.14rem',
      fontWeight: 500,
    },

    p: {
      fontSize: '1rem',
      fontWeight: 400,
    },

    subtitle1: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },

    subtitle2: {
      fontSize: '0.75rem',
      fontWeight: 400,
    },
    span: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },

  },
});

theme = responsiveFontSizes(theme);

export default theme;
