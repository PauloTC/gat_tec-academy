import React from "react"
import rocket from "../../images/rocket.svg"
import groupprize from "../../images/premiogrupal.svg"
import groupimg from "../../images/premio-grupal.jpg"
import singleprize from "../../images/premioindividual.svg"
import prizes from "../../images/ico-premios.svg"

import { Tab, Tabs, Container, Row , Col } from 'react-bootstrap';

const HomeAwards = () => {
    return (

        <div id="premios" className="home_awards-container">
            <Container>
                <Row>
                   <Col  xs={12} >
                        <img  className="trophy-img"  alt="trofeo" src={prizes} /> 
                        <h2 className="text-purple g-subtitle "> Premios </h2>
                        {/* <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-personal" role="tab" aria-controls="pills-home" aria-selected="true"> Individual </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    id="pills-profile-tab"
                                    data-toggle="pill"
                                    href="#pills-grupal"
                                    role="tab"
                                    aria-controls="pills-profile"
                                    aria-selected="false"
                                    style={{ paddingLeft: "30px", paddingRight: "30px" }}
                                >
                                    Grupal
                </a>
                            </li>
                        </ul> */}
                   </Col>
                </Row>
            </Container>
            <Container>
                <Tabs variant='pills'  defaultActiveKey="home" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Individual">
                        <div id="primer-puesto" className="home_awards-container position-relative">
                            <Row>
                                {/* <div className="wrapper">
                                    <div className="confetti-149"></div>
                                    <div className="confetti-148"></div>
                                    <div className="confetti-147"></div>
                                    <div className="confetti-146"></div>
                                    <div className="confetti-145"></div>
                                    <div className="confetti-144"></div>
                                    <div className="confetti-143"></div>
                                    <div className="confetti-142"></div>
                                    <div className="confetti-141"></div>
                                    <div className="confetti-140"></div>
                                    <div className="confetti-139"></div>
                                    <div className="confetti-138"></div>
                                    <div className="confetti-137"></div>
                                    <div className="confetti-136"></div>
                                    <div className="confetti-135"></div>
                                    <div className="confetti-134"></div>
                                    <div className="confetti-133"></div>
                                    <div className="confetti-132"></div>
                                    <div className="confetti-131"></div>
                                    <div className="confetti-130"></div>
                                    <div className="confetti-129"></div>
                                    <div className="confetti-128"></div>
                                    <div className="confetti-127"></div>
                                    <div className="confetti-126"></div>
                                    <div className="confetti-125"></div>
                                    <div className="confetti-124"></div>
                                    <div className="confetti-123"></div>
                                    <div className="confetti-122"></div>
                                    <div className="confetti-121"></div>
                                    <div className="confetti-120"></div>
                                    <div className="confetti-119"></div>
                                    <div className="confetti-118"></div>
                                    <div className="confetti-117"></div>
                                    <div className="confetti-116"></div>
                                    <div className="confetti-115"></div>
                                    <div className="confetti-114"></div>
                                    <div className="confetti-113"></div>
                                    <div className="confetti-112"></div>
                                    <div className="confetti-111"></div>
                                    <div className="confetti-110"></div>
                                    <div className="confetti-109"></div>
                                    <div className="confetti-108"></div>
                                    <div className="confetti-107"></div>
                                    <div className="confetti-106"></div>
                                    <div className="confetti-105"></div>
                                    <div className="confetti-104"></div>
                                    <div className="confetti-103"></div>
                                    <div className="confetti-102"></div>
                                    <div className="confetti-101"></div>
                                    <div className="confetti-100"></div>
                                    <div className="confetti-99"></div>
                                    <div className="confetti-98"></div>
                                    <div className="confetti-97"></div>
                                    <div className="confetti-96"></div>
                                    <div className="confetti-95"></div>
                                    <div className="confetti-94"></div>
                                    <div className="confetti-93"></div>
                                    <div className="confetti-92"></div>
                                    <div className="confetti-91"></div>
                                    <div className="confetti-90"></div>
                                    <div className="confetti-89"></div>
                                    <div className="confetti-88"></div>
                                    <div className="confetti-87"></div>
                                    <div className="confetti-86"></div>
                                    <div className="confetti-85"></div>
                                    <div className="confetti-84"></div>
                                    <div className="confetti-83"></div>
                                    <div className="confetti-82"></div>
                                    <div className="confetti-81"></div>
                                    <div className="confetti-80"></div>
                                    <div className="confetti-79"></div>
                                    <div className="confetti-78"></div>
                                    <div className="confetti-77"></div>
                                    <div className="confetti-76"></div>
                                    <div className="confetti-75"></div>
                                    <div className="confetti-74"></div>
                                    <div className="confetti-73"></div>
                                    <div className="confetti-72"></div>
                                    <div className="confetti-71"></div>
                                    <div className="confetti-70"></div>
                                    <div className="confetti-69"></div>
                                    <div className="confetti-68"></div>
                                    <div className="confetti-67"></div>
                                    <div className="confetti-66"></div>
                                    <div className="confetti-65"></div>
                                    <div className="confetti-64"></div>
                                    <div className="confetti-63"></div>
                                    <div className="confetti-62"></div>
                                    <div className="confetti-61"></div>
                                    <div className="confetti-60"></div>
                                    <div className="confetti-59"></div>
                                    <div className="confetti-58"></div>
                                    <div className="confetti-57"></div>
                                    <div className="confetti-56"></div>
                                    <div className="confetti-55"></div>
                                    <div className="confetti-54"></div>
                                    <div className="confetti-53"></div>
                                    <div className="confetti-52"></div>
                                    <div className="confetti-51"></div>
                                    <div className="confetti-50"></div>
                                    <div className="confetti-49"></div>
                                    <div className="confetti-48"></div>
                                    <div className="confetti-47"></div>
                                    <div className="confetti-46"></div>
                                    <div className="confetti-45"></div>
                                    <div className="confetti-44"></div>
                                    <div className="confetti-43"></div>
                                    <div className="confetti-42"></div>
                                    <div className="confetti-41"></div>
                                    <div className="confetti-40"></div>
                                    <div className="confetti-39"></div>
                                    <div className="confetti-38"></div>
                                    <div className="confetti-37"></div>
                                    <div className="confetti-36"></div>
                                    <div className="confetti-35"></div>
                                    <div className="confetti-34"></div>
                                    <div className="confetti-33"></div>
                                    <div className="confetti-32"></div>
                                    <div className="confetti-31"></div>
                                    <div className="confetti-30"></div>
                                    <div className="confetti-29"></div>
                                    <div className="confetti-28"></div>
                                    <div className="confetti-27"></div>
                                    <div className="confetti-26"></div>
                                    <div className="confetti-25"></div>
                                    <div className="confetti-24"></div>
                                    <div className="confetti-23"></div>
                                    <div className="confetti-22"></div>
                                    <div className="confetti-21"></div>
                                    <div className="confetti-20"></div>
                                    <div className="confetti-19"></div>
                                    <div className="confetti-18"></div>
                                    <div className="confetti-17"></div>
                                    <div className="confetti-16"></div>
                                    <div className="confetti-15"></div>
                                    <div className="confetti-14"></div>
                                    <div className="confetti-13"></div>
                                    <div className="confetti-12"></div>
                                    <div className="confetti-11"></div>
                                    <div className="confetti-10"></div>
                                    <div className="confetti-9"></div>
                                    <div className="confetti-8"></div>
                                    <div className="confetti-7"></div>
                                    <div className="confetti-6"></div>
                                    <div className="confetti-5"></div>
                                    <div className="confetti-4"></div>
                                    <div className="confetti-3"></div>
                                    <div className="confetti-2"></div>
                                    <div className="confetti-1"></div>
                                    <div className="confetti-0"></div>
                                </div> */}

                                <div className="col-xs-12 col-lg-6">
                                    <h2 className="g-subtitle text-yellow-h2">1º Puesto:</h2>
                                    <h2 className="g-subtitle  text-purple mg-top-0"> Viaje y Tour a Silicon Valley </h2>
                                    <p className="font-size-14"> Aprovecha al máximo el Tec Academy y viaja a Silicon Valley! </p>
                                    <p className="font-size-14"> Aprenderás de las empresas top en una experiencia inigualable. Viaje, hospedaje y entradas incluidos. </p>
                                </div>
                                <div className="col-xs-12 col-lg-6">
                                    <img src={rocket} width="100%" alt="" />
                                </div>
                            </Row>

                            {/*<!-- Segundo y tercer puesto -->*/}
                            <div className="mt-60">
                                <Row>
                                    <div className="col-xs-12 col-lg-6 div-bottom">
                                        <h3 className="text-yellow-h3">2º Puesto:</h3>
                                        <h3>$1,000 para estudios</h3>
                                        <p className="font-size-14"> Úsalos para seguir creciendo profesionalmente </p>
                                        <figure className="image-award-container">
                                            <img  width="250" src={groupprize} alt="" />
                                        </figure>
                                    </div>

                                    <div className="col-xs-12 col-lg-6">
                                        <h3 className="text-yellow-h3">3º y 4º Puesto:</h3>
                                        <h3>$500 para estudios</h3>
                                        <p className="font-size-14"> Complementamos tus ganas de seguir aprendiendo </p>
                                        <figure className="image-award-container">
                                            <img width="250" src={singleprize} alt="" />
                                        </figure>
                                    </div>
                                </Row>
                            </div>
                            {/*<!-- Fin Segundo y tercer puesto -->*/}
                        </div>
                    </Tab>
                    <Tab eventKey="profile" title="Grupal">
                        <div  className="home_awards-container position-relative" >
                            <div className="position-relative">
                                <div className="row">
                                    {/*<!-- Mejor Grupo -->*/}
                                    <div className="col-xs-12 col-lg-6">
                                        <h2 className="g-subtitle  text-yellow-h2">Premio al Mejor Grupo:</h2>
                                        <h2 className="g-subtitle  text-purple mg-top-0">After Office en el 15</h2>
                                        <p className="font-size-14">
                                            Aprender en equipo es muy importante, por eso los premiamos
                                            con una tarde de Happy Hour para celebrar sus conocimientos y
                                            seguir compartiendo experiencias.</p>
                                        <p className="font-size-14">¡Anima a tu equipo a participar!</p>
                                    </div>
                                    <div className="col-xs-12 col-lg-6 text-center mg-top-80">
                                        <img src={groupimg} width="100%" alt="" />
                                    </div>
                                    {/*<!-- Fin Mejor Grupo -->*/}
                                </div>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </Container>
        </div>
    )
}

export default HomeAwards
