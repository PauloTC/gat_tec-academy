import React from "react"

import { Link } from "gatsby"

import BannerHome from "../components/home/home-banner"
import HomeAcademy from "../components/home/home-academy"
import HomeAwards from "../components/awards/home-awards"
import HomePoints from "../components/home/home-points"

import Layout from "../components/layout"

const IndexPage = () => {

  return (
    <Layout>
      {/* <SEO title="Home" /> */}

      <BannerHome />
      <HomeAcademy />
      <HomeAwards />
      <HomePoints />
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
  )
}

export default IndexPage
