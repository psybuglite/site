import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const Payflow = props => {
  return (
    <>
      <section className="width-100-pc page-padding">
        <div className="maxwidth-xl mx-auto wrapper">
          <div className="project-feature-image mb-2 bg-brandblue desired-height-3rd">
            <Img
              imgStyle={{ objectFit: "cover" }}
              style={{ height: "100%" }}
              fluid={props.data.payflowFeatureImage.childImageSharp.fluid}
              alt=""
            />
          </div>
          <div className="wrapper-y project-description grid is-multi-col mostly-2">
            <div className="">
              <h2 className="largertext mt-0 co-white ff-aquire">Payflow</h2>
              <p className="mediumtext co-primary">FinTech</p>
              <p className="mediumtext">Mobile App Design</p>
            </div>
            <div>
              <p>
                Vitae sed tellus ipsum at pulvinar risus. Turpis tellus,
                adipiscing sit vitae risus, elementum facilisi urna. Amet ut at
                nisi cursus enim at interdum. Tristique vitae quis faucibus
                congue. Velit in nunc, imperdiet interdum id. Pellentesque
                cursus malesuada tellus purus suspendisse at. Nec, at porttitor
                quis netus vitae risus convallis sit. Nibh faucibus vitae in
                phasellus sed integer. Quam eu libero neque, lobortis lectus
                habitant adipiscing nulla. Vivamus scelerisque vitae massa nisi.
                Habitant rhoncus praesent integer egestas. Nunc, feugiat tempor
                nulla est hac et, egestas non. Pulvinar vulputate volutpat nam
                donec dictum lacus molestie quis. Libero convallis amet,
                molestie ac suscipit in eget. Cras curabitur nibh tellus eu
                pretium dictum.
              </p>
            </div>
          </div>

          <div className="wrapper-y will-grow project-description grid is-multi-col mostly-2">
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

          <div className="wrapper-y will-grow project-description grid is-multi-col mostly-2">
            <div className="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
              perferendis sit recusandae commodi impedit eaque ipsum optio autem
              magni, incidunt eius iusto sint nam. Magni, laborum labore.
              Libero, dolore fugiat.
            </div>
            <div className="project-feature-image bg-brandblue">
              <Img
                fluid={props.data.payflowNumber.childImageSharp.fluid}
                alt=""
              />
            </div>
          </div>

          <div className="wrapper-y will-grow project-description grid is-multi-col mostly-2">
            <div className="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
              perferendis sit recusandae commodi impedit eaque ipsum optio autem
              magni, incidunt eius iusto sint nam. Magni, laborum labore.
              Libero, dolore fugiat.
            </div>
            <div className="project-feature-image bg-brandblue">
              <Img
                fluid={props.data.payflowEarn.childImageSharp.fluid}
                alt=""
              />
            </div>
          </div>

          <div className="wrapper-y will-grow project-description grid is-multi-col mostly-2">
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

          <div className="wrapper-y will-grow project-description grid is-multi-col mostly-2">
            <div className="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
              perferendis sit recusandae commodi impedit eaque ipsum optio autem
              magni, incidunt eius iusto sint nam. Magni, laborum labore.
              Libero, dolore fugiat.
            </div>
            <div className="project-feature-image bg-brandblue">
              <Img
                fluid={props.data.payflowLearn.childImageSharp.fluid}
                alt=""
              />
            </div>
          </div>

          <div className="wrapper-y will-grow project-description grid is-multi-col mostly-2">
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

          <div className="wrapper-y will-grow project-description grid is-multi-col mostly-2">
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

export default Payflow

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
