import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { motion, AnimatePresence } from "framer-motion"
import SEO from "../../components/seo"

const Ajoo = (props) => {
  return (
    <>
      <SEO title="Ajoo | Projects | Dennis Dickson" />
      <section className="width-100-pc page-padding">
        <div className="maxwidth-xl mx-auto wrapper">
          <div className="project-feature-image mb-2 bg-brandblue desired-height-3rd">
            <Img 
              imgStyle={{objectFit: 'cover'}}
              style={{height: "100%"}}
              fluid={props.data.ajooFeatureImage.childImageSharp.fluid} 
              alt=""
            />
          </div>
          <div className="wrapper-y project-description grid is-multi-col mostly-2">
            <div className="">
              <h2 className="largertext mt-0 co-white ff-aquire">
                Ajoo
              </h2>
              <p className="mediumtext co-primary">Crowdfunding</p>
              <p className="mediumtext">Website Design</p>
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
              <p>
              We are building a community where people with critical financial needs get the necessary assistance from well meaning Nigerians.  

              Start fundraising in minutes. No goal requirements, no deadlines.

              Partnership with reliable and trusted organizations and volunteers.

              Our campaign coaches will answer your questions in 5 minutes, day or night.

              The Ajoo Safety Guarantee protects your donations and supporters.
              </p>
            </div>
          </div>

          <div className="wrapper-y will-grow project-description grid is-multi-col mostly-2">
            <div className="project-feature-image bg-brandblue">
              <Img fluid={props.data.ajooHome.childImageSharp.fluid} alt=""/>
            </div>
            <div className="project-feature-image bg-brandblue">
              <Img fluid={props.data.ajooOrganisation.childImageSharp.fluid} alt=""/>
            </div>
          </div>

          <div className="wrapper-y will-grow project-description">
            <div className="project-feature-image bg-brandblue">
              <Img fluid={props.data.ajooLogin.childImageSharp.fluid} alt=""/>
            </div>
          </div>

          <div className="wrapper-y will-grow project-description grid is-multi-col mostly-2">
            <div className="project-feature-image bg-brandblue">
              <Img fluid={props.data.ajooExplore.childImageSharp.fluid} alt=""/>
            </div>
            <div className="project-feature-image bg-brandblue">
              <Img fluid={props.data.ajooChoose.childImageSharp.fluid} alt=""/>
            </div>
          </div>

          <div className="wrapper-y will-grow project-description">
            <div className="project-feature-image bg-brandblue">
              <Img fluid={props.data.ajooVolunteers.childImageSharp.fluid} alt=""/>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Ajoo

export const pageQuery = graphql`
  query {
    ajooFeatureImage: file(relativePath: { eq: "ajoo-feature-image.png" }) {
      childImageSharp {
        fluid(maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ajooHome: file(relativePath: { eq: "ajoo-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ajooVolunteers: file(relativePath: { eq: "ajoo-volunteers.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ajooChoose: file(relativePath: { eq: "ajoo-choose.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ajooExplore: file(relativePath: { eq: "ajoo-explore.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ajooLogin: file(relativePath: { eq: "ajoo-login.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ajooOrganisation: file(relativePath: { eq: "ajoo-organisation.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`