import React  from 'react'
import Layout from '../components/layout'
import SEO from "../components/seo"

import SecondBanner from '../components/comoon/second-banner'
import PrincipalCard from '../components/collection/principal'

import { 
        Container, 
        Box  } from '@material-ui/core';

import Subheader from '../components/comoon/subheader'
import CardSection from '../components/collection/cardsection'

const Collection = () => {
    return (
        <Layout>
            <SEO title="Galería" />
            <SecondBanner />
            <Container maxWidth="lg" >
                <Box mt={7} >
                    <Subheader title="Lo más reciente"  subtitle="Descubre todos los detalles de los últimos eventos realizados por TecAcademy. ¡Sí¡ ¡Encontrarás la presentación del expositor!" button='Ver todo' />
                    <PrincipalCard />
                    <CardSection />
                </Box>
            </Container>
        </Layout>
    )
}

export default Collection