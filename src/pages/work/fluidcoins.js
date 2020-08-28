import React from "react"
// import { Link } from "gatsby"
import Layout from "../../components/layout"
import PageTransition from 'gatsby-v2-plugin-page-transitions'
import fluidcoins from "../../images/fluidcoins-feature-image.png"

const Fluidcoins = () => {
  return (
    <Layout>
      <PageTransition>
        <section className="width-100-pc page-padding">
          <div className="maxwidth-xl mx-auto wrapper">
            <div className="project-feature-image mb-2 bg-brandblue desired-height-3rd">
              <img src={fluidcoins} alt="Swinvoice" />
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
              <div className="project-feature-image bg-brandblue desired-height-3rd">
              </div>
              <div className="project-feature-image bg-brandblue desired-height-3rd">
              </div>
            </div>
            <div className="wrapper-y will-grow project-description">
              <div className="project-feature-image bg-brandblue desired-height-3rd">
              </div>
            </div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  )
}

export default Fluidcoins