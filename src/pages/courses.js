import React from 'react'
import Layout from '../components/layout';
import GBanner from  '../components/banner';
import CoursePrincipal from  '../components/courses/course-principal';
import Course from '../components/course'
import { Container, Row } from 'react-bootstrap';

const CoursesPage = () => (
    
    <Layout>
        <GBanner  title='Malla de Cursos' subtitle="Tec Valley"  ></GBanner>
        <CoursePrincipal></CoursePrincipal>
        <Container>
            <h1 className="g-subtitle  col-xs-12 mb-3" >Cursos Soft</h1>
            <Row>
                <Course ></Course>
            </Row>
        </Container>
    </Layout>
    
)

export default CoursesPage