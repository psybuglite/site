import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import PageTransition from 'gatsby-v2-plugin-page-transitions'

const Prodevs = (props) => {
  return (
    <Layout>
      <PageTransition>
        <section className="width-100-pc page-padding">
          <div className="maxwidth-xl mx-auto wrapper">
            <div className="project-feature-image mb-2 bg-brandblue desired-height-3rd">
            <Img 
                imgStyle={{objectFit: 'cover'}}
                style={{height: "100%"}}
                fluid={props.data.prodevsFeatureImage.childImageSharp.fluid} 
                alt=""
              />
            </div>
            <div className="wrapper-y project-description grid is-multi-col mostly-2">
              <div className="">
                <h2 className="largertext mt-0 co-white ff-aquire">
                  prodevs
                </h2>
                <p className="mediumtext co-primary">SAAS</p>
                <p className="mediumtext">Mobile App Design</p>
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
                <Img fluid={props.data.prodevsHome.childImageSharp.fluid} alt=""/>
              </div>
              <div className="project-feature-image bg-brandblue">
                <Img fluid={props.data.prodevsTalent.childImageSharp.fluid} alt=""/>
              </div>
            </div>

            <div className="wrapper-y will-grow project-description">
              <div className="project-feature-image bg-brandblue">
                <Img fluid={props.data.prodevsManagers.childImageSharp.fluid} alt=""/>
              </div>
            </div>

            <div className="wrapper-y will-grow project-description grid is-multi-col mostly-2">
              <div className="project-feature-image bg-brandblue">
                <Img fluid={props.data.prodevsRole.childImageSharp.fluid} alt=""/>
              </div>
              <div className="project-feature-image bg-brandblue">
                <Img fluid={props.data.prodevsSignup.childImageSharp.fluid} alt=""/>
              </div>
            </div>

            <div className="wrapper-y will-grow project-description">
              <div className="project-feature-image bg-brandblue">
                <Img fluid={props.data.prodevsBoard.childImageSharp.fluid} alt=""/>
              </div>
            </div>

          </div>
        </section>
      </PageTransition>
    </Layout>
  )
}

export default Prodevs

export const pageQuery = graphql`
  query {
    prodevsFeatureImage: file(relativePath: { eq: "prodevs-feature-image.png" }) {
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