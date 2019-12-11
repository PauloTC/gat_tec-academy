import React from 'react'
import { 
                Box,
                Container,
                Paper, 
                Grid,
                Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import rocket from '../../assets/media/rocket.jpg'
import '../../assets/icons/style.css'
import { useStaticQuery, graphql } from 'gatsby';
import ScrollAnimation from 'react-animate-on-scroll';

const useStyles = makeStyles(theme =>({
    rocket: {
        [theme.breakpoints.down('md')]: {
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
        height: 32,
        width: 32,
        display: 'flex',
        alignItems: 'center',
        justifyContent: ' center',
        borderRadius: '50%',
        background: '#e2af03'
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
    special: {
        background: "#0529bb"
    },
    nights: {
        background: "#44deb0"
    },
    head: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between'
    },
    cardfc: {
        '&:nth-of-type(1) span' : {
            background: '#04d3f2'
        },
        '&:nth-of-type(2) span' : {
            background: '#ff71ad'
        },
        '&:nth-of-type(3) span' : {
            background: '#e2af03'
        },
        '&:nth-of-type(4) span' : {
            background: '#17c548'
        },
    },
    cardsc: {
        '&:nth-of-type(1) span' : {
            background: '#54008b'
        },
        '&:nth-of-type(2) span' : {
            background: '#0529bb'
        },
        '&:nth-of-type(3) span' : {
            background: '#44deb0'
        },
    }
}));

const Formats = (props) => {
    const classes = useStyles();


    const data = useStaticQuery(graphql`
        query {
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
        }
    ` )

    return (
        <Box mt={10} mb={5} >
            <Container maxWidth="lg" >
                <Grid   container spacing={2}  >
                    <Grid  
                            data-sal="slide-right"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            xs={12} 
                            md={4} 
                            item >
                            <ScrollAnimation animateIn="fadeIn">
                                <Typography variant="h5" >
                                    <Box fontWeight={900} > Conoce nuestros</Box> 
                                    <Box fontWeight={900} > formatos </Box> 
                                </Typography>
                                <Box my={1} >
                                    <Typography   variant="body1"  >Con nuevos y mejores espacios para aprender, compartir y desarrollarnos.</Typography>
                                </Box>
                                <Box className={ classes.rocket } mt={30} >
                                    <img width={200} src={rocket} />
                                </Box>
                            </ScrollAnimation>
                        </Grid>
                    <Grid xs={12} sm={6} md={4} item className={ classes.firstColumn  } >

                        { 
                            data.firstColumn.edges.map( ( format, index ) => {
                                return (
                                    <Grid  
                                        className={ classes.cardfc  } 
                                        item>
                                        <ScrollAnimation animateIn="fadeIn">
                                            <Paper>
                                                <Box mb={4} p={2} >
                                                    <Grid container  >
                                                        <Typography  className={ classes.head } gutterBottom variant="subtitle1"  >
                                                            <Box  fontWeight={900} > { format.node.title } </Box>
                                                            <span className={ ` ${classes.circle}`  }  >
                                                                <img src={ format.node.icon.file.url } alt=""/>
                                                            </span>
                                                        </Typography>
                                                    </Grid>
                                                    <Typography variant="body2"> { format.node.description } </Typography>

                                                </Box>
                                            </Paper>
                                        </ScrollAnimation>
                                    </Grid>
                                )
                            })

                        }
    
                    </Grid>
                    <Grid

                        xs={12} sm={6} item md={4}>
                        
                        {
                            data.secondColumn.edges.map( ( format, index ) => {
                                return (
                                    <Grid 
                                        item className={ classes.cardsc  } >
                                        <ScrollAnimation animateIn="fadeIn">
                                            <Paper>
                                                <Box mb={4} p={2} >
                                                    <Grid container  >
                                                        <Typography  className={ classes.head } gutterBottom variant="subtitle1"  >
                                                            <Box  fontWeight={900} > { format.node.title } </Box>
                                                            {
                                                                (() => {
                                                                    if( format.node.icon ) {
                                                                        return (
                                                                            <span className={ ` ${classes.circle} ${ format.node.title } `  }  >
                                                                                <img src={ format.node.icon.file.url } alt=""/>
                                                                            </span>
                                                                        )
                                                                    }else {
                                                                        return (
                                                                            <span></span>
                                                                        )
                                                                    }
                                                                })()
                                                            }
                                                            
                                                        </Typography>
                                                    </Grid>
                                                    <Typography variant="body2"> { format.node.description } </Typography>

                                                </Box>
                                            </Paper>
                                        </ScrollAnimation>
                                    </Grid>

                                )
                            })

                        }
                    
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}


export default Formats