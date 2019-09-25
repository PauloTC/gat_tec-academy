import React, { Fragment } from "react"
import { useStaticQuery, graphql } from 'gatsby';
import Layout from "../components/layout"
import GroupCard from '../components/group-card'
import SubHeader from '../components/subheader'
import ActivityItem from '../components/activity-item'
import SEO from "../components/seo"
import { 
    Box, 
	Container,
	Button,
	Typography } from '@material-ui/core';

	import { makeStyles } from '@material-ui/core/styles';
	
import TecVideoPoster from "../assets/media/poster.jpeg"
import TecVideo from "../assets/media/video.mp4"

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
    banner: {
        height: 400
    },
    text: {
        position: "absolute",
        top: 100,
        left: 150,
        color: "white"
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
		bottom: 0,
		left: 0,
		right:	0,
		margin: 'auto',
		display: 'flex',
		alignItems: 'center',
		height: 395,
		backgroundColor: 'rgba(0, 0, 0, 0.4)',
		[theme.breakpoints.down('md')]: {
			height: 350
		},
		[theme.breakpoints.down('sm')]: {
			height: 350
		},
	},
	text: {
		color: 'white',
		maxWidth: 400,
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
			textAlign: 'center'
		},
	},
	video: {
		height: 400,
		objectFit: "fill",
		width: '100%',
		// [theme.breakpoints.down('xl')]: {
		// 	width: 1200,
		// },
		// [theme.breakpoints.down('lg')]: {
		// 	width:  992
		// },
		[theme.breakpoints.down('md')]: {
			// maxWidth: '100%',
			height: 350
			// width:  768
		},
		[theme.breakpoints.down('sm')]: {
			// maxWidth: '100%',
			height: 350
			// width: 576
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
            }
		}
	`);
	
    return (
        <Fragment>
            <Layout>
                <SEO title="Inicio" />
				<Box position="relative" mb={6}>
					{/* <SwipeableTextMobileStepper></SwipeableTextMobileStepper>*/}
					<video  className={ classes.video } poster={ TecVideoPoster } muted="true" autoplay="true" loop  >
						<source src={ TecVideo } type="video/mp4" />
					</video>
					<Box  className={classes.textcontainer}  position="absolute"  >
						<Container className={ classes.container }  maxWidth="lg">
							<Typography>
								<Box className={ classes.text }  mb={2} fontSize="h4.fontSize" fontWeight={800} > Sé parte de TecAcademy y viaja a Silicon Valley </Box>
								</Typography>
							<Button variant="contained" color="secondary" className={classes.button}>
								Inscribete ahora
							</Button>
						</Container>
					</Box>
				</Box>
				<Container maxWidth="lg" >

					{/* <SubHeader  
						title="Próximos eventos"  
						subtitle="Descubre lo que pasará proximamente en Belcorp"  
						button="Ver talleres"  ></SubHeader> */}

					{/* <section className={ classes.courses }  >
						{	
							data.carousel.edges.map( edge => {
								return (
									<div className={ classes.course }   >
										<HomeCourse key={edge.node.id}  edge={edge} />
									</div>
								)
							})		
						}
					</section> */}

					<SubHeader
							to="courses"
							title="Próximas actividades"  
							subtitle="¿Pizza Nights? ¿Meetups? Descubre todas las actividades aquí."  
							button="Ver actividades"  ></SubHeader>
					
					<div  className={classes.activities} >
						{ data.carousel.edges.map((item, index) => {
							return (
									<div  className={classes.activity}  key= { index }  >
										<ActivityItem   data={item.node} />
									</div>
							)
						})

						}
					</div>


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

				</Container>
            </Layout>
        </Fragment>
    )
}
