import React from 'react'
import { Container, Col , Row } from 'react-bootstrap';


const Banner = (props) => {
    return(
        <div className="g_banner-container align-center ">
            <Container>
                <h2>{props.title}</h2>
                <h3>{props.subtitle}</h3>
            </Container>
        </div>
    )
}

export default Banner