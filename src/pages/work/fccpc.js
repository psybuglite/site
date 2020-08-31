import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import PageTransition from 'gatsby-v2-plugin-page-transitions'

const Fccpc = (props) => {
  return (
    <Layout>
      <PageTransition>
        <section className="width-100-pc page-padding">
          <div className="maxwidth-xl mx-auto wrapper">
            <div className="project-feature-image mb-2 bg-brandblue desired-height-3rd">
              <Img 
                imgStyle={{objectFit: 'cover'}}
                style={{height: "100%"}}
                fluid={props.data.fccpcFeatureImage.childImageSharp.fluid} 
                alt=""
              />
            </div>
            <div className="wrapper-y project-description grid is-multi-col mostly-2">
              <div className="">
                <h2 className="largertext mt-0 co-white ff-aquire">
                  fccpc
                </h2>
                <p className="mediumtext co-primary">SAAS</p>
                <p className="smalltext">Website Design</p>
              </div>
              <div>
                <p>
                  Vitae sed tellus ipsum at pulvinar risus. Turpis tellus, adipiscing sit vitae risus, elementum facilisi urna. Amet ut at nisi cursus enim at interdum. Tristique vitae quis faucibus congue. Velit in nunc, imperdiet interdum id. Pellentesque cursus malesuada tellus purus suspendisse at. Nec, at porttitor quis netus vitae risus convallis sit. Nibh faucibus vitae in phasellus sed integer. Quam eu libero neque, lobortis lectus habitant adipiscing nulla.

                  Vivamus scelerisque vitae massa nisi. Habitant rhoncus praesent integer egestas. Nunc, feugiat tempor nulla est hac et, egestas non. Pulvinar vulputate volutpat nam donec dictum lacus molestie quis. Libero convallis amet, molestie ac suscipit in eget. Cras curabitur nibh tellus eu pretium dictum.
                </p>
              </div>
            </div>

            <div className="wrapper-y will-grow project-description grid is-multi-col mostly-2">
              <div className="project-feature-image bg-brandblue">
                <Img fluid={props.data.fccpcHome.childImageSharp.fluid} alt=""/>
              </div>
              <div className="project-feature-image bg-brandblue">
                <Img fluid={props.data.fccpcAbout.childImageSharp.fluid} alt=""/>
              </div>
            </div>

            <div className="wrapper-y will-grow project-description">
              <div className="project-feature-image bg-brandblue">
                <Img fluid={props.data.fccpcHowTo.childImageSharp.fluid} alt=""/>
              </div>
            </div>

            <div className="wrapper-y will-grow project-description grid is-multi-col mostly-2">
              <div className="project-feature-image bg-brandblue">
                <Img fluid={props.data.fccpcPeople.childImageSharp.fluid} alt=""/>
              </div>
              <div className="project-feature-image bg-brandblue">
                <Img fluid={props.data.fccpcGallery.childImageSharp.fluid} alt=""/>
              </div>
            </div>

            <div className="wrapper-y will-grow project-description">
              <div className="project-feature-image bg-brandblue">
                <Img fluid={props.data.fccpcReleases.childImageSharp.fluid} alt=""/>
              </div>
            </div>
            
          </div>
        </section>
      </PageTransition>
    </Layout>
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