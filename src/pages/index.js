import React, { Fragment} from "react"
import { useStaticQuery, graphql } from 'gatsby';

import Layout from "../components/layout"
import GroupCard from '../components/index/group-card'
import SubHeader from '../components/comoon/subheader'
import ActivityItem from '../components/index/activity-item'
import ScrollAnimation from 'react-scroll-animation';
import SEO from "../components/seo"
import { 
    Box, 
	Container,
	CardMedia,
	Button,
	Typography } from '@material-ui/core';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
	
import TecVideoPoster from "../assets/media/poster.jpeg"
import Carousel from 'nuka-carousel';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'; 
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import  '../styles/index.scss'

const useStyles = makeStyles(theme => ({
	teamcontainer: {
		display: 'flex',
		justifyContent: 'space-between',
		marginBottom: 60,
		[theme.breakpoints.down('xs')]: {
			flexWrap: 'wrap'
		},
		[theme.breakpoints.down('sm')]: {
			marginBottom: 30
		},
	},
	image : {
		width : '100%',
		height: 500,
		[theme.breakpoints.down('md')]: {
				height: 400
		},
	},
    banner: {
        height: 600
	},
	button: {
		padding: 0,
		'& a' : {
			padding: "5px 16px"
		}
	},
    text: {
        position: "absolute",
        top: 100,
        left: 150,
        color: "white"
	},
	buttonArrow : {
		background : "transparent",	
		color: "#fff",
		border: "none",
		outline: "none",
		position: 'relative',
		cursor : 'pointer',
		'& svg ' : {
			fontSize: 40
		},
		[theme.breakpoints.down('xs')]: {
			'& svg' : {
				fontSize: 25
			}
		}
	},
	leftArrow: {
		left: '100%',
		[theme.breakpoints.down('md')]: {
			left: 0
		}
	},
	rightArrrow: {
		right: '100%',
		[theme.breakpoints.down('md')]: {
			right: 0
		}
	},
    textbanner: {
        position: "absolute",
        top: '30%',
        color: "white",
        width: '100%'
    },
	activities: {
		display: "flex",
		justifyContent: "space-between",
		flexWrap: "wrap",
		marginBottom: 60
	},
	activity: {
		border : "1px solid #eae7ef !important",
		[theme.breakpoints.down('md')]: {
			width: '48% !important',
			boxSizing: "border-box",
			margin: "1%"
		},
		[theme.breakpoints.down('xs')]: {
			width: '100% !important',
			'&:nth-of-type(2)' : {
				marginTop: 15
			}
		},
	},
	courses: {
		display: 'flex !important',
		justifyContent: 'space-between',
		marginBottom: 60
	},
	course : {
		width: '100%',
		marginRight: 30,
		'&:nth-of-type(3)' : {
			marginRight: 0
		}
	},
	textcontainer: {
		top: 0,
		left: 0,
		right:	0,
		margin: 'auto',
		display: 'flex',
		alignItems: 'center',
		height: 500,
		backgroundColor: 'rgba(0, 0, 0, 0.4)',
		zIndex: 2,
		[theme.breakpoints.down('md')]: {
			height: 400
		},
		[theme.breakpoints.down('sm')]: {
			height: 350
		},
	},
	text: {
		color: 'white',
		maxWidth: 500,
		[theme.breakpoints.down('md')]: {
			fontSize: "1.8rem"
		},
		[theme.breakpoints.down('xs')]: {
			textAlign: 'center',
			fontSize: "1.5rem"
		},
	},
	container : {
		[theme.breakpoints.down('xs')]: {
			textAlign: 'center',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center'
		},
	},
	box : {
		height: 500,
		overflow: 'hidden',
		[theme.breakpoints.down('md')]: {
			height: 400
		},
		[theme.breakpoints.down('sm')]: {
			height: 350
		}
	},
	video: {
		height: 700,
		objectFit: "fill",
		width: '100%',
		position: 'absolute',
		zIndex: 1,
		top: -150,
		[theme.breakpoints.down('md')]: {
			height: 600,
			top: -100
		},
		[theme.breakpoints.down('sm')]: {
			top: 0,
			height: 400
		},
		[theme.breakpoints.down('xs')]: {
			height: 350
		},
	}
}));



