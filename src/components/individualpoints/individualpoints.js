import React from 'react'

import { Container } from 'react-bootstrap';

import appleIcon from '../../images/logos-leaderboard/apple.jpg'; // Tell Webpack this JS file uses this image
import facebookIcon from '../../images/logos-leaderboard/facebook.jpg'; // Tell Webpack this JS file uses this image
import googleIcon from '../../images/logos-leaderboard/google.jpg'; // Tell Webpack this JS file uses this image
import netflixIcon from '../../images/logos-leaderboard/netflix.jpg'; // Tell Webpack this JS file uses this image
import teslaIcon from '../../images/logos-leaderboard/tesla.jpg'; // Tell Webpack this JS file uses this image

import Styles from './individualpoints.module.scss'


const IndividualPoints = () => {


    return (
        <Container  className="individual"  >
            <section className="puntaje-individual">
                <h2 className="mt-5  mb-30  g-subtitle"  >Puntaje Individual</h2>
                <p className="leadboard-p">Te mostramos el 1 y 2 puesto hasta el primer taller:</p>
                {/*<!-- Tabla de Puntajes -->*/}
                <table className="table table-borderless">
                    <thead className={ Styles.individual__thead }  >
                        <tr>
                            <th scope="col">#Puesto</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Team</th>
                            <th scope="col">Puntaje</th>
                        </tr>
                    </thead>
                    <tbody className={ Styles.individual__tbody } >

                        <tr>
                            <th scope="row"><span role="img" aria-label="cup">🏆</span> 1</th>
                            <td>Alejandra Cabrera Rivera <span role="img" aria-label="plane">✈️</span> </td>
                            <td><img className="ind-logo" src={netflixIcon} alt="" /></td>
                            <td>4 pts</td>
                        </tr>

                        <tr>
                            <th scope="row"><span role="img" aria-label="cup">🏆</span> 1</th>
                            <td>Franco Alfredo Calmet Oquendo <span role="img" aria-label="plane">✈️</span> </td>
                            <td><img className="ind-logo" src={googleIcon} alt="" /></td>
                            <td>4 pts</td>
                        </tr>

                        <tr>
                            <th scope="row"><span role="img" aria-label="cup">🏆</span> 1</th>
                            <td>Esteban Simon Alvan <span role="img" aria-label="plane">✈️</span> </td>
                            <td><img className="ind-logo" src={facebookIcon} alt="" /></td>
                            <td>4 pts</td>
                        </tr>

                        <tr>
                            <th scope="row"><span role="img" aria-label="cup">🏆</span> 1</th>
                            <td>Eddy Gabriel Salazar Llanos <span role="img" aria-label="plane">✈️</span> </td>
                            <td><img className="ind-logo" src={googleIcon} alt="" /></td>
                            <td>4 pts</td>
                        </tr>

                        <tr>
                            <th scope="row"><span role="img" aria-label="cup">🏆</span> 1</th>
                            <td>Ximena Andrea Marquez Pacheco <span role="img" aria-label="plane">✈️</span> </td>
                            <td><img className="ind-logo" src={netflixIcon} alt="" /></td>
                            <td>4 pts</td>
                        </tr>

                        <tr>
                            <th scope="row">2</th>
                            <td>Danilo Alberto Montenegro Maldonado</td>
                            <td><img className="ind-logo" src={appleIcon} alt="" /></td>
                            <td>3 pts</td>
                        </tr>

                        <tr>
                            <th scope="row">2</th>
                            <td>Jesus Martin Taco Miranda</td>
                            <td><img className="ind-logo" src={teslaIcon} alt="" /></td>
                            <td>3 pts</td>
                        </tr>

                        <tr>
                            <th scope="row">2</th>
                            <td>Carlos Alfredo Burgos Samame</td>
                            <td><img className="ind-logo" src={facebookIcon} alt="" /></td>
                            <td>3 pts</td>
                        </tr>

                        <tr>
                            <th scope="row">2</th>
                            <td>Fiorella Bacigalupo Alba</td>
                            <td><img className="ind-logo" src={googleIcon} alt="" /></td>
                            <td>3 pts</td>
                        </tr>

                        <tr>
                            <th scope="row">2</th>
                            <td>Jaquelyn Montañez Bustamante</td>
                            <td><img className="ind-logo" src={netflixIcon} alt="" /></td>
                            <td>3 pts</td>
                        </tr>

                        <tr>
                            <th scope="row">2</th>
                            <td>Paolo Rolando Flores Rojas</td>
                            <td><img className="ind-logo" src={googleIcon} alt="" /></td>
                            <td>3 pts</td>
                        </tr>

                    </tbody>
                </table>
                {/*<!-- Fin Tabla de Puntajes -->*/}
                <div style={{ textAlign: 'right', marginTop: '40px' }} >
                    <a href="assets/puntaje-tecacademy.xlsx"><button type="button" className="btn btn-outline-primary">Descargar listado completo</button></a>
                </div>
            </section>
        </Container>
    )
}

export default IndividualPoints