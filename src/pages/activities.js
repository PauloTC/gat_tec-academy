import React from 'react'
import Layout from '../components/layout';
import SEO from "../components/seo"
import CoursePrincipal from  '../components/courses/course-principal';
import Course from '../components/courses/course'
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Box, Typography, Grid } from '@material-ui/core';

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
                        fecha1
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
            <SEO title="Cursos" />
            <Container maxWidth="lg"  >
                <Box my={5} >
                    { data.allContentfulCourse.edges.map( (edge, index) => {
                        if(edge.node.principal === true) {
                            return (
                                // console.log(edge.node.exhibitor)
                                <CoursePrincipal
                                    key = { index }
                                    exhibitorJob = { edge.node.exhibitorJob }
                                    exhibitorImage = { edge.node.exhibitorImage.file.url }
                                    exhibitor = { edge.node.exhibitor }
                                    fecha = { edge.node.fecha1 }
                                    image= {edge.node.image.file.url }
                                    description={ edge.node.description.content[0].content[0].value }
                                    title= {edge.node.title}
                                ></CoursePrincipal>
                            )
                        }else {
                            return false 
                        }
                    } ) }
                </Box>
                <Typography>
                    <Box mb={2}  gutterBottom fontSize="h5.fontSize" fontWeight="fontWeightBold" >Actividades</Box>
                </Typography>
                <Box mb={4} >
                    <Grid container spacing={2} >
                            {   data.allContentfulCourse.edges.map( (edge, index) => {
                                return (
                                    <Course
                                        key = {index}
                                        exhibitor = { edge.node.exhibitor }
                                        image= {edge.node.image.file.url }
                                        exhibitorImage = { edge.node.exhibitorImage.file.url }
                                        description={ edge.node.description.content[0].content[0].value }
                                        title={ edge.node.title } 
                                        fecha={ edge.node.fecha1 } 
                                        slug= { edge.node.slug }>
                                    </Course>
                                )
                            } ) }
                    </Grid>
                </Box>
            </Container>
        </Layout>
    
    )
}

export default CoursesPage