import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { motion, AnimatePresence } from "framer-motion"
import SEO from "../../components/seo"

const Fluidcoins = (props) => {
  return (
    <>
      <SEO title="Fluidcoins | Projects | Dennis Dickson" />
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
            <div className="wrapper-y   grid is-multi-col mostly-2">
              <div className="">
                <h2 className="largertext mt-0 co-white ff-aquire">
                  Fluidcoins
                </h2>
                <p className="mediumtext co-sweetblue">Crypto Wallet</p>
                <p className="mediumtext">UI/UX Design</p>
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
                <p>
                An easy, fast and reliable way to start both short and long-term Bitcoin investments
                </p>
                <p>
                Automated recurrent purchases mean more cryptocurrency in your portfolio.
                </p>
                <p>
                Sell and buy Bitcoin anytime. Pause automated recurrent cryptocurrency purchases.
                </p>
              </div>
            </div>

            <div className="wrapper-y will-grow grid is-multi-col mostly-2">
              <div className="project-feature-image bg-brandblue">
                <Img fluid={props.data.fluidcoinsOnboarding1.childImageSharp.fluid} alt=""/>
              </div>
              <div className="project-feature-image bg-brandblue">
                <Img fluid={props.data.fluidcoinsOnboarding2.childImageSharp.fluid} alt="" />
              </div>
            </div>

            <div className="maxwidth-tb smalltext">
                <p>Buy Bitcoin instantly or from a round up of your debit transactions </p>
            </div>
            
            <div className="wrapper-y will-grow grid is-multi-col mostly-2">
            <div className="project-feature-image bg-brandblue">
                <Img fluid={props.data.fluidcoinsEmptywallet.childImageSharp.fluid} alt=""/>
              </div>
              <div className="project-feature-image bg-brandblue">
                <Img fluid={props.data.fluidcoinsWallet.childImageSharp.fluid} alt=""/>
              </div>
            </div>

            <div className="wrapper-y will-grow grid is-multi-col mostly-2">
              <div className="project-feature-image bg-brandblue">
                <Img fluid={props.data.fluidcoinsHome.childImageSharp.fluid} alt=""/>
              </div>
              <div className="project-feature-image bg-brandblue">
                <Img fluid={props.data.fluidcoinsAccount.childImageSharp.fluid} alt=""/>
              </div>
            </div>

            <div className="wrapper-y will-grow grid is-multi-col mostly-2">
              <div className="">
              </div>
              <div className="project-feature-image bg-brandblue">
                <Img fluid={props.data.fluidcoinsFingerprint.childImageSharp.fluid} alt=""/>
              </div>
            </div>
            
            <div className="wrapper-y will-grow grid is-multi-col mostly-2">
              <div className="project-feature-image bg-brandblue">
                <Img fluid={props.data.fluidcoinsAuth1.childImageSharp.fluid} alt=""/>
              </div>
              <div className="project-feature-image bg-brandblue">
                <Img fluid={props.data.fluidcoinsAuth2.childImageSharp.fluid} alt=""/>
              </div>
            </div>

            <div className="wrapper-y will-grow grid is-multi-col mostly-2">
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