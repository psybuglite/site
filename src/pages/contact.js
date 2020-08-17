import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTransition from 'gatsby-v2-plugin-page-transitions'

const Contact = () => (
  <PageTransition>
    <Layout>
      <SEO title="Contact" />
      <section className="width-100-pc page-padding will-grow">
        <div className="main-wrap mx-auto wrapper-x">
          <h2 className="sectionhead-text tx-c mb-3">
            Say Hello
          </h2>
          <div className="maxwidth-tb mx-auto">
            <p className="mediumtext tx-c">I’m friendly and I’ll love to have a conversation with you. i’m somewhere on the web doing something right now. I’m either working with a repository on Github, replying a tweet on Twitter,  or  You can find me quickly or see what I’m up to if you click one of of the links below. if you want to send me an email at itztonye@gmail.com, etc.)</p>
          </div>
        </div>
      </section>
    </Layout>
  </PageTransition>
)

export default Contact
