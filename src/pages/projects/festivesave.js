import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { motion, AnimatePresence } from "framer-motion"
import SEO from "../../components/seo"

const Festivesave = props => {
  return (
    <>
      <SEO title="Festivesave | Projects | Dennis Dickson" />
      <section className="width-100-pc page-padding">
        <div className="maxwidth-xl mx-auto wrapper">
          <div className="project-feature-image mb-2 desired-height-3rd">
            <AnimatePresence>
              <motion.div
                  layoutId="festivesave-feature"
                  layout
                  style={{ height: "100%" }}
              >
              <Img
                imgStyle={{ objectFit: "cover" }}
                style={{ height: "100%" }}
                fluid={props.data.festivesaveFeatureImage.childImageSharp.fluid}
                alt="festivesave"
              />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="wrapper-y grid is-multi-col mostly-2">
            <div className="">
              <h2 className="largertext mt-0 co-white ff-aquire">
                festivesave
              </h2>
              <p className="mediumtext co-sweetblue">SAAS</p>
              <p className="smalltext">Mobile App Design</p>
              <AnimatePresence>
                <motion.span
                  layoutId="block"
                  layout
                  className="blue-block"
                  style={{
                    display: `inline-block`,
                    backgroundColor: `#0F52BA`,
                    height: `50px`,
                    width: `50px`
                  }}
                ></motion.span>
              </AnimatePresence>
            </div>
            <div className="smalltext">
              <p>Festivesave reduces the pressure associated with any festive celebration such as Christmas, Eid-Kabir, Easter or Eid-Fitri by giving you the tools to save, plan and shop for the celebration.</p>
            </div>
          </div>

          <div className="wrapper-y will-grow grid is-multi-col mostly-2">
            <div className="project-feature-image bg-brandblue">
              <Img
                fluid={props.data.festivesaveOnboarding.childImageSharp.fluid}
                alt=""
              />
            </div>
            <div className="project-feature-image bg-brandblue">
              <Img
                fluid={props.data.festivesaveHome.childImageSharp.fluid}
                alt=""
              />
            </div>
          </div>

          <div className="wrapper-y will-grow grid is-multi-col mostly-2">
            <div className="smalltext">
              <p>Default savings plans include the four major festive periods in Nigeria. Savings will be made periodically over a period of time and withdrawal will be available just in time for the festive period.</p>
            </div>
            <div className="project-feature-image bg-brandblue">
              <Img
                fluid={props.data.festivesaveOptions.childImageSharp.fluid}
                alt=""
              />
            </div>
          </div>

          <div className="wrapper-y will-grow grid is-multi-col mostly-2">
            <div className="smalltext">
              <p>
                All savings and funds can be tracked as interests on savings accumulate over time.
              </p>
            </div>
            <div className="project-feature-image bg-brandblue">
              <Img
                fluid={props.data.festivesaveHistory.childImageSharp.fluid}
                alt=""
              />
            </div>
          </div>

          <div className="wrapper-y will-grow grid is-multi-col mostly-2">
            <div className="project-feature-image bg-brandblue">
              <Img
                fluid={props.data.festivesaveProfile.childImageSharp.fluid}
                alt=""
              />
            </div>
            <div className="project-feature-image bg-brandblue">
              <Img
                fluid={props.data.festivesaveAccount.childImageSharp.fluid}
                alt=""
              />
            </div>
          </div>

          <div className="wrapper-y will-grow grid is-multi-col mostly-2">
            <div className="">
              <p>
                Savings can be made automatically or manually, depending on the preference of the person saving for the festive season.
              </p>
            </div>
            <div className="project-feature-image bg-brandblue">
              <Img
                fluid={props.data.festivesaveChosen.childImageSharp.fluid}
                alt=""
              />
            </div>
          </div>

          <div className="wrapper-y will-grow grid is-multi-col mostly-2">
            <div className="project-feature-image bg-brandblue">
              <Img
                fluid={props.data.festivesaveAuto.childImageSharp.fluid}
                alt=""
              />
            </div>
            <div className="project-feature-image bg-brandblue">
              <Img
                fluid={props.data.festivesaveManual.childImageSharp.fluid}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Festivesave

export const pageQuery = graphql`
  query {
    festivesaveFeatureImage: file(
      relativePath: { eq: "festivesave-feature-image.png" }
    ) {
      childImageSharp {
        fluid(maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    festivesaveHome: file(relativePath: { eq: "festivesave-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    festivesaveOnboarding: file(
      relativePath: { eq: "festivesave-onboarding.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    festivesaveAuto: file(relativePath: { eq: "festivesave-auto.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    festivesaveChosen: file(relativePath: { eq: "festivesave-chosen.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    festivesaveHistory: file(relativePath: { eq: "festivesave-history.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    festivesaveOptions: file(relativePath: { eq: "festivesave-options.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    festivesaveManual: file(relativePath: { eq: "festivesave-manual.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    festivesaveProfile: file(relativePath: { eq: "festivesave-profile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    festivesaveAccount: file(relativePath: { eq: "festivesave-account.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
