import React from 'react'

import { 
    Box ,
    Grid } from '@material-ui/core';
    
import { useStaticQuery, graphql } from 'gatsby';
import Subheader from '../comoon/subheader'
import CollectionCard from './collection-card'


const CardSection = () => {
    
    const data = useStaticQuery( graphql`
            query {
                allContentfulCourse ( filter: { collection: { eq: true } } ) {
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

    return (
        <Box>
            <Subheader title="Workshops"  subtitle="" button='Ver workshops' />
            <Box mb={9} >
                <Grid container spacing={3} >
                    {
                        data.allContentfulCourse.edges.map( (edge, index) => (
                            <Grid key={index}  item  sm={6} >
                                <CollectionCard  data={ edge.node }  /> 
                            </Grid>
                        ))
                    }
                    
                </Grid>
            </Box>
        </Box>
    )
}

export default CardSection