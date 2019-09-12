import React from 'react';

import BannerHome from '../components/banners/home-banner';
import HomeAcademy from '../components/home/home-academy';
import HomeBanner from '../components/banners/home-banner';
import HomeCourse from '../components/home-course/home-course';
import SubHeader from '../components/comoon/subheader'

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
	image: {
		margin: 0
	},
	container: {
		padding: '10px 15px 15px 15px'
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
			<SwipeableTextMobileStepper></SwipeableTextMobileStepper>
			<Container className={Styles.index__carousel} maxWidth="md">
				
				<SubHeader  
						title="Próximos eventos"  
						subtitle="Descubre lo que pasará proximamente en Belcorp"  
						button="Ver talleres"  />
				<div className={classes.slider} >
					<Slider {...carousel}>
						{data.carousel.edges.map( edge => ( <div  key={edge.node.id}  > <HomeCourse edge={edge} /> </div>))}
					</Slider>
				</div>

				<SubHeader  
					title="Próximas actividades"  
					subtitle="¿Pizza Nights? ¿Meetups? Descubre todas las actividades aquí."  
					button="Ver actividades"  />
				
				<Box my={4} >
					<Grid  container justify="space-between" spacing={5}  >
						<Grid item sm={12} md={6}  container direction='column' >
							<Paper  elevation={5} >
								<img className={classes.image} src="http://tinyimg.io/i/tSFDV33.jpeg"  />
								<Grid container  className={classes.container}  >
									<Grid item xs={9} >
										<Typography> 
											<Box mb={1}  fontSize="subtitle2.fontSize">mar., 10 sept.</Box>
											<Box lineHeight={1.2} mb={1}   fontSize="h6.fontSize" fontWeight="fontWeightBold" > Meetup: Time Management Skills </Box>
											<Box  fontSize="body2.fontSize" > Bruno Díaz </Box>
										</Typography>
									</Grid>
									<Grid xs={3} item container justify="flex-end" alignContent="flex-end" >
										<Button size="small" variant="outlined" color="primary"> Unirme </Button>
									</Grid>
								</Grid>
							</Paper>
						</Grid>
						<Grid item sm={12} md={6}  container direction='column' >
							<Paper  elevation={5} >
							
								<img className={classes.image} src="http://tinyimg.io/i/tSFDV33.jpeg"  />
								<Grid container  className={classes.container}  >
									<Grid item xs={9} >
										<Typography> 
											<Box mb={1}  fontSize="subtitle2.fontSize">mar., 10 sept.</Box>
											<Box lineHeight={1.2} mb={1}   fontSize="h6.fontSize" fontWeight="fontWeightBold" > Meetup: Time Management Skills </Box>
											<Box  fontSize="body2.fontSize" > Bruno Díaz </Box>
										</Typography>
									</Grid>
									<Grid xs={3} item container justify="flex-end" alignContent="flex-end" >
										<Button size="small" variant="outlined" color="primary"> Unirme </Button>
									</Grid>
								</Grid>
							</Paper>
						</Grid>
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
