import React from 'react'
import Layout from '../components/layout'
import GBanner from  '../components/banner';
import PointsGroup from  '../components/grouppoints/grouppoints';

const PointsPage = () => (

    <Layout>
        <GBanner  title='Puntajes' subtitle="Tec Valley"  ></GBanner>
        <PointsGroup></PointsGroup>
    </Layout>
)

export default PointsPage