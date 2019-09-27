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

import Subheader from '../../components/subheader'
import { makeStyles } from '@material-ui/core/styles';
import image from '../../assets/media/collection.png'

const useStyles = makeStyles(theme => ({
    date: {
        color: '#ff00a6'
    }
}))
const CardSection = () => {
	const classes = useStyles();
    return (
        <Box>
            <Subheader title="Workshops"  subtitle="" button='Ver workshops' />
            <Box mb={9} >
                <Grid container spacing={3} >
                
                    <Grid item  sm={6} >
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image={image}
                                    title="Contemplative Reptile"
                                    />
                                <CardContent>
                                    <Typography>
                                        <Box mb={1}  fontSize="subtitle2.fontSize"  className={ classes.date } >12 Sept 2019</Box>
                                        <Box mb={1}  fontWeight={900} fontSize="h6.fontSize"  >Meetup: Time Management Skills</Box>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">Gianmarco Ramos</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    
                    <Grid item  sm={6} >
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image={image}
                                    title="Contemplative Reptile"
                                    />
                                <CardContent>
                                    <Typography>
                                        <Box mb={1}  fontSize="subtitle2.fontSize"  className={ classes.date } >12 Sept 2019</Box>
                                        <Box mb={1}  fontWeight={900} fontSize="h6.fontSize"  >Meetup: Time Management Skills</Box>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">Gianmarco Ramos</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    
                </Grid>
            </Box>
        </Box>
    )
}

export default CardSection