import React from 'react'
import Layout from '../components/layout';
import GBanner from  '../components/banner';
import CoursePrincipal from  '../components/courses/course-principal';
import Course from '../components/course'
import { Container, Row } from 'react-bootstrap';
import { useStaticQuery, graphql, Link } from 'gatsby';

const CoursesPage = () => {

    const data = useStaticQuery( graphql`
        query {
            allContentfulCourse {
                edges {
                    node {
                        image {
                            file {
                                url
                            }
                          }
                        title
                        exhibitor
                        description {
                            content {
                                content {
                                    value
                                }
                            }
                        }
                    }
                }
            }
        }
    `)
    
    return(
    
        <Layout>
            <GBanner  title='Malla de Cursos' subtitle="Tec Valley"  ></GBanner>
            <CoursePrincipal></CoursePrincipal>
            <Container>
                <h1 className="g-subtitle  col-xs-12 mb-3" >Cursos Soft</h1>
                <Row>
                     {   data.allContentfulCourse.edges.map( (edge) => {
                        return (
                            <Course
                                exhibitor = { edge.node.exhibitor }
                                image= {edge.node.image.file.url }
                                description={ edge.node.description.content[0].content[0].value }
                                title={ edge.node.title } >
                                
                            </Course>
                        )
                     } ) }
                    {/* { data.allContentfulCourse.edges.map( (edge)=> { 
                    })} */}
                </Row>
            </Container>
        </Layout>
    
    )
}


export default CoursesPage