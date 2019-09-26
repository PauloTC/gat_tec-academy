import React from 'react'
import { Link } from 'gatsby';
// import Styles from './course.module.scss'
import {  
                    Box, 
                    Typography, 
                    Grid, 
                    Card, 
                    CardActionArea, 
                    CardMedia, 
                    CardContent,
                    CardActions,
                    Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    media: {
        height: 150,
    },
    image: {
        borderRadius: 50,
        margin: 0
    },
    button: {
        '& a' : {
            textDecoration: 'none',
            color: '#ff00a6',
            textTransform: 'capitalize'
        }
    }
});


const Course = (props) => {
    const classes = useStyles();
    return(
        <Grid item xs={12} sm={6}  md={4} >
            <Card>
                <CardActionArea>
                    <CardMedia className={classes.media} image={ props.image }   />
                    <CardContent>
                        <Typography variant="h6">
                            <Box> { props.title }  </Box>
                            <Box  my={1} gutterBottom fontSize="subtitle2.fontSize" >{ props.fecha }</Box>
                            
                            <Grid gutterBottom container alignItems="center"  >
                                <img  className={classes.image} width="24"  src={ props.exhibitorImage }  alt="exhibitorimage" />
                                <Grid item >
                                    <Box mx={2} fontSize="subtitle2.fontSize"> { props.exhibitor }  </Box>
                                </Grid>
                            </Grid>

                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button className={classes.button} size="small" color="secondary"> 
                        <Link to={`/courses/${ props.slug}`} > Ver detalle </Link>  </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Course
