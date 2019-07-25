import React from 'react'
import image from '../../images/curso-soft-1.png'
import { useStaticQuery, graphql, Link } from 'gatsby';

import Styles from './course.module.scss'


const Course = (props) => {
    return(
        <div className="course col-xs-12 col-sm-6 col-md-3 container-bottom">
  
            <div className="cursos-hard-bg  d-flex flex-column post_cursos"> 

                <img className="mb-3" src={ props.image } height="167" alt="" />
                
                <div className="curso_hard_text">
                    <h6 className={Styles.course__title}>{ props.title } </h6>

                    <h6  className={Styles.course__exhibitor}> { props.exhibitor } </h6>

                    <p>{ props.description }</p>

                </div>
            
                <Link to="/points/"  className={`btn btn-outline-primary ${Styles.course__button}`} > Ver resumen  </Link>
            
                <div className={ `d-flex align-items-end flex-column justify-content-center  ${Styles.course__footer}` } >
                    Taller, terminado
                </div>
            
            </div>

        </div>
    )
}

export default Course
