import React, { Fragment } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Ambassadors from '../components/comunity/ambassadors'
import { makeStyles } from '@material-ui/core/styles';
import FormatsSection from '../components/comunity/formats'
import PillarsSection from '../components/comunity/pillars'
import  BannerSection from '../components/comoon/banner'
import SecondBanner from '../components/comoon/second-banner'

const Comunity = () => {
    return (
        <Fragment>
            <Layout>
                <SEO title="Comunidad" /> 
                <SecondBanner />
                <FormatsSection /> 
                <PillarsSection />
                <Ambassadors />
                <BannerSection />
            </Layout>
        </Fragment>
    )
}

export default Comunity
