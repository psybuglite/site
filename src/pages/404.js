import React from "react"

import Layout from "../components/layout"
import Footer from "../components/footer"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <section className="width-100-pc hide-flow-x main-top">
        <div className="clearfix maxwidth-sl wrapper-x desired-height-3qtr d-flx flex-dir-col j-c-c tx-c writing-m-top mx-auto">
          <h1>Whoa!!! That was weird.</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          <br />
          <p>Use the navigation above to get back to a more useful page.</p>
        </div>
    </section>
    <Footer />
  </Layout>
)

export default NotFoundPage
