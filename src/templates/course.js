import React from 'react'
import Layout from "../components/layout"
import { graphql } from 'gatsby';
import { 
          Typography,
          Button,
          Container,
          Paper,
          Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CheckIcon from '@material-ui/icons/Check';
import Grid from '@material-ui/core/Grid';
import CloseIcon from '@material-ui/icons/Close';
import HomeCourse from '../components/home-course/home-course';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
    import { Link } from 'gatsby';

const useStyles = makeStyles({
    image: {
        margin: 0,
        borderRadius: 50
    },
    bannerimage: {
        height: 'auto',
        maxWidth: '100%'
    },
    aside: {
        '& a' : {
            display: 'flex'
        }
    }
});
 

export const query = graphql`
    query(  $slug: String! ) {
        course: contentfulCourse ( slug: { eq: $slug }) {
            id
            title
            exhibitor
            exhibitorJob
            exhibitorImage {
                file {
                    url
                }
            }
            inscriptionLink
            fecha1
            image {
                file {
                    url
                }
            }
            description {
                json
            }
        },
        carousel:allContentfulCourse(filter: { showHomeCarousel:{ eq: true }  }){
            edges {
                node {
                    id
                    title
                    slug
                    exhibitor
                    fecha1
                }
            }
        },
    }
`
const Course = (props) => {
    const classes = useStyles();
    
	return (
		<Layout>
            <Container maxWidth="lg" spacing={5}  >
                <Grid  container  justify="space-between" >
                    <Grid item xs={12}  md={7}  >
                        <Box my={3}  >
                            <Typography> 
                                <Box  fontSize="body2.fontSize" > { props.data.course.fecha1 } </Box>
                                <Box  fontSize="h5.fontSize"  fontWeight={900} >  {props.data.course.title}  </Box>
                            </Typography>
                            <Grid  container spacing={2}  alignItems='center' >
                                <Grid item >
                                    <img  alt="exhibitor"  className={classes.image}  height={45}  width={45} src={ props.data.course.exhibitorImage.file.url }  />
                                </Grid>
                                <Grid  item >
                                    <Box my={1} >
                                        <Typography  variant="body2" > 
                                            <Box>Dictado por: {props.data.course.exhibitor}</Box>
                                            <Box> Puesto: {props.data.course.exhibitorJob}</Box>
                                            <Box> Evento público </Box>
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box  my={3} >
                            <Box  mb={3} >
                                <img  alt="courseimg" className={ classes.bannerimage } src={ props.data.course.image.file.url }  />
                            </Box>
                            <Paper  elevation={0}  >
                                <Typography gutterBottom>
                                    <Box   fontSize="subtitle1" fontWeight={700}  >Detalles</Box>  
                                </Typography>
                                <Typography  variant="body2" >  { documentToReactComponents(props.data.course.description.json) }  </Typography>
                            </Paper>
                        </Box>
                    </Grid>
                
                    <Grid item xs={12}  md={4}   >

                    {(() => {
                        if(  props.data.course.inscriptionLink ){
                            return(
                                <Grid item xs={12}   className={classes.aside}   >
                                    <Box  my={3} >
                                        <Typography> 
                                            <Box   fontWeight={700}  fontSize="body2.fontSize" >¿Asistirás?  </Box>
                                        </Typography>
                                    </Box>
                                    <Grid  container spacing={5} > 
                                        <Grid item xs={6} >
                                            <Button  href={ props.data.course.inscriptionLink }  size="small" fullWidth="true" variant="contained" color="secondary" className={classes.button}>
                                                <CheckIcon />
                                            </Button>
                                        </Grid>
                                        <Grid  item xs={6} >
                                            <Button  size="small" fullWidth="true" variant="contained" color="secondary">
                                                <Link to="activities"  >
                                                    <CloseIcon />
                                                </Link>
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            )
                        }else {
                            return (
                                <Grid item xs={12}    className={classes.aside} >
                                    <Box  my={3} >
                                        <Typography> 
                                            <Box   fontWeight={700}  fontSize="body2.fontSize" >¿Asistirás?  </Box>
                                        </Typography>
                                    </Box>
                                    <Grid> 
                                        <Typography  variant="body2" > 
                                                <Box my={3}  >No es necesario registrarte para asistir a este evento</Box> 
                                        </Typography>
                                    </Grid>
                                </Grid>
                            )
                        }
                            
                    })()}

                </Grid>


                    <Box width={1}  my={4} >
                        <Typography gutterBottom>
                            <Box  fontSize="subtitle1" fontWeight={700}  >Próximos eventos </Box>  
                        </Typography>
                        <Box  my={2}>
                            <Grid   xs={12}  container  spacing={2}  >
                                {	
                                    props.data.carousel.edges.map( edge =>  {
                                        if( edge.node.id  !==  props.data.course.id   ){
                                            return (
                                                <Grid  item  xs={12} sm={6}  md={4} >
                                                    <HomeCourse key={edge.node.id}  edge={edge} />
                                                </Grid>
                                            )
                                        }
                                    } )
                                }
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Container>
		</Layout>
	)
}


export default Course