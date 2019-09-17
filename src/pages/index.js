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
import { useStaticQuery, graphql } from 'gatsby';

const useStyles = makeStyles({
	boxflexible : {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-between'
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
    return (
        <Fragment>
            <Layout>
                <SEO title="Inicio" />
				<Box mb={4}>
					<SwipeableTextMobileStepper></SwipeableTextMobileStepper>

				</Box>
				<Container maxWidth="md" >
					<SubHeader  
								title="Próximos eventos"  
								subtitle="Descubre lo que pasará proximamente en Belcorp"  
								button="Ver talleres"  ></SubHeader>
					<Box className={classes.boxflexible}   my={4} >	
						<Grid item >
							<Typography>
								<Box fontSize="body2.fontSize" > {  data.countries.edges[0].node.name }  team</Box> 
								<Box fontSize="body2.fontSize" >  {  data.countries.edges[0].node.name }  puntos</Box> 
							</Typography>
						</Grid>
						<Grid item >
							<Typography>
								<Box fontSize="body2.fontSize" > {  data.countries.edges[1].node.name }  team</Box> 
								<Box fontSize="body2.fontSize" >  {  data.countries.edges[1].node.name }  puntos</Box> 
							</Typography>

						</Grid>
						<Grid item >
							<Typography>
								<Box fontSize="body2.fontSize" > {  data.countries.edges[2].node.name }  team</Box> 
								<Box fontSize="body2.fontSize" >  {  data.countries.edges[2].node.name }  puntos</Box> 
							</Typography>
						</Grid>
						<Grid item >
							<Typography>
								<Box fontSize="body2.fontSize" > {  data.countries.edges[3].node.name }  team</Box> 
								<Box fontSize="body2.fontSize" >  {  data.countries.edges[3].node.name }  puntos</Box> 
							</Typography>
						</Grid>
						<Grid item >
							<Typography>
								<Box fontSize="body2.fontSize" > {  data.countries.edges[4].node.name }  team</Box> 
								<Box fontSize="body2.fontSize" >  {  data.countries.edges[4].node.name }  puntos</Box> 
							</Typography>
						</Grid>
					</Box>
					<SubHeader  
						title="Próximas actividades"  
						subtitle="¿Pizza Nights? ¿Meetups? Descubre todas las actividades aquí."  
						button="Ver actividades"  ></SubHeader>
				</Container>
            </Layout>
        </Fragment>
    )
}

export default IndexPage
