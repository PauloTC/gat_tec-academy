import React  from 'react';
import PropTypes from 'prop-types';
import { AppBar, Grid } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import { Link } from 'gatsby';
import styles from './header.module.scss';
import TemporaryDrawer from '../menu-responsive/MenuResponsive';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../images/logo-tecacademy.png';
import "../../assets/icons/style.css"
import { useStaticQuery, graphql } from 'gatsby';

// import theme from "../../theme/muiTheme"

const useStyles = makeStyles(theme => ({
	menu: {
        display: 'flex',
        // Styles will be applies to screen sizes from "sm" and up
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    menuresponsive: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    },
    link: {
        borderBottom: "5px solid transparent",
        borderRadius: "2px"
    },
    activelink: {
        borderColor: "#ff00a6"
    },
    container: {
        justifyContent: 'space-between'
    }
}));

function HideOnScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({ target: window ? window() : undefined });

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}

HideOnScroll.propTypes = {
	children: PropTypes.element.isRequired,
	/**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
	window: PropTypes.func
};

function Header(props) {
    const classes = useStyles();
    const Links = [
        {  name: 'Actividades', to: 'activities' , icon: 'icon-support' },
        // {  name: 'Talleres', to: 'courses', icon: 'icon-lectern'  },
        {  name: 'Puntajes', to: 'points' , icon: 'icon-star'  },
        {  name: 'Nosotros', to: 'community', icon: 'icon-group'  },
        {  name: 'Reglas', to: 'rules', icon: 'icon-education'  },
        {  name: 'Colección', to: 'collection', icon: 'icon-education'  },
        // {  name: 'blog', to: 'points', icon: 'icon-education'  }
    ]

    const data = useStaticQuery(graphql`
        query {
            allContentfulNavigation {
                edges {
                    node {
                        menu
                    }
                }
            }
        }
    `)

	return (
		<React.Fragment>
			<CssBaseline />
                <HideOnScroll {...props}>
                    <AppBar color="primary" elevation={0} className={ classes.header  }  >
                        <Toolbar  className={classes.toolbar}  >
                            <Container maxWidth="xl">
                                <Grid container >
                                    <Grid className={classes.container}   container wrap="nowrap" justify="space-between" item xs={12} md={12}>
                                        <Link className={styles.header__img}>
                                            <img alt="logo" id="logo" src={logo} width="120" />
                                        </Link>
                                        <Box className={classes.menu}>
                                            <Typography className={classes.menu} variant="body2">
                                                {data.allContentfulNavigation.edges[0].node.menu.map((item, index) => {
                                                    if( item === 'Actividades' ){
                                                        return (
                                                                <Link
                                                                    key={index}
                                                                    activeClassName={ classes.activelink }
                                                                    to="activities"
                                                                    className={`nav-link ${styles.header__link}  ${classes.link} `}
                                                                >
                                                                    <i className={`${styles.header__icon} icon-support`} /> Actividades
                                                            </Link>

                                                        )
                                                    }else if( item === 'Nosotros' ){
                                                        return (
                                                                <Link
                                                                    key={index}
                                                                    activeClassName={ classes.activelink }
                                                                    to="community"
                                                                    className={`nav-link ${styles.header__link}  ${classes.link} `}
                                                                >
                                                                    <i className={`${styles.header__icon} icon-group`} /> Nosotros
                                                            </Link>

                                                        )
                                                    }else if( item === 'Puntajes' ){
                                                        return (
                                                                <Link
                                                                    key={index}
                                                                    activeClassName={ classes.activelink }
                                                                    to="points"
                                                                    className={`nav-link ${styles.header__link}  ${classes.link} `}
                                                                >
                                                                    <i className={`${styles.header__icon} icon-star`} /> Puntajes
                                                            </Link>

                                                        )
                                                    } else if( item === 'Reglas' ){
                                                        return (
                                                                <Link
                                                                    key={index}
                                                                    activeClassName={ classes.activelink }
                                                                    to="rules"
                                                                    className={`nav-link ${styles.header__link}  ${classes.link} `}
                                                                >
                                                                    <i className={`${styles.header__icon} icon-education`} /> Reglas
                                                            </Link>

                                                        )
                                                    } else if( item === 'Colección' ){
                                                        return (
                                                                <Link
                                                                    key={index}
                                                                    activeClassName={ classes.activelink }
                                                                    to="collection"
                                                                    className={`nav-link ${styles.header__link}  ${classes.link} `}
                                                                >
                                                                    <i className={`${styles.header__icon} icon-lectern`} /> Colección
                                                            </Link>

                                                        )
                                                    }
                                                    // return (
                                                    //     <li> { item } </li>
                                                        // <Link
                                                        //     key={index}
                                                        //     activeClassName={ classes.activelink }
                                                        //     to={link.to}
                                                        //     className={`nav-link ${styles.header__link}  ${classes.link} `}
                                                        // >
                                                        //     <i className={`${styles.header__icon} ${link.icon}`} />
                                                        //     {link.name}
                                                        // </Link>
                                                    // );
                                                })}
                                            </Typography>
                                        </Box>
                                        <TemporaryDrawer  className={ classes.menuresponsive } ></TemporaryDrawer>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Toolbar>
                    </AppBar>
                </HideOnScroll>
			<Toolbar />
		</React.Fragment>
	);
}

  export default Header