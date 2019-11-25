const path = require('path')

module.exports.createPages = async({ graphql, actions }) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve('./src/templates/course.js')
    const collectionTemplate = path.resolve('./src/templates/collection.js')

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
            path: `/activities/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })

    res.data.allContentfulCourse.edges.forEach((edge) => {
        createPage({
            component: collectionTemplate,
            path: `/collections/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}