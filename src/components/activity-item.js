import React, {  Fragment } from 'react'
import { 
                    Card,
                    Paper,
                    CardActions,
                    Typography, 
                    Box,
                    CardMedia,
                    CardContent,
                    Button, 
                    Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
	image: {
		margin: 0
	},
    button: {
        textTransform: "capitalize"
    },
    card: {
        height: 305,
        backgroundSize: 'contain'
    }
});


const ActivityItem = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <Grid item xs={12} sm={6}  container direction='column' >
                <Card >
                    <CardMedia className={classes.card}  image="http://tinyimg.io/i/tSFDV33.jpeg" />
                    <Grid container  alignItems="flex-end"  >
                        <Grid item >
                            <CardContent>
                                <Typography> 
                                    <Box mb={1}  fontSize="subtitle2.fontSize">mar., 10 sept.</Box>
                                    <Box lineHeight={1.2} mb={1}   fontSize="h6.fontSize" fontWeight="fontWeightBold" > Meetup: Time Management Skills </Box>
                                    <Box  fontSize="body2.fontSize" > Bruno Díaz </Box>
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid item >
                            <Box mb={2} >
                                <CardActions>
                                        <Button className={classes.button} size="small" variant="outlined" color="primary"> Unirme </Button>
                                </CardActions>
                            </Box>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        </Fragment>
    )
}

export default ActivityItem