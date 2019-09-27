import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from "../components/seo"

import SecondBanner from '../components/comoon/second-banner'
import PrincipalCard from '../components/collection/principal'

import { 
        Container, 
        Box ,
        Card,
        CardActionArea,
        CardContent,
        CardMedia,
        Grid, 
        Typography,
        Button } from '@material-ui/core';

import Subheader from '../components/subheader'
import image from '../assets/media/collection.png'
import CardSection from '../components/collection/cardsection'

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    date: {
        color: '#ff00a6'
    }
}))


const Collection = () => {
	const classes = useStyles();
    return (
        <Layout>
            <SEO title="Galería" />
            <SecondBanner />
            <Container maxWidth="lg" >
                <Subheader title="Lo más reciente"  subtitle="Descubre todos los detalles de los últimos eventos realizados por TecAcademy. ¡Sí¡ ¡Encontrarás la presentación del expositor!" button='Ver todo' />
                <PrincipalCard />
                <CardSection />
            </Container>
        </Layout>
    )
}

export default Collection