export default function IndexPage() {

	
	const classes = useStyles();
	const data = useStaticQuery(graphql`
		query {
			slider : allContentfulCourse(filter: { showHomeBanner: { eq: true } }) {
				edges {
					node {
						title
						image {
							file {
								url
							}
						}
						exhibitor
					}
				}
			},
			allContentfulBannerVideo {
				edges {
					node {
						status
						textPrincipal
						buttonText
						bannerVideo {
							file {
								url
							}
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
						slug
						image {
							file {
								url
							}
						}
					}
				}
			},
			countries: allContentfulGroup (sort : {
                fields: points,
                order: DESC
            }) {
                edges {
                    node {
                        name
                        points
                        image {
                            file {
                                url
                            }
                        }
                    }
                }
			},
			banner:  allContentfulBannerHome{
				edges {
					node {
						title
						buttonText
						media {
							file {
								url
								fileName
								contentType
							}
						}
					}
				}
			}
		}
	`);

    return (
        <Fragment>
            <Layout>
                <SEO title="Inicio" />
				<Box className={ classes.box }  position="relative" mb={6}>
					
					{ (() => {

						if( data.allContentfulBannerVideo.edges[0].node.status == "Deshabilitado" ){
							return (
								<Carousel 
									autoplay
									// wrapArounds
									cellAlign="center"
									transitionMode="scroll"
									renderCenterLeftControls={({ previousSlide }) => (
										<button className={  ` ${classes.buttonArrow} ${classes.leftArrow}` }  onClick={previousSlide}>
											<ArrowBackIosIcon />
										</button>
									)}
									renderCenterRightControls={({ nextSlide }) => (
										<button className={ `  ${ classes.buttonArrow }  ${ classes.rightArrrow } `  } onClick={nextSlide}>
											<ArrowForwardIosIcon />
										</button>
									)}
									renderBottomCenterControls={false}
									enableKeyboardControls={false}  >
									{
										data.banner.edges.map( edge => {
											return (
												<Box className={ classes.box }  position="relative" mb={6}>
													<Box  className={classes.textcontainer}  position="absolute"  >
														<Container className={ classes.container }  maxWidth="lg">
															<Typography>
																<Box className={ classes.text }  mb={2} fontSize="h4.fontSize" fontWeight={800} > { edge.node.title } </Box>
															</Typography>
															<Button variant="contained" color="secondary" className={classes.button}>
																<Link to="/rules" > { edge.node.buttonText } </Link>
															</Button>
														</Container>
													</Box>
													<CardMedia className={ classes.image } image={  edge.node.media[0].file.url }  />
													{/* <img /> */}
												</Box>
											)
										} )
									}						
								</Carousel>
							)
						} else {
							return (
								<div>
									<video  className={ classes.video } poster={ TecVideoPoster } muted="true" autoplay="true" loop  >
										<source src={ data.allContentfulBannerVideo.edges[0].node.bannerVideo.file.url } type="video/mp4" />
									</video>
									<Box  className={classes.textcontainer}  position="absolute"  >
										<Container className={ classes.container }  maxWidth="lg">
											<Typography>
												<Box className={ classes.text }  mb={2} fontSize="h4.fontSize" fontWeight={800} > { data.allContentfulBannerVideo.edges[0].node.textPrincipal } </Box>
											</Typography>
											<Button variant="contained" color="secondary" className={classes.button}>
												<Link to="/rules" > { data.allContentfulBannerVideo.edges[0].node.buttonText } </Link>
											</Button>
										</Container>
									</Box>

								</div>
							)
						}

					})()

					}
				</Box>
				
				<Container maxWidth="lg" >
					<ScrollAnimation offset={10} animateIn="fadeIn">
						<SubHeader
								to="activities"
								title="Próximas actividades"  
								subtitle="¿Pizza Nights? ¿Meetups? Descubre todas las actividades aquí."  
								button="Ver actividades"  ></SubHeader>
						
							<div  className={classes.activities} >
								{ data.carousel.edges.map((item, index) => {
									return (
											<div  className={classes.activity}  key= { index }  >
												<ActivityItem   data={item.node} />
											</div>
									)})
								}
							</div>
					</ScrollAnimation>
					<ScrollAnimation offset={10} animateIn="fadeIn">
						<SubHeader  
								to="points"
								title="Puntajes Tec Valley "  
								subtitle="¿Estás cerca a ganar ese after office?  ¡Aprovecha al máximo TecAcademy!"  
								button="Ver puntajes"  ></SubHeader>
							<section className={ classes.teamcontainer } >
									{
										data.countries.edges.map(  edge =>   <GroupCard  data={edge.node}  />    )
									}			
							</section>
					</ScrollAnimation>
				</Container>
            </Layout>
        </Fragment>
    )
}
