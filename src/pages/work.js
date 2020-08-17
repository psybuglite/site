import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTransition from 'gatsby-v2-plugin-page-transitions'

const Work = () => (
  <PageTransition>
    <Layout>
      <SEO title="Work" />
      <section className="width-100-pc page-padding">
        <div className="main-wrap mx-auto wrapper">
          <div className="wrapper-y will-grow"></div>
        </div>
      </section>
    </Layout>
  </PageTransition>
)

export default Work
