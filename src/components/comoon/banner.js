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
import { Link } from 'gatsby';

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
    return (
            <Fragment>
                <Box position="relative" >
                    <Card  className={classes.container}  >
                        <CardMedia  className={classes.banner} image={ props.data.imagebg.file.url }  />
                        <CardContent className={classes.text}  >
                            <Container className={classes.containertext} maxWidth="lg"  >
                                <Typography className={classes.title} variant="h4">
                                    <Box  fontWeight={700} mb={4}> { props.data.principal } </Box>
                                </Typography>
                                <Button variant="contained" className={classes.button}> 
                                    <Link  to="community" > { props.data.button } </Link>     </Button>
                            </Container>
                        </CardContent>
                        <img    className={`${classes.building}` }   src={ props.data.imageCalada.file.url }   />
                    </Card>
                </Box>
            </Fragment>
    )
}

export default Banner