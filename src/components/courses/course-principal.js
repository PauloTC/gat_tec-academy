import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap';
import  courseimage  from '../../images/curso-soft-2.png'
import  profileimage  from '../../images/roxana-alvarado.jpg'


const CoursePrincipal = () => (
    <div id="curso-activo" className="container-fluid page-section">
        <Container>
            <div className="row">
                <div id="grupales" className="col-xs-12">
                    <div className="box-puntos">
                        <div className="container">
                            <h4 className="g-subtitle container-bottom mb-4">Liderazgo Digital</h4>
                            <div className="row ">
                                <div className="col-xs-12  col-lg-4 col-xl-3 ">
                                    <div className="img-premios text-center container-bottom">
                                        <img
                                            height="120"
                                            src={courseimage}
                                            alt=""
                                        />
                                    </div>
                                </div>

                                <div className="  mt-2  mt-lg-0  col-xs-12  col-lg-8 col-xl-9">
                                    <div className="row  mb-4  mb-lg-0">
                                        <div className="col-xs-12 col-md-6">
                                            <h5 className="g-subtitle">Descripción</h5>
                                            <p className="font-size-14">
                                                Estrategia para destacarse en la era digital donde las organizaciones
                                                exponenciales generan ventajas diferenciales y se necesitan de líderes para romper
                                                continuamente el paradigma competitivo.</p>
                                        </div>

                                        <div className="col-xs-12 col-md-6">
                                            <h5 className="g-subtitle">Expositor</h5>
                                            <div className="image_featured_text round_img container-bottom">
                                                <img
                                                    width="50"
                                                    height="48"
                                                    src={profileimage}
                                                    className="attachment-full size-full"
                                                    alt=""
                                                />
                                                <div className="text">
                                                    <h6 className="text-pink g-subtitle ">Fernando Mendoza</h6>
                                                    <h6 className="font-weight-normal" >Jefe de Tecnologia Digital</h6>
                                                    {/* <h5><strong>Jefe de Analytics y Big Data</strong></h5> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h5 className="g-subtitle">Fecha y hora </h5>
                                    <div id="nav-fecha-hora" className="div-bottom">
                                        <ul id="navlist">
                                            <li>* Martes 23 de Junio 10:30 pm a 01:00 pm</li>
                                            <li>* Jueves 25 de Junio 03:00 pm a 05:30 pm</li>
                                        </ul>
                                    </div>

                                    <ul
                                        className="nav nav-pills mb-4  mb-lg-0 "
                                        id="pills-tab"
                                        role="tablist"
                                    >
                                        <li className="nav-item expand-sm">
                                            <a
                                                className="nav-link btn-external active"
                                                target="_blank"
                                                href="https://miscursosucb.belcorp.biz/course/view.php?id=2159"
                                            >Inscríbete ahora</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="position-relative d-flex  justify-content-center  justify-content-md-end  mt-2 ">
                                <div id="link-malla">
                                    <span>
                                        <a href="#tec-academy" className="link_purple">
                                            Ver malla de cursos
                    </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
)

export default CoursePrincipal