import React,  { useState, useCallback }  from 'react'
import SecondBanner from '../components/comunity/bannertop'
import Layout from '../components/layout'
import { 
    Container,
    Typography,
    Grid,
    Box  } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";


const useStyles = makeStyles({
    image: {
        margin: 0,
        borderRadius: 50
    },
    iframe: {
        border: "1px solid #CCC",
        borderWidth: 1,
        marginBottom: 5,
        maxWidth: "100%"
    },
    slide: {
        marginBottom: 5
    },
    video: {
        maxWidth: '100%'
    }
});

export const data = graphql`
    query(  $slug: String! ) {
        course: contentfulCourse ( slug: { eq: $slug }) {
            title
            exhibitor
            exhibitorJob
            presentationPpt
            exhibitorImage {
                file {
                    url
                }
            }
            aboutEvent {
                content {
                    content {
                        value
                    }
                }
            }
            aboutExhibitor {
                content{
                    content {
                        value
                    }
                } 
            }
            fecha1
            image {
                file {
                    url
                }
            }
            gallery {
                file {
                    fileName
                    url
                    details {
                        image {
                            width
                            height
                        }
                    }
                }
            }
            description {
                content {
                    content {
                        value
                    }
                }
            }
            video
            principalText
            secondaryText
            imagebg {
                file {
                    url
                } 
            }
        }
    }
`



const Collection = (props) => {
    const classes = useStyles();

    const photos = props.data.course.gallery.map((e) => {
        return (
            {
                src : e.file.url,
                width : e.file.details.image.width,
                height  :  e.file.details.image.height

            }
        )
    })

      

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const openLightbox = useCallback((event, { photo, index }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };

    return(
        <Layout>

            <SecondBanner  data= { props.data.course } />

            <Container maxWidth="lg" >
                <Box  my={8}>
                    <Grid  spacing={5} container >
                        <Grid item md={5} >
                            <Typography>
                                <Box mb={2} fontSize="h6.fontSize"  fontWeight={900}  >Sobre el evento</Box>
                                <Grid container spacing={4} wrap="nowrap" >
                                    <Grid item>
                                        <Box fontSize="subtitle2.fontSize" > { props.data.course.aboutEvent.content[0].content[0].value } </Box>
                                    </Grid>
                                </Grid>
                            </Typography>
                        </Grid>
                        <Grid item md={7} >
                            <Typography>
                                <Box mb={2} fontSize="h6.fontSize"  fontWeight={900}  >Sobre el ponente</Box>
                                <Grid container spacing={4} wrap="nowrap" >
                                    <Grid item>
                                        <Box fontSize="subtitle2.fontSize" >  { props.data.course.aboutExhibitor.content[0].content[0].value } </Box>
                                    </Grid>
                                    <Grid item>
                                        <img alt={props.data.course} className={ classes.image } width={95} src={props.data.course.exhibitorImage.file.url} />
                                    </Grid>
                                </Grid>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box  my={8}>
                    <Grid container  justify="space-between" className={ classes.container } >
                        <Grid  item  md={4} >
                            <Typography>
                                <Box mb={2} fontSize="h5.fontSize"  fontWeight={900}  >Presentacion</Box>
                            </Typography>
                        </Grid>
                        <Grid  container justify="flex-end"  item md={8}>
                            {   (() => {
                                  if( props.data.course.presentationPpt ) {
                                    return (
                                        <iframe  title={ props.data.course.title }  className={ classes.iframe } src={ props.data.course.presentationPpt } width="595" height="335" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"  allowfullscreen> </iframe> 
                                    )
                                }else {
                                        return (
                                            <div> No hay data para mostrar</div>
                                        )
                                }

                            })()
                              
                            }
                           
                        </Grid>
                    </Grid>
                </Box>
                <Box  my={8}>
                    <Grid container  justify="space-between" className={ classes.container } >
                        <Grid md={4} item >
                            <Typography>
                                <Box mb={2} fontSize="h5.fontSize"  fontWeight={900}  >Fotos</Box>
                            </Typography>
                        </Grid>
                        <Grid md={8} item >
                            <Gallery photos={ photos } onClick={openLightbox}/>
                            <ModalGateway>
                                {viewerIsOpen ? (
                                <Modal onClose={closeLightbox}>
                                    <Carousel
                                        currentIndex={currentImage}
                                        views={photos.map(x => ({
                                            ...x,
                                            srcset: x.srcSet,
                                            caption: x.title
                                    }))}
                                    />
                                </Modal>
                                ) : null}
                            </ModalGateway>
                        </Grid>
                    </Grid>
            </Box>
                <Box  my={8}>
                    <Grid container  justify="space-between" className={ classes.container } >
                        <Grid md={4} item >
                            <Typography>
                                <Box mb={2} fontSize="h5.fontSize"  fontWeight={900}  >Videos</Box>
                            </Typography>
                        </Grid>
                        <Grid md={8} item >
                            { (() => {
                                if( props.data.course.video ) {
                                    return (
                                        <iframe className={ classes.video } src={ props.data.course.video } width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                                    )
                                } else {
                                    return (
                                        <div> No hay data para mostrar</div>
                                    )
                                }
                            })() 
                            }
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Layout>
    )
}

export default Collection