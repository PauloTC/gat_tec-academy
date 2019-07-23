import React from 'react'
import prizes from "../../images/ico-premios.svg"

import groupStyles from './grouppoints.module.scss'


import { Container } from 'react-bootstrap';
const PointsGroup = () => {
    return (
        <Container  className="group" >
            <h2  class="mt-5  mb-5  g-subtitle" >Puntaje grupal</h2>
            <div className="card-group">
                {/*<!-- EMPATE -->*/}
                <div className="col-xs-1 col-sm-6 col-md-8">
                    <div className="card puesto1 card-google">
                        <div className={  groupStyles.group__header  }>
                            <span role="img" aria-label="party">🎉</span>1er Puesto - Empate
                        </div>
                        <div className="card-body">
                            <div className="trophy">
                                <img  width={100} src={prizes} alt="" />
                                <div className="media-body">
                                    <h3 className={ groupStyles.group__h3 } >Team Facebook y Team Tesla</h3>
                                    <h5   className={ groupStyles.group__h5 } >6 Puntos acumulados</h5>
                                </div>
                            </div>
                        </div>
                        </div>
                </div>
                <div className="col-xs-1 col-sm-6 col-md-4">
                    <div className="card o-puesto">
                        <div className="card-body o-puesto-netflix">
                            2do Puesto - Team Netflix
                            <h5  className={ groupStyles.group__h5 } >5 Puntos acumulados</h5>
                        </div>
                        <div className="card-body o-puesto-google">
                            3er Puesto - Team Google
                        <h5 className={ groupStyles.group__h5 } >2 Puntos acumulados</h5>
                        </div>
                        <div className="card-body o-puesto-apple">
                            4to Puesto - Team Apple
                        <h5 className={ groupStyles.group__h5 } >1 Punto acumulados</h5>
                        </div>
                    </div>
                </div>
                {/*<!-- FIN EMPATE -->*/}
            </div>
        </Container>
    )
}

export default PointsGroup