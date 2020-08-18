import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTransition from 'gatsby-v2-plugin-page-transitions'

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
      <PageTransition>
      <section className="width-100-pc page-padding will-grow">
        <div className="main-wrap mx-auto wrapper-x">
          <h2 className="sectionhead-text tx-c mb-3">
            Say Hello
          </h2>
          <div className="maxwidth-tb mx-auto">
            <p className="mediumtext tx-c">I drink coffee, I eat pizza. I write code and improve my design and skills every day. I am honored to work with special people.</p>
          </div>
        </div>
      </section>
    </PageTransition>
  </Layout>
)

export default Contact
