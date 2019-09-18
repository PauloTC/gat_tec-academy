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
            secondary: {
                main: '#ff00a6'
            }
    },
    "@global":{
        "body" : {
            background: "#fff !important"
        }
    }
});

export default theme;