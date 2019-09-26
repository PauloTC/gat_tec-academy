import React from 'react'
import Layout from '../components/layout'
import PointsGroup from  '../components/points/grouppoints';
import IndividualPoints from '../components/points/individualpoints'
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
            <SEO title="Puntos" />
            <Container maxWidth="lg" >
                <Box my={5} >
                    <Grid  container spacing={8} >
                        <Grid item xs={12} sm={9} >
                            <IndividualPoints></IndividualPoints>   
                        </Grid>
                        <Grid container item xs={12} sm={3}  >
                                <Grid item xs={12} >
                                    <Typography gutterBottom variant="subtitle1"> 
                                        <Box fontWeight={700} mt={1} mb={2} >Puntaje grupal</Box> 
                                    </Typography>
                                </Grid>
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