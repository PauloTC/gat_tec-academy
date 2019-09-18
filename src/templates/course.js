import React from 'react'
import Layout from "../components/layout"
import { graphql } from 'gatsby';
import { 
          Grid, 
          Typography,
          Button,
          Container,
          CardMedia,
          Paper,
          Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import HomeCourse from '../components/home-course/home-course';


const useStyles = makeStyles({
    image: {
        margin: 0,
        borderRadius: 50
    },
    card: {
        height: 400
    }
});


export const query = graphql`
    query(  $slug: String! ) {
        course: contentfulCourse ( slug: { eq: $slug }) {
            title
            exhibitor
            exhibitorJob
            exhibitorImage {
                file {
                    url
                }
            }
            image {
                file {
                    url
                }
            }
            description {
                content {
                    content {
                        value
                    }
                }
            }
        },
        carousel:allContentfulCourse(filter: { showHomeCarousel:{ eq: true }  }){
            edges {
                node {
                    id
                    title
                    slug
                    exhibitor
                }
            }
        },
    }
`
const Course = (props) => {
    const classes = useStyles();
	return (
		<Layout>
            <Container maxWidth="md" spacing={5}  >
                <Grid  container  justify={"space-between"} >
                    <Grid item xs={12}  md={7}  >
                        <Box my={3}  >
                            <Typography> 
                                <Box  fontSize="body2.fontSize" >sábado, 14 de septiembre de 2019</Box>
                                <Box  fontSize="h5.fontSize"  fontWeight={900} >  {props.data.course.title}  </Box>
                            </Typography>
                            <Grid  container spacing={2}  alignItems='center' >
                                <Grid item >
                                    <img   className={classes.image}  height={45}  width={45} src={ props.data.course.exhibitorImage.file.url }  />
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
                                <CardMedia className={classes.card}  image={ props.data.course.image.file.url } />
                            </Box>
                            <Paper  elevation={0}  >
                                <Typography gutterBottom>
                                    <Box  fontSize="subtitle1" fontWeight={700}  >Detalles</Box>  
                                </Typography>
                                <Typography  variant="body2" >  { props.data.course.description.content[0].content[0].value }  </Typography>
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item xs={12}  md={4}   >
                        <Box  my={3} >
                            <Typography> 
                                <Box fontWeight={700}  fontSize="body2.fontSize" >¿Asistirás?  </Box>
                            </Typography>
                        </Box>
                        <Grid  container spacing={5} > 
                            <Grid item xs={6} >
                                <Button size="small" fullWidth="true" variant="contained" color="secondary" className={classes.button}>
                                    <CheckIcon />
                                </Button>
                            </Grid>
                            <Grid item xs={6} >
                                <Button size="small" fullWidth="true" variant="contained" color="secondary" className={classes.button}>
                                    <CloseIcon />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Box width={1}  my={4} >
                        <Typography gutterBottom>
                            <Box  fontSize="subtitle1" fontWeight={700}  >Próximos eventos</Box>  
                        </Typography>
                        <Box  my={2}>
                            <Grid   xs={12}  container  spacing={2}  >
                                {	
                                    props.data.carousel.edges.map( edge =>  {
                                        return (
                                            <Grid  item md={4} >
                                                <HomeCourse key={edge.node.id}  edge={edge} />

                                            </Grid>
                                        )
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