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
        <Paper  className={ Styles.course__card }  elevation="5" >
            <Box  mb={3}>
                <Typography> 
                    <Box fontSize="subtitle2.fontSize">mar., 10 sept.</Box>
                    <Box lineHeight={1.2} mb={1}  className={Styles.course__title} fontSize="h5.fontSize" fontWeight="fontWeightBold" > {props.title} </Box>
                    <Box  fontSize="body2.fontSize" > {props.exhibitor} </Box>
                </Typography>
            </Box>
            <Grid  container justify="flex-end" >
                <Button className={ Styles.course__button } size="small" variant="outlined" color="primary"> Asistiré </Button>
            </Grid>
        </Paper>
    )
}

export default HomeCourse