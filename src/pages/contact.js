import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Footer from "../components/footer"


const Contact = () => (
  <Layout>
    <SEO title="Contact" />

    <section className="width-100-pc hide-flow-x main-top">
      <div className="maxwidth-sl mx-auto clearfix work-top tx-c h-100">
        <div className="wrapper right-50">
          
        </div>
        <div className="wrapper left-50">
          <p>
            Thanks for your interest! Please fill out this form and I’ll get back to you as quickly as I can. I usually take 3-4 days to reply. :)
          </p>
          <p>
            Please note: Although I read every email, I don’t have the capacity to respond to everyone. I’ll only reply if your email aligns with my goals and acknowledge my time and capabilities.
          </p>
        </div>
      </div>
    </section>

    <Footer />

  </Layout>
)

export default Contact
