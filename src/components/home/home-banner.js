import React from 'react'
import building from '../../images/BUILDING.svg'
import  "../../styles/index.css"
import  "../../styles/home.scss"
import { Container } from 'react-bootstrap';

const HomeBanner = () => {
    return(
        <div  className="home_banner-container  d-flex align-items-lg-center" >
            <Container className="position-relative d-flex">
                <p className="text-white home_banner-title ">
                    <strong> Ya se despertó <br /> la señorita <br /></strong>
                    <span className="text-yellow home_banner-subtitle">
                        <strong>Sheyla ?</strong>
                    </span>
                </p>
                <img className="position-absolute  home_banner-img" src={building}   />    
            </Container>
        </div>
    )
}

export default HomeBanner   