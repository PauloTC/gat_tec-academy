import React, { Fragment } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Ambassadors from '../components/comunity/ambassadors'
import FormatsSection from '../components/comunity/formats'
import PillarsSection from '../components/comunity/pillars'
import  BannerSection from '../components/comunity/bannerfooter'
import SecondBanner from '../components/comunity/bannertop'

import { useStaticQuery, graphql } from 'gatsby';

const Comunity = () => {

    return (
        <Fragment>
            <Layout>
                <SEO title="Comunidad" /> 
                <SecondBanner />
                <FormatsSection/> 
                <PillarsSection />
                <Ambassadors />
                <BannerSection />
            </Layout>
        </Fragment>
    )
}

export default Comunity
