import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Footer from "../components/footer"


const Work = () => (
  <Layout>
    <SEO title="Work" />

    <section className="width-100-pc hide-flow-x main-top">
      <div className="maxwidth-sl mx-auto wrapper work-top h-100">

        <ul className="none">
            <li>
                <a href="https://eyowo.com" title="Eyowo" className="d-ibl py-1 mediumtext" rel="noopener noreferrer">Eyowo</a>
            </li>
            <li>
                <a href="https://cpc.gov.ng" title="Consumer Protection Council" className="d-ibl py-1 mediumtext" rel="noopener noreferrer">Consumer Protection Council</a>
            </li>
            <li>
                <a href="https://swinvoice.com" title="Swinvoice" className="d-ibl py-1 mediumtext" rel="noopener noreferrer">Swinvoice</a>
            </li>
            <li>
                <a href="https://festivesave.com" title="Festivesave" className="d-ibl py-1 mediumtext" rel="noopener noreferrer">Festivesave</a>
            </li>
            <li>
                <a href="https://stellarball.com" title="Stellarball" className="d-ibl py-1 mediumtext" rel="noopener noreferrer">Stellarball</a>
            </li>
            <li>
                <a href="https://cnsmarine-nigeria.com" title="CNS Marine Nigeria" className="d-ibl py-1 mediumtext" rel="noopener noreferrer">CNS Marine Nigeria</a>
            </li>
            <li>
                <a href="https://mkobo.com.ng" title="Mkobo" className="d-ibl py-1 mediumtext" rel="noopener noreferrer">Mkobo</a>
            </li>
        </ul>

        <div className="wrapper-y will-grow">
          <p>
          Note: links are for informational purposes, not necessarily examples of the work performed.
          </p>
        </div>
      </div>
    </section>

    <Footer />

  </Layout>
)

export default Work
