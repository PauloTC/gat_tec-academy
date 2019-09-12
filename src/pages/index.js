import React from 'react';

import BannerHome from '../components/banners/home-banner';
import HomeAcademy from '../components/home/home-academy';
import HomeBanner from '../components/banners/home-banner';
import HomeCourse from '../components/home-course/home-course';
import SubHeader from '../components/comoon/subheader'
import ActivityItem from '../components/activity-item'

import Layout from '../components/layout';
import SEO from '../components/seo';

import Styles from '../components/index.module.scss';
import { makeStyles } from '@material-ui/styles';


import Typography from '@material-ui/core/Typography';
import { Paper, Container, Box, Button, Grid } from '@material-ui/core';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import { useStaticQuery, graphql } from 'gatsby';

import SwipeableTextMobileStepper  from '../components/mobcarousel'


const useStyles = makeStyles({
	button: {
		textTransform: 'capitalize',
		fontSize: '16px',
		fontWeight: 900
	},
	slider: {
		height: '300px'
	}
});



const IndexPage = () => {
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
						exhibitor
					}
				}
			}
		}
	`);

	var settings = {
		dots: false,
		fade: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true
	};

	const carousel = {
		dots: false,
		fade: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true
	};

	return (
		<Layout>
			<SEO title="Home" />
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

			</Container>
		</Layout>
	);
};
export default IndexPage;
