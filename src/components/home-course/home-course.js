import React from 'react'
import { 
        Box, 
        Button,
        Paper, 
        Grid,
        Typography } from '@material-ui/core';
import Styles from './home-course.module.scss'


const HomeCourse = (props) => {
    return(
        <Grid item xs={12} md={4}>

            <Paper  className={ Styles.course__card }  elevation="5" >
                <Box  mb={3}>
                    <Typography> 
                        <Box fontSize="subtitle2.fontSize">mar., 10 sept.</Box>
                        <Box lineHeight={1.2} mb={1}  className={Styles.course__title} fontSize="h5.fontSize" fontWeight="fontWeightBold" > {props.edge.node.title} </Box>
                        <Box  fontSize="body2.fontSize" > {props.edge.node.exhibitor} </Box>
                    </Typography>
                </Box>
                <Grid  container justify="flex-end" >
                    <Button className={ Styles.course__button } size="small" variant="outlined" color="primary"> Asistiré </Button>
                </Grid>
            </Paper>

        </Grid>
    )
}

export default HomeCourse