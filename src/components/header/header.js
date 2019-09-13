import PropTypes from "prop-types"
import React from "react"
import logo from "../../images/logo-tecacademy.png"
import "../../assets/icons/style.css"
import AppBar from '@material-ui/core/AppBar';

import {Helmet} from "react-helmet";
import styles from './header.module.scss'
import Container from '@material-ui/core/Container';
import { Link } from "gatsby"
import SimpleMenu from '../menudrop'
import TemporaryDrawer from '../menu-responsive/MenuResponsive'
import { 
        Grid, 
        Typography,
        makeStyles,
        Box } from '@material-ui/core';


const useStyles = makeStyles( theme =>  ({
        menu: {
            display: 'flex !important',
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        },
        box: {
            display: 'flex'
        }
 }));



const Header = () => {
	const classes = useStyles();
    const Links = [
        {  name: 'Actividades', to: '/actividades' , icon: 'icon-support' },
        {  name: 'Talleres', to: 'courses', icon: 'icon-lectern'  },
        {  name: 'Puntajes', to: 'points' , icon: 'icon-star'  },
        {  name: 'Comunidad', to: 'points', icon: 'icon-group'  },
        {  name: 'Blog', to: 'points', icon: 'icon-education'  }
    ]

    return (
        <AppBar elevation="0" position="static">
            <Container maxWidth="lg" >
                <Grid  container  justify="space-between">
                    <Grid container justify="space-between"  item  xs={11} md={12} >
                        <Link className={styles.header__img} >
                            <img id="logo" src={logo} width="120" />
                        </Link>
                        <Box  className={classes.box} >
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
        </AppBar>
    )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
