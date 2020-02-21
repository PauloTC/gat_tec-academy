const path = require('path')

module.exports.createPages = async({ graphql, page, actions }) => {
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

exports.onCreatePage = async({ page, actions }) => {
    const { createPage } = actions;

    if (page.path.match(/^\/account/)) {
        page.matchPath = "/account/*";
        createPage(page)
    }
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === 'build-html') {
        // Exclude Sign-In Widget from compilation path
        actions.setWebpackConfig({
            module: {
                rules: [{
                    test: /okta-sign-in/,
                    use: loaders.null(),
                }],
            },
        })
    }
};