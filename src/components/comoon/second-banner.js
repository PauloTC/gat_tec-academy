import React from "react"
import { makeStyles } from '@material-ui/core/styles';

import { 
    Box, 
    Container,
    CardContent,
    Card,
    CardMedia,
    Grid,
    Typography } from '@material-ui/core';
import { useStaticQuery, graphql } from 'gatsby';

const useStyles = makeStyles(theme =>({
    banner: {
        height: 400,
        [theme.breakpoints.down('md')]: {
            height: 350
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
    }
}));


const SecondBanner = (props) => {
    const classes = useStyles();

    const data = useStaticQuery( graphql`
        query {
            allContentfulBanner ( filter: { view : { eq : "Nosotros" } } ) {
                edges {
                    node {
                        principalText
                        secondaryText
                        imagebg {
                            file {
                                url
                            }
                        }
                    }
                }
            }
        }
    `)


    return (
        <Card  className={ classes.bannercontainer } >
    
                <CardMedia  className={classes.banner} image={ data.allContentfulBanner.edges[0].node.imagebg.file.url }  />
                <CardContent className={classes.textbanner}  >
                    <Container maxWidth="md"  >
                        <Grid height={400} container justify="center" alignItems="center" >
                            <Typography align='center' >
                            
                                <Box className={classes.title} fontSize="h4.fontSize" fontWeight="fontWeightLight">  { data.allContentfulBanner.edges[0].node.principalText } </Box>
                                <Box mt={1} fontSize="h6.fontSize"  fontWeight="fontWeightBold" > { data.allContentfulBanner.edges[0].node.secondaryText } </Box>
                            </Typography>
                        </Grid>
                    </Container>
                </CardContent>
        </Card>
    )
}


export default SecondBanner