import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header/header"
import "./layout.css"


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
      {/* <Link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" /> */}
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="body-container" >
        <main>{children}</main>
        <footer>
          <div className="purple-bottom">
            <div className="container" style={{ paddingTop: '20px' }}>
              <p className="text-white" style={{ textAlign: 'right' }}> TecAcademy 2019 </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
