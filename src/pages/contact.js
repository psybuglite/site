import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Footer from "../components/footer"


const Contact = () => (
  <Layout>
    <SEO title="Contact" />

    <section className="width-100-pc hide-flow-x main-top">
      <div className="maxwidth-sl mx-auto clearfix work-top h-100">
        <div className="wrapper right-50">
          <p>
            Thanks for your interest! Please fill out this form and I’ll get back to you as quickly as I can. I usually take 3-4 days to reply. :)
          </p>
          <p>
            Please note: Although I read every email, I don’t have the capacity to respond to everyone. I’ll only reply if your email aligns with my goals and acknowledge my time and capabilities.
          </p>
        </div>
        <div className="wrapper left-50">
          <h2 className="m-0">Contact</h2>
          <form name="contact"  method="POST" action="https://formspree.io/itztonye@gmail.com" data-netlify="true">
                <label>Your Name: 
                  <input type="text" name="name" />
                </label>
                <label>Your Email: 
                  <input type="email" name="email" />
                </label>
                <label>Enquiry 
                  <select name="">
                    <option value="leader">-- Choose type of Enquiry --</option>
                    <option value="follower">Consultation</option>
                    <option value="follower">Design</option>
                    <option value="follower">Development</option>
                    <option value="follower">Event talk</option>
                    <option value="follower">Other (or just saying hello.)</option>
                  </select>
                </label>
                <label>Message: 
                  <textarea name="message"></textarea>
                </label>
              <div className="d-flx j-c-fe pt-1">
                <button type="submit" className="bg-primary d-ibl thin-primary-border px-2 py-hh co-white">
                    Send
                </button>
              </div>
          </form>
        </div>
      </div>
    </section>

    <Footer />

  </Layout>
)

export default Contact
