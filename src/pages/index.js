import React, { Fragment } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { 
    Box, 
    Button,
    Container,
    CardContent,
    Card,
    CardMedia,
    Paper, 
    Grid,
    Typography } from '@material-ui/core';

import Ambassadors from '../components/ambassadors'
import { makeStyles } from '@material-ui/styles';
import HomeAcademy from '../components/home-academy'
import rocket from '../assets/media/rocket.jpg'
import SwipeableTextMobileStepper  from '../components/mobcarousel'
import SubHeader from '../components/subheader'
import GroupCard from '../components/group-card'
import HomeCourse from '../components/home-course/home-course'
import ActivityItem from '../components/activity-item'
import { useStaticQuery, graphql } from 'gatsby';

const useStyles = makeStyles({
	teamcontainer: {
		display: 'flex',
		justifyContent: 'space-between',
		marginBottom: 60
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
    button: {
        background: "white",
        textTransform: "inherit",
        '& span': {
            fontWeight: "bold",
            fontSize: 14
        }
	},
	activities: {
		display: "flex",
		justifyContent: "space-between",
		flexWrap: "wrap",
		marginBottom: 60
	},
	activity: {
		boxShadow : "1px 1px 16px 0 rgba(50, 16, 99, 0.1)"
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
	}
});



const IndexPage = () => {
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
	const classes = useStyles();
	

	const dataActivity = [
		{  type: "Meetup ",name: "Time Management Skills"  },
		{  type: "Pizza Nights", name: "Guvery"  }
	]

    return (
        <Fragment>
            <Layout>
                <SEO title="Inicio" />
				<Box mb={6}>
					<SwipeableTextMobileStepper></SwipeableTextMobileStepper>
				</Box>
				<Container maxWidth="md" >

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
							title="Próximas actividades"  
							subtitle="¿Pizza Nights? ¿Meetups? Descubre todas las actividades aquí."  
							button="Ver actividades"  ></SubHeader>
					
					<div  className={classes.activities} >
						{ dataActivity.map((item, index) => {
							return (
									<div  className={classes.activity}  key= { index }  >
										<ActivityItem   data={item} />
									</div>
							)
						})

						}
					</div>


					<SubHeader  
						title="Puntajes Tec Valley "  
						subtitle="¿Estás cerca a ganar ese after office?  ¡Aprovecha al máximo TecAcademy!"  
						button="Ver puntajes"  ></SubHeader>
					<section className={ classes.teamcontainer } >
							{
								data.countries.edges.map(  edge =>   <GroupCard  data={edge.node}  />    )
							}			
					</section>
					
					<SubHeader  
						title="Comunidad TecAcademy "  
						subtitle="Un grupo de apasionados y entusiastas. ¿Quiéres ser un TecAcademy Ambassador?"  
						button="Ver puntajes"  ></SubHeader>



				</Container>
            </Layout>
        </Fragment>
    )
}

export default IndexPage
