module.exports = {
    siteMetadata: {
        title: `Tec Academy`,
        description: `TecAcademy es el espacio que nos permite desarrollar nuestras habilidades softs y hard, mediante talleres, meetups, pizza nights, after office, etc.`,
        author: `@gatsbyjs`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-material-ui`,

        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `TecAcademy`,
                short_name: `TecAcademy`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `${__dirname}/src/images/favicon.png` // This path is relative to the root of the site.
            }
        },
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `bk8y4a351wjr`,
                accessToken: 'edf0K8iHJHe7ZBVOb7C9xo2T45qJkwP2zlHGp8GgHwg'
            }
        },
        {
            resolve: `gatsby-plugin-offline`,
            options: {
                importWorkboxFrom: `cdn`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-sass`,
        // 'gatsby-plugin-styled-components',

    ]
};