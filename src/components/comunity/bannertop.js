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

const useStyles = makeStyles(theme =>({
    banner: {
        height: 400,
        position: 'relative',
        [theme.breakpoints.down('md')]: {
            height: 350
        },
        '&::before' : {
            content: "''",
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            background: "#000",
            opacity: 0.4
        }
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
    
                <CardMedia  className={classes.banner} image={ props.data.imagebg.file.url }  />
                <CardContent className={classes.textbanner}  >
                    <Container maxWidth="md"  >
                        <Grid height={400} container justify="center" alignItems="center" >
                            <Typography align='center' >
                            
                                <Box className={classes.title} fontSize="h4.fontSize" fontWeight="fontWeightLight">  { props.data.principalText } </Box>
                                <Box mt={1} fontSize="h6.fontSize"  fontWeight="fontWeightBold" > { props.data.secondaryText } </Box>
                            </Typography>
                        </Grid>
                    </Container>
                </CardContent>
        </Card>
    )
}


export default SecondBanner