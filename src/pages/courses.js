import React from 'react'
import Layout from '../components/layout';
import GBanner from  '../components/banner';
import CoursePrincipal from  '../components/courses/course-principal';

const CoursesPage = () => (
    
    <Layout>
        <GBanner  title='Malla de Cursos' subtitle="Tec Valley"  ></GBanner>
        <CoursePrincipal></CoursePrincipal>
    </Layout>
    
)

export default CoursesPage