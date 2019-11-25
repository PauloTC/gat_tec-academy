import React from 'react'
import SecondBanner from '../components/comoon/second-banner'
import Layout from '../components/layout'
import { 
    Container,
    Typography,
    GridList,
    GridListTile,
    Grid,
    Box  } from '@material-ui/core';
    import { makeStyles } from '@material-ui/styles';

 

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

const tileData = [
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCg20DIyVnRifjJD2abiUAMjRMJ-AnL5tkBgE0gVTamxnZFPXY",
            title: 'Image',
            author: 'author',
            cols: 1,
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCg20DIyVnRifjJD2abiUAMjRMJ-AnL5tkBgE0gVTamxnZFPXY",
            title: 'Image',
            author: 'author',
            cols: 2,
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwb756rYlwX22A63InRqULfMGAgOfAi6-RTHinkbzws-1x8ZUH",
            title: 'Image',
            author: 'author',
            cols: 2,
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCg20DIyVnRifjJD2abiUAMjRMJ-AnL5tkBgE0gVTamxnZFPXY",
            title: 'Image',
            author: 'author',
            cols: 1,
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwb756rYlwX22A63InRqULfMGAgOfAi6-RTHinkbzws-1x8ZUH",
            title: 'Image',
            author: 'author',
            cols: 3,
        },
    ];


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
            fecha2
            fecha3
            image {
                file {
                    url
                }
            }
            gallery {
                file {
                    fileName
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
            video
            principalText
            secondaryText
            imagebg {
                file {
                    url
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
    const classes = useStyles();
    const subtitle =  ` ${ props.data.course.exhibitor } · ${  props.data.course.fecha1 }`
    return(
        <Layout>

            <SecondBanner 
            data= { props.data.course } />

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
                                        <img className={ classes.image } width={95} src={props.data.course.exhibitorImage.file.url} />
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
                                        <iframe  className={ classes.iframe } src={ props.data.course.presentationPpt } width="595" height="335" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"  allowfullscreen> </iframe> 
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

                            {
                                (() => {
                                        if( props.data.course.gallery ) {
                                            return (
                                                <GridList cellHeight={160} className={classes.gridList} cols={3}>
                                                    {props.data.course.gallery.map( (e, index) => (
                                                    <GridListTile key={index} cols={1 || 1}>
                                                        <img src={e.file.url} alt={e.fileName} />
                                                    </GridListTile>
                                                    ))}
                                                </GridList>
                                            )
                                        }else {
                                            return (
                                                <div> no hay data </div>
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