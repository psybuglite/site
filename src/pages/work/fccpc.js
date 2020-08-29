import React from "react"
// import { Link } from "gatsby"
import Layout from "../../components/layout"
import PageTransition from 'gatsby-v2-plugin-page-transitions'
import fccpc from "../../images/fccpc-feature-image.png"
import fccpcHome from "../../images/fccpc-home.png"
import fccpcAbout from "../../images/fccpc-about.png"
import fccpcReleases from "../../images/fccpc-releases.png"
import fccpcGallery from "../../images/fccpc-gallery.png"
import fccpcPeople from "../../images/fccpc-people.png"
import fccpcHowTo from "../../images/fccpc-how-to.png"

const Fccpc = () => {
  return (
    <Layout>
      <PageTransition>
        <section className="width-100-pc page-padding">
          <div className="maxwidth-xl mx-auto wrapper">
            <div className="project-feature-image mb-2 bg-brandblue desired-height-3rd">
              <img src={fccpc} alt="Swinvoice" />
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
                <img src={fccpcHome} alt=""/>
              </div>
              <div className="project-feature-image bg-brandblue">
                <img src={fccpcAbout} alt=""/>
              </div>
            </div>

            <div className="wrapper-y will-grow project-description">
              <div className="project-feature-image bg-brandblue">
                <img src={fccpcHowTo} alt=""/>
              </div>
            </div>

            <div className="wrapper-y will-grow project-description grid is-multi-col mostly-2">
              <div className="project-feature-image bg-brandblue">
                <img src={fccpcPeople} alt=""/>
              </div>
              <div className="project-feature-image bg-brandblue">
                <img src={fccpcGallery} alt=""/>
              </div>
            </div>

            <div className="wrapper-y will-grow project-description">
              <div className="project-feature-image bg-brandblue">
                <img src={fccpcReleases} alt=""/>
              </div>
            </div>
            
          </div>
        </section>
      </PageTransition>
    </Layout>
  )
}

export default Fccpc