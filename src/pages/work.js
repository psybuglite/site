import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTransition from 'gatsby-v2-plugin-page-transitions'
import swinvoice from "../images/swinvoice.png"

const Work = () => (
  <Layout>
    <SEO title="Work" />
    <PageTransition>
      <section className="width-100-pc page-padding will-grow">
        <div className="main-wrap mx-auto wrapper-x">
          <h2 className="sectionhead-text tx-c mb-3">
            Latest Work
          </h2>
          <div className="wrapper-y will-grow">
            <div className="featured-project mb-3">
              <p className="mediumtext m-0"><span className="co-primary">SAAS</span> -- <span>Frontend Development</span></p>
              <p className="largetext co-white ff-aquire">AVAXMap</p>
              <Link to="/work/payflow" className="d-blk project-feature-image desired-height bg-brandblue">
                <img
                  src={swinvoice} 
                  alt="Swinvoice" />
              </Link>
            </div>
            <Link to="/work/payflow" className="d-blk">
              <div className="slide-project project-item mb-3">
                <div className="project-feature-image bg-brandblue desired-height-1qtr"></div>
                <div>
                  <p className="mediumtext">
                    <span className="co-primary">SAAS</span>  <br/>
                    <span className="">Mobile App Design</span>
                  </p>
                  <p className="largetext co-white ff-aquire">FLUIDCOINS</p>
                </div>
              </div>
            </Link>
            <Link to="/work/payflow" className="d-blk">
              <div className="slide-project project-item mb-3">
                <div className="project-feature-image bg-brandblue desired-height-1qtr"></div>
                <div>
                  <p className="mediumtext">
                    <span className="co-primary">SAAS</span>  <br/>
                    <span className="">Mobile App Design</span>
                  </p>
                  <p className="largetext co-white ff-aquire">PayFlow</p>
                </div>
              </div>
            </Link>
            <Link to="/work/payflow" className="d-blk">
              <div className="slide-project project-item">
                <div className="project-feature-image bg-brandblue desired-height-1qtr"></div>
                <div>
                  <p className="mediumtext">
                    <span className="co-primary">SAAS</span>  <br/>
                    <span className="">Mobile App Design</span>
                  </p>
                  <p className="largetext co-white ff-aquire">FLUIDCOINS</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  </Layout>
)

export default Work
