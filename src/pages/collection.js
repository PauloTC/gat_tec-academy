import React  from 'react'
import Layout from '../components/layout'
import SEO from "../components/seo"

import SecondBanner from '../components/comunity/bannertop'

import { 
        Container, 
        Box  } from '@material-ui/core';

import CardSection from '../components/collection/cardsection'
import { useStaticQuery, graphql } from 'gatsby';


const Collection = () => {
    
    const data = useStaticQuery( graphql`
        query {
            allContentfulBanner ( filter: { view : { eq : "Colección" } } ) {
                edges {
                    node {
                        principalText
                        secondaryText
                        imagebg {
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
            <SEO title="Galería" />
            <SecondBanner  data= { data.allContentfulBanner.edges[0].node } />
            <Container maxWidth="lg" >
                <Box mt={12} >
                    <CardSection />
                </Box>
            </Container>
        </Layout>
    )
}

export default Collection