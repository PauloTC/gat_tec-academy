const path = require('path')

module.exports.createPages = async( { graphql, actions } ) => {
    const { createPage } = actions;
    const blogTemplate= path.resolve('./src/templates/course.js')

    const res = await graphql(`
        query {
            allContentfulCourse {
                edges  {
                        node {
                            slug
                        }
                }
            } 
        }
    `)

    res.data.allContentfulCourse.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/courses/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}