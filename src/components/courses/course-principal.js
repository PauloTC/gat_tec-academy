import React from 'react'
import { Container, Box, CardMedia, Button, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    image: {
        margin: 0,
        height: 300,
        borderRadius: 5,
        backgroundPosition: 'left'
    },
    exhibitorimg : {
        borderRadius: 50,
        margin: 0,
    },
    button: {
        textTransform: 'capitalize',
        background: '#ff00a6',
        color: 'white'
    }
});

const CoursePrincipal = (props) => {
    const classes = useStyles();
    return (
            <Grid  spacing={3} container >
                <Grid  xs={12} md={7}  item >
                    <CardMedia className={classes.image}  image={props.image}  />
                    {/* <img   height="320"  src= alt=""/> */}
                </Grid>
                <Grid xs={12} md={5} item container  alignItems="flex-start"   direction="column" >
                    {/* <h4 className="g-subtitle container-bottom mb-4"></h4> */}
                    <Typography > 
                        <Box  gutterBottom fontSize="subtitle2.fontSize"> SET 19   </Box>
                        <Box  gutterBottom fontSize="h5.fontSize" fontWeight="fontWeightBold" > { props.title }  </Box>
                        <Box  my={1} gutterBottom fontSize="subtitle2.fontSize" >7PM  |  Domos Art, Lima</Box>
                        <Grid gutterBottom container alignItems="center"  >
                            <img  className={classes.exhibitorimg} width="50" height="48" src={ props.exhibitorImage }  alt="exhibitorimage" />
                            <Grid  item >
                                <Box mx={2} fontSize="subtitle2.fontSize"> { props.exhibitor }  </Box>
                            </Grid>
                        </Grid>
                    </Typography>
                    <Typography    variant="body2" >
                        <Box  my={2} >{ props.description }</Box>   
                    </Typography>
                    {/* <p className="font-size-14"> </p> */}

                    <Button variant="contained" className={classes.button} > Inscríbete ahora </Button>
                    
                    {/* <a className="nav-link btn-external active" target="_blank" href="https://miscursosucb.belcorp.biz/course/view.php?id=2159" >Inscríbete ahora</a> */}
                </Grid>
            </Grid>
    )
}

export default CoursePrincipal