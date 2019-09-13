import React from 'react'
import Layout from '../components/layout'
import PointsGroup from  '../components/grouppoints/grouppoints';
import IndividualPoints from '../components/individualpoints/individualpoints'
import SEO from "../components/seo"
import Grid from '@material-ui/core/Grid';
import { useStaticQuery, graphql } from 'gatsby';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

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
            <Container>
                <Grid  container spacing={5} >
                    <Grid item xs={12} sm={8} >
                        <IndividualPoints></IndividualPoints>   
                    </Grid>
                    <Grid item xs={12} sm={4}  >
                            <Typography variant="h6"> Puntaje grupal </Typography>
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
            </Container>
        </Layout>
    )

}
    

export default PointsPage