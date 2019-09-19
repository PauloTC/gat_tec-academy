import React, { Fragment } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import bannerimage from "../assets/media/banner.jpg"
import bannergoogle from "../assets/media/banner_2.png"
import { 
    Box, 
    Button,
    Container,
    CardContent,
    Card,
    CardMedia,
    Paper, 
    Grid,
    Typography } from '@material-ui/core';

import Ambassadors from '../components/ambassadors'
import { makeStyles } from '@material-ui/core/styles';
import HomeAcademy from '../components/home-academy'
import FormatsSection from '../components/comunity/formats'
import PillarsSection from '../components/comunity/pillars'

const useStyles = makeStyles(theme =>({
    banner: {
        height: 400
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
        top: '30%',
        color: "white",
        width: '100%',
        [theme.breakpoints.down('xs')]: {
			top: '20%'
		},
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
    }
}));
const Comunity = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <Layout>
                <SEO title="Comunidad" />
                <Card>

                        <CardMedia  className={classes.banner} image={ bannerimage }  />
                        <CardContent className={classes.textbanner}  >
                            <Container maxWidth="md"  >
                                <Grid height={400} container justify="center" alignItems="center" >
                                    <Typography align='center' >
                                        <Box className={classes.title}  fontSize="h4.fontSize" fontWeight="fontWeightLight">We want to be a movement <br/>  that shares and develops a tech learning culture.</Box>
                                        <Box mt={1} fontSize="h6.fontSize"  fontWeight="fontWeightBold" > De nosotros para nosotros.</Box>
                                    </Typography>
                                </Grid>
                            </Container>
                        </CardContent>
                </Card>

                <FormatsSection /> 
                <PillarsSection />
                <Ambassadors />
                
                <Box position="relative" >
                    <Card>
                        <CardMedia  className={classes.banner} image={ bannergoogle }  />
                        <CardContent className={classes.text}  >
                            <Container className={classes.containertext} maxWidth="md"  >
                                <Typography variant="h4">
                                    <Box  fontWeight={700} mb={4}>¿Estás cerca de ganar el <br/> viaje a Silicon Valley?</Box>
                                </Typography>
                                <Button variant="contained" className={classes.button}> Quiero saber más </Button>
                            </Container>
                        </CardContent>
                    </Card>
                </Box>
            </Layout>
        </Fragment>
    )
}

export default Comunity
