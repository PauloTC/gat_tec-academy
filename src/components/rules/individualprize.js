import React, { Fragment } from "react"
import { 
    Grid, 
    Typography,
    Container,
    CardMedia,
    Paper,
    Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import SecondPlace from '../../assets/media/puesto2.jpg'
import  ThirdPlace from '../../assets/media/puesto3.jpg'
import rocket from '../../assets/media/rocket.svg'
import BackgroundMedia from  '../../assets/media/fondo.jpg'

const useStyles = makeStyles(theme =>({
    image: {
        maxWidth: '100%',
        height: 'auto'
    },
    cardcontainer: {
        display: 'flex',
        alignItems: 'center',
        height: 150
    },
    textcolor: {
        color: '#321063'
    },
    paper: {
        boxShadow: "1px 1px 16px 0 rgba(50, 16, 99, 0.1)",
        border: "1px solid #eae7ef"
    },
    media: {
        backgroundSize: 'contain',
        backgroundPosition: 'bottom',
        padding: "0 15px",
        [theme.breakpoints.down('md')]: {
            padding: "20px 15px"
		},
    }
}));

const IndividualPrize = () => {
    const classes = useStyles();
    return(
        <Fragment>
            <Container maxWidth="lg" >
            <Box  my={5} >
                <Grid container spacing={2} >
                    <Grid md={4}  item >
                        <Typography variant="h5" >
                            <Box mb={3} fontWeight={900}  > Premio individual</Box>  
                        </Typography>
                    </Grid>
                    <Grid md={8}  >
                        <Paper  className={ classes.paper }  elevation={0}  >
                            <CardMedia className={ classes.media }  image={BackgroundMedia} >
                                <Grid  container alignItems="center" >
                                    <Grid item  sm={7} >
                                        <Typography>
                                            <Box fontSize="subtitle1.fontSize" fontWeight={900} > 1er puesto:</Box>  
                                            <Box fontSize="h5.fontSize" fontWeight={900} > Viaje y Tour a Silicon Valley</Box>  
                                            <Box fontSize="subtitle2.fontSize"  > Aprovecharás de las empresas top en una experiencia inigualable. Viaje, hospedaje y entradas incluidos.</Box>  
                                        </Typography>
                                    </Grid>
                                    <Grid item sm={5} >
                                        <img className={classes.image} src={rocket} /> 
                                    </Grid>
                                </Grid>
                            </CardMedia>
                        </Paper>
                        <Box mt={3} >
                            <Grid container spacing={4} >
                                <Grid  item xs={12} sm={6} >
                                    <Paper >
                                        <Grid container justify="center" >
                                            <Box  className={ classes.cardcontainer } p={2} >
            
                                                    <Typography>
                                                        <Box className={ classes.textcolor } mb={1}  fontSize="subtitle2.fontSize"  fontWeight={900} >2do puesto:</Box>
                                                        <Box fontSize="subtitle1.fontSize" >$1,000 para estudios</Box>
                                                    </Typography>  
                                            
                                                    <img  width={200} className={classes.image} src={SecondPlace} alt="second"/>
                                            </Box>
                                        </Grid>
                                    </Paper>
                                </Grid>
                                <Grid  item xs={12} sm={6} >
                                    <Paper >
                                        <Grid container  justify="center"  >
                                            <Box  className={ classes.cardcontainer } p={2} >
            
                                                    <Typography>
                                                        <Box className={ classes.textcolor } mb={1}  fontSize="subtitle2.fontSize"  fontWeight={900} >3er y 4to puesto:</Box>
                                                        <Box fontSize="subtitle1.fontSize" >$500 para estudios</Box>
                                                    </Typography>  
                                            
                                                    <img  width={200} className={classes.image} src={ThirdPlace} />
                                            </Box>
                                        </Grid>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    </Fragment>
    )

}

export default IndividualPrize
