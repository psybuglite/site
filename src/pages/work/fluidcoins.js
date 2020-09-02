import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const Fluidcoins = (props) => {
  return (
    <>
        <section className="width-100-pc page-padding">
          <div className="maxwidth-xl mx-auto wrapper">
            <div className="project-feature-image mb-2 bg-brandblue desired-height-3rd">
              <Img 
                imgStyle={{objectFit: 'cover'}}
                style={{height: "100%"}}
                fluid={props.data.fluidcoinsFeatureImage.childImageSharp.fluid} 
                alt=""
              />
            </div>
            <div className="wrapper-y project-description grid is-multi-col mostly-2">
              <div className="">
                <h2 className="largertext mt-0 co-white ff-aquire">
                  fluidcoins
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
                <Img fluid={props.data.fluidcoinsOnboarding1.childImageSharp.fluid} alt=""/>
              </div>
              <div className="project-feature-image bg-brandblue">
                <Img fluid={props.data.fluidcoinsOnboarding2.childImageSharp.fluid} alt="" />
              </div>
            </div>
            
            <div className="wrapper-y will-grow project-description grid is-multi-col mostly-2">
              <div className="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, perferendis sit recusandae commodi impedit eaque ipsum optio autem magni, incidunt eius iusto sint nam. Magni, laborum labore. Libero, dolore fugiat.
              </div>
              <div className="project-feature-image bg-brandblue">
                <Img fluid={props.data.fluidcoinsWallet.childImageSharp.fluid} alt=""/>
              </div>
            </div>

            <div className="wrapper-y will-grow project-description grid is-multi-col mostly-2">
              <div className="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, perferendis sit recusandae commodi impedit eaque ipsum optio autem magni, incidunt eius iusto sint nam. Magni, laborum labore. Libero, dolore fugiat.
              </div>
              <div className="project-feature-image bg-brandblue">
                <Img fluid={props.data.fluidcoinsEmptywallet.childImageSharp.fluid} alt=""/>
              </div>
            </div>

            <div className="wrapper-y will-grow project-description grid is-multi-col mostly-2">
              <div className="project-feature-image bg-brandblue">
                <Img fluid={props.data.fluidcoinsHome.childImageSharp.fluid} alt=""/>
              </div>
              <div className="project-feature-image bg-brandblue">
                <Img fluid={props.data.fluidcoinsAccount.childImageSharp.fluid} alt=""/>
              </div>
            </div>

            <div className="wrapper-y will-grow project-description grid is-multi-col mostly-2">
              <div className="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, perferendis sit recusandae commodi impedit eaque ipsum optio autem magni, incidunt eius iusto sint nam. Magni, laborum labore. Libero, dolore fugiat.
              </div>
              <div className="project-feature-image bg-brandblue">
                <Img fluid={props.data.fluidcoinsFingerprint.childImageSharp.fluid} alt=""/>
              </div>
            </div>
            
            <div className="wrapper-y will-grow project-description grid is-multi-col mostly-2">
              <div className="project-feature-image bg-brandblue">
                <Img fluid={props.data.fluidcoinsAuth1.childImageSharp.fluid} alt=""/>
              </div>
              <div className="project-feature-image bg-brandblue">
                <Img fluid={props.data.fluidcoinsAuth2.childImageSharp.fluid} alt=""/>
              </div>
            </div>

            <div className="wrapper-y will-grow project-description grid is-multi-col mostly-2">
              <div className="project-feature-image bg-brandblue">
                <Img fluid={props.data.fluidcoinsAddress.childImageSharp.fluid} alt=""/>
              </div>
              <div className="project-feature-image bg-brandblue">
                <Img fluid={props.data.fluidcoinsLogin.childImageSharp.fluid} alt=""/>
              </div>
            </div>

          </div>
        </section>
    </>
  )
}

export default Fluidcoins

export const pageQuery = graphql`
  query {
    fluidcoinsFeatureImage: file(relativePath: { eq: "fluidcoins-feature-image.png" }) {
      childImageSharp {
        fluid(maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fluidcoinsHome: file(relativePath: { eq: "fluidcoins-home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fluidcoinsOnboarding1: file(relativePath: { eq: "fluidcoins-onboarding-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fluidcoinsOnboarding2: file(relativePath: { eq: "fluidcoins-onboarding-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fluidcoinsLogin: file(relativePath: { eq: "fluidcoins-login.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fluidcoinsFingerprint: file(relativePath: { eq: "fluidcoins-fingerprint.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fluidcoinsEmptywallet: file(relativePath: { eq: "fluidcoins-empty-wallet.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fluidcoinsAuth1: file(relativePath: { eq: "fluidcoins-auth-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fluidcoinsAuth2: file(relativePath: { eq: "fluidcoins-auth-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fluidcoinsWallet: file(relativePath: { eq: "fluidcoins-wallet.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fluidcoinsAddress: file(relativePath: { eq: "fluidcoins-address.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fluidcoinsAccount: file(relativePath: { eq: "fluidcoins-account.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`