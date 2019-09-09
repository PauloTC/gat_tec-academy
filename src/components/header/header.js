import PropTypes from "prop-types"
import React from "react"
import logo from "../../images/logo-tecacademy.png"
import AppBar from '@material-ui/core/AppBar';

import {Helmet} from "react-helmet";
import styles from './header.module.scss'
import Container from '@material-ui/core/Container';
import { Link } from "gatsby"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Header = () => {

    return (
        <AppBar elevation="0" position="static">
            <Container>
                <Grid  container >
                    <Link>
                        <img  className={styles.header__img} id="logo" src={logo} width="120" />
                    </Link>
                    <Link  activeClassName="active" to="/" className={`nav-link ${styles.header__link}`}  >Actividades</Link>
                    <Link  activeClassName="active" to="/courses/" className={`nav-link ${styles.header__link}`} >Talleres</Link>
                    <Link  activeClassName="active" to="/points/" className={`nav-link ${styles.header__link}`} >Puntajes</Link>
                    <Link  activeClassName="active" to="/points/" className={`nav-link ${styles.header__link}`} >Comunidad</Link>
                    <Link  activeClassName="active" to="/points/" className={`nav-link ${styles.header__link}`} >Blog</Link>
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
