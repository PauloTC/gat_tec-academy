import React from 'react';

import BannerHome from '../components/banners/home-banner';
import HomeAcademy from '../components/home/home-academy';
import HomeBanner from '../components/banners/home-banner';
import HomeCourse from '../components/home-course/home-course';
import Layout from '../components/layout';
import SEO from '../components/seo';

import Styles from '../components/index.module.scss';

import Typography from '@material-ui/core/Typography';
import { Paper, Container, Box, Button, Grid } from '@material-ui/core';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import { useStaticQuery, graphql } from 'gatsby';

const IndexPage = () => {
	const data = useStaticQuery(graphql`
		query {
			allContentfulCourse(filter: { showHomeBanner: { eq: true } }) {
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
				{data.allContentfulCourse.edges.map((edge, index) => {
					return (
						<HomeBanner key={index} title={edge.node.title} image={edge.node.image.file.url} />
					)						
				})}
			</Slider>
			<br />
			<Container className={Styles.index__carousel} maxWidth="lg">
				<Typography variant="h6" gutterBottom>
					{' '}
					Próximos eventos{' '}
				</Typography>

				<Slider {...carousel}>
					{data.allContentfulCourse.edges.map((edge, index) => {
						return <HomeCourse key={index} title={edge.node.title} exhibitor={edge.node.exhibitor} />;
					})}
				</Slider>
			</Container>
			<br />
			<br />
		</Layout>
	);
};
export default IndexPage;
