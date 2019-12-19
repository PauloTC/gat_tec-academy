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
                meetup: allContentfulCourse ( filter:{ collection: {eq :true }, eventType: {eq : "Meetup" } } ) {
                    edges {
                        node {
                            ...data
                        }
                    }
                },
                workshop: allContentfulCourse ( filter:{ collection: {eq :true }, eventType: {eq : "Workshop" } } ) {
                    edges {
                        node {
                            ...data
                        }
                    }
                }
            },
            fragment data on ContentfulCourse {
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
                description{
                    content {
                        content {
                            value
                        }
                    }
                }
              }
        `)

    return (
        <Box>
            <Subheader title="Workshops"  subtitle="" to="activities" button='Ver workshops' />
            <Box mb={4} >
                <Grid container spacing={3} >
                    {
                        data.workshop.edges.map( (edge, index) => (
                            <Grid key={index}  item  sm={6} >
                                <CollectionCard  data={ edge.node }  /> 
                            </Grid>
                        ))
                    }
                    
                </Grid>
            </Box>
            <Subheader title="Meetups"  subtitle="" to="activities" button='Ver meetups' />
            <Box mb={4} >
                <Grid container spacing={3} >
                    {
                        data.meetup.edges.map( (edge, index) => (
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