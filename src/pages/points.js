import React from 'react'
import Layout from '../components/layout'
import GBanner from  '../components/banner';
import PointsGroup from  '../components/grouppoints/grouppoints';
import IndividualPoints from '../components/individualpoints/individualpoints'

const PointsPage = () => (

    <Layout>
        <GBanner  title='Puntajes' subtitle="Tec Valley"  ></GBanner>
        <PointsGroup></PointsGroup>
        <IndividualPoints></IndividualPoints>
    </Layout>
)

export default PointsPage