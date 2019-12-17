import React, { Fragment } from "react"
import { 
    Box, 
    Button,
    Container,
    CardContent,
    Card,
    CardMedia,
    Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import ScrollAnimation from 'react-animate-on-scroll';


const useStyles = makeStyles(theme =>({
    container: {
        overflow: 'hidden',
        borderRadius: 0,
        [theme.breakpoints.down('md')]: {
            position: 'relative'
		},
    },
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
        left: '12%',
        color: "white",
        [theme.breakpoints.down('md')]: {
            left: 0,
            width: "100%",
            height: "100%",
            top: 0,
            display: 'flex',
            alignItems: 'center'
		},
    },
    title : {
        maxWidth: 400,
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%'
		},
    },
    building: {
        position:'absolute',
        top: 80,
        right: '10%',
        [theme.breakpoints.down('md')]: {
            display: 'none'
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

const Banner = (props) => {
    const classes = useStyles();

    const data = useStaticQuery ( graphql`
        query {
            allContentfulBannerCalado(filter: {view: {eq: "Reglas"}}) {
                edges {
                    node {
                        title
                        principal
                        button
                        imageCalada {
                            file {
                                url
                            }
                        }
                        imagebg {
                            file {
                                url
                            }
                        }
                    }
                }
            }
        }
    ` )

    return (
            <Fragment>
                <Box position="relative" >
                    <Card  className={classes.container}  >
                        <CardMedia  className={classes.banner} image={ data.allContentfulBannerCalado.edges[0].node.imagebg.file.url }  />
                        {/* <img  src={props.data.imagebg.file.url} /> */}

                        
                            <CardContent className={classes.text}  >
                                <Container className={classes.containertext} maxWidth="lg"  >
                                    <ScrollAnimation   animateIn="slideInLeft" >
                                        <Typography className={classes.title} variant="h4">
                                            <Box  fontWeight={700} mb={4}> { data.allContentfulBannerCalado.edges[0].node.principal } </Box>
                                        </Typography>
                                        <Button variant="contained" className={classes.button}> 
                                            <Link  to="community" > { data.allContentfulBannerCalado.edges[0].node.button } </Link>     </Button>
                                    </ScrollAnimation>
                                </Container>
                            </CardContent>
               
                            <ScrollAnimation  animateIn="fade" >
                                <img  className={`${classes.building}` }   src={ data.allContentfulBannerCalado.edges[0].node.imageCalada.file.url }   />
                            </ScrollAnimation>

                 


                    </Card>
                </Box>
            </Fragment>
    )
}

export default Banner