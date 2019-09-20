import React from 'react';
import MaterialTable from 'material-table';
import Styles from './individualpoints.module.scss';
import { useStaticQuery, graphql } from 'gatsby';
import { makeStyles } from '@material-ui/styles';
import { Typography, Box, Button, Grid } from '@material-ui/core';



const useStyles = makeStyles({
	table: {
		background: '#321063',
		color: 'white',
		paddingBottom: 5,
	},
	"@global": {
       ".individual" : {
		   ".MuiToolbar-gutters" : {
			   paddingLeft: 0
		   },
		   "MuiPaper-root" : {
			   boxShadow: "none !important"
		   }
	   }
      }
});


const IndividualPoints = () => {
	const classes = useStyles();
	const data = useStaticQuery( graphql`
		query{
			allContentfulStudent (sort : {
					fields: points,
					order: DESC
				}) {
				nodes {
					name
					team
					points
				}
			}
		}	
	`)
	const [ state ] = React.useState({
		columns: [
			{ title: 'Nombre', field: 'name' },
			{ title: 'Equipo', field: 'team' },
			{ title: 'Puntaje', field: 'points', type: 'numeric' }
		]
	});

	return (
		<div className="individual">
			<section className={Styles.individual__section}>
				{/* <h2 className="mt-5  mb-30  g-subtitle">Puntaje Individual</h2>
				<p className="leadboard-p">Te mostramos el 1 y 2 puesto hasta el primer taller:</p> */}
				{/*<!-- Tabla de Puntajes -->*/}
		
				<MaterialTable
					className={Styles.individual__table}
					title="Puntaje individual"
					columns={state.columns}
					data={data.allContentfulStudent.nodes}
					options={{
						headerStyle: {
							backgroundColor: 'rgba(50, 16, 99, 0.10)',
							color: '#321063',
							textTransform: 'uppercase'
						},
						searchFieldStyle: {
							background: 'white',
							borderRadius: 8
						},
						rowStyle: {
							color: "321063"
						}
					}}
				/>
				{/*<!-- Fin Tabla de Puntajes -->*/}
			</section>
		</div>
	);
};

export default IndividualPoints;
