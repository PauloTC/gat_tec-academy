import React from 'react'
import  bigimage from '../../images/TecAcademy-01.png'
import smallimage from '../../images/TecAcademy-02.png'
import '../../styles/base.css'
import { Container, Row, Col } from 'react-bootstrap'
const HomeAcademy = () => {
    return (
        <div>
            {/* <div className="w-100  mg-sm-top-40 mg-sm-top-40 mg-md-top-80 mg-xl-top-110"></div> */}
            <Container>
                <div id="tec-academy" className="page-section">
                    <Row>
                        <Col sm={12} md={6}>
                            <h2 className="text-purple-h2 g-subtitle mb-30">Tec Academy</h2>
                            <p className="font-size-14">Nuestro objetivo es enriquecer la visión y conocimiento de nuestros equipos en las 5 direcciones de la VP de tecnología, a través de un espacio integrador que nos permita desarrollar nuestras habilidades Soft y Hard.</p>
                            <p className="font-size-14 d-sm-none d-md-block capa_a_ocultar">Este espacio nos pemitirá integrar a la VP ya que compartirémos conocimiento entre direcciones mediante cursos/talleres mensuales que serán dicatados de nosotros para nosotros, así complementarémos nuestros conocimientos logrando perfiles versátiles y empoderados.</p>
                            <p className="text-center text-pink font-size-24 mg-top-50"><strong>“De Nosotros para Nosotros”</strong></p>
                        </Col>
                        <Col sm={12} md={6} id="image-container" className="position-relative" >
                            <img id="img-01" alt="img-01" src={bigimage} className="position-absolute" />
                            <img id="img-02" alt="img-02" src={smallimage} className="position-absolute" />
                        </Col>
                    </Row>
                    {/* <div className="row">
                        <div className="col-sm-12 col-md-6">
                        </div>
                        <div id="image-container" className="col-sm-12 col-md-6 position-relative">
                        </div>
                    </div> */}
                </div>
            </Container>
        </div>
    )
}

export default HomeAcademy