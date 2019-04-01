import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"

import photo from "../images/pic.jpg"


const About = () => (
  <Layout>
    <SEO title="About | Dennis Dickson | Frontend Designer and Developer." />
    <section className="width-100-pc hide-flow-x main-top">
        <div className="wrapper grid-2 maxwidth-sl writing-m-top mx-auto">
          <div className="p-1 d-flx flex-dir-col j-c-c al-i-c pos-r mb-2 min-h-80">
            <div className="absolute-middle">
              <h2 className="d-ibl bg-branddark bigtext1 co-comp py-h px-5 mb-hh">
                Designer
              </h2>
              <h2 className="d-ibl bg-comp co-richblack bigtext2 py-h px-6 mt-0">
                Developer
              </h2>
            </div>
          </div>
          <div>
            <h3 className="mb-h">Core</h3>
            <p>I have a keen interest in interface design, web interface development and user experience design.</p>
            <h3 className="mb-h">Design &amp; Development</h3>
            <p>I make use of a variety of tools and software to bring better experiences to people one the web. This touches how people use the web everyday, with careful thought given to accessiblity and usability of digital web products.</p>
          </div>
        </div>
        <div className="clearfix maxwidth-sl mx-auto">
          <div className="right-50 wrapper">
            <img src={photo} className="w-100 about-height" alt="Dennis Dickson" />
          </div>
          <div className="left-50 wrapper">
            <p>
              I’m Tonye – a product designer, developer, and a design advocate.
            </p>
            <p>
              It was shortly after I started working with a company a few years ago, when I discovered that there was something lacking in how digital products were being designed, developed, and deployed. Of course, I tried to fix what I could but realized I needed to do more to change a lot. That was when I started making the web better one product at a time.
            </p>
            <p>
              In 2018, I started publishing my ideas publicly, writing independently, creating content for my blog, and contributing to the design and development community.
            </p>
            <p>
              Sometimes, when I'm asked why I do what I so, I give a simple answer: I wish to uphold web standards and make content on the internet more accessible to everyone.
            </p>
            <p>
              Because, really, the internet shouldn't be a messy place to navigate around.
            </p>
          </div>
        </div>
      </section>

      <Footer />
  </Layout>
)

export default About
