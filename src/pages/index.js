import React from 'react';

import BannerHome from '../components/banners/home-banner';
import HomeAcademy from '../components/home/home-academy';
import HomeBanner from '../components/banners/home-banner';
import HomeCourse from '../components/home-course/home-course';
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
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

	return (
		<Layout>
			<SEO title="Home" />
			<Slider {...settings}>
				{data.slider.edges.map((edge, index) => {
					return (
						<HomeBanner key={index} title={edge.node.title} image={edge.node.image.file.url} />
					)						
				})}
			</Slider>
			<br />
			<Container className={Styles.index__carousel} maxWidth="lg">
				<Typography>
					<Grid  container justify="space-between" >
						<Grid  container item direction="column" md={10} >
							<Box fontWeight={900} fontSize="h6.fontSize" > Próximos eventos </Box>
							<Box fontSize="body2.fontSize" >Descubre lo que pasará proximamente en Belcorp</Box>
						</Grid>
						<Grid container alignItems="center" justify="flex-end"  item md={2} >
							<Button ontWeight={900} className={classes.button}  color="primary"> Ver talleres</Button>
						</Grid>
					</Grid>
				</Typography>

				<Slider  className={ Styles.index__slick }  {...carousel}>
					{data.carousel.edges.map((edge, index) => {
						return <HomeCourse key={index} title={edge.node.title} exhibitor={edge.node.exhibitor} />;
					})}
				</Slider>
				<br />
				<br />
				<br />
				<br />
				<Typography>
					<Grid  container justify="space-between" >
						<Grid  container item direction="column" md={10} >
							<Box fontWeight={900} fontSize="h6.fontSize" > Próximos eventos </Box>
							<Box fontSize="body2.fontSize" >Descubre lo que pasará proximamente en Belcorp</Box>
						</Grid>
						<Grid container alignItems="center" justify="flex-end"  item md={2} >
							<Button ontWeight={900} className={classes.button}  color="primary"> Ver talleres</Button>
						</Grid>
					</Grid>
				</Typography>
				<Box mt={4} >
					<Grid  container justify="space-between" spacing={5} >
						<Grid item sm={6}  container direction='column' >
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
						<Grid item sm={6}  container direction='column' >
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
				<br />
				<br />
				<Typography>
					<Grid  container justify="space-between" >
						<Grid  container item direction="column" md={10} >
							<Box fontWeight={900} fontSize="h6.fontSize" > Puntajes Tec Valley </Box>
							<Box fontSize="body2.fontSize" >¿Estás cerca a ganar ese after office?  ¡Aprovecha al máximo TecAcademy!</Box>
						</Grid>
						<Grid container alignItems="center" justify="flex-end"  item md={2} >
							<Button ontWeight={900} className={classes.button}  color="primary"> Ver puntajes</Button>
						</Grid>
					</Grid>
				</Typography>

			</Container>
			<br />
			<br />
		</Layout>
	);
};
export default IndexPage;
