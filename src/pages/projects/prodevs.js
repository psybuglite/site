import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { motion, AnimatePresence } from "framer-motion"
import SEO from "../../components/seo"

const Prodevs = props => {
  return (
    <>
      <SEO title="Prodevs | Projects | Dennis Dickson" />
      <section className="width-100-pc page-padding">
        <div className="maxwidth-xl mx-auto wrapper">
          <div className="project-feature-image mb-2 desired-height-3rd">
            <AnimatePresence>
              <motion.div
                  layoutId="prodevs-feature"
                  layout
                  style={{ height: "100%" }}
              >
              <Img
                imgStyle={{ objectFit: "cover" }}
                style={{ height: "100%" }}
                fluid={props.data.prodevsFeatureImage.childImageSharp.fluid}
                alt="Prodevs"
              />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="wrapper-y grid is-multi-col mostly-2">
            <div className="">
              <h2 className="largertext mt-0 co-white ff-aquire">Prodevs</h2>
              <p className="mediumtext co-sweetblue">Recruitment</p>
              <p className="smalltext">Website Design</p>
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
              <p>Prodevs is a recruitment and outsourcing company that helps other companies and business owners get the help they need with modern technologies through highly skilled individuals available in their pool of talents.</p>
              <p>By giving managers and business owners the same platform to meet technical talent, Prodevs aims to restructure the hiring process for technical individuals.</p>
            </div>
          </div>

          <div className="wrapper-y will-grow grid is-multi-col mostly-2">
            <div className="project-feature-image bg-brandblue">
              <Img
                fluid={props.data.prodevsHome.childImageSharp.fluid}
                alt=""
              />
            </div>
            <div className="project-feature-image bg-brandblue">
              <Img
                fluid={props.data.prodevsTalent.childImageSharp.fluid}
                alt=""
              />
            </div>
          </div>

          <div className="wrapper-y will-grow">
            <div className="project-feature-image bg-brandblue">
              <Img
                fluid={props.data.prodevsManagers.childImageSharp.fluid}
                alt=""
              />
            </div>
          </div>

          <div className="wrapper-y will-grow grid is-multi-col mostly-2">
            <div className="project-feature-image bg-brandblue">
              <Img
                fluid={props.data.prodevsRole.childImageSharp.fluid}
                alt=""
              />
            </div>
            <div className="project-feature-image bg-brandblue">
              <Img
                fluid={props.data.prodevsSignup.childImageSharp.fluid}
                alt=""
              />
            </div>
          </div>

          <div className="wrapper-y will-grow">
            <div className="project-feature-image bg-brandblue">
              <Img
                fluid={props.data.prodevsBoard.childImageSharp.fluid}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Prodevs

export const pageQuery = graphql`
  query {
    prodevsFeatureImage: file(
      relativePath: { eq: "prodevs-feature-image.png" }
    ) {
      childImageSharp {
        fluid(maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    prodevsHome: file(relativePath: { eq: "prodevs-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    prodevsBoard: file(relativePath: { eq: "prodevs-board.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    prodevsManagers: file(relativePath: { eq: "prodevs-managers.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    prodevsTalent: file(relativePath: { eq: "prodevs-talent.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    prodevsRole: file(relativePath: { eq: "prodevs-role.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    prodevsSignup: file(relativePath: { eq: "prodevs-signup.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
