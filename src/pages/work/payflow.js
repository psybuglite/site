import React from "react"
// import { Link } from "gatsby"
import Layout from "../../components/layout"
import PageTransition from 'gatsby-v2-plugin-page-transitions'
import payflow from "../../images/payflow-feature-image.png"
import payflowOnboarding from "../../images/payflow-onboarding.png"
import payflowHome from "../../images/payflow-home.png"
import payflowEarn from "../../images/payflow-earn.png"
import payflowLearn from "../../images/payflow-learn.png"
import payflowSave1 from "../../images/payflow-save-1.png"
import payflowSave2 from "../../images/payflow-save-2.png"
import payflowProsper1 from "../../images/payflow-prosper-1.png"
import payflowProsper2 from "../../images/payflow-prosper-2.png"
import payflowNumber from "../../images/payflow-number.png"
import payflowHistory from "../../images/payflow-history.png"
import payflowProfile from "../../images/payflow-profile.png"

const Payflow = () => {
  return (
    <Layout>
      <PageTransition>
        <section className="width-100-pc page-padding">
          <div className="maxwidth-xl mx-auto wrapper">
            <div className="project-feature-image mb-2 bg-brandblue desired-height-3rd">
              <img src={payflow} alt="Payflow Design" />
            </div>
            <div className="wrapper-y project-description grid is-multi-col mostly-2">
              <div className="">
                <h2 className="largertext mt-0 co-white ff-aquire">
                  Payflow
                </h2>
                <p className="mediumtext co-primary">FinTech</p>
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
                <img src={payflowOnboarding} alt=""/>
              </div>
              <div className="project-feature-image bg-brandblue">
                <img src={payflowHome} alt=""/>
              </div>
            </div>
            
            <div className="wrapper-y will-grow project-description grid is-multi-col mostly-2">
              <div className="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, perferendis sit recusandae commodi impedit eaque ipsum optio autem magni, incidunt eius iusto sint nam. Magni, laborum labore. Libero, dolore fugiat.
              </div>
              <div className="project-feature-image bg-brandblue">
                <img src={payflowNumber} alt=""/>
              </div>
            </div>

            <div className="wrapper-y will-grow project-description grid is-multi-col mostly-2">
              <div className="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, perferendis sit recusandae commodi impedit eaque ipsum optio autem magni, incidunt eius iusto sint nam. Magni, laborum labore. Libero, dolore fugiat.
              </div>
              <div className="project-feature-image bg-brandblue">
                <img src={payflowEarn} alt=""/>
              </div>
            </div>

            <div className="wrapper-y will-grow project-description grid is-multi-col mostly-2">
              <div className="project-feature-image bg-brandblue">
                <img src={payflowSave1} alt=""/>
              </div>
              <div className="project-feature-image bg-brandblue">
                <img src={payflowSave2} alt=""/>
              </div>
            </div>

            <div className="wrapper-y will-grow project-description grid is-multi-col mostly-2">
              <div className="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, perferendis sit recusandae commodi impedit eaque ipsum optio autem magni, incidunt eius iusto sint nam. Magni, laborum labore. Libero, dolore fugiat.
              </div>
              <div className="project-feature-image bg-brandblue">
                <img src={payflowLearn} alt=""/>
              </div>
            </div>
            
            <div className="wrapper-y will-grow project-description grid is-multi-col mostly-2">
              <div className="project-feature-image bg-brandblue">
                <img src={payflowProsper1} alt=""/>
              </div>
              <div className="project-feature-image bg-brandblue">
                <img src={payflowProsper2} alt=""/>
              </div>
            </div>

            <div className="wrapper-y will-grow project-description grid is-multi-col mostly-2">
              <div className="project-feature-image bg-brandblue">
                <img src={payflowProfile} alt=""/>
              </div>
              <div className="project-feature-image bg-brandblue">
                <img src={payflowHistory} alt=""/>
              </div>
            </div>

          </div>
        </section>
      </PageTransition>
    </Layout>
  )
}

export default Payflow