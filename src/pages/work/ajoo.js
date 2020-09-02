import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const Ajoo = (props) => {
  return (
    <>
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
              <p className="mediumtext">Website and Web App Design</p>
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