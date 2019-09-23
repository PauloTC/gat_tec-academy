import React, { Fragment } from "react"
import { 
    Grid, 
    Typography,
    Button,
    Container,
    CardMedia,
    Card,
    Paper,
    Box, 
    CardContent} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import SecondPlace from '../../assets/media/puesto2.jpg'
import rocket from '../../assets/media/rocket.svg'
import BackgroundMedia from  '../../assets/media/fondo.jpg'
import GroupImage from '../../assets/media/grouprize.jpg'


const useStyles = makeStyles(theme =>({
    container: {
        background: "#f9f9f9"
    },
    image: {
        width: 304,
        height: 300,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        [theme.breakpoints.down('md')]: {
            display: "none"
		},
    },
    after: {
        padding: "20px 15px"
    },
    title: {
        color: "#321063",
        lineHeight: "35px"
    },
    border: {
        borderRadius: 8
    }
}));

const GroupPrize = () => {
    const classes = useStyles();
    
    return (
        <Box  py={3} className={ classes.container } >
            <Container maxWidth="md" >
                <Box my={5} >
                    <Grid container spacing={2} >
                        <Grid sm={12} md={4} item >
                            <Typography variant="h5" >
                                <Box mb={3} fontWeight={900}  > Premio grupal </Box> 
                            </Typography>
                        </Grid>
                        <Grid  sm={12} md={8}  >
                            <Paper  className={ classes.border }  elevation={5} >
                                <Grid container  >
                                    <Grid item container className={ classes.after }  alignItems='center' sm={12} md={6} >
                                        <Typography>
                                            <Box mb={1} fontSize="subtitle1.fontSize" fontWeight={900} > Premio al mejor grupo</Box>  
                                            <Box className={ classes.title } mb={1} fontSize="h5.fontSize" fontWeight={900} > After Office <br /> en el 15</Box>  
                                            <Box fontSize="subtitle2.fontSize"  > Aprender en equipo es muy importante, por eso los premiamos con una tarde de Happy Hour para celebrar sus conocimientos y seguir compartiendo experiencias.
                                                <br />
                                                <br />
                                                ¡Anima a tu equipo a participar</Box>  
                                        </Typography>
                                    </Grid>
                                    <Grid item sm={12}  md={6}>
                                        <CardMedia  className={ classes.image } image={ GroupImage } />
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default GroupPrize