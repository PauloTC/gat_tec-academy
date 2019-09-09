import React from 'react';

import Container from '@material-ui/core/Container';

import appleIcon from '../../images/logos-leaderboard/apple.jpg'; // Tell Webpack this JS file uses this image
import facebookIcon from '../../images/logos-leaderboard/facebook.jpg'; // Tell Webpack this JS file uses this image
import googleIcon from '../../images/logos-leaderboard/google.jpg'; // Tell Webpack this JS file uses this image
import netflixIcon from '../../images/logos-leaderboard/netflix.jpg'; // Tell Webpack this JS file uses this image
import teslaIcon from '../../images/logos-leaderboard/tesla.jpg'; // Tell Webpack this JS file uses this image

import MaterialTable from 'material-table';
import Button from '@material-ui/core/Button';
import Styles from './individualpoints.module.scss';
import { useStaticQuery, graphql } from 'gatsby';

const IndividualPoints = () => {


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


	const [ state, setState ] = React.useState({
		columns: [
			// { title: 'Puesto', field: 'place', type: 'numeric' },
			// { title: 'Puesto', field: 'place' },
			{ title: 'Nombre', field: 'name' },
			{ title: 'Equipo', field: 'team' },
			{ title: 'Puntaje', field: 'points', type: 'numeric' }
			// {
			// 	title: 'Birth Place',
			// 	field: 'birthCity',
			// 	lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' }
			// }
		],
		data: [
			{ place: 1, name: 'Mehmet', team: 'Tesla', points: 50 },
			{ place: 2, name: 'Zerya Betül', team: 'Google', points: 70 }
		]
	});

	return (
		<div className="individual">
			<section className="puntaje-individual">
				{/* <h2 className="mt-5  mb-30  g-subtitle">Puntaje Individual</h2>
				<p className="leadboard-p">Te mostramos el 1 y 2 puesto hasta el primer taller:</p> */}
				{/*<!-- Tabla de Puntajes -->*/}
		
				<MaterialTable
					className="individual__table"
					title="Puntaje individual"
					columns={state.columns}
					data={data.allContentfulStudent.nodes}
				/>
				{/*<!-- Fin Tabla de Puntajes -->*/}
				<div style={{ textAlign: 'right', marginTop: '40px' }}>
					<a href="assets/puntaje-tecacademy.xlsx">
						<button type="button" className={`btn btn-outline-primary ${Styles.individual__button}`}>
							Descargar listado completo
						</button>
					</a>
				</div>
			</section>
		</div>
	);
};

export default IndividualPoints;
