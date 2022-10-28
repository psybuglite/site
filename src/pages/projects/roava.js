import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { motion, AnimatePresence } from "framer-motion"
import SEO from "../../components/seo"

const Roava = props => {
  return (
    <>
      <SEO title="Payflow | Projects | Tonye Dickson" />
      <section className="width-100-pc page-padding">
        <div className="maxwidth-xl mx-auto wrapper">
          <div className="project-feature-image mb-2 desired-height-3rd">
            <AnimatePresence>
              <motion.div
                  layoutId="payflow-feature"
                  layout
                  style={{ height: "100%" }}
              >
              <Img
                imgStyle={{ objectFit: "cover" }}
                style={{ height: "100%" }}
                fluid={props.data.payflowFeatureImage.childImageSharp.fluid}
                alt="Payflow"
              />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="wrapper-y   grid is-multi-col mostly-2">
            <div className="">
              <h2 className="largertext mt-0 co-white ff-aquire">Payflow</h2>
              <p className="mediumtext co-sweetblue">FinTech</p>
              <p className="mediumtext">Mobile App Design</p>
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
            <div>
              <p className="smalltext">Payflow is a financial wellness and inclusion platform that provides employees with on-demand access to earned wages (EWA) at anytime during the month before pay day. It also provides an easy way to save money for a rainy day and access to financial tools and education to manage your finances better to relieve financial stress.
              </p>
            </div>
          </div>

          <div className="wrapper-y will-grow grid is-multi-col mostly-2">
            <div className="project-feature-image bg-brandblue">
              <Img
                fluid={props.data.payflowOnboarding.childImageSharp.fluid}
                alt=""
              />
            </div>
            <div className="project-feature-image bg-brandblue">
              <Img
                fluid={props.data.payflowHome.childImageSharp.fluid}
                alt=""
              />
            </div>
          </div>

          <div className="wrapper-y will-grow grid is-multi-col mostly-2">
            <div className="smalltext">
              <p>
                For verification and authentication, only phone numbers and employee idendtification numbers are required. This helps to ensure that the employer can instantly verify their number.
              </p>
              <p>Employee ID is unique to employees, irrespective of who their employer is, as long as they are partnered with Payflow.</p>
            </div>
            <div className="project-feature-image bg-brandblue">
              <Img
                fluid={props.data.payflowNumber.childImageSharp.fluid}
                alt=""
              />
            </div>
          </div>

          <div className="wrapper-y will-grow grid is-multi-col mostly-2">
            <div className="smalltext">
              <p>
                Emloyees on Payflow will always have access to their earned wages and can with draw from Payflow at any time of the month.
              </p>
            </div>
            <div className="project-feature-image bg-brandblue">
              <Img
                fluid={props.data.payflowEarn.childImageSharp.fluid}
                alt=""
              />
            </div>
          </div>

          <div className="wrapper-y will-grow">
            <div className="smalltext maxwidth-tb mb-2">
              <p>Payflow makes it easy for Employees to set savings goals and decide how much they want to save from their earnings each month.</p>
            </div>
            <div className="grid is-multi-col mostly-2">
              <div className="project-feature-image bg-brandblue">
                <Img
                  fluid={props.data.payflowSave1.childImageSharp.fluid}
                  alt=""
                />
              </div>
              <div className="project-feature-image bg-brandblue">
                <Img
                  fluid={props.data.payflowSave2.childImageSharp.fluid}
                  alt=""
                />
              </div>
            </div>
          </div>


          <div className="wrapper-y will-grow grid is-multi-col mostly-2">
            <div className="smalltext">
              <p>
              Whether your goal is to learn effective budgeting skills, save for the future, or find a way out of debt, our financial literacy tools can equip you with the necessary knowledge.
              </p>
            </div>
            <div className="project-feature-image bg-brandblue">
              <Img
                fluid={props.data.payflowLearn.childImageSharp.fluid}
                alt=""
              />
            </div>
          </div>

          <div className="wrapper-y will-grow">
            <div className="smalltext maxwidth-tb mb-2">
              <p>Whether your goal is to learn effective budgeting skills, save for the future, or find a way out of debt, our financial literacy tools can equip you with the necessary knowledge.</p>
            </div>
            <div className="grid is-multi-col mostly-2">
              <div className="project-feature-image bg-brandblue">
                <Img
                  fluid={props.data.payflowProsper1.childImageSharp.fluid}
                  alt=""
                />
              </div>
              <div className="project-feature-image bg-brandblue">
                <Img
                  fluid={props.data.payflowProsper2.childImageSharp.fluid}
                  alt=""
                />
              </div>
            </div>
          </div>


          <div className="wrapper-y will-grow grid is-multi-col mostly-2">
            <div className="project-feature-image bg-brandblue">
              <Img
                fluid={props.data.payflowProfile.childImageSharp.fluid}
                alt=""
              />
            </div>
            <div className="project-feature-image bg-brandblue">
              <Img
                fluid={props.data.payflowHistory.childImageSharp.fluid}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Roava

export const pageQuery = graphql`
  query {
    payflowFeatureImage: file(
      relativePath: { eq: "payflow-feature-image.png" }
    ) {
      childImageSharp {
        fluid(maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    payflowHome: file(relativePath: { eq: "payflow-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    payflowOnboarding: file(relativePath: { eq: "payflow-onboarding.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    payflowEarn: file(relativePath: { eq: "payflow-earn.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    payflowLearn: file(relativePath: { eq: "payflow-learn.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    payflowSave1: file(relativePath: { eq: "payflow-save-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    payflowSave2: file(relativePath: { eq: "payflow-save-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    payflowProsper1: file(relativePath: { eq: "payflow-prosper-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    payflowProsper2: file(relativePath: { eq: "payflow-prosper-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    payflowNumber: file(relativePath: { eq: "payflow-number.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    payflowHistory: file(relativePath: { eq: "payflow-history.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    payflowProfile: file(relativePath: { eq: "payflow-profile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
