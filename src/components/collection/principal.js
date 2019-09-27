import React, { PureComponent } from 'react'
import { 
    Container, 
    Box ,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid, 
    Typography,
    Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import image from '../../assets/media/collection.png'


const useStyles = makeStyles(theme => ({
    image: {
        maxWidth: '100%',
        height: 'auto'
    },
    date: {
        color: '#ff00a6'
    },
    title: {
        lineHeight: "100%"
    },
    button: {
        textTransform: 'Capitalize'
    },
    container: {
        boxShadow: '1px 1px 32px 0 rgba(50, 16, 99, 0.19);'
    },
    cardtext : {
        padding: 15
    }
}))



const PrincipalCard = () => {
	const classes = useStyles();
    return (
        <Box mb={7} >
            <Grid  className={ classes.container } container>
                <Grid container alignItems="center"   md={7} item >
                    <img className={ classes.image }  alt="principalcollection" src={image} />
                </Grid>
                <Grid className={ classes.cardtext }  md={5} item  container alignItems="center"  >
                    <Typography>
                        <Box className={ classes.date }  mb={1} fontSize="subtitle2.fontSize" >12 Sept 2019</Box>
                        <Box className={ classes.title }  fontWeight={900} fontSize="h4.fontSize" mb={2} >Pizza Nights: Guvery</Box>
                        <Box fontSize="subtitle1.fontSize" mb={1} >La plataforma que conecta a viajeros con personas que desean comprar productos en USA viene a contarnos sobre su experiencia en esta aventura.</Box>
                        <Box fontWeight={700} fontSize="subtitle1.fontSize" >Bruno Díaz</Box>
                        <Grid mt={1} container justify="flex-end" >
                            <Button variant="outlined" color="secondary" className={classes.button}> Ver más </Button>
                        </Grid>
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default PrincipalCard