import React, { Component, Fragment } from 'react'
import { 
                    Paper, 
                    Typography, 
                    Box, 
                    Button, 
                    Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
	image: {
		margin: 0
	},
	container: {
		padding: '10px 15px 15px 15px'
	},
});


const ActivityItem = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <Grid item xs={12} sm={6}  container direction='column' >
                <Paper  elevation={5} >
                
                    <img className={classes.image} src="http://tinyimg.io/i/tSFDV33.jpeg"  />
                    <Grid container  className={classes.container}  >
                        <Grid xs={12} md={9} item>
                            <Typography> 
                                <Box mb={1}  fontSize="subtitle2.fontSize">mar., 10 sept.</Box>
                                <Box lineHeight={1.2} mb={1}   fontSize="h6.fontSize" fontWeight="fontWeightBold" > Meetup: Time Management Skills </Box>
                                <Box  fontSize="body2.fontSize" > Bruno Díaz </Box>
                            </Typography>
                        </Grid>
                        <Grid  xs={12} md={3} item container justify="flex-end" alignContent="flex-end" >
                            <Button size="small" variant="outlined" color="primary"> Unirme </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Fragment>
    )
}

export default ActivityItem