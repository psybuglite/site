import React from "react"
import SEO from "../components/seo"
import { motion, AnimatePresence } from "framer-motion"

const About = () => (
  <>
    <SEO title="About" />
    <section className="width-100-pc page-padding will-grow">
      <div className="main-wrap mx-auto wrapper about-grid">
        <div className="about-image"></div>
        <div className="about-content block-parent mediumtext">
          <AnimatePresence>
            <motion.span
              layoutId="block"
              layout
              className="blue-block"
              style={{
                position: `absolute`,
                display: `inline-block`,
                backgroundColor: `#0F52BA`,
                height: `50px`,
                width: `50px`,
                top: `0px`,
                left: `0px`,
              }}
            ></motion.span>
          </AnimatePresence>
          <p>
            I’m a design-minded front-end developer. Sometimes people who do
            what I do are also called front-end designers, UI developers, UI
            engineers, or design engineers.
          </p>
          <p>
            As a [choose one of the above titles], I work on the front-end of
            the front-end. That is, my work lies at the intersection of design
            and back-end.
          </p>
          <p>
            I collaborate with designers — preferrably in the design phase — to
            translate designs into live UIs and functional prototypes. As a
            design engineer, I provide feedback to designers to ensure that the
            design translates well to the browser, ensuring usability of the
            product by as many people as possible, regardless of their context
            and how they use it (screen readers, mobile phones, various
            browsers, etc.)
          </p>
        </div>
      </div>
    </section>
  </>
)

export default About
