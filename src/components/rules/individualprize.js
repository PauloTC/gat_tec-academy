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
import { useStaticQuery, graphql } from 'gatsby';

const useStyles = makeStyles(theme =>({
    image: {
        maxWidth: '100%',
        height: 'auto'
    },
    cardcontainer: {
        display: 'flex',
        alignItems: 'center',
        height: 150,
        [theme.breakpoints.down('xs')]: {
            width: "100%",
            justifyContent: 'space-around'
		},
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

    const data = useStaticQuery(graphql`
    query {
        individual: allContentfulPrizes( filter : { place : { eq : "1er puesto" } } ) {
            edges {
                node {
                    place
                    text
                    title
                    prizeImage {
                        file {
                            url
                        }
                    }
                }
            }
        },
        multiple:allContentfulPrizes ( filter : { title : { eq : null } } ) {
            edges {
                node {
                    place
                    text
                    prizeImage {
                        file {
                            url
                        }
                    }
                }
            }
        }
    }

    `)


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
                                            <Box fontSize="subtitle1.fontSize" fontWeight={900} >  { data.individual.edges[0].node.place } </Box>  
                                            <Box fontSize="h5.fontSize" fontWeight={900} > { data.individual.edges[0].node.title }  </Box>  
                                            <Box fontSize="subtitle2.fontSize"  > { data.individual.edges[0].node.text } </Box>  
                                        </Typography>
                                    </Grid>
                                    <Grid item sm={5} >
                                        <img  alt="rocket" className={classes.image} src={rocket} /> 
                                    </Grid>
                                </Grid>
                            </CardMedia>
                        </Paper>
                        <Box mt={3} >
                            <Grid container spacing={4} >
                                { data.multiple.edges.map(  (edge, index) =>  {
                                        return (
                                            <Grid id={ index }  item xs={12} sm={6} >
                                                <Paper >
                                                    <Grid container justify="center" >
                                                        <Box  className={ classes.cardcontainer } p={2} >
                        
                                                                <Typography>
                                                                    <Box className={ classes.textcolor } mb={1}  fontSize="subtitle2.fontSize"  fontWeight={900} >{ edge.node.place } :</Box>
                                                                    <Box fontSize="subtitle1.fontSize" >{ edge.node.text } </Box>
                                                                </Typography>  
                                                                <img   className={classes.image} src={ edge.node.prizeImage.file.url } alt="second"/>
                                                        </Box>
                                                    </Grid>
                                                </Paper>
                                            </Grid>
                                        )
                                    })
                                }
                                
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
