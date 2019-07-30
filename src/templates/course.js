import React from 'react'
import Layout from "../components/layout"
import { graphql } from 'gatsby';

export const query = graphql`
    query(  $slug: String! ) {
        contentfulCourse (
            slug: {
              eq: $slug
            }
          ){
            title
            exhibitor
          }
    }

`


const Course = (props) => {
	return (
		<Layout>
			<div>
				<h4> {props.data.contentfulCourse.title} </h4>
				<p>{props.data.contentfulCourse.exhibitor}</p>
			</div>
		</Layout>
	)
}


export default Course