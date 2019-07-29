import React from 'react'
import Layout from  "../components/layout"
import { graphql } from 'gatsby';

export const query = graphql`
    query(  $slug: String! ) {
        contentfulCourse (
            slug: {
              eq: $slug
            }
          ){
            title
          }
    }

`


const Course = (props) => {
    return (
        <Layout>
            <h1> { props.data.contentfulCourse.title } </h1>

        </Layout>
    )
}


export default Course