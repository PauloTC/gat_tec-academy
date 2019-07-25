import React from 'react'
import image from '../../images/curso-soft-1.png'
import { useStaticQuery, graphql, Link } from 'gatsby';

import courseStyles from './course.module.scss'


const Course = (props) => {
    console.log(props)
    return(
        <div className="course col-xs-12 col-sm-6 col-md-3 container-bottom">
  
                    <div className="cursos-hard-bg post_cursos"> 

                        <img className="mb-3" src={ props.image } height="167" alt="" />
                        
                        <div className="curso_hard_text">
                            <h6 className={courseStyles.course__title}>{ props.title } </h6>

                            <h6  className={courseStyles.course__exhibitor}> { props.exhibitor } </h6>

                            <p>{ props.description }</p>

                            {/* <span
                                className="curso-mes text-pink"
                                style={{ display: "none" }}
                            >
                                <strong>Mayo</strong>
                            </span> */}
                        </div>
                    
                    </div>

        </div>
    )
}

export default Course
