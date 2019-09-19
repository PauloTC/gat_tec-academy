import React from 'react'
import { 
                Box,
                Container,
                Paper, 
                Grid,
                Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import rocket from '../../assets/media/rocket.jpg'

const useStyles = makeStyles(theme =>({
    rocket: {
        [theme.breakpoints.down('sm')]: {
			display: 'none'
		},
    },
    colorbox: {
        height: 120,
        borderRadius: 8,
        fontWeight: 900,
        color: "white",
        padding: 15,
        display: 'flex',
        alignItems: "center"
    },
    circle: {
        height: 20,
        width: 20,
        background: "red",
        display: 'flex',
        borderRadius: '50%'
    },
    workshop: {
        background: "#04d3f2"
    },
    talks : {
        background: "#ff71ad"
    },
    pitch: {
        background: "#e2af03"
    },
    countries: {
        background: "#17c548"
    },
    meetups: {
        background: "#54008b"
    },
    nights: {
        background: "#44deb0"
    },
    head: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between'
    }
}));

const Formats = () => {
    const classes = useStyles();
    return (
        <Box mt={10} mb={5} >
            <Container maxWidth="md" >
                <Grid   container spacing={2}  >
                    <Grid xs={12} md={4} item >
                        <Typography variant="h5" >
                            <Box fontWeight={900} > Conoce nuestros</Box> 
                            <Box fontWeight={900} > formatos </Box> 
                        </Typography>
                        <Box my={1} >
                            <Typography   variant="body1"  >Con nuevos y mejores espacios para aprender, compartir y desarrollarnos.</Typography>
                        </Box>
                        <Box className={ classes.rocket }    mt={30} >
                            <img width={200} src={rocket} />
                        </Box>
                    </Grid>
                    <Grid xs={12} sm={6} md={4} item >
                        <Grid item>
                            <Paper>
                                <Box mb={4} p={2} >
                                    <Grid container  >
                                        <Typography  className={ classes.head } gutterBottom variant="subtitle1"  >
                                            <Box  fontWeight={900} >Workshops</Box>
                                            <span className={ ` ${classes.circle} ${classes.workshop} `  }  ></span>
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
                                        <Typography className={ classes.head } gutterBottom variant="subtitle1"  >
                                            <Box  fontWeight={900} >Talks</Box>
                                            <span className={ ` ${classes.circle} ${classes.talks} `  }  ></span>
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
                                        <Typography className={ classes.head } gutterBottom variant="subtitle1"  >
                                            <Box  fontWeight={900} >Pitch Day</Box>
                                            <span className={ ` ${classes.circle} ${classes.pitch} `  }  ></span>
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
                                        <Typography className={ classes.head } gutterBottom variant="subtitle1"  >
                                            <Box  fontWeight={900} >Countries</Box>
                                            <span className={ ` ${classes.circle} ${classes.countries} `  }  ></span>
                                        </Typography>
                                    </Grid>
                                    <Typography variant="body2">Ahora somos internacionales. Colombia será nuestro primer país de expansión.</Typography>
                                </Box>
                            </Paper>
                        </Grid>
    
                    </Grid>
                    <Grid xs={12} sm={6} item md={4}>
                        <Grid item>
                            <Paper>
                                <Box mb={4} p={2} >
                                    <Grid container  >
                                        <Typography className={ classes.head } gutterBottom variant="subtitle1"  >
                                            <Box  fontWeight={900}  >Meetups</Box>
                                            <span className={ ` ${classes.circle} ${classes.meetups} `  }  ></span>
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
                                        <Typography className={ classes.head } gutterBottom variant="subtitle1"  >
                                            <Box  fontWeight={900} >Special Events!</Box>
                                            <span className={ ` ${classes.circle} ${classes.special} `  }  ></span>
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
                                        <Typography className={ classes.head } gutterBottom variant="subtitle1"  >
                                            <Box  fontWeight={900} >Nights</Box>
                                            <span className={ ` ${classes.circle} ${classes.nights} `  }  ></span>
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
                                            <Box  fontWeight={900} >Y muchas novedades más</Box>
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
    )
}


export default Formats