import React from 'react'
import SecondBanner from '../components/comoon/second-banner'
import Layout from '../components/layout'
import { 
    Container,
    Typography,
    Grid,
    Box  } from '@material-ui/core';

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
            fecha1
            fecha2
            fecha3
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
                    fecha1
                }
            }
        },
    }
`

const Collection = (props) => {
    return(
        <Layout>
            <SecondBanner />
            <Container maxWidth="lg" >
                <Typography>
                    <Box fontSize="h5.fontSize"  fontWeight={900} >{props.data.course.title}  </Box>
                </Typography>
                <Box  mt={3} mb={6}>
                    <Grid  spacing={5} container >
                        <Grid item md={5} >
                            <Typography>
                                <Box mb={2} fontSize="h6.fontSize"  fontWeight={900}  >Sobre el evento</Box>
                                <Box fontSize="subtitle2.fontSize" > La Fundación Belcorp nace en el año 2003, con el objetivo de impulsar el desarrollo integral de la mujer, apoyando su realización personal a través de la educación, de forma que esté en capacidad de asumir un rol decisivo en la transformación de la sociedad. </Box>
                            </Typography>
                        </Grid>
                        <Grid item md={7} >
                            <Typography>
                                <Box mb={2} fontSize="h6.fontSize"  fontWeight={900}  >Sobre el ponente</Box>
                                <Grid container spacing={4} wrap="nowrap" >
                                    <Grid item>
                                        <Box fontSize="subtitle2.fontSize" > La Fundación Belcorp nace en el año 2003, con el objetivo de impulsar el desarrollo integral de la mujer, apoyando su realización personal a través de la educación, de forma que esté en capacidad de asumir un rol decisivo en la transformación de la sociedad. </Box>
                                    </Grid>
                                    <Grid item>
                                        <img width={95} src={props.data.course.exhibitorImage.file.url} />
                                    </Grid>
                                </Grid>
                                {/* <Box>    </Box> */}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Layout>
    )
}

export default Collection