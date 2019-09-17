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
import { makeStyles } from '@material-ui/styles';
import HomeAcademy from '../components/home-academy'
import rocket from '../assets/media/rocket.jpg'

const useStyles = makeStyles({
    banner: {
        height: 400
    },
    text: {
        position: "absolute",
        top: 100,
        left: 150,
        color: "white"
    },
    textbanner: {
        position: "absolute",
        top: '30%',
        color: "white",
        width: '100%'
    },
    button: {
        background: "white",
        textTransform: "inherit",
        '& span': {
            fontWeight: "bold",
            fontSize: 14
        }
    }
});
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
                                        <Box  fontSize="h3.fontSize" fontWeight="fontWeightBold">Nos renovamos</Box>
                                        <Box fontSize="subtitle2.fontSize"  >Con nuevos y mejores espacios para aprender, compartir y desarrollarnos.</Box>
                                    </Typography>
                                </Grid>
                            </Container>
                        </CardContent>
                </Card>

                <Box mt={10} mb={5} >
                    <Container maxWidth="md" >
                        <Grid   container spacing={2}  >
                            <Grid md={4} item >
                                <Typography variant="h5" >
                                    <Box fontWeight="fontWeightBold" > Conoce nuestros</Box> 
                                    <Box fontWeight="fontWeightBold" > formatos </Box> 
                                </Typography>
                                <Box my={3} >
                                    <Typography   variant="body2"  >Con nuevos y mejores espacios para aprender, compartir y desarrollarnos.</Typography>
                                </Box>
                                <Box mt={30} >
                                    <img width={200} src={rocket} />
                                </Box>
                            </Grid>
                            <Grid md={4} item >
                                <Grid item>
                                    <Paper>
                                        <Box mb={4} p={2} >
                                            <Grid container  >
                                                <Typography gutterBottom variant="subtitle1"  >
                                                    <Box  fontWeight="fontWeightBold" >Workshops</Box>
                                                </Typography>
                                            </Grid>
                                            <Typography variant="body2">Ahora más dinámicos y además con Workshops Talks para profundizar y resolver casos del día a día.</Typography>

                                        </Box>
                                    </Paper>
                                </Grid>

                                <Grid item>
                                    <Paper>
                                        <Box mb={4} p={2} >
                                            <Grid container  >
                                                <Typography gutterBottom variant="subtitle1"  >
                                                    <Box  fontWeight="fontWeightBold" >Talks</Box>
                                                </Typography>
                                            </Grid>
                                            <Typography variant="body2">Invitados especiales y charlas inspiradoras de innovación y tecnología.</Typography>
                                        </Box>
                                    </Paper>
                                </Grid>

                                <Grid item>
                                    <Paper>
                                        <Box mb={4} p={2} >
                                            <Grid container  >
                                                <Typography gutterBottom variant="subtitle1"  >
                                                    <Box  fontWeight="fontWeightBold" >Pitch Day</Box>
                                                </Typography>
                                            </Grid>
                                            <Typography variant="body2">Tu creatividad y experiencia se pueden convertir en proyectos reales Belcorp. Te acompañaremos en el proceso de ideación para que expongas frente a líderes de Belcorp.</Typography>
                                        </Box>
                                    </Paper>
                                </Grid>

                                <Grid item>
                                    <Paper>
                                        <Box mb={4} p={2} >
                                            <Grid container  >
                                                <Typography gutterBottom variant="subtitle1"  >
                                                    <Box  fontWeight="fontWeightBold" >Countries</Box>
                                                </Typography>
                                            </Grid>
                                            <Typography variant="body2">Ahora somos internacionales. Colombia será nuestro primer país de expansión.</Typography>
                                        </Box>
                                    </Paper>
                                </Grid>
            
                            </Grid>
                            <Grid  item md={4}>
                                <Grid item>
                                    <Paper>
                                        <Box mb={4} p={2} >
                                            <Grid container  >
                                                <Typography gutterBottom variant="subtitle1"  >
                                                    <Box  fontWeight="fontWeightBold" >Meetups</Box>
                                                </Typography>
                                            </Grid>
                                            <Typography variant="body2">Entramos a la plataforma de comunidades para compartir conocimientos con muchos entusiastas de la tecnología. Búscanos en meetup.com como Belcorp Tec Academy</Typography>
                                        </Box>
                                    </Paper>
                                </Grid>
                                <Grid item>
                                    <Paper>
                                        <Box mb={4} p={2} >
                                            <Grid container  >
                                                <Typography gutterBottom variant="subtitle1"  >
                                                    <Box  fontWeight="fontWeightBold" >Special Events!</Box>
                                                </Typography>
                                            </Grid>
                                            <Typography variant="body2">TEC Conference Day: Un día entero lleno de conocimiento para retroalimentarnos, integrarnos y energizarnos todos juntos. </Typography>
                                        </Box>
                                    </Paper>
                                </Grid>
                                <Grid item>
                                    <Paper>
                                        <Box mb={4} p={2} >
                                            <Grid container  >
                                                <Typography gutterBottom variant="subtitle1"  >
                                                    <Box  fontWeight="fontWeightBold" >Nights</Box>
                                                </Typography>
                                            </Grid>
                                            <Typography variant="body2">Un espacio para conocer historias de emprendedores como tú y motivarnos a soñar y seguir retándonos. </Typography>
                                        </Box>
                                    </Paper>
                                </Grid>
                                <Grid item>
                                    <Paper>
                                        <Box mb={4} p={2} >
                                            <Grid container  >
                                                <Typography gutterBottom variant="subtitle1"  >
                                                    <Box  fontWeight="fontWeightBold" >Y muchas novedades más</Box>
                                                </Typography>
                                            </Grid>
                                            <Typography variant="body2">¡Los anunciaremos pronto!</Typography>
                                        </Box>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                <Box position="relative" >
                    <Card>
                        <CardMedia  className={classes.banner} image={ bannergoogle }  />
                        <CardContent className={classes.text}  >
                            <Container maxWidth="md"  >
                                <Typography variant="h4">
                                    <Box  fontWeight={700} mb={4}>¿Estás cerca de ganar el <br/> viaje a Silicon Valley?</Box>
                                </Typography>
                                <Button variant="contained" className={classes.button}> Quiero saber más </Button>
                            </Container>
                        </CardContent>
                    </Card>
                </Box>
                <Ambassadors></Ambassadors>
            </Layout>
        </Fragment>
    )
}

export default Comunity
