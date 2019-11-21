import React, { Fragment } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Ambassadors from '../components/comunity/ambassadors'
import FormatsSection from '../components/comunity/formats'
import PillarsSection from '../components/comunity/pillars'
import  BannerSection from '../components/comoon/banner'
import SecondBanner from '../components/comoon/second-banner'

import { useStaticQuery, graphql } from 'gatsby';

const Comunity = () => {

    const data = useStaticQuery( graphql`
        query {
            allContentfulBanner ( filter: { view : { eq : "Nosotros" } } ) {
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
            },
            firstColumn: allContentfulFormat ( filter : { column : { eq: "1" } } ) {
                edges {
                    node {
                        title
                        description
                        icon{
                            file {
                                url
                            }
                        }
                        column
                    }
                    }
                }
            secondColumn:allContentfulFormat ( filter: { column : { eq : "2" } } ) {
                edges {
                    node {
                        title
                        description
                        icon {
                            file {
                                url
                            }
                        }
                        column
                    }
                }
            }
            allContentfulBannerCalado(filter: {view: {eq: "Nosotros"}}) {
                edges {
                    node {
                        title
                        principal
                        button
                        imageCalada {
                            file {
                                url
                            }
                        }
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
        <Fragment>
            <Layout>
                <SEO title="Comunidad" /> 
                <SecondBanner 
                    data= { data.allContentfulBanner.edges[0].node } />
                <FormatsSection   
                    firstColumn =  { data.firstColumn.edges }
                    secondColumn = { data.secondColumn.edges } /> 
                <PillarsSection />
                <Ambassadors />
                <BannerSection 
                    data= { data.allContentfulBannerCalado.edges[0].node } />
            </Layout>
        </Fragment>
    )
}

export default Comunity
