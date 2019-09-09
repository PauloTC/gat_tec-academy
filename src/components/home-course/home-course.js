import React from 'react'
import { 
        Container, 
        Box, 
        Button,
        Paper, 
        Grid,
        Typography } from '@material-ui/core';
import Styles from './home-course.module.scss'


const HomeCourse = (props) => {
    return(
        <Paper className={ Styles.course__card }  elevation="0" >
            <Typography> 
                <Box fontSize="subtitle2.fontSize">mar., 10 sept.</Box>
                <Box  className={Styles.course__title} fontSize="h6.fontSize" fontWeight="fontWeightBold" > {props.title} </Box>
                <Box  fontSize="subtitle1.fontSize" > {props.exhibitor} </Box>
            </Typography>
            <Grid  container justify="space-between" >
                <Typography variant="subtitle2">mar., 10 sept.</Typography>
                <Button variant="outlined" color="primary"> Asistiré </Button>
            </Grid>
        </Paper>
    )
}

export default HomeCourse