import React from 'react'
import Layout from '../components/layout';
import CoursePrincipal from  '../components/courses/course-principal';
import Course from '../components/course/course'
import { Row } from 'react-bootstrap';
import { useStaticQuery, graphql } from 'gatsby';
import { Container } from '@material-ui/core';

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
                        slug
                        exhibitorImage {
                            file {
                                url
                            }
                        }
                        exhibitorJob
                        principal
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
            {/* <GBanner  title='Malla de Cursos' subtitle="Tec Valley"  ></GBanner> */}
            <Container>
                { data.allContentfulCourse.edges.map( (edge, index) => {
                    if(edge.node.principal === true) {
                        return (
                            // console.log(edge.node.exhibitor)
                            <CoursePrincipal
                                key = { index }
                                exhibitorJob = { edge.node.exhibitorJob }
                                exhibitorImage = { edge.node.exhibitorImage.file.url }
                                exhibitor = { edge.node.exhibitor }
                                image= {edge.node.image.file.url }
                                description={ edge.node.description.content[0].content[0].value }
                                title= {edge.node.title}
                            ></CoursePrincipal>
                        )
                    }else {
                        return false 
                    }
                } ) }
                <Container className="mb-30" >
                    <h2 className="g-subtitle mb-30" >Cursos</h2>
                    <Row>
                        {   data.allContentfulCourse.edges.map( (edge, index) => {
                            return (
                                <Course
                                    key = {index}
                                    exhibitor = { edge.node.exhibitor }
                                    image= {edge.node.image.file.url }
                                    description={ edge.node.description.content[0].content[0].value }
                                    title={ edge.node.title } 
                                    slug= { edge.node.slug }>
                                </Course>
                            )
                        } ) }
                    </Row>
                </Container>
            </Container>
        </Layout>
    
    )
}


export default CoursesPage