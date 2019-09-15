import React, { Fragment } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import bannerimage from "../assets/media/banner.jpg"
import { 
    Box, 
    Button,
    Container,
    Paper, 
    Grid,
    Typography } from '@material-ui/core';

const Comunity = () => (
    <Fragment>
        <Layout>
            <SEO title="Comunity" />
            <Box position="relative" >
                <Box height={400} position="absolute" >
                    <img src={ bannerimage } />
                </Box>
                <Box height={400} position="relative">
                    <Container height={400} >
                        <Grid height={400} container justify="center" alignItems="center" >
                            <Typography align='center' >
                                <Box  fontSize="h4.fontSize" fontWeight="fontWeightBold">Nos renovamos</Box>
                                <Box fontSize="subtitle2.fontSize"  >Con nuevos y mejores espacios para aprender, compartir y desarrollarnos.</Box>
                            </Typography>
                        </Grid>
                    </Container>
                </Box>
            </Box>
            <Box my={4} >
                <Container >
                    <Grid   container >
                        <Grid md={4} item >
                            <Typography>Conoce nuestros formatos</Typography>
                            <Typography>Con nuevos y mejores espacios para aprender, compartir y desarrollarnos.</Typography>
                        </Grid>
                        <Grid spacing={4}  container md={8} item >
                            <Grid sm={6}  item>
                                <Paper>
                                    <Box p={2} >
                                        <Grid container  >
                                            <Typography variant="subtitle1"  >Workshops</Typography>
                                        </Grid>
                                        <Typography variant="body2">Ahora más dinámicos y además con Workshops Talks para profundizar y resolver casos del día a día.</Typography>

                                    </Box>
                                </Paper>
                            </Grid>
                            <Grid sm={6}  item>
                                <Paper>
                                    <Box p={2} >
                                        <Grid container  >
                                            <Typography variant="subtitle1"  >Workshops</Typography>
                                        </Grid>
                                        <Typography variant="body2">Entramos a la plataforma de comunidades para compartir conocimientos con muchos entusiastas de la tecnología.
    Búscanos en meetup.com como Belcorp Tec Academy</Typography>

                                    </Box>
                                </Paper>
                            </Grid>
        
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    </Fragment>
)

export default Comunity
