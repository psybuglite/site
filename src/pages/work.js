import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Footer from "../components/footer"

import eyowo from "../images/eyowo.png"
import cpc from "../images/cpc.png"
import monetran from "../images/monetran.png"
import harbor from "../images/harbor.svg"
import swinvoice from "../images/swinvoice.png"
import festivesave from "../images/festivesave.png"




const Work = () => (
  <Layout>
    <SEO title="Work" />

    <section className="width-100-pc hide-flow-x main-top">
      <div className="maxwidth-sl mx-auto wrapper work-top tx-c h-100">
        <div className="grid is-multi-col mostly-3">
          <div className="work-item px-1 py-2">
            <a href="http://eyowo.com">
              <img src={eyowo} className="w-link" alt="Eyowo logo" />
            </a>
            <div className="pt-1 co-richblack tx-l">
              <h3>Eyowo</h3>
              <div>
                <dl className="mb-1">
                  <dt className="fw-bold">Product Category</dt>
                  <dd>Finance and Technology</dd>
                </dl>
                <dl className="mb-1">
                  <dt className="fw-bold">Role</dt>
                  <dd>UI/UX Designer</dd>
                </dl>
                <dl className="mb-1">
                  <dt className="fw-bold">Responsibilities</dt>
                  <dd>User Experience Design</dd>
                  <dd>User Interface Design</dd>
                  <dd>User Interface Development</dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="work-item px-1 py-2">
            <a href="http://cpc.gov.ng">
              <img src={cpc} className="w-link" alt="CPC logo" />
            </a>
            <div className="pt-1 co-richblack tx-l">
              <h3>CPC</h3>
              <div>
                <dl className="mb-1">
                  <dt className="fw-bold">Category</dt>
                  <dd>Government</dd>
                </dl>
                <dl className="mb-1">
                  <dt className="fw-bold">Role</dt>
                  <dd>UI/UX Designer</dd>
                </dl>
                <dl className="mb-1">
                  <dt className="fw-bold">Responsibilities</dt>
                  <dd>User Experience Design</dd>
                  <dd>User Interface Design</dd>
                  <dd>User Interface Development</dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="work-item px-1 py-2">
            <a href="http://">
              <img src={harbor} className="w-link" alt="CPC logo" />
            </a>
            <div className="pt-1 co-richblack tx-l">
              <h3>Harbor Incubator</h3>
              <div>
                <dl className="mb-1">
                  <dt className="fw-bold">Category</dt>
                  <dd>Solutions</dd>
                </dl>
                <dl className="mb-1">
                  <dt className="fw-bold">Role</dt>
                  <dd>UI/UX Designer</dd>
                </dl>
                <dl className="mb-1">
                  <dt className="fw-bold">Responsibilities</dt>
                  <dd>User Experience Design</dd>
                  <dd>User Interface Design</dd>
                  <dd>User Interface Development</dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="work-item px-1 py-2">
            <a href="http://swinvoice.com">
              <img src={swinvoice} className="w-link" alt="SWInvoice logo" />
            </a>
            <div className="pt-1 co-richblack tx-l">
              <h3>SWinvoice</h3>
              <div>
                <dl className="mb-1">
                  <dt className="fw-bold">Category</dt>
                  <dd>Cryptocurrency and Payments</dd>
                </dl>
                <dl className="mb-1">
                  <dt className="fw-bold">Role</dt>
                  <dd>UI/UX Designer</dd>
                </dl>
                <dl className="mb-1">
                  <dt className="fw-bold">Responsibilities</dt>
                  <dd>User Experience Design</dd>
                  <dd>User Interface Design</dd>
                  <dd>User Interface Development</dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="work-item px-1 py-2">
            <a href="http://festivesave.com">
              <img src={festivesave} className="w-link" alt="Festivesave logo" />
            </a>
            <div className="pt-1 co-richblack tx-l">
              <h3>Festivesave</h3>
              <div>
                <dl className="mb-1">
                  <dt className="fw-bold">Category</dt>
                  <dd>Finance and Technology</dd>
                </dl>
                <dl className="mb-1">
                  <dt className="fw-bold">Role</dt>
                  <dd>Product Designer</dd>
                </dl>
                <dl className="mb-1">
                  <dt className="fw-bold">Responsibilities</dt>
                  <dd>User Experience Design</dd>
                  <dd>User Interface Design</dd>
                  <dd>User Interface Development</dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="work-item px-1 py-2">
            <a href="http://monetran.com">
              <img src={monetran} className="w-link" alt="Monetran logo" />
            </a>
            <div className="pt-1 co-richblack tx-l">
              <h3>Monetran</h3>
              <div>
                <dl className="mb-1">
                  <dt className="fw-bold">Category</dt>
                  <dd>Cryptocurrency and Payments</dd>
                </dl>
                <dl className="mb-1">
                  <dt className="fw-bold">Role</dt>
                  <dd>UI/UX Designer</dd>
                </dl>
                <dl className="mb-1">
                  <dt className="fw-bold">Responsibilities</dt>
                  <dd>User Experience Design</dd>
                  <dd>User Interface Design</dd>
                  <dd>User Interface Development</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper-y will-grow">
          <p>
          Note: links are for informational purposes, not necessarily examples of the work performed.
          </p>
        </div>
      </div>
    </section>

    <Footer />

  </Layout>
)

export default Work
