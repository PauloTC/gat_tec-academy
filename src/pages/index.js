import React , { Fragment }from 'react';
import SEO from '../components/seo';

import {  Container, Box, Grid } from '@material-ui/core';
// import Styles from '../components/index.module.scss';

import Layout from '../components/layout';
import HomeCourse from '../components/home-course/home-course';
import SubHeader from '../components/comoon/subheader'
import ActivityItem from '../components/activity-item'
import GroupCard from '../components/group-card'

import { useStaticQuery, graphql } from 'gatsby';

// import SwipeableTextMobileStepper  from '../components/mobcarousel'

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
	return (
		<Fragment>
			<Layout>
				<SEO title="Inicio" />
				{/* <Box mb={4}>
					<SwipeableTextMobileStepper></SwipeableTextMobileStepper>
				</Box> */}
				<Container maxWidth="md">
					
					<SubHeader  
							title="Próximos eventos"  
							subtitle="Descubre lo que pasará proximamente en Belcorp"  
							button="Ver talleres"  ></SubHeader>
					
					{/* <Box my={4}>
						<Grid  container justify="space-between" spacing={2}  >
							{	
								data.carousel.edges.map( edge => ( <HomeCourse key={edge.node.id}  edge={edge} />))
							}
						</Grid>
					</Box> */}

					<SubHeader  
						title="Próximas actividades"  
						subtitle="¿Pizza Nights? ¿Meetups? Descubre todas las actividades aquí."  
						button="Ver actividades"  ></SubHeader>

					{/* <Box my={4} >
						<Grid  container justify="space-between" spacing={5}  >
							
							<ActivityItem />
							<ActivityItem />
									
						</Grid>
					</Box> */}
					
					<SubHeader  
						title="Puntajes Tec Valley "  
						subtitle="¿Estás cerca a ganar ese after office?  ¡Aprovecha al máximo TecAcademy!"  
						button="Ver puntajes"  ></SubHeader>

					{/* <Box position="relative" my={4} >
						<Grid  container spacing={3}  >	
							{
								data.countries.edges.map(  edge => (  <GroupCard  data={edge.node}  />  )  )
							}			
						</Grid>
					</Box> */}
					
				</Container>
			</Layout>
		</Fragment>
	);
};
export default IndexPage;
