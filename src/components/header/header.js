import React, { Fragment } from 'react';
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
import { makeStyles } from '@material-ui/styles';
import { withStyles } from '@material-ui/core/styles';
import logo from '../../images/logo-tecacademy.png';
import "../../assets/icons/style.css"
import { inherits } from 'util';

const useStyles = theme => ({
	menu: {
        display: 'flex',
        // Styles will be applies to screen sizes from "sm" and up
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    container: {
        "justify-content": 'space-between',
        [theme.breakpoints.down('sm')]: {
            "justify-content": 'center'
        }
    },
    // toolbar: {
    //     height: 43
    // }
});

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
    const { classes } = props;
    const Links = [
        {  name: 'Actividades', to: 'actividades' , icon: 'icon-support' },
        {  name: 'Talleres', to: 'courses', icon: 'icon-lectern'  },
        {  name: 'Puntajes', to: 'points' , icon: 'icon-star'  },
        {  name: '¿Porque TecAcademy?', to: 'comunity', icon: 'icon-group'  },
        {  name: 'Blog', to: 'points', icon: 'icon-education'  }
    ]
	return (
		<React.Fragment>
			<CssBaseline />
			<HideOnScroll {...props}>
				<AppBar>
					<Toolbar  className={classes.toolbar}  >
						<Container maxWidth="lg">
							<Grid container >
								<Grid className={classes.container}   container justify="space-between" item xs={12} md={12}>
									<Link className={styles.header__img}>
										<img alt="logo" id="logo" src={logo} width="120" />
									</Link>
									<Box className={classes.menu}>
										<Typography className={classes.menu} variant="body2">
											{Links.map((link, index) => {
												return (
													<Link
														key={index}
														activeClassName="active"
														to={link.to}
														className={`nav-link ${styles.header__link}`}
													>
														<i className={`${styles.header__icon} ${link.icon}`} />
														{link.name}
													</Link>
												);
											})}
										</Typography>
									</Box>
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

Header.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(useStyles)(Header);