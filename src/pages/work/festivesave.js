import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import PageTransition from 'gatsby-v2-plugin-page-transitions'

const Festivesave = (props) => {
  return (
    <Layout>
      <PageTransition>
        <section className="width-100-pc page-padding">
          <div className="maxwidth-xl mx-auto wrapper">
            <div className="project-feature-image mb-2 bg-brandblue desired-height-3rd">
              <Img 
                imgStyle={{objectFit: 'cover'}}
                style={{height: "100%"}}
                fluid={props.data.festivesaveFeatureImage.childImageSharp.fluid} 
                alt=""
              />
            </div>
            <div className="wrapper-y project-description grid is-multi-col mostly-2">
              <div className="">
                <h2 className="largertext mt-0 co-white ff-aquire">
                  festivesave
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
                <Img fluid={props.data.festivesaveOnboarding.childImageSharp.fluid} alt=""/>
              </div>
              <div className="project-feature-image bg-brandblue">
                <Img fluid={props.data.festivesaveHome.childImageSharp.fluid} alt="" />
              </div>
            </div>
            
            <div className="wrapper-y will-grow project-description grid is-multi-col mostly-2">
              <div className="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, perferendis sit recusandae commodi impedit eaque ipsum optio autem magni, incidunt eius iusto sint nam. Magni, laborum labore. Libero, dolore fugiat.
              </div>
              <div className="project-feature-image bg-brandblue">
                <Img fluid={props.data.festivesaveProfile.childImageSharp.fluid} alt=""/>
              </div>
            </div>

            <div className="wrapper-y will-grow project-description grid is-multi-col mostly-2">
              <div className="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, perferendis sit recusandae commodi impedit eaque ipsum optio autem magni, incidunt eius iusto sint nam. Magni, laborum labore. Libero, dolore fugiat.
              </div>
              <div className="project-feature-image bg-brandblue">
                <Img fluid={props.data.festivesaveHistory.childImageSharp.fluid} alt=""/>
              </div>
            </div>

            <div className="wrapper-y will-grow project-description grid is-multi-col mostly-2">
              <div className="project-feature-image bg-brandblue">
                <Img fluid={props.data.festivesaveHome.childImageSharp.fluid} alt=""/>
              </div>
              <div className="project-feature-image bg-brandblue">
                <Img fluid={props.data.festivesaveAccount.childImageSharp.fluid} alt=""/>
              </div>
            </div>

            <div className="wrapper-y will-grow project-description grid is-multi-col mostly-2">
              <div className="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, perferendis sit recusandae commodi impedit eaque ipsum optio autem magni, incidunt eius iusto sint nam. Magni, laborum labore. Libero, dolore fugiat.
              </div>
              <div className="project-feature-image bg-brandblue">
                <Img fluid={props.data.festivesaveChosen.childImageSharp.fluid} alt=""/>
              </div>
            </div>
            
            <div className="wrapper-y will-grow project-description grid is-multi-col mostly-2">
              <div className="project-feature-image bg-brandblue">
                <Img fluid={props.data.festivesaveOptions.childImageSharp.fluid} alt=""/>
              </div>
              <div className="project-feature-image bg-brandblue">
                <Img fluid={props.data.festivesaveManual.childImageSharp.fluid} alt=""/>
              </div>
            </div>

          </div>
        </section>
      </PageTransition>
    </Layout>
  )
}

export default Festivesave

export const pageQuery = graphql`
  query {
    festivesaveFeatureImage: file(relativePath: { eq: "festivesave-feature-image.png" }) {
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
    festivesaveOnboarding: file(relativePath: { eq: "festivesave-onboarding.png" }) {
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
    festivesaveWallet: file(relativePath: { eq: "festivesave-wallet.png" }) {
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