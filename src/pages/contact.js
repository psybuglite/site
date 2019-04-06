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
          <form name="contact" method="POST" data-netlify="true">
              <p>
                <label>Your Name: 
                  <input type="text" name="name" />
                </label>   
              </p>
              <p>
                <label>Your Email: 
                  <input type="email" name="email" />
                  </label>
              </p>
              <p>
                <label>Your Role: 
                  <select name="role[]" multiple>
                    <option value="leader">Leader</option>
                    <option value="follower">Follower</option>
                  </select>
                </label>
              </p>
              <p>
                <label>Message: 
                  <textarea name="message"></textarea>
                </label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
          </form>
        </div>
      </div>
    </section>

    <Footer />

  </Layout>
)

export default Contact
