import React from "react"
import { 
    Grid, 
    Typography,
    Container,
    CardMedia,
    Paper,
    Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import GroupImage from '../../assets/media/grouprize.jpg'


const useStyles = makeStyles(theme =>({
    container: {
        background: "#f9f9f9"
    },
    image: {
        width: 315,
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
        borderRadius: 8,
        boxShadow: '1px 1px 16px 0 rgba(50, 16, 99, 0.1)'
    }
}));

const GroupPrize = () => {
    const classes = useStyles();
    
    return (
        <Box  py={3} className={ classes.container } >
            <Container maxWidth="lg" >
                <Box my={5} >
                    <Grid container spacing={2} >
                        <Grid sm={12} md={4} item >
                            <Typography variant="h5" >
                                <Box mb={3} fontWeight={900}  > Premio grupal </Box> 
                            </Typography>
                        </Grid>
                        <Grid  sm={12} md={8}  >
                            <Paper  className={ classes.border }  elevation={0} >
                                <Grid container  >
                                    <Grid item container className={ classes.after }  alignItems='center' md={12} lg={6} >
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