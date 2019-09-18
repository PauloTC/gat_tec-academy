import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
            primary: {
            light: '#63ccff',
            main: '#321063',
            dark: '#006db3',
            contrastText: '#fff',
        },
    },
    "@global":{
        "body" : {
            background: "#fff !important"
        }
    }
});

export default theme;