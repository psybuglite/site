import React from "react"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <section className="width-100-pc page-padding">
      <div className="clearfix maxwidth-sl wrapper-x desired-height-3qtr d-flx flex-dir-col j-c-c tx-c writing-m-top mx-auto">
        <h1>Whoa!!! That was weird.</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <br />
        <p>Use the navigation menu to get back to a more useful page.</p>
      </div>
    </section>
  </>
)

export default NotFoundPage
