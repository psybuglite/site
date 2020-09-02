import React from "react"
import SEO from "../components/seo"
import { motion, AnimatePresence } from "framer-motion"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <section className="width-100-pc page-padding">
      <div className="clearfix maxwidth-sl wrapper-x desired-height-3qtr d-flx flex-dir-col j-c-c tx-c writing-m-top mx-auto">
        <div className="block-parent">
          <h1>Whoa!!! That was weird.</h1>
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
                top: `-80px`,
                left: `50%`,
                transform: `translateX(-50%)`
              }}
            ></motion.span>
          </AnimatePresence>
        </div>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <br />
        <p>Use the navigation menu to get back to a more useful page.</p>
      </div>
    </section>
  </>
)

export default NotFoundPage
