import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import OpenIconSpeedDial from "./speeddial"
import Header from "./header/header"


import { ThemeProvider } from '@material-ui/styles';
import theme from "../theme/muiTheme"

import Footer from "../components/footer"
// import "./layout.css"



const Layout = ({ children }) => {
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
    <>
          <OpenIconSpeedDial></OpenIconSpeedDial>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div className="body-container" >
            <ThemeProvider theme={theme}>

              <main>{children}</main>
              
            </ThemeProvider>
          </div>
          <Footer></Footer>
      {/* <Link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" /> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
