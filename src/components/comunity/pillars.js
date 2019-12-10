import React from 'react'
import { 
                Box,
                Container,
                Grid,
                Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ScrollAnimation from 'react-animate-on-scroll';

const useStyles = makeStyles(theme =>({
    
    colorbox: {
        height: 120,
        borderRadius: 8,
        fontWeight: 900,
        color: "white",
        padding: 15,
        display: 'flex',
        alignItems: "center"
    },
    pink: {
        background: "#d14982"
    },
    yellow: {
        background: "#e9c85a"
    },
    green: {
        background: "#6ab7a0"
    },
    blue: {
        background: "#3f7fbe"
    },
    container: {
        background: "#f9f9f9"
    }
}));

const Pillars = () => {
    const classes = useStyles();
    return (
        <Box py={6} className={ classes.container } >
            <Container  maxWidth="lg" >
                <Grid  container spacing={2} >
                    <Grid xs={12}   md={4} item >
                        <ScrollAnimation animateIn="slideInLeft" >
                            <Typography variant="h5" >
                                <Box fontWeight={900} > Nuestros </Box> 
                                <Box fontWeight={900} > pilares </Box> 
                            </Typography>
                        </ScrollAnimation>
                    </Grid>
                    <Grid xs={12} sm={6}  md={4} item >
                        <ScrollAnimation animateIn="slideInRight" >
                            <Typography>
                                <Box  mb={2}  className={ `${classes.colorbox} ${classes.pink}` }   fontSize="h6.fontSize" >Share knowledge and develop capabilities</Box>
                            </Typography>
                            <Typography>
                                <Box className={ `${classes.colorbox} ${classes.yellow}` }   fontSize="h6.fontSize">Expand beyond our boundaries</Box>
                            </Typography>
                        </ScrollAnimation>

                    </Grid>
                    <Grid xs={12} sm={6} md={4} item >
                        <ScrollAnimation animateIn="slideInRight" >
                            <Typography>
                                <Box mb={2} className={ `${classes.colorbox} ${classes.green}` }   fontSize="h6.fontSize" >Increase value to business throught people</Box>
                            </Typography>
                            <Typography>
                                <Box className={ `${classes.colorbox} ${classes.blue}` }   fontSize="h6.fontSize" >Be attractive to the world</Box>
                            </Typography>

                        </ScrollAnimation>
                    </Grid>
                </Grid>
            </Container>

        </Box>
    )
}

export default Pillars