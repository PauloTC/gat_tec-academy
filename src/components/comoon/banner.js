import React, { Fragment } from "react"
import bannergoogle from "../../assets/media/banner_2.png"
import { 
    Box, 
    Button,
    Container,
    CardContent,
    Card,
    CardMedia,
    Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import building  from '../../assets/media/building.svg'


const useStyles = makeStyles(theme =>({
    container: {
        overflow: 'hidden'
    },
    banner: {
        height: 400
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
            width: "100%"
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
const Banner = () => {
    const classes = useStyles();
    return (
            <Fragment>
                <Box position="relative" >
                    <Card  className={classes.container}  >
                        <CardMedia  className={classes.banner} image={ bannergoogle }  />
                        <CardContent className={classes.text}  >
                            <Container className={classes.containertext} maxWidth="md"  >
                                <Typography variant="h4">
                                    <Box  fontWeight={700} mb={4}>¿Estás cerca de ganar el <br/> viaje a Silicon Valley?</Box>
                                </Typography>
                                <Button variant="contained" className={classes.button}> Quiero saber más </Button>
                            </Container>
                        </CardContent>
                        <img  className={classes.building}   src={ building }   />
                    </Card>
                </Box>
            </Fragment>
    )
}

export default Banner