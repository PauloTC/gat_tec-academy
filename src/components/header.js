import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo-tecacademy.png"
import  "../styles/header.css"
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = ({ siteTitle }) => (
<Container>
    <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark"  className="header" >
        <Navbar.Brand href="#home">
            <img   id="logo" src={logo} height="60" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
                <Nav.Link  className="nav-link" href="#deets"> Tec Academy </Nav.Link>
                <Nav.Link className="nav-link" href="#memes"> Premios </Nav.Link>
                <Nav.Link className="nav-link" href="puntos"> Puntos </Nav.Link>
                <Nav.Link className="nav-link" href="#pregutnas"> Preguntas </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    {/* <div className="position-relative index-header-body">
        <div id="menu-container" className="container-fluid fixed-top navbar-fixed-top">
            <div className="container">
                <nav id="nav-menu" className="navbar navbar-expand-lg navbar-dark">
                    <a className="navbar-brand" href="/">
                        <img id="logo" src={logo} height="60" className="d-inline-block align-top d-none logo" alt="" />
                        <img id="logo-nega" src={logonega} height="60" className="d-inline-block align-top d-none" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav text-navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#tec-academy">Tec Academy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#premios">Premios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#ganar-puntos">Puntos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/inscripcion">Cursos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/puntaje">Puntaje</a>
                            </li>
                            <Button variant="primary">Primary</Button>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div> */}
</Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
