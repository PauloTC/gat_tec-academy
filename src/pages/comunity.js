import React, { Fragment } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import bannerimage from "../assets/media/banner.jpg"
import { 
    Box, 
    Container,
    CardContent,
    Card,
    CardMedia,
    Grid,
    Typography } from '@material-ui/core';

import Ambassadors from '../components/comunity/ambassadors'
import { makeStyles } from '@material-ui/core/styles';
import FormatsSection from '../components/comunity/formats'
import PillarsSection from '../components/comunity/pillars'
import  BannerSection from '../components/comoon/banner'

const useStyles = makeStyles(theme =>({
    banner: {
        height: 400,
        [theme.breakpoints.down('md')]: {
            height: 350
		},
    },
    containertext: {
        [theme.breakpoints.down('sm')]: {
            textAlign: "center"
		},
    },
    text: {
        position: "absolute",
        top: 100,
        left: 150,
        color: "white",
        [theme.breakpoints.down('md')]: {
            left: 0,
            width: "100%"
		},
    },
    textbanner: {
        position: "absolute",
        top: 0,
        bottom: 0,
        color: "white",
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    bannercontainer: {
        position: 'relative',
        borderRadius: 0
    },
    title: {
        [theme.breakpoints.down('xs')]: {
            fontSize: 25
		},
    },
    button: {
        background: "white",
        textTransform: "inherit",
        '& span': {
            fontWeight: "bold",
            fontSize: 14
        }
    },
    container: {
        background: "white"
    }
}));
const Comunity = () => {
    const classes = useStyles();
    return (
        <Fragment className={ classes.container } >
            <Layout>
                <SEO title="Comunidad" />
                <Card  className={ classes.bannercontainer } >
                        <CardMedia  className={classes.banner} image={ bannerimage }  />
                        <CardContent className={classes.textbanner}  >
                            <Container maxWidth="lg"  >
                                <Grid height={400} container justify="center" alignItems="center" >
                                    <Typography align='center' >
                                        <Box className={classes.title}  fontFamily="Lato-light" fontSize="h4.fontSize" fontWeight="fontWeightLight">We want to be a movement <br/>  that shares and develops a tech learning culture.</Box>
                                        <Box mt={1} fontSize="h6.fontSize"  fontWeight="fontWeightBold" > De nosotros para nosotros.</Box>
                                    </Typography>
                                </Grid>
                            </Container>
                        </CardContent>
                </Card>

                <FormatsSection /> 
                <PillarsSection />
                <Ambassadors />
                <BannerSection />
            </Layout>
        </Fragment>
    )
}

export default Comunity
