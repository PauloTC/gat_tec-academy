import React, { Fragment } from 'react';
import {  
    Box, 
    Typography, 
    Grid,
    Container} from '@material-ui/core';
import logo from '../images/logo-tecacademy.png';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    footer: {
        background: "#321063",
        height: 60,
        display: "flex",
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 10,
        position: 'relative'
    },
    text: {
        color: "white"
    }
});


const Footer = (props) => {
    const classes = useStyles();
    return (
        <footer className={ classes.footer } >
            <Container  maxWidth="lg" >
                <Grid  alignItems="center"  justify="space-between" container >
                    <Grid item >
                        <img width={100}  src={logo}  />
                    </Grid>
                    <Grid item>
                        <Typography className={ classes.text }  variant="subtitle2" >© 2019 TecAcademy</Typography>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}


export default Footer