module.exports = {
	siteMetadata: {
		title: `Gatsby Default Starter`,
		description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `@gatsbyjs`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-material-ui`
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `bk8y4a351wjr`,
				accessToken: 'GGNP4ET5b3NJWq32NMBHLLxuGzg_dRvDF_6cwjIECss'
			}
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
		'gatsby-plugin-styled-components',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
			}
		},
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				google: {
					families: [ 'Avenir: 900', 'Lato: 400, 900, 700' ]
				}
			}
		}
	]
};
