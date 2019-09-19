import { createMuiTheme } from '@material-ui/core/styles';
import LatoWoff2 from '../assets/fonts/Lato-Regular.woff2';
import LatoBlackWoff2 from '../assets/fonts/Lato-Black.woff2';
import LatoLightWoff2 from '../assets/fonts/Lato-Light.woff2';

const lato = {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
      local('Lato'),
      local('Lato-Regular'),
      url(${LatoWoff2}) format('woff2')
    `,
    unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
  };

const latoblack = {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 900,
    src: `
      local('Lato'),
      local('Lato'),
      url(${LatoBlackWoff2}) format('woff2')
    `,
    unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
  };

const latolight = {
    fontFamily: 'Lato-light',
    fontStyle: 'light',
    fontDisplay: 'swap',
    fontWeight: 300,
    src: `
      local('Lato'),
      local('Lato'),
      url(${LatoLightWoff2}) format('woff2')
    `,
    unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
  };


const theme = createMuiTheme({
    breakpoints: {
        keys: {
            0: "xs",
            1: "sm",
            2: "md",
            3: "lg",
            4: "xl"
        },
        values: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200
        }
    },
    typography: {
        // useNextVariants: true,
        fontFamily: 'Lato, Arial !important',
        // h5 : {
        //     fontFamily: 'Lato !important',
        // }
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [lato]
            },
        },
    },
    palette: {
        primary: {
            light: '#63ccff',
            main: '#321063',
            dark: '#006db3',
            contrastText: '#fff',
        },
        secondary: {
            main: '#ff00a6'
        }
    }
});

export default theme;