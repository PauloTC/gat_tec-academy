import React , { Fragment }from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { makeStyles } from '@material-ui/styles';
import {  Container, Box, Grid, Typography, Button } from '@material-ui/core';


// import SwipeableTextMobileStepper  from '../components/mobcarousel'
const useStyles = makeStyles({
	button: {
		textTransform: 'capitalize',
		fontSize: '16px',
		fontWeight: 900
	}
});

const IndexPage = () => {
	const classes = useStyles();	
	return (
		<Fragment>
			<Layout>
				<SEO title="Inicio" />
				{/* <Box mb={4}>
					<SwipeableTextMobileStepper></SwipeableTextMobileStepper>
				</Box> */}
				<Container maxWidth="md">
					
					{/* <SubHeader  
							title="Próximos eventos"  
							subtitle="Descubre lo que pasará proximamente en Belcorp"  
							button="Ver talleres"  ></SubHeader> */}
					<Fragment>
						<Typography>
							<Grid  container justify="space-between" >
								<Grid  container item direction="column"   md={10} >
									<Box fontWeight={900} fontSize="h6.fontSize" > Próximos eventos</Box>
									<Box fontSize="body2.fontSize" > Descubre lo que pasará proximamente en Belcorp</Box>
								</Grid>
								<Grid container alignItems="center" justify="flex-end"  item md={2} >
									<Button fontWeight={900} className={classes.button}  color="primary"> Ver talleres </Button>
								</Grid>
							</Grid>
						</Typography>
					</Fragment>
					{/* <Box my={4}>
						<Grid  container justify="space-between" spacing={2}  >
							{	
								data.carousel.edges.map( edge => ( <HomeCourse key={edge.node.id}  edge={edge} />))
							}
						</Grid>
					</Box> */}

					{/* <SubHeader  
							title="Próximas actividades"  
							subtitle="¿Pizza Nights? ¿Meetups? Descubre todas las actividades aquí."  
							button="Ver actividades"  ></SubHeader> */}
					{/* <Fragment>
						<Typography>
							<Grid  container justify="space-between" >
								<Grid  container item direction="column"   md={10} >
									<Box fontWeight={900} fontSize="h6.fontSize" > Próximas actividades </Box>
									<Box fontSize="body2.fontSize" > ¿Pizza Nights? ¿Meetups? Descubre todas las actividades aquí.</Box>
								</Grid>
								<Grid container alignItems="center" justify="flex-end"  item md={2} >
									<Button fontWeight={900} className={classes.button}  color="primary"> Ver actividades</Button>
								</Grid>
							</Grid>
						</Typography>
					</Fragment> */}
					{/* <Box my={4} >
						<Grid  container justify="space-between" spacing={5}  >
							
							<ActivityItem />
							<ActivityItem />
									
						</Grid>
					</Box> */}
					
					{/* <SubHeader  
						title="Puntajes Tec Valley "  
						subtitle="¿Estás cerca a ganar ese after office?  ¡Aprovecha al máximo TecAcademy!"  
						button="Ver puntajes"  ></SubHeader> */}

					<Fragment>
						<Typography>
							<Grid  container justify="space-between" >
								<Grid  container item direction="column"   md={10} >
									<Box fontWeight={900} fontSize="h6.fontSize" > Puntajes Tec Valley  </Box>
									<Box fontSize="body2.fontSize" > ¿Estás cerca a ganar ese after office?  ¡Aprovecha al máximo TecAcademy!</Box>
								</Grid>
								<Grid container alignItems="center" justify="flex-end"  item md={2} >
									<Button fontWeight={900} className={classes.button}  color="primary"> Ver puntajes </Button>
								</Grid>
							</Grid>
						</Typography>
					</Fragment>
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
