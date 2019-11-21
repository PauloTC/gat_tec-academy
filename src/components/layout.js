import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header/header"
import { ThemeProvider } from '@material-ui/styles';
import theme from "../theme/muiTheme"
import Footer from "./footer/footer"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  body: {
    background: 'white',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent : 'space-between'
  },
  containergeneral: {
    overflow: 'hidden'
  }
}));


const Layout = ({ children }) => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  return (
    <ThemeProvider theme={theme}>
      <body  className={classes.body} >
            <Header siteTitle={data.site.siteMetadata.title} />
            <div className= { classes.containergeneral }  >

                <main>{children}</main>
                
            </div>
            <Footer></Footer>
        {/* <Link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" /> */}
      </body>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
