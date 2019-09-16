import PropTypes from "prop-types"
import React, { Fragment } from "react"
import logo from "../../images/logo-tecacademy.png"
import "../../assets/icons/style.css"
import AppBar from '@material-ui/core/AppBar';
import styles from './header.module.scss'
import { Link } from "gatsby"
import TemporaryDrawer from '../menu-responsive/MenuResponsive'
// import PropTypes from 'prop-types';
import { 
        Grid, 
        Typography,
        makeStyles,
        useScrollTrigger,
        Toolbar,
        CssBaseline,
        Container,
        Box } from '@material-ui/core';


const useStyles = makeStyles( theme =>  ({
        menu: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
            },
        },
        box: {
            display: 'flex'
        }
 }));


 function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }


const Header = (props) => {
	const classes = useStyles();
    const Links = [
        {  name: 'Actividades', to: '/actividades' , icon: 'icon-support' },
        {  name: 'Talleres', to: 'courses', icon: 'icon-lectern'  },
        {  name: 'Puntajes', to: 'points' , icon: 'icon-star'  },
        {  name: '¿Porque TecAcademy?', to: 'comunity', icon: 'icon-group'  },
        {  name: 'Blog', to: 'points', icon: 'icon-education'  }
    ]

    return (
        <Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar elevation="0" position="static">
                    <Toolbar>

                        <Container maxWidth="lg" >
                            <Grid  container  justify="space-between">
                                <Grid container justify="space-between"  item  xs={11} md={12} >
                                    <Link className={styles.header__img} >
                                        <img alt="logo"  id="logo" src={logo} width="120" />
                                    </Link>
                                    <Box  display={{ xs: 'none', md: 'block', lg: 'block' }} className={classes.box} >
                                        <Typography  className={classes.menu}  variant="body2">
                                            {
                                                Links.map(  (link , index )  => {
                                                    return (
                                                        <Link  
                                                            key={ index } 
                                                            activeClassName="active" 
                                                            to={ link.to }
                                                            className={`nav-link ${styles.header__link}`}  >
                                                            <i className={`${ styles.header__icon } ${ link.icon }`} ></i>
                                                            { link.name  }</Link>
                                                    )
                                                })
                                            }
                                        </Typography>
                                    </Box>
                                </Grid>
                                {/* <Grid item xs={2} >
                                    <SimpleMenu></SimpleMenu>
                                </Grid> */}

                                <Grid height="100%" item  xs={1} >
                                    <Box height="100%" display={{ xs: 'block', md: 'none', lg: 'none' }} >
                                        <TemporaryDrawer></TemporaryDrawer>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Container>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </Fragment>
    )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
