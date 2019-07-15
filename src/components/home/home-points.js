import React from "react"
import points from '../../images/ico-puntos.svg'
import { Container, Row } from 'react-bootstrap';


const HomePoints = () => {
    return (
        <div id="ganar-puntos" className="container-fluid page-section">
            <Container className="pt-60" >
                <h2 className="text-purple" style={{ paddingBottom: "40px" }}>
                    <img alt="trofeo" src={points} />
                    <br />
                    ¿Cómo ganar puntos?
                </h2>
                    <Row>     
                        <div id="personales" className="offset-md-1 col-md-5 offset-sm-1 col-sm-10">
                            <div className="header">
                                <strong className="text-white">Puntaje Individual </strong>
                            </div>
                            <div className="box-puntos">
                                <p className="font-size-14">
                                    <strong>+ 1</strong> &emsp;Por asistencia al curso/taller{" "}
                                </p>
                                <p className="font-size-14">
                                    <strong>+ 1</strong> &emsp;Por participación en el curso/taller
                                </p>
                                <p className="font-size-14">
                                    <strong>+ 1</strong> &emsp;Por ganar el Kahoot en el curso
                                </p>
                                <p className="font-size-14">
                                    <strong className="text-pink">&nbsp;- 1</strong> &emsp;Por no
                                    asistir o no cancelar a tiempo (3 días laborables)
                                </p>
                            </div>
                        </div>
                        <div id="grupales" className="offset-md-0 col-md-5 offset-sm-1 col-sm-10">
                            <div className="header">
                                <strong className="text-white">Puntaje Grupal</strong>
                            </div>
                            <div className="box-puntos">
                                <p className="font-size-14">
                                    <strong>+ 1</strong> &emsp; Por mayor asistencia del grupo al
                                    curso/taller</p>
                                <p className="font-size-14">
                                    <strong>+ 1</strong> &emsp; Por iniciativa/emprendimiento a
                                    partir de lo aprendido en los cursos que ayude a Belcorp</p>
                            </div>
                        </div>
                    </Row>
        
                <div className="mg-top-80 clearfix"></div>
            </Container>


        </div>
    )
}

export default HomePoints