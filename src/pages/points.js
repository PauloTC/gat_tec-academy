import React from 'react'
import Layout from '../components/layout'
import PointsGroup from  '../components/grouppoints/grouppoints';
import IndividualPoints from '../components/individualpoints/individualpoints'
import SEO from "../components/seo"
import { useStaticQuery, graphql } from 'gatsby';
import {  Grid, Typography, Container, Box } from '@material-ui/core';

const PointsPage = () => {

    const data = useStaticQuery( graphql`
        query {
            allContentfulGroup (sort : {
                fields: points,
                order: DESC
            }) {
                edges {
                    node {
                        name
                        points
                        image {
                            file {
                                url
                            }
                        }
                    }
                }
            }
        }
    `)
    
    return (
        <Layout>
            <SEO title="Points" />
            <Container maxWidth="md" >
                <Box my={5} >
                    <Grid  container spacing={8} >
                        <Grid item sm={12} md={9} >
                            <IndividualPoints></IndividualPoints>   
                        </Grid>
                        <Grid item sm={12} md={3}  >
                                <Typography gutterBottom variant="subtitle1"> 
                                    <Box fontWeight={700} mt={1} mb={2} >Puntaje grupal</Box> 
                                </Typography>
                                { data.allContentfulGroup.edges.map( (edge, index ) => {
                                        return (
                                            <PointsGroup
                                                key = {index}
                                                position = {index}
                                                name = { edge.node.name }
                                                image = { edge.node.image.file.url }
                                                points = { edge.node.points }
                                            ></PointsGroup>
                                        )
                                })} 
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Layout>
    )

}
    

export default PointsPage