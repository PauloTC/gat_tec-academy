import React from 'react'
import { 
    Box, 
    Container,
    Grid,
    Typography } from '@material-ui/core';
import { useStaticQuery, graphql } from 'gatsby';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(theme => ({
    container : {
        marginBottom: 120,
        [theme.breakpoints.down('xs')]: {
			marginBottom: 60
		},
    },
    image :  {
        maxWidth: '100%',
        height: 'auto',
        transition: 'all .3s ease-in-out',
        cursor: 'pointer',
        '&:hover':{
            opacity: 0
        }
    },
    item: {
        marginBottom: 20,
        [theme.breakpoints.down('xs')]: {
			textAlign: 'center'
		},
    },
    imagehover: {
        cursor: 'pointer',
        maxWidth: '100%',
        position: 'absolute',
        borderRadius: 8,
        transition: 'all .3s ease-in-out',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0,
        '&:hover' : {
            opacity: 1
        },
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center',
            margin: 'auto'
		},
    },
    // imagedefault: {
    //     opacity: 1,
    // },
    // imagehover: {
    //     opacity
    // }
    // image:hover {
    //     opacity: 0
    // },
    line: {
        height: 3,
        width: 50,
        display: "block",
        background: "#ff00a6",
        [theme.breakpoints.down('xs')]: {
            margin: 'auto'
		},
    }
}));



export default function  Ambassadors() {
    const classes = useStyles();

    const data = useStaticQuery( graphql`
        query {
            ambassadors: allContentfulAmbassador {
                edges {
                    node {
                        id
                        name
                        image {
                            file {
                            url
                            }
                        }
                        imagehover{
                            file {
                            url
                            }
                        }
                    }
                }
            }
        }
    ` )
    
    return (
        <Container className={ classes.container }  maxWidth="lg" >
            <Box my={8} >
                <Grid container spacing={1} >
                        <Grid md={4} item >
                            <Typography variant="h5" >
                                <Box fontWeight={900} >Nuestros </Box>
                                <Box fontWeight={900} >embajadores</Box>
                            </Typography>
                            <Box my={3} >
                                <Typography variant="body2" >Un grupo de personas apasionadas y entusiastas. ¡Conócelos!</Typography>
                            </Box>
                        </Grid>
                        <Grid md={8} container  justify="center" spacing={2}  item >
                            {
                                data.ambassadors.edges.map( item => {
                                    return (
                                        <Grid className={ classes.item }  key={item.id}  xs={12}  sm={6}   md={4} item > 
                                            <Box position="relative"  >
                                                <img className={ classes.image  } src={item.node.image.file.url}   mb={1} />
                                                <img className={  ` ${classes.imagehover}` } src={item.node.imagehover.file.url}   mb={1} />
                                            </Box>
                                            {/* <Box mb={1} >
                                                <img className={classes.image} src={item.node.image.file.url} />
                                            </Box> */}
                                            <Typography  >
                                                <Box fontWeight={900}  fontSize="h6.fontSize"  > { item.node.name }</Box>
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