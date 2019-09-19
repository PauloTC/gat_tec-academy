import React from 'react'
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
import { useStaticQuery, graphql } from 'gatsby'
import karen from '../assets/media/karen.jpg'
import andrea from '../assets/media/andrea.jpg'
import camila from '../assets/media/camila.jpg'
import sofia from '../assets/media/sofia.jpg'
import priscila from '../assets/media/priscila.jpg'
import luisb from '../assets/media/luisb.jpg'
import daniel from '../assets/media/daniel.jpg'
import luisn from '../assets/media/luisn.jpg'
import carla from '../assets/media/carla.jpg'
import karla from '../assets/media/karla.jpg'
import danilo from '../assets/media/danilo.jpg'
import alonso from '../assets/media/alonso.jpg'
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    image: {
        maxWidth: '100%',
        paddingBottom: 255,
        width: 345,
        position: 'absolute',
        transition: 'all .3s ease-in-out',
        borderRadius: 8,
        left: 0,
        right: 0,
        top: 0,
        cursor: 'pointer',
        bottom: 0,
        '&:hover':{
            opacity: 0
        }
    },
    // imagedefault: {
    //     opacity: 1,
    // },
    // imagehover: {
    //     opacity
    // }
    // image:hover {
    //     opacity: 0
    // },
    line: {
        height: 3,
        width: 50,
        display: "block",
        background: "#ff00a6"
    },
    item: {
        height: 255
    }
});



export default function  Ambassadors() {
    const classes = useStyles();

    const data = useStaticQuery( graphql`
        query {
            ambassadors: allContentfulAmbassador {
                edges {
                    node {
                        id
                        name
                        image {
                            file {
                            url
                            }
                        }
                        imagehover{
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
        <Container  maxWidth="md" >
            <Box my={8} >
                <Grid container spacing={1} >
                        <Grid md={4} item >
                            <Typography variant="h5" >
                                <Box fontWeight={900} >Nuestros </Box>
                                <Box fontWeight={900} >embajadores</Box>
                            </Typography>
                            <Box my={3} >
                                <Typography variant="body2" >Un grupo de personas apasionadas y entusiastas. ¡Conócelos!</Typography>
                            </Box>
                        </Grid>
                        <Grid md={8} container  justify="center" spacing={2}  item >
                            {
                                data.ambassadors.edges.map( item => {
                                    return (
                                        <Grid className={ classes.item }  key={item.id}  md={4} item > 
                                            <Box position="relative"  >
                                                <CardMedia className={classes.image} image={item.node.imagehover.file.url}   mb={1} />
                                                <CardMedia className={classes.image} image={item.node.image.file.url}   mb={1} />
                                            </Box>
                                            {/* <Box mb={1} >
                                                <img className={classes.image} src={item.node.image.file.url} />
                                            </Box> */}
                                            <Typography  >
                                                <Box fontWeight={900}  fontSize="h6.fontSize"  > { item.node.name }</Box>
                                                <span className={classes.line} ></span>
                                            </Typography>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                </Grid>
            </Box>
        </Container>
    )
}