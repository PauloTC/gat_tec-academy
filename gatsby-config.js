module.exports = {
	siteMetadata: {
		title: `Gatsby Default Starter`,
		description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `@gatsbyjs`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-material-ui`,
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `bk8y4a351wjr`,
				accessToken: 'edf0K8iHJHe7ZBVOb7C9xo2T45qJkwP2zlHGp8GgHwg'
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
		// 'gatsby-plugin-styled-components',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `TecAcademy`,
				short_name: `Tec`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/favicon.jpeg` // This path is relative to the root of the site.
			}
		},
		// {
		// 	resolve: 'gatsby-plugin-web-font-loader',
		// 	options: {
		// 		google: {
		// 			families: [ 'Avenir: 900', 'Lato: 400, 900, 700' ]
		// 		}
		// 	}
		// }
	]
};
