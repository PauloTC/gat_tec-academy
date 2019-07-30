import PropTypes from "prop-types"
import React from "react"
import logo from "../../images/logo-tecacademy.png"


import styles from './header.module.scss'

import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "gatsby"

const Header = () => {

    return (
    <Container>
        <Navbar collapseOnSelect expand="lg" fixed="top" className={styles.header}>
            <Container>    
                <Navbar.Brand>
                    <Link>
                        <img  className={styles.header__img} id="logo" src={logo} width="170" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse  className={ styles.header__collapse  }  id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Link  to="/" className={`nav-link ${styles.header__link}`}  >Tec Academy</Link>
                        <Link  to="/courses/" className={`nav-link ${styles.header__link}`} >Cursos</Link>
                        <Link to="/points/" className={`nav-link ${styles.header__link}`} >Puntaje </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </Container>
    )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
