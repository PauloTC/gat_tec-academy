import React from 'react'
import { Link } from 'gatsby';

import Badge from 'react-bootstrap/Badge'
import Styles from './course.module.scss'


const Course = (props) => {
    return(
        <div className="course col-xs-12 col-sm-6 col-lg-3 container-bottom">
  
            <div className="cursos-hard-bg  d-flex flex-column post_cursos"> 

                <img className="mb-3" src={ props.image } height="167" alt="image2" />
                
                <div className="curso_hard_text">
                    <h6>
                        <Badge variant="success" >Softskill</Badge>
                    </h6>

                    <h6 className={Styles.course__title}>{ props.title } </h6>

                    <h6  className={Styles.course__exhibitor}> { props.exhibitor } </h6>

                    <p>{ props.description }</p>

                </div>
            
                <Link to={`/courses/${ props.slug}`}  className={`btn btn-outline-primary ${Styles.course__button}`} > Ver resumen  </Link>
            
                <div className={ `d-flex align-items-center flex-column justify-content-center  ${Styles.course__footer}` } >
                    Taller terminado
                </div>
            
            </div>

        </div>
    )
}

export default Course
