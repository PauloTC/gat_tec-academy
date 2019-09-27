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


const SecondBanner = () => {
    const classes = useStyles();
    return (
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
    )
}


export default SecondBanner