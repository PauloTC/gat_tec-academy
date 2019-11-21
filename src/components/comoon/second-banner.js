import React, { Fragment } from "react"
import { makeStyles } from '@material-ui/core/styles';
import bannerimage from "../../assets/media/banner.jpg"

import { 
    Box, 
    Container,
    CardContent,
    Card,
    CardMedia,
    Grid,
    Typography } from '@material-ui/core';

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
    return (
        <Card  className={ classes.bannercontainer } >
                {
                    (() => {
                        if( props.data.imagebg != null ) {
                            return (
                                <CardMedia  className={classes.banner} image={ props.data.imagebg.file.url }  />
                            )
                        }else {
                                return (
                                    <CardMedia  className={classes.banner} image={ bannerimage }  />
                                )
                        }
                    })()
                }
                
                <CardContent className={classes.textbanner}  >
                    <Container maxWidth="md"  >
                        <Grid height={400} container justify="center" alignItems="center" >
                            <Typography align='center' >
                                {
                                    (() => {
                                        if( props.data.principalText ) {
                                            return (
                                                <Box className={classes.title} fontSize="h4.fontSize" fontWeight="fontWeightLight">  { props.data.principalText } </Box>
                                            )
                                        }else {
                                            return (
                                                <Box className={classes.title} fontSize="h4.fontSize" fontWeight="fontWeightLight">  No contiene data </Box>
                                            )
                                        }
                                    })()
                                }
                                {
                                    (() => {
                                        if( props.data.secondaryText ) {
                                            return (
                                                <Box mt={1} fontSize="h6.fontSize"  fontWeight="fontWeightBold" > { props.data.secondaryText } </Box>
                                            )
                                        }else {
                                            return (
                                                <Box mt={1} fontSize="h6.fontSize"  fontWeight="fontWeightBold" > No tiene data </Box>
                                            )
                                        }
                                    })()
                                }
                               
                            </Typography>
                        </Grid>
                    </Container>
                </CardContent>
        </Card>
    )
}


export default SecondBanner