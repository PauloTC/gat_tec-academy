import React from 'react';
import HomeCourse from '../components/home-course/home-course';
import SubHeader from '../components/comoon/subheader'
import ActivityItem from '../components/activity-item'
import GroupCard from '../components/group-card'

import Layout from '../components/layout';
import SEO from '../components/seo';

import Styles from '../components/index.module.scss';

import {  Container, Box, Grid } from '@material-ui/core';

import { useStaticQuery, graphql } from 'gatsby';

import SwipeableTextMobileStepper  from '../components/mobcarousel'

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
		<Layout>
			<SEO title="Inicio" />
			{/* <Slider {...settings}>
				{data.slider.edges.map((edge, index) => {
					return (
						<HomeBanner key={index} title={edge.node.title} image={edge.node.image.file.url} />
					)						
				})}
			</Slider> */}
			<Box mb={4}>
				<SwipeableTextMobileStepper></SwipeableTextMobileStepper>
			</Box>
			<Container className={Styles.index__carousel} maxWidth="md">
				
				<SubHeader  
						title="Próximos eventos"  
						subtitle="Descubre lo que pasará proximamente en Belcorp"  
						button="Ver talleres"  />
				<Box my={4}>
					<Grid  container justify="space-between" spacing={2}  >
						{	
							data.carousel.edges.map( edge => ( <HomeCourse key={edge.node.id}  edge={edge} />))
						}
					</Grid>
				</Box>

				<SubHeader  
					title="Próximas actividades"  
					subtitle="¿Pizza Nights? ¿Meetups? Descubre todas las actividades aquí."  
					button="Ver actividades"  />

				<Box my={4} >
					<Grid  container justify="space-between" spacing={5}  >
						
						<ActivityItem />
						<ActivityItem />
								
					</Grid>
				</Box>
				
				<SubHeader  
					title="Puntajes Tec Valley "  
					subtitle="¿Estás cerca a ganar ese after office?  ¡Aprovecha al máximo TecAcademy!"  
					button="Ver puntajes"  />

				<Box position="relative" my={4} >
					<Grid  container spacing={3}  >	
						{
							data.countries.edges.map(  edge => (  <GroupCard  data={edge.node}  />  )  )
						}			
					</Grid>
				</Box>
				
			</Container>
		</Layout>
	);
};
export default IndexPage;
