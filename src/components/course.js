import React from 'react'
import image from '../images/curso-soft-1.png'

const Course = () => {
    return(
        <div className="col-xs-12 col-sm-6 col-md-3 container-bottom">
            <div className="cursos-hard-bg post_cursos">
                <p>
                    <img src={ image } height="167" alt="" />
                </p>
                <div className="curso_hard_text">
                    <h5 className="text-black">
                        <strong>Datastorytelling Para Influenciar</strong>
                    </h5>
                    <h5 className="text-gray" style={{ paddingBottom: "25px" }}>La barba films</h5>
                    <p>La creación y aprovechamiento de una atmosfera mágica a través
                        del relato y la visualización de los datos como elemento
                        relevante para la comunicación.</p>
                    <span
                        className="curso-mes text-pink"
                        style={{ display: "none" }}
                    >
                        <strong>Mayo</strong>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Course
