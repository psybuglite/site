import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTransition from 'gatsby-v2-plugin-page-transitions'
import payflowFeature from "../images/payflow-feature-image.png"
import fluidcoinsFeature from "../images/fluidcoins-feature-image.png"
import festivesaveFeature from "../images/festivesave-feature-image.png"
import fccpcFeature from "../images/fccpc-feature-image.png"
import ajooFeature from "../images/ajoo-feature-image.png"
import prodevsFeature from "../images/prodevs-feature-image.png"

const Work = () => {
  return (
    <Layout>
      <SEO title="Work" />
      <PageTransition>
        <section className="width-100-pc page-padding will-grow">
          <div className="main-wrap mx-auto wrapper-x">
            <h2 className="sectionhead-text tx-c mb-3">
              Work
            </h2>
            <div className="wrapper-y will-grow">
              <div className="featured-project mb-3">
                <p className="mediumtext m-0"><span className="">FinTech</span> -- <span>Product Design</span></p>
                <p className="largetext m-0 co-white ff-aquire">Payflow</p>
                <Link className="co-sweetblue link d-ibl py-1 mb-2" to="/work/payflow">
                  View Project
                </Link>
                <div className="d-blk project-feature-image desired-height bg-brandblue">
                  <img
                    src={payflowFeature} 
                    alt="Swinvoice" />
                </div>
              </div>

              <div className="slide-project project-item">
                <div className="project-feature-image bg-brandblue desired-height-1qtr">
                  <img src={fccpcFeature} alt=""/>
                </div>
                <div>
                  <p className="mediumtext">
                    <span className="">Agency</span>  <br/>
                    <span className="">Website Design</span>
                  </p>
                  <p className="largetext co-white ff-aquire">Consumer Protection Agency Website</p>
                  <Link className="co-sweetblue d-ibl py-1 link" to="/work/fccpc">
                    View Project
                  </Link>
                </div>
              </div>

              <div className="slide-project project-item mb-3">
                <div className="project-feature-image bg-brandblue desired-height-1qtr">
                  <img src={festivesaveFeature} alt=""/>
                </div>
                <div>
                  <p className="mediumtext">
                    <span className="">FinTech</span><br/>
                    <span className="">Product Design</span>
                  </p>
                  <p className="largetext co-white ff-aquire">Festivesave</p>
                  <Link className="co-sweetblue d-ibl py-1 link" to="/work/festivesave">
                    View Project
                  </Link>
                </div>
              </div>

              <div className="slide-project project-item">
                <div className="project-feature-image bg-brandblue desired-height-1qtr">
                  <img src={ajooFeature} alt=""/>
                </div>
                <div>
                  <p className="mediumtext">
                    <span className="">Crowdfunding</span>  <br/>
                    <span className="">Web Design</span>
                  </p>
                  <p className="largetext co-white ff-aquire">Ajoo</p>
                  <Link className="co-sweetblue d-ibl py-1 link" to="/work/ajoo">
                    View Project
                  </Link>
                </div>
              </div>

              <div className="slide-project project-item mb-3">
                <div className="project-feature-image bg-brandblue desired-height-1qtr">
                  <img src={fluidcoinsFeature} alt=""/>
                </div>
                <div>
                  <p className="mediumtext">
                    <span className="">Crypto Wallet</span>  <br/>
                    <span className="">Product Design</span>
                  </p>
                  <p className="largetext co-white ff-aquire">FLUIDCOINS</p>
                  <Link className="co-sweetblue d-ibl py-1 link" to="/work/fluidcoins">
                    View Project
                  </Link>
                </div>
              </div>

              <div className="slide-project project-item">
                <div className="project-feature-image bg-brandblue desired-height-1qtr">
                  <img src={prodevsFeature} alt=""/>
                </div>
                <div>
                  <p className="mediumtext">
                    <span className="">Recruitment</span><br/>
                    <span className="">Website and Web App Design</span>
                  </p>
                  <p className="largetext co-white ff-aquire">Prodevs</p>
                  <Link className="co-sweetblue d-ibl py-1 link" to="/work/fluidcoins">
                    View Project
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  )
}
export default Work
