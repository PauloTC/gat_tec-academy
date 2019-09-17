import React from 'react'
import { 
    Box, 
    Button,
    Container,
    CardContent,
    Card,
    CardMedia,
    Paper, 
    Grid,
    Typography } from '@material-ui/core';
import karen from '../assets/media/karen.jpg'
import andrea from '../assets/media/andrea.jpg'
import camila from '../assets/media/camila.jpg'
import sofia from '../assets/media/sofia.jpg'
import priscila from '../assets/media/priscila.jpg'
import luisb from '../assets/media/luisb.jpg'
import daniel from '../assets/media/daniel.jpg'
import luisn from '../assets/media/luisn.jpg'
import carla from '../assets/media/carla.jpg'
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    image: {
        maxWidth: '100%',
        height: 'auto'
    },
    line: {
        height: 3,
        width: 50,
        display: "block",
        background: "#ff00a6",
        marginTop: -2
    }
});



const Ambassadors = () => {
    const classes = useStyles();

    const images = [
        { name: 'Karen Valdivia', photo: karen  },
        { name: 'Andrea Pacheco', photo: andrea  },
        { name: 'Camila Rodríguez', photo: camila  },
        { name: 'Sofía Shimabukuro', photo: sofia  },
        { name: 'Priscila Elías', photo: priscila  },
        { name: 'Luis Bendezú', photo: luisb  },
        { name: 'Daniel Quispe', photo: daniel  },
        { name: 'Luis Nieto', photo: luisn  },
        { name: 'Carla Silva', photo: carla  },
    ]
    
    return (
        <Container  maxWidth="md" >
            <Box my={8} >
                <Grid container spacing={1} >
                        <Grid md={4} item >
                            <Typography variant="h5" >
                                <Box fontWeight="fontWeightBold" >Nuestros </Box>
                                <Box fontWeight="fontWeightBold" >embajadores</Box>
                            </Typography>
                            <Box my={3} >
                                <Typography variant="body2" >Un grupo de personas apasionadas y entusiastas. ¡Conócelos!</Typography>
                            </Box>
                        </Grid>
                        <Grid md={8} container spacing={2}  item >
                            {
                                images.map( item => {
                                    return (
                                        <Grid  key={item.photo}  md={4} item > 
                                            <Box mb={1} >
                                                <img className={classes.image} src={item.photo} />
                                            </Box>
                                            <Typography  >
                                                <Box fontWeight={900}  fontSize="h6.fontSize"  > { item.name }</Box>
                                                <span className={classes.line} ></span>
                                            </Typography>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Ambassadors