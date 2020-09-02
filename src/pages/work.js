import React, {useEffect} from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { motion, AnimatePresence } from "framer-motion"
import gsap from "gsap/all"

const Work = props => {
  useEffect(() => {
    const workTl = gsap.timeline()
    workTl.to(".work-heading", { opacity: 1, y: 0, duration: 0.5, delay: 0.2 })
    workTl.to(".project", { opacity: 1, y: 0, duration: 0.5, stagger: 0.3 })
  }, [])

  return (
    <>
      <SEO title="Work" />
      <section className="width-100-pc page-padding will-grow">
        <div className="main-wrap mx-auto wrapper-x">
          <h2 className="sectionhead-text d-flx j-c-c tx-c mb-3 block-parent w-100">
            <span className="work-heading ">
              Work
            </span>
            <AnimatePresence>
              <motion.span
                layoutId="block"
                layout
                className="blue-block"
                style={{
                  display: `inline-block`,
                  backgroundColor: `#0F52BA`,
                  height: `50px`,
                  width: `50px`,
                  marginLeft: `16px`
                }}
              ></motion.span>
            </AnimatePresence>
          </h2>
          <div className="wrapper-y will-grow">
            <div className="slide-project wrapper-y will-grow project project-item">
              <div className="project-feature-image bg-brandblue desired-height-1qtr">
                <Img
                  imgStyle={{ objectFit: "cover" }}
                  style={{ height: "100%" }}
                  fluid={props.data.payflowFeature.childImageSharp.fluid}
                  alt=""
                />
              </div>
              <div>
                <p className="largetext co-white ff-aquire">Payflow</p>
                <p className="mediumtext">
                  <span className="">FinTech</span> <br />
                  <span className="">Mobile App Design</span>
                </p>
                <Link
                  className="co-sweetblue d-ibl py-1 link"
                  to="/work/payflow"
                >
                  View Project
                </Link>
              </div>
            </div>

            <div className="slide-project wrapper-y will-grow project project-item">
              <div className="project-feature-image bg-brandblue desired-height-1qtr">
                <Img
                  imgStyle={{ objectFit: "cover" }}
                  style={{ height: "100%" }}
                  fluid={props.data.fccpcFeature.childImageSharp.fluid}
                  alt=""
                />
              </div>
              <div>
                <p className="largetext co-white ff-aquire">
                  Consumer Protection Agency Website
                </p>
                <p className="mediumtext">
                  <span className="">Agency</span> <br />
                  <span className="">Website Design</span>
                </p>
                <Link className="co-sweetblue d-ibl py-1 link" to="/work/fccpc">
                  View Project
                </Link>
              </div>
            </div>

            <div className="slide-project wrapper-y will-grow project project-item">
              <div className="project-feature-image bg-brandblue desired-height-1qtr">
                <Img
                  imgStyle={{ objectFit: "cover" }}
                  style={{ height: "100%" }}
                  fluid={props.data.festivesaveFeature.childImageSharp.fluid}
                  alt=""
                />
              </div>
              <div>
                <p className="largetext co-white ff-aquire">Festivesave</p>
                <p className="mediumtext">
                  <span className="">FinTech</span>
                  <br />
                  <span className="">Product Design</span>
                </p>
                <Link
                  className="co-sweetblue d-ibl py-1 link"
                  to="/work/festivesave"
                >
                  View Project
                </Link>
              </div>
            </div>

            <div className="slide-project wrapper-y will-grow project project-item">
              <div className="project-feature-image bg-brandblue desired-height-1qtr">
                <Img
                  imgStyle={{ objectFit: "cover" }}
                  style={{ height: "100%" }}
                  fluid={props.data.ajooFeature.childImageSharp.fluid}
                  alt=""
                />
              </div>
              <div>
                <p className="largetext co-white ff-aquire">Ajoo</p>
                <p className="mediumtext">
                  <span className="">Crowdfunding</span> <br />
                  <span className="">Web Design</span>
                </p>
                <Link className="co-sweetblue d-ibl py-1 link" to="/work/ajoo">
                  View Project
                </Link>
              </div>
            </div>

            <div className="slide-project wrapper-y will-grow project project-item">
              <div className="project-feature-image bg-brandblue desired-height-1qtr">
                <Img
                  imgStyle={{ objectFit: "cover" }}
                  style={{ height: "100%" }}
                  fluid={props.data.fluidcoinsFeature.childImageSharp.fluid}
                  alt=""
                />
              </div>
              <div>
                <p className="largetext co-white ff-aquire">FLUIDCOINS</p>
                <p className="mediumtext">
                  <span className="">Crypto Wallet</span> <br />
                  <span className="">Product Design</span>
                </p>
                <Link
                  className="co-sweetblue d-ibl py-1 link"
                  to="/work/fluidcoins"
                >
                  View Project
                </Link>
              </div>
            </div>

            <div className="slide-project wrapper-y will-grow project project-item">
              <div className="project-feature-image bg-brandblue desired-height-1qtr">
                <Img
                  imgStyle={{ objectFit: "cover" }}
                  style={{ height: "100%" }}
                  fluid={props.data.prodevsFeature.childImageSharp.fluid}
                  alt=""
                />
              </div>
              <div>
                <p className="largetext co-white ff-aquire">Prodevs</p>
                <p className="mediumtext">
                  <span className="">Recruitment</span>
                  <br />
                  <span className="">Website and Web App Design</span>
                </p>
                <Link
                  className="co-sweetblue d-ibl py-1 link"
                  to="/work/prodevs"
                >
                  View Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Work

export const pageQuery = graphql`
  query {
    fccpcFeature: file(relativePath: { eq: "fccpc-feature-image.png" }) {
      childImageSharp {
        fluid(maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    payflowFeature: file(relativePath: { eq: "payflow-feature-image.png" }) {
      childImageSharp {
        fluid(maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    prodevsFeature: file(relativePath: { eq: "prodevs-feature-image.png" }) {
      childImageSharp {
        fluid(maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ajooFeature: file(relativePath: { eq: "ajoo-feature-image.png" }) {
      childImageSharp {
        fluid(maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    festivesaveFeature: file(
      relativePath: { eq: "festivesave-feature-image.png" }
    ) {
      childImageSharp {
        fluid(maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fluidcoinsFeature: file(
      relativePath: { eq: "fluidcoins-feature-image.png" }
    ) {
      childImageSharp {
        fluid(maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
