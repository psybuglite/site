import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { motion, AnimatePresence } from "framer-motion"
import SEO from "../../components/seo"

const Fccpc = props => {
  return (
    <>
      <SEO title="FCCPC | Projects | Dennis Dickson" />
      <section className="width-100-pc page-padding">
        <div className="maxwidth-xl mx-auto wrapper">
          <div className="project-feature-image mb-2 bg-brandblue desired-height-3rd">
            <Img
              imgStyle={{ objectFit: "cover" }}
              style={{ height: "100%" }}
              fluid={props.data.fccpcFeatureImage.childImageSharp.fluid}
              alt=""
            />
          </div>
          <div className="wrapper-y project-description grid is-multi-col mostly-2">
            <div className="">
              <h2 className="largertext mt-0 co-white ff-aquire">Consumer Protection</h2>
              <p className="mediumtext co-primary">Agency</p>
              <p className="smalltext">Website Design &amp; Development</p>
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
            <div className="mediumtext">
              <p>The federal agency for consumer protection in Nigeria website design and development was done to push the agency's activities and what it stood for in service of Nigerians into the public eye.</p>
              <p>Before the project was initiated, many consumers in the public were not aware of the rights they had as consumers of goods and services and the protection act that was put in place for their benefit</p>
              <p>Most of the content from their old site as well as newly created content for about the agency had to be put in the same place.</p>
              
            </div>
          </div>

          <div className="wrapper-y will-grow project-description grid is-multi-col mostly-2">
            <div className="project-feature-image bg-brandblue">
              <Img fluid={props.data.fccpcHome.childImageSharp.fluid} alt="" />
            </div>
            <div className="project-feature-image bg-brandblue">
              <Img fluid={props.data.fccpcAbout.childImageSharp.fluid} alt="" />
            </div>
          </div>

          <div className="wrapper-y will-grow project-description">
          <p className="mediumtext maxwidth-tb">Informative and other instructional materials were also placed on the website for visitors and consumers in readily accessible formats.</p>
            <div className="project-feature-image bg-brandblue">
              <Img fluid={props.data.fccpcHowTo.childImageSharp.fluid} alt="" />
            </div>
          </div>

          <div className="wrapper-y will-grow project-description grid is-multi-col mostly-2">
            <div className="project-feature-image bg-brandblue">
              <Img
                fluid={props.data.fccpcPeople.childImageSharp.fluid}
                alt=""
              />
            </div>
            <div className="project-feature-image bg-brandblue">
              <Img
                fluid={props.data.fccpcGallery.childImageSharp.fluid}
                alt=""
              />
            </div>
          </div>

          <div className="wrapper-y will-grow project-description">
          <p className="mediumtext maxwidth-tb">Updates on the agency's activities, from press releases, publications, as well as news and events were all accounted for.</p>
            <div className="project-feature-image bg-brandblue">
              <Img
                fluid={props.data.fccpcReleases.childImageSharp.fluid}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Fccpc

export const pageQuery = graphql`
  query {
    fccpcFeatureImage: file(relativePath: { eq: "fccpc-feature-image.png" }) {
      childImageSharp {
        fluid(maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fccpcHome: file(relativePath: { eq: "fccpc-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fccpcAbout: file(relativePath: { eq: "fccpc-about.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fccpcGallery: file(relativePath: { eq: "fccpc-gallery.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fccpcHowTo: file(relativePath: { eq: "fccpc-how-to.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fccpcReleases: file(relativePath: { eq: "fccpc-releases.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fccpcPeople: file(relativePath: { eq: "fccpc-people.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
